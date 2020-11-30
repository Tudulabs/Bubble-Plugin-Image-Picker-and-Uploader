function(instance, properties, context) {

    
    //TODO - Swap over to the new method instance.uploadFile(instance.data.filesSelected[0], callback, [attachTo], [progressCallback]) method

    //This is Bubbles new upload method that allows for bigger files to be uploaded. It also gives us the ability to see the progress % of the upload
    
    //I should replace all of the old context.uploadContent with the new method, and expose the progressCallback method to users.
    
    //I don't see any real major issues coming from this
    
    instance.data.filesSelected = properties.files_to_upload.get(0,10)
    instance.data.uploaded_files = []
    
    
    
    if (instance.data.filesSelected.length < 1){
            alert(properties.no_files_selected_message)
        }
    
    else{
    instance.publishState('files_are_uploading' , true)
            if (instance.data.filesSelected.length >= 1){

          instance.data.file1FileType = instance.data.filesSelected[0].substr(0, instance.data.filesSelected[0].indexOf(';'))
                if (instance.data.file1FileType.includes('+'))
                    {
                    instance.data.file1FileType = instance.data.filesSelected[0].substr(0, instance.data.filesSelected[0].indexOf('+'))
                    }

                
          context.uploadContent('file.' + instance.data.file1FileType.split('/')[1] , instance.data.filesSelected[0].split(',')[1] , function(err, url){
              
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)
              
              if (instance.data.filesSelected.length == 1)
                  {
                                            console.log("uploaded")

              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)


                  }
                      
              
          }
                               )
                
            }
    
                if (instance.data.filesSelected.length >= 2){
                    
                    
                        instance.data.file2FileType = instance.data.filesSelected[1].substr(0, instance.data.filesSelected[1].indexOf(';'))
                    
                    
                    if (instance.data.file2FileType.includes('+'))
                    {
                    instance.data.file2FileType = instance.data.filesSelected[1].substr(0, instance.data.filesSelected[1].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file2FileType.split('/')[1] , instance.data.filesSelected[1].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 2)
                  {
                      console.log("uploaded")
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}   
                      )
                }

    
      if (instance.data.filesSelected.length >= 3){
          
          
              instance.data.file3FileType = instance.data.filesSelected[2].substr(0, instance.data.filesSelected[2].indexOf(';'))
          
          if (instance.data.file3FileType.includes('+'))
                    {
                    instance.data.file3FileType = instance.data.filesSelected[2].substr(0, instance.data.filesSelected[2].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file3FileType.split('/')[1] , instance.data.filesSelected[2].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 3)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)

                  }
    
}
                      )
                }

if (instance.data.filesSelected.length >= 4){
    
    
        instance.data.file4FileType = instance.data.filesSelected[3].substr(0, instance.data.filesSelected[3].indexOf(';'))
    
    if (instance.data.file4FileType.includes('+'))
                    {
                    instance.data.file4FileType = instance.data.filesSelected[3].substr(0, instance.data.filesSelected[3].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file4FileType.split('/')[1] , instance.data.filesSelected[3].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 4)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }    
    

if (instance.data.filesSelected.length >= 5){
    
    
        instance.data.file5FileType = instance.data.filesSelected[4].substr(0, instance.data.filesSelected[4].indexOf(';'))
    
    if (instance.data.file5FileType.includes('+'))
                    {
                    instance.data.file5FileType = instance.data.filesSelected[4].substr(0, instance.data.filesSelected[4].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file5FileType.split('/')[1] , instance.data.filesSelected[4].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 5)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }
    
    if (instance.data.filesSelected.length >= 6){
        
        
            instance.data.file6FileType = instance.data.filesSelected[5].substr(0, instance.data.filesSelected[5].indexOf(';'))
        
        
        if (instance.data.file6FileType.includes('+'))
                    {
                    instance.data.file6FileType = instance.data.filesSelected[5].substr(0, instance.data.filesSelected[5].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file6FileType.split('/')[1] , instance.data.filesSelected[5].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 6)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }
    
    if (instance.data.filesSelected.length >= 7){
        
        
            instance.data.file7FileType = instance.data.filesSelected[6].substr(0, instance.data.filesSelected[6].indexOf(';'))
        
        if (instance.data.file7FileType.includes('+'))
                    {
                    instance.data.file7FileType = instance.data.filesSelected[6].substr(0, instance.data.filesSelected[6].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file7FileType.split('/')[1] , instance.data.filesSelected[6].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 7)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }
    
    
if (instance.data.filesSelected.length >= 8){
    
    
        instance.data.file8FileType = instance.data.filesSelected[7].substr(0, instance.data.filesSelected[7].indexOf(';'))
    
    if (instance.data.file8FileType.includes('+'))
                    {
                    instance.data.file8FileType = instance.data.filesSelected[7].substr(0, instance.data.filesSelected[7].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file8FileType.split('/')[1] , instance.data.filesSelected[7].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 8)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }    
    
if (instance.data.filesSelected.length >= 9){
    
    
        instance.data.file9FileType = instance.data.filesSelected[8].substr(0, instance.data.filesSelected[8].indexOf(';'))
    
    if (instance.data.file9FileType.includes('+'))
                    {
                    instance.data.file9FileType = instance.data.filesSelected[8].substr(0, instance.data.filesSelected[8].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file9FileType.split('/')[1] , instance.data.filesSelected[8].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 9)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }
    
    
if (instance.data.filesSelected.length >= 10){
    
    
        instance.data.file10FileType = instance.data.filesSelected[9].substr(0, instance.data.filesSelected[9].indexOf(';'))
    
    if (instance.data.file10FileType.includes('+'))
                    {
                    instance.data.file10FileType = instance.data.filesSelected[9].substr(0, instance.data.filesSelected[9].indexOf('+'))
                    }

context.uploadContent('file.' + instance.data.file10FileType.split('/')[1] , instance.data.filesSelected[9].split(',')[1] , function(err, url){
    
              instance.data.uploaded_files.push(url)
              instance.publishState('uploaded_files' , instance.data.uploaded_files)

              if (instance.data.filesSelected.length == 10)
                  {
                      
              instance.triggerEvent('images_are_uploaded')
              instance.publishState('files_are_uploading' , false)
                    
                  }
    
}
                      )
                }    
    
}
}