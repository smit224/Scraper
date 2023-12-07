import config from '@src/config';
import logger from 'jet-logger';
import { MongoClient, Db, Collection, Document } from 'mongodb';

interface IThenable {
  then: (resolve: (value: unknown) => void, reject?: (reason: unknown) => void) => void;
}

class MongoDB {
  private connectionString: string;
  private client: MongoClient;
  private db: Db | undefined;
  private collection: Collection<Document> | undefined;
  public Ready: IThenable;

  constructor() {
    this.connectionString = config.mongo_connectionString;
    this.client = new MongoClient(this.connectionString);
    this.Ready = new Promise((resolve, reject) => {
      this.client.connect()
        .then(() => {
          logger.info({ message: "MongoDB Client connected" }, true);

          resolve(undefined);
        })
        .catch(error => {
          logger.err({ message: "Failed to connect to MongoDB", error: error as unknown }, true);
          reject(error);
        });
    });
  }

  initDb() {
    this.db = this.client.db('bright-data');
    this.collection = this.db.collection('user');
    logger.info({ message: "MongoDB Database and Collection initialized" }, true);
  }

  async findUser<T extends Document>(email: Partial<T>): Promise<T | undefined> {
    try {
      const result = await this.collection?.findOne<T>(email);
      if(!result)
      {
        logger.err({ message: "Failed to find Query", condition: email }, true);
        return;
      }

      return result;
    }
    catch (error) {
      logger.err({ message: "Failed to find data", error: error as unknown }, true);
      return;
    }
  }

  async createUser<T extends Document>(data: T): Promise<{ success: boolean }> {
    try {
      await this.collection?.insertOne(data);
      return { success: true };
    }
    catch (error) {
      logger.err({ message: "Failed to insert data", error: error as unknown }, true);
      return { success: false };
    }
  }


}

export const mongo = new MongoDB();

mongo.Ready.then(() => {
  mongo.initDb();
});
