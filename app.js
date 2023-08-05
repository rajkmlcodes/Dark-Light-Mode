const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    
    if(this.classList.toggle('bi-brightness-high-fill'))
    {
        body.style.background = "#fff";
        body.style.color = "#222";
        body.style.transition = "0.55s";
    }
    else 
    {
        body.style.background = "#222";
        body.style.color = "#fff";
        body.style.transition = "0.55s";
    }
})