function() {
  return function() {
  
  var page_performance = {};
  
  page_performance.Config = function() {
    page_performance.data = {};
    page_performance.data.redirectCount = '-'; // 
    page_performance.data.navigationType = '-'; // "navigate", "reload", "back_forward" or "prerender
    page_performance.data.TTFB = '-'; // Time to first Byte
    page_performance.data.FP = '-'; // First Paint, better as Event: (https://www.sitepen.com/blog/2017/10/06/improving-performance-with-the-paint-timing-api/)
    page_performance.data.FCP = '-'; // First Contentful Paint
    page_performance.data.FID = ''; // First Input Delay, better as Event: (https://github.com/GoogleChromeLabs/first-input-delay)
  };
  
  page_performance.Init = function(uaEventName) {
    page_performance.uaEventName = uaEventName || 'uaData';
    page_performance.Config();
    
    if (!!window.PerformanceNavigation) {
      // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
      
      var perfEntries = performance.getEntriesByType("navigation");
      var perfEntry = perfEntries[0].toJSON();
      
      page_performance.data.redirectCount = perfEntry.redirectCount;
      page_performance.data.navigationType = perfEntry.type;
      page_performance.data.TTFB = page_performance.convertTimestamp(perfEntry.responseStart);
      
      page_performance.trackPaint(window.performance);
      
      if(page_performance.data.FP == '-' || page_performance.data.FCP == '-'){
        var observer = new PerformanceObserver(function(list, obj) {
          page_performance.trackPaint(list);
        });
        observer.observe({entryTypes: ["paint"]});
      }
    }
  };
    
  page_performance.trackPaint = function(list) {
    var perfEntries = list.getEntries();
    for (var i=0; i < perfEntries.length; i++) {
      var perfEntry = perfEntries[i].toJSON();
      if(perfEntry.name == 'first-paint'){
        page_performance.data.FP = page_performance.convertTimestamp(perfEntry.startTime);
      }
      if(perfEntry.name == 'first-contentful-paint'){
        page_performance.data.FCP = page_performance.convertTimestamp(perfEntry.startTime);
      }
    }
    if(page_performance.data.FP != '-' && page_performance.data.FCP != '-'){
      window.dataLayer = window.dataLayer || [];
      
      var aInfo = ['redirectCount', 'navigationType', 'TTFB', 'FP', 'FCP'];
      var aAction = [];
      var aLabel = [];
      for (var i=0; i < aInfo.length; i++) {
        aAction.push(aInfo[i]);
        aLabel.push(page_performance.data[aInfo[i]]);
      }
      
      window.dataLayer.push({
        'event' : page_performance.uaEventName,
        'eventCategory':'Performance',
        'eventAction':aAction.join('|'),
        'eventLabel':aLabel.join('|'),
        'eventValue':page_performance.data.FCP
      });
      // console.log(aAction.join('|')+' ~ '+aLabel.join('|'));
    }
  };
    
  page_performance.convertTimestamp = function(iTime) {
    return Math.round(iTime);
  };
    
  
  return page_performance;

  };
  
}