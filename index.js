function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    endBlock - startBlock <= blockRange ? true : false
  }
}
