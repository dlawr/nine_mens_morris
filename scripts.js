board = {
  turn: '',
  action: 'place', //place capture select move
  verticies: []
  }


function Vertex(index) {
  this.index = index;
  this.color = 'blank';
  this.edge = [];
}

function testEdge(arr) {
  for (var i = 0; i < arr.length; i++) {
    var match = false;
    if (arr[i][0].color != 'blank') {
      match = true;
      var current = arr[i][0].color;
      for (var j = 0; j < arr.length; j++) {
        if (current != arr[i][j].color) {
          match = false;
        }
      }
    }
  }
  return match;
}

function createVerticies() {
  for (var i = 0; i < 24; i++) {
    board.verticies.push(new Vertex(i)); //game does not use position of vertex in array only edge and adjascent stored within vertex
  }
  // board.verticies[0].edge.push([board.verticies[0], board.verticies[1], board.verticies[2]]);
  // board.verticies[0].edge.push([board.verticies[0], board.verticies[7], board.verticies[6]]);
  // board.verticies[1].edge.push([board.verticies[0], board.verticies[1], board.verticies[2]]);

  for (var i = 0; i < 24; i++) {
    if (i % 8 === 0) {
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+1], board.verticies[i+2]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+7], board.verticies[i+6]]);
    } else if (i % 8 === 7) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i-7]]);
      board.verticies[i].edge.push([board.verticies[7], board.verticies[15], board.verticies[23]]);
    } else if (i % 2 === 0) {
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+1], board.verticies[i+2]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i-1], board.verticies[i-2]]);
    } else if (i < 7) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i+1]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+8], board.verticies[i+16]]);
    } else if (i < 15) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i+1]]);
      board.verticies[i].edge.push([board.verticies[i-8], board.verticies[i], board.verticies[i+8]]);
    } else {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i+1]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i-8], board.verticies[i-16]]);
    }
  }
}
