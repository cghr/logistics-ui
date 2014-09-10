angular.module('esl', [ 'ui.router', 'appService'])
    .controller('EslCtrl', function ($scope, $state, $rootScope, AppService, $stateParams) {

        var deathId = $stateParams.deathId
        var deathDetails = {}

        $scope.eslConfig = {
            name: 'eslDetail',
            url: '/area/:areaId/house/:houseId/household/:householdId/esl/:deathId',
            tpl: 'enum/esl/esl.html',
            title: '',
            prevState: {name: 'enum.householdDetail.esl', title: 'ESL'}
        };

        AppService.getDeathDetails(deathId).then(function () {

            console.log('death details ');
            deathDetails = AppService.deathDetails

            deathDetails.age = convertToYears(deathDetails.age_value, deathDetails.age_unit)
            console.log(deathDetails);
            $scope.eslConfig.children = getEligibleSections(deathDetails.age)

            if (deathDetails.sex == 'Male' || (deathDetails.sex == 'Female' && deathDetails.age < 12)) {
                console.log('Male so remove pregnancy');
                _.remove($scope.eslConfig.children, function (child) {
                    return child.name == 'pregnancy'

                })
            }

            $state.go('enum.eslDetail.' + ($scope.eslConfig.children[0]).name, $stateParams)
        })

        $scope.handleEslNav = function () {

            console.log('inside handle esl Nav');
            var currentSection = _.findIndex($scope.eslConfig.children, function (child) {

                return ($state.current.name == 'enum.eslDetail.' + child.name)
            })
            console.log('current section ' + currentSection);
            var nextSection = $scope.eslConfig.children[currentSection + 1]
            console.log('next Section ' + nextSection);
            if (nextSection)
                $state.go('enum.eslDetail.' + nextSection.name, $stateParams)
            else
                $state.go('enum.householdDetail.esl', $stateParams)


        }

        $scope.eslConfigChildren =
            [
                {
                    name: 'birthHistory',
                    url: '/birthHistory',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Birth History',
                    range: [0, 14]
                },
                {
                    name: 'deliveryDetails',
                    url: '/deliveryDetails',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Delivery Details',
                    range: [0, 14]
                },
                {
                    name: 'birthDetails',
                    url: '/birthDetails',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Birth Details',
                    range: [0, 14]
                },
                {
                    name: 'suckle',
                    url: '/suckle',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Suckle',
                    range: [0, 0.077]
                },
                {
                    name: 'immunization',
                    url: '/immunization',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Immunization',
                    range: [0, 1]
                },
                {
                    name: 'illness',
                    url: '/illness',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Illness',
                    range: [0, 14]
                },
                {
                    name: 'vaccination',
                    url: '/vaccination',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Vaccination',
                    range: [0, 1]
                },
                {
                    name: 'mother',
                    url: '/mother',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Mother',
                    range: [0, 14]
                },
                {
                    name: 'medicalHistory',
                    url: '/medicalHistory',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Medical History',
                    range: [0, 100]
                },
                {
                    name: 'pregnancy',
                    url: '/pregnancy',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Pregnancy',
                    range: [12, 100]
                },
                {
                    name: 'fever',
                    url: '/fever',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Fever',
                    range: [0, 100]
                },
                {
                    name: 'cough',
                    url: '/cough',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Cough',
                    range: [0, 100]
                },
                {
                    name: 'breathing',
                    url: '/breathing',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Breathing',
                    range: [0, 100]
                },
                {
                    name: 'chestPain',
                    url: '/chestPain',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Chest Pain',
                    range: [0.083, 100]
                },
                {
                    name: 'diarrhoea',
                    url: '/diarrhoea',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Diarrhoea',
                    range: [0, 100]
                },
                {
                    name: 'vomit',
                    url: '/vomit',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Vomit',
                    range: [0, 100]
                },
                {
                    name: 'abdominal',
                    url: '/abdominal',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Abdominal',
                    range: [0, 100]
                },
                {
                    name: 'headache',
                    url: '/headache',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Headache',
                    range: [0.083, 100]
                },
                {
                    name: 'consciousness',
                    url: '/consciousness',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Consciousness',
                    range: [0, 100]
                },
                {
                    name: 'urine',
                    url: '/urine',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Urine',
                    range: [0.083, 100]
                },
                {
                    name: 'skin',
                    url: '/skin',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Skin',
                    range: [0.083, 100]
                },
                {
                    name: 'weight',
                    url: '/weight',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Weight',
                    range: [0.083, 100]
                },
                {
                    name: 'lumps',
                    url: '/lumps',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Lumps',
                    range: [0.083, 100]
                },
                {
                    name: 'paralysis',
                    url: '/paralysis',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Paralysis',
                    range: [0.083, 100]
                },
                {
                    name: 'swallow',
                    url: '/swallow',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Swallow',
                    range: [0.083, 100]
                },
                {
                    name: 'bleed',
                    url: '/bleed',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Bleed',
                    range: [0.083, 100]
                },
                {
                    name: 'injury',
                    url: '/injury',
                    tpl: 'tpls/surveyForm.html',
                    title: 'injury',
                    range: [0, 14]
                },
                {
                    name: 'tobacco',
                    url: '/tobacco',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Tobacco',
                    range: [5, 100]
                },
                {
                    name: 'hsu',
                    url: '/hsu',
                    tpl: 'tpls/surveyForm.html',
                    title: 'Health Service Utilization',
                    range: [0, 100]
                }

            ];

        function getEligibleSections(deathAge) {

            return _.filter($scope.eslConfigChildren, function (child) {


                return deathAge > child.range[0] && deathAge < child.range[1]
            })
        }

        function convertToYears(ageValue, ageUnit) {

            switch (ageUnit) {

                case 'Days':
                    return ageValue / 365
                    break
                case 'Months':
                    return (ageValue * 30) / 365
                    break;
                case 'Years':
                    return ageValue
                    break;

            }

        }


    })