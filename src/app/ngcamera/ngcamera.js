angular.module('ngcamera', ['omr.directives', 'appDefaultConfig'])
    .config(function ($stateProvider) {

        $stateProvider.state('cam', {
            url: '/hc/area/:areaId/house/:houseId/household/:householdId/member/:memberId/cam/:category/:imgSuffix',
            templateUrl: 'ngcamera/ngcamera.tpl.html'
        });
    })
    .controller('camCtrl', function ($scope, AppDefaultConfig, $stateParams, $state) {

        console.log('inside cam ctrl');
        $scope.$watch('media', function (media) {
            console.log(media);
            var file = dataURLtoBlob(media);
            // Create new form data

            var fd = new FormData();
            fd.append("data", '{"'+$stateParams.imgSuffix+'":"' + $stateParams.memberId + '_' + $stateParams.imgSuffix + '","filestore":"memberImage","fileId":' + $stateParams.category + ',"filename":' + $stateParams.memberId + '_' + $stateParams.imgSuffix + ',"memberId":' + '"' + $stateParams.memberId + '"    ' + '}');

            // Append our image
            fd.append("image", file);

            $.ajax({
                url: AppDefaultConfig.serviceBaseUrl + 'api/file/fileStoreService',
                type: "POST",
                data: fd,
                processData: false,
                contentType: false
            }).done(function (response) {

                    console.log('successfully uploaded');
                    //$state.transitionTo('enum.householdDetail.member', $stateParams);
                    //$scope.$apply();
                    $state.go('hc.householdDetail.member', $stateParams);

                });
        });
        function dataURLtoBlob(dataURL) {
            // Decode the dataURL
            var binary = atob(dataURL.split(',')[1]);
            // Create 8-bit unsigned array
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            // Return our Blob object
            return new Blob([new Uint8Array(array)], {
                type: 'image/png'
            });
        }

    });