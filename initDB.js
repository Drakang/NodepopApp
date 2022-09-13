"use strict";

const readline = require("readline");
const advertsData = require("./initAdvert.js");

// Conecting to database

const connection = require("./lib/connectMongoose");

// Load models
const Advert = require("./models/Advert");

async function main() {
  const verify = await question(
    "Are you sure you want to delete the database?"
  );

  if (!verify) {
    process.exit();
  }

  // Init products collection
  await initAdvert();

  connection.close();
}

main().catch((err) => console.log("Something went wrong:", err));

async function initAdvert() {
  // Deletes data from database

  const deleted = await Advert.deleteMany();
  console.log(`${deleted.deletedCount} Adverts deleted.`);

  // Initial data

  const inserted = await Advert.insertMany(advertsData);

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
