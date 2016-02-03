vertex1 = {
  id: $('#one'),
  color: 'blank', //blank black white
  adjacent: [vertex2],
  edge: [vertex1, vertex2, vertex3]
}

vertex2 = {
  id: $('#two'),
  color: 'blank',
  adjacent: [vertex1, vertex3],
  edge: [vertex1, vertex2, vertex3]
}

vertex3 = {
  id: $('#three'),
  color: 'blank',
  adjacent: [vertex2],
  edge: [vertex1, vertex2, vertex3]
}

board = {
  turn: '',
  action: 'place', //place capture select move

  edge: [vertex1, vertex2, vertex3]
}

function testEdge(arr) {
  var match = false;
  if (arr[0] != 'blank') {
    match = true;
    var current = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (current != arr[i]) {
        match = false;
      }
    }
  }
  return match;
}

function addClickEvent(node) {

}

function removeClickEvent(node) {

}

console.log(edgeTest(vertex3.edge));

vertex1.color = 'black';
vertex2.color = 'black';
vertex3.color = 'black';

console.log(edgeTest(vertex3.edge));
