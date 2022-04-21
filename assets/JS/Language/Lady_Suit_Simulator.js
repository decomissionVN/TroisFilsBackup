language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_page : "Trois Fils | Tailleur pour Femmes | Lady | Tailleurs sur mesure",
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
            workshop : "Atelier tailleur",
            confection_with_tailor : "La confection de votre tailleur ou uniforme sera menée par votre tailleur personnel, selon vos préférences. Pour commencer la création et confection veuillez choisir entre les options présentées ci-dessous.",
            skirt : "Tailleur jupe",
            SuitSkirt2 : "Tailleur jupe",
            pants : "Tailleur pantalon",
            SuitPants2 : "Tailleur pantalon",
            uniform : "Uniforme",
            Uniform2 : "Uniforme",

        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_page : "Trois Fils | Tailoring for ladies | Suits",
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
            workshop : "Suits workshop",
            confection_with_tailor : "The confection of your suit will be carried out by your tailor according your preferences. To start the confection, select one option bellow.",
            skirt : "Suit & Skirt",
            SuitSkirt2 : "Suit & Skirt",
            pants : "Suit & Pants",
            SuitPants2 : "Suit & Pants",
            uniform : "Uniforms",
            Uniform2 : "Uniform",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_page').innerHTML = translation.Title_page;
    document.getElementById('workshop').innerHTML = translation.workshop;
    document.getElementById('confection_with_tailor').innerHTML = translation.confection_with_tailor;
    document.getElementById('skirt').innerHTML = translation.skirt;
    document.getElementById('SuitSkirt2').innerHTML = translation.SuitSkirt2;
    document.getElementById('pants').innerHTML = translation.pants;
    document.getElementById('SuitPants2').innerHTML = translation.SuitPants2;
    document.getElementById('uniform').innerHTML = translation.uniform;
    document.getElementById('Uniform2').innerHTML = translation.Uniform2;
}

