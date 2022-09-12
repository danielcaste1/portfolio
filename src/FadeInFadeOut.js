const containers = document.querySelectorAll(".fade-in");

const options = {
    treshold: 1,
    rootMargin: "0px 0px -100px 0px"
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.toggle("appear", entry.isIntersecting); 
            observer.unobserve(entry.target);
        }
    });
}, options)


export { containers, observer }