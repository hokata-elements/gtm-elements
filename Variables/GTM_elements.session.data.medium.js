function() {
  var returnData = sessionStorage.getItem('GTM_elements.session.data');
  returnData = JSON.parse(returnData);
  return (returnData.medium || '');
}