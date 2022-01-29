import "./index.css";
import "../../js/alert.js";
import "../../img/fish.png";
// -------------------------------------------------------------------------------------------------------------
const phpHostUrl = 'http://127.0.0.1/paula-class/server/index.php';
// -------------------------------------------------------------------------------------------------------------
let url = new URL(location.href);
var xhttp = new XMLHttpRequest();
let today = new Date();
let sendList = url.searchParams.get('sendlist');
let sendJob = url.searchParams.get('sendjob');
let sendBook = url.searchParams.get('sendbook')
let jobDate = url.searchParams.get('jobdate');
let page = url.searchParams.get('page');
let des = url.searchParams.get('des');
let year = today.getFullYear();
let month = today.getMonth() + 1;
if(month < 10){
    month = '0' + month;
}
let date = today.getDate();
if(date < 10){
    date = '0' + date;
}
let day = today.getDay();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
       location.href = '../main'
    }
};
let sendurl = `${phpHostUrl}?sendlist=${sendList}&sendjob=${sendJob}&sendbook=${sendBook}&jobdate=${jobDate}&page=${page}&des=${des}&year=${year}&month=${month}&date=${date}&day=${day}`;
xhttp.open('GET', sendurl);
xhttp.send();