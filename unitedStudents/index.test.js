const { MongoClient } = require("mongodb");

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb+srv://Filan:fisteku@unitedstudents-kltwk.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    });
    db = await connection.db("unitedStudents");
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = { _id: "333", name: "Test" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({
      _id: "333",
    });
    expect(insertedUser).toEqual(mockUser);
  });
});
