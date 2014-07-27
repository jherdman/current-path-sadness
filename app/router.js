import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CurrentPathSadnessENV.locationType
});

Router.map(function() {
  this.resource('cars');

  this.resource('car', { path: 'cars/:id' });
});

export default Router;
