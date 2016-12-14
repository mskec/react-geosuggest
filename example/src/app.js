/* global google */

import React from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from '../../src/Geosuggest';

var App = React.createClass({ // eslint-disable-line
  /**
   * Render the example app
   * @return {Function} React render function
   */
  render: function() {
    var fixtures = [
      {label: 'Fixture 1', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 2', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 3', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 4', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 5', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 6', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 7', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 8', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 9', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 10', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 11', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 12', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Fixture 13', location: {lat: 40.7033127, lng: -73.979681}}
    ];

    return ( // eslint-disable-line
      <div>
        <Geosuggest
          fixtures={fixtures}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20" />
      </div>
    );
  },

  /**
   * When the input receives focus
   */
  onFocus: function() {
    console.log('onFocus'); // eslint-disable-line
  },

  /**
   * When the input loses focus
   * @param {String} value The user input
   */
  onBlur: function(value) {
    console.log('onBlur', value); // eslint-disable-line
  },

  /**
   * When the input got changed
   * @param {String} value The new value
   */
  onChange: function(value) {
    console.log('input changes to :' + value); // eslint-disable-line
  },

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect: function(suggest) {
    console.log(suggest); // eslint-disable-line
  },

  /**
   * When there are no suggest results
   * @param {String} userInput The user input
   */
  onSuggestNoResults: function(userInput) {
    console.log('onSuggestNoResults for :' + userInput); // eslint-disable-line
  }
});

ReactDOM.render(<App />, document.getElementById('app')); // eslint-disable-line
