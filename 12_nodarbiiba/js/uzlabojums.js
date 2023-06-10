//uzlabojums 
var button = document.getElementById("myButton");
var list = document.getElementById("myList");
button.addEventListener("clikc", function(){
var listItem = document.createElement("li");
listItem.textContent = "New list item";
list.appendChild(listItem);
});
listItem.appendChild(createMenuItem('Napoleon no austiņam'));
listItem.appendChild(createMenuItem(''));
listItem.appendChild(createMenuItem(''));

/* function createMenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
// get the ul#menu
function button_onclickk(){const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Napoleons no austiņam'));
menu.appendChild(createMenuItem('Sastāvdaļas'));
menu.appendChild(createMenuItem('600 g cepumi „Austiņas'));
menu.appendChild(createMenuItem('600 ml piena'));
menu.appendChild(createMenuItem('3 olas'));
menu.appendChild(createMenuItem('100 g cukura'));
menu.appendChild(createMenuItem('2 ēdamkarotes cietes'));
menu.appendChild(createMenuItem('2 ēdamkarotes miltu'));
menu.appendChild(createMenuItem('1 paciņa vaniļas cukura'));
menu.appendChild(createMenuItem('100 g saldkrējuma sviesta'));
menu.appendChild(createMenuItem(' Pagatavošana '));
menu.appendChild(createMenuItem(' Krēms: Ar putojamo slotiņu samaisa olas un cukuru.'));
menu.appendChild(createMenuItem('Pakāpeniski pievieno miltus un cieti un, nepārtraucot putošanu, arī pienu.'));
menu.appendChild(createMenuItem('Masu pārliek nelielā katliņā un karsē un nelielas uguns, nepārtraukti maisot.'));
menu.appendChild(createMenuItem('Kad krēms sāk vārīties, pievieno sviestu un rūpīgi visu samaisa.'));
menu.appendChild(createMenuItem('Pārklāj ar pārtikas plēvi un novieto atdzesēties.'));
menu.appendChild(createMenuItem('Sevis izvēlētā kūkas formā, klāj kārtu ar cepumiem, pārklāj to ar krēmu.'));
menu.appendChild(createMenuItem('Darbības atkārto līdz krēms un cepumi izlikti, atstājot nedaudz cepumu dekorēšanai un krēma kūkas virsmas un malu apziešanai.'));
menu.appendChild(createMenuItem('Kūku dekorē pēc pašu gaumes un ievieto ledusskapī uz&nbsp; 2 - 4 stundām.'));
menu.appendChild(createMenuItem('  '));
};


 /*     <h1>Napoleon</h1>
      <img width="350" height="250" src="https://media.gardedis.lv/cache/61/13/6113365703dd87434310eb52d8c80072.jpg " 
      alt="Neceptā „Austiņu” – krēma kūka"> </img>
      
      <h2>Sastāvdaļas</h2>
      
<ul>
<li>600 g cepumi „Austiņas”</li>
<li>600 ml piena</li>
<li>3 olas</li>
<li>100 g cukura</li>
<li>2 ēdamkarotes cietes</li>
<li>2 ēdamkarotes miltu</li>
<li>1 paciņa vaniļas cukura</li>
<li>100 g saldkrējuma sviesta</li>
</ul>


    
    //  <h2>Pagatavošana</h2>
     
<li>Krēms: Ar putojamo slotiņu samaisa olas un cukuru.</li>
<li>Pakāpeniski pievieno miltus un cieti un, nepārtraucot putošanu, arī pienu.</li>
<li>Masu pārliek nelielā katliņā un karsē un nelielas uguns, nepārtraukti maisot.</li>
<li>Kad krēms sāk vārīties, pievieno sviestu un rūpīgi visu samaisa.</li>
<li>Pārklāj ar pārtikas plēvi un novieto atdzesēties.</li>
<li>Sevis izvēlētā kūkas formā, klāj kārtu ar cepumiem, pārklāj to ar krēmu.</li>
<li>Darbības atkārto līdz krēms un cepumi izlikti, atstājot nedaudz cepumu dekorēšanai un krēma kūkas virsmas un malu apziešanai.</li>
<li>Kūku dekorē pēc pašu gaumes un ievieto ledusskapī uz&nbsp; 2 - 4 stundām.</li>
</ol>*/
