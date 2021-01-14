const add = (a) => {
    return (a - 32) / 1.8
    //℉ = ℃ * 1.8 + 32
}

const result = add(100.4) 
console.log(result)