const request = require('supertest');
const jwt     = require('jsonwebtoken'); // used to create, sign, and verify tokens
const app     = require('./app');

test('app module should be defined', () => {
  expect(app).toBeDefined();
});

