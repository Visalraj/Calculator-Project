const audio=new Audio();


   function getOp(OP){
           if(document.getElementById("screen").value==""&OP=='+'){
             document.getElementById("screen").value="Invalid Operation"
           }
               else if(document.getElementById("screen").value==""&OP=='*'){
                        document.getElementById("screen").value="Invalid Operation"
               }
                       else if(document.getElementById("screen").value==""&OP=='/'){
                                document.getElementById("screen").value="Invalid Operation"
                       }
                              else  if(document.getElementById("screen").value==""&OP=='%'){
                                        document.getElementById("screen").value="InvalidOperation "  
                              }    
                              else{
                                      document.getElementById("screen").value+=OP;
                              }   
                                
                              
                              
        } 


           
   
function getValue(val) {
        document.getElementById("screen").value+=val;

}
function clearac() {
        document.getElementById("screen").value="" 
        
}
function equalClick() {
        var text=document.getElementById("screen").value
        var result=eval(text)
        var newv =result.toLocaleString("en-us")
       document.getElementById("screen").value=newv
     
}
function getPlus(pa){
       if(document.getElementById("screen").value>0){
               document.getElementById("screen").value=-(document.getElementById("screen").value)
       }else{
        document.getElementById("screen").value= -(document.getElementById("screen").value)  
       }
       
}

        
          



