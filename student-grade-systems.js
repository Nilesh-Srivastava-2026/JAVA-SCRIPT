let score=prompt("Enter Your Marks Between(0-100) = " );
let grade;
if(score>=90 && score<=100)
   {   grade="A (Pass)";  }
else if (score>=77 && score<=89)
   { grade="B (Pass)";    }
else if  (score>=60 && score<=76)
   { grade="C (Pass)";    }
else if (score>=48 && score<=59) 
{    grade="D (Pass)" ;    }
else if (score>=33 && score <=47)
{    grade="E (Pass)" ;    }
else if (score<33)
  {  grade="F (Fail)" ;    }

console.log("According To Your Score and Given Values Grade is")
console.log("Score = ", score ,"," ,"Grade = ",grade)
console.log("Thank You!");
