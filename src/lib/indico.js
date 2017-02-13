import $ from 'jquery';
export const sentiment = (textArray) => {
  return $.post(
    'https://apiv2.indico.io/sentimenthq/batch',
    JSON.stringify({
      'api_key': "sss",
      'data': textArray,
    })
  )
}

export const emotion = (textArray) => {
  return $.post(
    'https://apiv2.indico.io/emotion/batch',
    JSON.stringify({
      'api_key': "sss",
      'data': textArray,
    })
  )
}
