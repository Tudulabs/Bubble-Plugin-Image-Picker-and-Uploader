function(instance, context) {

//I STILL NEED TO MAKE THIS A MULTIPLE FILELIST INSTEAD OF JUST ONE. RIGHT NOW IT CAN ACCEPT MULTIPLE, BUT IT DOES NOT RENDER THEM OR STORE THEM IN THE STATE    
    
                instance.data.allFiles = []

//The on Change event when the filelist input changes
    
    function updateImageDisplay()
{
    
    var i = 0
    
    while (instance.data.fileInput1.files.length > i)
        {

        
    console.log('the counter count is: ' + i)
    console.log('The file count is: ' + instance.data.fileInput1.files.length)
            
        
    //create the individual file to send to the file reader
    var file = instance.data.fileInput1.files[i];
    //create the fileReader Event
    var reader1 = new FileReader();
    var reader2 = new FileReader();
    var reader3 = new FileReader();
    var reader4 = new FileReader();
    var reader5 = new FileReader();
    var reader6 = new FileReader();
    var reader7 = new FileReader();
    var reader8 = new FileReader();
    var reader9 = new FileReader();
    var reader10 = new FileReader();
    
    
//Tell the reader to read the file the user provided
    
    reader1.readAsDataURL(instance.data.fileInput1.files[0])
    reader2.readAsDataURL(instance.data.fileInput1.files[1])
            
            
            //this creates an instanced array that contains all of my files

            i++
   } 
    
//Create a function that activates when the read finishes loading    
    reader1.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader1.result)
        
        console.log(instance.data.allFiles)
                    instance.publishState('all_files' , instance.data.allFiles)

        
        //I extracted the base64 part of it
        var justBase64 = instance.data.allFiles[0].split(',')[1];
//set a bubble variable equal to the base64 of the image.        
        instance.data.base64OfImg = justBase64

    }    
    
    reader2.onload = function (e) {
        
        //Set a Bubble variable equal to the readers result
        instance.data.allFiles.push(reader2.result)
        
        console.log('just published the 2nd one')
                    instance.publishState('all_files' , instance.data.allFiles)

        
        //I extracted the base64 part of it
        var justBase64 = instance.data.allFiles[0].split(',')[1];
//set a bubble variable equal to the base64 of the image.        
        instance.data.base64OfImg = justBase64

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