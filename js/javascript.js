var text = 'PLEASE MEAT OUR TEAM';
var i=0;
var typing = () => {
if( i < text.length) {
     document.querySelector('.heading').innerHTML += text.charAt(i);
     i++;
     setTimeout(typing,150);
     }
}
typing();