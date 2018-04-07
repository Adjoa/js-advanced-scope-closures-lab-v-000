function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    startBlock = parseInt(startBlock)
    endBlock = parseInt(endBlock)
    let range = endBlock - startBlock

    if (range <= blockRange){
      return `within range by ${blockRange - range}`
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentageDecimal) {
  return function(cost) {
    return cost * percentageDecimal
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++ driverId
      this.name = name
    }
  }
}
