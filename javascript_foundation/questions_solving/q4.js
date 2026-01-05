/*
Q4. Convert callback → promise

Convert this function into a promise-based one:

    function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
    }


Usage should be:

    getData().then(console.log);

*/

function getData(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("data received")
        },1000)
    })
}
getData().then((data)=>{
    console.log("data ")
})
