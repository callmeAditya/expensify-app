const sum=(a,b)=>a+b

//to run --watch in cli->  yarn test -- --watch (2- are important)

test('shud add two numbes',()=>{
    const result=sum(3,4)

    // if(result!==7){
    //     throw new Error('see again dipshit!')
    // }

    expect(result).toBe(7)
}) // two parameters- string , function