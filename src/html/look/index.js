import "./index.css"
import "../../js/alert.js"
import fullwidth from 'fullwidth';
// ------------------------------------------------------------------------------
const host = "http://127.0.0.1/paula-class/server/log.php"
// ------------------------------------------------------------------------------
const xhttp = new XMLHttpRequest();
const right = document.getElementById('right');
const select = document.getElementById('select');
const left = document.getElementById('left');
const dateData = document.getElementById('date-data');
right.addEventListener('click', () => {
    select.style.display = 'none';
    left.style.display = 'block';
});
left.addEventListener('click', () => {
    left.style.display = 'none';
    select.style.display = 'flex';
});



let loadItem = new Promise(function (resolve, reject) {

    for (let i = 0; i < 15; i++) {
        var allDateUser = moment().subtract(i, 'days').format('YYYY[/]MM[/]D');
        let div = document.createElement('div');
        div.id = 'id' + i;
        div.dataset.send = moment().subtract(i, 'days').format('YYYY[-]MM[-]D')
        let text = document.createTextNode(allDateUser);
        div.appendChild(text);
        dateData.appendChild(div);
    }
    resolve();
});

loadItem.then(() => {
    const innerDate = document.getElementById('date');
    const innerDay = document.getElementById('day');
    const innerMonth = document.getElementById('month');
    const innerYear = document.getElementById('year');
    const homework = document.getElementById('homework');
    const gradeRecord = document.getElementById('grade-record');


    function getItem(id) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                
                if (this.responseText == '2[]') {
                    alert('No Data!')
                   
                } else {
                    let json = JSON.parse(this.responseText);
                    innerMonth.innerText = json[0].months;
                    innerDate.innerText = json[0].dates;
                    innerYear.innerText = json[0].years;
                    if (json[0].dayss == 1) {
                        json[0].dayss = '(一)'
                    } else if (json[0].dayss == 2) {
                        json[0].dayss = '(二)'
                    } else if (json[0].dayss == 3) {
                        json[0].dayss = '(三)'
                    } else if (json[0].dayss == 4) {
                        json[0].dayss = '(四)'
                    } else if (json[0].dayss == 5) {
                        json[0].dayss = '(五)'
                    } else if (json[0].dayss == 6) {
                        json[0].dayss = '(六)'
                    } else if (json[0].dayss == 7) {
                        json[0].dayss = '(日)'
                    }
                    innerDay.innerText = json[0].dayss;
                    let dateFormat = `${json[0].years}-${json[0].months}-${json[0].dates}`
                    let a = moment(dateFormat);
                    let finallyDate = null;
                    let gradeRecordStatus = 0;

                    for (let i = 0; i < json.length; i++) {
                        var spendDay = a.to(json[i].jobdate);
                        if (spendDay == 'a few seconds ago') {
                            finallyDate = '今天'
                        } else if (spendDay == 'in a day') {
                            finallyDate = '明天'
                        } else if (spendDay == 'in 2 days') {
                            finallyDate = '後天'
                        } else if (spendDay == 'in 7 days') {
                            finallyDate = '下禮拜'
                        }
                        if (json[i].sendjob == "登記") {
                            gradeRecordStatus++
                            var homeworkList = document.createElement('div');
                            var text = document.createTextNode(`${fullwidth(json[i].sendlist)}${json[i].pages}${json[i].dess}`)
                            homeworkList.appendChild(text);
                            gradeRecord.appendChild(homeworkList);

                        } else {
                            if (finallyDate == null) {
                                var homeworkList = document.createElement('div');
                                var text = document.createTextNode(`${fullwidth((i + 1 - gradeRecordStatus).toString())} ${json[i].jobdate}${json[i].sendjob}${fullwidth(json[i].sendlist)}${json[i].sendbook}${json[i].pages}${json[i].dess}`)
                                homeworkList.appendChild(text);
                                homework.appendChild(homeworkList);
                            } else {
                                var homeworkList = document.createElement('div');
                                var text = document.createTextNode(`${fullwidth((i + 1 - gradeRecordStatus).toString())} ${finallyDate}${json[i].sendjob}${fullwidth(json[i].sendlist)}${json[i].sendbook}${json[i].pages}${json[i].dess}`)
                                homeworkList.appendChild(text);
                                homework.appendChild(homeworkList);
                            }
                        }
                    }
                }
            }


        };
        xhttp.open("GET", `${host}?date=${document.getElementById(id).dataset.send}`);
        xhttp.send();
    }

    function clearRecord() {
        gradeRecord.innerText = ''
        homework.innerText = ''
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