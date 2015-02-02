exports.world = function() {
    function print(i,intervalId) {
    	if (i < 10) {
    		console.log('Hello World');
    	} else {
    		clearInterval(intervalId)
    	}
    	
    }
    var i = 0;
	var intervalId = setInterval(print,500,i++,intervalId);
  
}