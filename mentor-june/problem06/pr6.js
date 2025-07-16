const numSum = (arg1) => {
    let numbers = '0123456789'
    let sum = 0
    for (let i of String(arg1)){
        if (numbers.includes(i)){
            sum+=Number(i)
        }
    }
    return sum
}

console.log(numSum("100 200"))