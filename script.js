window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {

  var vrView = new VRView.Player('#vrview', {
    image: 'image.jpg',
    is_stereo: true
  });
}

