function(instance, properties) {

  console.log(instance.isResponsive)
    var background = document.createElement("div");

    background.id = "background"
    background.style.maxWidth = "100%"
    background.width = properties.bubble.width
    background.height = properties.bubble.height
    background.style.backgroundColor = "#f5f5f5"

        
 

instance.canvas.appendChild(background)
    instance.canvas.style.backgroundColor = "f5f5f5"


}