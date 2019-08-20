const app = document.getElementById('app');
const contents = document.querySelectorAll('#content');

let open = false;
btn.addEventListener("click", function(){
    open?
    app.classList = "app disactive"
    :
    app.classList = "app active";
    open = !open;
    
});


let options = {
    threshold: 0.35,
    rootMargin: "200px 0px 200px 0px" 
}

const observerForContents = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
       if (entry.isIntersecting){
            entry.target.classList.add('seen');
        } else {
            entry.target.classList.remove('seen')
        }
    });
}, options);
contents.forEach(elements=>{
    observerForContents.observe(elements);
})