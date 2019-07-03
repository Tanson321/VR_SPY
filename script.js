window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  vrView = new VRView.Player('#vrview', {
    image: 'https://raw.githubusercontent.com/Tanson321/image_stock/master/map_tomon.jpg',
    width:  '100%',
    height: '100%',
    is_autopan_off: true,
    is_vr_off: true,
  });
  vrView.on('ready', onVRViewReady);
  vrView.on('click', onVRViewClick);
};

function onVRViewReady(e){
  vrView.addHotspot('spot1', {
    pitch: 0,
    yaw: 0,
    radius: 0.05,
    distance: 1
});
};

function onVRViewClick(e){
  if(e.id == 'spot1'){
      alert("ホットスポット1がクリックされました！");
  }
};