#!/usr/bin/env node

var faker = require('faker');
var fs = require('fs');

var fakeData = '';

for ( var i = 0; i < 3; i++ ) {
  // replace all spaces with hyphens since bash for loop breaks string up by spaces
  var randomText = faker.lorem.sentence().replace(/\s+/g, '!');

  fakeData += "{\"text\":\"" + randomText + "\",\"createdAt\":ISODate(\"2015-08-01T19:33:59.728Z\"),\"username\":\"karmakettle\",\"origin\":\"Austin,UnitedStates\",\"location\":{\"type\":\"Point\",\"coordinates\":[-97.70961319999998,30.42243259999999]},\"latWeight1m\":0.31549792760051787,\"lngWeight1m\":0.3289667677599937,\"latWeight15m\":-0.35179222421720624,\"lngWeight15m\":0.3576099982019514,\"latWeight1hr\":-0.3419675931800157,\"lngWeight1hr\":-0.015282494015991688,\"latWeight6hr\":-0.3459183119703084,\"lngWeight6hr\":-0.2992863105610013,\"latWeight12hr\":-0.26839965442195535,\"lngWeight12hr\":0.45831957506015897,\"latWeight1day\":0.06909671192988753,\"lngWeight1day\":0.39382841531187296,\"latWeight3day\":0.420281516155228,\"lngWeight3day\":-0.20103743765503168,\"latWeight1wk\":0.24433364160358906,\"lngWeight1wk\":-0.27988669998012483,\"latWeight1month\":-0.3345853278879076,\"lngWeight1month\":-0.046857530483976007,\"likes\":[],\"opens\":0,\"key\":null} ";
}

fs.writeFileSync('generatedData.js', fakeData);
