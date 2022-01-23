import "../../js/alert.js";
import "./index.css"
let sendList = [];
let sendJob = null;
let sendBook = null;
// subject element start
const chinese = document.getElementById('chinese');
const math = document.getElementById('math');
const english = document.getElementById('english');
const chemical = document.getElementById('chemical');
const geography = document.getElementById('geography');
const citizen = document.getElementById('citizen');
const historySub = document.getElementById('history');
const dance = document.getElementById('dance');
const scouts = document.getElementById('scouts');
const house = document.getElementById('house');
const psychology = document.getElementById('psychology');
const artisan = document.getElementById('artisan');
const computer = document.getElementById('computer');
const pe = document.getElementById('pe');
const healthy = document.getElementById('healthy');
const orchestra = document.getElementById('orchestra');
const cnOrchestra = document.getElementById('cn-orchestra');
const listen = document.getElementById('listen');
const theory = document.getElementById('theory');
// subject element end
const allTheSubject = [
    chinese,
    math,
    english,
    chemical,
    geography,
    citizen,
    historySub,
    dance,
    scouts,
    house,
    psychology,
    artisan,
    computer,
    pe,
    healthy,
    orchestra,
    cnOrchestra,
    listen,
    theory,
];
// subject element listener start
allTheSubject[0].addEventListener('click', () => {
    if (allTheSubject[0].style.backgroundColor == 'red') {
        allTheSubject[0].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '國文'
        });
    } else {
        allTheSubject[0].style.backgroundColor = 'red';
        sendList.push('國文');
    }
})
allTheSubject[1].addEventListener('click', () => {
    if (allTheSubject[1].style.backgroundColor == 'red') {
        allTheSubject[1].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '數學'
        });
    } else {
        allTheSubject[1].style.backgroundColor = 'red';
        sendList.push('數學');
    }
})
allTheSubject[2].addEventListener('click', () => {
    if (allTheSubject[2].style.backgroundColor == 'red') {
        allTheSubject[2].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '英文'
        });
    } else {
        allTheSubject[2].style.backgroundColor = 'red';
        sendList.push('英文');
    }
})
allTheSubject[3].addEventListener('click', () => {
    if (allTheSubject[3].style.backgroundColor == 'red') {
        allTheSubject[3].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '理化'
        });
    } else {
        allTheSubject[3].style.backgroundColor = 'red';
        sendList.push('理化');
    }
})
allTheSubject[4].addEventListener('click', () => {
    if (allTheSubject[4].style.backgroundColor == 'red') {
        allTheSubject[4].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '地理'
        });
    } else {
        allTheSubject[4].style.backgroundColor = 'red';
        sendList.push('地理');
    }
})
allTheSubject[5].addEventListener('click', () => {
    if (allTheSubject[5].style.backgroundColor == 'red') {
        allTheSubject[5].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '公民'
        });
    } else {
        allTheSubject[5].style.backgroundColor = 'red';
        sendList.push('公民');
    }
})
allTheSubject[6].addEventListener('click', () => {
    if (allTheSubject[6].style.backgroundColor == 'red') {
        allTheSubject[6].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '歷史'
        });
    } else {
        allTheSubject[6].style.backgroundColor = 'red';
        sendList.push('歷史');
    }
})
allTheSubject[7].addEventListener('click', () => {
    if (allTheSubject[7].style.backgroundColor == 'red') {
        allTheSubject[7].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '表藝'
        });
    } else {
        allTheSubject[7].style.backgroundColor = 'red';
        sendList.push('表藝');
    }
})
allTheSubject[8].addEventListener('click', () => {
    if (allTheSubject[8].style.backgroundColor == 'red') {
        allTheSubject[8].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '童軍'
        });
    } else {
        allTheSubject[8].style.backgroundColor = 'red';
        sendList.push('童軍');
    }
})
allTheSubject[9].addEventListener('click', () => {
    if (allTheSubject[9].style.backgroundColor == 'red') {
        allTheSubject[9].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '家政'
        });
    } else {
        allTheSubject[9].style.backgroundColor = 'red';
        sendList.push('家政');
    }
})
allTheSubject[10].addEventListener('click', () => {
    if (allTheSubject[10].style.backgroundColor == 'red') {
        allTheSubject[10].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '輔導'
        });
    } else {
        allTheSubject[10].style.backgroundColor = 'red';
        sendList.push('輔導');
    }
})
allTheSubject[11].addEventListener('click', () => {
    if (allTheSubject[11].style.backgroundColor == 'red') {
        allTheSubject[11].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '生科'
        });
    } else {
        allTheSubject[11].style.backgroundColor = 'red';
        sendList.push('生科');
    }
})
allTheSubject[12].addEventListener('click', () => {
    if (allTheSubject[12].style.backgroundColor == 'red') {
        allTheSubject[12].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '資訊'
        });
    } else {
        allTheSubject[12].style.backgroundColor = 'red';
        sendList.push('資訊');
    }
})
allTheSubject[13].addEventListener('click', () => {
    if (allTheSubject[13].style.backgroundColor == 'red') {
        allTheSubject[13].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '體育'
        });
    } else {
        allTheSubject[13].style.backgroundColor = 'red';
        sendList.push('體育');
    }
})
allTheSubject[14].addEventListener('click', () => {
    if (allTheSubject[14].style.backgroundColor == 'red') {
        allTheSubject[14].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '健教'
        });
    } else {
        allTheSubject[14].style.backgroundColor = 'red';
        sendList.push('健教');
    }
})
allTheSubject[15].addEventListener('click', () => {
    if (allTheSubject[15].style.backgroundColor == 'red') {
        allTheSubject[15].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '西樂'
        });
    } else {
        allTheSubject[15].style.backgroundColor = 'red';
        sendList.push('西樂');
    }
})
allTheSubject[16].addEventListener('click', () => {
    if (allTheSubject[16].style.backgroundColor == 'red') {
        allTheSubject[16].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '國樂'
        });
    } else {
        allTheSubject[16].style.backgroundColor = 'red';
        sendList.push('國樂');
    }
})
allTheSubject[17].addEventListener('click', () => {
    if (allTheSubject[17].style.backgroundColor == 'red') {
        allTheSubject[17].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '聽寫'
        });
    } else {
        allTheSubject[17].style.backgroundColor = 'red';
        sendList.push('聽寫');
    }
})
allTheSubject[18].addEventListener('click', () => {
    if (allTheSubject[18].style.backgroundColor == 'red') {
        allTheSubject[18].style.backgroundColor = 'black'
        sendList = sendList.filter((item) => {
            return item !== '樂理'
        });
    } else {
        allTheSubject[18].style.backgroundColor = 'red';
        sendList.push('樂理');
    }
})
// job element start 
const test = document.getElementById('test');
const hand = document.getElementById('hand');
const bring = document.getElementById('bring');
const wear = document.getElementById('wear');
const preview = document.getElementById('preview');
const review = document.getElementById('review');
// job element end 
const allTheJob = [
    test,
    hand,
    bring,
    wear,
    preview,
    review,
];
function allPersonWhite() {
    allTheJob[0].style.backgroundColor = 'white';
    allTheJob[1].style.backgroundColor = 'white';
    allTheJob[2].style.backgroundColor = 'white';
    allTheJob[3].style.backgroundColor = 'white';
    allTheJob[4].style.backgroundColor = 'white';
    allTheJob[5].style.backgroundColor = 'white';
}
// job element listener start
allTheJob[0].addEventListener('click', () => {
        allPersonWhite()
        allTheJob[0].style.backgroundColor = 'red'
        sendJob = '考';
})
allTheJob[1].addEventListener('click', () => {
        allPersonWhite()
        allTheJob[1].style.backgroundColor = 'red'
        sendJob = '交';
})
allTheJob[2].addEventListener('click', () => {
        allPersonWhite()
        allTheJob[2].style.backgroundColor = 'red'
        sendJob = '帶';
})
allTheJob[3].addEventListener('click', () => {
        allPersonWhite()
        allTheJob[3].style.backgroundColor = 'red'
        sendJob = '穿';
})
allTheJob[4].addEventListener('click', () => {
        allPersonWhite()
        allTheJob[4].style.backgroundColor = 'red'
        sendJob = '預習';
})
allTheJob[5].addEventListener('click', () => {
        allPersonWhite()
        allTheJob[5].style.backgroundColor = 'red'
        sendJob = '複習';
})
// job element listener end

// book element
const studentBook = document.getElementById('student-book');
const workBook = document.getElementById('work-book');
const handout = document.getElementById('handout');
const handoutOne = document.getElementById('handout-one');
const handoutTwo = document.getElementById('handout-two');
const learningPaper = document.getElementById('learning-paper');
// book element end
const bookList = [
    studentBook,
    workBook,
    handout,
    handoutOne,
    handoutTwo,
    learningPaper
]
function cleanBookList() {
    bookList[0].style.backgroundColor = 'grey';
    bookList[1].style.backgroundColor = 'grey';
    bookList[2].style.backgroundColor = 'grey';
    bookList[3].style.backgroundColor = 'grey';
    bookList[4].style.backgroundColor = 'grey';
    bookList[5].style.backgroundColor = 'grey';
}
// book element listener start
bookList[0].addEventListener('click', () => {
    cleanBookList()
    bookList[0].style.backgroundColor = 'red';
    sendBook = '課本'
});
bookList[1].addEventListener('click', () => {
    cleanBookList()
    bookList[1].style.backgroundColor = 'red';
    sendBook = '習作'
});
bookList[2].addEventListener('click', () => {
    cleanBookList()
    bookList[2].style.backgroundColor = 'red';
    sendBook = '講義'
});
bookList[3].addEventListener('click', () => {
    cleanBookList()
    bookList[3].style.backgroundColor = 'red';
    sendBook = '大講'
});
bookList[4].addEventListener('click', () => {
    cleanBookList()
    bookList[4].style.backgroundColor = 'red';
    sendBook = '小講'
});
bookList[5].addEventListener('click', () => {
    cleanBookList()
    bookList[5].style.backgroundColor = 'red';
    sendBook = '學單'
});
// book element listener end

// get input start 
const jobDate = document.getElementById('jobDate');
const page = document.getElementById('page');
const des = document.getElementById('des');
// get input end

// listen submit button 
const button = document.getElementById('button');
button.addEventListener('click', () => {
    let jobDateValue = jobDate.value;
    for (var i = 0; i < 2; i++) {
        jobDateValue = jobDateValue.replace('-', '');
    }
    let pageValue = page.value;
    let desValue = des.value;
    let theLastSendList = {
        sendList: sendList,
        sendJob: sendJob,
        sendBook: sendBook,
        jobDate: jobDateValue,
        page: pageValue,
        des: desValue
    }
    console.log(theLastSendList);
    location.href = `../send?sendlist=${sendList}&sendjob=${sendJob}&sendbook=${sendBook}&jobdate=${jobDateValue}&page=${pageValue}&des=${desValue}`
});
