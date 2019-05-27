function(instance, properties, context) {

instance.data.base64OfImg1 = null
instance.data.base64OfImg2 = null
instance.data.base64OfImg3 = null
instance.data.base64OfImg4 = null
instance.data.base64OfImg5 = null
instance.data.base64OfImg6 = null
instance.data.base64OfImg7 = null
instance.data.base64OfImg8 = null
instance.data.base64OfImg9 = null
instance.data.base64OfImg10 = null

instance.data.allFiles = []
instance.data.fileInput1.value = null

    console.log(instance.data.fileInput1.files.length)
instance.publishState('all_files' , null)
instance.publishState('uploaded_files' , null)



}