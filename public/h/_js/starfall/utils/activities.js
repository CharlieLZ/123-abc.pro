document.addEventListener('DOMContentLoaded', function() {
    if (navigator.maxTouchPoints === 0) {        
        window.dispatchEvent(new Event('resize'));
        return;
    }
    
    function setTabletMode() {
        document.documentElement.classList.add('is-tablet-mode');
    }
    
    function notTabletMode() {
        document.documentElement.classList.remove('is-tablet-mode');
    }    
    
    window.addEventListener('keydown', notTabletMode, {passive: true});
    window.addEventListener('wheel', notTabletMode, {passive: true});
    window.addEventListener('touchstart', setTabletMode, {passive: false});
    
    setTabletMode();
    
    function detectTabletMode() {
        const hasFinePlusCoarse = window.matchMedia('(any-pointer: fine) and (any-pointer: coarse)').matches;
        const isCoarseOnly = window.matchMedia('(pointer: coarse) and (not (any-pointer: fine))').matches;
        const isTablet = isCoarseOnly || hasFinePlusCoarse;
        if (isTablet) {
            setTabletMode()
        }
    }
    
    detectTabletMode();
    
    window.matchMedia('(any-pointer: coarse)').addEventListener('change', detectTabletMode);
    window.matchMedia('(any-pointer: fine)').addEventListener('change', detectTabletMode);
    window.addEventListener('resize', detectTabletMode);
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));        
    }, 400);
    
});
