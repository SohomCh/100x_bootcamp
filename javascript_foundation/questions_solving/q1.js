
/**  Q1. Basic callback

Write a function add(a, b, callback) that:

Adds a and b

Passes the result to the callback **/

function add(a, b, callback) {
    callback(a + b);
}

add(2, 3, (result) => {
    console.log(result); // 5
});


