/* global angular */
(function(){
    angular.module('googlechart', [])
        .run(registerResizeEvent);
        
    registerResizeEvent.$inject = ['$rootScope', '$window'];
    
    function registerResizeEvent($rootScope, $window){
        $window.actualSize = $window.width();
        angular.element($window).on('resize', function () {
                if($window.actualSize != $window.width()) {
                    $rootScope.$emit('resizeMsg');
                    $window.actualSize = $window.width();
                }
            });
    }
})();
