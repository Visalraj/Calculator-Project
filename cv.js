$(document).ready(function(){
        $("#submit-form").validate({
                rules:{
                        Name:{
                                required:true,
                                maxlength:25
                        },
                        Email:{
                                required:true,
                                email:true
                        },
                        Comments:{
                                required:true
                        }
                        
                },
     
        })
})