function sevenGlass() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 7000);
    });
  }

  function fourGlass() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 4000);
    });
  }

async function startTimer(timer1,timer2) {
    let timeOneDone = await sevenGlass()
    let timeTwoDone = await fourGlass()
    
    return console.log("11 seconds logged")
}
