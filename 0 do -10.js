const reverseCount = () => {
    for (i = 10; i > -1; i--) // Ot 0 do -10
      console.log(i - 10)
  }
  
  
  reverseCount();
test('test ot 0 do -10', () => {
expect(console.log).toBe('0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10');
});