const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
const logger = require("morgan");
dotenv.config();

const runServer = async () => {
  const uri = `mongodb+srv://${process.env.DB_MONGO_USERNAME}:${process.env.DB_MONGO_PASSWORD}@${process.env.DB_MONGO_HOST}/${process.env.DB_MONGO_DBNAME}?retryWrites=true&w=majority`;

  const client = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  });

  const port = parseInt(process.env.PORT || 7000);

  app.listen(port, () => {
    console.log(`listing on port ${port}`);
  });
};

runServer().catch(console.error);
