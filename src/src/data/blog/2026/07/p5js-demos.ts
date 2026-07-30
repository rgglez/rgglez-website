export const demoCirculos = `
p.setup = () => {
  p.createCanvas(400, 400);
  p.noFill();
};
p.draw = () => {
  p.background(20);
  for (let i = 0; i < 24; i++) {
    p.stroke(150 + i * 4, 100, 255 - i * 8);
    const r = 20 + i * 14 + p.sin(p.frameCount * 0.02 + i) * 10;
    p.ellipse(p.width / 2, p.height / 2, r, r);
  }
};
`;

export const demoAve = `
p.setup = () => {
  p.createCanvas(640, 400, p.WEBGL);
  p.angleMode(p.RADIANS);
};

p.draw = () => {
  p.background(225, 242, 250);
  p.ambientLight(110);
  p.directionalLight(255, 255, 255, -0.4, 0.6, -1);

  const wingBeat = p.sin(p.frameCount * 0.12);
  const rotationY = p.map(p.mouseX, 0, p.width, -0.35, 0.35, true);
  const rotationX = p.map(p.mouseY, 0, p.height, 0.15, -0.15, true);

  p.rotateX(rotationX);
  p.rotateY(rotationY - 0.25);
  p.rotateZ(-0.08);

  // Body
  p.noStroke();
  p.fill(45, 62, 72);
  p.push();
  p.rotateZ(p.HALF_PI);
  p.ellipsoid(58, 105, 52, 28, 20);
  p.pop();

  // Breast
  p.fill(235, 238, 230);
  p.push();
  p.translate(24, 17, 32);
  p.rotateZ(p.HALF_PI);
  p.ellipsoid(38, 70, 18, 22, 14);
  p.pop();

  // Head, eyes, and beak
  p.fill(55, 72, 78);
  p.push();
  p.translate(94, -25, 0);
  p.sphere(42, 24, 16);

  p.fill(245);
  p.push();
  p.translate(30, -10, 28);
  p.sphere(9, 12, 8);
  p.pop();

  p.fill(20);
  p.push();
  p.translate(34, -11, 35);
  p.sphere(4, 10, 6);
  p.pop();

  p.fill(255, 180, 35);
  p.push();
  p.translate(51, 4, 0);
  p.rotateZ(-p.HALF_PI);
  p.cone(12, 38, 4, 1);
  p.pop();
  p.pop();

  // Articulated wings
  const wing = (side) => {
    p.push();
    p.translate(-5, -8, side * 30);
    p.rotateX(side * (0.55 + wingBeat * 0.65));
    p.rotateY(side * 0.15);
    p.fill(70, 92, 102);

    for (let i = 0; i < 7; i++) {
      p.push();
      p.rotateY(side * (i - 3) * 0.055);
      p.translate(-25 - i * 12, 0, side * (28 + i * 10));
      p.rotateZ(p.HALF_PI + i * 0.045);
      p.ellipsoid(14, 62 + i * 7, 7, 12, 8);
      p.pop();
    }
    p.pop();
  };

  wing(-1);
  wing(1);

  // Tail
  p.fill(65, 84, 92);
  for (let i = -2; i <= 2; i++) {
    p.push();
    p.translate(-93, 12, i * 13);
    p.rotateZ(p.HALF_PI + i * 0.04);
    p.ellipsoid(10, 58, 7, 10, 8);
    p.pop();
  }
};
`;

export const demoGolf = `
a=(y,d=mag(k=(4+cos(i/9-t*2))*cos(i/35),e=y/7-13)+sin(e/9+t/2)-4)=>point((q=2*sin(k*3)-y/35*k*(9+k*sin(cos(e)*9-d*2+t)))+40*cos(c=d-t)+200,q*sin(c)+d*35)
t=0,draw=$=>{t||createCanvas(w=400,w);background(9).stroke(w,96);for(t+=PI/80,i=1e4;i--;)a(i/235)}
`;
