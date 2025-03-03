const AsyncOperations=()=>{

  
//#region  Good EXample of promise chaining

// function prepareOrder(item){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const menu ={
//                 1 : "pizza",
//                 2 : "pasta"
//             }

//             if(menu[item]){
//                 resolve(menu[item])
//             }else{
//                 reject('item not found')
//             }
//         },1000)
//     })
// }

// prepareOrder(1).then(order=>console.log('order has prepare of:',order)).catch(error=>console.log(error));
// prepareOrder(5).then(order=>console.log('order has prepare of:',order)).catch(error=>console.log(error));

//#endregion

    //#region  callback
    function callback(fn){
        setTimeout(()=>{
            console.log('here');
            fn();
        },1000);
    }


    callback(()=>console.log('call back'))
    //#endregion

    //#region  Promise

    //better way
    //Promise

    function callWithPromis(status){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(status)
                {
                    resolve('Promise Succes')
                }else{
                    reject('Promise error')
                }
            }, 1000);
        }) 
    }

    callWithPromis(true)
    .then(result=>console.log(result))
    .catch(error=> console.log(error)).
    finally(console.log('promiseexecutes'));
    
    callWithPromis(false)
    .then(result=>console.log(result))
    .catch(error=> console.log(error)).
    finally(console.log('promiseexecutes'));

    //Promise helps in nested callback handling(pyramid of doom)

    //#endregion

    //#region  Promise Methods

    //1.Promise.all (return resolve if all resolve)
    function nestedPromise(){
        return  Promise.all([Promise.resolve('task 1'),Promise.resolve('task2'),Promise.reject('task3')])
    }

    console.log(nestedPromise().then(res=>console.log(res)).catch(rej=>console.log(rej)));

    //2.Promise.allSettled (return array of all settled promise ,whether reolsve of reject)

    function settlePromise(){
        return Promise.allSettled([Promise.resolve('task 1'),Promise.resolve('task2'),Promise.reject('task3')])
    }

    console.log(settlePromise());

    //3.Promise.race (return status as soon as first of the promises is settled)

    function racePromise(){
        return Promise.race([new Promise((resolve,reject)=>{
            resolve('task 1')
        },1000),new Promise((resolve,reject)=>{
            reject('task 2')
        },100)])
    }

    console.log(racePromise().then(res=>console.log(res)).catch(rej=>console.log(rej))) //will return task 2
    //#endregion

    //#region Async Await 
    //Another way of handling asynchronous functions are async await
    //using async await feels like working on a synchronous operation

    async function callWithAsync(status){
        try{
            let answer = await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(status)
                        resolve('async succes')
                    else
                    reject('async error')
                },1000)
            })
            console.log(answer);
        }catch(error){
            console.log(error)
        }finally{
            console.log('execution finished');
        }
    }

    callWithAsync(true);
    callWithAsync(false);

    //#endregion

   async function  retry(url, retries){
    let n = 0;
    setTimeout(()=>{
        
    },retries)  
   }
}


export default AsyncOperations;