function ScriptOnload() {
  var rgbarray = getRandomIntArray();  
  document.getElementById('random_R').innerHTML = rgbarray[0];
  document.getElementById('random_G').innerHTML = rgbarray[1];
  document.getElementById('random_B').innerHTML = rgbarray[2];

  var colorCSS = 'rgb(' + rgbarray[0] + ',' +  rgbarray[1] + ',' + rgbarray[2] + ')';
  document.body.style.backgroundColor = colorCSS;

  document.getElementById('Hex').innerHTML = rgbToHex(rgbarray);
}

function getRandomIntArray() {
  const rgb_max = 255;
  var rgbarray = new Array(Math.floor(Math.random() * rgb_max), Math.floor(Math.random() * rgb_max), Math.floor(Math.random() * rgb_max));
  return rgbarray;  
}

function rgbToHex(rgbarray) {
  var r = rgbarray[0]
  var g = rgbarray[1]
  var b = rgbarray[2]
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function CopyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("Hex").innerHTML;

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied Hex Code: " + copyText);
}