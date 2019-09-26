document.getElementById("value").addEventListener("input", function(e) { let celsius = e.target.value;
document.getElementById("fahrenheit").innerHTML = ((celsius * 1.8)+32) + "&deg; Fahrenheit";});
