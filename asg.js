  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwC_1LW2J2rCqs0RW4yQpixrQ11aqSsi6odOZ0-RDIOHmcpBU/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
	//window.location.href = "waiting.html";	  
  })
/*tea*/  
  function add1(){
  var quantity = document.querySelector("#pineapple").value;
  quantity++
  document.querySelector("#pineapple").value = quantity
  }
  function deduct1(){
  var quantity = document.querySelector("#pineapple").value;
  quantity--
  document.querySelector("#pineapple").value = quantity
  } 
  function add2(){
  var quantity = document.querySelector("#carrot").value;
  quantity++
  document.querySelector("#carrot").value = quantity
  }
  function deduct2(){
  var quantity = document.querySelector("#carrot").value;
  quantity--
  document.querySelector("#carrot").value = quantity
  } 
  function add3(){
  var quantity = document.querySelector("#watermelon").value;
  quantity++
  document.querySelector("#watermelon").value = quantity
  }
  function deduct3(){
  var quantity = document.querySelector("#watermelon").value;
  quantity--
  document.querySelector("#watermelon").value = quantity
  } 
  function add4(){
  var quantity = document.querySelector("#orange").value;
  quantity++
  document.querySelector("#orange").value = quantity
  }
  function deduct4(){
  var quantity = document.querySelector("#orange").value;
  quantity--
  document.querySelector("#orange").value = quantity
  } 
  function add5(){
  var quantity = document.querySelector("#passionfruit").value;
  quantity++
  document.querySelector("#passionfruit").value = quantity
  }
  function deduct5(){
  var quantity = document.querySelector("#passionfruit").value;
  quantity--
  document.querySelector("#passionfruit").value = quantity
  } 
  function add6(){
  var quantity = document.querySelector("#coconut").value;
  quantity++
  document.querySelector("#coconut").value = quantity
  }
  function deduct6(){
  var quantity = document.querySelector("#coconut").value;
  quantity--
  document.querySelector("#coconut").value = quantity
  } 
  function add7(){
  var quantity = document.querySelector("#mojito").value;
  quantity++
  document.querySelector("#mojito").value = quantity
  }
  function deduct7(){
  var quantity = document.querySelector("#mojito").value;
  quantity--
  document.querySelector("#mojito").value = quantity
  } 
  function add8(){
  var quantity = document.querySelector("#espresso").value;
  quantity++
  document.querySelector("#espresso").value = quantity
  }
  function deduct8(){
  var quantity = document.querySelector("#espresso").value;
  quantity--
  document.querySelector("#espresso").value = quantity
  } 
  function add9(){
  var quantity = document.querySelector("#americano").value;
  quantity++
  document.querySelector("#americano").value = quantity
  }
  function deduct9(){
  var quantity = document.querySelector("#americano").value;
  quantity--
  document.querySelector("#americano").value = quantity
  } 
  function add10(){
  var quantity = document.querySelector("#duatuyet").value;
  quantity++
  document.querySelector("#duatuyet").value = quantity
  }
  function deduct10(){
  var quantity = document.querySelector("#duatuyet").value;
  quantity--
  document.querySelector("#duatuyet").value = quantity
  } 
  function add11(){
  var quantity = document.querySelector("#cotdua").value;
  quantity++
  document.querySelector("#cotdua").value = quantity
  }
  function deduct11(){
  var quantity = document.querySelector("#cotdua").value;
  quantity--
  document.querySelector("#cotdua").value = quantity
  } 
  function add12(){
  var quantity = document.querySelector("#socola").value;
  quantity++
  document.querySelector("#socola").value = quantity
  }
  function deduct12(){
  var quantity = document.querySelector("#socola").value;
  quantity--
  document.querySelector("#socola").value = quantity
  } 
  function add13(){
  var quantity = document.querySelector("#bo").value;
  quantity++
  document.querySelector("#bo").value = quantity
  }
  function deduct13(){
  var quantity = document.querySelector("#bo").value;
  quantity--
  document.querySelector("#bo").value = quantity
  } 
  function add14(){
  var quantity = document.querySelector("#saigonspecial").value;
  quantity++
  document.querySelector("#saigonspecial").value = quantity
  }
  function deduct14(){
  var quantity = document.querySelector("#saigonspecial").value;
  quantity--
  document.querySelector("#saigonspecial").value = quantity
  } 
  function add15(){
  var quantity = document.querySelector("#tigercrystal").value;
  quantity++
  document.querySelector("#tigercrystal").value = quantity
  }
  function deduct15(){
  var quantity = document.querySelector("#tigercrystal").value;
  quantity--
  document.querySelector("#tigercrystal").value = quantity
  } 
  function add16(){
  var quantity = document.querySelector("#budweiser").value;
  quantity++
  document.querySelector("#budweiser").value = quantity
  }
  function deduct16(){
  var quantity = document.querySelector("#budweiser").value;
  quantity--
  document.querySelector("#budweiser").value = quantity
  } 
  function add17(){
  var quantity = document.querySelector("#truc bach").value;
  quantity++
  document.querySelector("#truc bach").value = quantity
  }
  function deduct17(){
  var quantity = document.querySelector("#truc bach").value;
  quantity--
  document.querySelector("#truc bach").value = quantity
  } 
  function add18(){
  var quantity = document.querySelector("#lao").value;
  quantity++
  document.querySelector("#lao").value = quantity
  }
  function deduct18(){
  var quantity = document.querySelector("#lao").value;
  quantity--
  document.querySelector("#lao").value = quantity
  } 
  function add19(){
  var quantity = document.querySelector("#heniken").value;
  quantity++
  document.querySelector("#heniken").value = quantity
  }
  function deduct19(){
  var quantity = document.querySelector("#heniken").value;
  quantity--
  document.querySelector("#heniken").value = quantity
  } 
  function add20(){
  var quantity = document.querySelector("#laoblack").value;
  quantity++
  document.querySelector("#laoblack").value = quantity
  }
  function deduct20(){
  var quantity = document.querySelector("#laoblack").value;
  quantity--
  document.querySelector("#laoblack").value = quantity
  } 
  function add21(){
  var quantity = document.querySelector("#corona").value;
  quantity++
  document.querySelector("#corona").value = quantity
  }
  function deduct21(){
  var quantity = document.querySelector("#corona").value;
  quantity--
  document.querySelector("#corona").value = quantity
  } 
  function add22(){
  var quantity = document.querySelector("#hoegarden").value;
  quantity++
  document.querySelector("#hoegarden").value = quantity
  }
  function deduct22(){
  var quantity = document.querySelector("#hoegarden").value;
  quantity--
  document.querySelector("#hoegarden").value = quantity
  } 
  function add23(){
  var quantity = document.querySelector("#ballantine30").value;
  quantity++
  document.querySelector("#ballantine30").value = quantity
  }
  function deduct23(){
  var quantity = document.querySelector("#ballantine30").value;
  quantity--
  document.querySelector("#ballantine30").value = quantity
  } 
  function add24(){
  var quantity = document.querySelector("#johnniewalkerblue21").value;
  quantity++
  document.querySelector("#johnniewalkerblue21").value = quantity
  }
  function deduct24(){
  var quantity = document.querySelector("#johnniewalkerblue21").value;
  quantity--
  document.querySelector("#johnniewalkerblue21").value = quantity
  } 
  function add25(){
  var quantity = document.querySelector("#ballantine21").value;
  quantity++
  document.querySelector("#ballantine21").value = quantity
  }
  function deduct25(){
  var quantity = document.querySelector("#ballantine21").value;
  quantity--
  document.querySelector("#ballantine21").value = quantity
  } 
  function add26(){
  var quantity = document.querySelector("#royalsalute21").value;
  quantity++
  document.querySelector("#royalsalute21").value = quantity
  }
  function deduct26(){
  var quantity = document.querySelector("#royalsalute21").value;
  quantity--
  document.querySelector("#royalsalute21").value = quantity
  } 
  function add27(){
  var quantity = document.querySelector("#windsor21").value;
  quantity++
  document.querySelector("#windsor21").value = quantity
  }
  function deduct27(){
  var quantity = document.querySelector("#windsor21").value;
  quantity--
  document.querySelector("#windsor21").value = quantity
  } 
  function add28(){
  var quantity = document.querySelector("#ballantine17").value;
  quantity++
  document.querySelector("#ballantine17").value = quantity
  }
  function deduct28(){
  var quantity = document.querySelector("#ballantine17").value;
  quantity--
  document.querySelector("#ballantine17").value = quantity
  } 
  function add29(){
  var quantity = document.querySelector("#scotthblue21").value;
  quantity++
  document.querySelector("#scotthblue21").value = quantity
  }
  function deduct29(){
  var quantity = document.querySelector("#scotthblue21").value;
  quantity--
  document.querySelector("#scotthblue21").value = quantity
  } 
  function add30(){
  var quantity = document.querySelector("#goldenblue17").value;
  quantity++
  document.querySelector("#goldenblue17").value = quantity
  }
  function deduct30(){
  var quantity = document.querySelector("#goldenblue17").value;
  quantity--
  document.querySelector("#goldenblue17").value = quantity
  } 
  function add31(){
  var quantity = document.querySelector("#windsor17").value;
  quantity++
  document.querySelector("#windsor17").value = quantity
  }
  function deduct31(){
  var quantity = document.querySelector("#windsor17").value;
  quantity--
  document.querySelector("#windsor17").value = quantity
  } 
  function add32(){
  var quantity = document.querySelector("#scotthblue17").value;
  quantity++
  document.querySelector("#scotthblue17").value = quantity
  }
  function deduct32(){
  var quantity = document.querySelector("#scotthblue17").value;
  quantity--
  document.querySelector("#scotthblue17").value = quantity
  } 
  function add33(){
  var quantity = document.querySelector("#goldenblue12").value;
  quantity++
  document.querySelector("#goldenblue12").value = quantity
  }
  function deduct33(){
  var quantity = document.querySelector("#goldenblue12").value;
  quantity--
  document.querySelector("#goldenblue12").value = quantity
  } 
  function add34(){
  var quantity = document.querySelector("#windsor12").value;
  quantity++
  document.querySelector("#windsor12").value = quantity
  }
  function deduct34(){
  var quantity = document.querySelector("#windsor12").value;
  quantity--
  document.querySelector("#windsor12").value = quantity
  } 
  function add35(){
  var quantity = document.querySelector("#johnniewalkerblack12").value;
  quantity++
  document.querySelector("#johnniewalkerblack12").value = quantity
  }
  function deduct35(){
  var quantity = document.querySelector("#johnniewalkerblack12").value;
  quantity--
  document.querySelector("#johnniewalkerblack12").value = quantity
  } 
  function add36(){
  var quantity = document.querySelector("#ballantine12").value;
  quantity++
  document.querySelector("#ballantine12").value = quantity
  }
  function deduct36(){
  var quantity = document.querySelector("#ballantine12").value;
  quantity--
  document.querySelector("#ballantine12").value = quantity
  } 
  function add37(){
  var quantity = document.querySelector("#josecuervoespecial").value;
  quantity++
  document.querySelector("#josecuervoespecial").value = quantity
  }
  function deduct37(){
  var quantity = document.querySelector("#josecuervoespecial").value;
  quantity--
  document.querySelector("#josecuervoespecial").value = quantity
  } 
  function add38(){
  var quantity = document.querySelector("#soju").value;
  quantity++
  document.querySelector("#soju").value = quantity
  }
  function deduct38(){
  var quantity = document.querySelector("#soju").value;
  quantity--
  document.querySelector("#soju").value = quantity
  } 


/*beer*/  
/*wine*/  
