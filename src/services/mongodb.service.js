const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.URI_MONGODB;
const dbName = process.env.DB_MONGODB;

class MongoService {
  constructor(){
    this.client = new MongoClient(uri);
    this.dbName = dbName;
  }

  async connectDB() {
    await this.client.connect();
    MongoService.connection = this.client.db(this.dbName);
    return MongoService.connection;
  }

  async readDocument(collectionName, filter) {
    let db = await this.connectDB();
    let collection = db.collection(collectionName);
    return collection.findOne(filter);
  }

}

module.exports = MongoService;


