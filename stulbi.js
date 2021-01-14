function Stulbi(n) {
    for (let i = 1; i <= n; i++) {
      let empty = ' '.repeat(n - i);
      let stupalo = '#'.repeat(i * 2 - 1)
      console.log(stupalo + empty + empty) // tuka ako iskame da e stulba na drugata strana prehvurlqme 2te emptyta predi stupalo
    }//sushto taka ako iskame da stane piramida prosto pravim i ot dvete srani empty
  }
  Stulbi(4);
  console.log('Стълби до рая (ама не бързаи да се качваш xD)')