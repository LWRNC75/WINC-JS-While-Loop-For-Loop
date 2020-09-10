// 1. Even Odd Reporter
for (let i =0; i <=10; i++) {
    if(i % 2 === 0) {
        console.log(i + "is even");
    } else {
        console.log(i + "is oneven");
    }
}

// 2. Multiplication tables
//  Iedereen kent ze nog wel: de tafel tabellen van de basischool. We gaan nu een script schrijven dat de tafel tabellen voor je print in de console. 
// Gebruik voor het eerste voorbeeld de tafel van 9. 
const tableOfNine = 9;
// Schrijf een loop die "iterate" van 0 tot 10. 
for (let i=0; i <=10; i++) {
    // Multiplier
    let result = tableOfNine*i;
    // Console.log elke keer de uitkomst van de tafel van 9 naar de console. 
    console.log(tableOfNine + "*" + i + "=" + result); 
}

// 3. The Grade Assigner 
// Voor de volgende for-loop krijg je de volgende functie cadeau: 
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
/*
Schrijf een for-loop dit "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument. 
Console.log vervolgens: "Voor 91 punten, krijg je een A". 
De uitkomst is 40 regels lang. 

"Voor 60 punten, krijg je een F". 
....
"Voor 66 punten, krijg je een D".
....
"Voor 85 punten, krijg je een B"
etc etc. 
*/

//  60 = 40 regels kleiner dan 100 incremental
for (let i = 60; i <= 100; i++) {
    // call function plus iterate 
    console.log("For " + i + " points, your score is " + assignGrade(i) );
}