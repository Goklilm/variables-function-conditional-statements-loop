for (i = 0; i < 11; i = i + 2) { //tuka praim ot 1 do 10 prez 2

    console.log(i)
    }
test('test ot 0 do 10 prez 2', () => {
expect(console.log).toBe('0,2,4,6,8,10');
});
