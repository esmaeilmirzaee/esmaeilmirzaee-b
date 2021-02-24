const mongoose = require('mongoose');

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongo is connected to ${conn.connection.host}`);
  } catch (e) {
    console.log(`There is something wrong to connect to db-${e}`);
    process.exit(1);
  }
};

module.exports = connect;
