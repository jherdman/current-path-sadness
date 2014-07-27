import { test, moduleForModel } from 'ember-qunit';

moduleForModel('car', 'Car', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
