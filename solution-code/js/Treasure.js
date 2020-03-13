// Iteration 4
class Treasure {
  constructor(maxCol,maxRow,src){
    this.maxCol = maxCol
    this.maxRow = maxRow
    this.setRandomPosition() // to set `this.col` and `this.row`
    this.img = new Image()
    this.img.src = src
  }
  setRandomPosition(){
    this.col = Math.floor(Math.random()*this.maxCol)
    this.row = Math.floor(Math.random()*this.maxRow)
  }
}