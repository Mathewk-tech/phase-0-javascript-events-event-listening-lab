function addingEventListener() {
  const input = document.getElementById('button');
  function clickAlert() {
    alert('I was clicked!');
  }
  input.addEventListener('click', clickAlert);
}
addingEventListener();




// addingEventListener();
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

const btn=document.getElementById("button2");
btn.addEventListener('click',clickAlert);