function gcd(a, b) {
  return (b == 0) ? a : gcd(b, a % b)
}

function findGcd(a, b) {
  this.unGcd = gcd(a, b)
  return (a / this.unGcd) + ":" + (b / this.unGcd)
}

class ratio {
  static scSizeNum(size, rat) {
    this.parts = rat.split(":")
    this.h = parseInt(this.parts[0])
    this.w = parseInt(this.parts[1])
    return Math.round((size * this.w) / this.h)
  }
  static scSize(size, h, w) {
    return Math.round((size * w) / h)
  }
}

// https://www.w3schools.com/html/mov_bbb.mp4