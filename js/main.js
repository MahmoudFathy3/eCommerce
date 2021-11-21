//Add Class open Setting
const icon = document.querySelector('.setting .icon');
icon.addEventListener('click', () => {
    document.querySelector('.setting .icon i').classList.toggle('fa-spin');
    document.querySelector('.setting .setting-page').classList.toggle('open');
});

let localStorage = window.localStorage.getItem('data-color');
if (localStorage !== null) {

    document.documentElement.style.setProperty("--main-color", localStorage);

    document.querySelectorAll('.setting li').forEach(el => {
        el.classList.remove('active');

        if (`#${el.dataset.color}` === localStorage) {
            el.classList.add('active');
        }
    });
} else {
    document.querySelectorAll('.setting li').forEach(el => {
        el.classList.remove('active');
    });
}

//Change color From Setting
const ChangeColor = document.querySelectorAll('.setting li');
ChangeColor.forEach(li => {
    li.addEventListener('click', (e) => {
        ChangeColor.forEach(li => {
            li.classList.remove('active');
            e.target.classList.add('active');
        });
        document.documentElement.style.setProperty("--main-color", `#${e.target.dataset.color}`);
        window.localStorage.setItem('data-color', `#${e.target.dataset.color}`);
    });
});

// Add Class Active From Menu
let menu = document.querySelector('.nav-menu');
let navBar = document.querySelectorAll('.Header .toggle');
navBar.forEach((li) => {
    menu.addEventListener('click', () => {
        menu.classList.toggle('active-border');
        li.classList.toggle('active-menu');
    });
});
//Close Menu From KeyWord
document.onkeyup = function(e) {
    navBar.forEach(li => {
        if (e.key === 'Escape') {
            menu.classList.remove('active-border');
            li.classList.remove('active-menu');
        }
    });
}


// // Start Slidershow
const Slider = document.querySelector('.slider');
const SliderImage = document.querySelectorAll('.slide img');

//counter
let counter = 1;
let size = SliderImage[0].clientHeight;

Slider.style.transform = 'translateY(' + (-size * counter) + 'px)';

Slider.addEventListener('transitionend', () => {
    if (SliderImage[counter].id === 'lastClone') {
        Slider.style.transition = 'none';
        counter = SliderImage.length - 2;
        Slider.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
    if (SliderImage[counter].id === 'firstClone') {
        Slider.style.transition = 'none';
        counter = SliderImage.length - counter;
        Slider.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
});
setInterval(() => {
    if (counter >= SliderImage.length - 1) return;
    Slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    Slider.style.transform = 'translateY(' + (-size * counter) + 'px)';
}, 5000);


// Add class From Star Projuct
const Stars = document.querySelectorAll('.fa-star');
Stars.forEach((star, ClickStar) => {
    star.addEventListener('click', (e) => {
        Stars.forEach((otherStar, otheridx) => {
            if (otheridx <= ClickStar) {
                otherStar.classList.add('star-color');
            } else {
                otherStar.classList.remove('star-color');
            }
        });
    });
});

//Create Popup Login
const Login = document.querySelectorAll('.Login');
Login.forEach(Login => {
    Login.addEventListener('click', (e) => {
        const popLog = `<section class="popLog">
    <div class= 'container'>
            <div class='box-log'>
            <div class= 'info'>
            <h2 class='active' data-login="Login">Login</h2>
            <h2 data-signup='signup'>Signup</h2>
            </div>
            <form name='form'>
            <div class='log'>
            <input type='email' data-login='Login' name='input' placeholder= 'Your Email' />
            <input type='password' data-login='Login'name='input'  placeholder= 'Your Password' />
            <input type='submit' data-login='Login' value='Login' />
            </div>

            <div class='signup'>
            <input type='text' data-signup='signup' name='input' placeholder= 'First Name' class='first'/>
            <input type='text' data-signup='signup' name='input' placeholder= 'Last Name' class='last'/>
            <input type='password' data-signup='signup' name='input' placeholder= 'Your Password' />
            <input type='email' data-signup='signup' name='input' placeholder= 'Your Email' />
            <input type='number' data-signup='signup' name='input' placeholder= 'Your Phone' />
            <input type='submit' data-signup='signup' value='Register' />
            </div>

            </form>
            <span class='close'>x</span>
        </div>
    </div>
    </section>`
        document.body.insertAdjacentHTML('afterbegin', popLog);

        //Check input from  dataset
        const Checkdata = document.querySelectorAll('.popLog form input');
        const textdata = document.querySelectorAll('.popLog .info h2')
        textdata.forEach(text => {
            text.addEventListener('click', (e) => {
                textdata.forEach(text => {
                    text.classList.remove('active');
                    e.target.classList.add('active');
                });
                Checkdata.forEach(data => {
                    if (e.target.dataset.login) {
                        document.querySelectorAll('.log').forEach(log => {
                            log.style.display = 'block';
                        });
                    } else {
                        document.querySelectorAll('.log').forEach(login => {
                            login.style.display = 'none';
                        });
                    }
                    if (e.target.dataset.signup) {
                        document.querySelectorAll('.signup').forEach(signup => {
                            signup.style.display = 'block';
                        });

                    } else {
                        document.querySelectorAll('.signup').forEach(signup => {
                            signup.style.display = 'none';
                        });
                    }
                });
            });
        });

        // Close Pop Login
        const closePOP = document.querySelector('.popLog .close');
        closePOP.onclick = function() {
                document.querySelector('.popLog').remove();
            }
            // Close Pop Login with key
        document.onkeydown = function(e) {
            if (e.key == 'Escape') {
                document.querySelector('.popLog').remove();
            }
        }
        let inputs = document.querySelectorAll('.popLog form input[name=input]');
        let submits = document.querySelectorAll('.popLog form input[type=submit]');
        submits.forEach(submit => {
            submit.addEventListener('click', (e) => {
                inputs.forEach(input => {
                    if (input.value !== '') {
                        document.querySelector('.popLog').remove();
                    } else {
                        e.preventDefault();
                    }
                });
            });
        });
    });
});