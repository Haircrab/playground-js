function promiseThrowError() {

  return new Promise((resolve, reject) => reject("can you catch this error?"))

}

async function test() {
  try {

    // promiseThrowError().catch((err) => { console.log('catch with dot catch' + err) })

    promiseThrowError()

  } catch (error) {
    console.log("catch with try catch" + error);
  }
}


test()
