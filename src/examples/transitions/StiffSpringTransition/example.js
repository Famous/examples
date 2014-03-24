define(function(require, exports, module) {
    // import dependencies
    var Engine              = require("famous/core/Engine");
    var Surface             = require("famous/core/Surface");
    var Modifier            = require("famous/core/Modifier");
    var Transform           = require("famous/core/Transform");

    var Transitionable      = require("famous/transitions/Transitionable");
    var StiffSpringTransition    = require("famous/transitions/StiffSpringTransition");

    
    // create the main context
    var mainContext = Engine.createContext();

    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });
    mainContext.add(new Modifier({origin:[.5,.5]})).add(grid);



    var surface = new Surface({
        size:[100,100],
        classes: ['famousRedBackground'],
        properties: {
            borderRadius: "50px"
        }
    });

    var modifier = new Modifier({
        origin: [.5,.5],
        transform: Transform.translate(0,-240,0)
    });

    Transitionable.registerMethod('stiff-spring', StiffSpringTransition);
    var transition = {
        method: "stiff-spring",
        period: 1000,
        dampingRatio: .3,
        velocity: 0

    }

    surface.on("click", function(){
        modifier.setTransform(Transform.translate(0,0,0),transition);
    });
    
    

    mainContext.add(modifier).add(surface);
});

