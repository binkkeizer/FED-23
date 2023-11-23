# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Bink Keizer

  #### Je startniveau:
  Rood

  #### Je focus:
  Ik ga mij eerst focussen op surface plane. Als ik dan tijd over heb dan ga ik de website responsive proberen te maken.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.fillingpieces.com/?gad_source=1&gclid=EAIaIQobChMIhJyQnZfGggMVmjsGAB0iTwNmEAAYASAAEgJ_mfD_BwE

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina 
  <img src="home.png" width="375px" alt="home scherm van kledingmerk filling pieces.">

  #### Screenshot(s) van de tweede pagina (small screen):
  Pagina campaigne archief
  <img src="campaignarchive.png" width="375px" alt="pagina van campaigne archief.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>Als site heb ik filling pieces gekozen uiteindelijk. Wat ik vooral merkte
  bij de voice over is dat er links zitten van een menu die onder de foto zit. 
  <img src="onzichtbaarmenu.png" width="375px" alt="Foto waaronder er een menu zit dit is niet handi voor een screenreader."> Dit gebeurt ook bij de maten van de kleding op het homescherm. De maten zijn namelijk links. Maar die zie je alleen als je over de image hovert. Dus die leest de screenreader ook allemaal af als je niet hovert. Ook heb je veel pop-ups op de site wat ervoor zorgt dat de screenreader eerst die tekst opneemt.
  <sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Links zijn niet helemaal goed gestructureerd met gebruik van de screenreader.
  <img src="maten.png" width="375px" alt="Screenreader weergeeft de link van de maten terwijl ze je niet ziet.">
  <img src="matenmethover.png" width="375px" alt="Nu zie je de maten, omdat je eroverheen hovert.">

  Er wordt veel gebruik gemaakt van hovers.

  Filling pieces eerst op de pagina knoppen staan van man en vrouw. En daarna hebben ze ook nog een navigatie waarbij je mannen en vrouwen hebt en dan schoenen of kleding kan selecteren als onderwerp.

  Contrast is vaak goed. Wel gebruiken zij plaatjes waar wit in zit en dan gooien zij er witte tekst eroverheen. Dit kan onduidelijk zijn voor slechtziende. <img src="witopwit.png" width="375px" alt="Witte tekst over een afbeelding met wit erin.">

  Filling pieces heeft ook een live chat button toegevoegd. Wat mij opviel is toen ik de website de website naar telefoon deed. Is dat die button soortvan dubbel leek te gaan.  <img src="livebuttonraar.png" width="375px" alt="Rare live chat knop die qua lay-out niet klopt.">

</details>



## Breakdownschets (week 1)

<details>
  <summary>In week 1 heb ik vooral opdrachten gemaakt die wij in de les moesten maken.
  Verder heb ik geoefend met de screenreader en kwam daar wat dingen tegen die verbeterd kunnen worden voor mijn site.Ook heb ik een breakdownschets gemaakt van de pagina's die ik wil maken. De pagina bestaat uit een header, body en een footer wat logisch is. De header en footer zijn altijd het zelfde behalve als je het op een groot computer scherm toont inplaats van mobiel. Op mobiel is de navigatie namelijk met icons en een hamburger menu gemaakt. En op een computer is het gewoon met tekst. In de homepagina van filling pieces is er veel variatie met afbeeldingen. Eerst beginnen zij met een grote afbeelding daarna met een soort slider. En verder nog 2 afbeeldingen naast elkaar. De kleding wordt vaak gecategoriseerd aan de hand van mannen en vrouwen afdeling.<sup>e</sup> </summary>

  ### de hele pagina: 
  <img src="breakdownhomepage.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="breakdowncampaignarchive.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### Hoe de footer er nou uitziet op de website: 
  <img src="footervanfp.png" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerking week 1<sup>e</sup>Ik heb een hover toegevoegd aan mijn navigatiebalk. Ik heb eerst de balk zwart gemaakt. zodat ik het makkelijk kan zien als ik eroverheen hover. Verder heb ik gewerkt aan responsiveness. De website is op dit moment responsive alleen moet ik de navigatiebalk nog regelen. Of met CSS of met javascript nog even kijken hoe ik dat ga doen. Verder heb ik sliders toegevoegd voor de nieuwe producten van vrouwen en mannen. Die ook groter worden zodra je de website op computer laat werken.</summary>

  ### Stand van zaken
  <img src="telefoonfpeerste.png" width="375px" alt="Hoe de sliders er op de website uitzien met kleding die nieuwe binnen is.">
  <img src="computerfpeerste.png" width="375px" alt="Hoe de sliders er op de website uitzien met kleding die nieuwe binnen is.">
  <img src="newin.png" width="375px" alt="Hoe de sliders er op de website uitzien met kleding die nieuwe binnen is.">
  <img src="htmlvanslider.png" width="375px" alt="Html code van de slider die ik gemaakt heb. Wel divs gebruikt.">
  <img src="cssslider.png" width="375px" alt="Algemene css code voor de slider.">
  <img src="imagenewin.png" width="375px" alt="Code van de images in de slider.">
  <img src="responsivecode.png" width="375px" alt="De code om mijn pagina responsive te krijgen.">
  <summary>Ik heb sliders gemaakt voor de mannen en vrouwen afdeling. Dat zijn alle producten die nieuw zijn op een rijtje. Verder heb ik de slider in een display grid gezet zodat kolommen kon maken. En zo kon ik uiteindelijk de site responsive krijgen door extra code toe te voegen bij een bepaalde grote van de website. Ik heb bij mijn html sections gebruikt en daarin divs gezet. Volgensmij mag je geen divs gebruiken. Maar je kan ook geen section in een section stoppen dus daar moet ik nog een oplossing voor vinden.</summary>



  ### Agenda voor meeting
  samen met je groepje opstellen

  | Bink           | Phon                     | Silke           |Mees              | Zoë        |
  | ---            | ---                      | ---             | ---              |            |
  | dit bespreken  | en dit                   | en ik dit       | en dan ik dat    |            |
  | en dat ook nog | dit als er tijd is       | nog een punt    | dit wil ik zeker | bij site   |
  | -Divs    | button in button/gifs   | breakdownschets |  Fonts           | uitklappen |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="/readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="/readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="/readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>