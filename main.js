function testPromise(x) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log(`Squaring ${x}`);
      if(x <= 25) {
        resolve(x*x);
      } else {
        reject('My custom error');
      }
    }, 2000);
  });
}
 
function testPromise2(x) {
  return testPromise(x);
}
 
 
 
function main() {
  // Old style
  testPromise(2)
  .then((res) => {
    return testPromise2(res);
  })
  .then((finalResult) => {
    console.log('Final result: ', finalResult);
  }).catch((e) => {
    console.log(e);
  });
}
 
async function newMain() {
  try {
    const res = testPromise(3);
    const final = await testPromise(4);
    console.log("res", ex);
  } catch(e) {
    console.log(e);
  }
 
}
 
 
// main();
newMain();
