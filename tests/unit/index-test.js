import { test, moduleFor } from 'ember-qunit';
import Index from 'emcli/routes/index';

moduleFor('route:index', "Unit - IndexRoute");

test("Exists", function(){
  expect(1);
  ok(this.subject() instanceof Index);
});

test("Model", function(){
  expect(2);
  var model = this.subject().model();
  equal(model.length, 3, 'Number of colours');
  deepEqual(model, ['red', 'yellow', 'blue'], 'Colours match');
});
