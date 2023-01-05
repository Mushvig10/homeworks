class examCalculator {
  constructor(score) {
    this.score = score
  }
  passingscore() {

    if (this.score > 100 || this.score < 0)
      return "Bele data yoxdur"
    else if (this.score <= 50)
      return "Failed";
    else
      return "Success"


  }

}

const result = new examCalculator (30);

console.log(result.passingscore());
