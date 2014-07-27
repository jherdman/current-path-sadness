import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: VisitingCars', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /cars/:id', function() {
  visit('/cars/1');

  andThen(function() {
    equal(currentPath(), 'car');
  });
});
