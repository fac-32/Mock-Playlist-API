import { describe, it, expect } from "vitest";
import request from 'supertest'
import app from "../src/server.ts";

describe("GET /", () => {
  it('returns welcome message', async () => {
    const response = await request(app)
    .post('/')

    expect(response.status).toBe(404)
  })
});
