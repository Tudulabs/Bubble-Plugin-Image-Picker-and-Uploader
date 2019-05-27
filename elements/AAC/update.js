function(instance, properties, context) {


    
    if (instance.data.runOnce == 0)
        
        {
            
            
            
   function updateImageDisplay()
{
    instance.data.allFiles = []
    
if (instance.data.fileInput1.files.length > properties.max_number_of_files || instance.data.allFiles.length >= properties.max_number_of_files)
    
    //Send an event that triggers if a user has too many files
    
    {        
                      instance.triggerEvent('has_too_many_files')
    }
    
//create a fileReader for each file inputted.
else {
            if (instance.data.fileInput1.files.length >= 1){
                    var reader1 = new FileReader();
                    reader1.readAsDataURL(instance.data.fileInput1.files[0])
                console.log('Just read the file')
            }
    
            if (instance.data.fileInput1.files.length >= 2){
    			var reader2 = new FileReader();            
    			    reader2.readAsDataURL(instance.data.fileInput1.files[1])
                
            }
            
            if (instance.data.fileInput1.files.length >= 3){ 
                var reader3 = new FileReader();
                    reader3.readAsDataURL(instance.data.fileInput1.files[2])
               
           }
            
            if (instance.data.fileInput1.files.length >= 4){
                
                    var reader4 = new FileReader();
                        reader4.readAsDataURL(instance.data.fileInput1.files[3])
                
            }
            
            if (instance.data.fileInput1.files.length >= 5){
                
                    var reader5 = new FileReader();
                        reader5.readAsDataURL(instance.data.fileInput1.files[4])
            }
            
            if (instance.data.fileInput1.files.length >= 6){
                    var reader6 = new FileReader();
                        reader6.readAsDataURL(instance.data.fileInput1.files[5])
            }
            
            if (instance.data.fileInput1.files.length >= 7){
                    var reader7 = new FileReader();
                        reader7.readAsDataURL(instance.data.fileInput1.files[6])
            }
            
            if (instance.data.fileInput1.files.length >= 8){
                
                    var reader8 = new FileReader();
                        reader8.readAsDataURL(instance.data.fileInput1.files[7])
            }
            
            if (instance.data.fileInput1.files.length >= 9){
                    var reader9 = new FileReader();
                        reader9.readAsDataURL(instance.data.fileInput1.files[8])
                
            }
            
            if (instance.data.fileInput1.files.length >= 10){
                
                    var reader10 = new FileReader();
                        reader10.readAsDataURL(instance.data.fileInput1.files[9])
            }


       
    
//Create a function that activates when the read finishes loading
    
                if (instance.data.fileInput1.files.length >= 1){

    reader1.onload = function (e) {
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader1.result)
        
        instance.publishState('all_files' , instance.data.allFiles)
        
        //Extracted the base64 part of the image and set a bubble variable equal to the base64 of the image.     

        instance.data.base64OfImg1 = reader1.result.split(',')[1]


    }    
    
                }
    
                if (instance.data.fileInput1.files.length >= 2){

    reader2.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader2.result)

        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg2 = reader2.result.split(',')[1]

    }

    }    
    
                if (instance.data.fileInput1.files.length >= 3){

    
    reader3.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader3.result)
        
        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg3 = reader3.result.split(',')[1]


    }   
                }
    
                if (instance.data.fileInput1.files.length >= 4){

     reader4.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader4.result)
        
        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg4 = reader4.result.split(',')[1]


    } 
      
                }
    
    
    
                    if (instance.data.fileInput1.files.length >= 5){

      
     reader5.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader5.result)
        
        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg5 = reader5.result.split(',')[1]


    }   
      
                    }
    
    
                    if (instance.data.fileInput1.files.length >= 6){

      
      
      reader6.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader6.result)
        
        instance.publishState('all_files' , instance.data.allFiles)
        
        instance.data.base64OfImg6 = reader6.result.split(',')[1]


    }   
    
                    }
    
    
                    if (instance.data.fileInput1.files.length >= 7){

      
      reader7.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader7.result)
        
        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg7 = reader7.result.split(',')[1]


    } 
      
      
                    }
    
                    if (instance.data.fileInput1.files.length >= 8){

      
      
      reader8.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader8.result)
        
        instance.publishState('all_files' , instance.data.allFiles)
  
        instance.data.base64OfImg8 = reader8.result.split(',')[1]


    } 
    
      
                    }
    
                    if (instance.data.fileInput1.files.length >= 9){

      
      reader9.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader9.result)
        
        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg9 = reader9.result.split(',')[1]


    } 
       
       
                    }
    
                    if (instance.data.fileInput1.files.length >= 10){

       
      reader10.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader10.result)
        
        instance.publishState('all_files' , instance.data.allFiles)

        instance.data.base64OfImg10 = reader10.result.split(',')[1]
           
       }

    } 
       
                    }   

}

            if (properties.file_type == 'Images'){
                instance.data.fileInput1.setAttribute("accept", "image/*");
            }
            
             if (properties.file_type == 'Audio'){
                 
                instance.data.fileInput1.setAttribute("accept", "audio/*");
            }
            
            if (properties.file_type == 'Videos'){
                 
                instance.data.fileInput1.setAttribute("accept", "video/*");
            }
            
            if (properties.file_type == 'All Files'){
                 
            }
            
            
    	//attach the event listener that runs a function
    instance.data.fileInput1.addEventListener('change', updateImageDisplay);
            if (properties.max_number_of_files > 1){
                    instance.data.fileInput1.setAttribute("multiple", "true");

            }

            instance.data.runOnce++
  }  
    
}