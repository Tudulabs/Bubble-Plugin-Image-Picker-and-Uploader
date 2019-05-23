function(instance, properties, context) {


          context.uploadContent(instance.data.fileInput1.files[0].name , instance.data.base64OfImg , function(err, url){
                        console.log(url)
              instance.publishState('uploaded_files' , url)
              instance.triggerEvent('images_are_uploaded')
              

          }
                               )
    
    




}