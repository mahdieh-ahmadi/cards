var text = 'PLEASE MEAT OUR TEAM |';
var i=0;
var typing = () => {
if(i === text.length -1 ){
    setInterval(() => {
         if(i === text.length -1){
          document.querySelector('.heading').innerHTML = 'PLEASE MEAT OUR TEAM |';
          i++
         }else if(i === text.length){
          document.querySelector('.heading').innerHTML = 'PLEASE MEAT OUR TEAM ';
          i--
         }
    }, 300);

}else if( i < text.length) {
     document.querySelector('.heading').innerHTML += text[i];
     i++;
     setTimeout(typing,150);
}   

}

typing();