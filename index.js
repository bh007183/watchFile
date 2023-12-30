//import { watchFile } from 'node:fs';

//example case, you want some code to trigger after a file has changed

let fs = require("fs");

let obj = { title: "Lord of the rings ", category: "book" };

//fs.unwatchFile
// fs.watchFile("./storage/other.json", (current, previous) => {

//     console.log(current.mtime)
//     console.log(previous.mtime)
//     console.log("watchFile triggered")

// })
//fs.watch is more efficient and is recommended over fs.watchFile
let watcher = fs.watch("./storage", (eventType, filename) => {
  console.log(eventType);
  console.log(filename);

  console.log("watch triggard");
  //returns watcher

  switch (filename) {
    case "other.json":
      console.log("other.json changed");
      break;

    case "test.json":
      console.log("test.json changed");
      break;

    default:
      break;
  }
});

// watcher.close();

fs.writeFileSync("./storage/other.json", JSON.stringify(obj));
// fs.writeFileSync("./storage/test.json", JSON.stringify(obj))
