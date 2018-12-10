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
  
    if({{Debug Mode}}){
      GTM_elements.info_layer = {{GTM_elements.info_layer SCRIPT}}();
      GTM_elements.info_layer.Init();
    }
    
  })(document);

</script>