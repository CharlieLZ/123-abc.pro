(function(window){
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        var visited = false;
        window.addEventListener('pageshow',function(){
            if(visited){
                location.reload();
            }
        });
        window.addEventListener('unload',function(){
            visited = true;
        });
    }
})(window);