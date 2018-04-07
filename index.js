function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    startBlock = parseInt(startBlock)
    endBlock = parseInt(endBlock)
    let range = endBlock - startBlock

    if (range <= blockRange){
      return `within range by ${blockRange - range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}
