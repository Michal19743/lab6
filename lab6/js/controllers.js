var portfolioApp = angular.module('portfolioApp',[]); 

portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'zdjecie1',
    'when':'2013-03-24', 
     'thumbnailUrl':'img/zdjecie1.jpg'
    },
    { 'title':'zdjecie2',
    'when':'2012-03-05', 
     'thumbnailUrl':'img/zdjecie2.jpg'
    },
    { 'title':'zdjecie3',
    'when':'2016-03-14', 
     'thumbnailUrl':'img/zdjecie3.jpg'
    },
    { 'title':'zdjecie4',
    'when':'2013-05-01', 
     'thumbnailUrl':'img/zdjecie4.jpg'
    },
    { 'title':'zdjecie5',
    'when':'2017-05-23', 
     'thumbnailUrl':'img/zdjecie5.jpg'
    },
    { 'title':'zdjecie6',
    'when':'2015-02-05', 
     'thumbnailUrl':'img/zdjecie6.png'
    },
    ];
    }); 