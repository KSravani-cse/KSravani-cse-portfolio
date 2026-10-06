document.addEventListener("DOMContentLoaded",()=>{
const root=document.documentElement,toggle=document.getElementById("themeToggle"),icon=toggle.querySelector("i");
const form=document.getElementById("contactForm"),message=document.getElementById("formMessage"),top=document.getElementById("backToTop");
const theme=localStorage.getItem("sravani-theme")||"light";root.setAttribute("data-theme",theme);setIcon(theme);
toggle.addEventListener("click",()=>{const next=root.getAttribute("data-theme")==="dark"?"light":"dark";root.setAttribute("data-theme",next);localStorage.setItem("sravani-theme",next);setIcon(next)});
function setIcon(t){icon.className=t==="dark"?"bi bi-sun-fill":"bi bi-moon-stars-fill"}
form.addEventListener("submit",e=>{e.preventDefault();let valid=true;[...form.querySelectorAll("input,textarea")].forEach(f=>{f.classList.remove("is-invalid");if(!f.checkValidity()){f.classList.add("is-invalid");valid=false}});message.className="alert";if(!valid){message.classList.add("alert-danger");message.textContent="Please correct the highlighted fields and try again."}else{message.classList.add("alert-success");message.textContent="Message validated successfully! This demo form is ready for backend integration.";form.reset()}message.classList.remove("d-none")});
window.addEventListener("scroll",()=>top.classList.toggle("show",window.scrollY>500));top.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll("#mainNav .nav-link").forEach(link=>link.addEventListener("click",()=>{const nav=document.getElementById("mainNav");if(nav.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(nav).hide()}));
});