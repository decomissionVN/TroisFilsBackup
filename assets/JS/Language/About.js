language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Tailleur sur mesure en ligne | Notre compagnie",
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
            Trois_Fils : "Trois-Fils",
            Trois_Fils1 : "Trois-Fils",
            main_subtitle : "Trois-Fils est une entreprise française de couture sur mesure. Notre technologie innovante permet à nos tailleurs de se concentrer sur la confection de pièces d'exception pour le monde entier.",
            main_subtitle_long : "Trois-Fils est une entreprise française de couture sur mesure. Notre technologie innovante permet à nos tailleurs de se concentrer sur la confection de pièces d'exception pour le monde entier. En contrepoids à une tendance de mode de plus en plus éphémère, nous proposons nos client des confections de qualité, sur mesure, qu'ils pourront conserver. Ecologique, cette alternative , à la consommation de masse représente également une confection de qualité qui vous apportera entière satisfaction.",
            contact_personnal : "Contacter votre tailleur",
            concept_troisfils : "Le concept de Trois-Fils",
            concept_para : "La création de notre collectif de tailleurs remonte au printemps 2019. Cette initiative fut initiée par trois frères passionnés de couture. Partant du postulat que le sur-mesure était un contrepoids efficace à la tendance de consommation de masse, ces passionnés ont décidé de trouver à une solution pour proposer ces produits à des prix convenables, en gardant un haut standard de qualité et de service.",
            concept_para1 : "Leur idée est simple : Décharger les tailleurs qui le souhaitent des tâches répétitives et prenantes telles que la prise de mesure ou l’administratif, réduire la pression des charges fixes et leur permettre de se concentrer sur la création et la confection. Cette idée fut le point de départ d’une grande aventure pour ces trois frères. Une aventure humaine d’abord car elle les a menés sur les chemins à la recherche de collaborateurs partageant leur vision de la confection sur mesure, de partenaires et, bien sûr, des meilleurs tailleurs de France !",
            concept_para2 : "Nous sommes extrêmement fières de l’évolution de cette initiative, et remercions nos trois créateurs pour leur implication. Représentant aujourd’hui une solution fiable pour toute la filière du Sur-Mesure, notre plateforme a permis à nos professionnels de proposer leurs talents à des prix plus abordables, en se concentrant sur leur corps de métier. Accessible dans le monde entier, elle se positionne également en tant qu’ambassadeur, plaidant pour des articles de qualité, indémodables et à longue durée de vie. L’aventure ne fait que commencer, mais nos tailleurs comptent déjà plus de 3000 confections sur mesure, autant de pièces uniques témoin de leur talent !",
            We_here : "Nos tailleurs vous assistent pour chaque étape de votre création.",
            hundread_tailored : "Nos costumes et robes sont confectionnés entièrement sur mesure!",
            deliver : "Vos pièces vous sont envoyés depuis la france par DHL.",
            alteration : "Parce que nous parlons de sur mesure, les ajustements sont inclus.",
            TFInnov : "Trois-Fils & Innovation",
            TFI_para : "Trois-Fils a été conçu pour proposer un service de tailleur de qualité et des prix raisonnables. Se plaçant en contrepoids de la tendance de surconsommation, notre collectif propose une solution innovante pour augmenter l’accessibilité de la couture sur mesure.",
            TFI_para1 : "Nous devons tout d’abord nous pencher sur le problème. Pourquoi un costume sur mesure de qualité est-il si cher ? La réponse est complexe mais peut se résumer en deux mots : Temps et Frais fixes. Si la comptabilité et les tâches administratives incombant aux artisans est lourde cela s’ajoute à la répétitivité des taches à effectuer. La prise de mesure par le tailleur est un exercice extrêmement prenant, de même que la préparation des commandes et le serve après-vente. De plus, les frais fixes relatifs à la confection sur mesure sont importants notamment par la mise en place et l’entretien de l’espace d’accueil du client. Avec Trois-Fils, nos tailleurs se concentrent sur la couture. Guidé pas à pas par des tutoriels et des conseils de nos tailleurs, vous pourrez prendre vos mesures directement sur votre espace personnel. Vos rendez-vous avec votre tailleur personnel sera mené par vidéo-conférence, vous donnant l’opportunité de partager vos questions avec un expert et de créer votre propre tenue sur mesure.",
            TFI_para2 : "Ce concept permet à votre tailleur de vous envoyer votre création depuis la France dans un délai de 15 jours. Sur mesure oblige, la confection d’un costume, smoking ou robe sur mesure inclue, si besoin, une retouche à la réception de votre tenue. Pour cela, contactez votre tailleur personnel afin qu’il puisse ajuster sa création via l’un de nos partenaires dans votre ville.",
            Ecology : "Trois-Fils & Ecologie",
            Ecology_para : "Nous sommes convaincus que les produits de qualité, taillés par des professionnels, présentent un caractère particulier. Parfaitement ajustés, ils représentent un savoir-faire dont nous pouvons tous être fières. Ces atouts représentent à notre sens la meilleure mesure à l’encontre de la tendance de surconsommation.",
            Ecology_para1 : "Cette conviction est au cœur de notre initiative et s’accompagne d’un grand sens des responsabilités. Pour cette raison, l’empreinte carbone de nos costumes est réduite au maximum et nos équipes s’engagent auprès des acteurs locaux et de nos partenaires pour défendre cette conviction.",
            Ecology_para2 : "Pour cette raison également, Trois-Fils supporte l’initiative VALIOS pour ses envois de produits. Cette plateforme collaborative permet le transport et la livraison des colis par des voyageurs occasionnels proposant un service de transport. Les envois sont assurés par CHUBB, leader mondial de l’assurance transport. Egalement engagée écologiquement, VALIOS permet de réduire drastiquement les émissions carbones dus à la livraison, notamment pour le dernier kilomètre. Votre tailleur vous proposera cette solution de livraison lors de votre entretien et restera à votre écoute pour toutes vos questions.",
            Qualite : "Sur mesure - Un gage de qualité",
            Qualite_para : "Le sur mesure a une histoire, un ressentis.",
            Qualite_para1 : "Ce savoir-faire a perduré, a survécut l’industrialisation et représente encore aujourd’hui un art et un savoir vivre particulier. Parfaitement ajusté, le une robe, un costume sur mesure n’est pas seulement confectionné… Il est entièrement dessiné puis créé pour le client, donnant naissance à une pièce unique.",
            Qualite_para2 : "Une tenue sur mesure reflète une maturité et un professionnalisme appréciable par vos pairs, une attention de tous les jours ou des grands moments. Pour un mariage ou une soirée, nos meilleurs atouts sont de mise. Non pas parce qu’ils dévoilent qui nous sommes, mais parce qu’ils nous représentent. Ces atouts ne nous définissent pas mais définit l’incidence des regards qui se porteront sur nous. Pour cette raison, la couture sur mesure se construit au plus proche de chacun, créant une tenue de qualité à partir d’une idée.",
            Qualite_para3 : "Toute création de nouvelle pièce avec votre tailleur se fera lors d’un appel vidéo sur notre plateforme. Cette communication est essentielle à la présentation des tissus, des textures, des couleurs et de leur reflet. Cela vous permettra d’aborder chaque aspect de votre création. Les tissus, la couleur, mais aussi les doublures, boutons, ceintrage…",
            Qualite_para4 : "Conseillé et guidé par un tailleur, vous concevrez ensemble la tenue adaptée à votre prochaine opportunité. L’expertise de nos collaborateurs est importante pour la conception aussi bien que la confection. En effet, celle-ci vous permettra de trouver au moment de la création l’équilibre nécessaire entre conventions et personnalisation. La coupe et l’ajustement de vos pièces est faite à la main, garantissant l’harmonie et la qualité de vos créations.",
            Worldwide : "Un service disponible dans le monde entier",
            Title_Explication1 : "Un service sur mesure",
            Subtitle_Explication1 : "Nos pièces sur mesure sont créées entièrement avec vous, et votre rendez-vous vidéo avec votre tailleur vous permettra de profiter au maximum de son expertise.",
            Title_Explication2 : "Créer votre pièce",
            Subtitle_Explication2 : "Vous aurez l'opportunité de créer et ajuster à volonté votre création. Your personal tailor will assist you to choose the best design and fabrics for every creation.",
            Title_Explication3 : "Take your measures",
            Subtitle_Explication3 : "Your tailor will assist you for every step, including the online measurment session. Fast, easy and guided, get ready for an outstanding look!",
            Title_Explication4 : "Finalize your creation",
            Subtitle_Explication4 : "You are ordering a custom suit. For this reason, Trois-Fils ensure you a perfectly fitted piece and an eventual final alteration after its reception.",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online tailoring | Our compagny",
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
            Trois_Fils : "Trois-Fils",
            Trois_Fils1 : "Trois-Fils",
            main_subtitle : "Trois-Fils is a french and innovative compagny of tailoring, focusing on the confection of custom pieces all around the world.",
            main_subtitle_long : "Trois-Fils is a french and innovative compagny of tailoring, focusing on the confection of custom pieces all around the world. Because the fashion production is every year more ephemere, we wish to provide our consumers a quality work on which they can rely. Ecological, this alternative to the mass consumption is as well a pledge of quality and will provide you the greatest satisfaction.",
            contact_personnal : "Contact your personal tailor",
            concept_troisfils : "The concept of Trois-Fils",
            concept_para : "The creation of our collective of tailors dates back to spring 2019. This initiative was initiated by three brothers passionate about sewing. Starting from the postulate that tailor-made products were an effective counterweight to the trend of mass consumption, these enthusiasts decided to find a solution to offer these products at suitable prices, while maintaining a high standard of quality and service.",
            concept_para1 : "Their idea is simple: Relieve the tailors who so wish from repetitive and time-consuming tasks such as taking measurements or administration, reduce the pressure of fixed costs and allow them to concentrate on creation and tailoring. This idea was the starting point of a great adventure for these three brothers. First of all, a human adventure because it led them on the roads in search of collaborators who share their vision of made-to-measure clothing, partners and, of course, the best tailors in France!",
            concept_para2 : "We are extremely proud of the evolution of this initiative, and thank our three creators for their involvement. Today, representing a reliable solution for the entire Custom-Made industry, our platform has enabled our professionals to offer their talents at more affordable prices, by focusing on their profession. Accessible worldwide, it also positions itself as an ambassador, advocating for quality, timeless and long-lasting items. The adventure has only just begun, but our tailors already have more than 3,000 bespoke garments, so many unique pieces that testify to their talent!",
            We_here : "Our tailors are available and help you on every step of your confection",
            hundread_tailored : "Our suits and dresses are 100% tailored for an outstanding result",
            deliver : "The tailored pieces are sent from France by DHL to ensure a secure delivery",
            alteration : "Because the pieces are tailored, alterations are of course included.",
            TFInnov : "Trois-Fils & Innovation",
            TFI_para : "Trois-Fils has been designed to offer quality tailoring at reasonable prices. Counterbalancing the trend of overconsumption, our collective offers an innovative solution to increase the accessibility of tailor-made sewing.",
            TFI_para1 : "First we need to address the problem. Why is a quality bespoke suit so expensive? The answer is complex but can be summed up in two words: Time and Fixed costs. If the accounting and administrative tasks incumbent on artisans are heavy, this adds to the repetitiveness of the tasks to be performed. Taking measurements by the tailor is an extremely demanding exercise, as is the preparation of orders and after-sales service. In addition, the fixed costs relating to tailor-made tailoring are significant, in particular for the establishment and maintenance of the customer reception area. With Trois-Fils, our tailors focus on sewing. Guided step by step by tutorials and advice from our tailors, you can take your measurements directly in your personal space. Your appointments with your personal tailor will be conducted via video conference, giving you the opportunity to share your questions with an expert and create your own tailor-made outfit.",
            TFI_para2 : "This concept allows your tailor to send you your creation from France within 15 days. Made to measure requires the making of a tailor-made suit, tuxedo or dress including, if necessary, a touch-up on receipt of your outfit. To do this, contact your personal tailor so that he can adjust his creation through one of our partners in your city.",
            Ecology : "Trois-Fils & Ecology",
            Ecology_para : "We are convinced that quality products, cut by professionals, have a special character. Perfectly fitted, they represent a skill of which we can all be proud. These strengths represent in our view the best measure against the trend of overconsumption.",
            Ecology_para1 : "This conviction is at the heart of our initiative and is accompanied by a great sense of responsibility. For this reason, the carbon footprint of our costumes is reduced as much as possible and our teams work with local players and our partners to defend this conviction.",
            Ecology_para2 : "For this reason too, Trois-Fils supports the VALIOS initiative for its product shipments. This collaborative platform allows the transport and delivery of parcels by occasional travelers offering a transport service. Shipments are insured by CHUBB, the world leader in transport insurance. Also committed to the environment, VALIOS drastically reduces carbon emissions due to delivery, especially for the last mile. Your tailor will offer you this delivery solution during your interview and will remain at your disposal for all your questions.",
            Qualite : "Custom tailoring & quality",
            Qualite_para : "The tailor-made has a story, a feeling.",
            Qualite_para1 : "This know-how has endured, survived industrialization and still represents a particular art and savoir-vivre today. Perfectly fitted, a dress, a tailor-made suit is not only made ... It is entirely designed and then created for the customer, giving birth to a unique piece.",
            Qualite_para2 : "A made-to-measure outfit reflects maturity and professionalism that your peers appreciate, everyday attention or great moments. For a wedding or an evening, our best assets are in order. Not because they reveal who we are, but because they represent us. These strengths do not define us, but define the impact of the looks that will be on us. For this reason, tailor-made sewing is built as close as possible to everyone, creating a quality outfit from an idea.",
            Qualite_para3 : "Any creation of a new piece with your tailor will be done during a video call on our platform. This communication is essential to the presentation of fabrics, textures, colors and their reflection. This will allow you to approach every aspect of your creation. The fabrics, the color, but also the linings, buttons, belting ...",
            Qualite_para4 : "Advised and guided by a tailor, you will design together the outfit adapted to your next opportunity. The expertise of our employees is important for the design as well as the tailoring. Indeed, it will allow you to find at the time of creation the necessary balance between conventions and personalization. The cut and fit of your pieces is done by hand, ensuring the harmony and quality of your creations.",
            Worldwide : "A service available worldwide",
            Title_Explication1 : "A custom service",
            Subtitle_Explication1 : "Our tailored pieces are entirely created with you, and a video appointment with your tailor will allow you to fully benefit from his expertise.",
            Title_Explication2 : "Create your design",
            Subtitle_Explication2 : "You are free to create and customize your outfit. Your personal tailor will assist you to choose the best design and fabrics for every creation.",
            Title_Explication3 : "Take your measures",
            Subtitle_Explication3 : "Your tailor will assist you for every step, including the online measurment session. Fast, easy and guided, get ready for an outstanding look!",
            Title_Explication4 : "Finalize your creation",
            Subtitle_Explication4 : "You are ordering a custom suit. For this reason, Trois-Fils ensure you a perfectly fitted piece and an eventual final alteration after its reception.",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }
}

function insert_the_HTML(translation){
    document.getElementById('Title_Explication1').innerHTML = translation.Title_Explication1;
    document.getElementById('Subtitle_Explication1').innerHTML = translation.Subtitle_Explication1;
    document.getElementById('Title_Explication2').innerHTML = translation.Title_Explication2;
    document.getElementById('Subtitle_Explication2').innerHTML = translation.Subtitle_Explication2;
    document.getElementById('Title_Explication3').innerHTML = translation.Title_Explication3;
    document.getElementById('Subtitle_Explication3').innerHTML = translation.Subtitle_Explication3;
    document.getElementById('Title_Explication4').innerHTML = translation.Title_Explication4;
    document.getElementById('Subtitle_Explication4').innerHTML = translation.Subtitle_Explication4;
    document.getElementById('Worldwide').innerHTML = translation.Worldwide;
    document.getElementById('Qualite').innerHTML = translation.Qualite;
    document.getElementById('Qualite_para').innerHTML = translation.Qualite_para;
    document.getElementById('Qualite_para1').innerHTML = translation.Qualite_para1;
    document.getElementById('Qualite_para2').innerHTML = translation.Qualite_para2;
    document.getElementById('Qualite_para3').innerHTML = translation.Qualite_para3;
    document.getElementById('Qualite_para4').innerHTML = translation.Qualite_para4;
    document.getElementById('Ecology').innerHTML = translation.Ecology;
    document.getElementById('Ecology_para').innerHTML = translation.Ecology_para;
    document.getElementById('Ecology_para1').innerHTML = translation.Ecology_para1;
    document.getElementById('Ecology_para2').innerHTML = translation.Ecology_para2;
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('Trois_Fils').innerHTML = translation.Trois_Fils;
    document.getElementById('Trois_Fils1').innerHTML = translation.Trois_Fils1;
    document.getElementById('main_subtitle').innerHTML = translation.main_subtitle;
    document.getElementById('main_subtitle_long').innerHTML = translation.main_subtitle_long;
    document.getElementById('contact_personnal').innerHTML = translation.contact_personnal;
    document.getElementById('concept_troisfils').innerHTML = translation.concept_troisfils;
    document.getElementById('concept_para').innerHTML = translation.concept_para;
    document.getElementById('concept_para1').innerHTML = translation.concept_para1;
    document.getElementById('concept_para2').innerHTML = translation.concept_para2;
    document.getElementById('TFInnov').innerHTML = translation.TFInnov;
    document.getElementById('TFI_para').innerHTML = translation.TFI_para;
    document.getElementById('TFI_para1').innerHTML = translation.TFI_para1;
    document.getElementById('TFI_para2').innerHTML = translation.TFI_para2;
}

