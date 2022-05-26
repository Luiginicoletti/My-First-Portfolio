AOS.init({delay:200,duration:2000});

var posX = null;

function animeScroll(e){
  posX = e.offsetX;

}

var checkbox = document.querySelector("input[name=checkbox]");
var div = document.querySelector('[data-js="div"]');

checkbox.addEventListener('change', function(e){

  if (this.checked) {
    div.classList.remove('darkMode');
    
  } else {
    div.classList.add('darkMode');
  }
})



const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const container = document.getElementById('div-teste');
const windowTop = posX +((window.innerWidth*3)/4);

container.addEventListener('wheel', function(e){
  animeScroll(e);
  const windowTop = posX +((window.innerWidth*3)/4);
  target.forEach(function(element){
    
    
    
    if((windowTop) > element.offsetLeft) {
      element.classList.add(animationClass);
      
    } 
  })
});

 

// set up text to print, each item in array is new line
var aText = new Array(
  "<h2><center>Thank you so much !!!</center></h2>",
  "<center>Muito obrigado por chegar ate aqui!</center>", 
  "E com imenso prazer que eu apresento meu primeiro portifolio teste",
  "Apesar de contente com o resultado, esta pagina foi desenvolvida",
  "com menos de dois meses de estudo e ainda nao havia estudado ",
  "sobre mobile first, portanto esse site ainda nao esta responsivo e",
  "tera melhor desempenho na resolucao <font style='color:green'>1920x1080</font> full screen.<br>",
  "<small>Esta e a <strong>versao <font style='color:green'><blink>1.0</blink></font></strong> - ao decorrer dos meus estudos irei e criando melhorias e,</small>",
  "<small>estarei disponibilizando todas versoes com tempo de estudo no Github.</small><br><br>",
  " <h1><center>New works comming soon!</center></h1>"
  );
  var iSpeed = 30; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 5; // start scrolling up at this many lines
   
  var iTextPos = 1; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }


  var ok = 0;
  function animeScroll(e){
    posX = e.offsetX;

    if(posX > 3200 && ok == 0){
        typewriter();
        ok = 1;
      }  
    }

