const request = require('supertest');
const app = require('../app');

describe('App', () => {
  it('should respond with status 200 and an array of payer data for GET /payers', async () => {
    const response = await request(app).get('/payers');
    expect(response.status).toBe(200);
  },15000);

  it('should respond with status 404 for unknown route', async () => {
    const response = await request(app).get('/nonexistentroute');
    expect(response.status).toBe(404);
  },15000);

  //TEST TO FAIL
  /*it('should respond with status 200 for unknown route', async () => {
    const response = await request(app).get('/nonexistentroute');
    expect(response.status).toBe(200);
  },15000);*/
});

