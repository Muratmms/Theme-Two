(function (document) {
    const markers = [...document.querySelectorAll('mark')];

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.8
    });

    markers.forEach(mark => {
        observer.observe(mark);
    });

})(document);


//
// $(document).ready(function (){
//     var tl = gsap.timeline({ repeat: -1 });
//     tl.to("h1", 30, { backgroundPosition: "-960px 0" });
// });

