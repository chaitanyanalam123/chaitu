
function loginForm(){
    let my_pwd = document.myLoginForm.myPwd;

    if(my_pwd.toString().length<8) {
        alert( "Please provide valid Password!!!" )
        return false;
    }
    return true;
}


