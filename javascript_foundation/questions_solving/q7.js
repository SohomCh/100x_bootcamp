/**Use async await to fetch user and print fetched user after one second */



async function fetchUser() {

    await new Promise(resolve=> setTimeout(resolve,1000));
        console.log("User fetched")
    
    }
    