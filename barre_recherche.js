
let carnet = ' { "employees" : [' +
'{"Titre" : "Poulet", "tag" : "viande" },' +
'{"Titre" : "Gateau, "tag" : "Poisson"} ]}';

const obj = JSON.parse(carnet);

for (i=0; i < obj.recettes.lenght ; i++)
{
  let LIEN=document.createElement("LIEN");
  LIEN = obj.recettes[i] + ".html";
  print(LIEN);
}