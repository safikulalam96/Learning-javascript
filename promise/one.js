const promiseone=new Promise(function(){
    setTimeout(function(){
        console.log("promise one is working")
    },1000)
});

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve();
        console.log("promise two is working")
    },1000);
})

promiseTwo.then(function(){
    console.log("promise two then is working")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve(`username:"safikul alam", password:"123@"`) 
        }
        else{
            reject('something gone wrong')
        }
        
    },1000);
    
}).then(function(e){
    console.log(e)
}).catch(function(e){
    console.log(e);
})