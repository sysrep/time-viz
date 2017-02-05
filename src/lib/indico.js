import $ from 'jquery';
export const sentiment = (textArray) => {
  return $.post(
    'https://apiv2.indico.io/sentiment/batch',
    JSON.stringify({
      'api_key': "388cb7cf494d7dc12a3c83d2cb454772",
      'data': textArray,
    })
  )
}

export const emotion = (textArray) => {
  return $.post(
    'https://apiv2.indico.io/emotion/batch',
    JSON.stringify({
      'api_key': "388cb7cf494d7dc12a3c83d2cb454772",
      'data': textArray,
    })
  )
}
