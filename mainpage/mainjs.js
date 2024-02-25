let sub = document.querySelector(".sub");
let cal = document.querySelector(".cal");
let profile_name = document.querySelector(".profile");
let temp_str= "";

let toper = true;


document.querySelector(".form").classList.add(".formremove");
sub.addEventListener("click",(e) => {
  console.log(form.first.value,form.last.value,eval(document.querySelector(".cal").value));
  
  temp_str = form.first.value +"_@" + eval(cal.value)%10 + form.last.value;

  profile_name.innerHTML = `${temp_str}`

  document.querySelector(".nice").innerHTML = "";

  profile_name.classList.add("pro");

  document.querySelector(".form").innerHTML = "";

  document.querySelector(".form").classList.add("formremove");

  document.querySelector(".aboutquiz").classList.add("afterpage");

}
)

let pro = document.querySelector(".pro");

profile_name.addEventListener("click",(e) => {
   pro.classList.add("divbox");
}
)

// let menu = document.querySelector(".menu");

// menu.addEventListener("click",(e) => {
//   let div= document.createElement("div");
//   div.innerHTML = `<div>HOME</div>
//   <div>ABOUT US</div>
//   <div>PROFILE</div>`
//   div.append(menu);
// }
// )




