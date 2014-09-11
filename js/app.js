


var chartjs = angular.module('ngChartjs', []);


chartjs.config(function($routeProvider){
	$routeProvider
		.when('/chart/:chartType', {templateUrl: 'templates/chart.html',  controller: ChartPages})
		.when('/add/day', {templateUrl: "templates/form.html", controller: AddData})
		.otherwise({redirectTo: '/', templateUrl: 'templates/home_thumbs.html', controller: MainCtrl});
});

chartjs.directive('opLinks', function($rootScope){
	return {
		restrict: 'A',
		transclude: true,
		template: function(){
			var userData = getSavedData();
			if(userData) {
				return '<a ng-click="deleteSavedData();" class="add-another">Remove </a> / <a href="#/add/day">Edit</a>';
			} else {
				return '<a href="#/add/day">Add your day</a>';
			}
		}
	}
});

chartjs.directive('openColor', function() {
   return {
      require: 'ngModel',
      link: function(scope, element, attrs) {
        	element.ColorPicker({
        			eventName: 'focus',
							onSubmit: function(hsb, hex, rgb, el) {
								element.val('#' + hex);
								element.ColorPickerHide();
							}
					});
      }
   }
});



/* add thumnails on home page */
function MainCtrl($scope, $route, $http) {
	$('.back-button').hide();
	$('.dashboard-thumnails img').tipsy({title: 'alt', gravity: 'sw'});
	$scope.deleteSavedData = function deleteSavedData(){
		localStorage.clear();
		location.reload(); 
	}
}


/* common for all the charts */
function ChartPages($scope, $route, $http, $routeParams, $location) {
	$('.back-button').show();
	$('.tipsy').remove();

	var chartType = $routeParams.chartType; // get chart type from the url
	var validPaths = ["line", "bar", "radar", "polar", "pie", "doughnut"]; // chart type
	var pathExist = $.inArray(chartType, validPaths); // check if path exist as defined above

	if(pathExist != -1) {
		$http.get('data/default_data.json?q=ran').success(function(response){
			CreateChart(response, chartType);
		  	// show back button and remove tipsy element
		});
	} else {
		$location.path('/');
	}
}


/* create chart here */
function CreateChart(response, chartType) {
	//build data structure
	var chartdata;

	//if user saved data
	var userData = getSavedData();
	if(userData) {
		// change response
		userData.config = response.config;
		userData.options = response.options;
		response = userData;
	}

	if(chartType == 'line' || chartType == 'bar' || chartType == 'radar') {
		chartdata = FirstLevelCharts(response);
	}
	if(chartType == 'polar' || chartType == 'pie' || chartType == 'doughnut') {
		chartdata = SecondLevelCharts(response);
	}
	

	// common chart options
	var options = {}; // define object
	for(var key in response.options[0]) {
		options[key] = response.options[0][key]; 
	}

	// draw chart
	var canvas = $("#draw-chart").get(0).getContext("2d");
	switch(chartType){
		case 'line':
			var drawit = new Chart(canvas).Line(chartdata, options);
			 break;
		case 'bar':
			var drawit = new Chart(canvas).Bar(chartdata, options);
			 break;
		case 'radar':
			var drawit = new Chart(canvas).Radar(chartdata, options);
			break;
		case 'polar':
			var drawit = new Chart(canvas).PolarArea(chartdata, options);
			break;
		case 'pie':
			var drawit = new Chart(canvas).Pie(chartdata, options);
			break;
		case 'doughnut':
			var drawit = new Chart(canvas).Doughnut(chartdata, options);
			break;
	}
	
}

/* first level charts eg: line, bar and radar for default user */
function FirstLevelCharts(response) {
	var rawdata = [];
	var labels = [];
	for(i=0; i < response.datasets.length; i++){
		rawdata.push(response.datasets[i].value);
		labels.push(response.datasets[i].label);
	}
	var	chartdata = {
		labels: labels,
		datasets: [
			{
				fillColor : response.config[0].fillColor,
				strokeColor : response.config[0].strokeColor,
				pointColor : response.config[0].pointColor,
				pointStrokeColor : response.config[0].pointStrokeColor,
				data : rawdata
			}
		]
	};
	return chartdata;
}

/* first level charts eg: polar, pie and doughnut for default user */
function SecondLevelCharts(response) {
	var chartdata = [];
	for(i=0; i < response.datasets.length; i++){
		chartdata.push({
			label: response.datasets[i].label,
			value: response.datasets[i].value,
			color: response.datasets[i].color
		});
	}
	return chartdata;
}


/* add user data form */
function AddData($scope, $location){
	$('.back-button').show();

	$scope.defaultItems = [{'label': ''},{'label': ''},{'label': ''}]; // default opened rows
	
	var userData = getSavedData();
	if(userData) {
		prefillUserData($scope, userData);
	}

	$scope.mytest = function(){
		alert('dfs');
	}
	
	$scope.addAnother = function(){
		if($scope.showErrorsFun() === false){
			return false;
		}
		$scope.defaultItems.push({ label: ''});
	}

	$scope.saveData = function() {
		var userDayData = [];
		var i = 0;

		if($scope.showErrorsFun() === false){
			return false;
		}

		//alert($scope.defaultItems.toSource());
		for(var key in $scope.defaultItems) {
				// using jquery to pick updated color value as angular fail to get it.
			$('.form-wrapper input[name="color"]').each(function(n){
				if(i == n){
					$scope.defaultItems[key].color = $(this).val();
				}
			});
			var time = timeFormatting($scope.defaultItems[key].value);
			localStorage.setItem("label_" + i, $scope.defaultItems[key].label);
			localStorage.setItem("value_" + i, time);
			localStorage.setItem("color_" + i, $scope.defaultItems[key].color);
			i++;
		}
		localStorage.setItem("totalRows", i);
		location.reload();
	}

	$scope.showErrorsFun = function(){
		var total_time=0, decimal=0;
		for(var key in $scope.defaultItems) {
			if(isNaN($scope.defaultItems[key].value) === false) {
				total_time += timeFormatting($scope.defaultItems[key].value);
			}else {
				total_time += 0;
			}
		}

		if(total_time > 24) {
			$scope.showErrors = function(){
				return true;
			}
			return false;
		} 
	}
}

function 	timeFormatting(time){
	var retime = 0; 
	if(isNaN(time) === false) {
		retime = parseInt(time);
		return retime;
	}
	return retime;
}

function prefillUserData($scope, userData){
	for(var i=0; i < userData.datasets.length; i++){
		$scope.defaultItems[i] = {'label': userData.datasets[i].label, 'value': userData.datasets[i].value, 'color': userData.datasets[i].color};
	}
}

function getSavedData(){
	var userSaved = localStorage.getItem("totalRows");
	if(userSaved > 0) {
		var data = [];
		for(var i=0; i<userSaved; i++) {
			data[i] = {"label": localStorage.getItem("label_" + i), "value": timeFormatting(localStorage.getItem("value_" + i)), "color": localStorage.getItem("color_" + i)};
		}
		userData = {};
		userData.datasets = data;
		return userData;
	} else {
		return false;
	}
}
