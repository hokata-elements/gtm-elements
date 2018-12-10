function() {
  return function(action) {
    var info_layer = {};
    info_layer.Config = function() {
      info_layer.layerName = 'GTM.elements Debug InfoLayer';
      info_layer.bgColor = '#a1c2fa';
    };
  
    info_layer.Init = function(infoVars) {
      info_layer.infoVars = info_layer.infoVars || { 'notice':'no infoVars to show' };
      info_layer.Config();
      info_layer.AddInfoLayer();
      setInterval(info_layer.UpdateInfoLayer, 3000);
    };
    
    info_layer.AddInfoLayer = function(){
      if(info_layer.bgColor){
        //document.body.style.backgroundColor = info_layer.bgColor;
        //document.body.style.borderLeft = '50px solid '+info_layer.bgColor;
        //document.body.style.borderRight = '50px solid '+info_layer.bgColor;
      }

      var elem = document.createElement('div');
      elem.id = 'GTM_debugInfo';
      elem.style.cssText = 'position:fixed;top:0;right:0;width:300px;z-index:100;background:#4285f4;color:#fff;padding:10px;font-size:12px;font-family: Arial, Helvetica, sans-serif;z-index:99999';
      document.body.appendChild(elem);
    };
  
    info_layer.UpdateInfoLayer = function(){

      var elem = document.getElementById('GTM_debugInfo');
      elem.innerHTML = '<b>'+info_layer.layerName+'</b>';
      elem.innerHTML += '<a href="#" onMouseUp="javascript:document.getElementById(\'GTM_debugInfo\').style.display= \'none\';" style="font-size:16px;padding:5px;position:absolute;top:0;right:0;color:#fff;text-decoration:none;">X</a>';
      
      for(var index in info_layer.infoVars) {
        elem.innerHTML += '<br>'+index+': '+info_layer.infoVars[index];
      }
    };
  
    return info_layer;

  };
  
}