const fs = require('fs');

const task1 = async timeNow => {
  /**
   * Task 1. Using node.js's built-in `fs` module create X numbered files named `taskOne_[fileNumber]`
   * fileNumber is the order in which the files were created
   * Log `Creating file [fileName]` to the console before the file is written
   * Log `Finished creating file [fileName]` after the file is written
   */

  try {
    let numFiles = timeNow % 10;
    for (let i = 1; i <= numFiles; i++) {
      console.log(`Creating file ${i}`);
      await fs.writeFile(`./${timeNow}/taskOne_${i}`, '', err => {
        if (err) throw err;
      });
      console.log(`Finished creating file ${i}`);
    }
  } catch (error) {
    throw error;
  }
};

const task2 = async timeNow => {
  /**
   * Task 2. Create X numbered files named `taskTwo_[1-X]`
   * The result should be files numbered 1-5 irrelevant of write order
   * The files should be written all at once without waiting for others to complete
   * Log `Creating file [fileName]` to the console before the file is written
   * Log `Finished creating file [fileName]` after the file is written
   * Wait for all files to complete before proceeding to the next task
   */

  try {
    let numFiles = timeNow % 10;
    for (let i = 1; i <= numFiles; i++) {
      console.log(`Creating file ${i}`);
      await fs.writeFile(`./${timeNow}/taskTwo_[1-${i}]`, '', err => {
        if (err) throw err;
      });
      console.log(`Finished creating file ${i}`);
    }
  } catch (error) {
    throw error;
  }
};

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
