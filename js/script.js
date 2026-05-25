$(document).ready(function(){

    const date = new Date();
    const hour = date.getHours();
    let message = '';
    if(hour <= 12){
        message = "Good Morning";
    }
    if(hour > 12){
        message = "Good Afternoon"
    }
    if(hour >= 17){
        message = "Good Evening"
    }
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // នៅពេល Scroll មកដល់៖ ថែម Class "show" ដើម្បីបង្ហាញ Animation
            entry.target.classList.add('show');
        } else {
            // នៅពេល Scroll ចេញបាត់៖ ដក Class "show" ចេញវិញ ដើម្បីឱ្យវាអាចលោតម្ដងទៀត
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // កំណត់ឱ្យដើរនៅពេលឃើញអក្សរប្រហែល 10%
});

const hiddenElements = document.querySelectorAll('.animate-text');
hiddenElements.forEach((el) => observer.observe(el));
    
})