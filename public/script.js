fetch('http://localhost:5000/id')
    .then(response => response.json())
    .then(data => {
        let div = document.querySelector('.res');
        for (let i=0; i<6; i++) {
            div.innerHTML += `<div class="res-elem"> <img src="/images/money/${data[i].title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${data[i].title}.html" target="_blank">${data[i].title}</a></h3><p>${data[i].description}</p></div></div>`;
        }
});
function searchCoins() {
    fetch('http://localhost:5000/id')
    .then(response => response.json())
    .then(data => {
        let hst = document.getElementById('hst');
        let inv = document.getElementById('inv');
        let exc = document.getElementById('exc');
        let div = document.querySelector('.res');
        let selcnt_val = document.querySelector('.sel_country').value;
        let val = document.querySelector('.searchField').value;
        div.innerHTML = "";
        if ((hst.checked==true && inv.checked==true && exc.checked==true) || (hst.checked==false && inv.checked==false && exc.checked==false)) {
            let chosen = data.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let flbycnt = chosen.filter(el => el.country.includes(selcnt_val));
            console.log(flbycnt);
            if (selcnt_val == "---") {
                chosen.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                flbycnt.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
        else if (hst.checked==true && inv.checked==false && exc.checked==false) {
            let chf = data.filter(el => el.category.includes("Historical"));
            let flbycnt = chf.filter(el => el.country.includes(selcnt_val));
            let chosen = chf.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all = flbycnt.filter(el => el.title.toLowerCase().includes(val.toLowerCase()));
            if (val == "" && selcnt_val=="---") {
                chf.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val == "" && selcnt_val!="---") {
                flbycnt.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val != " " && selcnt_val=="---") {
                chosen.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                all.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
        else if (hst.checked==false && inv.checked==true && exc.checked==false) {
            let chf = data.filter(el => el.category.includes("Investment"));
            let flbycnt = chf.filter(el => el.country.includes(selcnt_val));
            let chosen = chf.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all = flbycnt.filter(el => el.title.toLowerCase().includes(val.toLowerCase()));
            if (val == "" && selcnt_val=="---") {
                chf.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val == "" && selcnt_val!="---") {
                flbycnt.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val != " " && selcnt_val=="---") {
                chosen.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                all.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
        else if (hst.checked==false && inv.checked==false && exc.checked==true) {
            let chf = data.filter(el => el.category.includes("Exclusive"));
            let flbycnt = chf.filter(el => el.country.includes(selcnt_val));
            let chosen = chf.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all = flbycnt.filter(el => el.title.toLowerCase().includes(val.toLowerCase()));
            if (val == "" && selcnt_val=="---") {
                chf.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val == "" && selcnt_val!="---") {
                flbycnt.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val != " " && selcnt_val=="---") {
                chosen.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                all.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
        else if (hst.checked==true && inv.checked==true && exc.checked==false) {
            let chf1 = data.filter(el => el.category.includes("Historical"));
            let chf2 = data.filter(el => el.category.includes("Investment"));
            let flbycnt1 = chf1.filter(el => el.country.includes(selcnt_val));
            let flbycnt2 = chf2.filter(el => el.country.includes(selcnt_val));
            let chosen1 = chf1.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let chosen2 = chf2.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all1 = flbycnt1.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all2 = flbycnt2.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            if (val == "" && selcnt_val=="---") {
                chf1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                chf2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val == "" && selcnt_val!="---") {
                flbycnt1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                flbycnt2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val != " " && selcnt_val=="---") {
                chosen1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                chosen2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                all1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                all2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
        else if (hst.checked==false && inv.checked==true && exc.checked==true) {
            let chf1 = data.filter(el => el.category.includes("Investment"));
            let chf2 = data.filter(el => el.category.includes("Exclusive"));
            let flbycnt1 = chf1.filter(el => el.country.includes(selcnt_val));
            let flbycnt2 = chf2.filter(el => el.country.includes(selcnt_val));
            let chosen1 = chf1.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let chosen2 = chf2.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all1 = flbycnt1.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all2 = flbycnt2.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            if (val == "" && selcnt_val=="---") {
                chf1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                chf2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val == "" && selcnt_val!="---") {
                flbycnt1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                flbycnt2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val != " " && selcnt_val=="---") {
                chosen1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                chosen2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                all1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                all2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
        else if (hst.checked==true && inv.checked==false && exc.checked==true) {
            let chf1 = data.filter(el => el.category.includes("Historical"));
            let chf2 = data.filter(el => el.category.includes("Exclusive"));
            let flbycnt1 = chf1.filter(el => el.country.includes(selcnt_val));
            let flbycnt2 = chf2.filter(el => el.country.includes(selcnt_val));
            let chosen1 = chf1.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let chosen2 = chf2.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all1 = flbycnt1.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            let all2 = flbycnt2.filter(elem => elem.title.toLowerCase().includes(val.toLowerCase()));
            if (val == "" && selcnt_val=="---") {
                chf1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                chf2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val == "" && selcnt_val!="---") {
                flbycnt1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                flbycnt2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else if (val != " " && selcnt_val=="---") {
                chosen1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                chosen2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
            else {
                all1.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
                all2.forEach(el =>{
                    div.innerHTML += `<div class="res-elem"> <img src="/images/money/${el.title}_1.png"/> <div class="res-elem-desc"> <h3><a href="etc/${el.title}.html" target="_blank">${el.title}</a></h3><p>${el.description}</p></div></div>`
                });
            }
        }
    });
}
function advSearch() {
    let adm = document.querySelector('.advMenu');
    if (adm.style.display == "none") {
        adm.style.display = "block";
    }
    else {
        adm.style.display="none";
    }
}
let btn = document.querySelector(".searchSubmit");
let fltr = document.querySelector(".filterElems");
btn.addEventListener('click', searchCoins);
fltr.addEventListener('click', advSearch);