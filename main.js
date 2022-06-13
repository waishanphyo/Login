let naMe="wai";
let pw="wahhaha";


// Login
$("button").click(()=>{
     let u_name=$("#user").val();
     let password=$("#pw").val();
    if(u_name && password){
        if(u_name===naMe && pw===password){
            alert("Login Successful");
        }else if(u_name!==naMe && pw===password){
            alert("Wrong User_Name!");
        }else if(u_name===naMe && pw!==password){
            alert("Wrong Password!");
        }else{
            alert("Wrong User_Name & Password");
        }
    }else{
        alert("please fill user name and password")
    }
})
