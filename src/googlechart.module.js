/* global angular */
(function(){
    angular.module('googlechart', [])
        .value('handleResize', true)
        .run(registerResizeEvent);
        
    registerResizeEvent.$inject = ['$rootScope', '$window', 'handleResize'];
    
    function registerResizeEvent($rootScope, $window, handleResize){
        if(handleResize){
            $window.actualSize = $window.innerWidth;
            angular.element($window).on('resize', function () {
                if($window.actualSize != $window.innerWidth) {
                    $rootScope.$emit('resizeMsg');
                    $window.actualSize = $window.innerWidth;
                }
            });
        }
    }
})();
