let number = 6 //tuka smenqme chislata za da poluchim razlichni otgovori
if (number === 6) {
console.log("yea") //yea
} else if (number === 5) {
console.log("nah") //nah
}
test('test za nomera', () => {
    expect(console.log).toBe('yea');
  });