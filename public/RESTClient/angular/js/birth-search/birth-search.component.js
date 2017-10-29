angular
    .module("birthSearch")
    .component("birthSearch", {
        templateUrl: 'js/birth-search/birth-search.template.html',
        controller: ["$scope", "$http", function($scope, $http) {
            console.log("Search Controller initialized");

            $scope.$parent.vLimit = 3;
            var baseURL = '/api/v1/spain-births';

            $scope.search = function(region, year, limit, offset, from, to) {
                var vOffset = parseInt((parseInt(offset) - parseInt(1))) * parseInt($scope.$parent.vLimit);
                var vOffset2 = parseInt((parseInt(offset) - parseInt(1))) * parseInt(limit);
                //no hay búsqueda
                if (!region && !year && !limit && !offset && !from && !to) {
                    $scope.$parent.getAll();
                }
                //búsqueda de región
                else if (region != undefined && !year && !limit && !offset && !from && !to) {
                    $http.get(baseURL + '/' + region + '?limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                
                //búsqueda de región y offset
                else if (region != undefined && !limit && !year && !from && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región y límite
                else if (region != undefined && limit != undefined && !year && !from && !to && !offset) {
                    $http.get(baseURL + '/' + region + '?limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, límite y offset
                else if (region != undefined && limit != undefined && !year && !from && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región y from
                else if (region != undefined && from != undefined && !year && !limit && !to && !offset) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from y offset
                else if (region != undefined && from != undefined && !year && !limit && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from y límite
                else if (region != undefined && from != undefined && !year && limit != undefined && !to && !offset) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from, límite y offset
                else if (region != undefined && from != undefined && !year && limit != undefined && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región y to
                else if (region != undefined && to != undefined && !year && !from && !limit && !offset) {
                    $http.get(baseURL + '/' + region + '?to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, to y offset
                else if (region != undefined && to != undefined && !year && !from && !limit && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, to y limit
                else if (region != undefined && to != undefined && !year && !from && limit != undefined && !offset) {
                    $http.get(baseURL + '/' + region + '?to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, to, limit y offset
                else if (region != undefined && to != undefined && !year && !from && limit != undefined && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from y to
                else if (region != undefined && from != undefined && to != undefined && !limit && !year && !offset) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from, to y offset
                else if (region != undefined && from != undefined && to != undefined && !limit && !year && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from, to y limit
                else if (region != undefined && from != undefined && to != undefined && limit != undefined && !year && !offset) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, from, to, limit y offset
                else if (region != undefined && from != undefined && to != undefined && limit != undefined && !year && offset != undefined) {
                    $http.get(baseURL + '/' + region + '?from=' + from + '&to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año
                else if (year != undefined && !region && !limit && !from && !to && !offset) {
                    $http.get(baseURL + '/' + year + '?limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año y offset
                else if (year != undefined && !region && !limit && !from && !to && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año y límite
                else if (year != undefined && limit != undefined && !region && !from && !to && !offset) {
                    $http.get(baseURL + '/' + year + '?limit=' + $scope.$parent.limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, límite y offset
                else if (year != undefined && limit != undefined && !region && !from && !to && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?limit=' + $scope.$parent.limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año y from
                else if (year != undefined && from != undefined && !region && !limit && !to && !offset) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from y offset
                else if (year != undefined && from != undefined && !region && !limit && !to && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from y limit
                else if (year != undefined && from != undefined && !region && limit != undefined && !to && !offset) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from, limit y offset
                else if (year != undefined && from != undefined && !region && limit != undefined && !to && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año y to
                else if (year != undefined && to != undefined && !region && !from && !limit && !offset) {
                    $http.get(baseURL + '/' + year + '?to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, to y offset
                else if (year != undefined && to != undefined && !region && !from && !limit && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, to y limit
                else if (year != undefined && to != undefined && !region && !from && limit != undefined && !offset) {
                    $http.get(baseURL + '/' + year + '?to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, to, limit y offset
                else if (year != undefined && to != undefined && !region && !from && limit != undefined && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from y to
                else if (year != undefined && from != undefined && to != undefined && !limit && !region && !offset) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from, to y offset
                else if (year != undefined && from != undefined && to != undefined && !limit && !region && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from, to y limit
                else if (year != undefined && from != undefined && to != undefined && limit != undefined && !region && !offset) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de año, from, to, limit y offset
                else if (year != undefined && from != undefined && to != undefined && limit != undefined && !region && offset != undefined) {
                    $http.get(baseURL + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región y año
                else if (region != undefined && year != undefined && !limit && !from && !to && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año y offset
                else if (region != undefined && year != undefined && !limit && !from && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, límite
                else if (region != undefined && year != undefined && limit != undefined && !from && !to && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, límite y offset
                else if (region != undefined && year != undefined && limit != undefined && !from && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from
                else if (region != undefined && year != undefined && !limit && from != undefined && !to && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from y offset
                else if (region != undefined && year != undefined && !limit && from != undefined && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from y limit
                else if (region != undefined && year != undefined && limit != undefined && from != undefined && !to && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from, limit y offset
                else if (region != undefined && year != undefined && limit != undefined && from != undefined && !to && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, to
                else if (region != undefined && year != undefined && !limit && !from && to != undefined && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, to y offset
                else if (region != undefined && year != undefined && !limit && !from && to != undefined && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, to y limit
                else if (region != undefined && year != undefined && limit != undefined && !from && to != undefined && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, to, limit y offset
                else if (region != undefined && year != undefined && limit != undefined && !from && to != undefined && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from y to
                else if (region != undefined && year != undefined && !limit && from != undefined && to != undefined && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from, to y offset
                else if (region != undefined && year != undefined && !limit && from != undefined && to != undefined && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from, to y limit
                else if (region != undefined && year != undefined && limit != undefined && from != undefined && to != undefined && !offset) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda de región, año, from, to, limit y offset
                else if (region != undefined && year != undefined && limit != undefined && from != undefined && to != undefined && offset != undefined) {
                    $http.get(baseURL + '/' + region + '/' + year + '?from=' + from + '&to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite
                else if (limit != undefined && !region && !year && !from && !to && !offset) {
                    $http.get(baseURL + '?limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite y offset
                else if (limit != undefined && !region && !year && !from && !to && offset != undefined) {
                    $http.get(baseURL + '?limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite y from
                else if (limit != undefined && !region && !year && from != undefined && !to && !offset) {
                    $http.get(baseURL + '?from=' + from + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite, from y offset
                else if (limit != undefined && !region && !year && from != undefined && !to && offset != undefined) {
                    $http.get(baseURL + '?from=' + from + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite y to
                else if (limit != undefined && !region && !year && !from && to != undefined && !offset) {
                    $http.get(baseURL + '?to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite, to y offset
                else if (limit != undefined && !region && !year && !from && to != undefined && offset != undefined) {
                    $http.get(baseURL + '?to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite, from y to
                else if (limit != undefined && !region && !year && from != undefined && to != undefined && !offset) {
                    $http.get(baseURL + '?from=' + from + '&to=' + to + '&limit=' + limit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con límite, from, to y offset
                else if (limit != undefined && !region && !year && from != undefined && to != undefined && offset != undefined) {
                    $http.get(baseURL + '?from=' + from + '&to=' + to + '&limit=' + limit + '&offset=' + vOffset2).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con from
                else if (from != undefined && !region && !year && !limit && !to && !offset) {
                    $http.get(baseURL + '?from=' + from + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con from y offset
                else if (from != undefined && !region && !year && !limit && !to && offset != undefined) {
                    $http.get(baseURL + '?from=' + from + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con to
                else if (!limit && !region && !year && !from && to != undefined && !offset) {
                    $http.get(baseURL + '?to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con to y offset
                else if (!limit && !region && !year && !from && to != undefined && offset != undefined) {
                    $http.get(baseURL + '?to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con from y to
                else if (!limit && !region && !year && from != undefined && to != undefined && !offset) {
                    $http.get(baseURL + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con from, to y offset
                else if (!limit && !region && !year && from != undefined && to != undefined && offset != undefined) {
                    $http.get(baseURL + '?from=' + from + '&to=' + to + '&limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
                //búsqueda con offset
                else if (!limit && !region && !year && !from && !to && offset != undefined) {
                    $http.get(baseURL + '?limit=' + $scope.$parent.vLimit + '&offset=' + vOffset).then(successCallbackSearch, errorCallbackSearch);
                }
            };

            var successCallbackSearch = function(response) {
                console.log('Data received successfully');
                $scope.$parent.myValue = false;
                $scope.$parent.births = response.data;
            };
            var errorCallbackSearch = function(response, data, status, headers, config) {
                $scope.$parent.myValue = true;
                $scope.$parent.births = [];
                $scope.$parent.error = response.status + " " + response.statusText;
            };
        }]
    });
