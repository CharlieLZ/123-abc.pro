;(function(){
    var Sparkles = {};
    var proton;
    var emitter;
    var renderer;
    var textures;
    Sparkles.init = function(stage,_textures){
        proton = new Proton();
        textures = _textures;
        emitter = new Proton.Emitter();
        Sparkles.circleZone = new Proton.CircleZone(0, 0, 70);
        emitter.rate = new Proton.Rate(new Proton.Span(2, 3), new Proton.Span(.05, 0.1));
        emitter.addInitialize(new Proton.ImageTarget(textures));
        emitter.addInitialize(new Proton.Position(Sparkles.circleZone));
        emitter.addInitialize(new Proton.Mass(1, 5));
        emitter.addInitialize(new Proton.Life(.4));

        emitter.addBehaviour(new Proton.Rotate(new Proton.Span(0, 360), new Proton.Span([-10, -5, 5, 15, 10]), 'add'));
        emitter.addBehaviour(new Proton.Scale(new Proton.Span(.6, .8), 0.2));
        emitter.addBehaviour(new Proton.RandomDrift(5, 0, .15));
        emitter.addBehaviour(new Proton.Alpha(1, 0));
        proton.addEmitter(emitter);

        renderer = new Proton.Renderer('easel', proton, stage);
        renderer.start();

    }

    Sparkles.replaceTextures = function(_textures){
        Sparkles.stopEmit();
        emitter.removeAllParticles();
        emitter.addInitialize(new Proton.ImageTarget(_textures));
    }

    Sparkles.setRadius = function(radius){
        Sparkles.circleZone.radius = radius;
    }

    Sparkles.update = function(){
        if(proton){
            proton.update();
        }
    }

    Sparkles.destroy = function(){
        emitter.stopEmit();
        emitter.removeAllParticles();
        //proton.destroy();
    }

    Sparkles.startEmit = function(){
        emitter.emit();
    }

    Sparkles.stopEmit = function(){
        emitter.stopEmit();
    }

    Sparkles.setPosition = function(x,y){
        emitter.p.x = x;
        emitter.p.y = y;
    }

    window.Sparkles = Sparkles;
})()