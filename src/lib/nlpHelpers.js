import natural from 'natural';
import stopwords from 'stopwords';

export const removeALLPunc = (textContent) => {
  const punctuationReg = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  return textContent.replace(punctuationReg, '')
}

export const removePuncButPreserveSentences  = (textContent) => {
  const punctuationReg = /[\u2000-\u206F\u2E00-\u2E7F\\'"#$%&()*+\-\/:;<=>@\[\]^_`{|}~]/g;
  return textContent.replace(punctuationReg, '')
}

export const removeSpace = (textContent) => {
  const spaceReg = /\s+/g;
  return textContent.replace(spaceReg, ' ')
}

export const removeNumbers = (textContent) => {
  const numberReg = /[0-9]/g;
  return textContent.replace(numberReg, '')
}

export const getSentences = (textContent) => {
  const tokenizer = new natural.RegexpTokenizer({pattern: /[!?.]/});
  const pureContent = removeSpace(removePuncButPreserveSentences(textContent));
  return tokenizer.tokenize(pureContent);
}

function arrayDiff (array, arrayfilter) {
  return array.filter((item) => arrayfilter.indexOf(item) === -1);
};

function toLowerCase (array) {
  return array.map(token => token.toLowerCase());
}

function getRoot (array) {
  const stemmer = natural.PorterStemmer;
  return array.map(token => stemmer.stem(token));
}

function getSingularizedWord (array) {
  const nounInfector = new natural.NounInflector();
  return array.map(token => nounInfector.singularize(token));
}

export const getTokensWithOutNumbersAndStopWords = (textContent) => {
  const noNumbers = removeNumbers(textContent)
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(noNumbers);
  const tokensInLowerCase = toLowerCase(tokens);
  const singularizedTokens = getSingularizedWord(tokensInLowerCase);
  return arrayDiff(singularizedTokens, stopwords.english);
}

export const getFrequentWords = (array, numberOfWords = 10) => { // eslint-disable-line no-unused-vars
  const frequencies = {};
  for (const word of array) {
    frequencies[word] = frequencies[word] || 0;
    frequencies[word] += 1;
  }
  return Object.keys(frequencies).sort((a, b) => frequencies[b] - frequencies[a]).slice(0, numberOfWords);
}
