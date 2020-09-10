function scopeTest() {
  if (true) {
    var foo = 'use anywhere';

    let bar = 'use only in this block';
  }

  console.log(foo); //  works!!
  // console.log(bar); //  error!!
}

//  Running func for Quokka.js
scopeTest();
