const reverseCount = () => { 
    for (i = 10; i > -1; i--)// Ot 10 do 0
      console.log(i)
  }
  
  
  reverseCount();
  test('test ot 10 do 0', () => {
    expect(console.log).toBe('10,9,8,7,6,5,4,3,2,1,0');
  });