// -------------------------------------------------------------------------
const hostpassword = "http://127.0.0.1/paula-class/server/password.php";
const hostseepassword = "http://127.0.0.1/paula-class/server/seepassword.php";
// -------------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
const login = document.getElementById('login');
const change = document.getElementById('change');
const submit = document.getElementById('submit');
let storage = localStorage;

function checking(loginValue) {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = xhttp.responseText;
            console.log(json);
            if (json != 'error') {
                if (json == '') {
                    alert('ok')
                    return true
                } else {
                    storage.auth = json;
                    return true
                }

            } else {
                return false
            }
        }
    };
    xhttp.open("GET", `${hostseepassword}?password=${loginValue}&auth=${storage.auth}`);
    xhttp.send();
}


function changePassword(changeValue) {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = xhttp.responseText;
            console.log(json);
            if (json == 'ok') {
                let auth = getRandom(10000000);
                storage.auth = auth;
                // location.href = '../index';
            } else {
                alert('Something wrong!');
            }
        }
    };
    xhttp.open("GET", `${hostpassword}?password=${changeValue}&auth=${auth}`);
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

            if (checking(null) === true) {
                changePassword(changeValue);
            } else {
                alert('Something Wrong!')
            }

        } else if (loginValue) {
            checking(loginValue);
            if (Passstatus == true) {
                location.href = '../index'
            } else {
                alert('Something Wrong!')
                console.log(Passstatus);
            }


        } else {
            alert('You cannot type without words!')
        }
    }
})
