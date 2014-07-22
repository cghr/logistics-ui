angular.module('camera', ['ui.router', 'webcam','appDefaultConfig'])
    .config(function ($stateProvider) {

        $stateProvider.state('memberPhotoCapture', {
            url: '/hc/area/:areaId/house/:houseId/household/:householdId/member/:memberId/capture',
            templateUrl: 'camera/camera.tpl.html',
            controller: 'CameraCtrl'
        });
    })
    .controller('CameraCtrl', function ($scope, $rootScope, $state, $stateParams,AppDefaultConfig) {
        var _video = null,
            patData = null;
        $scope.hasCaptured = false;

        $scope.patOpts = {
            x: 0,
            y: 0,
            w: 25,
            h: 25
        };
        $scope.webcamError = false;
        $scope.onError = function (err) {
            $scope.$apply(
                function () {
                    $scope.webcamError = err;
                }
            );
        };
        $scope.onSuccess = function (videoElem) {
            // The video element contains the captured camera data
            _video = videoElem;
            //_video.width=250;
            //_video.height=220;

            $scope.$apply(function () {
                $scope.patOpts.w = _video.width;
                $scope.patOpts.h = _video.height;
                $scope.showDemos = true;
            });
        };
        $scope.onStream = function (stream, videoElem) {
            // You could do something manually with the stream.
        };
        /**
         * Make a snapshot of the camera data and show it in another canvas.
         */
        $scope.makeSnapshot = function makeSnapshot() {
            if (_video) {
                var patCanvas = document.querySelector('#snapshot');
                if (!patCanvas) {
                    return;
                }


                patCanvas.width = _video.width;
                patCanvas.height = _video.height;
                var ctxPat = patCanvas.getContext('2d');

                var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
                ctxPat.putImageData(idata, 0, 0);

                patData = idata;
                $scope.hasCaptured = true;

            }
        };

        $scope.upload = function () {
            // Get Canvas element
            var canvas = $("canvas")[0];
            // Convert DataURL to Blob object

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

            // Convert Canvas DataURL
            var dataURL = canvas.toDataURL();

            // Get Our File
            var file = dataURLtoBlob(dataURL);

            // Create new form data
            var fd = new FormData();

            fd.append("datastore", "member");
            fd.append("id", $stateParams.memberId);
            fd.append("household_id", $stateParams.householdId);
            fd.append("house_id", $stateParams.houseId);
            fd.append("area_id", $stateParams.areaId);

            // Append our image
            fd.append("image", file);

            $.ajax({
                url: '',
                type: "POST",
                data: fd,
                processData: false,
                contentType: false
            }).done(function (response) {

                    $state.transitionTo('enum.householdDetail.member', $stateParams);
                    $scope.$apply();

                });

        };

        var getVideoData = function getVideoData(x, y, w, h) {
            var hiddenCanvas = document.createElement('canvas');
            hiddenCanvas.width = _video.width;
            hiddenCanvas.height = _video.height;
            var ctx = hiddenCanvas.getContext('2d');
            ctx.drawImage(_video, 0, 0, _video.width, _video.height);
            return ctx.getImageData(x, y, w, h);
        };
        // Dialog Close
        $scope.capture = function () {
            var snapshot = ''; //get video snapshot
            console.log('memberId from root Scope ' + $rootScope.memberId);

            //get the image snapshot upload to the server Asynchronously
            //Image upload done by the memberId

            //Close the dialog
            dialog.close();
            //Refresh the Grid Report
        };
    });