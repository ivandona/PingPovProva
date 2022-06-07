const request = require('supertest');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const app = require('../index')
const mongoose = require('mongoose')
let connection;

beforeAll( async () => {
  jest.setTimeout(5100);
  jest.unmock('mongoose');
  connection = await  mongoose.connect(process.env.DB_TEST_URL, {useNewUrlParser: true, useUnifiedTopology: true});
  console.log('Database connected!');
  //return connection; // Need to return the Promise db connection?
});
test('app module should be defined', () => {
    expect(app).toBeDefined();
});

test('GET /v2/search with query defined', async() => {
    return await request(app)
    .get('/v2/match')
    .query({displayname:'D'}) 
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
});

test('GET /v2/search with query not defined',async()=>{
    return await request(app)
    .get('/v2/match')
    .query({displayname:''}) 
    .expect(400)
})

afterAll( () => {
    mongoose.connection.close(true);
    console.log("Database connection closed");
});