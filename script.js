var techs = ['HTML', 'REDUX', 'JAVASCRIPT', 'NODE', 'PYTHON', 'REACT'];

var colorbox = document.querySelector(".colorText");

//function to generate colors for text
let animateColors = () => {
    let regEx = '0123456789abcdef';
    let arrOfColors = [];
    for(var i = 0; i < 6; i++){
        let arr_index = Math.floor(Math.random() * 15);
        arrOfColors.push(regEx[arr_index]);
    }
    return '#' + arrOfColors.join('');
}

//generate text from array
var len = 0;
setInterval(function(){
    setTimeout(function(){
        var data = techs[len];
        colorbox.innerText = data;
        colorbox.style.fontSize = '40px';
        colorbox.style.fontWeight = '900';
        colorbox.style.color= animateColors();
        len++;
        if(len > 5){
            len = 0;
        }  
        
    },2)
},2000)

