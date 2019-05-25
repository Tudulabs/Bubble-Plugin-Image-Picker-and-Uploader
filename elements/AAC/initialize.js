function(instance, context) {
    instance.data.runOnce = 0
    instance.canvas.style.zIndex="-400"
    instance.canvas.style.visibility = "hidden";
    instance.canvas.style.height = "0";
    instance.canvas.style.width = "0";
    instance.canvas.style.display = 'none';

//THE PLUGIN STILL NEEDS: THE ITEMS TO BE PUSHED IN ORDER. RIGHT NOW THEY ARE PUSHED TO THE ARRAY AS THEY ARE FINISHED READING THE FILE. i NEED TO ASSIGN THEM TO AN ARRAY POSITION
    
     instance.data.allFiles = []

         //Create the input element and attach it's attributes
	instance.data.fileInput1 = document.createElement("INPUT");
    
         //set the input type to be file
	instance.data.fileInput1.setAttribute("type", "file");
    
         //give it an ID
    instance.data.fileInput1.setAttribute("id", "fileElem");
            
    //make it invisible because it's ugly and we want to use native bubble elements    
    instance.data.fileInput1.style.display = 'none';
   
  
}