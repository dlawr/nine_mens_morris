var board = {
  player: 'player1',
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
    board.verticies.push(new Vertex(i)); //game does not use position of vertex in array only edge and adjacent stored within vertex
  }

  for (var i = 0; i < board.verticies.length; i++) {
    if (i % 8 === 0) {
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+1], board.verticies[i+2]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+7], board.verticies[i+6]]);
      board.verticies[i].adjacent = [board.verticies[i+7], board.verticies[i+1]];
    } else if (i === 7) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i-7]]);
      board.verticies[i].edge.push([board.verticies[7], board.verticies[15], board.verticies[23]]);
      board.verticies[i].adjacent = [board.verticies[i-7], board.verticies[i-1], board.verticies[i+8]];
    } else if (i === 15) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i-7]]);
      board.verticies[i].edge.push([board.verticies[7], board.verticies[15], board.verticies[23]]);
      board.verticies[i].adjacent = [board.verticies[i-7], board.verticies[i-1], board.verticies[i+8], board.verticies[i-8]];
    } else if (i === 23) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i-7]]);
      board.verticies[i].edge.push([board.verticies[7], board.verticies[15], board.verticies[23]]);
      board.verticies[i].adjacent = [board.verticies[i-7], board.verticies[i-1], board.verticies[i-8]];
    } else if (i % 2 === 0) {
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+1], board.verticies[i+2]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i-1], board.verticies[i-2]]);
      board.verticies[i].adjacent = [board.verticies[i-1], board.verticies[i+1]];
    } else if (i < 7) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i+1]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+8], board.verticies[i+16]]);
      board.verticies[i].adjacent = [board.verticies[i-1], board.verticies[i+1], board.verticies[i+8]];
    } else if (i < 15) {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i+1]]);
      board.verticies[i].edge.push([board.verticies[i-8], board.verticies[i], board.verticies[i+8]]);
      board.verticies[i].adjacent = [board.verticies[i-1], board.verticies[i+1], board.verticies[i-8], board.verticies[i+8]];
    } else {
      board.verticies[i].edge.push([board.verticies[i-1], board.verticies[i], board.verticies[i+1]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i-8], board.verticies[i-16]]);
      board.verticies[i].adjacent = [board.verticies[i-1], board.verticies[i+1], board.verticies[i-8]];
    }
  }

}

function assignVerticies() {
  for (var i = 0; i < board.verticies.length; i++) {
    var id = '';
    id = '#vertex' + i;
    board.verticies[i].id = $( id );
  }
}

function setClickEvents() {
  for (var i = 0; i < board.verticies.length; i++) {
    board.verticies[i].id.on('click', function (event) {
      console.log(event.target);
      return event.target;
    });
  }

}

function clickEventTest(fn) {
  for (var i = 0; i < board.verticies.length; i++) {
    board.verticies[i].id.on('click', function (event) {
      $( event.target ).addClass('selected');
    });
  }
}

function adjacentClickTest() {
  for (var i = 0; i < board.verticies.length; i++) {
    board.verticies[i].id.on('click', function (event) {
      var index = $( event.target ).attr('id');
      console.log(index);
      index = index.toString();
      console.log(index);
      if (index.length === 7){
        index = index[6];
      } else {
        index = index[6] + index[7];
      }
      console.log(index);
      index = parseInt(index);
      console.log(board.verticies[index].adjacent)  ;
      for (var j = 0; j < board.verticies[index].adjacent.length; j++) {
        board.verticies[index].adjacent[j].id.addClass('selected');

      }
    });
  }
}

function turn() {
  switch (board.action) {
    case 'place':

      break;
    case 'capture':

      break;
    case 'select':

      break;
    case 'move':

      break;
    default:
      break;
  }
}

function place() {

}

function setUp() {
  createVerticies();
  assignVerticies();
  setClickEvents();
}

setUp();
