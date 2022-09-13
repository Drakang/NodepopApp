"use strict";

const readline = require("readline");
const Adverts = require("./initAdverts.js");

// Conecting to database

const connection = require("./lib/connectMongoose");

// Load models
const Product = require("./models/Products");

async function main() {
  const verify = await question(
    "Are you sure you want to delete the database?"
  );

  if (!verify) {
    process.exit();
  }

  // Init products collection
  await initProducts();

  connection.close();
}

main().catch((err) => console.log("Something went wrong:", err));

async function initProducts() {
  // Deletes data from database

  const deleted = await Product.deleteMany();
  console.log(`${deleted.deletedCount} products deleted.`);

  // Initial data

  const inserted = await Product.insertMany(Adverts);

  console.log(`${inserted.length} adverts created.`);
}

function question(text) {
  return new Promise((resolve, reject) => {
    const ifc = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    ifc.question(text, (answer) => {
      answer.toLowerCase() === "y" || answer.toLowerCase() === "yes"
        ? resolve(true)
        : resolve(false);
      ifc.close();
    });
  });
}
