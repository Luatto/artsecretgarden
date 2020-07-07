<!doctype html>
<html lang="en">
<head>
<link rel="stylesheet" style="css/text" href="asg.css">
</head>
<body>

<div style="margin-left:20px; position:fixed;">
  <button onclick="on()" style="width:150px;"> CONFIRM ORDER</button>
</div>

<form name="submit-to-google-sheet">
<div class="order">
<script src="asg.js"></script>
  <div class="infoinput"><input name="email" placeholder="Your Name or Table Number" required></div>
  
 <div id="overlay" onclick="off()">
  <div id="text">
  <table style="color:black; font-size:18px;">
  <tr>
  Your order is:
  </tr>
<tr id="confirm1"></tr>
<tr id="confirm2"></tr>
<tr id="confirm3"></tr>
<tr id="confirm4"></tr>
<tr id="confirm5"></tr>
<tr id="confirm6"></tr>
<tr id="confirm7"></tr>
<tr id="confirm8"></tr>
<tr id="confirm9"></tr>
<tr id="confirm10"></tr>
<tr id="confirm11"></tr>
<tr id="confirm12"></tr>
<tr id="confirm13"></tr>
<tr id="confirm14"></tr>
<tr id="confirm15"></tr>
<tr id="confirm16"></tr>
<tr id="confirm17"></tr>
<tr id="confirm18"></tr>
<tr id="confirm19"></tr>
<tr id="confirm20"></tr>
<tr id="confirm21"></tr>
<tr id="confirm22"></tr>
<tr id="confirm23"></tr>
<tr id="confirm24"></tr>
<tr id="confirm25"></tr>
<tr id="confirm26"></tr>
<tr id="confirm27"></tr>
<tr id="confirm28"></tr>
<tr id="confirm29"></tr>
<tr id="confirm30"></tr>
<tr id="confirm31"></tr>
<tr id="confirm32"></tr>
<tr id="confirm33"></tr>
<tr id="confirm34"></tr>
<tr id="confirm35"></tr>
<tr id="confirm36"></tr>
<tr id="confirm37"></tr>
<tr id="confirm38"></tr>
<tr id="confirm39"></tr>
<tr id="confirm40"></tr>
  </table>
  <div class="orderbutton"><button type="submit" class="button">ORDER</button></div>
  </div>
</div>
 <br><br><br>
  <hr>
  <h1>
  JUICE
  </h1>  
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t1" id="t1" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t2" id="t2" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t3" id="t3" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t4" id="t4" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/pineapple.jpg" width="80" height="50" onclick="add1();"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/carrot.jpg" width="80" height="50" onclick="add2()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/watermelon.jpg" width="80" height="50" onclick="add3()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/orange.jpg" width="80" height="50" onclick="add4()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n1"><b>pineapple</b></td>
  <td colspan="2" style="text-align:center;" id="n2"><b>carrot</b></td>
  <td colspan="2" style="text-align:center;" id="n3"><b>watermelon</b></td>
  <td colspan="2" style="text-align:center;" id="n4"><b>orange</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add1()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct1()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add2()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct2()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add3()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct3()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add4()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct4()">-</button></td>
  </tr>
  </table>
  <br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t5" id="t5" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t6" id="t6" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t7" id="t7" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/passion.jpg" width="80" height="50" onclick="add5()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/coconut.jpg" width="80" height="50" onclick="add6()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/juice/mojito.jpg" width="80" height="50" onclick="add7()"></td>
  <td colspan="2" style="text-align:center;"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n5"><b>passion</b></td>
  <td colspan="2" style="text-align:center;" id="n6"><b>coconut</b></td>
  <td colspan="2" style="text-align:center;" id="n7"><b>mojito</b></td>
  <td colspan="2" style="text-align:center;"><b></b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add5()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct5()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add6()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct6()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add7()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct7()">-</button></td>
  <td style="text-align:right;"></td>
  <td style="text-align:left;"></td>
  </tr>
  </table>
  
  <br>
  <hr>
  
  <h1>
  COFFEE
  </h1>  
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t8" id="t8" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t9" id="t9" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t10" id="t10" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t11" id="t11" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/coffee/espresso.jpg" width="80" height="50" onclick="add8()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/coffee/americano.jpg" width="80" height="50" onclick="add9()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/coffee/duatuyet.jpg" width="80" height="50" onclick="add10()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/coffee/cotdua.jpg" width="80" height="50" onclick="add11()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n8"><b>espresso</b></td>
  <td colspan="2" style="text-align:center;" id="n9"><b>americano</b></td>
  <td colspan="2" style="text-align:center;" id="n10"><b>duatuyet</b></td>
  <td colspan="2" style="text-align:center;" id="n11"><b>cotdua</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add8()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct8()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add9()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct9()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add10()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct10()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add11()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct11()">-</button></td>
  </tr>
  </table>
  <br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t12" id="t12" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t13" id="t13" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"></td>
  <td colspan="2" style="text-align:center;"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/coffee/socola.jpg" width="80" height="50" onclick="add12()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/coffee/bo.jpg" width="80" height="50" onclick="add13()"></td>
  <td colspan="2" style="text-align:center;"></td>
  <td colspan="2" style="text-align:center;"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n12"><b>socola</b></td>
  <td colspan="2" style="text-align:center;" id="n13"><b>bo</b></td>
  <td colspan="2" style="text-align:center;"><b></b></td>
  <td colspan="2" style="text-align:center;"><b></b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add12()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct12()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add13()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct13()">-</button></td>
  <td style="text-align:right;"></td>
  <td style="text-align:left;"></td>
  <td style="text-align:right;"></td>
  <td style="text-align:left;"></td>
  </tr>
  </table>
  
  <br>
  <hr>

<h1>
  BEER
  </h1>  
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t14" id="t14" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t15" id="t15" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t16" id="t16" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t17" id="t17" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add14()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add15()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add16()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add17()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n14"><b>saigonspecial</b></td>
  <td colspan="2" style="text-align:center;" id="n15"><b>tigercrystal</b></td>
  <td colspan="2" style="text-align:center;" id="n16"><b>budweiser</b></td>
  <td colspan="2" style="text-align:center;" id="n17"><b>truc bach</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add14()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct14()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add15()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct15()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add16()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct16()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add17()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct17()">-</button></td>
  </tr>
  </table>
  <br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t18" id="t18" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t19" id="t19" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t20" id="t20" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t21" id="t21" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add18()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add19()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add20()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add21()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n18"><b>lao</b></td>
  <td colspan="2" style="text-align:center;" id="n19"><b>heniken</b></td>
  <td colspan="2" style="text-align:center;" id="n20"><b>laoblack</b></td>
  <td colspan="2" style="text-align:center;" id="n21"><b>corona</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add18()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct18()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add19()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct19()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add20()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct20()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add21()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct21()">-</button></td>
  </tr>
  </table>
  <br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t22" id="t22" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"></td>
  <td colspan="2" style="text-align:center;"></td>
  <td colspan="2" style="text-align:center;"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/beer/beer.jpg" width="80" height="50" onclick="add22()"></td>
  <td colspan="2" style="text-align:center;"></td>
  <td colspan="2" style="text-align:center;"></td>
  <td colspan="2" style="text-align:center;"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n22"><b>hoegarden</b></td>
  <td colspan="2" style="text-align:center;"><b></b></td>
  <td colspan="2" style="text-align:center;"><b></b></td>
  <td colspan="2" style="text-align:center;"><b></b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add22()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct22()">-</button></td>
  <td style="text-align:right;"></td>
  <td style="text-align:left;"></td>
  <td style="text-align:right;"></td>
  <td style="text-align:left;"></td>
  <td style="text-align:right;"></td>
  <td style="text-align:left;"></td>
  </tr>
  </table>
  
  <br>
  <hr>   

<h1>
  WINE
  </h1>  
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t23" id="t23" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t24" id="t24" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t25" id="t25" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t26" id="t26" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add23()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add24()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add25()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add26()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n23"><b>ballantine30</b></td>
  <td colspan="2" style="text-align:center;" id="n24"><b>johnniewalkerblue21</b></td>
  <td colspan="2" style="text-align:center;" id="n25"><b>ballantine21</b></td>
  <td colspan="2" style="text-align:center;" id="n26"><b>royalsalute21</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add23()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct23()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add24()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct24()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add25()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct25()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add26()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct26()">-</button></td>
  </tr>
  </table>
  <br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t27" id="t27" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t28" id="t28" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t29" id="t29" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t30" id="t30" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add27()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add28()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add29()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add30()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n27"><b>windsor21</b></td>
  <td colspan="2" style="text-align:center;" id="n28"><b>ballantine17</b></td>
  <td colspan="2" style="text-align:center;" id="n29"><b>scotthblue21</b></td>
  <td colspan="2" style="text-align:center;" id="n30"><b>goldenblue17</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add27()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct27()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add28()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct28()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add29()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct29()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add30()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct30()">-</button></td>
  </tr>
  </table>
  <br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t31" id="t31" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t32" id="t32" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t33" id="t33" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t34" id="t34" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add31()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add32()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add33()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add34()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n31"><b>windsor17</b></td>
  <td colspan="2" style="text-align:center;" id="n32"><b>scotthblue17</b></td>
  <td colspan="2" style="text-align:center;" id="n33"><b>goldenblue12</b></td>
  <td colspan="2" style="text-align:center;" id="n34"><b>windsor12</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add31()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct31()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add32()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct32()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add33()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct33()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add34()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct34()">-</button></td>
  </tr>
  </table>
<br>
  <table>
  <tr>
  <td colspan="2" style="text-align:center;"><input name="t35" id="t35" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t36" id="t36" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t37" id="t37" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  <td colspan="2" style="text-align:center;"><input name="t38" id="t38" size="1" value="0" style="text-align:right; background-color: #e3d8c6; border:none;"> x 60,000đ</td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add35()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add36()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add37()"></td>
  <td colspan="2" style="text-align:center;"><img src="https://luatto.github.io/artsecretgarden/image/wine/wine.jpg" width="80" height="50" onclick="add38()"></td>
  </tr>
  <tr>
  <td colspan="2" style="text-align:center;" id="n35"><b>johnniewalkerblack12</b></td>
  <td colspan="2" style="text-align:center;" id="n36"><b>ballantine12</b></td>
  <td colspan="2" style="text-align:center;" id="n37"><b>josecuervoespecial</b></td>
  <td colspan="2" style="text-align:center;" id="n38"><b>soju</b></td>
  </tr>
  <tr>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add35()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct35()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add36()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct36()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add37()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct37()">-</button></td>
  <td style="text-align:right;"><button type="button" style="width:20px; height:20px;" onclick="add38()">+</button></td>
  <td style="text-align:left;"><button type="button" style="width:20px; height:20px;" onclick="deduct38()">-</button></td>
  </tr>
  </table>  
  <br>
  
  </div>
</form>
</body>
</html>
