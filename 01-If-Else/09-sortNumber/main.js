let x = Number(prompt("enter 1st number"));
let y = +prompt("enter 2nd number");
let z = prompt("enter 3rd number")*1;

//case1 xมากสุด
//case2 yมากสุด
//case3 zมากสุด
//DRY Principle : Don't Repeat Yourself
let max;
let mid;
let min;

if (x>=y && x>=z){
    max = x;
    if(y>=z){
        mid = y;
        min = z;
    }
    else {
        mid = z;
        min = y;
    }
}else if (y>=x && y>=z){
        max = y;
    if(x>=z){
        mid = x;
        min = z;
    }
    else {
        mid = z;
        min = x;
    }
}else if (z>=x && z>=y){
        max = z;
        if(x>=y){
            mid = x;
            min = y;
        }
        else {
            mid = y;
            min = x;
        }
}

console.log(`${max}:${mid}:${min}`);

// if (x >= y && x >= z && y >= z) {
//     // x,y,z
//     max = x;
//     mid = y;
//     min = z;
// } else if (x >= y && x >= z && y < z) {
//     max = x;
//     mid = z;
//     min = y;
// } else if (y >= x && y >= z && x >= z) {
//     max = y;
//     mid = x;
//     min = z;
// } else if (y >= x && y >= z && x < z) {
//     max = y;
//     mid = z;
//     min = x;
// } else if (z >= x && z >= y && x >= y) {
//     max = z;
//     mid = x;
//     min = y;
// } else {
//     max = z;
//     mid = y;
//     min = x;
// }
