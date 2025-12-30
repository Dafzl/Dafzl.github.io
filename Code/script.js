/*-------------------Header-text----------------*/
    /*see typed.js */
/*-------------------About me----------------*/
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
        
function opentab(tabname) {
    for(tablink of tablinks){
                tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
                tabcontent.classList.remove('active-tab');
    }
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabname).classList.add('active-tab');
}


/*------------------navbar----------------*/
var sidemenu = document.getElementById('sidemenu');
        
        function openmenu(){
            sidemenu.style.right = '0';
        }
        function closemenu(){
            sidemenu.style.right = '-200px';
        }


/*------------------Contact me form google sheets----------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbxnVDjiaN8rgxhFgDBMU5qDjAioqVYCpLFnxIOPIG7zjQhxdGVG36neOWvtu7wNWY3qRQ/exec'
// 2. Select the form and the message display element
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

// 3. Listen for the submit event
form.addEventListener('submit', e => {
  e.preventDefault()
  
  // IMMEDIATE FEEDBACK: This runs instantly when the button is pressed
  msg.innerHTML = "Sending data to the system..."
  msg.style.color = "#ababab" // A subtle gray to match your theme while sending

  // SENDING DATA: This happens in the background
  fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form)
  })
    .then(response => {
        // SUCCESS FEEDBACK: Runs once Google confirms receipt
        msg.innerHTML = "Exchange Initiated Successfully!"
        msg.style.color = "#61b752" // Success green
        
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => {
        // ERROR FEEDBACK: Runs if the connection fails
        msg.innerHTML = "Error: Protocol Interrupted"
        msg.style.color = "#ff004f" // Error red
        console.error('Error!', error.message)
    })
})