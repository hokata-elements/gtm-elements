# GTM Elements
Useful Google Tag Manager Scripts

## GTM Elements Structure
![GTM Elements Structure](https://raw.githubusercontent.com/hokata-elements/gtm-elements/master/img/GTM-elements-structure.png)

## Implemented functions as GTM Variables
1. Data object with Session relevant Informations (cached data in localStorage)
   - start
   - source
   - medium
2. Info HTML-Layer for most important GTM Values
3. Additional Page-Performace Data (send to GA in one single event)
   - Count of redirects on current Host
   - Navigation Type ("navigate", "reload", "back_forward" or "prerender")
   - Time to first Byte
   - First Paint
   - First Contenful paint
   
**DataLayer push event example for Page-Performace Data:**
```JSON
{
    "event": "uaData",
    "eventCategory": "Performance",
    "eventAction": "redirectCount|navigationType|TTFB|FP|FCP",
    "eventLabel": "0|reload|33|94|94",
    "eventValue": 94
}
```
Maybe you need some additional DataLayer Variables (eventAction and eventLabel),
uaData-Event Trigger and Analytics-Event Tag to send this data to GA as event.



**Full Script import:** [GTM-ImportContainer.json](https://github.com/hokata-elements/gtm-elements/blob/master/GTM-ImportContainer.json)

## in the development process
4. GTM_elements.ec_cart: Passive cart interaction tracking
5. GTM_elements.ec_checkout: Passive checkout step tracking
6. GTM_elements.ec_promotions: Promotion impression and click tracking
7. GTM_elements.ec_produclist: Product-List tracking for impressions, Klicks, cart interactions and checkout steps
8. GTM_elements.crossdomain

## [Live Demo](https://elements.digital/playground/GTM-Elements/demo/) incl. Info Layer:
https://elements.digital/playground/GTM-Elements/demo/
- Session Start (GTM_elements.session.data.start)
- Session Source (GTM_elements.session.data.source)
- Session Medium (GTM_elements.session.data.medium)
- Performance redirectCount (GTM_elements.page_performance.data.redirectCount)
- Performance navigationType (GTM_elements.page_performance.data.navigationType)
- Performance TTFB (GTM_elements.page_performance.data.TTFB)
- Performance FP (GTM_elements.page_performance.data.FP)
- Performance FCP (GTM_elements.page_performance.data.FCP)


## Example for GTM_elements (Custom HTML-Tag)
```JavaScript
<script>
  (function(document) {
    window.dataLayer = window.dataLayer || [];
    
    // setup GTM_elements as empty object
    var GTM_elements = {};
    
    // Load GTM_elements.session SCRIPT as object from a custom JavaScript Variable
    GTM_elements.session = {{GTM_elements.session SCRIPT}}();
    // Init GTM_elements.session script
    GTM_elements.session.Init('YOUR_PAGE_TYPE_IF_AVAILABLE');
    
    // Load GTM_elements.page_performance SCRIPT as object from a custom JavaScript Variable
    GTM_elements.page_performance = {{GTM_elements.page_performance SCRIPT}}();
    // Init GTM_elements.page_performance script
    GTM_elements.page_performance.Init();
    
    // check GTM Debug Mode and draw Info Layer
    if({{Debug Mode}}){
    
     // Load GTM_elements.info_layer SCRIPT as object from a custom JavaScript Variable
      GTM_elements.info_layer = {{GTM_elements.info_layer SCRIPT}}(); 
      
      // prepare date info
      var sDate = '-';
      
      // check cached session data
      if(GTM_elements.session.data && GTM_elements.session.data.start){
        var aDate = new Date(GTM_elements.session.data.start);
        sDate = aDate.toLocaleString('de-DE');
      }
      
      // Init GTM_elements.info_layer script
      GTM_elements.info_layer.Init();
      
      // prepare information layer data
      GTM_elements.info_layer.infoVars = {
        'Session Start' : sDate,
        'Session Source' : GTM_elements.session.data.source,
        'Session Medium' : GTM_elements.session.data.medium,
        'Performance redirectCount' : GTM_elements.page_performance.data.redirectCount,
        'Performance navigationType' : GTM_elements.page_performance.data.navigationType,
        'Performance TTFB' : GTM_elements.page_performance.data.TTFB,
        'Performance FP' : GTM_elements.page_performance.data.FP,
        'Performance FCP' : GTM_elements.page_performance.data.FCP,
      };
      // draw information layer
      GTM_elements.info_layer.UpdateInfoLayer();
    }
    
  })(document);

</script>
```

## GTM_elements.session configuration

default **source / medium** settings
```JavaScript
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
      // display
      'criteo' : 'display',
    };
```
Currently the configuration has to be set in the **GTM_elements.session SCRIPT**. Later this will be possible in the GTM_elements Tag.