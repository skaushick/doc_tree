var rect = require("./rect");

function solverRect(l,b){
    console.log("Rectengle solve");
    rect.area(l,b)

    if(l<=0){
        console.log("negative scenario");
    }
}

solverRect(4,5);
