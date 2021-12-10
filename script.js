function ScriptOnload() {
  var rgbarray = getRandomIntArray();  
  document.getElementById('random_R').innerHTML = rgbarray[0];
  document.getElementById('random_G').innerHTML = rgbarray[1];
  document.getElementById('random_B').innerHTML = rgbarray[2];

  var colorCSS = 'rgb(' + rgbarray[0] + ',' +  rgbarray[1] + ',' + rgbarray[2] + ')';
  document.body.style.backgroundColor = colorCSS;
}

function getRandomIntArray() {
  const rgb_max = 255;
  var rgbarray = new Array(Math.floor(Math.random() * rgb_max), Math.floor(Math.random() * rgb_max), Math.floor(Math.random() * rgb_max));
  return rgbarray;  
}