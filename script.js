function myfun(){
    let username1=document.getElementById('username_input').value
    let pass1=document.getElementById('pass_input').value

    if(username1=="preethiaddetla" && pass1=="preethi1807"){
       
        window.location='home.html' 
            
        
    }
    else{
        document.getElementById('result').innerHTML='Oops..Incorrect Username Or Password'
    }
}