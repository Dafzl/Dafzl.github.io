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
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully'
        setTimeout(function(){
            msg.innerHTML =''
        },2500)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })