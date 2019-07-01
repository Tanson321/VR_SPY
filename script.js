window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {

  var vrView = new VRView.Player('#vrview', {
    image: 'https://raw.githubusercontent.com/Tanson321/VR_SPY/master/image.jpg',
    is_stereo: true
  });
}

