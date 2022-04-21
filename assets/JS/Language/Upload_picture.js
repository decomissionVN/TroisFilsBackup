language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Télécharger une image pour mon tailleur",
            More : "En savoir plus",
            Social_media : "Réseaux sociaux",
            Quick_links : "Liens Rapides",
            Navigate_easily : "Navigation",
            Homepage : "Accueil",
            About : "A propos",
            All_products : "Nos pièces",
            Ladies : "Femmes",
            Gentlemen : "Hommes",
            Wedding : "Mariage",
            Blog : "Blog",
            Appointments : "Rendez-vous",
            Excellence : "Nos tailleurs",
            Around_globe : "A l'international",
            CGU : "Conditions d'utilisation",
            PPolicy : "Politique de confidentialité",
            Copyright : " | Copyright 2020 - VN",
            About_tailoring : "A propos de Couture",
            How_to_take : "Quelques conseils de votre tailleur",
            Measure : "Measure test fr",
            Home : "Accueil",
            About : "A propos",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Login : "Connexion",
            loading: "Chargement... Veuillez patienter",
            Signup : "Inscription",
            Dashboard : "Mon espace",
            Signout : "Déconnexion",
            Welcome_Login : "Bienvenue sur votre espace!",
            Email : "Email",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
            About_footer : "Créé pour devenir une solution de poids dans l'art de l'habillement sur mesure, notre travail vous permet aujourd'hui de profiter d'un service d'exception. Situé sur les rives de la Seine, à Puteaux, notre siège social est au coeur de notre activité de création. Nos tailleurs sont disponibles pour vous assister à tout instant. Ce service reconnu est une marque de fabrique dont nous sommes fiers.",
            title_upload : "Partagez une photo pour votre tailleur!",
            subtitle_upload : "Nos tailleurs vous recontacteront pour discuter de vos attentes pour créer la tenue idéale!",
            download : "Téléchargez votre image: ",
            comment : "Un commentaire pour votre tailleur?",
            comment_label : "Votre commentaire",
            name_label : "Votre nom",
            email_label : "votre Email",
            submit_picture : "Enregistrer",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Upload a picture for my tailor",
            More : "About TroisFils",
            Social_media : "Social media",
            Quick_links : "Quck links",
            Navigate_easily : "Navigate easily",
            Homepage : "TroisFils | Home",
            About : "Abous us",
            All_products : "Tailored pieces",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Wedding : "Wedding",
            Blog : "Blog",
            Appointments : "Appointments",
            Excellence : "Excellence & Tailoring",
            Around_globe : "International",
            CGU : "General Conditions of use",
            PPolicy : "Privacy Policy",
            Copyright : " | Copyright 2020 - VN",
            About_tailoring : "About Tailoring",
            How_to_take : "Some advices from your tailor",
            Measure : "measure test en",
            Home : "Home",
            About : "About us",
            loading: "Loading... Please hold a moment",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Login : "Login",
            Signup : "Signup",
            Dashboard : "Dashboard",
            Signout : "Signout",
            Welcome_Login : "Welcome to your account portail",
            Email : "Email",
            Password : "Password",
            Continue_without : "Continue without session",
            About_footer : "Created to become a reliable solution for the tailoring industry, our dedicacy ensure you the best service for your tailoring needs. Located in Puteaux, France, the headquarters of Trois fils have represent the central place of our activity.",
            title_upload : "Upload a picture for your tailor",
            subtitle_upload : "Our tailors will discuss with you about the picture uploaded to design your perfect outfit!",
            download : "Upload your picture: ",
            comment : "Any comment to share with the tailor?",
            comment_label : "Your comment",
            name_label : "Your name",
            email_label : "Your Email",
            submit_picture : "Save",
            Needed_name : "This field is mandatory",
            Needed_comment : "This field is mandatory",
            Needed_email : "This field is mandatory",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('title_upload').innerHTML = translation.title_upload;
    document.getElementById('subtitle_upload').innerHTML = translation.subtitle_upload;
    document.getElementById('download').innerHTML = translation.download;
    document.getElementById('comment').innerHTML = translation.comment;
    document.getElementById('comment_label').innerHTML = translation.comment_label;
    document.getElementById('name_label').innerHTML = translation.name_label;
    document.getElementById('email_label').innerHTML = translation.email_label;
    document.getElementById('submit_picture').innerHTML = translation.submit_picture;
    document.getElementById('loading').innerHTML = translation.loading;
}

