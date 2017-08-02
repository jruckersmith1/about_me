alert( 'Greetings!' );
var alias = prompt( 'what is your name?' );
console.log( 'hello!' );

alert( 'hi there ' + alias + '! Nice to meet you' );
var warpSpeed = confirm( 'Are you cabale of warp speed?');
if ( warpSpeed ) {

  var warpSpeed = prompt ( 'Do you like flying saucers or WAR BIRDS?').toUpperCase();
} else {
  var warpSpeed = prompt ( 'Oh, that\'s too bad! Do you like flying saucers or WAR BIRDS?').toUpperCase();
}
//'war birds' === 'WAR BIRDS'
if ( warpSpeed === 'WAR BIRDS' )

  var homePlanet = confirm( 'Are you from the Klingon Empire?' );

if ( homePlanet ) {
  var favSpecies = prompt( 'What species is your favorite?' ).toLowerCase();

  // 'Vulcan' === 'vulcan'
  if ( favSpecies === 'vulcan' ) {
    alert( 'mine, too!' ); 
  } else {
    alert( favSpecies + ' are you serious?!' );
  }
}

var trekChar = [ 'picard', 'spock', 'worf', 'data', ];

do {

  var guess = prompt( 'Which Star Trek character am I thinking about?').toLowerCase();
  console.log( guess, trekChar[0]);
} while ( guess !== trekChar[0]);

for ( var i = 0; i < 4; i++ ) {
  var citiesLivedIn = parseInt(prompt ( 'How many cities have I lived in?' ));
  console.log( ' The numnber of cities lived in is: ' + citiesLivedIn );

  if (citiesLivedIn > 13) {
    alert( 'too high!');
  } else if (citiesLivedIn < 13) {
    alert( 'not enough!');  
  } else if (citiesLivedIn === 13) {
    alert( 'exactly! Good job!');
    break;
  } else { 
    alert( 'enter a number' ); 
  }

}
