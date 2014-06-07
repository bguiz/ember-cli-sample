/* globals jQuery */
import { test } from 'ember-qunit';
import  startApp from '../helpers/start-app';

var App;
module('Index page', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    },
});

test('Main', function() {
    expect(2);
    visit('/').then(function() {
        equal(find('#title').length, 1, 'Page title rendered');
        equal(find('#title').text(), 'Welcome to Ember.js', 'Page title rendered');
    });
});

test('Colours', function() {
    expect(2);
    visit('/').then(function() {
        equal(find('.index-colour').length, 3, 'Number of colours');
        equal(find('.index-colour:first').text(), 'red', 'First colour match');
    });
});
