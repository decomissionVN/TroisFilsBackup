language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_page : "Trois Fils | Tailleur pour Femmes | Lady ",
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
            title_lady : "Tailleur sur mesure | Pour Femme | Ladies",
            subtitle_lady: "Nous sommes à vos cotés pour tous vous évènements. Robes de mariée, costume pour un nouveau poste ou robe du soir, ajustez votre tenue avec votre tailleur Trois-Fils!",
            outline : "Soulignez votre beauté!",
            savoir_faire : "Ce savoir-faire est transmit de père en fils depuis des générations pour une raison simple: la confection sur mesure est l'occasion unique de vous créer une tenue d'exception.",
            wedding_tailoring : "Tailleur de mariage | Pour la mariée ",
            wedding_subtitle : "Votre mariage est une célération et mérite une tenue d'exception créé juste pour vous!",
            choices_title : "Robes & Costumes pour femmes",
            dress_ch : "Créez votre robe",
            wedding_ch : "Créez votre robe de mariée",
            suit_ch : "Créez votre costume",
            design_app : "Création & Rendez-vous",
            design_app1 : "Commencez votre création en explorant les possibilités avec notre simulateur. Cet outil vous permettra de réfléchir et sélectionner les designs correspondant à vos attentes.",
            design_app2 : "Souvenez-vous que nos tailleurs sont là pour vous aider et répondre à toutes vos questions! Vous serez ensuite en mesure de prendre un rendez-vous pour discuter et afiner votre design une fois la simulation finalisée.",
            realisation : "Nos realisations",
            realisation1 : "Nos tailleurs vous assistent! Pour une robe de mariée, pour un costume ou une robe de soirée, notre expertise vous assure un produit de qualité et un service d'exception. Nous seront toujours là pour vous, et pour vous proposer un service sur mesure!",
            realisation2 : "Découvrir",
            innovation : "Trois-Fils & Innovation",
            innovation1 : "Notre savoir faire s'appuie sur notre implication et le serieux de nos tailleurs. Notre passion nous a menée à proposer un moyen innovant de proposer des produits de qualité et sur mesure à tous nos clients.",
            innovation2 : "Nos costumes sont respectueux de l'environnement, des produits de qualité que vous conserverez sur le long terme. Ce produits personnalisés sont maintenant disponibles à un prix accessible.",
            innovation3 : "L'utilisation d'internet et la mise en place de notre simulateur en ligne permet maintenant aux tailleurs de notre collectif de proposer leur expertise dans le monde entier et de proposer leurs produits à des prix plus abordables. En effet, nos tailleurs peuvent maintenant se concentrer sur leur passion : La création et la confection de pièces uniques.",
            more_inno : "A propos",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_page : "Trois Fils | Tailoring for ladies",
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
            title_lady : "Custom tailoring | For Ladies",
            subtitle_lady: "We remain beside you for every event. Wedding dresses, suits for a new job, a cocktail dress for a party. Customize your outfit with Trois-Fils!",
            outline : "Outline your beauty!",
            savoir_faire : "This 'savoir-faire' is shared since generations for a simple reason: Custom tailoring is the best way to purchase an unique outfit for a special occasion!",
            wedding_tailoring : "Wedding tailors | For the brides ",
            wedding_subtitle : "The wedding is a very important celebration, and desserve an outfit created just for you!",
            choices_title : "Ladies dresses & suits",
            dress_ch : "Create your dress",
            wedding_ch : "Create your wedding dress",
            suit_ch : "Create your suit",
            design_app : "Design & tailor's appointment",
            design_app1 : "Start your creation by designing it on our simulator. This tool will help you decide which are designs you prefer and wish to discuss with the tailor.",
            design_app2 : "Remember that our tailors are here to help you! You will be able to take an appointment with them to discuss and adapt your design once you completed the simulation.",
            realisation : "Our realisations",
            realisation1 : "Our tailors are here for you! For a wedding dress, for a suit or a dress, our expertise will provide you the best taloring product and advises to ensure your look is always outstanding.",
            realisation2 : "More realisations",
            innovation : "Trois-Fils & Innovation",
            innovation1 : "Our 'savoir-faire' relies on passion, application and excellence. The technic advancees in the field of tailoring are amazing and allow us to improve our services.",
            innovation2 : "Our suits and tailoring fabric are Eco-friendly, excellent quality which means they will remain in excellent state longer than a non-tailored piece and now affordable",
            innovation3 : "The use of internet and the developpement of our online design simulator allow us to extend our expertize to the whole world and to lower our confection price. indeed, with online appointments, our tailors can now focus entirely to the confection and design of the pieces you ask for!",
            more_inno : "Learn more",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_page').innerHTML = translation.Title_page;
    document.getElementById('title_lady').innerHTML = translation.title_lady;
    document.getElementById('subtitle_lady').innerHTML = translation.subtitle_lady;
    document.getElementById('outline').innerHTML = translation.outline;
    document.getElementById('savoir_faire').innerHTML = translation.savoir_faire;
    document.getElementById('wedding_tailoring').innerHTML = translation.wedding_tailoring;
    document.getElementById('wedding_subtitle').innerHTML = translation.wedding_subtitle;
    document.getElementById('choices_title').innerHTML = translation.choices_title;
    document.getElementById('dress_ch').innerHTML = translation.dress_ch;
    document.getElementById('wedding_ch').innerHTML = translation.wedding_ch;
    document.getElementById('suit_ch').innerHTML = translation.suit_ch;
    document.getElementById('design_app').innerHTML = translation.design_app;
    document.getElementById('design_app1').innerHTML = translation.design_app1;
    document.getElementById('design_app2').innerHTML = translation.design_app2;
    document.getElementById('realisation').innerHTML = translation.realisation;
    document.getElementById('realisation1').innerHTML = translation.realisation1;
    document.getElementById('realisation2').innerHTML = translation.realisation2;
    document.getElementById('innovation').innerHTML = translation.innovation;
    document.getElementById('innovation1').innerHTML = translation.innovation1;
    document.getElementById('innovation2').innerHTML = translation.innovation2;
    document.getElementById('innovation3').innerHTML = translation.innovation3;
    document.getElementById('more_inno').innerHTML = translation.more_inno;
}

