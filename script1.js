// 3. Use the same rest countries and 
// print all countries names, regions, sub-region and populations

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
// Question 2 Solution ( Displayed all the country flags in the console )
for(var i =0;i<res.length;i++){
    console.log(res[i].flags.png)
// Question 3 Solution ( Printed all countries names, regions, sub regions and populations )
    console.log(res[i].name.common+" "+res[i].region+" "+res[i].subregion+" "+res[i].population);
}
}