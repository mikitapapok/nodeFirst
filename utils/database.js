// const mongoDb = require("mongodb");
// const mongoClient = mongoDb.MongoClient;
// let _db;

// const mongoConnect = (callback) => {
//   mongoClient
//     .connect(
//       "mongodb+srv://MikitaPapok:nSUzQb8fsgEaWZnH@cluster0.s77dhd5.mongodb.net/shop?retryWrites=true&w=majority"
//     )
//     .then((client) => {
//       console.log("connected");
//       _db = client.db();
//       callback();
//     })
//     .catch((e) => console.log(e));
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "No DB found";
// };
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
