/* for(var i = 0; i <= 10; i++){
    console.log(i);
} */
var nums = [10, 12, 20, 23, 30, 34, 40, 122, 221, 50, 500];
/* 
for (var i = 0; i < nums.length ; i++){
    var num = nums[i];
    console.log(num);
}  */

var itemsOnTable = ['bottol', 'plate', 'bati', 'chamoch',];
// itemsOnTable.unshift('glass');
itemsOnTable.push('mug', 'lobonddani');
for (var i = 0; i < itemsOnTable.length; i++){
    var num = itemsOnTable[i];
   
    if( num == 'bati'){
        continue;
    }
    else if(num == 'mug'){
        continue;
    }
    console.log(num);
}