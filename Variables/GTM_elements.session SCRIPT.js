function() {
  return function() {
  
  var session = {};
  
  session.Config = function() {
    session.getUrlParams = session.GetUrlParams();
    session.newSession = undefined;
    
    session.data = {};
    session.data.start = undefined;
    session.data.source = '(direct)';
    session.data.medium = '(none)';
    session.data.utm = {};
  
    session.oRef = session.GetDomainData(document.referrer);
    session.oLocation = session.GetDomainData(document.location.hostname);
    var sCurrentDomain = session.oLocation.domain;
  
    session.oRefExclude = {};
    session.oRefExclude[sCurrentDomain] = 'self';
  
    session.oRefInclude = {
      // organic
      'google' : 'organic',
      'bing.com' : 'organic',
      'msn.com' : 'organic',
      't-online.de' : 'organic',
      'yahoo.com' : 'organic',
      'zapmeta.de' : 'organic',
      'freenet.de' : 'organic',
      'duckduckgo.com' : 'organic',
      'ecosia.org' : 'organic',
      'metager.de' : 'organic',
      'wow.de' : 'organic',
      'avira.com' : 'organic',
      'web.de' : 'organic',
      // social
      'facebook.com' : 'social',
      'twitter.com' : 'social',
      'instagram.com' : 'social',
      'youtube.com' : 'social',
      'pinterest.com' : 'social',
      'linkedin.com' : 'social',
      'xing.com' : 'social',
      'blog' : 'social',
      // display
      'criteo' : 'display',
    };
  
    session.aPageTypeExclude = {
      'checkout.success':'payment'
    };
  };
  
  session.Init = function() {
    session.Config();
    
    session.newSession = session.CheckNewSession();
    
    if(session.newSession){
      session.data.start = new Date().getTime();
      session.ProcessSourceMediumCampaign();
      session.BrowserDataWrite('GTM_elements.session.data', session.data);
    }else{
      session.data = session.BrowserDataRead('GTM_elements.session.data');
    }
  };
  
  session.CheckNewSession = function(){
    var bNew = true;
    if(session.oRef && (session.oRefExclude[session.oRef.hostname] || session.oRefExclude[session.oRef.domain] || session.oRefExclude[session.oRef.main_domain]) ){
      bNew = false;
    }
    if(session.getUrlParams.utm_source && session.getUrlParams.utm_medium){
      bNew = true;
    }
    // ToDo: Check PageType
    return bNew;
  };
  
  session.ProcessSourceMediumCampaign = function(){
    session.data.utm.source = (session.getUrlParams.utm_source || undefined);
    session.data.utm.medium = (session.getUrlParams.utm_medium || undefined);
    session.data.utm.campaign = (session.getUrlParams.utm_campaign || undefined);
    session.data.utm.term = (session.getUrlParams.utm_term || undefined);
    session.data.utm.content = (session.getUrlParams.utm_content || undefined);
    
    if (session.getUrlParams.gclid || session.getUrlParams.dclid) {
      session.data.source = 'google';
      session.data.medium = session.getUrlParams.gclid ? 'cpc' : 'cpm';
    }else if(session.data.utm.source && session.data.utm.medium){
      if(session.oRefInclude[session.data.utm.source]){
        session.data.source = session.data.utm.source;
        session.data.medium = session.oRefInclude[session.data.utm.source];
      }else{
        session.data.source = session.data.utm.source;
        session.data.medium = session.data.utm.medium;
      }
    }else if(session.oRef){
      if(session.oRefInclude[session.oRef.hostname]){
        session.data.source = session.oRef.hostname;
        session.data.medium = session.oRefInclude[session.oRef.hostname];
      }else if(session.oRefInclude[session.oRef.domain]){
        session.data.source = session.oRef.domain;
        session.data.medium = session.oRefInclude[session.oRef.domain];    
      }else if(session.oRefInclude[session.oRef.main_domain]){
        session.data.source = session.oRef.main_domain;
        session.data.medium = session.oRefInclude[session.oRef.main_domain];  
      }else{
        session.data.source = session.oRef.hostname;
        session.data.medium = 'referral';
      }
    }
  }
  
  session.GetDomainData = function(sUrl) {
    if (!sUrl) return;
    var a = document.createElement('a');
    a.href = sUrl;
    var aHostParts = a.hostname.split(".");
    
    var oRefData = {};
    oRefData.url = sUrl;
    oRefData.hostname = a.hostname;
    oRefData.domain = aHostParts[aHostParts.length-2]+'.'+aHostParts[aHostParts.length-1];
    oRefData.main_domain = aHostParts[aHostParts.length-2];
    return oRefData;
  };
  
  // read persisted information
  session.BrowserDataRead = function(dataName){
    var returnData = sessionStorage.getItem(dataName);
    return JSON.parse(returnData);
  };

  // persist information
  session.BrowserDataWrite = function(dataName, data){
    var jsonData = JSON.stringify(data);
    sessionStorage.setItem(dataName, jsonData);
    return true;
  };

  // delete persisted data
  session.BrowserDataDelete = function(dataName){
    sessionStorage.removeItem(dataName);
  };

  session.GetUrlParams = function() {
    var oGetParams = {};
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      oGetParams[pair[0]] = pair[1];
    }
    return oGetParams;
  };
  
  return session;

  };
  
}