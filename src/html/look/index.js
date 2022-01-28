import "./index.css"
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
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();



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
    const id0 = document.getElementById('id0');
    const id1 = document.getElementById('id1');
    const id2 = document.getElementById('id2');
    const id3 = document.getElementById('id3');
    const id4 = document.getElementById('id4');
    const id5 = document.getElementById('id5');
    const id6 = document.getElementById('id6');
    const id7 = document.getElementById('id7');
    const id8 = document.getElementById('id8');
    const id9 = document.getElementById('id9');
    const id10 = document.getElementById('id10');
    const id11 = document.getElementById('id11');
    const id12 = document.getElementById('id12');
    const id13 = document.getElementById('id13');
    const id14 = document.getElementById('id14');
    const innerDate = document.getElementById('date');
    const innerDay = document.getElementById('day');
    const innerMonth = document.getElementById('month');
    const innerYear = document.getElementById('year');
    const homework = document.getElementById('homework');
    const gradeRecord = document.getElementById('grade-record');




    id0.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {



            if (this.readyState == 4 && this.status == 200) {
                let json = JSON.parse(this.responseText);
                console.log(json);
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
                let finallyDate = null

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
                        var homeworkList = document.createElement('div');
                        var text = document.createTextNode(`${json[i].sendlist}${json[i].pages}${json[i].dess}`)
                        homeworkList.appendChild(text);
                        gradeRecord.appendChild(homeworkList);

                    } else {
                        if (finallyDate == null) {
                            var homeworkList = document.createElement('div');
                            var text = document.createTextNode(`${(i + 1)}. ${json[i].jobdate}${json[i].sendjob}${json[i].sendlist}${json[i].pages}${json[i].dess}`)
                            homeworkList.appendChild(text);
                            homework.appendChild(homeworkList);
                        }else{
                            var homeworkList = document.createElement('div');
                            var text = document.createTextNode(`${(i + 1)}. ${finallyDate}${json[i].sendjob}${json[i].sendlist}${json[i].pages}${json[i].dess}`)
                            homeworkList.appendChild(text);
                            homework.appendChild(homeworkList);
                        }
                        
                    }


                }
            }




        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id0.dataset.send}`);
        xhttp.send();
    })

    id1.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id1.dataset.send}`);
        xhttp.send();
    })

    id2.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id2.dataset.send}`);
        xhttp.send();
    })

    id3.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id3.dataset.send}`);
        xhttp.send();
    })

    id4.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id4.dataset.send}`);
        xhttp.send();
    })

    id5.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id5.dataset.send}`);
        xhttp.send();
    })

    id6.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id6.dataset.send}`);
        xhttp.send();
    })

    id7.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id7.dataset.send}`);
        xhttp.send();
    })

    id8.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id8.dataset.send}`);
        xhttp.send();
    })

    id9.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id9.dataset.send}`);
        xhttp.send();
    })

    id10.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id10.dataset.send}`);
        xhttp.send();
    })

    id11.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id11.dataset.send}`);
        xhttp.send();
    })

    id12.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id12.dataset.send}`);
        xhttp.send();
    })

    id13.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id13.dataset.send}`);
        xhttp.send();
    })

    id14.addEventListener('click', () => {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", `http://127.0.0.1/paula-class/server/log.php?date=${id14.dataset.send}`);
        xhttp.send();
    })

})