function() {
  var returnData = sessionStorage.getItem('GTM_elements.session.data');
  return JSON.parse(returnData);
}