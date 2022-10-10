import { createStore, combineReducers } from "redux";

let useData = {
  users: [],
  currentUser:null
};

function useReducer(oldData = useData, newData) {
  oldData = { users: [...oldData.users] };

  if (newData.type == "USER_CREATED") {
    oldData.users.push(newData.payload);
  }else if (newData.type == "USER_DELETE") {
    oldData.users.splice(newData.i, 1);
  }else if (newData.type == "LOGIN_OK") {

  
    oldData.currentUser = newData.payload

  }

  

  return oldData;
}
let useDataw = {
  users2: [],
  currentUser:null
};
function wshlst(oldData=useDataw , newData){
oldData={users2:[...oldData.users2]}
if( newData.type=="TOwishlist"){
  oldData.users2.push(newData.payload)

}

return oldData
}


let useData2 = {
  users3: [],
  currentUser:null
};
function signupdata(oldData=useData2,newData){
  oldData={users3:[...oldData.users3]}
if(newData.type=="Signupdata"){
  oldData.users3.push(newData.payload)
  console.log(oldData)
}

return oldData
}
let useData4 = {
  users4: [],
  currentUser:null
};
function liked(oldData=useData4 , newData){
oldData={users4:[...oldData.users4]}
if( newData.type=="LIKED"){
  oldData.users4.push(newData.payload)

}
return oldData
}

let useData5 = {
  users5: [],
  currentUser:null
};
function BUY(oldData=useData5 , newData){
oldData={users5:[...oldData.users5]}
if( newData.type=="TOBuy"){
  oldData.users5.push(newData.payload)
  // if(newData.type=="delete"){
  //   oldData.splice(newData.payload,1)

  // }

}
return oldData
}
let useData6 = {
  users6: [],
  currentUser:null
};
function LOGIN(oldData=useData6 , newData){
oldData={users6:[...oldData.users6]}
if( newData.type=="LOGINdata"){
  oldData.users6.push(newData.payload)

}
return oldData
}


let reducers = combineReducers({ useReducer ,wshlst,signupdata ,liked,BUY,LOGIN});

let myStore = createStore(reducers);

export default myStore;
