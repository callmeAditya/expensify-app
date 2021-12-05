const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name:'adi',
        //     age:24
        // })
        // resolve('other data') // will be ignored; only one argu; use object instead

        reject('Something is wrong :/')
    }, 1500)

})

promise.then((data) => {
    console.log(data);

}).catch((err)=>{
    console.log(err);
})