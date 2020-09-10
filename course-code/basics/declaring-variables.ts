function scopeTest() {
  if (true) {
    var foo = 'use anywhere';

    let bar = 'use only in this block';
  }

  console.log(foo); //  works!!
  // console.log(bar); //  error!!
}

//  =========================================
//      Function tests for quokka.js
//  =========================================
scopeTest();
