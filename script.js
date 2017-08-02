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