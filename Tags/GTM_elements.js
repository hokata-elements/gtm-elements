<script id="GTM_elements_v01">
  /**
   * GTM_elements Version 0.1 is the basepart of alls GTM_elements
   *
   * avilable GTM_elements
   * - GTM_elements.session: Data object with Session relevant Informations
   * - GTM_elements.page_performance: Additional Page-Performace Data
   * - GTM_elements.info_layer: Individual Info-Layer for GTM DebugMode
   * - GTM_elements.ec_cart: Passive cart interaction tracking [in progress...]
   * - GTM_elements.ec_checkout: Passive checkout step tracking [in progress...]
   * - GTM_elements.ec_promotions: Promotion impression and click tracking [in progress...]
   * - GTM_elements.ec_produclist: Product-List tracking for  impressions, Klicks,
                                   cart interactions and checkout steps [in progress...]
   * - GTM_elements.crossdomain: [in progress...]
   *
   */
  (function(document) {
	window.dataLayer = window.dataLayer || [];
    var GTM_elements = {};
    GTM_elements.sessionData = {};
    
    GTM_elements.session = {{GTM_elements.session SCRIPT}}();
    GTM_elements.session.Init();
  
    GTM_elements.page_performance = {{GTM_elements.page_performance SCRIPT}}();
    GTM_elements.page_performance.Init();
  
    if(1 || {{Debug Mode}}){
      GTM_elements.info_layer = {{GTM_elements.info_layer SCRIPT}}();    
      var sDate = '-';
      if(GTM_elements.session.data && GTM_elements.session.data.start){
        var aDate = new Date(GTM_elements.session.data.start);
        sDate = aDate.toLocaleString('de-DE');
      }
      GTM_elements.info_layer.Init();
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
      GTM_elements.info_layer.UpdateInfoLayer();
    }
    
  })(document);

</script>