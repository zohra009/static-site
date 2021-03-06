//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

var maxArea = function(height) {
    var bigJizz = 0;
   for(i = 0; i < height.length; i++ ){
       for(j = i + 1; j < height.length; j++){
    var whiteBoyDong = calculateArea(height, i, j);
           if(whiteBoyDong > bigJizz){ 
             bigJizz = whiteBoyDong;
        }        
    }        
   }
    return bigJizz ; 
};

//helper function
//take the index (position) & height array & return the area

var calculateArea = function(height, left, right){
    //calculate delta x
    var xDifference = Math.abs(left - right);
    var minHeight = Math.min(height[left], height[right] );
    var area = minHeight * xDifference;
    //return otherwise get null
    return area;
}