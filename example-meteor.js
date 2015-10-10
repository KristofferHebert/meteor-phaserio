if (Meteor.isClient) {
  Template.game.helpers(
      // game is a global var from /client/games/breakout.js
  )
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  })
}
