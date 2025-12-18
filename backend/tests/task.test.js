const request = require("supertest");
const { server, app } = require("../index");
const mongoose = require("mongoose");
 
describe("GET api/task", () => {
  it("it should return 200 status code ", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
  });
  it("it should return array status code and task  ", async () => {
    const res = await request(app).get("/api/tasks");
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("tasks");
  });
});
 
afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});