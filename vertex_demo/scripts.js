// vertex1 = {
//   id: $('#one'),
//   color: 'blank', //blank black white
//   adjacent: [vertex2],
//   edge: [vertex1, vertex2, vertex3]
// }
//
// vertex2 = {
//   id: $('#two'),
//   color: 'blank',
//   adjacent: [vertex1, vertex3],
//   edge: [vertex1, vertex2, vertex3]
// }
//
// vertex3 = {
//   id: $('#three'),
//   color: 'blank',
//   adjacent: [vertex2],
//   edge: [vertex1, vertex2, vertex3]
// }

board = {
  turn: '',
  action: 'place', //place capture select move

  // edge: [vertex1, vertex2, vertex3]
}

function Vertex() {
  this.color = 'blank';

}

function testEdge(arr) {
  var match = false;
  if (arr[0].color != 'blank') {
    match = true;
    var current = arr[0].color;
    for (var i = 0; i < arr.length; i++) {
      if (current != arr[i].color) {
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

var vertex1 = new Vertex();
var vertex2 = new Vertex();
var vertex3 = new Vertex();

vertex1.edge = [vertex1, vertex2, vertex3];
vertex2.edge = [vertex1, vertex2, vertex3];
vertex3.edge = [vertex1, vertex2, vertex3];

vertex1.adjacent = [vertex2];
vertex2.adjacent = [vertex1, vertex3];
vertex3.adjacent = [vertex2];

vertex1.id = $('#one');
vertex2.id = $('#two');
vertex3.id = $('#three');


console.log(testEdge(vertex3.edge));

vertex1.color = 'black';
vertex2.color = 'black';
vertex3.color = 'black';


console.log(vertex3.edge);
console.log(testEdge(vertex3.edge));

console.log(vertex3);
