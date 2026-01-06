/**
     * Q6. Promise chaining

    Complete the chain so output is:

    Step 1
    Step 2
    Step 3


    Skeleton:

    Promise.resolve()
    .then(() => {
        // print Step 1
    })
    .then(() => {
        // wait 1 sec, then print Step 2
    })
    .then(() => {
        // print Step 3
    });

    * 
    */
Promise.resolve()
  .then(() => {
    console.log("Step 1");
  })
  .then(() => {
    // return a new promise that resolves after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 2");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    console.log("Step 3");
  });
