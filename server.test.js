const request = require("supertest");
const app = require("./server");

describe("Express Server", () => {
  describe("GET /", () => {
    it("should return 'Hello, World!'", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello, World!");
    });
  });

  describe("GET /health", () => {
    it("should return status ok", async () => {
      const res = await request(app).get("/health");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ status: "ok" });
    });
  });
});
