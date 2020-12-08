//receive and return post challenge
function doPost(challenge) {
  var payload = JSON.stringify(challenge.postData.contents);
  payload = JSON.parse(payload);
  Logger.log(payload);
  return ContentService.createTextOutput(payload)
}
