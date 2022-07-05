// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("click", event => {
  if (event.target.className === "like-glyph") {
    mimicServerCall()
    .then(resp => {
      console.log(resp)
      document.getElementById("modal").className = "hidden"
      event.target.className = "activated-heart"
      event.target.textContent = FULL_HEART
    })
    .catch(error => {
      document.getElementById("modal").className = "visible"
      document.getElementById("modal-message").textContent = error
      setTimeout(() => document.getElementById("modal").className = "hidden", 3000)
      console.log(error)
    })
    console.log(event.target)
  }

  if(event.target.className === "activated-heart") {
    event.target.className = "like-glyph"
    event.target.textContent = EMPTY_HEART
  }
})










//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
