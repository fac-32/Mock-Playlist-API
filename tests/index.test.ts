import { describe, it, expect, test } from "vitest";
import request from "supertest";
import router from "../src/index.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(router);

describe("GET /playlists", () => {
  test("should return all playlists", async () => {
    const res = await request(app).get("/playlists");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /playlists/:id", () => {
  it("retrieves a single playlist by its ID", async () => {
    const response = await request(app).get("/playlists/1");

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("80s Hits");
  });

  it("returns 404 for invalid id", async () => {
    const response = await request(app).get("/playlists/5");

    expect(response.status).toBe(404);
  });
});

describe("POST /playlists", () => {
  it("creates a new playlist", async () => {
    const response = await request(app)
      .post("/playlists")
      .send({
        name: "Bangers",
        songs: ["Absolute tune", "Earworm", "Headbanger"],
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Bangers");
  });
});

describe("DELETE /playlists/:id", () => {
  test("should delete a playlist and return it", async () => {
    const res = await request(app).delete("/playlists/1");

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
    expect(res.body.name).toBeDefined();
  });

  test("should return 404 when deleting a non-existing playlist", async () => {
    const res = await request(app).delete("/playlists/999");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Playlist not found");
  });
});
