var screen = document.getElementById('screen');

document.getElementById('clear').onclick = function() {
    screen.value = "";
}

var buttons =  document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      var value = this.innerHTML

      switch(value) {
        case 'AC':
          screen.innerHTML = "";
          break;
          case '+/-':
        screen.innerHTML=screen.innerHTML*-1;
        break;
        case '%':
          screen.innerHTML=screen.innerHTML/100;
          break;   
        case '=':
          screen.innerHTML = eval(screen.innerHTML);
        // La fonction eval() évalue une chaîne de caractères comme une expression JavaScript.
        // Donc, si screen.value contient une expression mathématique valide (comme "3+2*5"), eval() calculera 
        // le résultat de cette expression et le renverra.
          break;
          case '&#9003;':
          screen.innerHTML = screen.innerHTML.slice(0,-1);
          break;
        default:
         if(screen.innerHTML == 0){
           screen.innerHTML = value;
         } else {
           screen.innerHTML += value;
         }
      }
    }
}