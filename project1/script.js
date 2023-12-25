
const buttons = document.querySelectorAll('.divcolor');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'g') {
      body.style.backgroundColor = 'green';
    }

    if (e.target.id === 'l') {
      body.style.backgroundColor = 'yellow';
    }
    if (e.target.id === 'd') {
      body.style.backgroundColor = 'brown';
    }
    
  });
});


