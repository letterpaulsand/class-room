(()=>{"use strict";const e=new XMLHttpRequest,t=document.getElementById("right"),s=document.getElementById("select"),n=document.getElementById("left"),a=document.getElementById("date-data");t.addEventListener("click",(()=>{s.style.display="none",n.style.display="block"})),n.addEventListener("click",(()=>{n.style.display="none",s.style.display="flex"}));let d=new Date;d.getFullYear(),d.getMonth(),d.getDate(),d.getDay(),new Promise((function(e,t){for(let e=0;e<15;e++){var s=moment().subtract(e,"days").format("YYYY[/]MM[/]D");let t=document.createElement("div");t.id="id"+e,t.dataset.send=moment().subtract(e,"days").format("YYYY[-]MM[-]D");let n=document.createTextNode(s);t.appendChild(n),a.appendChild(t)}e()})).then((()=>{const t=document.getElementById("id0"),s=document.getElementById("id1"),n=document.getElementById("id2"),a=document.getElementById("id3"),d=document.getElementById("id4"),o=document.getElementById("id5"),l=document.getElementById("id6"),c=document.getElementById("id7"),i=document.getElementById("id8"),r=document.getElementById("id9"),p=document.getElementById("id10"),h=document.getElementById("id11"),y=document.getElementById("id12"),u=document.getElementById("id13"),g=document.getElementById("id14"),m=document.getElementById("date"),E=document.getElementById("day"),v=document.getElementById("month"),T=document.getElementById("year"),f=document.getElementById("homework");t.addEventListener("click",(()=>{e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let n=JSON.parse(this.responseText);console.log(n),v.innerText=n[0].months,m.innerText=n[0].dates,T.innerText=n[0].years,1==n[0].dayss?n[0].dayss="(一)":2==n[0].dayss?n[0].dayss="(二)":3==n[0].dayss?n[0].dayss="(三)":4==n[0].dayss?n[0].dayss="(四)":5==n[0].dayss?n[0].dayss="(五)":6==n[0].dayss?n[0].dayss="(六)":7==n[0].dayss&&(n[0].dayss="(日)"),E.innerText=n[0].dayss;let a=`${n[0].years}-${n[0].months}-${n[0].dates}`,d=moment(a),o=null;for(let a=0;a<n.length;a++){var e=d.to(n[a].jobdate);"a few seconds ago"==e?o="今天":"in a day"==e?o="明天":"in 2 days"==e?o="後天":"in 7 days"==e&&(o="下禮拜");var t=document.createElement("div"),s=document.createTextNode(`${a+1}. ${o}${n[a].sendjob}${n[a].sendlist}${n[a].pages}${n[a].dess}`);t.appendChild(s),f.appendChild(t)}}},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${t.dataset.send}`),e.send()})),s.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${s.dataset.send}`),e.send()})),n.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${n.dataset.send}`),e.send()})),a.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${a.dataset.send}`),e.send()})),d.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${d.dataset.send}`),e.send()})),o.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${o.dataset.send}`),e.send()})),l.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${l.dataset.send}`),e.send()})),c.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${c.dataset.send}`),e.send()})),i.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${i.dataset.send}`),e.send()})),r.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${r.dataset.send}`),e.send()})),p.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${p.dataset.send}`),e.send()})),h.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${h.dataset.send}`),e.send()})),y.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${y.dataset.send}`),e.send()})),u.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${u.dataset.send}`),e.send()})),g.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${g.dataset.send}`),e.send()}))}))})();