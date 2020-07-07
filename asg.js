  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwC_1LW2J2rCqs0RW4yQpixrQ11aqSsi6odOZ0-RDIOHmcpBU/exec'
  const form = document.forms['submit-to-google-sheet']
  
  form.addEventListener('submit', e => {
	e.preventDefault()
	//alert1()
	a()
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
	  //.then(function a(){location.href = "https://luatto.github.io/artsecretgarden/waiting"})
      .catch(error => console.error('Error!', error.message))
  });

  	function a() {
	    location.href = "waiting.html";
   };	

     
//	function alert1(){
//				var meal= document.getElementById("Confirm order").innerText;
//		confirm(meal);
//	};
/**/
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
/**/

/*tea*/  
  function add1(){
  var quantity = document.querySelector("#t1").value;
  quantity++
  document.querySelector("#t1").value = quantity
  var item= document.getElementById("n1").innerText;
  document.querySelector("#confirm1").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm1").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm1").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct1(){
  var quantity = document.querySelector("#t1").value;
  quantity--
  document.querySelector("#t1").value = quantity
  var item= document.getElementById("n1").innerText;
  document.querySelector("#confirm1").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm1").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm1").innerHTML= item + ": " + quantity + "????";}
  } 
  function add2(){
  var quantity = document.querySelector("#t2").value;
  quantity++
  document.querySelector("#t2").value = quantity
  var item= document.getElementById("n2").innerText;
  document.querySelector("#confirm2").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm2").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm2").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct2(){
  var quantity = document.querySelector("#t2").value;
  quantity--
  document.querySelector("#t2").value = quantity
  var item= document.getElementById("n2").innerText;
  document.querySelector("#confirm2").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm2").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm2").innerHTML= item + ": " + quantity + "????";}
  } 
  function add3(){
  var quantity = document.querySelector("#t3").value;
  quantity++
  document.querySelector("#t3").value = quantity
  var item= document.getElementById("n3").innerText;
  document.querySelector("#confirm3").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm3").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm3").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct3(){
  var quantity = document.querySelector("#t3").value;
  quantity--
  document.querySelector("#t3").value = quantity
  var item= document.getElementById("n3").innerText;
  document.querySelector("#confirm3").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm3").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm3").innerHTML= item + ": " + quantity + "????";}
  } 
  function add4(){
  var quantity = document.querySelector("#t4").value;
  quantity++
  document.querySelector("#t4").value = quantity
  var item= document.getElementById("n4").innerText;
  document.querySelector("#confirm4").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm4").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm4").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct4(){
  var quantity = document.querySelector("#t4").value;
  quantity--
  document.querySelector("#t4").value = quantity
  var item= document.getElementById("n4").innerText;
  document.querySelector("#confirm4").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm4").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm4").innerHTML= item + ": " + quantity + "????";}
  } 
  function add5(){
  var quantity = document.querySelector("#t5").value;
  quantity++
  document.querySelector("#t5").value = quantity
  var item= document.getElementById("n5").innerText;
  document.querySelector("#confirm5").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm5").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm5").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct5(){
  var quantity = document.querySelector("#t5").value;
  quantity--
  document.querySelector("#t5").value = quantity
  var item= document.getElementById("n5").innerText;
  document.querySelector("#confirm5").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm5").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm5").innerHTML= item + ": " + quantity + "????";}
  } 
  function add6(){
  var quantity = document.querySelector("#t6").value;
  quantity++
  document.querySelector("#t6").value = quantity
  var item= document.getElementById("n6").innerText;
  document.querySelector("#confirm6").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm6").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm6").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct6(){
  var quantity = document.querySelector("#t6").value;
  quantity--
  document.querySelector("#t6").value = quantity
  var item= document.getElementById("n6").innerText;
  document.querySelector("#confirm6").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm6").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm6").innerHTML= item + ": " + quantity + "????";}
  } 
  function add7(){
  var quantity = document.querySelector("#t7").value;
  quantity++
  document.querySelector("#t7").value = quantity
  var item= document.getElementById("n7").innerText;
  document.querySelector("#confirm7").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm7").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm7").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct7(){
  var quantity = document.querySelector("#t7").value;
  quantity--
  document.querySelector("#t7").value = quantity
  var item= document.getElementById("n7").innerText;
  document.querySelector("#confirm7").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm7").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm7").innerHTML= item + ": " + quantity + "????";}
  } 
  function add8(){
  var quantity = document.querySelector("#t8").value;
  quantity++
  document.querySelector("#t8").value = quantity
  var item= document.getElementById("n8").innerText;
  document.querySelector("#confirm8").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm8").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm8").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct8(){
  var quantity = document.querySelector("#t8").value;
  quantity--
  document.querySelector("#t8").value = quantity
  var item= document.getElementById("n8").innerText;
  document.querySelector("#confirm8").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm8").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm8").innerHTML= item + ": " + quantity + "????";}
  } 
  function add9(){
  var quantity = document.querySelector("#t9").value;
  quantity++
  document.querySelector("#t9").value = quantity
  var item= document.getElementById("n9").innerText;
  document.querySelector("#confirm9").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm9").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm9").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct9(){
  var quantity = document.querySelector("#t9").value;
  quantity--
  document.querySelector("#t9").value = quantity
  var item= document.getElementById("n9").innerText;
  document.querySelector("#confirm9").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm9").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm9").innerHTML= item + ": " + quantity + "????";}
  } 
  function add10(){
  var quantity = document.querySelector("#t10").value;
  quantity++
  document.querySelector("#t10").value = quantity
  var item= document.getElementById("n10").innerText;
  document.querySelector("#confirm10").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm10").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm10").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct10(){
  var quantity = document.querySelector("#t10").value;
  quantity--
  document.querySelector("#t10").value = quantity
  var item= document.getElementById("n10").innerText;
  document.querySelector("#confirm10").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm10").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm10").innerHTML= item + ": " + quantity + "????";}
  } 
  function add11(){
  var quantity = document.querySelector("#t11").value;
  quantity++
  document.querySelector("#t11").value = quantity
  var item= document.getElementById("n11").innerText;
  document.querySelector("#confirm11").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm11").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm11").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct11(){
  var quantity = document.querySelector("#t11").value;
  quantity--
  document.querySelector("#t11").value = quantity
  var item= document.getElementById("n11").innerText;
  document.querySelector("#confirm11").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm11").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm11").innerHTML= item + ": " + quantity + "????";}
  } 
  function add12(){
  var quantity = document.querySelector("#t12").value;
  quantity++
  document.querySelector("#t12").value = quantity
  var item= document.getElementById("n12").innerText;
  document.querySelector("#confirm12").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm12").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm12").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct12(){
  var quantity = document.querySelector("#t12").value;
  quantity--
  document.querySelector("#t12").value = quantity
  var item= document.getElementById("n12").innerText;
  document.querySelector("#confirm12").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm12").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm12").innerHTML= item + ": " + quantity + "????";}
  } 
  function add13(){
  var quantity = document.querySelector("#t13").value;
  quantity++
  document.querySelector("#t13").value = quantity
  var item= document.getElementById("n13").innerText;
  document.querySelector("#confirm13").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm13").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm13").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct13(){
  var quantity = document.querySelector("#t13").value;
  quantity--
  document.querySelector("#t13").value = quantity
  var item= document.getElementById("n13").innerText;
  document.querySelector("#confirm13").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm13").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm13").innerHTML= item + ": " + quantity + "????";}
  } 
  function add14(){
  var quantity = document.querySelector("#t14").value;
  quantity++
  document.querySelector("#t14").value = quantity
  var item= document.getElementById("n14").innerText;
  document.querySelector("#confirm14").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm14").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm14").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct14(){
  var quantity = document.querySelector("#t14").value;
  quantity--
  document.querySelector("#t14").value = quantity
  var item= document.getElementById("n14").innerText;
  document.querySelector("#confirm14").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm14").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm14").innerHTML= item + ": " + quantity + "????";}
  } 
  function add15(){
  var quantity = document.querySelector("#t15").value;
  quantity++
  document.querySelector("#t15").value = quantity
  var item= document.getElementById("n15").innerText;
  document.querySelector("#confirm15").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm15").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm15").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct15(){
  var quantity = document.querySelector("#t15").value;
  quantity--
  document.querySelector("#t15").value = quantity
  var item= document.getElementById("n15").innerText;
  document.querySelector("#confirm15").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm15").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm15").innerHTML= item + ": " + quantity + "????";}
  } 
  function add16(){
  var quantity = document.querySelector("#t16").value;
  quantity++
  document.querySelector("#t16").value = quantity
  var item= document.getElementById("n16").innerText;
  document.querySelector("#confirm16").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm16").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm16").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct16(){
  var quantity = document.querySelector("#t16").value;
  quantity--
  document.querySelector("#t16").value = quantity
  var item= document.getElementById("n16").innerText;
  document.querySelector("#confirm16").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm16").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm16").innerHTML= item + ": " + quantity + "????";}
  } 
  function add17(){
  var quantity = document.querySelector("#t17").value;
  quantity++
  document.querySelector("#t17").value = quantity
  var item= document.getElementById("n17").innerText;
  document.querySelector("#confirm17").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm17").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm17").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct17(){
  var quantity = document.querySelector("#t17").value;
  quantity--
  document.querySelector("#t17").value = quantity
  var item= document.getElementById("n17").innerText;
  document.querySelector("#confirm17").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm17").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm17").innerHTML= item + ": " + quantity + "????";}
  } 
  function add18(){
  var quantity = document.querySelector("#t18").value;
  quantity++
  document.querySelector("#t18").value = quantity
  var item= document.getElementById("n18").innerText;
  document.querySelector("#confirm18").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm18").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm18").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct18(){
  var quantity = document.querySelector("#t18").value;
  quantity--
  document.querySelector("#t18").value = quantity
  var item= document.getElementById("n18").innerText;
  document.querySelector("#confirm18").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm18").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm18").innerHTML= item + ": " + quantity + "????";}
  } 
  function add19(){
  var quantity = document.querySelector("#t19").value;
  quantity++
  document.querySelector("#t19").value = quantity
  var item= document.getElementById("n19").innerText;
  document.querySelector("#confirm19").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm19").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm19").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct19(){
  var quantity = document.querySelector("#t19").value;
  quantity--
  document.querySelector("#t19").value = quantity
  var item= document.getElementById("n19").innerText;
  document.querySelector("#confirm19").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm19").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm19").innerHTML= item + ": " + quantity + "????";}
  } 
  function add20(){
  var quantity = document.querySelector("#t20").value;
  quantity++
  document.querySelector("#t20").value = quantity
  var item= document.getElementById("n20").innerText;
  document.querySelector("#confirm20").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm20").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm20").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct20(){
  var quantity = document.querySelector("#t20").value;
  quantity--
  document.querySelector("#t20").value = quantity
  var item= document.getElementById("n20").innerText;
  document.querySelector("#confirm20").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm20").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm20").innerHTML= item + ": " + quantity + "????";}
  } 
  function add21(){
  var quantity = document.querySelector("#t21").value;
  quantity++
  document.querySelector("#t21").value = quantity
  var item= document.getElementById("n21").innerText;
  document.querySelector("#confirm21").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm21").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm21").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct21(){
  var quantity = document.querySelector("#t21").value;
  quantity--
  document.querySelector("#t21").value = quantity
  var item= document.getElementById("n21").innerText;
  document.querySelector("#confirm21").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm21").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm21").innerHTML= item + ": " + quantity + "????";}
  } 
  function add22(){
  var quantity = document.querySelector("#t22").value;
  quantity++
  document.querySelector("#t22").value = quantity
  var item= document.getElementById("n22").innerText;
  document.querySelector("#confirm22").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm22").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm22").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct22(){
  var quantity = document.querySelector("#t22").value;
  quantity--
  document.querySelector("#t22").value = quantity
  var item= document.getElementById("n22").innerText;
  document.querySelector("#confirm22").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm22").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm22").innerHTML= item + ": " + quantity + "????";}
  } 
  function add23(){
  var quantity = document.querySelector("#t23").value;
  quantity++
  document.querySelector("#t23").value = quantity
  var item= document.getElementById("n23").innerText;
  document.querySelector("#confirm23").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm23").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm23").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct23(){
  var quantity = document.querySelector("#t23").value;
  quantity--
  document.querySelector("#t23").value = quantity
  var item= document.getElementById("n23").innerText;
  document.querySelector("#confirm23").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm23").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm23").innerHTML= item + ": " + quantity + "????";}
  } 
  function add24(){
  var quantity = document.querySelector("#t24").value;
  quantity++
  document.querySelector("#t24").value = quantity
  var item= document.getElementById("n24").innerText;
  document.querySelector("#confirm24").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm24").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm24").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct24(){
  var quantity = document.querySelector("#t24").value;
  quantity--
  document.querySelector("#t24").value = quantity
  var item= document.getElementById("n24").innerText;
  document.querySelector("#confirm24").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm24").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm24").innerHTML= item + ": " + quantity + "????";}
  } 
  function add25(){
  var quantity = document.querySelector("#t25").value;
  quantity++
  document.querySelector("#t25").value = quantity
  var item= document.getElementById("n25").innerText;
  document.querySelector("#confirm25").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm25").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm25").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct25(){
  var quantity = document.querySelector("#t25").value;
  quantity--
  document.querySelector("#t25").value = quantity
  var item= document.getElementById("n25").innerText;
  document.querySelector("#confirm25").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm25").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm25").innerHTML= item + ": " + quantity + "????";}
  } 
  function add26(){
  var quantity = document.querySelector("#t26").value;
  quantity++
  document.querySelector("#t26").value = quantity
  var item= document.getElementById("n26").innerText;
  document.querySelector("#confirm26").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm26").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm26").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct26(){
  var quantity = document.querySelector("#t26").value;
  quantity--
  document.querySelector("#t26").value = quantity
  var item= document.getElementById("n26").innerText;
  document.querySelector("#confirm26").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm26").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm26").innerHTML= item + ": " + quantity + "????";}
  } 
  function add27(){
  var quantity = document.querySelector("#t27").value;
  quantity++
  document.querySelector("#t27").value = quantity
  var item= document.getElementById("n27").innerText;
  document.querySelector("#confirm27").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm27").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm27").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct27(){
  var quantity = document.querySelector("#t27").value;
  quantity--
  document.querySelector("#t27").value = quantity
  var item= document.getElementById("n27").innerText;
  document.querySelector("#confirm27").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm27").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm27").innerHTML= item + ": " + quantity + "????";}
  } 
  function add28(){
  var quantity = document.querySelector("#t28").value;
  quantity++
  document.querySelector("#t28").value = quantity
  var item= document.getElementById("n28").innerText;
  document.querySelector("#confirm28").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm28").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm28").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct28(){
  var quantity = document.querySelector("#t28").value;
  quantity--
  document.querySelector("#t28").value = quantity
  var item= document.getElementById("n28").innerText;
  document.querySelector("#confirm28").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm28").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm28").innerHTML= item + ": " + quantity + "????";}
  } 
  function add29(){
  var quantity = document.querySelector("#t29").value;
  quantity++
  document.querySelector("#t29").value = quantity
  var item= document.getElementById("n29").innerText;
  document.querySelector("#confirm29").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm29").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm29").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct29(){
  var quantity = document.querySelector("#t29").value;
  quantity--
  document.querySelector("#t29").value = quantity
  var item= document.getElementById("n29").innerText;
  document.querySelector("#confirm29").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm29").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm29").innerHTML= item + ": " + quantity + "????";}
  } 
  function add30(){
  var quantity = document.querySelector("#t30").value;
  quantity++
  document.querySelector("#t30").value = quantity
  var item= document.getElementById("n30").innerText;
  document.querySelector("#confirm30").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm30").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm30").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct30(){
  var quantity = document.querySelector("#t30").value;
  quantity--
  document.querySelector("#t30").value = quantity
  var item= document.getElementById("n30").innerText;
  document.querySelector("#confirm30").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm30").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm30").innerHTML= item + ": " + quantity + "????";}
  } 
  function add31(){
  var quantity = document.querySelector("#t31").value;
  quantity++
  document.querySelector("#t31").value = quantity
  var item= document.getElementById("n31").innerText;
  document.querySelector("#confirm31").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm31").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm31").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct31(){
  var quantity = document.querySelector("#t31").value;
  quantity--
  document.querySelector("#t31").value = quantity
  var item= document.getElementById("n31").innerText;
  document.querySelector("#confirm31").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm31").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm31").innerHTML= item + ": " + quantity + "????";}
  } 
  function add32(){
  var quantity = document.querySelector("#t32").value;
  quantity++
  document.querySelector("#t32").value = quantity
  var item= document.getElementById("n32").innerText;
  document.querySelector("#confirm32").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm32").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm32").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct32(){
  var quantity = document.querySelector("#t32").value;
  quantity--
  document.querySelector("#t32").value = quantity
  var item= document.getElementById("n32").innerText;
  document.querySelector("#confirm32").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm32").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm32").innerHTML= item + ": " + quantity + "????";}
  } 
  function add33(){
  var quantity = document.querySelector("#t33").value;
  quantity++
  document.querySelector("#t33").value = quantity
  var item= document.getElementById("n33").innerText;
  document.querySelector("#confirm33").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm33").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm33").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct33(){
  var quantity = document.querySelector("#t33").value;
  quantity--
  document.querySelector("#t33").value = quantity
  var item= document.getElementById("n33").innerText;
  document.querySelector("#confirm33").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm33").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm33").innerHTML= item + ": " + quantity + "????";}
  } 
  function add34(){
  var quantity = document.querySelector("#t34").value;
  quantity++
  document.querySelector("#t34").value = quantity
  var item= document.getElementById("n34").innerText;
  document.querySelector("#confirm34").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm34").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm34").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct34(){
  var quantity = document.querySelector("#t34").value;
  quantity--
  document.querySelector("#t34").value = quantity
  var item= document.getElementById("n34").innerText;
  document.querySelector("#confirm34").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm34").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm34").innerHTML= item + ": " + quantity + "????";}
  } 
  function add35(){
  var quantity = document.querySelector("#t35").value;
  quantity++
  document.querySelector("#t35").value = quantity
  var item= document.getElementById("n35").innerText;
  document.querySelector("#confirm35").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm35").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm35").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct35(){
  var quantity = document.querySelector("#t35").value;
  quantity--
  document.querySelector("#t35").value = quantity
  var item= document.getElementById("n35").innerText;
  document.querySelector("#confirm35").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm35").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm35").innerHTML= item + ": " + quantity + "????";}
  } 
  function add36(){
  var quantity = document.querySelector("#t36").value;
  quantity++
  document.querySelector("#t36").value = quantity
  var item= document.getElementById("n36").innerText;
  document.querySelector("#confirm36").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm36").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm36").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct36(){
  var quantity = document.querySelector("#t36").value;
  quantity--
  document.querySelector("#t36").value = quantity
  var item= document.getElementById("n36").innerText;
  document.querySelector("#confirm36").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm36").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm36").innerHTML= item + ": " + quantity + "????";}
  } 
  function add37(){
  var quantity = document.querySelector("#t37").value;
  quantity++
  document.querySelector("#t37").value = quantity
  var item= document.getElementById("n37").innerText;
  document.querySelector("#confirm37").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm37").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm37").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct37(){
  var quantity = document.querySelector("#t37").value;
  quantity--
  document.querySelector("#t37").value = quantity
  var item= document.getElementById("n37").innerText;
  document.querySelector("#confirm37").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm37").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm37").innerHTML= item + ": " + quantity + "????";}
  } 
  function add38(){
  var quantity = document.querySelector("#t38").value;
  quantity++
  document.querySelector("#t38").value = quantity
  var item= document.getElementById("n38").innerText;
  document.querySelector("#confirm38").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm38").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm38").innerHTML= item + ": " + quantity + "????";}
  }
  function deduct38(){
  var quantity = document.querySelector("#t38").value;
  quantity--
  document.querySelector("#t38").value = quantity
  var item= document.getElementById("n38").innerText;
  document.querySelector("#confirm38").innerHTML= item + ": " + quantity;
  if(quantity===0){document.querySelector("#confirm38").innerHTML=""}
  else if(quantity<0){document.querySelector("#confirm38").innerHTML= item + ": " + quantity + "????";}
  } 

 


/*beer*/  
/*wine*/  
