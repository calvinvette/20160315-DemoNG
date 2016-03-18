angular.module("DemoNG").directive('cvForm', function() { // cv-form
	return {
//		restrict: 'ACE', // Element, Attribute, or Class
		restrict: 'E', // Element only
		//template: "Howdy from {{@name}} directive!",
		templateUrl: 'directives/forms/cvform.html',
//		controller: 
		scope: {
			formName : '@name'
		}
	}
});

angular.module("DemoNG").directive('cvFf', function() {
	return {
		restrict: 'AC', // Attribute only, usually of an input, select, or textarea
		templateUrl: 'directives/forms/cvformfield.html',
		scope: {
			originalElement : element
		},
		link: function($scope, element, attrs) {
			// Take the element we're modifying and add our templateUrl code 
			// Merge the form field as "originalFormField" into the html
		}
	}
});

/*
 * templateUrl
 * controller
 * link
 */


/*
<form cv-form="foobar"> // Attribute

</form>

<cv-form ...> // Element


</cv-form>

<form class="cv-form"> // Class

</form>

*/