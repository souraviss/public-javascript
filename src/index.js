 import './index.css';
// require('./index.css');
// import numeral from 'numeral';
// var numeral=require('numeral');
// // import numeral from 'numeral';

// /* eslint-disable no-console */
// const courseValue=numeral(1000).format('$0,0.00');
// // console.log('I would pay '+courseValue+' for this awesome course');
// console.log('I would pay '+courseValue+' for this awesome course');

import {getUsers} from './api/userApi';

//Populate user table via Api call
getUsers().then(result=>{
let usersBody="";
result.forEach(users => {
  usersBody+=`<tr>
              <td><a href="#" data-id="${users.Id}" class="deleteUser">Delete</a></td>
              <td> ${users.Name} </td>
              <td> ${users.email} </td>
              </tr>`
});
global.document.getElementById('users').innerHTML=usersBody;
});