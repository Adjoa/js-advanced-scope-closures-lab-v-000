function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    if (endBlock - startBlock <= blockRange){
      return `within range by ${endBlock - startBlock}`
    } else {
      return `${endBlock - startBlock} blocks out of range`
    }
  }
}
