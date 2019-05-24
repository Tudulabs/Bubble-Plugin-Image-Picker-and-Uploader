function(instance, context) {
    

//THE PLUGIN STILL NEEDS: THE ITEMS TO BE PUSHED IN ORDER. rIGHT NOW THEY ARE PUSHED TO THE ARRAY AS THEY ARE FINISHED READING THE FILE. i NEED TO ASSIGN THEM TO AN ARRAY POSITION
    //THERE IS NO FILE LIMITING. EVEN THOUGH THERE IS A PROPERTY THAT LETS YOU ALLOW A MAX FILE #, IT DOES NOTHING
    
                instance.data.allFiles = []

//The on Change event when the filelist input changes
    
    function updateImageDisplay()
{
    

//create a fileReader for each file inputted.

            if (instance.data.fileInput1.files.length >= 1){
                    var reader1 = new FileReader();
                    reader1.readAsDataURL(instance.data.fileInput1.files[0])

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

   
            
            
            //this creates an instanced array that contains all of my files

       
    
//Create a function that activates when the read finishes loading
    
                if (instance.data.fileInput1.files.length >= 1){

    reader1.onload = function (e) {
        console.log('Added 1 image')
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader1.result)
        
                    instance.publishState('all_files' , instance.data.allFiles)

        
        //I extracted the base64 part of the image
        instance.data.base64OfImg1 = reader1.result.split(',')[1]
//set a bubble variable equal to the base64 of the image.     
        


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
    
    
    
    
//use this to publish the entire array    
        

    
    
    //Create the input element and attach it's attributes
instance.data.fileInput1 = document.createElement("INPUT");
//set the input type to be file
instance.data.fileInput1.setAttribute("type", "file");
    
    //give it an ID
    instance.data.fileInput1.setAttribute("id", "fileElem");
    
    //tell it to accept any type of image
    instance.data.fileInput1.setAttribute("accept", "image/*");
    
    //tell it to allow multiple images
    instance.data.fileInput1.setAttribute("multiple", "true");
    
    //make it invisible because it's ugly and we want to use native bubble elements    
    instance.data.fileInput1.style.display = 'none';

	//attach the event listener that runs a fuction
    instance.data.fileInput1.addEventListener('change', updateImageDisplay);

    
    
  
}