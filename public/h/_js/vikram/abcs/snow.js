(function(module, cjs) {
  var Snow = {};
  var proton;
  var emitter;
  var renderer;
  var ticking = false;
  Snow.init = function(stage, textures, width, height) {
    proton = new Proton();
    emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(
      new Proton.Span(6, 10),
      new Proton.Span(0.01, 0.1)
    );
    emitter.addInitialize(new Proton.ImageTarget(textures));
    emitter.addInitialize(
      new Proton.Position(new Proton.RectZone(0, 0, width, height))
    );
    emitter.addInitialize(new Proton.Mass(1, 5));
    emitter.addInitialize(new Proton.Life(5));
    emitter.addInitialize(
      new Proton.Velocity(new Proton.Span(-5, 5), new Proton.Span(10, 10, true))
    );

    //emitter.addBehaviour(new Proton.Rotate(Proton.getSpan(0, 180), 2.5, 'add'));
    emitter.addBehaviour(new Proton.Scale(new Proton.Span(0.6, 0.8), 0));
    //emitter.addBehaviour(new Proton.Force(10,20));
    emitter.addBehaviour(new Proton.RandomDrift(5, 0, 0.15));
    //emitter.addBehaviour(new Proton.Alpha(1, 0));
    proton.addEmitter(emitter);

    renderer = new Proton.Renderer("easel", proton, stage);
    renderer.start();
  };

  Snow.update = function() {
    if (proton) {
      proton.update();
    }
  };

  Snow.startEmit = function() {
    if (!ticking) {
      ticking = true;
      cjs.Ticker.addEventListener("tick", Snow.update);
    }
    emitter.emit();
  };

  Snow.stopEmit = function() {
    emitter.stopEmit();
  };

  Snow.clean = function() {
    cjs.Ticker.removeEventListener("tick", Snow.update);
    ticking = false;
    emitter.removeAllParticles();
    Snow.update();
  };

  Snow.setPosition = function(x, y) {
    emitter.p.x = x;
    emitter.p.y = y;
  };
  module.effects = module.effects || {};
  module.effects.Snow = Snow;
})((starfall = starfall || {}), (createjs = createjs || {}));
var starfall, createjs;
