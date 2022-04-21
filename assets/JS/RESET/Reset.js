Is_logged();

function Is_logged() {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token !== null && userId !== null) {
        window.location.replace("../dashboard/Dashboard.html")
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        Display_Form()
    }
}

function Display_Form() {
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            Welcome_Reset : "Vous avez oublié votre mot de passe?",
            Password : "Votre mot de passe",
            Password_Empty : "Veuillez choisir un mot de passe",
            Password_Strong : "Pour votre sécurité, le mot de passe doit contenir 6 à 20 caractères dont un nombre, une majuscule et une minuscule",
            Password_confirm : "Confirmation du mot de passe",
            Password_Different : "Le mot de passe ne correspond pas!",
            Modify : "Modifier",
            Modified : "Mot de passe modifié avec succès",
        }
        Display_Form_translated(translation)
    } else if (language === 'en'){
        let translation = {
            Welcome_Reset : "Did you forgot your password?",
            Password : "Your password",
            Password_Empty : "Please choose your password",
            Password_Strong : "For your security, your password must be 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter",
            Password_confirm : "Password confirmation",
            Password_Different : "The password doesn't match!",
            Modify : "Reset",
            Modified : "Password modified successfully",
        }
        Display_Form_translated(translation)
    }
}

function Display_Form_translated(translation) {
    let content = 
    `<h2 class="w-100 text-center mt-5">${translation.Welcome_Reset}</h2>
    <form class="w-100 text-center mt-5" method="post" id="password_reset_form" autocomplete="on">
         
         <label class="w-100" for="Password">${translation.Password}</label>
         <input type="text" name="Password" id="Password" placeholder="${translation.Password}" required>
         <div id="Password_warn">${translation.Password_Empty}</div>
         <div id="Password_warn_strong">${translation.Password_Strong}</div>


         <label class="w-100 mt-5" for="Password">${translation.Password_confirm}</label>
         <input type="text" name="Password" id="Password" placeholder="${translation.Password}" required>
         <div id="Password_warn_different">${translation.Password_Different}</div>
         <div id="Password_warn2">${translation.Password_Empty}</div>

         <div class="mt-5">
             <a href="#" class="button" id="submitorder" onclick="Modify_Password()">${translation.Modify}</a>
         </div>
 </form>
 
 <div class="w-100 text-center mt-5" id="Password_modified"><h3>${translation.Modified}</h3></div>`

 document.getElementById('Reset_Password').innerHTML = content;
}

function Modify_Password(){
    event.preventDefault();
    Clear_Style_Reset_Form()
    let inputOrder = document.getElementsByTagName("input");
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (inputOrder[2].value === ""){
        document.getElementById('Password_warn').style.display = "block";
    } else if (inputOrder[3].value === ""){
        document.getElementById('Password_warn2').style.display = "block";
    } else if (inputOrder[3].value !== inputOrder[2].value) {
        document.getElementById('Password_warn_different').style.display = "block";
    } else if (inputOrder[2].value.match(passw)) {
        Modify_Password_verified()
    } else {
        document.getElementById('Password_warn_strong').style.display = "block";
    }
}

function Clear_Style_Reset_Form(){
    document.getElementById('Password_warn').style.display = "none";
    document.getElementById('Password_warn2').style.display = "none";
    document.getElementById('Password_warn_different').style.display = "none";
    document.getElementById('Password_warn_strong').style.display = "none";
}

function Modify_Password_verified() {
    let queryParams = new URLSearchParams(window.location.search);
    var token = queryParams.get('token');
    var inputOrder = document.getElementsByTagName("input");

    let user = {
        token: token,
        password : inputOrder[2].value
    }

    fetch('http://localhost:3000/api/auth/ModifyPassword', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(user) }).then(response => response.json()).then(response => display(response))
        .catch(function (error) {
            console.log('ERROR' + error.message)
        })
}

function display(response) {
    console.log(response);
    document.getElementById('Password_modified').style.display = "block";
    document.getElementById('password_reset_form').style.display = "none";
    
}