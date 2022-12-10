var qns = document.getElementsByClassName("list_item");
var button = document.getElementsByClassName("open_item");
var mark = document.getElementsByClassName("mark");
var content = document.getElementsByClassName("content");
for (let i = 0; i < qns.length; i++) {
  qns[i].addEventListener("click",()=>{
    button[i].classList.toggle("active");
    mark[i].classList.toggle("expanded");
    content[i].classList.toggle("active");
  })
}
