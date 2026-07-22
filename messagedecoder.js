//  1: Decode 

let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll'uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

let decoded1 = message1.split('').reverse().join('');
let decoded2 = message2.split('').reverse().join('');
let decoded3 = message3.split('').reverse().join('');
let decoded4 = message4.split('').reverse().join('');

console.log(decoded1);
console.log(decoded2);
console.log(decoded3);
console.log(decoded4);


//  2: Write and Reverse  Messages

let myMessage1 = "Every expert was once a beginner who refused to give up.";
let myMessage2 = "Small progress every day adds up to big results.";

let myReversed1 = myMessage1.split('').reverse().join('');
let myReversed2 = myMessage2.split('').reverse().join('');

console.log(myReversed1);
console.log(myReversed2);