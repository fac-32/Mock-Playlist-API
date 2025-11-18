import { describe, it, expect } from "vitest";
import request from 'supertest'
import app from "../src/server.ts";

describe("GET /", () => {
  it('returns welcome message', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
  })
});
