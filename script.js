String.prototype.searchWithFromIndex = function(regExp, fromIndex = 0) {
  let result = this.slice(fromIndex);
  if ( result.search(regExp) === -1 ) {
    return -1;
  } else {
    return result.search(regExp) + fromIndex;
  }
}