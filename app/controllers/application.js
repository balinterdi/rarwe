import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

var blackDog = Song.create({
  title: 'Black God',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

var SongCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties')
});

var songs = SongCollection.create();
songs.get('content').pushObject(blackDog);
songs.get('content').pushObject(yellowLedbetter);
songs.get('content').pushObject(pretender);

window.songs = songs;

var alwaysWaiting = Song.create({
  title: 'Always Waiting',
  band: 'Kaya Project',
  rating: 5
});

window.newSong = alwaysWaiting;

export default Ember.Controller.extend({
  songs: songs
});
