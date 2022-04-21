function display_image_success(translation){
    let queryParams = new URLSearchParams(window.location.search);
    let upload = queryParams.get('upload');
    
    if (upload === 'success'){
        document.getElementById('Picture_title').innerHTML = translation.Picture_title;
        document.getElementById('Picture_subtitle').innerHTML = translation.Picture_subtitle;
    } else {
        document.getElementById('sucess').style.display = "none";
    }
}
