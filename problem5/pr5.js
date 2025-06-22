const armstrong = (arg1) => {
    result = 0
    for (let i of String(arg1)){
        result+=Number(i)**(String(arg1).length)
    }
    return result==arg1
}

console.log(armstrong(9474))
