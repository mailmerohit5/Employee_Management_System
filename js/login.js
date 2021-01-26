document.getElementById('login_frm_submit').onclick=frmSubmit;
function frmSubmit(){
    let uname=document.getElementById('username').value;
    let pwd=document.getElementById('password').value;
    if(uname==''){
        //alert('Username can not be empty !');
        document.getElementById('username-error').innerHTML='Username Can not Be empty';
        document.getElementById('username').focus();
        return;
    }
    if(pwd==''){
        document.getElementById('password-error').innerHTML='Password Can not Be empty';
        document.getElementById('password').focus();
        return;
    }
   window.location.href='home.html';
}

document.getElementById('username').onkeyup=clearError;

function clearError(){
    document.getElementById('username-error').innerHTML='';
}