
function show_para1(){
    var para1_sentences = [];
    
    for(var i = 1; i<6; i++){
        para1_sentences.push(document.getElementById("para1-input"+ i).value);
    }
    document.getElementById("para1-output").innerHTML = para1_sentences.join(". ")
}

function show_para2(){
    var para2_sentences = [];

    for(var y = 1; y<6; y++){
        para2_sentences.push(document.getElementById("para2-input"+ y).value);
    }
    document.getElementById("para2-output").innerHTML = para2_sentences.join(". ")
}
