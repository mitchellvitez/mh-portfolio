var nameswap = angular.module('nameswap', []);

nameswap.controller('nameswapController', function($scope) {
        $scope.quote = '"Yes," said Riddle, calmly. "Of course, she didn\'t know what she was doing at first. It was very amusing. I wish you could have seen her new diary entries...far more interesting, they became.... "Dear Tom," he recited, watching Harry\'s horrified face, "I think I\'m losing my memory. There are rooster feathers all over my robes and I don\'t know how they got there. Dear Tom, I can\'t remember what I did on the night of Halloween, but a cat was attacked and I\'ve got paint all down my front. Dear Tom, Percy keeps telling me I\'m pale and I\'m not myself. I think he suspects me... There was another attack today and I don\'t know where I was. Tom, what am I going to do? I think I\'m going mad... I think I\'m the one attacking everyone, Tom!"';
        $scope.texttoalter = $scope.quote;
        $scope.originalnames = 'Riddle\nTom\nPercy\nHarry\ncat';
        $scope.newnames = 'Mitchell\nMitchell\nBarack Obama\nThe Hairy Potter\ngiant kelp';

        $scope.update = function(originalnames, newnames, texttoalter) {
            $scope.originalnames = originalnames;
            $scope.newnames = newnames;
            $scope.texttoalter = texttoalter;
            $scope.quote = replaceAll($scope.originalnames, $scope.newnames, $scope.texttoalter);
        };

        $scope.update($scope.originalnames, $scope.newnames, $scope.texttoalter);

});

function replaceAll(originalnames, newnames, texttoalter) {
    var orignamesarr = originalnames.split('\n');
    var newnamesarr = newnames.split('\n');
    for(var i = 0; i < Math.min(orignamesarr.length, newnamesarr.length); i++){
        texttoalter = texttoalter.replace(new RegExp(orignamesarr[i], 'g'), newnamesarr[i]);
    }

    return texttoalter;
}