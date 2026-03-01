// script.js (kısaltılmış hali, mantık aynı)
const qs = document.querySelector.bind(document);
const easingHeart = mojs.easing.path('M0,100C2.9,86.7,33.6-7.3,46-7.3s15.2,22.7,26,22.7S89,0,100,0');

const el = {
  container: qs('.mo-container'),
  s: qs('.lttr--S'),
  e: qs('.lttr--E'),
  n: qs('.lttr--N'),
  i: qs('.lttr--I'),
  s2: qs('.lttr--S2'),
  e2: qs('.lttr--E2'),
  v: qs('.lttr--V'),
  i2: qs('.lttr--I2'),
  y: qs('.lttr--Y'),
  o: qs('.lttr--O'),
  r: qs('.lttr--R'),
  u: qs('.lttr--U'),
  m: qs('.lttr--M'),
  lineLeft: qs('.line--left'),
  lineRight: qs('.line--rght'),
  colTxt: "#763c8c",
  colHeart: "#fa4843",
  blup: qs('.blup'),
  blop: qs('.blop'),
  sound: qs('.sound')
};

// Heart shape
class Heart extends mojs.CustomShape {
  getShape() {
    return '<path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z"/>';
  }
  getLength() {return 200;}
}
mojs.addShape('heart', Heart);

// Timeline simplified: letters appear, "SEVİYORUM" fades, heart appears
const loveTl = new mojs.Timeline().add([
  new mojs.Shape({
    parent: el.container,
    shape: 'heart',
    delay: 2000,
    fill: el.colHeart,
    x: 0,
    scale: { 0: 1, easing: easingHeart },
    duration: 1500
  })
]);

loveTl.play();

// Sound toggle
const volume = 0.2;
el.blup.volume = volume;
el.blop.volume = volume;
const toggleSound = () => {
  let on = true;
  return () => {
    if (on) {
      el.blup.volume = 0.0;
      el.blop.volume = 0.0;
      el.sound.classList.add('sound--off');
    } else {
      el.blup.volume = volume;
      el.blop.volume = volume;
      el.sound.classList.remove('sound--off');
    }
    on = !on;
  };
};
el.sound.addEventListener('click', toggleSound());

