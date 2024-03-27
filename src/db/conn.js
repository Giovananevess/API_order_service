const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://${dbUser}:${dbPassword}@cluster0.0iqx1qk.mongodb.net/"
  );
  console.log("Conectou com Mongoose!");
}

main().catch((err) => console.log(err));

module.exports = mongoose;

// credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
