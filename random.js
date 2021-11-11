//** Get long  random id **/
/** new Date().getTime() gives time in milliseconds since the start of time so in many cases its not suitable **/
/* JavaScript */
const longRandomId = times => {
  let yourId = ""
  while (times > 0) {
    times--
    yourId += Math.random().toString(36).toString().replace(/^0\./, '')
  }
  //console.log(yourId)
  return yourId
}
longRandomId(3) //example output from small number of 3: "b66fzmgzndooair51wxiwfuk3upbl0qe"
