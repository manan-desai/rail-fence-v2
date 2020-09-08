module.exports = function enc(plain) {
  var a = "";
  var b = "";
  var c = "";
  var d = "";
  var flag_a = 0;
  for (var i = 0; i < plain.length; i = i + 4) {
    if (flag_a == 0) {
      a += plain.charAt(i);
      //console.log(i+","+(i+1)+","+(i+2)+","+(i+3))
      b += plain.charAt(i + 1);
      c += plain.charAt(i + 2);
      b += plain.charAt(i + 3);
      flag_a = 1;
      continue;
    } else {
      a += plain.charAt(i);
      b += plain.charAt(i + 1);

      //console.log(i+","+(i+1))
      i = i - 2;
      flag_a = 0;
    }
  }
  return a + b + c;
};
