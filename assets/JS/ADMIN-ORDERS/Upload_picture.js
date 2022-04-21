Display_Email();

//DISPLAY THE FIELDS EMAIL AND NAMES : IF NOT LOGGED IN

function Display_Email() {
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    console.log(token);

    if (token === null) {
        document.getElementById('submit_picture').style.display = "none";
        alert('You need to login');
    } else if (token !== null && userId !== null) {
        document.getElementById('Information_contact-picture').style.display = "block";
        Event_Listener_Upload_Picture_Logged();
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.getItem('userId');
        document.getElementById('submit_picture').style.display = 'none';
        alert('User needs to login again');
    }
}

//SAVE THE INFORMATION IF THE USER IS LOGGED IN

function Event_Listener_Upload_Picture_Logged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        var inputOrder = document.getElementsByTagName("input");
        let datenow = Date.now();
        let myFile = document.getElementById('picture').files[0];
        let userId = JSON.parse(window.localStorage.getItem('userId'));
        let token = JSON.parse(window.localStorage.getItem('token'));

        console.log(userId.userId);
        console.log(inputOrder[1].value);

        var formData = new FormData();
        formData.append("picture", myFile);
        formData.append("userId", userId.userId);
        formData.append("comment", inputOrder[1].value);
        formData.append("status", "Order saved - awaiting payment");
        formData.append("price", inputOrder[2].value);
        formData.append("email", inputOrder[3].value);
        formData.append("datenow", datenow);
        console.log(formData);

        fetch('https://api.troisfils.com/api/orders/orderPost', { method: "POST", headers: { 'Authorization': 'bearer ' + token.token_access } , body: formData })

            .then(response => picture_saved(response))
            .catch(function (error) {
                alert('TOKEN ERROR ' + error.message)
            })
    });
}

function picture_saved(response) {
    console.log(response);
}