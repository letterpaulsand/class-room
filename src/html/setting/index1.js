// -------------------------------------------------------------------------
const hostpassword = "http://127.0.0.1/paula-class/server/password.php";
const hostseepassword = "http://127.0.0.1/paula-class/server/seepassword.php";
// -------------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
const login = document.getElementById('login');
const change = document.getElementById('change');
const submit = document.getElementById('submit');
const signOut = document.getElementById('sign-out');
let storage = localStorage;
let statusCode = null
function checking(loginValue) {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = xhttp.responseText;
            if (json != 'error') {
                if (json == '') {
                    statusCode = true
                } else if(json == 'password error') {
                    statusCode = false
                }else{
                    storage.auth = json;
                    statusCode = true
                }
                
            } else {
                statusCode = false
            }
        }
    };
    xhttp.open("GET", `${hostseepassword}?password=${loginValue}&auth=${storage.auth}`);
    xhttp.send();
}


function changePassword(changeValue) {
    let auth = getRandom(10000000);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = xhttp.responseText;
            console.log(json);
            if (json == 'ok') {
                storage.auth = auth;
                location.href = '../index';
            } else {
                alert('Something wrong!');
            }
        }
    };
    xhttp.open("GET", `${hostpassword}?password=${changeValue}&auth=${auth}`);
    xhttp.send();
}

function signout(){
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = xhttp.responseText;
            if (json == 'ok') {
                alert('sign out!');
                location.href = '../index';
            } else {
                alert('Something wrong!');
            }
        }
    };
    xhttp.open("GET", `${hostpassword}?password=null&auth=signout`);
    xhttp.send();
}


function getRandom(x) {
    return Math.floor(Math.random() * x);
};

submit.addEventListener('click', () => {
    var loginValue = login.value;
    var changeValue = change.value;
    if (loginValue && changeValue) {
        alert('wrong! You cannot enter two input box together!');
    } else {
        if (changeValue) {
                if (storage.auth) {
                    changePassword(changeValue);
                } else {
                    alert('Something Wrong! (You have to login first)')
                }
            
            

        } else if (loginValue) {
            checking(loginValue);
            setTimeout(()=>{
                if (statusCode == true) {
                    location.href = '../index'
                } else {
                    alert('Something Wrong! (Time out) or (password wrong)')
                }
            }, 3000)
            


        } else {
            alert('You cannot type without words!')
        }
    }
})

signOut.addEventListener('click', ()=>{
    if(storage.auth){
        signout();
        storage.removeItem('auth');
    }else{
        alert('You haven\'t login!');
    }
})
