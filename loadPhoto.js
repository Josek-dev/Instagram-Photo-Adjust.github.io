$(document).ready(function() {
    
        $("#photoUpload").on("change",function(e) {
            var files = e.target.files;
            var length = files.length;
            for (var i = 0; i < length; i++) {
                var f = files[i]
                var fileReader = new FileReader();
            
                fileReader.onload =
                (function(e) {
                    $("#uploaded").css("display", "block");
                    $("#getResolution").css("display", "inline-block");
                    var file = e.target;
                    $("<img>",{
                        class : "originalImage",
                        src : e.target.result,
                        title : file.name
                        }).insertAfter("#uploaded");
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function() {
                        var realWidth = this.width;
                        var realHeight = this.height;
                        $("#wymiary").text("<b>Szerokośc:</b> "+ realWidth +" Wysokość: "+ realHeight);
                    }                  
                });
                fileReader.readAsDataURL(f); }});
                // $("#getResolution").click(function() {
                //     var img = $(".originalImage");
                        
                //     $("<img>").attr("src", $(img).attr("src")).on("load", function(){
                //     var realWidth = this.width;
                //     var realHeight = this.height;
                //     $("#wymiary").text("Szerokośc: "+ realWidth +" Wysokość: "+ realHeight);
                //     });
                // });
    
           
 });