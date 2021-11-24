
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1400) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// modal
function modal_change(){
  document.getElementById("modal").classList.toggle("modal--active")
}
const social__modal = document.querySelectorAll(".social__modal");

for(let i = 0; i < social__modal.length; i++){
  social__modal[i].onclick = function(){
    modal_change();
  }
}


document.getElementById("modal__btn").onclick = function(){
  modal_change();
}


//formulario 
 const $form = document.querySelector('#form')
 $form.addEventListener('submit', hadleSubmit())
 
 async function hadleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method, 
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if(response.ok){
    this.reset()
    alert('gracias')
  }
 }
