import "./index.css"// get css
import "../../js/alert.js"// get alert js
import {addDate, delItem, innerCheckno, innerCheckok} from "./public.js"
import fullwidth from "fullwidth";
import moment from "moment";
import {tify} from 'chinese-conv';
let storage = localStorage
// ------------------------------------------------------------------------------
const host = "http://192.168.43.161/class-room/server/log.php";
const delhost = "http://192.168.43.161/class-room/server/del.php";
// ------------------------------------------------------------------------------
const xhttp = new XMLHttpRequest();

// html elements
const right = document.getElementById('right');
const select = document.getElementById('select');
const left = document.getElementById('left');
const dateData = document.getElementById('date-data');
const del = document.getElementById('del');


//html listener
right.addEventListener('click', () => {
    select.style.display = 'none';
    left.style.display = 'block';
});
left.addEventListener('click', () => {
    left.style.display = 'none';
    select.style.display = 'flex';
});


// if login the del input box will appera
if(storage.auth){
    del.style.display = 'block'
}




// html right site date button load function
let loadItem = new Promise(function (resolve, reject) {
    for (let i = 0; i < 15; i++) {
        var allDateUser = moment().subtract(i, 'days').format('YYYY[/]MM[/]DD');
        let div = document.createElement('div');
        div.id = 'id' + i;
        div.dataset.send = moment().subtract(i, 'days').format('YYYY[-]MM[-]DD')
        let text = document.createTextNode(allDateUser);
        div.appendChild(text);
        dateData.appendChild(div);
    }
    resolve();
});



// loaditem promise then
loadItem.then(() => {
//get the inner put box
    const innerDate = document.getElementById('date');
    const innerDay = document.getElementById('day');
    const innerMonth = document.getElementById('month');
    const innerYear = document.getElementById('year');

    const homework = document.getElementById('homework');
    const gradeRecord = document.getElementById('grade-record');

//get the main data 
    function getItem(id) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                
                if (this.responseText == '2[]') {
                    alert('No Data!')
                   
                } else {
                    let json = JSON.parse(this.responseText);
                    let dateFormat = `${json[0].years}-${json[0].months}-${json[0].dates}`;
                    let dateForm = moment(dateFormat);
                    let finallyDate = null;
                    let gradeRecordStatus = 0;

                    // add date the left site
                    addDate(innerMonth, innerDate, innerYear, innerDay, json);
                    

                    // delete main homeword item
                    del.addEventListener('keyup', (key)=>{
                        if(key.keyCode == 13){
                            delItem(del, delhost, dateFormat, xhttp);
                            
                        }
                    })


                    for (let i = 0; i < json.length; i++) {
                        var spendDay = dateForm.to(json[i].jobdate);
                        
                        if (spendDay == 'a few seconds ago') {
                            finallyDate = '??????'
                        } else if (spendDay == 'in a day') {
                            finallyDate = '??????'
                        } else if (spendDay == 'in 2 days') {
                            finallyDate = '??????'
                        } else if (spendDay == 'in 7 days') {
                            finallyDate = '?????????'
                        }


                        if (json[i].sendjob == '??????') {

                            gradeRecordStatus++//add the graderecord

                            var homeworkList = document.createElement('div');

                            if(storage.auth){
                                var text = document.createTextNode(`${fullwidth(json[i].id.toString())} ${fullwidth(json[i].sendlist)}${tify(json[i].pages)}${tify(json[i].dess)}`)
                            }else{
                                var text = document.createTextNode(`${fullwidth(json[i].sendlist)}${tify(json[i].pages)}${tify(json[i].dess)}`)
                            }
                            
                            homeworkList.appendChild(text);
                            gradeRecord.appendChild(homeworkList);

                        } else if(storage.auth){
                            innerCheckok(finallyDate, json, fullwidth ,i)
                        }else{
                            innerCheckno(finallyDate, json, gradeRecordStatus, fullwidth, i)
                        }
                    }// for loop
                }// if has data
            }// sned succues


        };// xhttp change
        xhttp.open("GET", `${host}?date=${document.getElementById(id).dataset.send}`);
        xhttp.send();
    }// getItem function

    function clearRecord() {
        gradeRecord.innerText = ''
        homework.innerText = ''
        document.getElementById('write').innerText = ''
    }

    function getItemListener(id) {
        document.getElementById(id).addEventListener('click', () => {
            clearRecord()
            getItem(id);
        })
    }

    for (var i = 0; i < 15; i++) {
        getItemListener('id' + i);
    }
    getItem('id0')

})