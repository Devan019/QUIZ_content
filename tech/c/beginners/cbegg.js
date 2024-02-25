let total = 0;

let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let q4 = document.querySelector(".q4");
let q5 = document.querySelector(".q5");
let q6 = document.querySelector(".q6");
let q7 = document.querySelector(".q7");
let q8 = document.querySelector(".q8");
let q9 = document.querySelector(".q9");
let q10 = document.querySelector(".q10");

let n1 = document.querySelector(".n1");
let n2 = document.querySelector(".n2");
let n3 = document.querySelector(".n3");
let n4 = document.querySelector(".n4");
let n5 = document.querySelector(".n5");
let n6 = document.querySelector(".n6");
let n7 = document.querySelector(".n7");
let n8 = document.querySelector(".n8");
let n9 = document.querySelector(".n9");
let submit = document.querySelector(".sub");

let con = document.querySelector(".con");
let sorry = document.querySelector(".so");
let time = document.querySelector(".t");


q2.classList.add("hide");
q3.classList.add("hide");
q4.classList.add("hide");
q5.classList.add("hide");
q6.classList.add("hide");
q7.classList.add("hide");
q8.classList.add("hide");
q9.classList.add("hide");
q10.classList.add("hide");

con.classList.add("hide");
sorry.classList.add("hide");

n1.addEventListener("click", (e) => {
   q1.classList.add("hide");
   q2.classList.remove("hide");
   
     
   let a1 = document.querySelector("input[name='option']:checked");
   console.log(a1);
   if(a1){
   if (a1.value == "Dennis Ritchie") total++;
   }

}
)

n2.addEventListener("click", (e) => {
   q2.classList.add("hide");
   q3.classList.remove("hide");
   
   let a2 = document.querySelector("input[name='option2']:checked");
   if(a2){
   if (a2.value == "%lf") total++;
   }
}
)

n3.addEventListener("click", (e) => {
   q3.classList.add("hide");
   q4.classList.remove("hide");
 
   let a3 = document.querySelector("input[name='option3']:checked");
   if(a3){
   if (a3.value == "3") total++;
   }
}
)



n4.addEventListener("click", (e) => {
   q4.classList.add("hide");
   q5.classList.remove("hide");
  
   let a4 = document.querySelector("input[name='option4']:checked");
   if(a4){
   if (a4.value == "4") total++;
   }
}
)

n5.addEventListener("click", (e) => {
   q5.classList.add("hide");
   q6.classList.remove("hide");

   

   let a5 = document.querySelector("input[name='option5']:checked");
   if(a5){
   if (a5.value == "An array of characters") total++;
   }
}
)



n6.addEventListener("click", (e) => {
   q6.classList.add("hide");
   q7.classList.remove("hide");

   

   let a6 = document.querySelector("input[name='option6']:checked");
   if(a6){
   if (a6.value == "*(a+3)") total++;
   }
}
)



n7.addEventListener("click", (e) => {
   q7.classList.add("hide");
   q8.classList.remove("hide");
  
   let a7 = document.querySelector("input[name='option7']:checked");
   if(a7){
   if (a7 == "7") total++;
   }
}
)



n8.addEventListener("click", (e) => {
   q8.classList.add("hide");
   q9.classList.remove("hide");

   

   let a8 = document.querySelector("input[name='option8']:checked");
   if(a8){
   if (a8 == "x is an 8-bit integer") total++;
   }
}
)



n9.addEventListener("click", (e) => {
   q9.classList.add("hide");
   q10.classList.remove("hide");

 
   let a9 = document.querySelector("input[name='option9']:checked");
   if(a9){
   if (a9 == "do-while loop") total++;
   }
}
)

time.classList.add("time");
let i = 4;
let j = 59;


const inter = setInterval(() => {
   if(j == -1){
      if(i == -1){
         
         if (total >= 1) {   
            q1.classList.add("hide");
            con.classList.remove("hide");
            con.classList.add("cont");
            con.classList.add(".container");
            con.innerHTML = `<div class="container">
           Congratulations!! You have cleared the C-Language Advanced Level test
           <br><br>
           <p>Your Score : ${total}/10</p>
       </div>`
       let b = document.createElement("button");
        
        b.classList.add("finalbutton");
        b.innerHTML = `<a href="cadvans.html">NEXT >></a>`;
            con.after(b);
            clearInterval(inter);

            let r = document.createElement("button0");
            r.classList.add("showresult"); 
             r.innerHTML = `<a href = "../c-bia.html">Show Answers</a>`;
                 con.after(r);
            clearInterval(inter);
      
         }
            else{
               
               q1.classList.add("hide");
            sorry.classList.remove("hide");
            sorry.classList.add("sorryy");
            sorry.classList.add("sorry");
            sorry.innerHTML = `Oops! You could not clear the C-Language Advanced level test`;
            let b = document.createElement("button");
            
            b.classList.add("finalbutton");
            b.innerHTML = `<a href="../c-bia.html">NEXT >></a>`;
            sorry.after(b);
            clearInterval(inter);

            let r = document.createElement("button");
            r.classList.add("showresult"); 
             r.innerHTML = `<a href = "cbeggans.html">Show Answers</a>`;
                 con.after(r);
            clearInterval(inter);
      
      
      }
   }
      else{
         
         j = 59;
         i--;
        
      }
   }
   else{
     if(j < 10) time.innerHTML = `Time Reaming : ${i}:0${j}`
     else time.innerHTML = `Time Reaming : ${i}:${j}`
     j--;
     
   }
}, 1000);


submit.addEventListener("click", (e) => {
   q10.classList.add("hide");
   let a10 = document.querySelector("input[name='option0']:checked");
   if(a10){
   if (a10 == "8 bytes") total++;
   }
   console.log(total);
   if (total >= 1) {
      con.classList.remove("hide");
      con.classList.add("cont")
      con.innerHTML = `<div class="container">
     Congratulations!! You have cleared the C-Language Beginner Level test
     <br><br>
     <p>Your Score : ${total}/10</p>
 </div>`
 let b = document.createElement("button");
  
  b.classList.add("finalbutton");
  b.innerHTML = `<a href="../c-bia.html">NEXT >></a>`;
      con.after(b);
  let r = document.createElement("button");
            r.classList.add("showresult0"); 
             r.innerHTML = `<a href = "cbeggans.html">Show Answers</a>`;
                 con.after(r);
            clearInterval(inter);
   }
   else {
      let b = document.createElement("button");
      sorry.classList.remove("hide");
      sorry.classList.add("sorryy");
      sorry.innerHTML = `Oops! You could not clear the C-Language Beginner level test`;
      b.classList.add("finalbutton");
      b.innerHTML = `<a href="../c-bia.html">NEXT >></a>`;
      sorry.after(b);

      let r = document.createElement("button");
            r.classList.add("showresult"); 
             r.innerHTML = `<a href = "cbeggans.html">Show Answers</a>`;
                 con.after(r);
            clearInterval(inter);
   }
}
)