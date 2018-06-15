var plain_txt = "mynameismanan123456"


function enc(plain){
  var a = ''
  var b = ''
  var c = ''
  var d =''
  var flag_a = 0
for(var i = 0;i<plain.length;i=i+4){
    if(flag_a == 0){
    a += plain.charAt(i)
   //console.log(i+","+(i+1)+","+(i+2)+","+(i+3))
    b += plain.charAt(i+1)
    c += plain.charAt(i+2)
    b += plain.charAt(i+3)
    flag_a = 1
    continue
    }

    else{

        a += plain.charAt(i)
        b += plain.charAt(i+1)

    //console.log(i+","+(i+1))
        i = i-2
        flag_a = 0
    }
}
return (a+b+c)
}
console.log("encryption is = "+enc(plain_txt))


function dec(cipher){
var plain = ''
var a =''
var b =''
var c =''
var length = cipher.length
var multply = parseInt(length/6)
if (length>=6){
a = cipher.slice(0, (2*multply));
b = cipher.slice((2*multply),(5*multply));
c = cipher.slice((5*multply));
}
if((length%6)==1){
  a =  cipher.slice(0, (2*multply)+1);
  b = cipher.slice((2*multply)+1,(5*multply)+1);
  c = cipher.slice((5*multply)+1);
}
else if((length%6)==2){
  a =  cipher.slice(0, (2*multply)+1);
  b = cipher.slice((2*multply)+1,(5*multply)+2);
  c = cipher.slice((5*multply)+3);
}

else if((length%6)==3){
  a =  cipher.slice(0, (2*multply)+1);
  b = cipher.slice((2*multply)+1,(5*multply)+2);
  c = cipher.slice((5*multply)+2);
}
else if((length%6)==4){
  a =  cipher.slice(0, (2*multply)+1);
  b = cipher.slice((2*multply)+1,(5*multply)+3);
  c = cipher.slice((5*multply)+3);
}
else if((length%6)==5){
  a =  cipher.slice(0, (2*multply)+2);
  b = cipher.slice((2*multply)+2,(5*multply)+4);
  c = cipher.slice((5*multply)+4);
}
var a_counter = 0
var b_counter = 0
var c_counter = 0

for(var i = 0;i<length-1;i+=6){
plain += a.charAt(a_counter) + b.charAt(b_counter) + c.charAt(c_counter)+b.charAt(b_counter+1)+a.charAt(a_counter+1)+b.charAt(b_counter+2);
a_counter+=2;
b_counter+=3;
c_counter++;
}
if((length % 6)==1){
    plain += a.charAt(a_counter) ;
  }
  else if((length % 6)==2){
    plain += a.charAt(a_counter) + b.charAt(b_counter);
  }
  else if((length % 6)==3){
    plain += a.charAt(a_counter) + b.charAt(b_counter) + c.charAt(c_counter);
  }
  else if((length % 6)==4){
    plain += a.charAt(a_counter) + b.charAt(b_counter) + c.charAt(c_counter)+b.charAt(b_counter+1);
  }
  else if((length % 6)==5){
    plain += a.charAt(a_counter) + b.charAt(b_counter) + c.charAt(c_counter)+b.charAt(b_counter+1)+a.charAt(a_counter+1);
  }                                                                                           //abcbab
return plain;
}

console.log("decryption is = "+dec(enc(plain_txt)))
