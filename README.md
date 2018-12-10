# gtm-elements
Useful Google Tag Manager Scripts

## Already implemented functions as GTM Variables
1. Data object with Session relevant Informations (persist Values in sessionStorage)
   - start
   - source
   - medium
2. Additional Page-Performace Data (send to GA in one event)
   - Count of redirects on current Host
   - Navigation Type ("navigate", "reload", "back_forward" or "prerender)
   - Time to first Byte
   - First Paint
   - First Contenful paint
3. Info HTML-Layer for most important GTM Values

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
