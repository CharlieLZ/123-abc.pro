(function(sf,$){
    var BackButton = {

    }
    BackButton.init = function(stageWidth,globalPath){
        var navigation = $("#navigation");
        if(globalPath){
            var href = $("#navigation a").attr("href");
            var template = '<div id="back">';
            template+='<img src="'+globalPath+'green-corner-triangle.png" id="back-green-rectangle" style="width:100%;">';
			template+='<a href="'+href+'">';
            template+='<img src="'+globalPath+'green-corner-button.png" id="back-green-corner-button" style="width:53%; position:absolute; top:0; left:0;  pointer-events:all;">';
            template+='</a></div>';
            navigation.html(template);
            navigation.css("pointer-events","none")
        }
        var maxWidth = navigation.width()||179;
        var stageWidth = stageWidth;
        $(window).resize(resizeHandler);
        function resizeHandler(){
            var windowWidth = Math.min($(window).width(),stageWidth);
            var arrowWidth = (windowWidth/stageWidth)*maxWidth;
            navigation.width(arrowWidth);
        }
        resizeHandler();
    }
    starfall.BackButton = BackButton;
})(starfall=starfall||{},$=$||{});
var starfall, $;