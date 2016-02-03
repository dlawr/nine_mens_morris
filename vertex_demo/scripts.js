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

function addClickEvent($node, fn) {
  $node.on('click', fn);
}

function removeClickEvent($node) {

}

function makeBlack($node) {
  $node.color = 'black';
  $node.attr('color', 'black');
}

function makeWhite($node) {
  $node.color = 'white';
  $($node).css( "color", "red" );
}

function makeBlank($node) {
  $node.color = 'blank';
  $node.attr('color', 'black');
}

var vertex1 = new Vertex();
var vertex2 = new Vertex();
var vertex3 = new Vertex();

vertex1.edge.push([vertex1, vertex2, vertex3]);
vertex2.edge.push([vertex1, vertex2, vertex3]);
vertex3.edge.push([vertex1, vertex2, vertex3]);

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

$( "#two" ).on( "mouseover", function() {
  $( "#two" ).css( "color", "red" );
});
