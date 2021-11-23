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
const Stars = document.querySelectorAll('.info-Hot .fa-star');
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

//Create Popup Login page
const Login = document.querySelectorAll('.Login');
Login.forEach(Login => {
    Login.addEventListener('click', (e) => {
        CreatePageLogin();
        ActiveClass();
        CheckLoginEmpty();
        CheckRegisterEmpty();
        ClosePopup();
    });
});


//Btn Top Scroll Page
const Btn = document.querySelector('.Top-Scroll');
window.onscroll = function() {
    this.scrollY >= 600 ? Btn.classList.add('active-top') : Btn.classList.remove('active-top')
}
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

//  Add Projucts to Cart
let AddCart = document.querySelectorAll('#Add-Cart');

AddCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (window.localStorage.getItem('Email')) {
            alert('Thank your For Login');
        } else {
            CreatePageLogin();
            ActiveClass();
            CheckLoginEmpty();
            CheckRegisterEmpty();
            ClosePopup();
        }
    });

});

/* Start Function with Page Login */
function CreatePageLogin() {
    const popLog = `<section class="popLog">
    <div class= 'container'>
            <div class='box-log'>
            <div class= 'info'>
            <h2 class='active' data-login="Login" id='login'>Login</h2>
            <h2 data-signup='signup'>Signup</h2>
            </div>
            <form name='form'>
            <div class='log'>
            <input type='email' data-login='Login' name='input' placeholder= 'Your Email' id='email-Login'/>
            <input type='password' data-login='Login'name='input'  placeholder= 'Your Password' id='password-Login'/>
            <input type='submit' data-login='Login' value='Login' id='BtnLogin'/>
            </div>
            <div class='signup'>
            <input type='text' data-signup='signup' name='input' value='' placeholder= 'First Name' id='firstuser-Signup' />
            <input type='text' data-signup='signup' name='input' value='' placeholder= 'Last Name'  id='lastuser-Signup'/>
            <input type='password' data-signup='signup' name='input' value='' placeholder= 'Your Password'  id='password-Signup'/>
            <input type='email' data-signup='signup' name='input' value='' placeholder= 'Your Email'  id='email-Signup'/>
            <input type='number' data-signup='signup' name='input' value='' placeholder= 'Your Phone'  id='phone-Signup'/>
            <input type='submit' data-signup='signup' value='Register'  id='signup'/>
            </div>
            </form>
            <span class='close'>x</span>
        </div>
    </div>
    </section>`
    document.body.insertAdjacentHTML('afterbegin', popLog);
}


function ActiveClass() {
    //Check input from  dataset
    const Checkdata = document.querySelectorAll('.popLog form input');
    const textdata = document.querySelectorAll('.popLog .info h2');
    textdata.forEach(text => {
        text.addEventListener('click', (e) => {
            textdata.forEach(text => {
                text.classList.remove('active');
                e.target.classList.add('active');
            });
            Checkdata.forEach(data => {
                data.innerHTML = '';
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
}

function CheckRegisterEmpty() {
    //Check with user Register
    let firstSignup = document.querySelector('#firstuser-Signup');
    let lastSignup = document.querySelector('#lastuser-Signup');
    let passwordSignup = document.querySelector('#password-Signup');
    let emailSignup = document.querySelector('#email-Signup');
    let phoneSignup = document.querySelector('#phone-Signup');
    let BtnSignup = document.querySelector('#signup');

    BtnSignup.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstSignup.value === "" || lastSignup.value === "" || passwordSignup.value === "" || emailSignup.value === "" || phoneSignup.value === "") {
            alert('Yes its not value');
        } else {
            //Set Data in LocalStorage
            window.localStorage.setItem('FirstName', firstSignup.value);
            window.localStorage.setItem('LastName', lastSignup.value);
            window.localStorage.setItem('Password', passwordSignup.value);
            window.localStorage.setItem('Email', emailSignup.value);
            window.localStorage.setItem('Phone', phoneSignup.value);
            //Change Signup to Login
            document.querySelectorAll('.log').forEach(log => {
                log.style.display = 'block';

                document.querySelectorAll('.signup').forEach(signup => {
                    signup.style.display = 'none';
                });
                // Change Class Active
                let Elements = document.querySelectorAll('.popLog .info h2');
                Elements.forEach(text => {
                    text.classList.remove('active');
                    document.querySelector('#login').classList.add('active');
                });
            });
        }
    });
}


function CheckLoginEmpty() {
    //Check with user Login
    let LoginBtn = document.querySelector('#BtnLogin');
    let emailLogin = document.querySelector('#email-Login')
    let PasswordLogin = document.querySelector('#password-Login')
    let setEmail = window.localStorage.getItem('Email');
    let setPassword = window.localStorage.getItem('Password');

    // check if data in local will login
    LoginBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (emailLogin.value === "" || PasswordLogin.value === "") {
            alert('its is Empty');

        } else if (setEmail.trim() == emailLogin.value && setPassword == PasswordLogin.value) {

            document.querySelector('.Header nav .Login').style.display = 'none';
            document.querySelector('.Header .Logout').style.display = 'block';
            // if Btn display none will change Text li
            if (document.querySelector('.Header nav .Login').style.display === 'none') {
                document.querySelector('.Header nav .WelcomeUser').innerHTML = `Welcome ${window.localStorage.getItem('FirstName')}`;
            }
            setTimeout(() => {
                document.querySelector('.popLog').remove();
            }, 1000);
        } else {
            alert('Email or Password Wrong!')
        }
    });

    // if will click in Logout will go in index page 
    document.querySelector('.Header .Logout').addEventListener('click', () => {
        setTimeout(() => {
            window.location = 'index.html';
        }, 1000);
    });
}

function ClosePopup() {

    // Close Pop Login
    const closePOP = document.querySelector('.popLog .close');
    closePOP.addEventListener('click', () => { document.querySelector('.popLog').remove() });
    // Close Pop Login with key
    document.onkeydown = function(e) {
        e.key == 'Escape' ? document.querySelector('.popLog').remove() : '';
    }
}

/* End Function with Page Login */