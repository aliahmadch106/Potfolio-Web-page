
window.addEventListener("load", function() {
        checkScreenOrientation();
        });
let mainpage = document.getElementById("main-pages")
        window.addEventListener("orientationchange", function() {
        checkScreenOrientation();
        });

        function checkScreenOrientation() {
        if (window.matchMedia("(orientation: portrait)").matches) {
                console.log("You are in portrait mode");




            
                // Select all SVG icons
const icons = document.querySelectorAll('footer svg');

// Add event listener to each icon
icons.forEach((icon) => {
        icon.addEventListener('click', () => {
    // Remove transform from all icons
        // icons.forEach((i) => i.style.transform = '');
        // icons.forEach((i) => i.style.background = '');
        icons.forEach((i) => i.style.fill = '');
        // icons.forEach((i) => i.style.border = '');

    // Add transform to clicked icon
        // icon.style.transform = 'translateY(-40px) scale(1.3, 1.3)';
        // icon.style.background = '#f84600';
        icon.style.fill = '#f84600';
        // icon.style.border = '8px solid #FFFFFF';
        });
});



        } else {
                console.log("You are in landscape mode");

                const main = document.querySelector('main');
                const nav = document.querySelector('nav');
                const icon = document.getElementById("icon");
                main.style.transition = "1s"

                icon.addEventListener('click', (event) => {

                                icon.style.display = "none"
                                main.style.transform = "perspective(1000px) rotateX(50deg) translateY(20px) scale(0.75, 0.9)"
                                main.style.borderRadius = "30px"
                                nav.style.display = "flex"                        });
                main.addEventListener('click', (event) => {

                                icon.style.display = "flex"
                                main.style.transform = "none"
                                main.style.borderRadius = "0px"
                                nav.style.display = "none"
                                });
                                }
        }


        const messagebox = document.getElementById('messagebox');
        const loginbtnmobile = document.getElementById('loginbtnmobile');
        const loginbtn = document.getElementById('loginbtn');
        const login = document.getElementById('login');
        const signup = document.getElementById('signup');
        const logsignup = document.getElementById('logsignup');
        const closebtn = document.querySelectorAll("btn");
        const loginspan = document.getElementById("loginspan");
        const signupapan = document.getElementById("signupapan");

        messagebox.addEventListener('click', (event) => {

            logsignup.style.animation = "press 0.2s ease-in-out"
            });
        loginbtnmobile.addEventListener('click', (event) => {

            logsignup.style.display = "flex"
            login.style.display = "flex"
            signup.style.display = "none"
            });
        loginbtn.addEventListener('click', (event) => {

            logsignup.style.display = "flex"
            login.style.display = "flex"
            signup.style.display = "none"
            });
        closebtn.forEach((closebtn) => {
                closebtn.addEventListener('click', (event) => {

                    logsignup.style.display = "none"
                    });
        });
        signupapan.addEventListener('click', (event) => {

            login.style.display = "none"
            signup.style.display = "flex"
            });
        loginspan.addEventListener('click', (event) => {

            login.style.display = "flex"
            signup.style.display = "none"
            });














        const card = document.getElementById('card');

// Event listener for mouse movement on the card
card.addEventListener('mousemove', (e) => {
    // Calculate the center point of the card
        const rect = card.getBoundingClientRect();
    // Increase the movement range by dividing with a smaller value (10)
        const xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 10;
        const yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 10;

    // Apply 3D rotation to the card based on the mouse position
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset card position when the mouse leaves the card area
card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});








document.addEventListener('DOMContentLoaded', function() {
    const circularProgress = document.querySelectorAll('.circular-progress');
    circularProgress.forEach(progress => {
        const value = progress.getAttribute('data-percentage');
        const progressValue = progress.querySelector('.progress-value');
        let startValue = 0;
        const speed = 50;

        let progress_bar = setInterval(() => {
            startValue++;
            progressValue.textContent = `${startValue}%`;
            progress.style.background = `conic-gradient(#f84600 ${startValue * 3.6}deg, var(--scroll-back) ${startValue * 3.6}deg)`;
            if (startValue == value) {
                clearInterval(progress_bar);
            }
        }, speed);
    });
});


// Get the sun and moon icons
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const logoblack = document.getElementById('logoblack');
const logowhite = document.getElementById('logowhite');
const img2 = document.getElementById('img2');
const img1 = document.getElementById('img1');

// Add event listener to the sun icon
sunIcon.addEventListener('click', () => {
  // Hide the sun icon
    sunIcon.style.display = 'none';

    // Show the moon icon
    moonIcon.style.display = 'flex';
    logowhite.style.display = 'none';
    logoblack.style.display = 'block';
    img2.style.display = 'none';
    img1.style.display = 'block';


  // Add the darkmode class to the body
    document.body.classList.remove('darkmode');
});

// Add event listener to the moon icon
moonIcon.addEventListener('click', () => {
  // Hide the moon icon
    moonIcon.style.display = 'none';

  // Show the sun icon
    sunIcon.style.display = 'flex';
    logoblack.style.display = 'none';
    logowhite.style.display = 'block';
    img2.style.display = 'block';
    img1.style.display = 'none';



  // Remove the darkmode class from the body
    document.body.classList.add('darkmode');
});

