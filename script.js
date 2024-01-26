// 1.How to compare two JSON have the same properties without order?
// a. let obj1 = {name:"Person1", age:5};
// b. let obj2 = {age:5,name: "Person1"};

var
remoteJSON = {"allowExternalMembers": "false", "whoCanJoin": "CAN_REQUEST_TO_JOIN"},
    localJSON = {"whoCanJoin": "CAN_REQUEST_TO_JOIN", "allowExternalMembers": "false"};
    
console.log( _.isEqual(remoteJSON, localJSON) );