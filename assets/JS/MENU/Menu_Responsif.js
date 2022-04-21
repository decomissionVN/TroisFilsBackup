set_preferred_language();

function set_preferred_language(){
    let language = localStorage.getItem("language");
    if (!language){
        var userLang = navigator.language || navigator.userLanguage;
        let language_preferred = userLang.split('-');
        let language = language_preferred[0]
        alert("The language is: " + language);
        save_preferred_language(language);
    }
}

function save_preferred_language(language){
    window.localStorage.setItem('language', language);
    window.location.reload();
}

function User_logged(translation) {
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    console.log(userId);

    if (token && userId) {
        fetch('http://localhost:3000/api/auth/verifAuth', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access } }).then(response => response.json()).then(response => verifytoken(response, translation))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message);
            })
    } else {
        Add_Menu_responsif(translation);
    }
}

function verifytoken(response, translation) {
    console.log(response);
    if (response.message === 'Token is valid') {
        console.log('loggedin');
        Add_Menu_responsif_logged(translation);
    } else {
        console.log('Signedout');
        Add_Menu_responsif(translation);
    }
}

function Display_cookies() {
    let arecceptedCookies = window.localStorage.getItem('acceptedCookies');
    console.log(arecceptedCookies);
    if (!arecceptedCookies) {
        let language = localStorage.getItem("language");
        console.log('THE COOKIES DISPLAY');
        Display_cookies_translated(language);
    } else {
        document.getElementById('popup_cookies').style.display = "none";
    }
}

function Display_cookies_translated(language) {
    if (language === 'fr'){
        let content = `
        <p class="pr-5">Nos services peuvent utililer les cookies pour personnaliser notre plateforme. Veuillez vous référer à nos conditions d'utilisation.</p>
        <div class="row w-100 text-center">
        <div class="col-12 col-md-6 mb-3">
            <a href="#" onclick="acceptCookies()" class="button mt-4">J'accepte</a>
        </div>
        <div class="col-12 col-md-6 mb-3">
            <a href="https://lesthesdemilie.net/CGU/CGU.html" class="button mt-4">Nos CGUs</a>
        </div>
        </div>`

        document.getElementById('CookiesMessage').innerHTML = content;
    } else if (language === 'en'){

        let content = 
        `<p class="pr-5">Our services might use cookies in order to personalize our platform. You can read all about it in our CGU.</p>
        <div class="row w-100 text-center">
        <div class="col-12  justify-content-center">
            <a href="#" onclick="acceptCookies()" class="button mt-4">I accept</a>
            <a href="https://decomissionvn.github.io/TroisFilsBackup/CGU/CGU.html" class="button mt-4">Privacy Policy</a>
        </div>
        
        </div>`

        document.getElementById('CookiesMessage').innerHTML = content;
    }
}

function acceptCookies() {
    event.preventDefault();
    window.localStorage.setItem('acceptedCookies', 'yes');
    document.getElementById('popup_cookies').style.display = "none";
}

function Close_Popup_cookies() {
    document.getElementById('popup_cookies').style.display = "none";
    event.preventDefault();
    window.localStorage.setItem('acceptedCookies', 'no');
    document.getElementById('popup_cookies').style.display = "none";
}


function Add_Menu_responsif(translation) {
    let menu_responsif = `

<div id="popup_cookies">
    <a href="#" onclick="Close_Popup_cookies()"><img class="close_icon_left" src="https://res.cloudinary.com/viviennoel07/image/upload/v1650553047/Close_black_xszt7p.png" alt="Close"/></a>
    <div id="CookiesMessage">
    </div>
</div>

<div class="whattsapp">
<a href="https://api.whatsapp.com/send?phone=33649349611" alt="Contact">
   <img src='https://res.cloudinary.com/viviennoel07/image/upload/v1650553047/whattsapp_iessjr.png' class="whattsapp_menu" id="whatsapp_menu" alt="website" />
</a>
</div>

<!--Popup Login / Signup or Later -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
<div class="Popup__background_dark" id="Popup__background_dark" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000"></div>
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="hhttps://res.cloudinary.com/viviennoel07/image/upload/v1650553047/Close_black_xszt7p.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                <div id="Explications_general"></div>
                    <div class="d-flex justify-content-around pt-5 pb-1 Menu_Auth">

                        <a href="#Popup__Auth" onclick="Login_content()" id="Popup__Login"><b>${translation.Login}</b></a>

                        <h3>|</h3>

                        <a href="#Popup__Auth" onclick="Signup_content()" id="Popup__Signup">${translation.Signup}</a>

                    </div>
                    <div id="Auth__Form" class="pb-5 pt-4">
                        <h2>Login</h2>
                        <p>${translation.Welcome_Login}</p>
                        <form method="post" id="contact" autocomplete="on">
                            <label for="Email">${translation.Email}</label>
                            <input type="text" name="Email" id="Email" placeholder="Email" required>

                            <label for="Password">${translation.Password}</label>
                            <input type="text" name="Password" id="Password" placeholder="Password" required>

                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Login()">${translation.Login}</a>
                            </div>
                            <div class="mt-5" id="submitorder_div">
                                <a href="#" class="button" id="submitorder" onclick="Close_Popup()">${translation.Continue_without}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- The languages are diplayed in the top -->
    <header class="d-flex d-lg-none justify-content-around hover__background" id="header__language-background">
        <a href="#" onclick="choose_language('en')" class="header__language-choice" id="header__english">English</a><div>|</div>
        <a href="#" onclick="choose_language('fr')" class="header__language-choice" id="header__french">Français</a>
    </header>

    <header class="d-flex justify-content-between d-lg-none wrapp__large hover__background">

        <!-- Button to drop the main menu -->
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/menu.png"/>
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/index.html">${translation.Home}</a>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html">${translation.About}</a>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/ladies/Ladies.html">${translation.Ladies}</a>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/gentlemen/Gentlemen.html">${translation.Gentlemen}</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="mailto:vivien.noeldev@gmail.com">${translation.Contact_us}</a>
            </div>
        </div>

        <!-- Button to sign-in or sign out -->
        <div class="btn-group">
        <button type="button" class="btn btn-secondary profile dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/profile.png"/>
        </button>
            <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item Login_Menu" onclick="Login_Menu()" id="Login_Menu_Mobile" href="#">${translation.Login}</a>
                <a class="dropdown-item Signup_Menu" onclick="Signup_Menu()" id="Signup_Menu_Mobile" href="#">${translation.Signup}</a>
            </div>
        </div>

    </header>

    <!-- HEADER AND LANGUAGES FOR DESKTOP VIEW -->
    <header class="d-none justify-content-between d-lg-flex hover__background row" id="menu__top-pages" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="2100">

        <!-- The menu appears in the Desktop view-->
        <div class="menu d-none col-8 d-lg-flex">
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/index.html">${translation.Home}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html">${translation.About}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/ladies/Ladies.html">${translation.Ladies}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/gentlemen/Gentlemen.html">${translation.Gentlemen}</a></div>
            <div class="menu"><a href="https://decomissionvn.github.io/TroisFilsBackup/home/Contact.html">${translation.Contact_us}</a></div>
        </div>

        <!-- The drop down menu Language & Login appear beside in Desktop-->
        <!-- Button to drop the languages-->
        <div class="col-lg-4 text-right" data-aos="fade" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="1500">
            <div class="btn-group mr-4">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/language.png"/>
            </button>
                <div class="dropdown-menu dropdown-menu-right header__language-choice">
                <ul>
                    <li><a href="#" onclick="choose_language('en')" id="header__english">English</a></li>
                    <li><a href="#" onclick="choose_language('fr')" id="header__french">Français</a></li>
                </ul>
                </div>
            </div>

            <!-- Button to sign-in or sign out -->
            <div class="btn-group mr-4">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/profile.png"/>
        </button>
                <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item Login_Menu" onclick="Login_Menu()" id="Login_Menu_Desktop" href="#">${translation.Login}</a>
                    <a class="dropdown-item Signup_Menu" onclick="Signup_Menu()" id="Signup_Menu_Desktop" href="#">${translation.Signup}</a>
                </div>
            </div>
        </div>
    </header>`

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;
        
    Display_cookies();
}





function Add_Menu_responsif_logged(translation) {
    let menu_responsif = `

<div id="popup_cookies">
    <a href="#" onclick="Close_Popup_cookies()"><img class="close_icon_left" src="https://lesthesdemilie.net/assets/IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
    <div id="CookiesMessage">
    </div>
</div>

<!--Popup Explications -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2" id="Explications_general">
                    
                </div>
            </div>


        </div>
    </div>


<!-- The languages are diplayed in the top -->
    <header class="d-flex d-lg-none justify-content-around hover__background" id="header__language-background">
        <a href="#" onclick="choose_language('en')" class="header__language-choice" id="header__english">English</a><div>|</div>
        <a href="#" onclick="choose_language('fr')" class="header__language-choice" id="header__french">Français</a>
    </header>

    <header class="d-flex justify-content-between d-lg-none wrapp__large hover__background">

        <!-- Button to drop the main menu -->
        <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/menu.png"/>
        </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/index.html">${translation.Home}</a>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html">${translation.About}</a>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/ladies/Ladies.html">${translation.Ladies}</a>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/gentlemen/Gentlemen.html">${translation.Gentlemen}</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/Contact.html">${translation.Contact_us}</a>
            </div>
        </div>


        <!-- Button to sign-in or sign out -->
        <div class="btn-group">

        <div class="menu_Dashboard mr-5">
            <a id="Menu_Link_My_Dashboard" href="https://decomissionvn.github.io/TroisFilsBackup/dashboard/Dashboard.html">${translation.Dashboard}</a>
        </div>
        <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/profile.png"/>
        </button>
            <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Mobile" href="#">${translation.Signout}</a>
            </div>
        </div>

    </header>

    <!-- HEADER AND LANGUAGES FOR DESKTOP VIEW -->
    <header class="d-none justify-content-between d-lg-flex hover__background row" id="menu__top-pages" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="2100">

        <!-- The menu appears in the Desktop view-->
        <div class="menu d-none col-7 d-lg-flex">
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/index.html">${translation.Home}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html">${translation.About}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/ladies/Ladies.html">${translation.Ladies}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://decomissionvn.github.io/TroisFilsBackup/gentlemen/Gentlemen.html">${translation.Gentlemen}</a></div>
            <div class="menu"><a href="https://decomissionvn.github.io/TroisFilsBackup/home/contact.html">${translation.Contact_us}</a></div>
        </div>

        <!-- The drop down menu Language & Login appear beside in Desktop-->
        <!-- Button to drop the languages-->
        <div class="col-lg-5 m-auto text-right" data-aos="fade" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="1500">
            <div class="menu d-none d-lg-flex">
                <div class="menu_Dashboard"><a href="https://decomissionvn.github.io/TroisFilsBackup/dashboard/Dashboard.html">${translation.Dashboard}</a></div>
            
            <div class="btn-group mr-4">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/language.png"/>
            </button>
                <div class="dropdown-menu dropdown-menu-right header__language-choice">
                <ul>
                    <li><a href="#" onclick="choose_language('en')" id="header__english">English</a></li>
                    <li><a href="#" onclick="choose_language('fr')" id="header__french">Français</a></li>
                </ul>
                </div>
            </div>

            <!-- Button to sign-in or sign out -->
            <div class="btn-group mr-5">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/GENERAL/profile.png"/>
            </button>
                <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Desktop" href="#">${translation.Signout}</a>
                </div>
            </div>
        </div>

        </div>
    </header>`

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;

    Display_cookies();
}

function choose_language(language){
    event.preventDefault();
    console.log(language);
    window.localStorage.setItem('language', language);
    window.location.reload();
}