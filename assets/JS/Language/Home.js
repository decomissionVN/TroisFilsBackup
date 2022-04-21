language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Price1 : "150€",
            Price2 : "200€",
            Price3 : "200€",
            Price4 : "150€",
            Price5 : "200€",
            Price6 : "220€",
            Price7 : "260€",
            Price8 : "200€",
            Title_HomePrice:"Une confection sur mesure",
            Subtitle_HomePrice:"Le prix de nos confection est déterminé au moment de la séance de création avec nos tailleurs. Le concept innovant de Trois Fils permet de réduire les couts de vos création en maintenant notre qualité de produit.",
            Subtitle_HomePrice_mobile:"Le prix de nos confection est déterminé au moment de la séance de création avec nos tailleurs. Le concept innovant de Trois Fils permet de réduire les couts de vos création en maintenant notre qualité de produit.",
            Title_Page : "Trois Fils | Tailleur sur mesure en ligne",
            Title_Home : "Sur mesure",
            Subtitle_Home : "La tradition du sur mesure se perpétue car elle représente un savoir faire d'exception, transmis de père en fils depuis plusieurs générations. Troisfils est fière de vous proposer ce service d'exception de manière innovante et moderne.",
            Button_About : "Notre histoire",
            Tailoring_Ladies : "Tailleur Femme",
            Tailoring_Gent : "Tailleur Homme",
            Title_Wedding : "Mariage sur mesure",
            Title_Wedding_d : "Mariage sur mesure",
            Subtitle_Wedding : "Nos tailors s'assureront que votre tenue de mariage sera absolument parfaite! Pour une robe de mariée, pour un costume ou un smoking, notre expertise vous garantis le meilleur apparat et une apparence magnifiée aux yeux de votre promis(e)",
            Button_Wedding : "Nos pièces de mariage",
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
            Title_Innovation : "Le concept de Trois-Fils",
            Subtitle_Innovation : "La création de notre collectif de tailleurs remonte au printemps 2019. Cette initiative fut initiée par trois frères passionnés de couture. Partant du postulat que le sur-mesure était un contrepoids efficace à la tendance de consommation de masse, ces passionnés ont décidé de trouver à une solution pour proposer ces produits à des prix convenables, en gardant un haut standard de qualité et de service.",
            Subtitle_Innovation1 : "Leur idée est simple : Décharger les tailleurs qui le souhaitent des tâches répétitives et prenantes telles que la prise de mesure ou l’administratif, réduire la pression des charges fixes et leur permettre de se concentrer sur la création et la confection. Cette idée fut le point de départ d’une grande aventure pour ces trois frères. Une aventure humaine d’abord car elle les a menés sur les chemins à la recherche de collaborateurs partageant leur vision de la confection sur mesure, de partenaires et, bien sûr, des meilleurs tailleurs de France !",
            Subtitle_Innovation2 : "Nous sommes extrêmement fières de l’évolution de cette initiative, et remercions nos trois créateurs pour leur implication. Représentant aujourd’hui une solution fiable pour toute la filière du Sur-Mesure, notre plateforme a permis à nos professionnels de proposer leurs talents à des prix plus abordables, en se concentrant sur leur corps de métier. Accessible dans le monde entier, elle se positionne également en tant qu’ambassadeur, plaidant pour des articles de qualité, indémodables et à longue durée de vie. L’aventure ne fait que commencer, mais nos tailleurs comptent déjà plus de 3000 confections sur mesure, autant de pièces uniques témoin de leur talent !",
            Title_Explication1 : "Une création unique",
            Subtitle_Explication1 : "Création de votre tenue unique avec notre tailleur. Du tissu à la coupe, nous finaliserons ensemble chaque détail de votre tenue.",
            Title_Explication2 : "Confection de la pièce",
            Subtitle_Explication2 : "Votre tailleur confectionne votre tenue sur mesure. Pour cela, il vous faudra prendre vos mesure avec notre tailleur.",
            Title_Explication3 : "Préparation et envoi",
            Subtitle_Explication3 : "Livraison de votre pièce unique en porte à porte dès la fin de la confection.",
            Title_Explication4 : "Retouches eventuelles",
            Subtitle_Explication4 : "Ajustez votre tenue avec une retouche finale pour vous assurer d'un ajustement parfait et d'une tenue impecable!",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online tailoring",
            Title_Home : "Tailoring",
            Subtitle_Home : "The tradition of tailoring is an ongoing art style, transmitted from father to son since generations. Trois Fils is proud to offer you this level excellence thanks to its innovative concept",
            Button_About : "Our Story",
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
            Title_Innovation : "The concept of Trois-Fils",
            Subtitle_Innovation : "The creation of our collective of tailors dates back to spring 2019. This initiative was initiated by three brothers passionate about sewing. Starting from the postulate that tailor-made products were an effective counterweight to the trend of mass consumption, these enthusiasts decided to find a solution to offer these products at suitable prices, while maintaining a high standard of quality and service.",
            Subtitle_Innovation1 : "Their idea is simple: Relieve the tailors who so wish from repetitive and time-consuming tasks such as taking measurements or administration, reduce the pressure of fixed costs and allow them to concentrate on creation and tailoring. This idea was the starting point of a great adventure for these three brothers. First of all, a human adventure because it led them on the roads in search of collaborators who share their vision of made-to-measure clothing, partners and, of course, the best tailors in France!",
            Subtitle_Innovation2 : "We are extremely proud of the evolution of this initiative, and thank our three creators for their involvement. Today, representing a reliable solution for the entire Custom-Made industry, our platform has enabled our professionals to offer their talents at more affordable prices, by focusing on their profession. Accessible worldwide, it also positions itself as an ambassador, advocating for quality, timeless and long-lasting items. The adventure has only just begun, but our tailors already have more than 3,000 bespoke garments, so many unique pieces that testify to their talent!",
            Title_Explication1 : "Design of your creation",
            Subtitle_Explication1 : "Design your outfit with our tailors! Choosing the fabric, the design and creating an outfit unique and a perfect fit!",
            Title_Explication2 : "Measures & confection",
            Subtitle_Explication2 : "It's time to take your measures and to start the tailoring of your creation. 100% Online, our tailor's experience ensure you a service of quality.",
            Title_Explication3 : "Preparation & Shipment",
            Subtitle_Explication3 : "Delivery of your creation door to door, anywhere in the world. Your tailor will decide with you the most suitable shipment method.",
            Title_Explication4 : "Alteration & Perfection",
            Subtitle_Explication4 : "Perfect your outfit with final alterations, and enjoy the unique and perfectly fitted outfit you created with our tailors!",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }
}

function insert_the_HTML(translation){
    Subtitle_HomePrice
    document.getElementById('Title_HomePrice').innerHTML = translation.Title_HomePrice;
    document.getElementById('Price1').innerHTML = translation.Price1;
    document.getElementById('Price3').innerHTML = translation.Price3;
    document.getElementById('Price4').innerHTML = translation.Price4;
    document.getElementById('Price5').innerHTML = translation.Price5;
    document.getElementById('Price6').innerHTML = translation.Price6;
    document.getElementById('Price7').innerHTML = translation.Price7;
    document.getElementById('Price8').innerHTML = translation.Price8;
    document.getElementById('Subtitle_HomePrice').innerHTML = translation.Subtitle_HomePrice;
    document.getElementById('Subtitle_HomePrice_mobile').innerHTML = translation.Subtitle_HomePrice_mobile;
    document.getElementById('Title_Explication1').innerHTML = translation.Title_Explication1;
    document.getElementById('Subtitle_Explication1').innerHTML = translation.Subtitle_Explication1;
    document.getElementById('Title_Explication2').innerHTML = translation.Title_Explication2;
    document.getElementById('Subtitle_Explication2').innerHTML = translation.Subtitle_Explication2;
    document.getElementById('Title_Explication3').innerHTML = translation.Title_Explication3;
    document.getElementById('Subtitle_Explication3').innerHTML = translation.Subtitle_Explication3;
    document.getElementById('Title_Explication4').innerHTML = translation.Title_Explication4;
    document.getElementById('Subtitle_Explication4').innerHTML = translation.Subtitle_Explication4;
    document.getElementById('Title_Innovation').innerHTML = translation.Title_Innovation;
    document.getElementById('Subtitle_Innovation').innerHTML = translation.Subtitle_Innovation;
    document.getElementById('Subtitle_Innovation1').innerHTML = translation.Subtitle_Innovation1;
    document.getElementById('Subtitle_Innovation2').innerHTML = translation.Subtitle_Innovation2;
    document.getElementById('Title_Page_Home').innerHTML = translation.Title_Page;
    document.getElementById('Title_Home').innerHTML = translation.Title_Home;
    document.getElementById('Subtitle_Home').innerHTML = translation.Subtitle_Home;
    document.getElementById('Button_About').innerHTML = translation.Button_About;
    document.getElementById('Tailoring_Ladies').innerHTML = translation.Tailoring_Ladies;
    document.getElementById('Tailoring_Gent').innerHTML = translation.Tailoring_Gent;
    document.getElementById('Title_Wedding').innerHTML = translation.Title_Wedding;
    document.getElementById('Title_Wedding_d').innerHTML = translation.Title_Wedding_d;
    document.getElementById('Subtitle_Wedding').innerHTML = translation.Subtitle_Wedding;
    document.getElementById('Button_Wedding').innerHTML = translation.Button_Wedding;
    document.getElementById('Title_Real').innerHTML = translation.Title_Real;
    document.getElementById('Subtitle_Real').innerHTML = translation.Subtitle_Real;
    document.getElementById('Button_Real').innerHTML = translation.Button_Real;
}

