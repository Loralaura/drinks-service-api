import request from "supertest";
import { app } from "../app";

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Oolong" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Oolong",
  });
});
test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Matcha" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Matcha",
  });
});

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green",
  });
});

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Hojicha" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Hojicha",
  });
});
