/* Mobile Menu Toggle */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

/* Modal Logic */
window.addEventListener('load', function() {
    // Show modal after 1 second delay for smooth effect
    setTimeout(function() {
        document.getElementById('event-modal').style.display = 'flex';
    }, 1000);
});

function closeModal() {
    document.getElementById('event-modal').style.display = 'none';
}

/* Typewriter Effect */
const words = ["CLOUDZILLA", "THINKERS", "ARCHITECTS", "DESIGNERS"];
let i = 0;
function typeWriter() {
    const textDisplay = document.querySelector(".typewriter-text");
    if(!textDisplay) return; 
    
    const currentWord = words[i];
    let charIndex = 0;
    
    function type() {
        if (charIndex < currentWord.length) {
            textDisplay.textContent += currentWord.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); 
        } else {
            setTimeout(erase, 2000); 
        }
    }
    function erase() {
        if (charIndex > 0) {
            textDisplay.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            i = (i + 1) % words.length; 
            setTimeout(type, 500);
        }
    }
    type();
}
document.addEventListener("DOMContentLoaded", typeWriter);

/* Countdown to Feb 27, 2026 */
const countDownDate = new Date("Feb 27, 2026 10:00:00").getTime();
if(document.querySelector(".countdown-container") || document.getElementById("days")) {
    setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if (distance > 0 && document.getElementById("days")) {
            document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            if(document.getElementById("seconds")) {
                 document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
            }
        }
    }, 1000);
}