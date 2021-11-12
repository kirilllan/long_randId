//** Get long  random id **/
/** new Date().getTime() gives time in milliseconds since the start of time so in many cases its not suitable **/
const longRandomID = iterations => {
  let yourID = ""
  while (iterations > 0) {
    iterations--
    yourID += Math.random().toString(36).replace(/^0\./, '')
  }
  //console.log(yourId)
  return yourID
}
longRandomId(213) //example output from argument 3: "b66fzmgzndooair51wxiwfuk3upbl0qe"
