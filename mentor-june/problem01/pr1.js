const sumDigits = (arg1) => {
    let sum = 0
    for (let i of String(arg1)){
        sum+=Number(i)
    }
    return sum
}
console.log(sumDigits(666))
