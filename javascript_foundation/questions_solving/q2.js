/*

    Q2. Callback with delay

Write a function delayedMessage(msg, callback) that:

Waits 2 seconds

Then calls the callback with msg

Expected output (after 2 sec):


 */
 function delayedMessage(msg,callback){

    setTimeout(()=>{
        callback(msg)
    },2000);
 }

delayedMessage("Hello world",(message)=>{
    console.log(message);
})