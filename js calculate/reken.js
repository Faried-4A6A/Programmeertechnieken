function reken(){
    var getal = document.getElementById('numbers').value;
    var operate1 = document.getElementById('operation').value="sum";
    var operate2 = document.getElementById('operation').value="substract";
    var operate3 = document.getElementById('operation').value="multiply";
    var operate4 = document.getElementById('operation').value="divide";
            
    var uitslag = getal.split(",");
            
    var output = parseFloat(uitslag[0]);
            
    if(operate1){
        for(i=1; i<uitslag.length; i++){
            output+=parseFloat(uitslag[0]); 
        };
    }
            
    document.getElementById('result').innerHTML = output;
}