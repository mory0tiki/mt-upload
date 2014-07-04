/**
 * The angular file upload directive
 * 
 * @author: Morteza Tavanarad
 * @version: 0.1, 2014-07-02
 */

mtFileUpload.directive('mtUpload', function() {
	
	var link = function(scope, element, attributes) {
		
		element.bind("change", function (changeEvent) {
            var reader = new FileReader();
            reader.onload = function (loadEvent) {
                scope.$apply(function () {
                    scope.ngModel = loadEvent.target.result;
                });
            };
            reader.readAsDataURL(changeEvent.target.files[0]);
        });
	};

	return {
		scope : {
			autoUpload : "=",
			uploadUrl : "=",
			ngModel: "="
		},
		restrict: "AE",
		link : link,
		replace : true,
		template: "<input type='file' />"
	}
});