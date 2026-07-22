var orgCanvasWidth = orgCanvasWidth||1880, orgCanvasHeight = orgCanvasHeight||768;
var orgCanvasWidthPortrait = 1024, orgCanvasHeightPortrait = 768; 
var orientationTimer = null; 

// Show Instructor Image on the portrait only.
function readDeviceOrientation() {
  // fixMobileSafariViewport(); 
  var instruction = document.getElementById("instruction"); 
  if (!instruction) return; 
  
  if ((window.orientation == undefined && window.innerWidth > window.innerHeight) || Math.abs(window.orientation) === 90) {
    // Landscape
    instruction.style.display = "none";
	  //console.log('horizontal orientation verified');
  } else {
    // Portrait
    instruction.style.display = "block"; 
	  //console.log('vertical orientation verified');
  }
  fixMobileSafariViewport();

  if (orientationTimer) {
    clearTimeout(orientationTimer); 
    orientationTimer = null;
  } else {
    orientationTimer = setTimeout(readDeviceOrientation, 1000); 
  }
}
window.addEventListener('load', (event) => {
	readDeviceOrientation();
	console.log('mobile-d1.js page load: readDeviceOrientation');
});
window.addEventListener('orientationchange', (event) => {
	readDeviceOrientation();
	console.log('mobile-d1.js orientation changed: readDeviceOrientation');
});
//readDeviceOrientation(); // Old run-on-load (did not function)

// Fit the canvas (orgCanvasWidth x orgCanvasHeight) to the screen
function fixMobileSafariViewport() {
  var canvas = document.getElementById('canvas'); 
  if (!canvas) return; 

  if ((window.innerWidth > window.innerHeight) || Math.abs(window.orientation) === 90) {
    // Landscape
    canvas.style.height = window.innerHeight + 'px';
    canvas.style.width = window.innerHeight * orgCanvasWidth/orgCanvasHeight + 'px'; 
    var offset = (window.innerWidth - window.innerHeight * orgCanvasWidth/orgCanvasHeight)/2; 
    // if (offset < 0) 
      canvas.style.left = canvas.style.right = offset + 'px'; 
    
  } else {
    // Portrait
    var estimatedCanvasWidth = orgCanvasHeight/orgCanvasHeightPortrait * orgCanvasWidthPortrait;
    canvas.style.width = window.innerWidth/estimatedCanvasWidth * orgCanvasWidth+ 'px';
    canvas.style.height = window.innerWidth * orgCanvasHeightPortrait/orgCanvasWidthPortrait + 'px'; 
    canvas.style.left = canvas.style.right = (estimatedCanvasWidth-orgCanvasWidth)/(2*estimatedCanvasWidth)*window.innerWidth + 'px'; 
    
  } 

  window.scrollTo(0,0); 
}
// listen to portrait/landscape changes
window.addEventListener('resize', fixMobileSafariViewport, false);
fixMobileSafariViewport(); 