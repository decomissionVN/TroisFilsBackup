language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Tailleur sur mesure pour Homme | Gentlemen",
            title_gentlemen : "Tailleurs sur mesure pour homme | Gentlemen",
            subtitle_gentlemen : "Nous restons à vos cotés pour chaque évènement de votre vie. Un smoking, un mariage, un costume pour un nouveau travail ou un uniform pour une nouvelle aventure. Taillez sur mesure votr prochaine opportunité avec Trois-Fils!",
            Subtitle_Profile2 : "Vous pouvez à tout moment demander la suppression de vos données personnelles en contactant notre service client.",
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
            title_elegencia : "L'élégance du sur mesure",
            subtitle_elegencia : "Ce 'savoir-faire' est partagé depuis générations pour une simple raison: La couture sur mesure est la meilleur manière de créer un style unique et personnalisé pour votre speciales occasions ou vos opportunités de vie!",
            title_uniform : "Uniformes sur mesure | Gentlemen",
            subtitle_uniform : "La confection sur mesure est une tradition dans le monde professionnel, représentant votre expertise et qualité de service. Découvrez toutes nos créations et commencez votre design!",
            title_gent_gen : "Homme & Gentlemen",
            Create_suit : "Créer un costume",
            Create_tuxedo : "Créer un smoking",
            Create_uniform : "Créer un uniforme",
            title_design : "Création & Rendez-vous tailleurs",
            para_design : "Commencez votre création en soumettant une photo de vos attentes à nos tailleurs. Vous discuterez ainsi plus facilement avec nos tailleurs pour finaliser votre création.",
            para_design1 : "Souvenez-vous que nos tailleurs sont disponibles pour vous aider. Vous pourrez discuter et personnaliser votre création lors de votre rendez-vous avec votre tailleur!",
            realisation : "Nos réalisations",
            realisation_para : "Nos tailleurs sont à votre disposition! Pour un costume sur mesure, un smoking ou un uniforme, notre expertise vous promet un produit de qualité permettant de réhausser votre apparence pour toutes les occasions.",
            realisation_button : "More realisations",
            title_innov : "Trois-Fils & Innovation",
            para_innov1 : "Notre savoir faire s'appuie sur notre passion, notre implication et notre expertise. Les avancées techniques dans le domaine de la confection sur mesure sont incroyables et permettent une amélioration constante du service.",
            para_innov2 : "Nos costumes, robes, et pièces sur mesure sont respectueuses de l'environnement. Leur confection sur mesure s'associe à une utilisation prolongée. Une excellente nouvelle pour la planète!",
            para_innov3 : "L'utilisation des nouvelles technologies et de notre simulateur en ligne nous permet d'étendre notre expertise au monde entier et de réduire nos prix de confection. En effet, les rendez-vous en ligne permettent à nos tailleurs de se concentrer uniquement sur leur art et la confection de vos pièces sur mesure!",
            more_innov : "En savoir plus",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online tailoring for Men | Gentlemen",
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
            title_elegencia : "The elegance of a tailored piece!",
            subtitle_elegencia : "This 'savoir-faire' is shared since generations for a simple reason: Custom tailoring is the best way to purchase an unique outfit for a special occasion!",
            title_uniform : "Tailored uniforms | Gentlemen",
            subtitle_uniform : "Tailored pieces are a long time tradition in the professionnal world, expressing your expertize and quality of service. Check out all our creations and start designing!",
            title_gent_gen : "Tailoring for Gentlemen",
            Create_suit : "Create your suit",
            Create_tuxedo : "Create your tuxedo",
            Create_uniform : "Create your uniform",
            title_design : "Design & tailor's appointment",
            para_design : "Start your creation by designing it on our simulator. This tool will help you decide which are designs you prefer and wish to discuss with the tailor.",
            para_design1 : "Remember that our tailors are here to help you! You will be able to take an appointment with them to discuss and adapt your design once you completed the simulation.",
            realisation : "Our realisations",
            realisation_para : "Our tailors are here for you! For a tailored suit, for a tuxedo or an uniform, our expertise will provide you the best taloring product and advises to ensure your look is always outstanding.",
            realisation_button : "More realisations",
            title_innov : "Trois-Fils & Innovation",
            para_innov1 : "Our 'savoir-faire' relies on passion, application and excellence. The technic advancees in the field of tailoring are amazing and allow us to improve our services.",
            para_innov2 : "Our suits and tailoring fabric are Eco-friendly, excellent quality which means they will remain in excellent state longer than a non-tailored piece and now affordable",
            para_innov3 : "The use of internet and the developpement of our online design simulator allow us to extend our expertize to the whole world and to lower our confection price. indeed, with online appointments, our tailors can now focus entirely to the confection and design of the pieces you ask for!",
            more_innov : "Learn more",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('para_design').innerHTML = translation.para_design; 
    document.getElementById('para_design1').innerHTML = translation.para_design1;
    document.getElementById('realisation').innerHTML = translation.realisation; 
    document.getElementById('realisation_para').innerHTML = translation.realisation_para; 
    document.getElementById('realisation_button').innerHTML = translation.realisation_button; 
    document.getElementById('title_innov').innerHTML = translation.title_innov; 
    document.getElementById('para_innov1').innerHTML = translation.para_innov1; 
    document.getElementById('para_innov2').innerHTML = translation.para_innov2; 
    document.getElementById('para_innov3').innerHTML = translation.para_innov3; 
    document.getElementById('more_innov').innerHTML = translation.more_innov;
    document.getElementById('Title_Page_Gentlemen').innerHTML = translation.Title_Page;
    document.getElementById('title_gentlemen').innerHTML = translation.title_gentlemen;
    document.getElementById('subtitle_gentlemen').innerHTML = translation.subtitle_gentlemen;
    document.getElementById('title_elegencia').innerHTML = translation.title_elegencia;
    document.getElementById('subtitle_elegencia').innerHTML = translation.subtitle_elegencia;
    document.getElementById('title_uniform').innerHTML = translation.title_uniform;
    document.getElementById('subtitle_uniform').innerHTML = translation.subtitle_uniform;
    document.getElementById('title_gent_gen').innerHTML = translation.title_gent_gen;
    document.getElementById('Create_suit').innerHTML = translation.Create_suit; 
    document.getElementById('Create_tuxedo').innerHTML = translation.Create_tuxedo; 
    document.getElementById('Create_uniform').innerHTML = translation.Create_uniform; 
    document.getElementById('title_design').innerHTML = translation.title_design; 

}

