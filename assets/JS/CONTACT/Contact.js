eventListenerFunction()
is_logged_in();

function is_logged_in() {
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    if (token && userId) {
        fetch('http://localhost:3000/api/auth/verifAuth', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access } }).then(response => response.json()).then(response => display_button_correct(response))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message);
            })
    } else {
        document.getElementById("button_contact_login").innerHTML = `
                    <a href="#" onclick="Login_Menu()" id="Login_contact" alt="Contact your personal tailor" class="button" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-duration="1600">Login to contact your personal tailor</a>
                `;
    }
}

function display_button_correct(response) {

    if (response.message == 'Token is valid') {
        console.log(response + 'OK');
        document.getElementById("button_contact_login").innerHTML = `
                    <a href="../DASHBOARD/Contact.html" id="Login_contact" alt="Contact your personal tailor" class="button" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-duration="1600">Contact my personal tailor</a>
                `;
    }
}

function eventListenerFunction() {
    document.getElementById("contact_whatsapp-link").addEventListener('click', displayWhattsapp);
    document.getElementById("contact_messenger-link").addEventListener('click', displayMessenger);
    document.getElementById("contact_email-link").addEventListener('click', displayEmail);
    document.getElementById("contact_phone-link").addEventListener('click', displayPhone);
}

function displayWhattsapp() {
    event.preventDefault();
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            whatsapp : "Vous souhaitez contacter votre tailleur via Whattsapp",
            whatsapp1 : "Votre tailleur personnel est situé en France, C'est une bonne idée de le contacter via Whatsapp.",
            direct : "Vous pouvez ajouter votre tailleur à votre liste de contact (+336 49 34 96 11)",
            direct1 : "Ou directement",
            Onwhatsapp : "Contacter mon tailleur sur whattsapp",
        }
        displayWhattsapp_translated(translation)
    } else if (language === 'en'){
        let translation = {
            whatsapp : "You wish to contact your tailor via Whattsapp",
            whatsapp1 : "Your personnal tailor is located in france, it might be a good idea to use whattsapp to contact him.",
            direct : "You can already add your tailors in your contact list (+336 49 34 96 11)",
            direct1 : "Or directly",
            Onwhatsapp : "Contact my tailor on whattsapp",
        }
        displayWhattsapp_translated(translation)
    }

    function displayWhattsapp_translated(translation){
        let contentWhattsapp = `
            <div data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
                <h2>${translation.whatsapp}</h2>
                <p>${translation.whatsapp1}</p>
                <p>${translation.direct}</p>
                <p class="mb-5">${translation.direct1}</p>
                <a href="https://api.whatsapp.com/send?phone=33649349611" target="_blank" alt="contact my tailor on whattsapp" class="button mt-4">${translation.Onwhatsapp}</a>
        </div>`

        document.getElementById("message_contact_form").innerHTML = contentWhattsapp;
}
}



//MESSANGER SECTION 


function displayMessenger() {
    event.preventDefault();
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            Messenger : "Vous souhaitez contacter votre tailleur via Messenger",
            Messenger1 : "Le meilleur moyen de contacter votre tailleur depuis l'étranger!!",
            direct : "Envoyez nous un message via notre page facebook et nous vous répondrons très vite!!",
            direct1 : "Ou directement",
            OnMessenger : "Contacter mon tailleur sur whattsapp",
        }
        displayMessenger_translated(translation)
    } else if (language === 'en'){
        let translation = {
            Messenger : "You wish to contact your tailor via Messenger",
            Messenger1 : "Another great way to contact your personal tailor from abroad!!",
            direct : "Send him a message via our facebook page, and you will hear from us very soon!!",
            direct1 : "Or directly",
            OnMessenger : "Contact my tailor on Messenger",
        }
        displayMessenger_translated(translation)
    }


function displayMessenger_translated(translation){
    let contentMessenger = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>${translation.Messenger}</h2>
            <p>${translation.Messenger1}</p>
            <p>${translation.direct}</p>
            <p class="mb-5">${translation.direct1}</p>
            <a href="https://www.facebook.com" target="_blank" alt="contact my tailor on messenger" class="button mt-4">${translation.OnMessenger}</a>
       </div>`

    document.getElementById("message_contact_form").innerHTML = contentMessenger;
}
}


//SECTION FOR THE EMAIL


function displayEmail() {
    event.preventDefault();
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            Email : "Vous souhaitez contacter votre tailleur via Email",
            Email1 : "Si vous préférez contacter votre tailleur par mail, vous êtes au bon endroit!",
            Email2 : "Nous transfererons votre mail à votre tailleur personnel et vos recevrez une réponse en quelques heures.",
            direct1 : "Notre Email : contact@troisfils.com",
            OnEmail : "Contacter mon tailleur par Mail",
        }
        displayEmail_translated(translation)
    } else if (language === 'en'){
        let translation = {
            Email : "You wish to contact your tailor via Email",
            Email1 : "If you prefer using Email to discuss with your tailor, you are at the good place!",
            Email2 : "We will forward your Email to your personal tailor and he will answer you within the next hours!",
            direct1 : "Our Email : contact@troisfils.com",
            OnEmail : "Contact my tailor par Mail",
        }
        displayEmail_translated(translation)
    }

    function displayEmail_translated(translation){
        let contentEmail = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>${translation.Email}</h2>
            <p>${translation.Email1}</p>
            <p>${translation.Email2}</p>
            <p class="mb-5">${translation.direct1}</p>
            <a href="mailto:contact@troisfils.com" target="_blank" alt="contact my tailor on messenger" class="button mt-4">${translation.OnEmail}</a>
       </div>`

    document.getElementById("message_contact_form").innerHTML = contentEmail;
    }
}



//PHONE SECTION 


function displayPhone() {
    event.preventDefault();
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            Phone : "Vous souhaitez contacter votre tailleur par téléphone.",
            Phone1 : "Si vous habitez en France ou préférez parler avec votre tailleur par téléphone, c'est également possible!",
            Phone2 : "Depuis la France : 06 49 34 96 11",
            Phone3 : "Depuis l'étranger : +33 6 49 34 96 11",
        }
        displayPhone_translated(translation)
    } else if (language === 'en'){
        let translation = {
            Phone : "You wish to contact your tailor by Phone",
            Phone1 : "If you are located in france and prefer to use the phone to discuss with your tailor, you are at the good place!it's also possile!",
            Phone2 : "From France : 06 49 34 96 11",
            Phone3 : "From abroad : +336 49 34 96 11",
        }
        displayPhone_translated(translation)
    }

function displayPhone_translated(translation){
    let contentPhone = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>${translation.Phone}</h2>
            <p>${translation.Phone1}</p>
            <p>${translation.Phone2}</p>
            <p>${translation.Phone3}</p>
        </div>`

    document.getElementById("message_contact_form").innerHTML = contentPhone;
}
}
