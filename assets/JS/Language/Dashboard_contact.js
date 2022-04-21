language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_dashboard : "Votre espace tailleur",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter mon tailleur",
            Title_Page : "Trois Fils | Tailleur sur mesure en ligne | Contactez nous",
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
            comment1 : "TroisFils m'a préparé mon costume de mariage! Je l'ai reçu en deux semaines et il était parfaitement ajusté! J'ai meme reçu un appel du tailleur pour me demander si une retouche était nécessaire! Je ferai appel à leurs services à nouveau! Merci!",
            tailoring_perso : "Mon tailleur personnel",
            perso_tailor : "Votre tailleur personnel s'appelle Jean! Il reste à votre disposition pour vous assister et vous proposer ses meilleurs conseils.",
            contact_perso : "Localisé en France, vous pouvez le contacter par whatsapp, Email, Messenger ou Téléphone à votre convenance!",
            comment_cus : "Quelques commentaires à propos de notre service.",
            comment_cus_para : "La couture sur mesure est un art qui cherche à proposer des tenues ajustées et de qualité. Nous considérons notre devoir de vous apporter des conseils et un support de qualité.",
            Our_values : "Nos valeurs",
            comment2 : "J'ai commandé une robe pour mon enterrement de vie de jeune fille et elle était magnifique. J'ai réellement apprécié le fait que je puisse créer ma propre tenue, et les conseils de mon tailleur étaient vraiment utiles.",
            comment3 : "Je traivaille en costume tous les jours et je pense que c'est très important d'avoir un dressing professionnel. C'est pourquoi j'apprécie le sur mesure. La différence st là et elle se voit. Trois-Fils est vraimment utile parceque la confection est rapide, précise et relativement abordable pour des costumes de cette qualité."
        
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_dashboard : "Your tailoring dashboard",
            Profile : "My profile",
            Measures : "My measures",
            Orders : "My orders",
            Contact : "Contact my tailor",
            Title_Page : "Trois Fils | Online tailoring | Contact",
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

            tailoring_perso : "My personal tailor",
            perso_tailor : "Your personnal tailor is Jean! He remains at your disposal anytime to assist you and provide you the best advises and support.",
            contact_perso : "Located in france, you can contact him by whatsapp, Email, Messenger or Cellphone!",
            comment_cus : "Few comments regarding our consumer service",
            comment_cus_para : "Custom tailoring is an art that tend to propose you quality and adjusted clothing. We consider our duty to provide our consumers the best service and advises.",
            Our_values : "Our values",
            comment1 : "TroisFils prepared me my wedding suit! I received it within 2 weeks and it was perfectly adjusted! I even received a call from my tailor that asked me if an adjustment was needed! I'll of cours use their services again. Thank you!",
            comment2 : "I asked for a dress for my Bachelorette Party and it was amazing. I really liked the fact that I created my own outfit, and the advises from the tailor were very helpful.",
            comment3 : "I need suits to work everyday and I think its very important to look professional. This is why I really enjoy tailored suits because we can really tell the difference. Trois-Fils is really useful because the confection is fast, precise and relatively afordable for a suit of this quality."
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('Title_Dashboard').innerHTML = translation.Title_dashboard;
    document.getElementById('contact_tailor').innerHTML = translation.Contact;
    document.getElementById('Orders').innerHTML = translation.Orders;
    document.getElementById('Measures').innerHTML = translation.Measures;
    document.getElementById('Profile').innerHTML = translation.Profile;
    document.getElementById('tailoring_perso').innerHTML = translation.tailoring_perso;
    document.getElementById('perso_tailor').innerHTML = translation.perso_tailor;
    document.getElementById('contact_perso').innerHTML = translation.contact_perso;
    document.getElementById('tailoring_perso1').innerHTML = translation.tailoring_perso;
    document.getElementById('perso_tailor1').innerHTML = translation.perso_tailor;
    document.getElementById('contact_perso1').innerHTML = translation.contact_perso;
    document.getElementById('comment_cus').innerHTML = translation.comment_cus;
    document.getElementById('comment_cus_para').innerHTML = translation.comment_cus_para;
    document.getElementById('Our_values').innerHTML = translation.Our_values;
    document.getElementById('comment1').innerHTML = translation.comment1;
    document.getElementById('comment2').innerHTML = translation.comment2;
    document.getElementById('comment3').innerHTML = translation.comment3;

}

