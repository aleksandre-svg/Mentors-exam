const caesar = (string, shift) => {
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let result = ''
    for (let i of string.toLowerCase()){
        if (alp.includes(i)){
            if (alp.indexOf(i)+shift > alp.length-1){
                result+=alp[alp.indexOf(i)+shift-alp.length]
            }else{
                result+=alp[alp.indexOf(i)+shift]
            }
        }else {
            result+=i
        }
    }
    if (string === string.toLowerCase()){
        return result
    }else if (string === string.toUpperCase()){
        return result.toUpperCase()
    }else {
        return result[0].toUpperCase()+result.slice(1, result.length)
    }
}

console.log(caesar("Hello!", 3))