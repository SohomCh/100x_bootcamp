/**Use async await to fetch user and print fetched user after one second */



async function fetchUser() {

    await new Promise(resolve=> setTimeout(resolve,1000));
        console.log("User fetched")
    
    }
    

    //Let's use try catch


    async function fethUser1() {

        try { 

            await new Promise((resolve,reject)=>{

                setTimeout(()=>{
                    Math.random>0.5? resolve:reject("Error")
                },1000)
            })
            
        } catch (error) {
            console.log(err);
            
        }
        
    }