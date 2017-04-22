import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'
import {Players, calcualtePlayerPosition} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    //console.log('Players list', Players.find().fetch());
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayer = calcualtePlayerPosition(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayer}/>, document.getElementById('app'));
  });
});
