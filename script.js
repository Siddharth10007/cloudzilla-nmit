/* =========================================
   1. THEME TOGGLE (Slider Logic)
   ========================================= */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const checkboxes = document.querySelectorAll('#theme-toggle-checkbox');
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        checkboxes.forEach(cb => cb.checked = true);
    } else {
        document.documentElement.removeAttribute('data-theme');
        checkboxes.forEach(cb => cb.checked = false);
    }
}

function toggleTheme(event) {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('#theme-toggle-checkbox');
    
    // Sync all checkboxes
    checkboxes.forEach(cb => cb.checked = isChecked);
    
    if (isChecked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Run on page load
initializeTheme();

/* =========================================
   2. MOBILE MENU
   ========================================= */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger i');
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
        hamburgerIcon.style.transform = 'rotate(90deg)';
    } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
        hamburgerIcon.style.transform = 'rotate(0deg)';
    }
}

/* =========================================
   3. TYPEWRITER EFFECT
   ========================================= */
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

/* =========================================
   4. MODAL & COUNTDOWN
   ========================================= */
window.addEventListener('load', function() {
    if(document.getElementById('event-modal')) {
        setTimeout(function() {
            document.getElementById('event-modal').style.display = 'flex';
        }, 1000);
    }
});

function closeModal() {
    document.getElementById('event-modal').style.display = 'none';
}

const countDownDate = new Date("Feb 28, 2026 10:00:00").getTime();
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

/* =========================================
   5. MOBILE SCROLL FOCUS
   ========================================= */
if (window.innerWidth < 768) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('mobile-focus');
            else entry.target.classList.remove('mobile-focus');
        });
    }, { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 });

    const cards = document.querySelectorAll('.glow-card, .schedule-card');
    cards.forEach(card => observer.observe(card));
}