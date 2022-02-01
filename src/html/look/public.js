export function addDate(innerMonth, innerDate, innerYear, innerDay, json){
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
}


export function delItem(del, delhost, dateFormat, xhttp){
    let Value = del.value;
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let json = this.responseText;
      if(json == 'ok'){
          alert('del ok!')
      }else{
          alert('del something wrong!')
      }
    }
  };
  xhttp.open("GET", `${delhost}?id=${Value}&date=${dateFormat}`);
  xhttp.send();
}


export function innerCheckno(finallyDate, json, gradeRecordStatus, fullwidth, i){
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
export function innerCheckok(finallyDate, json, fullwidth, i){
    if (finallyDate == null) {
        var homeworkList = document.createElement('div');
        var text = document.createTextNode(`${fullwidth(json[i].id.toString())} ${json[i].jobdate}${json[i].sendjob}${fullwidth(json[i].sendlist)}${json[i].sendbook}${json[i].pages}${json[i].dess}`)
        homeworkList.appendChild(text);
        homework.appendChild(homeworkList);
    } else {
        var homeworkList = document.createElement('div');
        var text = document.createTextNode(`${fullwidth(json[i].id.toString())} ${finallyDate}${json[i].sendjob}${fullwidth(json[i].sendlist)}${json[i].sendbook}${json[i].pages}${json[i].dess}`)
        homeworkList.appendChild(text);
        homework.appendChild(homeworkList);
    }
}