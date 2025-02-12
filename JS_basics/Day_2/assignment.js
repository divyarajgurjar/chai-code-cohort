function shinyDiamondRug(n) {

  let pat = ''
  for(let i = 0;i<n*2;i=i+2){
    let row = ''
    for(let j = 0;j<=i;j++){ 

            row+='*'

    }pat+= row+'\n'
}for(let i = 0;i<n*2-3;i=i+2){
    let row = ''
    for(let j = n*2-3;j>i;j--){ 
        row+='*'
    }pat+=row+'\n'
}
  return pat
}
console.log(
  shinyDiamondRug(3)
)

