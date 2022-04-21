language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Centimeter: "Centimètres",
            Inches: "Pouces",
            Modify_Gender_btn : "Modifier mon choix - Lady ou Gentlemen",
            Gender_choice : "Êtes-vous un Homme ou une femme?",
            Gender_modify : "Modifiez votre choix - Lady ou Gentlemen",
            Title_not_taken : "Il est temps de prendre vos mesures!",
            Subtitle_not_taken : "Nos tailleurs vous ont préparé ce formulaire pour vous accompagner au cours de votre séance de mesure. Suivez les étapes et n'hésitez pas à nous contacter pour toute question!",
            Title_taken : "Vous avez correctement pris vos mesures!",
            Subtitle_taken : "Vous pouvez modifier vos mesures à tout moment, et nos tailleurs restent à votre disposition pour toute question!",
            Title_page : "Trois Fils | Vous measures",
            Title_dashboard : "Votre espace tailleur",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter mon tailleur",
            About_footer : "Créé pour devenir une solution de poids dans l'art de l'habillement sur mesure, notre travail vous permet aujourd'hui de profiter d'un service d'exception. Situé sur les rives de la Seine, à Puteaux, notre siège social est au coeur de notre activité de création. Nos tailleurs sont disponibles pour vous assister à tout instant. Ce service reconnu est une marque de fabrique dont nous sommes fiers.",
            Units_label : "Préparez vous à prendre vos mesures!",
            measure1_label : "Les épaules",
            measure2_label : "Bras",
            measure3_label : "poitrine",
            measure4_label : "Mesure",
            measure5_label : "Mesure",
            measure6_label : "Mesure",
            measure7_label : "Mesure",
            measure8_label : "Mesure",
            measure9_label : "Mesure",
            measure10_label : "Mesure",
            measure11_label : "Mesure",
            measure12_label : "Mesure",
            measure13_label : "Mesure",
            measure14_label : "Mesure",
            measure15_label : "Mesure",
            Not_connected : "Vous n'êtes pas connectés. Veuillez vous connecter pour accéder à votre espace",
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
            title_order : "Votre commande",
            No_order : "Vous n'avez pas de commande pour le moment... Il est temps de contacter votre tailleur!",
            Realisations : "Notre travail",
            Selection : "Découvrez notre sélection couture du monde! La diversité et la passion sont des trésors que nous retrouvons au sein de notre travail. Rejoignez nous pour un tour du monde de nos plus belles créations!",
            Join : "Découvrir",
            Order_id : "Votre numéro de commande : ",
            Order_Email : "Votre Email : ",
            Order_Price : "Prix total de la commande : ",
            Order_Status : "Status de la commande : ",
            Finalize : "Finaliser ma commande",
            Follow_order : "Suivre ma commande",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation);
    } else {
        let translation = {
            Centimeter: "Centimeters",
            Inches: "Inches",
            Modify_Gender_btn : "Edit my choice - Lady or Gentlemen",
            Gender_choice : "Are you a Lady or a Gentlemen?",
            Gender_modify : "Edit your choice - Lady or Gentlemen",
            Title_not_taken : "It's time to take your measures!",
            Subtitle_not_taken : "In order to ease the measurment process, our tailors designed the following form. Follow-up the steps and create your own custom piece.",
            Title_taken : "You already took your measures!",
            Subtitle_taken : "You can of course modify your measures anytime, and our tailors remain at your disposal for any question.",
            Title_page : "Trois Fils | Your measures",
            Title_dashboard : "Your tailoring dashboard",
            Profile : "My profile",
            Measures : "My measures",
            Orders : "My orders",
            Contact : "Contact my tailor",
            About_footer : "Created to become a reliable solution for the tailoring industry, our dedicacy ensure you the best service for your tailoring needs. Located in Puteaux, France, the headquarters of Trois fils have represent the central place of our activity.",
            Not_connected : "You are not connected yet. Please login to access your dashboard",
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
            title_order : "Your order",
            No_order : "You don't have any order at the moment... It's time to contact a tailor!",
            Realisations : "Our realisations",
            Selection : "Discover our selection of tailored pieces from all over the world! The diversity and the passion are two treasures we value in our art! Join us for our journe around the world!",
            Join : "Discover",
            Order_id : "Your order n°",
            Order_Email : "Email of the client : ",
            Order_Price : "Price of the order : ",
            Order_Status : "Order's status : ",
            Finalize : "Finalize this order",
            Follow_order : "Follow my order",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation);
    }

}

function insert_the_HTML(translation){
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    if (token && userId ) {
    document.getElementById('title_page_measures').innerHTML = translation.Title_page;
    document.getElementById('title_dashboard').innerHTML = translation.Title_dashboard;
    document.getElementById('contact_tailor').innerHTML = translation.Contact;
    document.getElementById('orders').innerHTML = translation.Orders;
    document.getElementById('measures').innerHTML = translation.Measures;
    document.getElementById('profile').innerHTML = translation.Profile;
    document.getElementById('title_order').innerHTML = translation.title_order;
    document.getElementById('Realisations').innerHTML = translation.Realisations;
    document.getElementById('Selection').innerHTML = translation.Selection;
    document.getElementById('Join').innerHTML = translation.Join;
    } else {
        console.log('You are not connected');
        document.getElementById('Article_order').innerHTML = `<div class="text-center mt-5">
                                                                    <h3>${translation.Not_connected}</h3>
                                                              </div>`;
    }
}

