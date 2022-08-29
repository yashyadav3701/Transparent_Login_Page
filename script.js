function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email=="test@gmail.com" && password=="123")
{
    alert("Login Successful");
    window.location="https://previews.123rf.com/images/fikmik/fikmik1004/fikmik100400428/6765742-login-success.jpg?fj=1";
}
else if(email=="")
{
    alert("Please Enter your Email");
    location.reload();
}
else if(password=="")
{
    alert("Please Enter your Password");
    location.reload();
}
else
{
    alert("Invalid Email or Password");
    location.reload();
}

}