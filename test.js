 <!DOCTYPE html>

 <html>
 <body>
  <p>Click the button to calculate x.</p>
  <button onclick="myFunction()">Try it</button>
  <br/>
  <br/>Enter first number:
  <input type="text" id="txt1" name="text1">Enter second number:
  <input type="text" id="txt2" name="text2">
  <p id="demo"></p>
 <script>
    function myFunction() 
    {
      var y = document.getElementById("txt1").value;
      var z = document.getElementById("txt2").value;
      var x = parseInt(y) + parseInt(z);
      document.getElementById("demo").innerHTML = x;
    }
 </script>
 </body>
 </html>