function checkAlmostEquivalent(word1: string, word2: string): boolean {
  for (let i = 0; i < word1.length; ++i) {
    const firstCount = word1.split(word1[i]).length - 1;
    const secondCount = word2.split(word1[i]).length - 1;

    if (Math.abs(firstCount - secondCount) > 3) {
      return false;
    }
  }
    
  for (let i = 0; i < word2.length; ++i) {
    const firstCount = word1.split(word2[i]).length - 1;
    const secondCount = word2.split(word2[i]).length - 1;

    if (Math.abs(firstCount - secondCount) > 3) {
      return false;
    }
  }

  return true;
}