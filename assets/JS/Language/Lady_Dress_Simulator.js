language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Tailleur sur mesure pour Femme | Simulateur Lady",
            title_app : "Commencez votre création!",
            subtitle_app : "Vous allez commander votre robe sur mesure. Pour permettre à nos tailleurs de comprendre vos gouts et vos attentes, vous pouvez discuter avec le tailleur ou soumettre une photo d'une robe que vous trouvez ravissante.",
            subtitle_app_wedding : "Vous allez commander votre robe de mariée sur mesure. Pour permettre à nos tailleurs de comprendre vos gouts et vos attentes, vous pouvez discuter avec le tailleur ou soumettre une photo d'une robe que vous trouvez ravissante.",
            subtitle_app_suit : "Vous allez commander votre tailleur sur mesure. Pour permettre à nos tailleurs de comprendre vos gouts et vos attentes, vous pouvez discuter avec le tailleur ou soumettre une photo d'une robe que vous trouvez ravissante.",
            create_tailor : "Rendez-vous avec un tailleur",
            create_tailor2 : "Créez votre robe sur mesure en prenant un rendez-vous.",
            create_tailor2_wedding : "Créez votre robe de mariée sur mesure en prenant un rendez-vous.",
            create_tailor2_suit : "Créez votre tailleur sur mesure en prenant un rendez-vous.",
            create_tailor3 : "Créer ma robe",
            create_tailor3_wedding : "Créer ma robe de mariée",
            create_tailor3_suit : "Créer mon tailleur",
            create_picture : "Soumettre une photo",
            create_picture1 : "Envoyez nous une photo pour discuter de la création de ce modèle avec nos tailleurs",
            create_picture2 : "Soumettre une photo",
            Title_Real : "Nos realisations",
            Subtitle_Real : "Découvrez dès maintenant nos réalisations et discuter avec un tailleur en séance privée afin de trouver le produit que vous recherchez.",
            Button_Real : "Nos realisations",
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
            wedding_workshop : "Atelier de mariage",
            Nav_menu : "Votre menu de navigation :",
            options_title : "Votre panel de selection :",
            simulator__title : "Simulateur | Ladies",
            simulator__subtitle : "Ce simulateur vous aidera à explorer les tendances et designs à discuter avec votre tailleur. Vous affinerez et finaliserez par la suite votre création lors de votre rendez-vous en ligne avec votre tailleur.",
            simulator__subtitle2 : "Un aperçu de votre création",
            simulator__front: "Vue de face",
            simulator__back: "Vue de dos",
            dresses_workshop : "Atelier des robes"
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online tailoring for Lady | Online Simulator",
            title_app : "Start designing!",
            subtitle_app : "You are about to order a custom dress. To allow our tailors to provide you the best advises according your taste and expectations, you can create an online simulation or submit pictures of a suit you like.",
            subtitle_app_wedding : "You are about to order a custom wedding dress. To allow our tailors to provide you the best advises according your taste and expectations, you can create an online simulation or submit pictures of a suit you like.",
            subtitle_app_suit : "You are about to order a custom suit. To allow our tailors to provide you the best advises according your taste and expectations, you can create an online simulation or submit pictures of a suit you like.",
            create_tailor : "Appointment with our tailor",
            create_tailor2 : "Design your custom dress with our personal tailor in an online appointment!",
            create_tailor2_wedding : "Design your custom wedding dress with our personal tailor in an online appointment!",
            create_tailor2_suit : "Design your custom suit with our personal tailor in an online appointment!",
            create_tailor3 : "Design my suit",
            create_tailor3_wedding : "Design my wedding dress",
            create_tailor3_suit : "Design my suit",
            create_picture : "Submit a picture",
            create_picture1 : "Upload a picture of the suit you wish to create with your tailor.",
            create_picture2 : "Upload a picture",
            title_gentlemen : "Custom tailoring | For Gentlemens",
            subtitle_gentlemen : "We remain beside you for every event. a tuxedo for a wedding day, a suits for a new job or an uniform for an opportunity. Customize your outfit with Trois-Fils!",
            Tailoring_Ladies : "Tailoring for ladies",
            Tailoring_Gent : "Tailoring for gentlemens",
            Title_Wedding : "Wedding & Tailoring",
            Title_Wedding_d : "Wedding & Tailoring",
            Subtitle_Wedding : "Our tailors will make sure your special day is absolutely perfect! For a wedding dress, for a suit or smoking, our expertise will provide you the best taloring product and magnify your look to the eyes of your promise.",
            Button_Wedding : "Our wedding tailoring",
            Title_Real : "Our realisations",
            Subtitle_Real : "Discover today a selection of our realisations and discuss with a tailor in a private session in order to determine your needs and expectations.",
            Button_Real : "More realisations",
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
            wedding_workshop : "Wedding dresses workshop",
            Nav_menu : "Your navigation menu :",
            options_title : "Panel of selection :",
            simulator__title : "Simulator | Ladies",
            simulator__subtitle : "This simulation will help the tailor discuss your needs. You can keep editing the design or benefit from our tailor's advises in your online appointment.",
            simulator__subtitle2 : "Your design's views",
            simulator__front: "Front",
            simulator__back: "Back",
            dresses_workshop : "Dresses workshop"
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page; 
    document.getElementById('options_title').innerHTML = translation.options_title; 
    document.getElementById('simulator__title').innerHTML = translation.simulator__title; 
    document.getElementById('simulator__subtitle').innerHTML = translation.simulator__subtitle; 
    document.getElementById('simulator__subtitle2').innerHTML = translation.simulator__subtitle2;
    document.getElementById('simulator__front').innerHTML = translation.simulator__front;
    document.getElementById('simulator__back').innerHTML = translation.simulator__back;

    let dress_page = document.getElementById('dresses_workshop');
    let wedding_page = document.getElementById('wedding_workshop');

    if(dress_page){
        document.getElementById('dresses_workshop').innerHTML = translation.dresses_workshop;
    } else if(wedding_page){
        document.getElementById('wedding_workshop').innerHTML = translation.wedding_workshop;
    } 
}

