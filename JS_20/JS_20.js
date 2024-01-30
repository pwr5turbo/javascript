let studenten = [
    {"voornaam": "Lars", "tv": "", "achternaam": "Bonsink", "groep": "1"},
    {"voornaam": "Victor", "tv": "de", "achternaam": "Jong", "groep": "1"},
    {"voornaam": "Sem", "tv": "van de", "achternaam": "Akker", "groep": "1"},
    {"voornaam": "Noah", "tv": "weer", "achternaam": "Wind", "groep": "3"},
    {"voornaam": "Dylan", "tv": "", "achternaam": "Akkerman", "groep": "3"}
];

let groep = [
    {1: "SD1A"},
    {2: "SD1B"},
    {3: "SD1C"}
];

let outputHtml = '<table><tr><th>Voornaam</th><th>Tussen voegsel</th><th>Achternaam</th><th>Groep</th></tr>';

for (let i = 0; i < studenten.length; i++) {
    outputHtml += '<tr><td>' + studenten[i].voornaam + '</td><td>' + studenten[i].tv + '</td><td>' + studenten[i].achternaam + '</td><td>' + groep[parseInt(studenten[i].groep) - 1][parseInt(studenten[i].groep)] + '</td></tr>';
}

outputHtml += '</table>';

document.getElementById("output").innerHTML = outputHtml;
