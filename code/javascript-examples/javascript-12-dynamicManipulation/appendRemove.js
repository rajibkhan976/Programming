let myButton = document.createElement('button');
            
myButton.setAttribute('id', 'my-button');
myButton.innerText = 'Press me';

document.body.appendChild(myButton);

setTimeout(function(){
  document.body.removeChild(myButton);
}, 2000)