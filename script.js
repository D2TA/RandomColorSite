var colorarray = new Array();

function setText(rgbarray) {
  document.getElementById('random_R').innerHTML = rgbarray[0];
  document.getElementById('random_G').innerHTML = rgbarray[1];
  document.getElementById('random_B').innerHTML = rgbarray[2];
  return console.log('Text Set')
}

function setBackground(rgbarray) {
  var colorCSS = 'rgb(' + rgbarray[0] + ',' +  rgbarray[1] + ',' + rgbarray[2] + ')';
  document.body.style.backgroundColor = colorCSS;
  console.log('Background color set')
}

function setHexcode(rgbarray) {
  document.getElementById('Hex').innerHTML = rgbToHex(rgbarray);  
  console.log('Hex Code set')
}

function setPrevious(rgbarray) {
  var colorCSS = 'rgb(' + rgbarray[0] + ',' +  rgbarray[1] + ',' + rgbarray[2] + ')';
  colorarray.push([ [rgbarray[0], rgbarray[1], rgbarray[2]], rgbToHex(rgbarray) ]);
  console.log('Previous colors set')
}

function ScriptOnload(rgbarray) {
  if (rgbarray == undefined) {
    var rgbarray = getRandomIntArray();  
  };

  setText(rgbarray)
  setBackground(rgbarray)
  setHexcode(rgbarray)
  setPrevious(rgbarray)
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
  // Reference: https://www.codegrepper.com/code-examples/javascript/js+copy+innerhtml+to+clipboard
  var copyText = document.getElementById("Hex").innerHTML;

  const elem = document.createElement('textarea');
  elem.value = copyText;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
}

function SetPrevious() {
  if (colorarray.length > 1) {
    rgbarray = colorarray[colorarray.length - 2][0]
    return ScriptOnload(rgbarray)
  } else {
    return console.log('No Previous Value')
  }
}