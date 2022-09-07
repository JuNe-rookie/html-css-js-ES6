/**
 * 
 * @param {*Number} a 第一个数字
 * @param {*Number} b 第二个数字
 * @return {Number} 两个数字的最大公约数
 */
function getGys(a,b) {
    if(a<b){
        let temp = a
        a=b
        b=temp
    }
    while(a%b!==0){
        let tep =a%b
        a =b
        b =tep
    }
    return b

}