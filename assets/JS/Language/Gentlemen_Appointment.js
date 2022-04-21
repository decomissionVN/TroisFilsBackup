language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Tailleur sur mesure pour Homme | Rendez-vous Gentlemen",
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
            Signup : "Inscription",
            Dashboard : "Mon espace",
            Signout : "Déconnexion",
            Welcome_Login : "Bienvenue sur votre espace!",
            Email : "Email",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
            About_footer : "Créé pour devenir une solution de poids dans l'art de l'habillement sur mesure, notre travail vous permet aujourd'hui de profiter d'un service d'exception. Situé sur les rives de la Seine, à Puteaux, notre siège social est au coeur de notre activité de création. Nos tailleurs sont disponibles pour vous assister à tout instant. Ce service reconnu est une marque de fabrique dont nous sommes fiers.",
            title_appointment : "Votre rendez-vous tailleur",
            app_center : "Bienvenue!",
            zoom : "Vous avez accès aux créneaux disponibles pour la création de votre commande avec votre tailleur personnel. Le meeting aura lieu par Zoom, en vidéoconférence gratuite sur votre navigateur.",
            custom_service : "Un service sur mesure",
            here_help : "Nos tailors sont là pour vous aider! Parce que votre satisfaction est notre priorité, n'hésitez pas à nous contacter pour toute question!",
            calendly : "Mettre en place un rendez-vous.",
            Picture_title : "Image enregistrée avec succès!",
            Picture_subtitle : "Nos tailleurs ont bien reçu votre image. Vous pouvez maintenant prendre un rendez-vous avec votre tailleur pour construire votre tenue sur mesure."
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        display_image_success(translation)
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online tailoring for Men | Gentlemen appointment",
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
            title_appointment : "Your tailoring appointment",
            app_center : "Welcome!",
            zoom : "In a few minutes, you will see the available times and scheddule a meeting with your personal tailor. The meeting will occur over ZOOM. This tool accessible free via your browser.",
            custom_service : "A custom service",
            here_help : "Our tailors are here to help you. Because your satisfaction is our success, feel free to contact us for any question you might have!",
            calendly : "Sheddule your appointment",
            Picture_title : "Image successfully saved!",
            Picture_subtitle : "Our tailors received successully your image.You can now take an appointment with your personal tailor to design your custom outfit."
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        display_image_success(translation)
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('title_appointment').innerHTML = translation.title_appointment;
    document.getElementById('app_center').innerHTML = translation.app_center;
    document.getElementById('zoom').innerHTML = translation.zoom;
    document.getElementById('calendly').innerHTML = translation.calendly;
}

