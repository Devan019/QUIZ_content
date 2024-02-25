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
   if(a1){
   console.log(a1);
   if (a1.value == "a") total++;
}



}
)

n2.addEventListener("click", (e) => {
   q2.classList.add("hide");
   q3.classList.remove("hide");
   

   let a2 = document.querySelector("input[name='option2']:checked");
   if(a2){
   if (a2.value == "a") total++;
   }
}
)

n3.addEventListener("click", (e) => {
   q3.classList.add("hide");
   q4.classList.remove("hide");
   
   let a3 = document.querySelector("input[name='option3']:checked");
   if(a3){
    if (a3.value == "a") total++;
   }
}
)



n4.addEventListener("click", (e) => {
   q4.classList.add("hide");
   q5.classList.remove("hide");
   
   let a4 = document.querySelector("input[name='option4']:checked");
   if(a4){
    if (a4.value == "c") total++;
   }
   
}
)

n5.addEventListener("click", (e) => {
   q5.classList.add("hide");
   q6.classList.remove("hide");

   

   let a5 = document.querySelector("input[name='option5']:checked");
   if(a5){
    if (a5.value == "d") total++;
   }
   
}
)



n6.addEventListener("click", (e) => {
   q6.classList.add("hide");
   q7.classList.remove("hide");

   

   let a6 = document.querySelector("input[name='option6']:checked");
   if(a6){
    if (a6.value == "c") total++;
   }
   
}
)



n7.addEventListener("click", (e) => {
   q7.classList.add("hide");
   q8.classList.remove("hide");
   
   let a7 = document.querySelector("input[name='option7']:checked");
   if(a7){
    if (a7.value == "b") total++;
   }
  
}
)



n8.addEventListener("click", (e) => {
   q8.classList.add("hide");
   q9.classList.remove("hide");

   

   let a8 = document.querySelector("input[name='option8']:checked");
   if(a8){
    if (a8.value == "c") total++;
   }
   
}
)



n9.addEventListener("click", (e) => {
   q9.classList.add("hide");
   q10.classList.remove("hide");

 
   let a9 = document.querySelector("input[name='option9']:checked");
   if(a9){
    if (a9.value == "a") total++;
   }
   
}
)



submit.addEventListener("click", (e) => {
   q10.classList.add("hide");
   let a10 = document.querySelector("input[name='option0']:checked");
   if(a10){
    if (a10.value == "b") total++;
   }
   
   console.log(total);
   if (total >= 1) {
      con.classList.remove("hide");
      con.classList.add("cont");
      con.innerHTML = `<div class="container">
     Congratulations!! You have cleared the HTML Advanced Level test
     <br><br>
     <p>Your Score : ${total}/10</p>
 </div>`
 let b = document.createElement("button");
  
  b.classList.add("finalbutton");
  b.innerHTML = `<a href="htmlaans.html">NEXT >></a>`;
      con.after(b);
   }
      else{
      sorry.classList.remove("hide");
      sorry.classList.add("sorryy");
      sorry.innerHTML = `Oops! You could not clear the HTML Advanced level test`;
      let b = document.createElement("button");
      
      b.classList.add("finalbutton");
      b.innerHTML = `<a href="htmlaans.html">NEXT >></a>`;
      sorry.after(b);

}}
)
