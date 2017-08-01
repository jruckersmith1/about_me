alert( 'hello!' );
var alias = prompt( 'what is your name?' );
console.log( 'hello!' );

alert( 'hi there ' + alias + '! Nice to meet you' );
var playsGames = confirm( 'do you like to play games?' );

if ( playsGames ) {
  var favGame = prompt( 'what is your favorite game?' ).toLowerCase();

  // "Uno" === "uno"
  if ( favGame === 'uno' ) {
    alert( 'me, too!' );
  } else {
    alert( favGame + ' sounds like fun!' );
  }
}