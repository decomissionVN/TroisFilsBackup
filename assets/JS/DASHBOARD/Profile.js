//GET THE MEASURES FOR THE USER ID

function User_exists(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token !== null && userId !== null) {
        fetch('https://api.troisfils.com/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_user_saved(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        document.getElementById('article_profile').innerHTML = `<div class="w-100 mt-5 mb-5 text-center">
                                                                    <h2>${translation.Not_connected}</h2>
                                                                 </div>`
    }
}

function display_user_saved(response) {
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr') {
        let translation = {
            Name_is : "Votre nom :", save : "Enregistrer", title_formeasures : "Vos mesures", title_adress : "Nous avons besoin de votre adresse pour envoyer vos créations", Your_Adress : "Votre commande sera envoyée à : ", Country : "Pays",  City : "Ville", CP : "Code postal" ,Adress : "Votre adresse", Your_Email : "Votre Email sauvegardé est ", Take_now : "Prendre mes mesures", Modify_now : "Modifier mes mesures", Complete_now : "Completer mes mesures", Your_Measures : "Vos mesures", Missing :"doivent être prises", Taken : "sont bien enregistrées", Incomplete : "sont incomplètes"
        }
        Display_User_Translated(translation);
    } else {
        let translation = {
            Name_is : "Your name is : ", save : "Save", title_formeasures : "Your measures", title_adress : "We need your adress to ship your products", Your_Adress : "Your orders will be mailed to : ", Country : "Country", City : "City", CP : "Postal code" ,Adress : "Your address", Your_Email : "Your Email saved is : ", Take_now : "Take my measures now", Modify_now : "Modify my measures now", Complete_now : "Complete my measures now", Your_Measures : "Your measures", Missing :"are missing", Taken : "are sucessfully taken", Incomplete : "Are incomplete"
        }
        Display_User_Translated(translation);
    }

    function Display_User_Translated(translation) {
    let content = `
                    <p class="mt-5">${translation.Name_is} <b>${response.name}</b></p>
                    <p>${translation.Your_Email} <b>${response.email}</b></p>
                    <div id="Adress_display"></div>
                    <div class="w-100 separation"></div>
                    <h3 class="mt-5 mb-5">${translation.title_formeasures}</h3>
                    <div id="measures_taken" class="d-flex"></div>
                `;

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    document.getElementById('profile_infos').innerHTML = content;

    Display_adress(response, translation);

    fetch('https://api.troisfils.com/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access } }).then(response => response.json()).then(response => have_been_measured(response, translation))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }
}

function have_been_measured(response, translation) {

    if (response.message == 'measures not taken') {
        let content = `<p class="mb-0">${translation.Your_Measures} <b>${translation.Missing}</b></p>
                       <a href="My_Measures.html" alt="Take my measures online" class="button_grey_red ml-3">${translation.Take_now}</a>`
        document.getElementById('measures_taken').innerHTML = content;
    } else if (response.measure1 !== '...' && response.measure2 !== '...' && response.measure3 !== '...' && response.measure4 !== '...' && response.measure5 !== '...' && response.measure6 !== '...' && response.measure7 !== '...' && response.measure8 !== '...' && response.measure9 !== '...' && response.measure10 !== '...' && response.measure11 !== '...' && response.measure12 !== '...' && response.measure13 !== '...' && response.measure14 !== '...' && response.measure15 !== '...') {
        let content = `<p class="mb-0">${translation.Your_Measures} <b>${translation.Taken}</b></p>
                       <a href="My_Measures.html" alt="Take my measures online" class="button_grey ml-3">${translation.Modify_now}</a>`
        document.getElementById('measures_taken').innerHTML = content;
    } else {
        let content = `<p class="mb-0">${translation.Your_Measures} <b>${translation.Incomplete}</b></p>
                       <a href="My_Measures.html" alt="Take my measures online" class="button_grey_green ml-3">${translation.Complete_now}</a>`
        document.getElementById('measures_taken').innerHTML = content;
    }
}


function Display_adress(response, translation){
    if (response.adress === "...") {
        console.log('enter adress');
        let adress = `
        <div class="w-100 separation"></div>
        <h3 class="mt-5 mb-5">${translation.title_adress}</h3>
                    <form class="mb-5 adress_form">
                        <label for="Adress">Adress</label>
                        <input name="Adress" id="Adress" type="text" placeholder="${translation.Adress}"><br>
                        <label for="CP">CP</label>
                        <input type="number" name="CP" id="CP" placeholder="${translation.CP}"><br>
                        <label for="City">City</label>
                        <input type="text" name="City" id="City" placeholder="${translation.City}"><br><br>
                        <label for="City">Country</label>
                        <input type="text" name="Country" id="Country" placeholder="${translation.Country}"><br><br>
                        <a href="#" class="button" onclick="Save_adress()">${translation.save}</a>
                    </form>`
        document.getElementById('Adress_display').innerHTML = adress;
    } else if (response.adress !== "...") {
        console.log(response);
        let adress = `<p>${translation.Your_Adress} <b>${response.adress}</b></p>`;
        document.getElementById('Adress_display').innerHTML = adress;
    }
}

function Save_adress() {
    event.preventDefault();
    console.log('saving...1');
    let token = JSON.parse(window.localStorage.getItem('token'));
    let userId = JSON.parse(window.localStorage.getItem('userId'));

    fetch('https://api.troisfils.com/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => update_profile(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })

        function update_profile(response){
            console.log('saving...2');
            let Adress = document.getElementById("Adress").value;
            let CP = document.getElementById("CP").value;
            let City = document.getElementById("City").value;
            let Country = document.getElementById("Country").value;

            adress_value = Adress + ',' + CP + ',' + City + ',' + Country;
            console.log(response);

            let profile = {
                userId: userId.userId,
                name: response.name,
                email: response.email,
                password: response.password,
                adress : adress_value
            }

            console.log(profile);

            fetch('https://api.troisfils.com/api/auth/userUptate' + '/' + userId.userId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(profile) }).then(response => response.json()).then(response => Display_response(response))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message)
            })
        }
}

function Display_response(response){
    window.location.reload();
}

