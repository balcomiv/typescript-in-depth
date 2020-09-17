function logAndReturn<T>(thing: T): T {
  console.log(typeof thing);
  return thing;
}

//  =========================================
//    Function tests for quokka.js
//  =========================================
interface Magazine {
  title: string;
}

let newMag: Magazine = { title: 'Web Dev Monthly' };

let someMag: Magazine = logAndReturn<Magazine>(newMag); //?

const someString = logAndReturn('log this'); // ?

typeof 'test'; //?
