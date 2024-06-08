let inp = document.querySelector("input") ;
let btn = document.querySelector("button") ;
let ul = document.querySelector("ul") ; 
btn.addEventListener("click",function(){
    let listitem = document.createElement("li");
    listitem.innerText= inp.value;
    let delbtn = document.createElement("button") ;
    delbtn.innerText ="delete";
    delbtn.classList.add("del") ; 
    ul.appendChild(listitem) ; 
    listitem.appendChild(delbtn) ; 
    inp.value="";
});
ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let list = event.target.parentElement;
    list.remove();
    console.log("delete");
  }
});

