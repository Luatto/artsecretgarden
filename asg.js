  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwC_1LW2J2rCqs0RW4yQpixrQ11aqSsi6odOZ0-RDIOHmcpBU/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  
  function add(){
  var quantity = document.querySelector("#green-tea").value;
  quantity++
  document.querySelector("#green-tea").value = quantity
  }
  function deduct(){
  var quantity = document.querySelector("#green-tea").value;
  quantity--
  document.querySelector("#green-tea").value = quantity
  }
  
  function add1(){
  var quantity = document.querySelector("#atiso").value;
  quantity++
  document.querySelector("#atiso").value = quantity
  }
  function deduct1(){
  var quantity = document.querySelector("#atiso").value;
  quantity--
  document.querySelector("#atiso").value = quantity
  }
  
  function add2(){
  var quantity = document.querySelector("#voi-tea").value;
  quantity++
  document.querySelector("#voi-tea").value = quantity
  }
  function deduct2(){
  var quantity = document.querySelector("#voi-tea").value;
  quantity--
  document.querySelector("#voi-tea").value = quantity
  }
    function add3(){
  var quantity = document.querySelector("#americano").value;
  quantity++
  document.querySelector("#americano").value = quantity
  }
  function deduct3(){
  var quantity = document.querySelector("#americano").value;
  quantity--
  document.querySelector("#americano").value = quantity
  }
  
  function add4(){
  var quantity = document.querySelector("#epresso").value;
  quantity++
  document.querySelector("#epresso").value = quantity
  }
  function deduct4(){
  var quantity = document.querySelector("#epresso").value;
  quantity--
  document.querySelector("#epresso").value = quantity
  }
  
  function add5(){
  var quantity = document.querySelector("#caphecotdua").value;
  quantity++
  document.querySelector("#caphecotdua").value = quantity
  }
  function deduct5(){
  var quantity = document.querySelector("#caphecotdua").value;
  quantity--
  document.querySelector("#caphecotdua").value = quantity
  }