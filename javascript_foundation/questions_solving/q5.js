/**Q5. Promise resolve / reject

Create a function checkAge(age) that:

Resolves if age ≥ 18 → "Allowed"

Rejects otherwise → "Not allowed"

Test both cases. */




function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Allowed");
        } else {
            reject("Not allowed");
        }
    });
}

checkAge(20)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

checkAge(14)
            .then(msg=>console.log("allowed"))
            .catch(err=>console.log("not allowed"))


checkAge(18)    
            .then(msg=>{console.log("allowed")})
            .catch(err=>{console.log("not allowed")})





