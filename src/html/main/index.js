import "../../js/alert.js";//use alert js
import "./index.css"//use css
let sendList = [];// status
let sendJob = '';// status
let sendBook = '';//status
let storage = localStorage;

if(storage.auth){// check login if not login it will take you back
    checkOk();
}else{
    alert('You have to login!')
    location.href = '../index.html'
}


function checkOk() {
// subject
    function subjectListener(id, name) {
        document.getElementById(id).addEventListener('click', () => {
            if (document.getElementById(id).style.backgroundColor == 'red') {
                document.getElementById(id).style.backgroundColor = 'black'
                sendList = sendList.filter((item) => {
                    return item !== name
                });
            } else {
                document.getElementById(id).style.backgroundColor = 'red';
                sendList.push(name);
            }
        })
    }

    subjectListener('chinese', '國文');
    subjectListener('math', '數學');
    subjectListener('english', '英文');
    subjectListener('chemical', '理化');
    subjectListener('geography', '地理');
    subjectListener('citizen', '公民');
    subjectListener('history', '歷史');
    subjectListener('draw', '視藝');
    subjectListener('scouts', '童軍');
    subjectListener('house', '家政');
    subjectListener('psychology', '輔導');
    subjectListener('artisan', '生科');
    subjectListener('computer', '資訊');
    subjectListener('pe', '體育');
    subjectListener('healthy', '健教');
    subjectListener('orchestra', '西樂');
    subjectListener('cn-orchestra', '國樂');
    subjectListener('listen', '聽寫');
    subjectListener('theory', '樂理');
    subjectListener('diary', '札記');












//job listen
    function allPersonWhite() {
        document.getElementById('test').style.backgroundColor = 'white';
        document.getElementById('hand').style.backgroundColor = 'white';
        document.getElementById('bring').style.backgroundColor = 'white';
        document.getElementById('wear').style.backgroundColor = 'white';
        document.getElementById('preview').style.backgroundColor = 'white';
        document.getElementById('review').style.backgroundColor = 'white';
        document.getElementById('register').style.backgroundColor = 'white';
    }

    function jobListener(id, name) {
        document.getElementById(id).addEventListener('click', () => {
            allPersonWhite()
            document.getElementById(id).style.backgroundColor = 'red'
            sendJob = name;
        })
    }

    jobListener('test', '考');
    jobListener('hand', '交');
    jobListener('bring', '帶');
    jobListener('wear', '穿');
    jobListener('preview', '預習');
    jobListener('review', '複習');
    jobListener('register', '登記');









//book listen

    function cleanBookList() {
        document.getElementById('student-book').style.backgroundColor = 'grey';
        document.getElementById('work-book').style.backgroundColor = 'grey';
        document.getElementById('handout').style.backgroundColor = 'grey';
        document.getElementById('handout-one').style.backgroundColor = 'grey';
        document.getElementById('handout-two').style.backgroundColor = 'grey';
        document.getElementById('learning-paper').style.backgroundColor = 'grey';
    }

    function bookListListener(id, name) {
        document.getElementById(id).addEventListener('click', () => {
            cleanBookList()
            document.getElementById(id).style.backgroundColor = 'red';
            sendBook = name
        });
    }

    

    bookListListener('student-book', '課本');
    bookListListener('work-book', '習作');
    bookListListener('handout', '講義');
    bookListListener('handout-one', '大講');
    bookListListener('handout-two', '小講');
    bookListListener('learning-paper', '學單');








    // get input
    const jobDate = document.getElementById('jobDate');
    const page = document.getElementById('page');
    const des = document.getElementById('des');

    // listen submit button 
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        let jobDateValue = jobDate.value;
        let pageValue = page.value;
        let desValue = des.value;
        location.href = `../send?sendlist=${sendList}&sendjob=${sendJob}&sendbook=${sendBook}&jobdate=${jobDateValue}&page=${pageValue}&des=${desValue}`
    });


}// checkok function end
