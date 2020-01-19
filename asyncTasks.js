const fs = require('fs');
const taskFunctions = require('./taskFunctions');

(async () => {
  try {
    /**
     * Before starting the tasks the app should create a folder inside its parent directory whose path is the current unix timestamp
     * All files that are created by tasks should be written to this output directory
     * The last digit of that timestamp determines the number of files (X) that each task will create
     */
    let timeNow = Date.now();
    await fs.mkdir(`./${timeNow}`, err => {
      if (err) throw err;
    });

    /**
     * Before starting each task log `Starting task [taskNumber]` to the console
     * Log `Finished task [taskNumber]` after the task is complete
     */
    let task = 1;

    // Task 1
    console.log(`Starting task ${task}`);
    await taskFunctions.task1(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 2
    console.log(`Starting task ${task}`);
    await taskFunctions.task2(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 3
    console.log(`Starting task ${task}`);
    await taskFunctions.task3(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 4
    console.log(`Starting task ${task}`);
    await taskFunctions.task4(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 5
    console.log(`Starting task ${task}`);
    await taskFunctions.task5(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 6
    console.log(`Starting task ${task}`);
    await taskFunctions.task6(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 7
    console.log(`Starting task ${task}`);
    await taskFunctions.task7(timeNow);
    console.log(`Finished task ${task++}`);

    // // Task 8
    console.log(`Starting task ${task}`);
    await taskFunctions.task8(timeNow);
    console.log(`Finished task ${task++}`);
  } catch (error) {
    throw error;
  }
})();
