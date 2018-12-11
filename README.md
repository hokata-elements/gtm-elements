# GTM Elements
Useful Google Tag Manager Scripts

## GTM Elements Structure
![GTM Elements Structure](https://raw.githubusercontent.com/hokata-elements/gtm-elements/master/img/GTM-elements-structure.png)

## Already implemented functions as GTM Variables
1. Data object with Session relevant Informations (persist Values in sessionStorage)
   - start
   - source
   - medium
2. Info HTML-Layer for most important GTM Values
3. Additional Page-Performace Data (send to GA in one single event)
   - Count of redirects on current Host
   - Navigation Type ("navigate", "reload", "back_forward" or "prerender)
   - Time to first Byte
   - First Paint
   - First Contenful paint
   
**DataLayer push event example for Page-Performace Data:**
```
{
    "event": "uaData",
    "eventCategory": "Performance",
    "eventAction": "redirectCount|navigationType|TTFB|FP|FCP",
    "eventLabel": "0|reload|33|94|94",
    "eventValue": 94
}
Some additional DataLayer Varables (eventAction and eventLabel),
uaData-Event Trigger and Analytics-Event Tag maybe needed
```




**Full Script import:** [GTM-ImportContainer.json](https://github.com/hokata-elements/gtm-elements/blob/master/GTM-ImportContainer.json)

## in the development process
4. GTM_elements.ec_cart: Passive cart interaction tracking
5. GTM_elements.ec_checkout: Passive checkout step tracking
6. GTM_elements.ec_promotions: Promotion impression and click tracking
7. GTM_elements.ec_produclist: Product-List tracking for impressions, Klicks, cart interactions and checkout steps
8. GTM_elements.crossdomain

## [Live Demo](https://elements.digital/playground/GTM-Elements/demo/) incl. Info Layer:
- Session Start (GTM_elements.session.data.start)
- Session Source (GTM_elements.session.data.source)
- Session Medium (GTM_elements.session.data.medium)
- Performance redirectCount (GTM_elements.page_performance.data.redirectCount)
- Performance navigationType (GTM_elements.page_performance.data.navigationType)
- Performance TTFB (GTM_elements.page_performance.data.TTFB)
- Performance FP (GTM_elements.page_performance.data.FP)
- Performance FCP (GTM_elements.page_performance.data.FCP)
