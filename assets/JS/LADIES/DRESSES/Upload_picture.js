Display_Email();

//DISPLAY THE FIELDS EMAIL AND NAMES : IF NOT LOGGED IN

function Display_Email() {
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    console.log(token);

    if (token === null) {
        document.getElementById('Information_contact-picture').style.display = "block";
        Event_Listener_Upload_Picture_NotLogged();
    } else if (token !== null && userId !== null) {
        document.getElementById('Information_contact-picture').style.display = "none";
        Event_Listener_Upload_Picture_Logged();
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.getItem('userId');
        document.getElementById('Popup__background').style.display = 'block';
        console.log('User needs to login again');
    }
}



//SAVE THE INFORMATIONS IF THE USER IS NOT LOGGED IN

function Event_Listener_Upload_Picture_NotLogged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        var inputOrder = document.getElementsByTagName("input");
        let datenow = Date.now();
        let myFile = document.getElementById('picture').files[0];
        let language = localStorage.getItem("language");
        if (language === 'fr'){
            let translation = {Needed_email : "Un Email est requis pour vous recontacter", Needed_name : "Comment vous appellez vous?", Needed_comment : "Veuillez remplir ce champs avec vos attentes", Needed_picture : "Veuillez choisir une image."
            } 
            upload_translated_not_logged(translation)
        } else if (language === 'en') {
            let translation = {Needed_email : "We need to know your Email to contact you", Needed_name : "What is your name?", Needed_comment : "Please, fill this field with your comments", Needed_picture : "Please select an image."
            }
            upload_translated_not_logged(translation)
        }

        function upload_translated_not_logged(translation){
            
            if (!myFile) {
                clear_styles_warn();
                document.getElementById('Needed_picture_div').style.display = "block";
                document.getElementById('Needed_picture').innerHTML = translation.Needed_picture;
            } else if (!inputOrder[3].value) {
                clear_styles_warn();
                document.getElementById('Needed_comment_div').style.display = "block";
                document.getElementById('Needed_comment').innerHTML = translation.Needed_comment;
            } else if (!inputOrder[4].value){
                clear_styles_warn();
                document.getElementById('Needed_name_div').style.display = "block";
                document.getElementById('Needed_name').innerHTML = translation.Needed_name;           
            } else if (!inputOrder[5].value) {
                clear_styles_warn();
                document.getElementById('Needed_email_div').style.display = "block";
                document.getElementById('Needed_email').innerHTML = translation.Needed_email;
            } else if (inputOrder[3].value && inputOrder[4].value && inputOrder[5].value && myFile) {
                var formData = new FormData();
            formData.append("picture", myFile);
            formData.append("userId", "not_logged_in");
            formData.append("comment", inputOrder[3].value);
            formData.append("name", inputOrder[4].value);
            formData.append("email", inputOrder[5].value);
            formData.append("datenow", datenow);
    
            console.log(formData);
    
            fetch('https://api.troisfils.com/api/pictures/upload_photo', { method: "POST", body: formData })
                
                .then(response => picture_saved(response))
                .catch(function (error) {
                    console.log(Pictures);
                    alert('TOKEN ERROR ' + error.message)
                })
            } else {
                alert('An error occured. Please try again and verify your connection');
            }
        }
    });   
}


//CLEAR ALL STYLES

function clear_styles_warn() {
    document.getElementById('Needed_name_div').style.display = "none";
    document.getElementById('Needed_email_div').style.display = "none";
    document.getElementById('Needed_comment_div').style.display = "none";
    document.getElementById('Needed_picture_div').style.display = "none";
}

function clear_styles_logged_warn() {
    document.getElementById('Needed_comment_div').style.display = "none";
    document.getElementById('Needed_picture_div').style.display = "none";    
}


//SAVE THE INFORMATION IF THE USER IS LOGGED IN

function Event_Listener_Upload_Picture_Logged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        let language = localStorage.getItem("language");
        if (language === 'fr'){
            let translation = {Needed_email : "Un Email est requis pour vous recontacter", Needed_name : "Comment vous appellez vous?", Needed_comment : "Veuillez remplir ce champs avec vos attentes", Needed_picture : "Veuillez choisir une image."
            } 
            upload_translated_logged(translation);
        } else if (language === 'en') {
            let translation = {Needed_email : "We need to know your Email to contact you", Needed_name : "What is your name?", Needed_comment : "Please, fill this field with your comments", Needed_picture : "Please select an image."
            }
            upload_translated_logged(translation);
        }

        function upload_translated_logged(translation){
            var inputOrder = document.getElementsByTagName("input");
            let datenow = Date.now();
            let myFile = document.getElementById('picture').files[0];
            var userId = JSON.parse(window.localStorage.getItem('userId'));
            console.log(userId.userId);
            console.log(inputOrder[1].value);
    
        if (!myFile){
            clear_styles_logged_warn();
            document.getElementById('Needed_picture_div').style.display = "block";
            document.getElementById('Needed_picture').innerHTML = translation.Needed_picture;           
        } else if (!inputOrder[1].value) {
            clear_styles_logged_warn();
            document.getElementById('Needed_comment_div').style.display = "block";
            document.getElementById('Needed_comment').innerHTML = translation.Needed_comment;
        } else if (inputOrder[1].value && myFile) {
            document.getElementById('loading_div').style.display = "block";

            var formData = new FormData();
            formData.append("picture", myFile);
            formData.append("userId", userId.userId);
            formData.append("comment", inputOrder[1].value);
            formData.append("name", "user-Logged-In");
            formData.append("email", "user-Logged-In");
            formData.append("datenow", datenow);
    
            console.log(formData);
    
            fetch('https://api.troisfils.com/api/pictures/upload_photo', { method: "POST", body: formData })
    
                .then(response => picture_saved())
                .catch(function (error) {
                    alert('TOKEN ERROR ' + error.message)
                })
            } else {
            alert('There is an issue. Please check your network');
        } 
        }
    });
}

function picture_saved() {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set("upload", "success");
    window.setTimeout(window.location.replace("../../web/ladies/Appointment.html" + "?" + queryParams.toString()), 5000);
}