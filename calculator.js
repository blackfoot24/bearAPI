var Calculator = function(){
		return {
			sum: function(a, b){
				return(a + b);
			},
			subtract: function(a, b){
				if(a > b) {
					console.log(a - b);
					} else {
					console.log(b - a);
			}
		}
	}
}


module.exports = Calculator;