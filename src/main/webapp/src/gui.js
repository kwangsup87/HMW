/**
 * jQuery Mobile GUI
 */

var Gui = {};

// login status
Gui.signedIn = false;

// location tracking
Gui.tracking = false;
Gui.following = true;
Gui.orientation = true;

// flag if this is the load on startup
Gui.initialLoad = true;
// currently selected layer in layer order panel
Gui.selectedLayer = null;
// original position of currently dragged layer in layer order panel
Gui.draggedLayerIndex = null;
// flag if layer order has been changed manually
Gui.layerOrderChanged = false;

Gui.updateLayout = function() {
  // use full content size for map
  $('#map').height(window.innerHeight);
  $('#map').width(window.innerWidth);
};
  
Gui.initViewer = function() { 

  Gui.updateLayout();
  $(window).on('resize', function() {
    Gui.updateLayout();
  });
  Map.setWindowOrientation(window.orientation);
  $(window).on('orientationchange', function(e) {
    Map.setWindowOrientation(window.orientation);
  });

  // map
  Map.createMap(Gui.showFeatureInfoResults);
  Gui.updateLayout();

};

$(document).ready(function(e) {
  Gui.initViewer();
});
