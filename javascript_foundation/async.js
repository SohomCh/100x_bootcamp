

console.log("one")
console.log("teo")
setTimeout(()=>{
    console.log("hi")

},3*100)

console.log("three")
console.log("four")




/****************************************************
 * SECTION 1: CALLBACK (Basic)
 ****************************************************/

// A function that accepts a callback
function fetchUserCallback(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "Sohom" });
    }, 1000);
}

// Using the callback
fetchUserCallback(function(user) {
    console.log("Callback User:", user);
});


/****************************************************
 * SECTION 2: CALLBACK HELL (Problem)
 ****************************************************/

function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id });
    }, 500);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        callback([{ orderId: 101 }]);
    }, 500);
}

function getPayment(orderId, callback) {
    setTimeout(() => {
        callback("Payment Successful");
    }, 500);
}

// ❌ Callback Hell (deep nesting)
getUser(1, function(user) {
    getOrders(user.id, function(orders) {
        getPayment(orders[0].orderId, function(payment) {
            console.log("Callback Hell Result:", payment);
        });
    });
});


/****************************************************
 * SECTION 3: PROMISE (Basic)
 ****************************************************/

function fetchUserPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise User Data");
        }, 1000);
    });
}

fetchUserPromise()
    .then(result => {
        console.log("Promise Result:", result);
    })
    .catch(error => {
        console.error(error);
    });


/****************************************************
 * SECTION 4: PROMISE CHAINING (Fixing Callback Hell)
 ****************************************************/

function getUserP(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id }), 500);
    });
}

function getOrdersP(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([{ orderId: 201 }]), 500);
    });
}

function getPaymentP(orderId) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Payment Done via Promise"), 500);
    });
}

// ✅ Promise Chaining
getUserP(1)
    .then(user => {
        return getOrdersP(user.id);
    })
    .then(orders => {
        return getPaymentP(orders[0].orderId);
    })
    .then(payment => {
        console.log("Promise Chain Result:", payment);
    })
    .catch(err => {
        console.error(err);
    });


/****************************************************
 * SECTION 5: ASYNC / AWAIT (Cleanest Solution)
 ****************************************************/

async function processPaymentAsync() {
    try {
        // await pauses ONLY this function, not JS
        const user = await getUserP(1);
        const orders = await getOrdersP(user.id);
        const payment = await getPaymentP(orders[0].orderId);

        console.log("Async/Await Result:", payment);
    } catch (error) {
        console.error("Error:", error);
    }
}

processPaymentAsync();


/****************************************************
 * SECTION 6: PARALLEL EXECUTION (Promise.all)
 ****************************************************/

function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 Done"), 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 Done"), 1000);
    });
}

// ❌ Sequential (slow)
/*
async function slowTasks() {
    const a = await task1();
    const b = await task2();
    console.log(a, b);
}
slowTasks();
*/

// ✅ Parallel (fast)
async function fastTasks() {
    const [a, b] = await Promise.all([
        task1(),
        task2()
    ]);

    console.log("Parallel Result:", a, b);
}

fastTasks();



