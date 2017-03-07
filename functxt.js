

function NoText()        //validates for non-numerical entries
{
    var strAnswer = document.MathForm.answer.value;
    var fltAnswerNum = parseFloat(strAnswer);
    if (isNaN(fltAnswerNum) == true)

    {
        document.MathForm.answer.style.backgroundColor='red';
        alert("You must enter a number into the box. '" +strAnswer+ "' is not allowed because it is not a number.");
        return false;
    }
}
function NoTextRemainder()        //validates for non-numerical entries
{
    var strRemain = document.MathForm.Remainder.value;
    var fltRemainNum = parseFloat(strRemain);
    if (isNaN(fltRemainNum) == true)
		
    {
        document.MathForm.Remainder.style.backgroundColor='red';
        alert("You must enter a number into the box. '" +strRemain+ "' is not allowed because it is not a number.");
        return false;
    }
}

function ResetAll()
{
    document.MathForm.txtRemind.style.visibility ="hidden";
    document.MathForm.Remainder.style.visibility ="hidden"
    document.MathForm.txtFirstNum.value = "";
    document.MathForm.txtOperator.value = "";
    document.MathForm.txtSecondNum.value = "";
    document.MathForm.txtEqual.value = "";
    document.MathForm.txtSolution.value = "";
    document.MathForm.txtRemainderSolution.value = "";
    document.MathForm.answer.value = "";
    document.MathForm.Remainder.value = "";
    document.MathForm.txtTries.value = 0;
    document.MathForm.txtLevel.value = 0;
    document.MathForm.txtOper.value = 0;
}

function ClearAnswer()
{
    document.MathForm.answer.value ="";
    document.MathForm.Remainder.value ="";
    DoFocus();
}

function HideRemainder()
{
    document.MathForm.txtRemind.style.visibility ="hidden";
    document.MathForm.Remainder.style.visibility ="hidden";
}
function UnhideRemainder()
{
    document.MathForm.txtRemind.style.visibility ="visible";
    document.MathForm.Remainder.style.visibility ="visible";
}


function Hide()
{
    document.getElementById("arrow1").style.visibility="hidden";
    document.getElementById("arrow2").style.visibility="hidden";
    document.getElementById("pickoperator").style.display="none";
    document.getElementById("arrow3").style.visibility="hidden";
    document.getElementById("arrow4").style.visibility="hidden";
    document.getElementById("arrow5").style.visibility="hidden";
    document.getElementById("arrow6").style.visibility="hidden";
    //document.operatorQuest.style.visibility="hidden";
    document.getElementById("arrow1").style.visibility="hidden";
    document.getElementById("arrow2").style.visibility="hidden";
//document.levelQuest.style.visibility="hidden";
}


function HideLevelQuest() 
{
    document.getElementById("arrow1").style.visibility="hidden";
    document.getElementById("arrow2").style.visibility="hidden";
    //document.levelQuest.style.visibility="hidden";
    ShowOperatorQuest();
}
function HideOperatorQuest() 
{
    document.getElementById("arrow3").style.visibility="hidden";
    document.getElementById("arrow4").style.visibility="hidden";
    document.getElementById("arrow5").style.visibility="hidden";
    document.getElementById("arrow6").style.visibility="hidden";
    document.getElementById("operatorQuest").style.visibility="hidden";
}
function ShowOperatorQuest() 
{
    document.getElementById("arrow3").style.visibility="visible";
    document.getElementById("arrow4").style.visibility="visible";
    document.getElementById("arrow5").style.visibility="visible";
    document.getElementById("arrow6").style.visibility="visible";
    document.getElementById("operatorQuest").style.visibility="visible";
}




function randomInteger(size) //generates random integers
{
    return Math.floor((size+1)*Math.random());
	
}
function NoZero(changeNumber) //changes number if zero
{
	
    while (changeNumber==0)
    {
        changeNumber= randomInteger(9);
    }
    return changeNumber;
}

function SingleRandom()  
{
    var singleNumber=randomInteger(9);
    return singleNumber;
}


function ParseRand(Double)	//splits two digit number for pairing with gif files
{
    var FullNum = Double;
    var ToString = FullNum.toString();	//chages number to string
    var StringFirst= ToString.charAt(0);
    var FullNum = Double;
    var ToString = FullNum.toString();
    var StringSecond= ToString.charAt(1);
    var NumFirst=parseFloat(StringFirst);
    var NumSecond=parseFloat(StringSecond);
    var StoredNumbers= new Array(NumFirst, NumSecond);
    return StoredNumbers;
}

		
function MathAdd() 
{
    var intSolution;
    var intSingle1 = SingleRandom();
    var intSingle2 = SingleRandom();
    intSolution = intSingle1 + intSingle2;
    var intEquation = new Array(intSingle1, intSingle2, intSolution);
    return intEquation;
}

function AdvancedAdd() 
{
    var solution;
    var intDouble1 = DoubleRandom();
    var intDouble2 = DoubleRandom();
    intSolution =intDouble1 + intDouble2;
    var intEquation = new Array(intDouble1, intDouble2, intSolution);
    return intEquation;
}		

function MathSubtract() 
{
    var intSolution;
    var intSingle1 = SingleRandom();
    var intSingle2 = SingleRandom();
    if(intSingle1 < intSingle2)
    {
        intSolution = intSingle2 - intSingle1;
        var intEquation = new Array(intSingle2, intSingle1, intSolution);
    } else
    {
        intSolution = intSingle1 - intSingle2;
        var intEquation = new Array(intSingle1, intSingle2, intSolution);
    }
    return intEquation;
}

function AdvancedSubtract() 
{
    var intSolution;
    var intDouble1 = DoubleRandom();
    var intDouble2 = DoubleRandom();
    if(intDouble1 < intDouble2)
    {
        intSolution = intDouble2 - intDouble1;
        var intEquation = new Array(intDouble2, intDouble1, intSolution);
    } else
    {
        intSolution = intDouble1 - intDouble2;
        var intEquation = new Array(intDouble1, intDouble2, intSolution);
    }
    return intEquation;
}


function MathMultiply() 
{
    var intSolution;
    var intSingle1 = SingleRandom();
    var intSingle2 = SingleRandom();
    intSolution = intSingle1 * intSingle2;
    var intEquation = new Array(intSingle1, intSingle2, intSolution);
    return intEquation;
}

function AdvancedMultiply() 
{
    var solution;
    var intDouble1 = DoubleRandom();
    var intDouble2 = DoubleRandom();
    intSolution =intDouble1 * intDouble2;
    var intEquation = new Array(intDouble1, intDouble2, intSolution);
    return intEquation;
}


function MathDivide() 
{
    var intSolution;
    var intSingle1 = SingleRandom();
    var intSingle2 = SingleRandom();
    if(intSingle1 < intSingle2)
    {
        if(intSingle1==0)
        {
            intSingle1 =NoZero(intSingle1);
            while (intSingle1 > intSingle2)
            {
                intSingle1 =NoZero(intSingle1);
            }
        }
        intSolution = intSingle2 / intSingle1;
        intSolution = Math.floor(intSolution)
        var intRemainder= intSingle2 % intSingle1;
        var intBeginEquation = new Array(intSingle2, intSingle1, intSolution,intRemainder);
			
    }else
    {
        if(intSingle2==0)
        {
            intSingle2 =NoZero(intSingle2);
            while (intSingle2 > intSingle1)
            {
                intSingle1 =NoZero(intSingle2);
            }
        }
			
        intSolution = intSingle1 / intSingle2;
        intSolution = Math.floor(intSolution)
        intRemainder= intSingle1 % intSingle2;
        intBeginEquation = new Array(intSingle1, intSingle2, intSolution,intRemainder);
			
    }
    return intBeginEquation;
}

function AdvancedDivide() 
{
    var solution;
    var intDouble1 = DoubleRandom();
    var intDouble2 = DoubleRandom();
    floatSolution =intDouble1 / intDouble2;
    FixedRoundSolution= toFixed1(floatSolution)
    var intBeginEquation = new Array(intDouble1, intDouble2, FixedRoundSolution);
    return intBeginEquation;
}
		


function DoubleRandom()  
{
    var firstNumber=randomInteger(9);
    var secondNumber=randomInteger(9);
    firstNumber = NoZero(firstNumber);
    var multiplyNumber= firstNumber * 10;
    var addNumbers = multiplyNumber + secondNumber;
    return addNumbers;
}

function testLength()   //validates for text entry
{
	
    var intLevelField =document.MathForm.txtLevel.value;
    var intOperField = document.MathForm.txtOper.value;
    if(intLevelField == 1 && intOperField == 4)
    {
        var strRemain = document.MathForm.Remainder.value;
        //alert (if(strRemain = "");
        if(strRemain == "")
        {
            document.MathForm.Remainder.style.backgroundColor='red';
            alert("Enter a number into the remainder box");
            return false;
        }
        else if (NoTextRemainder()==false)
        {
            return false;
        }
		
    }

    var length = document.MathForm.answer.value;
    if(length == "")
    {
        document.MathForm.answer.style.backgroundColor='red';
        alert("Enter a number into the box");
        return false;
    }
    else if (NoText()==false)
    {
        return false;
    }
    document.MathForm.answer.style.backgroundColor='white';
    document.MathForm.Remainder.style.backgroundColor='white'
    return true;
}

function toFixed1(value)	//rounds to one decimal place
{
    n = Math.round(value*10)/10;
    if (n == Math.round(n)) return n+".0";
    //else if (n*10 == Math.round(n*10)) return n+"0";
    else
        return String(n);
}


function SwitchSecond(firstNumber, secondNumber) 
{

    var tempNumber = firstNumber;
    firstNumber = secondNumber;
    secondNumber =tempNumber
    return firstNumber;
}




function IncrementFields(txtField) 
{
    //alert("That is incorrect. Try again.");
    var intGetValue = document.getElementById(txtField).value;
    var fltGetNum = parseFloat(intStoreWrong);        /// gets number from text
    intWrong = fltWrong + 1;
    document.MathForm.txtField.value = intWrong;
}




function KeepEquationValues()
{
    var intKeepFirst = document.getElementById('txtFirstNum').value ;
    var intKeepOper = document.getElementById('txtOperator').value ;
    var intKeepSecond = document.getElementById('txtSecondNum').value ;
    var intKeepEqual = document.getElementById('txtEqual').value ;
    var intKeepSolution = document.getElementById('txtSolution').value ;
    var intKeepRemainder = document.getElementById('txtRemainderSolution').value ;
}	
function KeepSummaryValues()
{	
    var intKeepRight;
    var intKeepWrong;
    var intKeepTotal;
    document.getElementById('txtRight').value = intKeepRight ;
    document.getElementById('txtWrong').value = intKeepWrong;
    document.getElementById('txtTotal').value =  intKeepTotal;
    document.MathForm.txtRight.value = intKeepRight;
    document.MathForm.txtWrong.value = intKeepWrong;
    document.MathForm.txtTotal.value = intKeepTotal;
//var intStoredTotals= new Array(intKeepRight, intKeepWrong, txtTotal);
//return intStoredTotals;
}

function ResetEquationFields() 
{
    document.MathForm.txtFirstNum.value = "";
    document.MathForm.txtOperator.value = "";
    document.MathForm.txtSecondNum.value = "";
    document.MathForm.txtEqual.value = "";
    document.MathForm.txtSolution.value = "";
    document.MathForm.txtRemainderSolution.value = "";
    document.MathForm.answer.value = "";
    document.MathForm.Remainder.value = "";
    document.MathForm.txtTries.value = 0;
}

function ResetLevelFields() 
{
    document.MathForm.txtLevel.value = 0;
    document.MathForm.txtOper.value = 0;
}
function Equation() //uses radio buttons to call function that calls specific equations and displays equations on page
{
    //if((document.MathForm.level[4].checked || document.MathForm.level[4].checked) == false) {	// No Level Chosen
    //document.MathForm.eqnType.value = "No Level?"
    //document.MathForm.eqn.value = "Pick a level please?"
    //} else if((document.MathForm.sign[4].checked || document.MathForm.sign[4].checked || document.MathForm.sign[2].checked || document.MathForm.sign[4].checked) == false) {	 No Sign Chosen
    //document.MathForm.eqnType.value = "No Sign?"
    //document.MathForm.eqn.value = "Pick a math operation please?"
	
    HideRemainder();
    
    
    var intLevelField =document.MathForm.txtLevel.value;
    var intOperField = document.MathForm.txtOper.value;
    document.MathForm.txtRemainderSolution.value = "";
   if (intOperField <1 || intOperField >4)
   {
    alert ("Now pick plus, minus, multiply, or divide");
   } 
   else
   {  
   if (intLevelField != 1 && intLevelField != 2)
   {
     alert ("Now pick a level");
   }
   else
   {
    if(intLevelField == 1)
    {
       
        if(intOperField == 1)
        {                   
            BeginEquation(1);
        }
        else if(intOperField == 2)
        {
            BeginEquation(2);
        }
        else if(intOperField == 3)
        {
            BeginEquation(3);
        }
        else if(intOperField == 4)
        {
            BeginEquation(4);
        }
    }
    else if(intLevelField  == 2)
    {
        if(intOperField == 1)
        {
            AdvancedEquation(1);
        }
        else if(intOperField == 2)
        {
            AdvancedEquation(2);
        }
        else if(intOperField == 3)
        {
            AdvancedEquation(3);
        }
        else if(intOperField == 4)
        {
            AdvancedEquation(4);
        }
    }
    DoFocus();
    document.MathForm.answer.style.backgroundColor='#6699FF';
	}
	}
}

function BeginEquation(Operator) // calls specific beginning equation generation functions and writes equations to form
{
	
    Hide();
    HideRemainder();
    if(Operator == 1)
    {
        var Solution = MathAdd();
        document.MathForm.txtOperator.value = "+";
    }
    else if(Operator == 2 )
    {
        Solution =MathSubtract();
        document.MathForm.txtOperator.value = "-";
    }
    else if(Operator == 3 )
    {
        Solution =MathMultiply();
        document.MathForm.txtOperator.value = "x";
    }
    else if(Operator == 4 )
    {
        Solution =MathDivide();
        UnhideRemainder();
        document.MathForm.Remainder.style.backgroundColor='blue';
        document.MathForm.txtOperator.value = "/";

		
    }
    if (Operator ==4)
    {
        document.MathForm.txtFirstNum.value = Solution[0];
        document.MathForm.txtSecondNum.value =  Solution[1];
        document.MathForm.txtEqual.value = "=";
        document.MathForm.txtSolution.value = Solution[2];
        document.MathForm.txtRemainderSolution.value = Solution[3];
    }else
        document.MathForm.txtFirstNum.value = Solution[0];
    document.MathForm.txtSecondNum.value =  Solution[1];
    document.MathForm.txtEqual.value = "=";
    document.MathForm.txtSolution.value = Solution[2];
}

function AdvancedEquation(Operator)  //calls specific advanced equation generation functions and writes equations to form

{
    Hide();
    if(Operator == 1)
    {
        var Solution = AdvancedAdd();
        document.MathForm.txtOperator.value = "+";
    } else if(Operator == 2 )
    {
        Solution = AdvancedSubtract();
        document.MathForm.txtOperator.value = "-";
    }else if(Operator == 3 )
    {
        Solution = AdvancedMultiply();
        document.MathForm.txtOperator.value = "x";
    }else if(Operator == 4 )
    {
        Solution = AdvancedDivide();
        document.MathForm.txtOperator.value = "/";
    }
	
    document.MathForm.txtFirstNum.value = Solution[0];
    document.MathForm.txtSecondNum.value =  Solution[1];
    document.MathForm.txtEqual.value = "=";
    document.MathForm.txtSolution.value = Solution[2];
}

function RunEquation()  //runs test equations on test forms
{
	
    var level= MathForm.test.level;
    lindex = level.selectedIndex;
    oper= document.test.oper;
    oindex = oper.selectedIndex;
    //  alert(oindex+ " xxxxx");
    if(lindex==1)
    {
        var SolutionBegin = EquationBegin(oindex );
    //var CompReturn = Compare(lindex, answer,SolutionBegin);
    }
    else
    {
        var SolutionAdvanced = EquationAdvanced(oindex );
    //var CompReturn = Compare(lindex, answer,SolutionAdvanced);
    }
}

function ValueCompare()
{
    if(testLength()==true)
    {
        var Answer = document.getElementById('answer').value ;
        var dblFixedAnswer = toFixed1(Answer);
        var Solution = document.getElementById('txtSolution').value ;
        var dblFixedSolution = toFixed1(Solution);
        var txtRemainderAnswer = document.getElementById('Remainder').value;
        var intRemainderAnswer = toFixed1(txtRemainderAnswer);
        var txtRemainderSolution = document.getElementById('txtRemainderSolution').value;
        var intRemainderSolution = toFixed1(txtRemainderSolution);
        var intGetTextTries = document.getElementById("txtTries").value;
        var intGetNumTries=parseFloat(intGetTextTries);
        if(dblFixedSolution==dblFixedAnswer && intRemainderAnswer==intRemainderSolution)
        {
            checkCorrect();
            
            var intGetValue = document.getElementById("txtRight").value;
            var intGetNum=parseFloat(intGetValue);
            intGetNum = intGetNum + 1;
            document.MathForm.txtRight.value = intGetNum;
            ResetEquationFields();
            ClearAnswer();
                        
        //} else if (intGetNumTries <2)
        //{
        //alert("That is incorrect. Try again. You have "+(2-intGetNumTries)+ " more.");
        //intGetNumTries = intGetNumTries + 1;
        //document.MathForm.txtTries.value = intGetNumTries;
        //ClearAnswer();
        //return false;
        }else
        {
            checkIncorrect(Solution, txtRemainderSolution);
            document.MathForm.txtTries.value = 0;
            var intStoreWrong = document.getElementById('txtWrong').value;
            var fltWrong = parseFloat(intStoreWrong);
            fltWrong = fltWrong + 1;
            document.MathForm.txtWrong.value = fltWrong;
                        
            ResetEquationFields();
            HideRemainder();
                        
        }
        
        var intStoreTotal = document.getElementById('txtTotal').value;
        var fltTotal = parseFloat(intStoreTotal);
        intTotal = fltTotal + 1;
        document.MathForm.txtTotal.value = intTotal;
        //alert(Continue());
        //if(Continue() == true)
        //{
        Equation();
    //}
    //else
    //{
    //ResetEquationFields();
    //ResetLevelFields()
    //}
		
    }
	
}
function checkCorrect()
{
    var numberRight=document.getElementById('txtRight').value;
    var remainderSolution=document.getElementById('txtRemainderSolution').value;
    if (numberRight==0)
    {
        
        alert("Yes! You are right! You get to start now.");
        moveChloe();
    }
    else if (numberRight==1)
    {
        
        alert("Good one. You got the right answer");
        moveChloe1();
    }
    else if (numberRight==2)
    {
        
        alert("Excellent! You must be pretty smart.");
        moveChloe2();
    }
    else if (numberRight==3)
    {
       
        alert("Nice job! You got another one right. You are way smarter than your mom.");
        moveChloe3();
    }
    else if (numberRight==4)
    {
       
        alert("You got another one right. Now you are moving along.")
        moveChloe4();;
    }
    else if (numberRight==5)
    {
        
        alert("Good one. You might be the winner if you keep this up.");
        moveChloe5();
    }
    else if (numberRight==6)
    {
        alert("That one was right. Way to go!");
        moveChloe6();

    }
    else if (numberRight==7)
    {
        
        alert("You got another one right!");
        moveChloe7();
    }
    else if (numberRight==8)
    {
        
        alert("Good job! Another one right.");
        moveChloe8();
    }
    else if (numberRight==9)
    {
        
        alert("Very Good. You are getting close now.");
        moveChloe9();
    }
    else if (numberRight==10)
    {
        
        alert("That was a very smart answer!");
        moveChloe10();
    }
    else if (numberRight==11)
    {
        
        alert("WOW! Look at that. Another one right.");
        moveChloe11();
    }
    else if (numberRight==12)
    {
        
        alert("That was a hard one. How did you get that?");
        moveChloe12();
    }
    else if (numberRight==12)
    {
      
        alert("You are smart! You are almost finished.");
        moveChloe12();
    }
    else if (numberRight==13)
    {
        
        alert("Very good! One more and you reach the finish line.");
        moveChloe13();
    }
    else if (numberRight==14)
    {
        
        alert("Congratulations! You made it all the way. You win! \n\ \n\
        You sure know your math.\n\ \n\
        Click the Reset button to start a new game.");
        moveChloe14();
    }
}
function checkIncorrect(Solution, txtRemainderSolution)
{
    var numberWrong=document.getElementById('txtWrong').value;
    var solutionText= Answer(Solution);
    var answerWithRemainderText=AnswerWithRemainder(Solution, txtRemainderSolution)
    var feedbackMissed= new Array(
        "Sorry, that is not right.",
        "Missed that one!",
        "Wow! Did you miss again?",
        "Ooops! You missed that one.",
        "Missed again.",
        "Nope, but that was a hard one.",
        "Nope.",
        "Oh no!!!! Not another one.",
        "Ha! That wasn't right.",
        "How did you miss that easy one?",
        "Looks like you missed that one.",
        "Oh, no! You didn't get that one.");
    var daleExclaim= new Array(
        "Dale gets to start now.",
        "Dale is getting there.",
        "There goes Dale.",
        "Dale is fast with his big shoes.",
        "Dale gets to move again.",
        "Dale moves again!",
        "Watch out. Dale might win!",
        "Ha! Look at Dale go." ,
        "Forward again for Dale.",
        "You'd better watch out for Dale.",
        "Dale is almost there.",
        "Dale wins! Yeah for Dale!");
    var tryAgain= new Array(
        "Please try another problem.",
        "Do another one.",
        "You'll do better next time.",
        "Think harder.",
        "Try another one.",
        "Next one.",
        "Go again." ,
        "You'll get the next one.",
        "Try again.",
        "Come on, you can do it!",
        "Don't let Dale win!",
        "Oh no! How did Dale win?");


    if (numberWrong==0)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[0]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[0]+" \n\ \n\ "+tryAgain[0]);
        else
            alert(feedbackMissed[0]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[0]+" \n\ \n\ "+tryAgain[0]);
        moveDale();
    }
    else if (numberWrong==1)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[1]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[1]+" \n\ \n\ "+tryAgain[1]);
        else
            alert(feedbackMissed[1]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[1]+" \n\ \n\ "+tryAgain[1]);
        moveDale1();
    }
    else if (numberWrong==2)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[2]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[2]+" \n\ \n\ "+tryAgain[2]);
        else
            alert(feedbackMissed[2]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[2]+" \n\ \n\ "+tryAgain[2]);
        moveDale2();
    }
    else if (numberWrong==3)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[3]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[3]+" \n\ \n\ "+tryAgain[3]);
        else
            alert(feedbackMissed[3]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[3]+" \n\ \n\ "+tryAgain[3]);
        moveDale3();
        
    }
    else if (numberWrong==4)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[4]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[4]+" \n\ \n\ "+tryAgain[4]);
        else
            alert(feedbackMissed[4]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[4]+" \n\ \n\ "+tryAgain[4]);
        moveDale4();
        
    }
    else if (numberWrong==5)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[5]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[5]+" \n\ \n\ "+tryAgain[5]);
        else
            alert(feedbackMissed[5]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[5]+" \n\ \n\ "+tryAgain[5]);
        moveDale5();
    }

    else if (numberWrong==6)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[6]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[6]+" \n\ \n\ "+tryAgain[6]);
        else
            alert(feedbackMissed[6]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[6]+" \n\ \n\ "+tryAgain[6]);
        moveDale6();
    }
    else if (numberWrong==7)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[7]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[7]+" \n\ \n\ "+tryAgain[7]);
        else
            alert(feedbackMissed[7]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[7]+" \n\ \n\ "+tryAgain[7]);
        moveDale7();
    }
    else if (numberWrong==8)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[8]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[8]+" \n\ \n\ "+tryAgain[8]);
        else
            alert(feedbackMissed[8]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[8]+" \n\ \n\ "+tryAgain[2]);
            moveDale8();
    }
    else if (numberWrong==9)
    {
       
        if(txtRemainderSolution=="")
            alert(feedbackMissed[9]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[9]+" \n\ \n\ "+tryAgain[9]);
        else
            alert(feedbackMissed[9]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[9]+" \n\ \n\ "+tryAgain[9]);
             moveDale9();
    }
    else if (numberWrong==10)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[10]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[10]+" \n\ \n\ "+tryAgain[10]);
        else
            alert(feedbackMissed[10]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[10]+" \n\ \n\ "+tryAgain[10]);
            moveDale10();
    }
    else if (numberWrong==11)
    {
       
        if(txtRemainderSolution=="")
            alert(feedbackMissed[5]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[5]+" \n\ \n\ "+tryAgain[5]);
        else
            alert(feedbackMissed[5]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[5]+" \n\ \n\ "+tryAgain[5]);
             moveDale11();
    }
    else if (numberWrong==12)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[8]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[8]+" \n\ \n\ "+tryAgain[8]);
        else
            alert(feedbackMissed[8]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[8]+" \n\ \n\ "+tryAgain[8]);
            moveDale12();
    }
    else if (numberWrong==12)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[9]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[9]+" \n\ \n\ "+tryAgain[9]);
        else
            alert(feedbackMissed[9]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[9]+" \n\ \n\ "+tryAgain[9]);
            moveDale12();
    }
    else if (numberWrong==13)
    {
       
        if(txtRemainderSolution=="")
            alert(feedbackMissed[10]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[10]+" \n\ \n\ "+tryAgain[10]);
        else
            alert(feedbackMissed[10]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[10]+" \n\ \n\ "+tryAgain[10]);
             moveDale13();
    }
    else if (numberWrong==14)
    {
        
        if(txtRemainderSolution=="")
            alert(feedbackMissed[11]+" \n\ \n\ " +solutionText+" \n\ \n\ "
                +daleExclaim[11]+" \n\ \n\ "+tryAgain[11]+ " \n\ \n\
    Click the Reset button to start a new game.");
        else
            alert(feedbackMissed[11]+" \n\ \n\ " +answerWithRemainderText+" \n\ \n\ "
                +daleExclaim[11]+" \n\ \n\
    Click the Reset button to start a new game.");
        moveDale14();

    }
}
function Answer(Solution)
{
    return "The correct answer is "+Solution+". "
}
function AnswerWithRemainder(Solution, Remainder)
{
    return "The correct answer is "+Solution+" with a remainder of "+Remainder+"."
}



function Continue()
{
    var Conf=confirm("Press OK if you would like another problem. Press cancel if you want to stop and pick another level or another type of problem.");
    if (Conf==true)
    {
        return true;
    }
    else
    {
        return false;
    }



}
function moveDale()
{
    $("#dale").animate({
        "left": "+=420px",
        "top": "+=30px"
    }, "slow");
}
function moveDale1()
{
    $("#dale").animate({
        "left": "+=120px",
        "top": "+=0px"
    }, "slow");
}
function moveDale2()
{
    $("#dale").animate({
        "left": "+=110px",
        "top": "+=72px"
    }, "slow");
}
function moveDale3()
{
    $("#dale").animate({
        "left": "+=141px",
        "top": "+=122px"
    }, "slow");
}
function moveDale4()
{
    $("#dale").animate({
        "left": "-=81px",
        "top": "+=32px"
    }, "slow");
}
function moveDale5()
{
    $("#dale").animate({
        "left": "-=111px",
        "top": "+=66px"
    }, "slow");
}
function moveDale6()
{
    $("#dale").animate({
        "left": "-=444px",
        "top": "+=0px"
    }, "slow");
}
function moveDale7()
{
    $("#dale").animate({
        "left": "-=111px",
        "top": "-=83px"
    }, "slow");
}
function moveDale8()
{
    $("#dale").animate({
        "left": "-=11px",
        "top": "-=40px"
    }, "slow");
}
function moveDale9()
{
    $("#dale").animate({
        "left": "-=29px",
        "top": "-=55px"
    }, "slow");
}
function moveDale10()
{
    $("#dale").animate({
        "left": "-=11px",
        "top": "-=44px"
    }, "slow");
}
function moveDale11()
{
    $("#dale").animate({
        "left": "+=111px",
        "top": "-=22px"
    }, "slow");
}

function moveDale12()
{
    $("#dale").animate({
        "left": "+=71px",
        "top": "-=20px"
    }, "slow");
}
function moveDale13()
{
    $("#dale").animate({
        "left": "+=51px",
        "top": "+=0px"
    }, "slow");
}
function moveDale14()
{
    $("#dale").animate({
        "left": "+=131px",
        "top": "-=30px"
    }, "slow");
}


function moveChloe()
{
    $("#chloe").animate({
        "left": "-=333px",
        "top": "+=10px"
    }, "slow");
}
function moveChloe1()
{
    $("#chloe").animate({
        "left": "+=120px",
        "top": "+=0px"
    }, "slow");
}
function moveChloe2()
{
    $("#chloe").animate({
        "left": "+=110px",
        "top": "+=72px"
    }, "slow");
}
function moveChloe3()
{
    $("#chloe").animate({
        "left": "+=141px",
        "top": "+=122px"
    }, "slow");
}
function moveChloe4()
{
    $("#chloe").animate({
        "left": "-=81px",
        "top": "+=32px"
    }, "slow");
}
function moveChloe5()
{
    $("#chloe").animate({
        "left": "-=111px",
        "top": "+=66px"
    }, "slow");
}
function moveChloe6()
{
    $("#chloe").animate({
        "left": "-=444px",
        "top": "+=0px"
    }, "slow");
}
function moveChloe7()
{
    $("#chloe").animate({
        "left": "-=111px",
        "top": "-=83px"
    }, "slow");
}
function moveChloe8()
{
    $("#chloe").animate({
        "left": "-=11px",
        "top": "-=40px"
    }, "slow");
}
function moveChloe9()
{
    $("#chloe").animate({
        "left": "-=29px",
        "top": "-=55px"
    }, "slow");
}
function moveChloe10()
{
    $("#chloe").animate({
        "left": "-=11px",
        "top": "-=44px"
    }, "slow");
}
function moveChloe11()
{
    $("#chloe").animate({
        "left": "+=111px",
        "top": "-=22px"
    }, "slow");
}

function moveChloe12()
{
    $("#chloe").animate({
        "left": "+=71px",
        "top": "-=20px"
    }, "slow");
}
function moveChloe13()
{
    $("#chloe").animate({
        "left": "+=51px",
        "top": "+=0px"
    }, "slow");
}
function moveChloe14()
{
    $("#chloe").animate({
        "left": "+=131px",
        "top": "-=30px"
    }, "slow");
}