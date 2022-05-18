var Request = require("request");

describe("Server", () => {
  var server;
  beforeAll(() => {
    server = require("./server");
  });
  afterAll(() => {
    server.close();
  });
  describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
      Request.get("http://localhost:5000/", (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });

    it("Status 200", () => {
        expect(data.body).toBe("API Running");
    })
  });
});
