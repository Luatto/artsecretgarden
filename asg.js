  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwC_1LW2J2rCqs0RW4yQpixrQ11aqSsi6odOZ0-RDIOHmcpBU/exec'
  const form = document.forms['submit-to-google-sheet']
  
  form.addEventListener('submit', e => {
	e.preventDefault()
	a()
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
	  //.then(function a(){location.href = "waiting.html"})
      .catch(error => console.error('Error!', error.message))
  });

  	function a() {
	    location.href = "waiting.html";
   };	
  

/*tea*/  
  function add1(){
  var quantity = document.querySelector("#t1").value;
  quantity++
  document.querySelector("#t1").value = quantity
  }
  function deduct1(){
  var quantity = document.querySelector("#t1").value;
  quantity--
  document.querySelector("#t1").value = quantity
  } 
  function add2(){
  var quantity = document.querySelector("#t2").value;
  quantity++
  document.querySelector("#t2").value = quantity
  }
  function deduct2(){
  var quantity = document.querySelector("#t2").value;
  quantity--
  document.querySelector("#t2").value = quantity
  } 
  function add3(){
  var quantity = document.querySelector("#t3").value;
  quantity++
  document.querySelector("#t3").value = quantity
  }
  function deduct3(){
  var quantity = document.querySelector("#t3").value;
  quantity--
  document.querySelector("#t3").value = quantity
  } 
  function add4(){
  var quantity = document.querySelector("#t4").value;
  quantity++
  document.querySelector("#t4").value = quantity
  }
  function deduct4(){
  var quantity = document.querySelector("#t4").value;
  quantity--
  document.querySelector("#t4").value = quantity
  } 
  function add5(){
  var quantity = document.querySelector("#t5").value;
  quantity++
  document.querySelector("#t5").value = quantity
  }
  function deduct5(){
  var quantity = document.querySelector("#t5").value;
  quantity--
  document.querySelector("#t5").value = quantity
  } 
  function add6(){
  var quantity = document.querySelector("#t6").value;
  quantity++
  document.querySelector("#t6").value = quantity
  }
  function deduct6(){
  var quantity = document.querySelector("#t6").value;
  quantity--
  document.querySelector("#t6").value = quantity
  } 
  function add7(){
  var quantity = document.querySelector("#t7").value;
  quantity++
  document.querySelector("#t7").value = quantity
  }
  function deduct7(){
  var quantity = document.querySelector("#t7").value;
  quantity--
  document.querySelector("#t7").value = quantity
  } 
  function add8(){
  var quantity = document.querySelector("#t8").value;
  quantity++
  document.querySelector("#t8").value = quantity
  }
  function deduct8(){
  var quantity = document.querySelector("#t8").value;
  quantity--
  document.querySelector("#t8").value = quantity
  } 
  function add9(){
  var quantity = document.querySelector("#t9").value;
  quantity++
  document.querySelector("#t9").value = quantity
  }
  function deduct9(){
  var quantity = document.querySelector("#t9").value;
  quantity--
  document.querySelector("#t9").value = quantity
  } 
  function add10(){
  var quantity = document.querySelector("#t10").value;
  quantity++
  document.querySelector("#t10").value = quantity
  }
  function deduct10(){
  var quantity = document.querySelector("#t10").value;
  quantity--
  document.querySelector("#t10").value = quantity
  } 
  function add11(){
  var quantity = document.querySelector("#t11").value;
  quantity++
  document.querySelector("#t11").value = quantity
  }
  function deduct11(){
  var quantity = document.querySelector("#t11").value;
  quantity--
  document.querySelector("#t11").value = quantity
  } 
  function add12(){
  var quantity = document.querySelector("#t12").value;
  quantity++
  document.querySelector("#t12").value = quantity
  }
  function deduct12(){
  var quantity = document.querySelector("#t12").value;
  quantity--
  document.querySelector("#t12").value = quantity
  } 
  function add13(){
  var quantity = document.querySelector("#t13").value;
  quantity++
  document.querySelector("#t13").value = quantity
  }
  function deduct13(){
  var quantity = document.querySelector("#t13").value;
  quantity--
  document.querySelector("#t13").value = quantity
  } 
  function add14(){
  var quantity = document.querySelector("#t14").value;
  quantity++
  document.querySelector("#t14").value = quantity
  }
  function deduct14(){
  var quantity = document.querySelector("#t14").value;
  quantity--
  document.querySelector("#t14").value = quantity
  } 
  function add15(){
  var quantity = document.querySelector("#t15").value;
  quantity++
  document.querySelector("#t15").value = quantity
  }
  function deduct15(){
  var quantity = document.querySelector("#t15").value;
  quantity--
  document.querySelector("#t15").value = quantity
  } 
  function add16(){
  var quantity = document.querySelector("#t16").value;
  quantity++
  document.querySelector("#t16").value = quantity
  }
  function deduct16(){
  var quantity = document.querySelector("#t16").value;
  quantity--
  document.querySelector("#t16").value = quantity
  } 
  function add17(){
  var quantity = document.querySelector("#t17").value;
  quantity++
  document.querySelector("#t17").value = quantity
  }
  function deduct17(){
  var quantity = document.querySelector("#t17").value;
  quantity--
  document.querySelector("#t17").value = quantity
  } 
  function add18(){
  var quantity = document.querySelector("#t18").value;
  quantity++
  document.querySelector("#t18").value = quantity
  }
  function deduct18(){
  var quantity = document.querySelector("#t18").value;
  quantity--
  document.querySelector("#t18").value = quantity
  } 
  function add19(){
  var quantity = document.querySelector("#t19").value;
  quantity++
  document.querySelector("#t19").value = quantity
  }
  function deduct19(){
  var quantity = document.querySelector("#t19").value;
  quantity--
  document.querySelector("#t19").value = quantity
  } 
  function add20(){
  var quantity = document.querySelector("#t20").value;
  quantity++
  document.querySelector("#t20").value = quantity
  }
  function deduct20(){
  var quantity = document.querySelector("#t20").value;
  quantity--
  document.querySelector("#t20").value = quantity
  } 
  function add21(){
  var quantity = document.querySelector("#t21").value;
  quantity++
  document.querySelector("#t21").value = quantity
  }
  function deduct21(){
  var quantity = document.querySelector("#t21").value;
  quantity--
  document.querySelector("#t21").value = quantity
  } 
  function add22(){
  var quantity = document.querySelector("#t22").value;
  quantity++
  document.querySelector("#t22").value = quantity
  }
  function deduct22(){
  var quantity = document.querySelector("#t22").value;
  quantity--
  document.querySelector("#t22").value = quantity
  } 
  function add23(){
  var quantity = document.querySelector("#t23").value;
  quantity++
  document.querySelector("#t23").value = quantity
  }
  function deduct23(){
  var quantity = document.querySelector("#t23").value;
  quantity--
  document.querySelector("#t23").value = quantity
  } 
  function add24(){
  var quantity = document.querySelector("#t24").value;
  quantity++
  document.querySelector("#t24").value = quantity
  }
  function deduct24(){
  var quantity = document.querySelector("#t24").value;
  quantity--
  document.querySelector("#t24").value = quantity
  } 
  function add25(){
  var quantity = document.querySelector("#t25").value;
  quantity++
  document.querySelector("#t25").value = quantity
  }
  function deduct25(){
  var quantity = document.querySelector("#t25").value;
  quantity--
  document.querySelector("#t25").value = quantity
  } 
  function add26(){
  var quantity = document.querySelector("#t26").value;
  quantity++
  document.querySelector("#t26").value = quantity
  }
  function deduct26(){
  var quantity = document.querySelector("#t26").value;
  quantity--
  document.querySelector("#t26").value = quantity
  } 
  function add27(){
  var quantity = document.querySelector("#t27").value;
  quantity++
  document.querySelector("#t27").value = quantity
  }
  function deduct27(){
  var quantity = document.querySelector("#t27").value;
  quantity--
  document.querySelector("#t27").value = quantity
  } 
  function add28(){
  var quantity = document.querySelector("#t28").value;
  quantity++
  document.querySelector("#t28").value = quantity
  }
  function deduct28(){
  var quantity = document.querySelector("#t28").value;
  quantity--
  document.querySelector("#t28").value = quantity
  } 
  function add29(){
  var quantity = document.querySelector("#t29").value;
  quantity++
  document.querySelector("#t29").value = quantity
  }
  function deduct29(){
  var quantity = document.querySelector("#t29").value;
  quantity--
  document.querySelector("#t29").value = quantity
  } 
  function add30(){
  var quantity = document.querySelector("#t30").value;
  quantity++
  document.querySelector("#t30").value = quantity
  }
  function deduct30(){
  var quantity = document.querySelector("#t30").value;
  quantity--
  document.querySelector("#t30").value = quantity
  } 
  function add31(){
  var quantity = document.querySelector("#t31").value;
  quantity++
  document.querySelector("#t31").value = quantity
  }
  function deduct31(){
  var quantity = document.querySelector("#t31").value;
  quantity--
  document.querySelector("#t31").value = quantity
  } 
  function add32(){
  var quantity = document.querySelector("#t32").value;
  quantity++
  document.querySelector("#t32").value = quantity
  }
  function deduct32(){
  var quantity = document.querySelector("#t32").value;
  quantity--
  document.querySelector("#t32").value = quantity
  } 
  function add33(){
  var quantity = document.querySelector("#t33").value;
  quantity++
  document.querySelector("#t33").value = quantity
  }
  function deduct33(){
  var quantity = document.querySelector("#t33").value;
  quantity--
  document.querySelector("#t33").value = quantity
  } 
  function add34(){
  var quantity = document.querySelector("#t34").value;
  quantity++
  document.querySelector("#t34").value = quantity
  }
  function deduct34(){
  var quantity = document.querySelector("#t34").value;
  quantity--
  document.querySelector("#t34").value = quantity
  } 
  function add35(){
  var quantity = document.querySelector("#t35").value;
  quantity++
  document.querySelector("#t35").value = quantity
  }
  function deduct35(){
  var quantity = document.querySelector("#t35").value;
  quantity--
  document.querySelector("#t35").value = quantity
  } 
  function add36(){
  var quantity = document.querySelector("#t36").value;
  quantity++
  document.querySelector("#t36").value = quantity
  }
  function deduct36(){
  var quantity = document.querySelector("#t36").value;
  quantity--
  document.querySelector("#t36").value = quantity
  } 
  function add37(){
  var quantity = document.querySelector("#t37").value;
  quantity++
  document.querySelector("#t37").value = quantity
  }
  function deduct37(){
  var quantity = document.querySelector("#t37").value;
  quantity--
  document.querySelector("#t37").value = quantity
  } 
  function add38(){
  var quantity = document.querySelector("#t38").value;
  quantity++
  document.querySelector("#t38").value = quantity
  }
  function deduct38(){
  var quantity = document.querySelector("#t38").value;
  quantity--
  document.querySelector("#t38").value = quantity
  } 


/*beer*/  
/*wine*/  
