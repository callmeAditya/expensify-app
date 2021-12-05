import * as firebase from 'firebase'
import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyKe-XmrKp8wWXd9IAG5IbmPDwcigKMcU",
    authDomain: "expensify-app-aditya.firebaseapp.com",
    databaseURL: "https://expensify-app-aditya-default-rtdb.firebaseio.com",
    projectId: "expensify-app-aditya",
    storageBucket: "expensify-app-aditya.appspot.com",
    messagingSenderId: "16496267488",
    appId: "1:16496267488:web:8548184552748492024085",
    measurementId: "G-ZB51QJJD2C"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.database()

//Redux with Firebase L-152
export {firebase, database as default}


//A
// database.ref().set({  // set() can take any data type and will wipe out old data // returns promise, continue chaining
//     name: 'aditya',
//     age: 29,
//     isSingle: false,
//     location: {
//         city: 'delhi',
//         country: 'US'
//     }
// }).then(function (data) { // no 'data' is dumped
//     console.log('success✅');
// }).catch((e) => {
//     console.log('This got failed...❌', e);
// })



//B
//to access only particular part 
// database.ref('age').set(28);         // .set(null) == remove() that attribute
// database.ref('location/city').set('Paris');




//C
//promises
// database.ref('attributes').set({
//     height:169,
//     weight: 65
// }).then(()=>{
//     console.log('success is here!');
// }).catch((e)=>{
//     console.log('error',e);
// }) ;



//D to remove data
// database.ref('isSingle').remove()
// .then(()=>{
//     console.log('successfully removed');
// }).catch(()=>{
//     console.log('there is error!');
// })



//E to update
// database.ref().update({
//     name: 'Bobby',
//     age: 26,    
//     isSingle: null,
//     'location/city': 'Boston',
//     job:{
//         title:'Software Engg',
//         company:'Google'
//     }
// })


//F Fetch data
// database.ref('location/city').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val);
//     }).catch((e) => {
//         console.log('error =>', e);
//     })

//G run function on and on without getting notified-> changes data instantly

// const onvaluechange = database.ref().on('value', (snapshot) => {
//     const data=snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// })

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 1000)
// //to remove subscrip use .off()
// setTimeout(() => {
//     database.ref().off('value',onvaluechange)
// }, 2000)



//////Arrays in FB

// database.ref('notes').push({
//     title:'Course Topics',
//     courses:'Java JS React'
// },)

// database.ref('notes/-MpIF1uApDpNw8ZqxQAR').remove()


// database.ref('expenses').push({
//     description:'Coffee',
//     amount:126,
//     details:'',
//     createdAt:214242351345146161
// })

// database.ref('expenses').push({
//     description:'Phone',
//     amount:5775,
//     details:'',
//     createdAt:9739826926812312313
// })
// database.ref('expenses').push({
//     description:'Rent',
//     amount:8562,
//     details:'',
//     createdAt:71528162987162781691
// })



// ************* Fetch data into array***************
// database.ref('expenses')
// .once('value')
// .then((snap)=>{
//     // console.log(snap.val());
//     const expense=[]
//     snap.forEach((ele,i)=>{
   
//         expense.push({
//             id:ele.key,
//             ...ele.val()
//         })
//     })
//         expense.forEach(function(el,i){
//             console.log(`${i+1} ${el.description} has due $${el.amount}.`);
//         })
// })

//**************Remove Data ******************

// database.ref('expenses')
// .on('child_removed', function(snapshot){
//     console.log(snapshot.key, snapshot.val());
// })

// //*************Child Change********************

// database.ref('expenses')
// .on('child_changed', function(snap){
//     console.log(snap.key, snap.val());
// })

// // ************Child Added**********************


// database.ref('expenses')
// .on('child_added', function(snap){
//     console.log(snap.key, snap.val());
// })

