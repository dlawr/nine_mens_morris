function Vertex() {
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
