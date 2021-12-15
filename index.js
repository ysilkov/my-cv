const myElement = document.querySelector("contact")
myElement.addEventListener('click', function (event) {
    console.log(event.type + ' got fired')
   })
   
   myElement.addEventListener('click', function (event) {
    console.log(event.type + ' got fired again')
   })