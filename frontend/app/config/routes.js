(() =>
    angular.module('billingCyclesApp').config([
        '$stateProvider',
        '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            $stateProvider.state('dashboard', {
                url: '/dashboard',
                templateUrl: '../dashboard/dashboard.html'
            }).state('billingCycle', {
                url: '/billingCycle',
                templateUrl: '../billingCycles/tabs.html'
            })
            $urlRouterProvider.otherwise('/dashboard')
        }
    ])
)()