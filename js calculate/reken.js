function reken(){
    // "2, 5"
    var getal = document.getElementById('numbers').value;
    
    // operate sum
    var operate = document.getElementById('operation').value;
    
    // ["2", " 5"]
    var uitslag = getal.split(",");
            
    var output = parseFloat(uitslag[0]);
    
    
    if(operate == "sum"){
        for(i=1; i<uitslag.length; i++){
            output+=parseFloat(uitslag[i]); 
        }
    }else if(operate == "substract"){
        for(i=1; i<uitslag.length; i++){
            output-=parseFloat(uitslag[i]);
        }
    }else if(operate == "multiply"){
        for(i=1; i<uitslag.length; i++){
            output*=parseFloat(uitslag[i]);
        }
    }
    document.getElementById("result").innerHTML = output;
}