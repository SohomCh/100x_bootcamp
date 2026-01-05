/*Q3. Callback hell (intentional)

Fix this code so it prints 1 → 2 → 3 in order, each after 1 second.

    setTimeout(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 1000);

 */

setTimeout(() => {
    console.log(1);

    setTimeout(() => {
        console.log(2);

        setTimeout(() => {
            console.log(3);
        }, 1000);

    }, 1000);

}, 1000);

