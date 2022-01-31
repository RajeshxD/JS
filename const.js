for(var i = 1; i <= 6; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}

// var vs let

for(let i = 1; i <= 6; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}