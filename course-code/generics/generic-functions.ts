function logAndReturn<T>(thing: T): T {
  return thing;
}

//  =========================================
//      Function tests for quokka.js
//  =========================================
logAndReturn('log this'); // ?

interface Magazine {
  title: string;
}

let newMag: Magazine = { title: 'Web Dev Monthly' };

let someMag: Magazine = logAndReturn<Magazine>(newMag); // ?
