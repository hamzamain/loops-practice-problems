/* var x =22000;
if (x > 80000){
    console.log('I will buy Mack book air');
}
else if(x > 60000 && x <79999){
    console.log('I will buy gaming laptop');
}
else if(x > 40000 && x < 59999){
    console.log('I will buy Leanovo Yoga');
}
else if (x > 20000 && x < 39999){
    console.log('I will buy 2nd hand laptop');
}
else{
    console.log('I will work with mobile');
} */

for(i = 40; i > 1; i--){
// console.log('ajke amar mon valo nei');

}
for(i=30; i<= 86; i++){
    // console.log(i);
    if(i>= 44){
        break;
    }
}
var usedMobile =['samsung', 'symphony', 'htc', 'walton', 'hawaie', 'honor', 'nokia'];
for(i=0; i<usedMobile.length; i++){
    // console.log(usedMobile[i]);
}
var bookPrice =[156, 200, 225, 198, 60, 65, 80]
for( i=0; i< bookPrice.length; i++)
{
    console.log(bookPrice[i])
    if(bookPrice[i] >= 200){
        continue;
    }
}