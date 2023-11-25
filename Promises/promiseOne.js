const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error){
            resolve({username : "Suhel", email : "suhel123@gmail.com"});
        }else{
            reject("Error : Something went wrong!!")
        }
    }, 1000)
});

promiseOne.then(function(user){
    console.log(user);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The Promise is either resolved or rejected");
});