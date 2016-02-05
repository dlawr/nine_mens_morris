var board = {
  player: 'player1',
  action: 'place', //place capture select move
  player1: [1,0],
  player2: [1,0],
  verticies: [],
  update: function() {
    for (var i = 0; i < board.verticies.length; i++) {
      if (board.verticies[i].owner === 'free') {
        board.verticies[i].id.removeClass('player1 player2 free');
        board.verticies[i].id.addClass('free');
      } else if (board.verticies[i].owner === 'player1') {
        board.verticies[i].id.removeClass('player1 player2 free');
        board.verticies[i].id.addClass('player1');
      } else if (board.verticies[i].owner === 'player2') {
        board.verticies[i].id.removeClass('player1 player2 free');
        board.verticies[i].id.addClass('player2');
      }
    }
  },
  switchPlayer: function() {
    if (board.player === 'player1') {
      board.player = 'player2';
      console.log('thing one');
    } else {
      board.player = 'player1';
      console.log('thing two');
    }
  }
};


function Vertex(index) {
  this.index = index;
  this.owner = 'free';
  this.edge = [];
}

function testEdge(arr) {
  var match = false;
  for (var i = 0; i < arr.length; i++) {
    // if (arr[i][0].owner != 'free') {
    //   // match = true;
    //   console.log('one');
      if ((arr[i][0].owner === arr[i][1].owner) && (arr[i][0].owner === arr[i][2].owner)) {
        if (arr[i][0].owner != 'free') {
          match = true;
          console.log('two');
        }
      }
      // var current = arr[i][0].owner;
      // for (var j = 0; j < arr.length; j++) {
      //   if (current != arr[i][j].owner) {
      //     match = false;
      //   }
      // }
    // }
  }
  console.log(arr);
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
    } else if (i % 8 === 6) {
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i+1], board.verticies[i-6]]);
      board.verticies[i].edge.push([board.verticies[i], board.verticies[i-1], board.verticies[i-2]]);
      board.verticies[i].adjacent = [board.verticies[i-1], board.verticies[i+1]];
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

// function setClickEvents() {
//   for (var i = 0; i < board.verticies.length; i++) {
//     board.verticies[i].id.on('click', function (event) {
//       console.log(event.target);
//       return event.target;
//     });
//   }
//
// }

function getObjIndexFromNode(node) {
  var index = $( node ).attr('id');
  index = index.toString();
  if (index.length === 7){
    index = index[6];
  } else {
    index = index[6] + index[7];
  }
  index = parseInt(index);
  return index;
}

function clickEventTest() {
  board.clicks = $('.free').on('click', function (event) {
    $( event.target ).addClass('player1');

  });
  // for (var i = 0; i < board.verticies.length; i++) {
  // }
}

function removeClicks() {
  console.log(board.clicks);
  $('.free').off('click');
  // for (var i = 0; i < board.verticies.length; i++) {
  // }
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
  console.log('turn');
  switch (board.action) {
    case 'place':
      place();
      break;
    case 'capture':
      capture();
      break;
    // case 'select':
    //
    //   break;
    case 'move':
      move();
      break;
    default:
      break;
  }
}

function place() {
  if(board[board.player][0] > 0){
    $('.free').on('click', function(event) {
      $( event.target ).removeClass('free');
      $( event.target ).addClass(board.player);
      var current = getObjIndexFromNode(event.target);
      board.verticies[current].owner = board.player;
      board[board.player][0] -= 1;
      console.log(board[board.player][0]);
      $( '.vertex' ).off('click');
      if (testEdge(board.verticies[current].edge)) {
        console.log('goodby');
        board.action = 'capture';
        turn();
      } else {
        console.log('hello');
        board.switchPlayer();
        turn();
      }
    });
  } else {
    board.action = 'move';
    turn();
  }
}

function capture() {
  console.log('capture');
  var victim = '';
  if (board.player === 'player1') {
    victim = '.player2';
  } else {
    victim = '.player1';
  }
  console.log(victim);
  $(victim).on('click', function(event){
    var victim = '';
    if (board.player === 'player1') {
      victim = 'player2';
    } else {
      victim = 'player1';
    }
    $(event.target).removeClass(victim);
    $(event.target).addClass('free');
    $('.vertex').off('click');
    var current = getObjIndexFromNode(event.target);
    board.verticies[current].owner = 'free';
    board.action = 'place';
    board.switchPlayer();
    turn();
  });
}

function move() {
  console.log('move');
  // $('.' + board.player).on('click', function(event){
  //   console.log('hi');
  // });
  $('.' + board.player).on('click', function(event){
    console.log('select');
    $(event.target).removeClass(board.player);
    $(event.target).addClass('selected');
    var current = getObjIndexFromNode(event.target);
    board.verticies[current].owner = 'free';
    console.log(current);
    for (var i = 0; i < board.verticies[current].adjacent.length; i++) {
      if (board.verticies[current].adjacent[i].owner === 'free') {
        board.verticies[current].adjacent[i].id.addClass('adjacent');
      }
    }
    $('.vertex').off('click');
    $('.adjacent').on('click', function(event){
      console.log('move');
      var previous = $('.selected');
      previous.removeClass('selected');
      previous.addClass('free');
      var newPosition = getObjIndexFromNode(event.target);
      $(event.target).removeClass('free');
      $(event.target).addClass(board.player);
      $('.vertex').off('click');
      if (testEdge(board.verticies[newPosition].edge)) {
        capture();
      } else {
        board.switchPlayer();
        board.action = 'place';
        turn();
      }
    });
  });
}

function setUp() {
  createVerticies();
  assignVerticies();
  board.update();
  for (var i = 0; i < board.verticies.length; i++) {
    board.verticies[i].id.addClass('vertex');
  }
  // setClickEvents();
}

setUp();
