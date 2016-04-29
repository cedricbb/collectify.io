/**
 * Created by cbillard on 29/04/2016.
 */
app.controller('MainController', function($scope) {
    $scope.items = [
        {
            name: 'toto',
            age: 18,
            sexe: 'homme'
        },
        {
            name: 'tata',
            age: 25,
            sexe: 'femme'
        }
    ]
});