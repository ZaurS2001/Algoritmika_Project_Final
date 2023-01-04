fetch('http://localhost:5000/id')
.then(response => response.json())
.then(data => {
    let title = document.querySelector("title").innerHTML;
    let con = document.querySelector('.con');
    let dt = data.find(el => el.title == title);
    con.innerHTML += `<div class="elem"><div class="res-elem-desc"> <h3>${dt.title}</h3> <p>${dt.description}</p><p>${dt.additionaldesc}<p><ul class="char"><li>Country - ${dt.country}</li><li>Composition - ${dt.composition}</li><li>Quality - ${dt.quality}</li><li>Denomination - ${dt.denomination}</li><li>Year - ${dt.pr_year}</li><li>Weight - ${dt.weight}</li><li>Price - ${dt.price}</li></ul><h3>Images</h3><div class="imgs"><div class="imag"><img src="/images/money/${dt.title}_2.png"/><p>Front</p></div><div class="imag"><img src="/images/money/${dt.title}_1.png"/><p>Back</p></div></div></div></div>`;
});