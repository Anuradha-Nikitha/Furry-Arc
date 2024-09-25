
function brandName() {
    document.querySelectorAll(".brand").forEach(function(element){
        var one = document.createElement("span");
        var two = document.createElement("span");
    
        one.classList.add("one");
        two.classList.add("two");
    
        two.innerHTML = element.innerHTML;
        one.appendChild(two);
    
        element.innerHTML = "";
        element.appendChild(one);
    });
}
brandName();

var t2 = gsap.timeline()
t2
    .from(".two span", {
        x: 100,
        stagger: .2,
        duration: 1.2,
        ease: Power3.easeInOut
    })
    .to(".one .two", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#fs", {
        height: 0,
        duration: 0.5,
        ease: Expo.easeInOut
    })
    .to("#ele", {
        height: "100%",
        duration: 2,
        delay: -2,
        ease: Expo.easeInOut 
    })
    .to("#white", {
        height: "100%",
        duration: 2,
        delay: -1.6,
        ease: Expo.easeInOut
    })

const logoElement = document.querySelector('.wrapper .logo');
const anchorElement = logoElement.querySelector('a');

logoElement.addEventListener('mouseover', function() {
    logoElement.classList.add('hovered-logo');

    const iconElement = document.createElement('i');
    iconElement.className = 'fa-solid fa-paw';

    anchorElement.textContent = 'AniMora ';
    anchorElement.appendChild(iconElement);
});

logoElement.addEventListener('mouseout', function() {
    logoElement.classList.remove('hovered-logo');
    anchorElement.textContent = 'AM';
});

