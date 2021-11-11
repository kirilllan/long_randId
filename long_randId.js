// return (very) long Id, changeable length
// JavaScript
const randId = times => {
  let yourId = ''
  while (times > 0) {
    times--
    yourId += Math.random().toString(36).slice(2)
  }
  //console.log(yourId)
  return yourId
}
// times(123)