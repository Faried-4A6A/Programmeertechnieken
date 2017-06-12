function showOnce(){
    console.log(setTimeout(showOnce, 10));
                            
    var a = document.getElementById("mbody");
            a.innerHTML = counter;
                            
}
setTimeout(showOnce, 10);

var counter = 0;
var setIntervalId = setInterval(dinges,100);

function dinges(){

    counter += 1;
    if(counter == 100){
        clearInterval(setIntervalId);
        document.getElementById("home").style.backgroundColor = 'black';
        document.getElementById("mbody").style.backgroundColor = 'white';
        document.getElementById("mbody").style.color = 'black';

    }
}