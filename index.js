function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    startBlock = parseInt(startBlock.splice(-2, 2), 10)
    endBlock = parseInt(endBlock.splice(-2, 2), 10)
    
    if (endBlock - startBlock <= blockRange){
      return `within range by ${endBlock - startBlock}`
    } else {
      return `${endBlock - startBlock} blocks out of range`
    }
  }
}
