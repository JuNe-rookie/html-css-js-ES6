function swap(a, b) {
    let temp = a
    a = b
    b = temp
    console.log(`函数内部的a是${a},b是${b}`)
    return {
        a,
        b
    }
}
let {
    a,
    b
} = swap(10, 20)
console.log(`函数外部的a是${a},b是${b}`)