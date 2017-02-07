var atmpques = 0; //0 counter var creat for attemp ques....
var corected = 0; //0 colection right ans but use counter colection.....
var testq = document.getElementById("centerBox");
var para = document.getElementById("ctimes");
var i = 0;

            // TIMER


 function timer(){
    
   // div.style.display = "Block";
    var min = 4;
    var sec = 59;
    var int = setInterval(function(){
        if(min < 10 && sec < 10){
            para.innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if( min < 10){
            para.innerHTML = "0" + min + ":" + sec;
        }
        else if( sec < 10){
            para.innerHTML = min + ":"+ "0" + sec;
        }
        
       else{ para.innerHTML = min + ":" + sec;}
        sec--;
        
         if(min < 0){
            clearInterval(int);
            para.innerHTML = "Time Finished...!";
            result();
        
        }
        else if(sec == 0){
            min--;
            sec = 60;
        }
    }, 1000);
}





var quizquestion = [
    {
        qno: 1,
        ques:  "Q1: Why so JavaScript and Java have similar name?",
        opt1: "JavaScript is a stripped-down version of Java",
        opt2: "JavaScript's syntax is loosely based on Java's",
        opt3: "They both originated on the island of Java",
        opt4: "None of the above"  ,

         corct: "JavaScript's syntax is loosely based on Java's"
    },
    {
        qno: 2,
        ques:  "Q2: When a user views a page containing a JavaScript program, which machine actually executes the script?",
        opt1: "The User's machine running a Web browser",
        opt2: "The Web server",
        opt3: "A central machine deep within Netscape's corporate offices",
        opt4: "None of the above"  ,

        corct: "The User's machine running a Web browser"
    },
     {
        qno: 3,
        ques: " Q3: What are variables used for in JavaScript Programs?",
        opt1: "Storing numbers, dates, or other values",
        opt2: "Varying randomly",
        opt3: "Causing high-school algebra flashbacks",
        opt4: "None of the above"  ,

        corct: "Storing numbers, dates, or other values"
    },
    {
        qno: 4,
        ques:  "Q4:  Which of the following can't be done with client-side JavaScript?",
        opt1: 'Validating a form',
        opt2: ' Sending a form&apos;s contents by email',
        opt3: 'Storing the form&apos;s contents to a database file on the server',
        opt4:  'None of the above' ,

        corct: 'Storing the form&apos;s contents to a database file on the server' 
    },
    {
        qno: 5,
        ques: 'Q5: Which of the following are capabilities of functions in JavaScript?' ,
        opt1:  ' Return a value',
        opt2: 'Accept parameters and Return a value',
        opt3: ' Accept parameters',
        opt4:  'None of the above'  ,

        corct: ' Accept parameters'
    },
    {
        qno: 6,
        ques:  'Q6: Which of the following is not a valid JavaScript variable name?',
        opt1: "2names",
        opt2:  "_first_and_last_names",
        opt3:  " FirstAndLast",
        opt4: " None of the above",

        corct:  "2names" 
    },
    {
        qno: 7,
        ques:  'Q7:  How does JavaScript store dates in a date object?',
        opt1:  "The number of milliseconds since January 1st, 1970",
        opt2: "The number of days since January 1st, 1900",
        opt3: " The number of seconds since Netscape's public stock offering.",
        opt4: "None of the above",

        corct: "The number of milliseconds since January 1st, 1970"
    },
    {
        qno: 8,
        ques: 'Q8: How to write an IF statement for executing some code if "i" is NOT equal to 5?' ,
        opt1: 'LANGUAGE',
        opt2: 'SCRIPT',
        opt3: 'VERSION',
        opt4: 'None of the above',

        corct:'LANGUAGE'
    },
    {
        qno: 9,
        ques:  "Q9: JavaScript entities start with _______ and end with _________.",
        opt1:  "Semicolon, colon",
        opt2:  "Semicolon, Ampersand",
        opt3: "Ampersand, colon",
        opt4: "Ampersand, semicolon" ,

        corct: "Ampersand, semicolon"
    },
    {
        qno: 10,
        ques:  "Q10: Which of the following best describes JavaScript?",
        opt1: "a low-level programming language.",
        opt2: "a scripting language precompiled in the browser.",
        opt3:  "a compiled scripting language.",
        opt4:  "an object-oriented scripting language.",

        corct:  "an object-oriented scripting language."
    },
    {
        qno: 11,
        ques: "Q11: Which of the following is not considered a JavaScript operator?",
        opt1: "new",
        opt2: "this",
        opt3:  "delete",
        opt4: "typeOf" ,

        corct:  "this"
    },
      {
        qno: 12,
        ques:  'Q12: JavaScript is interpreted by _________',
        opt1: 'Client',
        opt2:  'Server',
        opt3: 'Object',
        opt4:  'None of the above' ,

        corct:  'Client'
    },
      {
        qno: 13,
        ques: "Q13: Using _______ statement is how you test for a specific condition." ,
        opt1:  "select",
        opt2: "if",
        opt3: "switch",
        opt4:  "for" ,

        corct:  "if"
    },
      {
        qno: 14,
        ques:  "Q14: The _______ method of an Array object adds and/or removes elements from an array.",
        opt1: "Reverse",
        opt2: "Shift",
        opt3:  "Slice",
        opt4:"Splice"  ,

        corct: "Splice"
    },
      {
        qno: 15,
        ques: "Q15: Scripting language are" ,
        opt1: "High Level Programming language",
        opt2: "Assembly Level programming language" ,
        opt3: "Machine level programming language",
        opt4: "None of the above" ,

        corcat:  "High Level Programming language"
    }
]


function startbtn() {
    window.location.href = "quizapp.html";
    var nxtb = document.getElementById("nxt");
    nxtb.setAttribute("disabled","disabled");


    document.getElementById("que").innerHTML = quizquestion[0].ques ;
    document.getElementById("op1").innerHTML = quizquestion[0].opt1;
    document.getElementById("opt1").value = quizquestion[0].opt1;
    document.getElementById("op2").innerHTML = quizquestion[0].opt2;
    document.getElementById("opt2").value = quizquestion[0].opt2;
    document.getElementById("op3").innerHTML = quizquestion[0].opt3;
    document.getElementById("opt3").value = quizquestion[0].opt3;
    document.getElementById("op4").innerHTML = quizquestion[0].opt4;
    document.getElementById("opt4").value = quizquestion[0].opt4;
}
function enablenxt() {
    var radioname = document.querySelector('input[name="radio"]:checked');
    if(radioname) {
        var nxtbnt = document.getElementById("nxt");
        nxtbnt.removeAttribute("disabled","disabled");
    }
}
function next() {
    atmpques += 1;
    var rightans = quizquestion[atmpques-1].corct;
    var radionam = document.querySelector('input[name="radio"]:checked').value; 

    if(radionam == rightans) {
corected++
    }
    else{
        corected;
    }
    if(quizquestion[atmpques] !== undefined) {

    document.getElementById("que").innerHTML = quizquestion[atmpques].ques ;
    document.getElementById("op1").innerHTML = quizquestion[atmpques].opt1;
    document.getElementById("opt1").value = quizquestion[atmpques].opt1;
    document.getElementById("op2").innerHTML = quizquestion[atmpques].opt2;
    document.getElementById("opt2").value = quizquestion[atmpques].opt2;
    document.getElementById("op3").innerHTML = quizquestion[atmpques].opt3;
    document.getElementById("opt3").value = quizquestion[atmpques].opt3;
    document.getElementById("op4").innerHTML = quizquestion[atmpques].opt4;
    document.getElementById("opt4").value = quizquestion[atmpques].opt4;
    }
    else{
        var crtans = corected/quizquestion.length * 100;
        var scor = document.getElementById("scrper").innerHTML= Math.round(crtans) + "%";

        var que = document.getElementById("rightques").innerHTML = corected;
        document.getElementById("centerBox").setAttribute('style','visibility:hidden;');
        document.getElementById("scorediv").setAttribute('style', 'visibility:visible;');
          if(crtans <= 60 ){
        document.getElementById("passdiv").innerHTML = "FAILED! TRY AGAIN";
    }
    else if(crtans > 60 ){
        document.getElementById("passdiv").innerHTML = "CONGRATULATIONS...PASS!";
    }
    }
}


function result(){
 var crtans = corected/quizquestion.length * 100;
        var scor = document.getElementById("scrper").innerHTML= Math.round(crtans);
        scor + "%"
        var que = document.getElementById("rightques").innerHTML = corected;
        document.getElementById("centerBox").setAttribute('style','visibility:hidden;');
        document.getElementById("scorediv").setAttribute('style', 'visibility:visible;');
        if(prcntge <= 60 ){
        document.getElementById("passdiv").innerHTML = "SORRY! TRY AGAIN";
    }
    else if(prcntge > 60 ){
        document.getElementById("passdiv").innerHTML = "CONGRATULATIONS!";
    }
}