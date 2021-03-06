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
      await fs.writeFile(`./${timeNow}/taskTwo_1-${i}`, '', err => {
        if (err) throw err;
      });
      console.log(`Finished creating file ${i}`);
    }
  } catch (error) {
    throw error;
  }
};

const task3 = async timeNow => {
  /**
   * Task 3. Repeat Task 1 (use `taskThree_[fileNumber]` for the filesNames) except some tasks should be written to a directory `notHome` that does not exist instead of the output directory
   * These failures should be set to occur 30% of the time on average at random
   * When a failure occurs log `File [fileNumber] failed to write` to the console
   * The rest of the writes should continue in order and succeed
   * One task selected at random should also have a 5 second delay introduced before the write occurs
   * Log `Starting 5s delay at [unix timestamp]` when starting and `Ending 5s delay at [unix timestamp]` when completing
   * It's OK if sometimes the failing and delayed file writes are the same
   */

  let delay5sec = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  try {
    let numFiles = timeNow % 10;
    let delayedFile = Math.floor(Math.random() * numFiles);
    delayedFile = delayedFile < 1 ? 1 : delayedFile;

    for (let i = 1; i <= numFiles; i++) {
      console.log(`Creating file ${i}`);
      if (i === delayedFile) {
        console.log(`Starting 5s delay at ${Date.now()}`);
        await delay5sec();
        console.log(`Ending 5s delay at ${Date.now()}`);
      }

      let randomPercent = Math.floor(Math.random() * 100);
      if (randomPercent <= 30) {
        await fs.writeFile(`./notHome/taskThree_${i}`, '', err => {
          if (err) console.log(`File ${i} failed to write`);
        });
      } else {
        await fs.writeFile(`./${timeNow}/taskThree_${i}`, '', err => {
          if (err) throw err;
        });
        console.log(`Finished creating file ${i}`);
      }
    }
  } catch (error) {
    throw error;
  }
};

const task4 = async timeNow => {
  /**
   * Task 4. Repeat Task 2 (use `taskFour_[fileNumber]` for the filesNames) except some tasks should be written to a directory `notHome` that does not exist instead of the output directory
   * These failures should be set to occur 30% of the time on average at random
   * When a failure occurs log `File [fileNumber] failed to write` to the console
   * The rest of the writes should succeed
   * One task selected at random should also have a 5 second delay introduced before the write occurs
   * Log `Starting 5s delay at [unix timestamp]` when starting and `Ending 5s delay at [unix timestamp]` when completing
   * It's OK if sometimes the failing and delayed file writes are the same
   */

  let delay5sec = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  try {
    let numFiles = timeNow % 10;
    let delayedFile = Math.floor(Math.random() * numFiles);
    delayedFile = delayedFile < 1 ? 1 : delayedFile;

    for (let i = 1; i <= numFiles; i++) {
      console.log(`Creating file ${i}`);
      if (i === delayedFile) {
        console.log(`Starting 5s delay at ${Date.now()}`);
        await delay5sec();
        console.log(`Ending 5s delay at ${Date.now()}`);
      }

      let randomPercent = Math.floor(Math.random() * 100);
      if (randomPercent <= 30) {
        await fs.writeFile(`./notHome/taskFour_${i}`, '', err => {
          if (err) console.log(`File ${i} failed to write`);
        });
      } else {
        await fs.writeFile(`./${timeNow}/taskFour_${i}`, '', err => {
          if (err) throw err;
        });
        console.log(`Finished creating file ${i}`);
      }
    }
  } catch (error) {
    throw error;
  }
};

const task5 = async timeNow => {
  /**
   * Task 5. Repeat task 3 except when a file fails to write the whole task should fail
   */

  let delay5sec = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  try {
    let numFiles = timeNow % 10;
    let delayedFile = Math.floor(Math.random() * numFiles);
    delayedFile = delayedFile < 1 ? 1 : delayedFile;
    let failed = false;

    for (let i = 1; i <= numFiles; i++) {
      if (failed) break;
      console.log(`Creating file ${i}`);
      if (i === delayedFile) {
        console.log(`Starting 5s delay at ${Date.now()}`);
        await delay5sec();
        console.log(`Ending 5s delay at ${Date.now()}`);
      }

      let randomPercent = Math.floor(Math.random() * 100);
      if (randomPercent <= 30) {
        failed = !failed;
        await fs.writeFile(`./notHome/taskFive_${i}`, '', err => {
          if (err) console.log(`File ${i} failed to write`);
        });
      } else {
        await fs.writeFile(`./${timeNow}/taskFive_${i}`, '', err => {
          if (err) throw err;
        });
        console.log(`Finished creating file ${i}`);
      }
    }
  } catch (error) {
    throw error;
  }
};

const task6 = async timeNow => {
  /**
   * Task 6. Repeat task 4 except when a file fails to write the whole task should fail
   */

  let delay5sec = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  try {
    let numFiles = timeNow % 10;
    let delayedFile = Math.floor(Math.random() * numFiles);
    delayedFile = delayedFile < 1 ? 1 : delayedFile;
    let failed = false;

    for (let i = 1; i <= numFiles; i++) {
      if (failed) break;
      console.log(`Creating file ${i}`);
      if (i === delayedFile) {
        console.log(`Starting 5s delay at ${Date.now()}`);
        await delay5sec();
        console.log(`Ending 5s delay at ${Date.now()}`);
      }

      let randomPercent = Math.floor(Math.random() * 100);
      if (randomPercent <= 30) {
        failed = !failed;
        await fs.writeFile(`./notHome/taskSix_${i}`, '', err => {
          if (err) console.log(`File ${i} failed to write`);
        });
      } else {
        await fs.writeFile(`./${timeNow}/taskSix_${i}`, '', err => {
          if (err) throw err;
        });
        console.log(`Finished creating file ${i}`);
      }
    }
  } catch (error) {
    throw error;
  }
};

const task7 = async timeNow => {
  /**
   * Task 7. Repeat task 3 except when a failure occurs 'reattempt' to write that file after a 250ms delay
   * If a file fails to write more than once double the delay for each subsequent reattempt for that file
   * Log `Retrying file [filename]` before starting retries instead of `Creating file [fileName]`
   */

  let delayXsec = timeDelay => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeDelay);
    });
  };

  try {
    let numFiles = timeNow % 10;
    let delayedFile = Math.floor(Math.random() * numFiles);
    delayedFile = delayedFile < 1 ? 1 : delayedFile;
    let numFails = 0;
    let retry = false;

    for (let i = 1; i <= numFiles; i++) {
      console.log(retry ? `Retrying file ${i}` : `Creating file ${i}`);
      if (i === delayedFile) {
        console.log(`Starting 5s delay at ${Date.now()}`);
        await delayXsec(5000);
        console.log(`Ending 5s delay at ${Date.now()}`);
      }

      let randomPercent = Math.floor(Math.random() * 100);
      if (randomPercent <= 30) {
        await fs.writeFile(`./notHome/taskSeven_${i}`, '', err => {
          if (err) console.log(`File ${i + 1} failed to write`);
        });
        i--;
        numFails++;
        retry = true;
        await delayXsec(250 * Math.pow(2, numFails));
      } else {
        await fs.writeFile(`./${timeNow}/taskSeven_${i}`, '', err => {
          if (err) throw err;
        });
        console.log(`Finished creating file ${i}`);
        numFails = 0;
        retry = false;
      }
    }
  } catch (error) {
    throw error;
  }
};

const task8 = async timeNow => {
  /**
   * Task 8. Repeat task 4 except when a failure occurs 'reattempt' to write that file after a 250ms delay
   * If a file fails to write more than once double the delay for each subsequent reattempt for that file
   * Log `Retrying file [filename]` before starting retries instead of `Creating file [fileName]`
   */

  let delayXsec = timeDelay => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeDelay);
    });
  };

  try {
    let numFiles = timeNow % 10;
    let delayedFile = Math.floor(Math.random() * numFiles);
    delayedFile = delayedFile < 1 ? 1 : delayedFile;
    let numFails = 0;
    let retry = false;

    for (let i = 1; i <= numFiles; i++) {
      console.log(retry ? `Retrying file ${i}` : `Creating file ${i}`);
      if (i === delayedFile) {
        console.log(`Starting 5s delay at ${Date.now()}`);
        await delayXsec(5000);
        console.log(`Ending 5s delay at ${Date.now()}`);
      }

      let randomPercent = Math.floor(Math.random() * 100);
      if (randomPercent <= 30) {
        await fs.writeFile(`./notHome/taskEight_${i}`, '', err => {
          if (err) console.log(`File ${i + 1} failed to write`);
        });
        i--;
        numFails++;
        retry = true;
        await delayXsec(250 * Math.pow(2, numFails));
      } else {
        await fs.writeFile(`./${timeNow}/taskEight_${i}`, '', err => {
          if (err) throw err;
        });
        console.log(`Finished creating file ${i}`);
        numFails = 0;
        retry = false;
      }
    }
  } catch (error) {
    throw error;
  }
};

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
