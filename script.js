window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {

  var vrView = new VRView.Player('#vrview', {
    image: 'https://raw.githubusercontent.com/Tanson321/image_stock/master/worldmap.jpg',
    is_stereo: false
  });
}

