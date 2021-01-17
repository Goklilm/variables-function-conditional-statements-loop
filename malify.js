const mailify = (name) => {
    let result = 'myemail.test'
   name = "@mail.com"
      result = result + name
    
  
    return result
  }
  console.log(mailify('myemail.test'))
  
  test('test mailify', () => {
    expect(console.log).toBe('myemail.test@mail.com');
  });