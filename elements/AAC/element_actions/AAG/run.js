function(instance, properties, context) {
    
    instance.data.uploaded_files = []
    
            if (instance.data.fileInput1.files.length >= 1){

          context.uploadContent(instance.data.fileInput1.files[0].name , instance.data.base64OfImg1 , function(err, url){
              
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)
              
              if (instance.data.fileInput1.files.length == 1)
                  {
              instance.triggerEvent('images_are_uploaded')
              console.log('All images are finished uploading')

                  }
                      
          }
                               )
                
            }
    
                if (instance.data.fileInput1.files.length >= 2){
context.uploadContent(instance.data.fileInput1.files[1].name , instance.data.base64OfImg2 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 2)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}   
                      )
                }

    
      if (instance.data.fileInput1.files.length >= 3){
context.uploadContent(instance.data.fileInput1.files[2].name , instance.data.base64OfImg3 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 3)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                    
                  }
    
}
                      )
                }

if (instance.data.fileInput1.files.length >= 4){
context.uploadContent(instance.data.fileInput1.files[3].name , instance.data.base64OfImg4 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 4)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }    
    

if (instance.data.fileInput1.files.length >= 5){
context.uploadContent(instance.data.fileInput1.files[4].name , instance.data.base64OfImg5 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 5)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }
    
    if (instance.data.fileInput1.files.length >= 6){
context.uploadContent(instance.data.fileInput1.files[5].name , instance.data.base64OfImg6 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 6)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }
    
    if (instance.data.fileInput1.files.length >= 7){
context.uploadContent(instance.data.fileInput1.files[6].name , instance.data.base64OfImg7 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 7)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }
    
    
if (instance.data.fileInput1.files.length >= 8){
context.uploadContent(instance.data.fileInput1.files[7].name , instance.data.base64OfImg8 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 8)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }    
    
if (instance.data.fileInput1.files.length >= 9){
context.uploadContent(instance.data.fileInput1.files[8].name , instance.data.base64OfImg9 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 9)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }
    
    
if (instance.data.fileInput1.files.length >= 10){
context.uploadContent(instance.data.fileInput1.files[9].name , instance.data.base64OfImg10 , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.fileInput1.files.length == 10)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
                      console.log('All images are finished uploading')
                    
                  }
    
}
                      )
                }    
    

}