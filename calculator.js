const audio=new Audio();
audio.src="./s.mp3";


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
                                
                              
                              audio.play();
        } 


           
   
function getValue(val) {
        document.getElementById("screen").value+=val;
        audio.play();   
}
function clearac() {
        document.getElementById("screen").value="" 
        audio.play();     
}
function equalClick() {
        var text=document.getElementById("screen").value
        var result=eval(text)
        var newv =result.toLocaleString("en-us")
       document.getElementById("screen").value=newv
        audio.play();
}
function getPlus(pa){
       if(document.getElementById("screen").value>0){
               document.getElementById("screen").value=-(document.getElementById("screen").value)
       }else{
        document.getElementById("screen").value= -(document.getElementById("screen").value)  
       }
       audio.play();
}

        
          



