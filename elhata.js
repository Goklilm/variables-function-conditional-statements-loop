const christmasTree = (size) => {
    let star = '*'
    let space = ' '
    let toy = 'o'
    for (let i = 0; i <= 1 / 2; i++) {}
      console.log('   _')
      console.log(' {\\o/}')
      console.log('  /_\\')
    
    for (let i = 1, n = 3; i <= size, n <= size; i = i + 4, n = n + 4) {
      console.log(space.repeat(size / 2 - i / 2) + star.repeat(i))
      console.log(space.repeat(size / 2 - n / 2) + toy + star.repeat(n - 2) + toy)
    }
  }
  christmasTree(7)
  