const triggers = document.querySelectorAll('.trigger');

for (let i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener('click', function() {
    triggers[i].classList.toggle('activated');
  });
}

const controlleds = document.querySelectorAll('.controlled');

const computerActivation = setInterval(() => {
  for (let i = 0; i < controlleds.length; i++) {
    controlleds[i].classList.toggle('activated');
  }  
}, 2000);

