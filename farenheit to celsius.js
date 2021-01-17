const add = (a) => {
    return a * 1.8 + 32
    //℉ = ℃ * 1.8 + 32
}

const result = add(38) 
console.log(result)
test('test farenhait to celsius', () => {
    expect(console.log).toBe(100.4);
  });