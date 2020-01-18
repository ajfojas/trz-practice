const fs = require('fs');

const task1 = async timeNow => {
  /**
   * Task 1. Using node.js's built-in `fs` module create X numbered files named `taskOne_[fileNumber]`
   * fileNumber is the order in which the files were created
   * Log `Creating file [fileName]` to the console before the file is written
   * Log `Finished creating file [fileName]` after the file is written
   */

  let numFiles = timeNow % 10;
  for (let i = 1; i <= numFiles; i++) {
    console.log(`Creating file ${i}`);
    await fs.writeFile(`./${timeNow}/taskOne_${i}`, '', err => {
      if (err) throw err;
    });
    console.log(`Finished creating file ${i}`);
  }
};

const task2 = async () => {};

const task3 = async () => {};

const task4 = async () => {};

const task5 = async () => {};

const task6 = async () => {};

const task7 = async () => {};

const task8 = async () => {};

module.exports = {
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8
};
