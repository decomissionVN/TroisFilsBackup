language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Tailleur en ligne",
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
            Contact : "Contactez la boutique",
            Login : "Connexion",
            Signup : "Inscription",
            Dashboard : "Mon espace",
            Signout : "Déconnexion",
            Welcome_Login : "Bienvenue sur votre espace!",
            Email : "Email",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
            About_footer : "La Boutique Trois Fils est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine. Spécialisée dans les thés d'exception, la boutique vous accueil du lundi de 15h à 19h, le mardi au samedi de 11h à 19h. Du 1er au 31 août, la boutique sera fermée le lundi et dimanche",
            Our_tea : "Nos thés",
            Accessoires : "Le coins des accessoires",
            Souvenirs : "Un petit souvenir",
            Title_Shop : "Une coupe de thé?",
            Subtitle_shop : "Située au centre de Paris, à un pas de l'Opera Garnier, la boutique 'Trois Fils' vous emportera dans un univers extraordinaire. Vous y trouverez des thés d'exception qui ravirons vos sens. Rejoinez nous vite et découvrez notre sélection.",
            Button_shop : "Découvrir nos sélections",
            Title_bienfaits : "Bienfaits du thé",
            Subtitle_bienfaits : "Boire du thé vert est de plus en plus recommandé en raison de sa forte teneur en cathéchines, polyphénols présents en grandes quantités dans le thé vert. Ces composants, puissants anti oxydants qui s'opposent aux effets des radicaux libres, diminueraient les risques cardio vasculaires en raison de leurs effets cardio protecteurs.",
            Button_bienfaits : "En savoir plus",
            Title_Real : "Découvrez l'art du thé",
            Subtitle_Real : "'Ne laissez pas bouillir l’eau, l’oxygène s’évaporerait et affadirait votre thé; laissez l’eau frémir un court instant, puis adaptez en fonction du thé: eau frémissante pour les thés noirs, oolongs, parfumés et certains thés verts; entre 60 et 80° pour quelques thés verts ou blancs d’exception.'",
            Button_Real : "Read more",



            Slogan : "General Condition of Use",
            Disclamer : "Attention – disclaimer",
            Disclamer1 : "The user have to read carefully and accept these terms and conditions of use before using the services proposed by Trois Fils. These terms and conditions of use are defining the conditions and legal obligations that Trois Fils undertakes to comply with the provision of its service to users on Trois Fils' mobile application and website (hereinafter the « platform Trois Fils »). We remind you that the french version will predominate over any other translated version.",
            Disclamer2 : "All the services provided by Trois Fils to the user on the platform Trois Fils indicate complete acceptance of these terms and conditions of use. The simple act of using these services implies full acceptance of the present terms and conditions of use and the user of the platform Trois Fils expressly declare and acknowledge this statement.",
            Disclamer3 : "The use of the services and of the platform Trois Fils is exclusively reserved for private individuals who are of age of majority and legally able to purchase contracts in French law.",
            Legal_mentions : "1- Legal notices",
            Legal_mentions1 : "Editor of the website and the mobile application : Website and mobile application are edited by Trois Fils - (Hereinafter called « Trois Fils »)",
            Legal_mentions2 : "Publication director : Trois Fils",
            Legal_mentions3 : "Data controller : Trois Fils",
            Legal_mentions4 : "Contact : contact@troisfils.com",
            Legal_mentions5 : "Hosting provider : DigitalOcean",
            Object_CGU : "2- Purpose – Validation – Acceptance",
            Object_CGU1 : "These Terms and Conditions of Use (Hereinafter the « GCU ») sets out the legal framework for the use of the services provided by Trois Fils on the website and the mobile application, as well as the conditions and terms for the relationship between users and Trois Fils. The version of the CGU available on the mobile application and website will prevail, if necessary, over any other version of these CGU except, in accordance with common law, for all the modifications made after the use of the services.",
            Object_CGU2 : "These CGU have been updated the 27th of November 2020.",
            Object_CGU3 : "The subsequent modifications of these CGU will be opposable to website's and mobile app's users l’Application et le Site Internet as of their publication on the website and mobile application. These CGU are accepted by the user and shall take effect on the same day than the subscription to Trois Fils's services. These CGU shall apply for all the duration in which the user is using the services provided by Trois Fils on the website and mobile application.",
            Besoins : "3- Verification of adequate of the needs to the service",
            Besoins1 : "The user of the platform Trois Fils hereby declares to have verified the adequacy of the service provided by Trois Fils to its needs and considers it to be appropriate to its needs. The user declares to have received from Trois Fils all the information and advises that he needed to subscribe these cgu and consequently waives any challenge to this fact.",
            Besoins2 : "In addition, the user acknowledges to have the knowledge, competency and resources, including human and technical resources, requested to use the service of this platform Trois Fils.",
            Creation : "4- Creation of user account and acceptance of the cgu",
            Creation1 : "The user account is a personal space used by the user in order to have access to the services. In the creation of his account, the user shall complete the information below : Name, Surname, Email and Password",
            Creation2 : "As soon as the user click on the button « create mu account », a validation of the form fields is carried out. If one field is not properly filled, an error message will appear to inform the user. If all fields are filled properly and the E-mail address is valid, the visitor is redirected to the website with an access to his personal dashboard.",
            Creation3 : "The user undertakes to not choose any ID code prejudicing the rights of third parties and therefore any ID code prejudicing an intellectual property right, a registered trademark, a company name or a patronymic name, and without this list being exhaustive. In addition, the user commits to provide fair and transparent information on his profile, and to use his own E-mail address.",
            Creation4 : "In order to create an account, the user shall use a valid E-mail adress, and will therefore be able to activate his account.",
            Creation5 : "If the user has forgotten his password, a link is sent to the user by E-mail and will allow him to change his password. The user is informed that Trois Fils may delete or block in a discretionary manner and at any time a user account for failure to comply with these CGU, which the user acknowledges expressly",
            Creation6 : "Use and responsibilities related to the use of the user account",
            Creation7 : "Each user acknowledges his entire responsibility in the use made of its ID codes as well as the mobile app and website. The user therefore commits to perform under its own ID codes all acts performed within its user account. More, any act performed in these ID codes will be considered as performed by the user himself or herself.",
            Creation8 : "In case the user forgets his ID codes, of fraudulent use or non-authorized use of its ID codes by another user, Trois Fils' responsibility will not be committed in any case and the User must immediately inform Trois Fils customer service of the situation by E-mail at the address : contact@troisfils.com",
            Creation9 : "After reception of this written notification properly justified, Trois Fils will carry out a detailed examination of the dossier and might, as a security measure, suspend all access to the user account. Trois Fils shall process the user's request as quick as possible and shall send the user the new ID codes in return by electronic mail, after the establishment of the user's identity. The user remains responsible for the any act performed on his user account until the modification by Trois Fils of his ID codes. Consequently, the user commits to not claim or engage actions against Trois Fils concerning the loose or the fraudulent use of his ID codes. The user accepts that the informatic or electronic records carried out by Trois Fils for services provision, all actions performed in particular trough his user account, can be opposed or used before an administrative or judicial authority as evidence.",
            Droits_user : "User's right regarding their personal data",
            Droits_user1 : "User is entitled to access, change, correct and delete the data relating to him/her. The user is as well entitled to be informed",
            Droits_user2 : "The user has as well the right to withdrawal his/her consent for his/her data bases on consent being processed at, any moment. The user has as well the right to disable the cookies.",
            Droits_user3 : "All these rights are detailed in Trois Fils' Privacy Policy, annexed to these CGV (Appendix 2).",
            Modalites_use : "Terms of use of the services",
            Modalites_use1 : "The user can access via the website to a selection of products sold by the compagny Trois Fils. While navigating, the user can select an article of interest and see the details for this product.",
            Modalites_use2 : "In order to order a product, the user will be required to login or signup. More it will be required for him to save his adress in order to allow Trois Fils to send him the product he bought by mail if required.",
            Modalites_use3 : "Once logged in and with an adress saved in its profile, The client is able to add the product to his cart (access via his dashboard), or to order and pay it directly. The payment will occur via a PayPal button integrated to the website. (See the CGU of PayPal). Transport fee may apply regarding the delivery mode choosen. The eventual transport fee is clearly displayed on the page before the payment.",
            Price_Det : "6- Financial conditions",
            Price_Det1 : "The price is determined directly by Trois Fils and is calculated in regard with the quantity of product ordered. To this price might be added a transport fee of 8euros in case of mail shipment or delivery in Paris. The orders above 45euros will not present a transport fee.",
            Mode_Payment : "Methods of payment of the compensation price",
            Mode_Payment1 : "Methods of payment of the product is carried out by the client via the plateform PayPal.",
            Mode_Payment2 : "The user is informed that are accepted the following bank cards : Visa™, Eurocard ™, MasterCard™, American Express.",
            Mode_Payment3 : "The PayPal commission on the transactions will be deducted from the amount cashed by the compagny Trois Fils",
            Securisation_Payments : "Payment securisation",
            Securisation_Payments1 : "Trois Fils guarantee to have no access to any confidential information concerning the payment method used by the user.",
            Securisation_Payments2 : "The payment is secured employing an encryption process, enabling user's bank data to be sent encrypted to the online secured payment platform operated and controlled by PayPal available at the website www.paypal.com",
            Securisation_Payments3 : "Using the payment system PayPal, the User unconditionally accept the CGU and CGV of PayPal, available at the website : https://www.paypal.com/fr/webapps/mpp/ua/legalhub-full",
            Declaration_User : "User's representations and warranties",
            Declaration_User1 : "The user represents and warrants to Trois Fils that he/she has all the authorisations required and the required capacity to use the chosen method of payment which gives access to founds sufficient to cover the costs of this transaction. In the case of absence of pre-payment, the transaction will be automatically cancelled, and the user shall be informed of this cancellation by reception of a notification. In addition, the User acknowledge that the payment of a transaction by any other payment method than the platform STRIPE or PayPal is forbidden. The user is aware that Trois Fils may delete or block in a discretionary manner and at any time a user account for failure to comply with these CGU, which the user acknowledges expressly.",
            Declaration_User2 : "The computerised record, preserved in the information technology systems of Trois Fils, under reasonable conditions of safety, will be regarded as evidence of the communications, transactions and payments occurred between the parts and can be taken in the event of litigation.",
            Reclamations : "7- Complaints in case involving loss, theft and damage",
            Reclamations1 : "Every complaints in case involving loss, theft, damage, etc... of the product(s) transported must be sent to Trois Fils customer service by : Email at the address : contact@troisfils.com",
            Disclamer_Resp : "Absence of Trois Fils' responsibility – disclaimer",
            Disclamer_Resp1 : "Exclusion, limit of liability, compensation - Trois Fils makes no representation and disclaim all express, implied and statutory warranties of any kind, if not expressly laid down these CGU, including implied warranties of fitness for the services. More, Trois Fils does not deliver any guarantee or assurance on the reliability, punctuality, quality, adequacy or the availability of the services or that the transaction will be carried out without interruptions or errors. Trois Fils does not guarantee the quality, the adequacy, the security or the traveller's capacity. Consequently, the user accepts the risks arising from its utilization of the services and the transaction realisation is his/her choice and only his/her choice, to the fullest extent of the law.",
            Disclamer_Resp2 : "Trois Fils shall not bear no liability in any form for, without limitation, direct, indirect, incidental, special, punitive or consequential losses or damages, inconvenience, loss of profits, loss of data, loss of revenue, loss of business opportunities or any foreseeable or unforeseeable loss resulting directly or indirectly or physical and material damage, resulting or concerning the use of the service or its realisation even if Trois Fils was advised of the possibility of damages or was negligent.",
            Disclamer_Resp3 : "Trois Fils shall not bear no liability in any form for damages, obligations ou losses arising out of : The utilization of the service by the user or his/her inability to access or use the services, Any transaction or relationship between the user and any third party provider, even if Trois Fils was advised of the possibility of damages or was negligent.",
            Disclamer_Resp4 : "We remind you that the user, before using the services, acknowledge to be fully legally entitled to commit to the following CGU. Trois Fils can in no event be held liable for the verification of the legal capacity for visitors and users of the platform Trois Fils. In consequences, if a person not legally entitled should use the service on the website or mobile application, either the parents or the guardians of the minor would assume only the whole responsibility for it and should as well honour any price resulting of the use of the platform Trois Fils by the person not legally entitled they represent. In case of any doubt on the majority of the user, Trois Fils reserves the right to refuse him/her the access to the service.",
            Disclamer_Resp5 : "Users agree to not, when registrating and accepting these CGU, or at a larger stage while using the service provided by Trois Fils : Communicate incorrect or false information in order to sign-up; Indicate any sensitive information revealing racial or ethnic, political opinions, religious, philosophical beliefs, trade union membership or concerning health or sex life, that would be contrary to public morality or law. In the event of an offence, violation or contravention to these rules, Trois Fils reserves the right to delete these impugned messages and to prevent the user from accessing or using the services.",
            Disclamer_Resp6 : "Broadly speaking, the user commits to respect the principles enumerated in these CGU and to respect the other users of the service. In the event of an offence, violation or contravention to these provisions, or in the event of a repetitive conduct prejudicial to other users, Trois Fils reserves the right to end at any moment the provision of the service for this user, and to delete his/her account on the platform Trois Fils.",
            Disclamer_Resp7 : "Information system integrity – The user commits to use the services with the utmost care, and to respect terms of use and technical restrictions that may be specified on the mobile application or website. The user commits to make sure the use of the service does not affect or endanger the stability, the security, the quality of the services, of Trois Fils' infrastructures, of the programs or networks of the other users of the platform Trois Fils or any other third party. In the event Trois Fils would find that the use of the service by an user endanger or affects the stability, the security, the quality of services, of Trois Fils' infrastructures, of the programs or networks of the other users of the platform Trois Fils or any other third party, Trois Fils reserves the right to suspend, or even stop the service provision, without prior notice.",
            Disclamer_Resp8 : "The user commits to cooperate actively to ensure effective operation of the service. The user commits to expeditiously inform Trois Fils by registered letter with a request for acknowledgment of receipt of any request, complaint, legal action, directly or indirectly linked to the provision of service and/or the website and/or the mobile application.",
            Technic : "Provisions for technical concern",
            Technic1 : "The users acknowledge to accept the characteristics and the limits of internet and acknowledge including : to have the required knowledges to understand the nature of the internet, in particular its technical performance and response times for consulting, querying or transferring information. That the communication by the users of personal identification details or broadly speaking, of any information considered as confidential by the user is carried out under their own responsibility. That it's the responsibility of the user to take all necessary measures to make sure that the technical characteristics of his/her computer allow access to the information and services. That it's the responsibility of the user to take all necessary measures to protect their own information and/or software from the contamination by any viruses that may be circulating on the internet, on the website or on the mobile application.",
            Technic2 : "Consequently, Trois Fils cannot b held liable for any disadvantage, harm or damage inherent in using the internet, such as a breach in service, outside intrusion, or the presence of a computer virus or for any event deemed to fall under force majeure, as recognized by law. The services are provided « as is » and according to availability.",
            Technic3 : "Trois Fils does not guarantee an error-free, without interruption and secure provision of the services proposed through the Website and Mobile application (platform Trois Fils)",
            Technic4 : "Trois Fils is not bound by any obligation of personalized assistance, including technical.",
            Technic5 : "Trois Fils disclaims all warranties expressed or implied, including in regard with the quality and suitability of the website and mobile application for its use by users. Trois Fils does not guarantee any results or benefits by using the services provided by the website and the mobile application.",
            Technic6 : "Claim for technical concern- Any claim for technical concern regarding the services should be addressed by users to Trois Fils, at the following E-mail address : contact@troisfils.com",
            Communication : "8- Communications between parties – Correspondence – Evidence",
            Communication1 : "Unless specifically provided herein for these CGU and otherwise stipulated by Trois Fils, the correspondence and discussions between parties are carried out only by E-mail at the address filled in by the user.",
            Communication2 : "In application of clauses 1316 and following the French civil code and, where applicable, of clause L. 110-3 of the French code of commerce, the parties declare that all information delivered by E-mail and on the Trois Fils Application and Website are legally valid between the parties and between them, provided that no contrary certified and signed written documents are produced to counter this computerised information.",
            Communication3 : "The elements such as the time of reception or sending, as well as the quality of data received shall be valid by priority as figuring on the Trois Fils computer systems, or as detected by Trois Fils's computerised procedures, unless the consumer produce written proof of the contrary.",
            Prop_intel : "8- Intellectual property right",
            Prop_intel1 : "Trois Fils is exclusive holder of all intellectual property rights on the website and the mobile application, its informatic contents, text, photographs, software, illustrations, videos, pictures (visual or sound) presented on the application and website, as well as the databases which have been produced by Trois Fils.",
            Prop_intel2 : "Trois Fils is as well the registered name holder of the domain Trois Fils.net",
            Prop_intel3 : "The software made available for the user as part of the service, remain full and entire property of Trois Fils. However, Trois Fils grant the user a licence allowing him/her to reproduce or display the content of the application and/or website but only and strictly for his/her personal use as part of the visualisation of the mobile application and website and/or the use of the service. This licence however exclude the right to users to modify, copy, translate, sharer, publish, post, transmit, distribute, produce or transfer rights for any content presented on the mobile app and/or the website and through him. As such, and in accordance with the provisions of the code of intellectual property, are permitted only for private use purposes, subject to differing or more restrictive provisions. Any other use constitutes infringement and shall be sanctioned by way of intellectual property in the absence of the prior authorisation of Trois Fils. As a reminder, any hypertext link at destination of the website or mobile application, through « framing » or « deep-linking » without the prior consent of Trois Fils shall be prohibited. Any total or partial copying, inspiration, reproduction, publication, downloading, posting, transmission or distribution of the database produced by Trois Fils on the mobile application and website, without Trois Fils' express authorization, is prohibited, and shall be considered as an infringement of the relevant provisions of the French Intellectual Property Code, unless specifically authorized under applicable law or without prior written agreement from Trois Fils. The mobile application and/or website may contain hypertext links and/or other hyperlinks at destination of websites hosted by third party servers, and particularly concerning the banner ads, which are not managed by Trois Fils and on which no control can be exercised. As such, Trois Fils assumes no responsibility or liability for any legal consequences related with the access to these websites from the mobile application or website. The use of hypertext links and/or other hyperlinks at destination of the mobile application or website is authorized by Trois Fils exclusively in the framework of the promotion exercise and/or website and services provided by Trois Fils and at the only condition that the integrity of the mobile application and/or website is preserved and that there is no identified likelihood of confusion between the website and/or mobile application and websites edited by third parties. In this regard, Trois Fils expressly prohibits users to use the technics of « framing », « d’inline linking » and of « deep-linking » concerning the not authorized exact reproduction of the mobile application and website content, and its integration on webpages edited by third parties. Likewise, Trois Fils is not technically able to prevent every website to contain hypertext links and/or other hyperlinks at destination of the Website and/or mobile Application (platform Trois Fils). Trois Fils assumes no responsibility or liability for any legal consequences related with the access to his mobile application and/or website via other websites or mobile applications Trois Fils has no control of effect. The software provided in within the framework of the Service are provided « as is » and with no guarantee of whatever form from Trois Fils in particular concerning the adequation between the functionalities of these software and the needs and requirements of the user, the absence of limitation, any fault, error, omission, interruption or delay, etc...",
            Resiliation : "9- Suspension - Resiliation – Closure",
            Resiliation1 : "For failure to comply with these CGU, which the user acknowledges expressly. In the event of user's failure to comply with these CGU, the user is informed that Trois Fils may suspend the service in a discretionary manner and at any time, and this until perfect compliance of these CGU.",
            Resiliation2 : "Any suspension, resiliation or suppression from the service resulting from the sole fault of the user, in particular in the conditions determined in this article shall not entail compensation of any kind to the benefit of the user. More, in this later case, no refund or return can be made for him/her.",
            Update : "Cgu update",
            Update1 : "These CGU may be revised at any time on Trois Fils' initiative. Any modification of these CGU, as well as the documents to which reference are made in these CGU will be shared with the user on his/her first connection after this modification.",
            Force : "Force majeure",
            Force1 : "Any event due to causes that are outside the control of the parties, such as natural disasters, that could not be evaded through the exercise of due care is called Force majeure and suspend the obligations of both parties. The Parties admit, without this list being exhaustive or limiting, conventionally, between them, That emerge from force majeure the damage finding their origins or their causes in: A strike (EDF, telecommunications operators, registrars, NIC and authorities etc.), a stop of supply of energy (such as electricity), A failure of the telecommunication network on which depends on Trois Fils and/or networks that would replace it, a civil or foreign war, riots or popular movements, attacks etc.",
            Integralite : "Completeness",
            Integralite1 : "The provisions of these CGU express the entire agreement between the user and Trois Fils. They shall prevail over any proposal, exchange of letters prior to and subsequent to the conclusion hereof, as well as any other provision contained in the documents exchanged between the parties and relating to the purpose of the CGU, unless duly signed by the representatives of both parties.",
            Nullity : "Nullity",
            Nullity1 : "If one or more provisions of these CGU are held to be invalid or declared as such under an Act, regulation or following a decision which has become final of a competent court, the other stipulations of these CGU will keep all their strength and reach. Where appropriate, Trois Fils agrees to delete and immediately replace the said clause with a legally valid clause.",
            TitleCGU : "Title",
            TitleCGU1 : "In the event of a difficulty of interpretation between the title and the chapter of any of the articles and any of the clauses, the titles and the chapter shall be deemed unwritten.",
            Renounciation : "Non-waiver",
            Renounciation1 : "The fact that either party did not require, temporarily or definitively, the application of a provision of these CGU shall not be construed as a waiver of the rights held by that party. Any exchange of correspondence, writing, e-mail, etc. shall not be subject to the terms of these CGU unless duly signed by the parties or their representatives.",
            Juridiction : "Attribution of jurisdiction – Applicable law",
            Juridiction1 : "The language of these CGU is French, and the French version will predominate over any other versions translated into another language.",
            Juridiction2 : "In the event of difficulty in the interpretation and/or application of these CGU, the Parties shall decide an attempt for an amicable settlement before any court proceedings.",
            Juridiction3 : "Any dispute which may arise in connection with these CGU, their interpretation and consequences or with the Acts supplementing or amending them, express and exclusive attribution of jurisdiction shall be made to the competent courts of the jurisdiction of Paris, notwithstanding plurality of defendants, appeal in guarantee, reference and expertise, and only French laws are applicable to these CGU.",
            Retractation : "Right of withdrawal",
            Retractation1 : "You have no right of withdrawal from the time of Booking Confirmation provided the Contract between you and Trois Fils consisting of putting you in contact with another Member has been fully executed.",
            PoP : "Privacy Policy of Trois Fils",
            PoP1 : "The purpose of this charter is to provide the user complete information on the use that is made by Trois Fils of his/her personal data.",
            PoP2 : "The definitions provided in article 2 of the general conditions of use shall apply to this privacy policy.",
            PoP3 : "As part of its activities, Trois Fils provides to the users a linking service on the platform Trois Fils.",
            PoP4 : "In order to ensure the realization of its Services, Trois Fils is obliged to collect users' personal data on its Mobile application and/or website.",
            PoP5 : "Trois Fils collects this information as soon as the user create his or her user account.",
            PoP6 : "Concerned with the protection of the privacy of the user and the processing of his personal data, Trois Fils undertakes, as responsible for processing, to comply with the provisions of regulation (EU) No 2016/679 of 27 April 2016, by ensuring the best level of personal data protection for his users.",
            PoP7 : "This Charter allows the user to benefit from a perfect transparency in the processing of his/her personal data by Trois Fils.",
            PoP8 : "Who collects personal data from the user?",
            PoP9 : "Trois Fils is the processing manager who collects personal data and implements data processing",
            PP_What : "Which are the personal data collected by Trois Fils ?",
            PP_What1 : "The user fills in the following information on the platform Trois Fils : Name, surname, Email, Adress.",
            PP_What2 : "The collection of these data is indispensable for the provision of Services by Trois Fils.",
            PP_What3 : "The user is informed in particular of the obligatory nature of the collection of his data. In the event of a lack of data for a mandatory information, Trois Fils will not be able to provide its Services to the user.",
            Finalité : "What are the purposes of collecting the user's personal data?",
            Finalité1 : "Trois Fils is only authorized to use the personal data of its users if it has a valid legal basis and must ensure to comply with one or more of the following legal bases :",
            Finalité2 : "Execution of the contract (e.g. to process the Transaction); Enforcement of a legal obligation (e.g. retention of invoices); The legitimate interest of Trois Fils; When the user has given his consent.",
            Finalité3 : "Trois Fils is required to collect and record personal data from its users for:",
            Finalité4 : "Provision of services : Trois Fils uses the personal information of the user in order to be able to provide him the service of connecting Sender/Receiver and travellers, the first one soliciting from the second the transport of a parcel during his journey, in order to deliver it at the delivery address.The personal data provided by the users also enable Trois Fils to follow up the provision of the Services and of any user's claims. The registration of the personal data collected for the purpose of the provision of the Services on the website and mobile application are obligatory. In their absence, the Services will not be able to be properly provided. These data can be transmitted to the technical service providers of Trois Fils, for the sole purpose of the good execution of the Services, or the compilation of statistics.",
            Finalité5 : "Payment management : Trois Fils is obligated to collect certain banking information from the user in order to be able to cash the prize, corresponding to the financial contribution to the supply by Trois Fils of the Services or products. Payment is secured using an encryption process, allowing the user's banking data to be sent encrypted to the secure online payment platform PayPal operated and managed by Trois Fils, available on the website: www.paypal.com",
            Finalité6 : "Resolution and improvement of Services : Trois Fils uses the user's personal data to provide functionality, analyse performance, correct errors and improve accessibility as well as the efficiency of the services provided.",
            Finalité7 : "Making recommendations for the service and personalize the user's options : Trois Fils uses the user's personal data to recommend functions and services that may interest the user. This data also allows Trois Fils to identify the user's preferences and customize its experience with the services offered by the Site.",
            Finalité8 : "Be in compliance with the law : Trois Fils may be constrained to retain the personal data of users of its website in order to meet legal or regulatory requirements (e.g. verifying the identity of a user in order to detect or prevent fraud)",
            Finalité9 : "A specific purpose : Trois Fils may require the consent of the user for the processing of his personal information for a specific purpose that will be indicated to him. When the user has given his consent for this specific purpose, he has the right to withdraw that consent at any time. Trois Fils then commits to stop any processing of this user's information for this purpose.",
            Finalité10 : "The management of customer relationship (email) and customer satisfaction.",
            Transfert : "Are user data transferred to third parties by the data controller?",
            Transfert1 : "The personal data collected is only processed by Trois Fils, except in the following cases :",
            Transfert2 : "Communication of personal data to Trois Fils's trading partners in order to allow the realization of the Services.",
            Transfert3 : "If the recipients of this data are: Police authorities in the context of judicial requisitions concerning the fight against fraud; Secure payment services on the website or/and mobile application.",
            Transfert4 : "These data may also be transmitted to third parties in the context of : The fight against fraud and the recovery of unpaid; The carrying out of technical maintenance and development operations of the mobile application and/or the website, the internal applications and the information system of Trois Fils; The collection of customer opinions; The dispatch of the newsletter.",
            Transfert5 : "Trois Fils may also share personal data, with the prior and express authorization of the user in the event of sale, transfer or merger of Trois Fils or any part thereof, or if Trois Fils acquires or merges with another company.",
            Transfert6 : "If such a transaction occurs, Trois Fils will ensure that the other party complies with the data protection legislation.",
            PPRights : "What are the rights of users to their personal?",
            
            PPRights1 : "Pursuant to articles 14 to 22 of regulation 2016/679 of 27th April 2016, any natural person using the service is entitled to exercise the following rights:",
            PPRights2 : "A right of information (which refers to the availability of clear and easily accessible information to the user) ; A right of access ; a right of rectification; A right of opposition and erasure to the processing of its data; A right to oppose profiling; A right to limitation of treatment (which refers to the fact that Trois Fils cannot, beyond a certain time, continue to process and use the user's personal data) ; A right to portability of its data (which refers to the user's right to recover the data it has provided and to transfer it); A right to delete",
            PPRights3 : "Finally, when Trois Fils detects a violation of personal data that could lead to a high risk of the user's rights and freedoms, the user will be informed of this violation as soon as possible",
            PPRights4 : "You can exercise these rights by contacting Trois Fils, who collected personal data, by email at the following address : contact@troisfils.com",
            PPRights5 : "In accordance with the regulations in force, any application must be signed and accompanied by a photocopy of an identity form bearing the signature of the applicant and specify the address to which the reply is to be sent. A response will be sent to the user within two (2) months after the reception of the application.",
            PPDeces : "What happens to the user's data after his or her death?",
            PPDeces1 : "The user may send instructions to Trois Fils concerning the preservation, erasure and communication of his personal data after his death in accordance with article 40-1 of Law 78-17 of 6 January 1978. The user can formulate his advance instructions to the following address : contact@troisfils.com",
            PoPUE : "Are user's data sent out of the European Union?",
            PoPUE1 : "Personal data concerning the user will not be transmitted for the purposes defined above to companies located in countries outside the European Union, with the exception of the provision of mandatory information towards any banking and/or insurance institution involved in the realisation of the transactions.",
            PoPUE2 : "In the event of a personal data transfer concerning the user to compagnies located outside european union, the datas are transfered only to compagnies that commits to Trois Fils to ensure a proper and sufficient data protection (in particular through contractual clauses as (CCT) internal rules of the entreprise (BCR).",
            Conservation : "How long is the user's data stored?",
            Conservation1 : "The user is informed that the personal information he or she provides is kept by Trois Fils for the duration of the Service.",
            Conservation2 : "Trois Fils has determined that the duration of the retention of personal data will be set at the user's request concerning the identity document communicated in the context of the exercise of the rights of interrogation, access, rectification, opposition.",
            Conservation3 : "For more information on the retention times applied by Trois Fils, the user is authorized to contact Trois Fils customer Service at the following address : contact@troisfils.com",
            Securisation : "Which security measures have been taken by Trois Fils to protect the user's personal data ?",
            Securisation1 : "Trois Fils' internal measures",
            Securisation2 : "As the processing manager, Trois Fils takes all necessary precautions to preserve the security and confidentiality of the data, in particular, to prevent them from being distorted, damaged, or that unauthorised third parties have access to it, thanks to the computer system security allowing to prevent external access to users' personal data.",
            Securisation3 : "The data are stored on a Trois Fils server hosted by DigitalOcean and MongoDB Atlas. In addition, when using subcontractors, Trois Fils make sure they respect the data protection rules.",
            Securisation4 : "Payment Providers",
            Securisation5 : "In order to ´ ensure the security of the payments, Trois Fils does not keep the bank data of the users when the payment of the price has been made. However, the user has the possibility to save his PayPal account details in his user account in order to simplify the realisation of services.",
            Securisation6 : "Payment is secured using an encryption process, allowing the user's banking data to be sent encrypted to the secure online payment platform STRIPE operated and managed by PayPal, available on the website: www.paypal.com",
            Securisation7 : "Trois Fils guarantees the user that they never have access to confidential information relating to the means of payment they used to pay the compensation price. By using the PayPal Electronic payment system, the user unconditionnaly accepts the General terms and conditions of sale of PayPal, available at the following address: https://www.paypal.com/fr/webapps/mpp/ua/legalhub-full",
            Securisation8 : "The fight against Internet fraud",
            Securisation9 : "In order to secure payments and ensure optimum quality of service, personal data collected on the website are also processed by Trois Fils to determine the level of fraud risk associated with each transaction and, if necessary, to to assist in modulating their implementation conditions.",
            Mineurs : "Are data collected from minors under the age of 18 ?",
            Mineurs1 : "In accordance with the general terms and conditions of sale, it is necessary to be 18 years old to access the website and use the service.",
            Cookies : "Does Trois Fils use cookies, tags and plotters ?",
            Cookies1 : "When the user uses Trois Fils' Services, it automatically receives and saves certain types of information such as the Internet browser settings used, the contents of the shopping cart, or the identifiers to enable The user to connect.",
            Cookies2 : "At the user's entry on the website, an informational message is displayed to warn him/her of the use of cookies: « By continuing to browse the site, I accept the use of cookies, intended to offer me targeted services and to realize Statistics. »",
            Cookies3 : "This message is accompanied by a cross-shaped button that hides the message and a 'more information' link to an internal page of the Site. 'Cookies' and other unique identifiers are used to obtain this information when the user's browser or device accesses the Application and/or website.",
            Cookies4 : "What is a Cookie?",
            Cookies5 : "The term cookie encompasses a number of technologies that can be used to track navigation and user actions. These technologies are multiple and constantly evolving. There are in particular, cookies, tag, pixel, Javascript code. The cookie is a small text file saved by the browser of your computer, tablet or smartphone and allows to keep user data in order to facilitate navigation and allow certain features.",
            Cookies6 : "Why are cookies, tags, and plotters used?",
            Cookies7 : "Cookies are used by Trois Fils to memorize the user's preferences, to optimize and improve the use of the Application and/or website by the user by providing content that is more precisely adapted to his needs.",
            Cookies8 : "The Cookies that Trois Fils emits on the site allow:",
            Cookies9 : "To identify the user when connecting to the Site ; To determine the user's Internet browser settings, such as the type of browser used and the plug-ins installed therein; To establish statistics and volumes of attendance and use of the various elements composing our services (using audience measurement cookies); To adapt the presentation of the Application and/or website according to the terminal used; To adapt the presentation of the Application and/or website according to the affinities of each user;",
            Cookies10 : "Only the issuer of a cookie is likely to read or modify information contained therein. Some cookies are installed until the user's browser is closed, others are kept for a longer time. Cookies are kept for a maximum period of 12 (twelve) months.",
            Cookies11 : "Setting up the navigation software",
            Cookies12 : "The user can configure the navigation software for cookies to be stored in his terminal or, on the contrary, to be rejected, either systematically or according to his transmitter. The user can also configure his navigation software to allow the acceptance or refusal of cookies to be offered to him punctually, before a cookie is likely to be registered in his terminal.",
            Cookies13 : "How do I exercise this choice, depending on the browser used?",
            Cookies14 : "For cookie management, the configuration of each browser is different. The « Help » section of the most browsers toolbar shows how to deny new « cookies » or get a message that signals their reception, or how to disable all « cookies ».",
            Cookies15 : "The cookies that Trois Fils emits are used for the purposes described above, subject to the user's choice, which results from the parameters of his navigation software used during his visit to the Site and his agreement by clicking on the « OK » button of the banner about cookies.",
            Cookies16 : "There are several options available to the user to manage cookies. Any user's setup on the use of cookies will be likely to change its browsing on the Internet and its conditions of access to certain services requiring the use of cookies. The user can make the choice at any time to express and modify his wishes regarding cookies, by the means described below.",
            Cookies17 : "For Internet Explorer™ : http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies",
            Cookies18 : "For Safari™ : http://docs.info.apple.com/article.html?path=Safari/3.0/fr/9277.html",
            Cookies19 : "For Chrome™ : http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647",
            Cookies20 : "For Firefox™ :  http://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookies",
            Cookies21 : "For Opera™ : http://help.opera.com/Windows/10.20/fr/cookies.html",
            Cookies22 : "Behaviour Cookies",
            Cookies23 : "Trois Fils does not collect or process, to date, any personal information known as « behaviour » of the user, as defined by Ordinance No. 2011-1012 of 24th August 2011 on electronic communications.",
            Cookies24 : "Any implementation of the behaviour cookie on the Site by Trois Fils will be subject to the prior and express permission of the user.",
            Delegue : "The data protection officer of Trois Fils",
            Delegue1 : "Trois Fils does not fit into the criteria for the nomination of a data protection officer, as provided for by regulation (EU) No 2016/679 of 27th April 2016.",

        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online Tailoring",
            Title_Home : "Tailoring",
            Contact : "Contact the shop",
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
            About_footer : "The Boutique Trois Fils is located between the department stores, the Saint-Lazare train station and the Place de la Madeleine. Specializing in exceptional teas, the shop welcomes you Monday from 3 p.m. to 7 p.m., Tuesday to Saturday from 11 a.m. to 7 p.m. From August 1 to August 31, the boutique will be closed on Monday and Sunday",
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Title_Shop : "A cup of tea at home",
            Subtitle_shop : "Located in paris, few streat from the Opera Garnier, the shop of 'Trois Fils' will charm you with its singular atmosphere. In this shop, you will find a tea of exception that will challenge your senses. Join us and discover our selection of tea.",
            Button_shop : "Discover the tea",
            Title_bienfaits : "Benefits of tea",
            Subtitle_bienfaits : "Boire du thé vert est de plus en plus recommandé en raison de sa forte teneur en cathéchines, polyphénols présents en grandes quantités dans le thé vert. Ces composants, puissants anti oxydants qui s'opposent aux effets des radicaux libres, diminueraient les risques cardio vasculaires en raison de leurs effets cardio protecteurs.",
            Button_bienfaits : "Read more",
            Title_Real : "Découvrez l'art du thé",
            Subtitle_Real : "'Ne laissez pas bouillir l’eau, l’oxygène s’évaporerait et affadirait votre thé; laissez l’eau frémir un court instant, puis adaptez en fonction du thé: eau frémissante pour les thés noirs, oolongs, parfumés et certains thés verts; entre 60 et 80° pour quelques thés verts ou blancs d’exception.'",
            Button_Real : "Read more",
            Slogan : "Conditions Générales d'utilisation",
            Disclamer : "Attention – disclaimer",
            Disclamer1 : "L’utilisateur doit lire attentivement et accepter les présentes conditions générales d’utilisation avant d'utiliser les services proposés par la boutique Trois Fils. Ces conditions générales d’utilisation définissent les conditions et les obligations légales que Trois Fils s’engage à respecter lors de la fourniture de sa prestation à l’utilisateur sur l’application et le site internet de Trois Fils (ci-après la « plateforme Trois Fils»).",
            Disclamer2 : "Toute fourniture des prestations de services par Trois Fils a l’utilisateur via la plateforme Trois Fils implique l’acceptation sans réserves des présentes conditions générales d’utilisation. Le seul fait d’utiliser lesdits services entraîne l’acceptation pure et simple des présentes conditions générales d’utilisation, ce que l’utilisateur de l’Application déclare et reconnaît expressément.",
            Disclamer3 : "L’utilisation du service et de la plateforme Trois Fils est exclusivement réservée aux personnes majeures capables de souscrire des contrats en droit français.",
            Legal_mentions : "Mentions légales",
            Legal_mentions1 : "Editeur de l’Application : L’Application est éditée par l'entreprise Trois Fils",
            Legal_mentions2 : "Directeur de Publication : Trois Fils",
            Legal_mentions3 : "Responsable de traitement : Trois Fils",
            Legal_mentions4 : "Contact : contact@troisfils.com",
            Legal_mentions5 : "Hébergeur de l'application : DigitalOcean",
            Object_CGU : "Objet – validation – acceptation",
            Object_CGU1 : "Les présentes Conditions Générales d’Utilisation (ci-après les « CGU »)définissent le cadre légal d’utilisation des Services proposés par Trois Fils sur l’Application et le Site Internet et les conditions de la relation entre les Utilisateurs et Trois Fils. La version des CGU disponible sur l’Application et le Site Internet prévaudra, le cas échéant, sur toute autre version des présentes, à l’exception des modifications qui seraient intervenues postérieurement à son utilisation des Services et ce, conformément au droit commun.",
            Object_CGU2 : "Les présentes CGU ont été mises à jour le 27 Novembre 2020.",
            Object_CGU3 : "Les modifications ultérieures de ces CGU seront opposables aux Utilisateurs de l’Application et le Site Internet à compter de leur mise en ligne. Les présentes CGU sont acceptées par l’Utilisateur et prennent effet au jour de la souscription par celui-ci aux Services de Trois Fils. Les présentes CGU sont applicables pour toute la durée durant laquelle l’Utilisateur utilisera les Services fournis par Trois Fils sur le Site Internet.",
            Besoins : "vérification de l’adéquation des besoins aux services",
            Besoins1 : "L’Utilisateur de la plateforme Trois Fils déclare par les présentes qu’il a procédé préalablement à la vérification de l’adéquation des Services de la plateforme Trois Fils on à ses besoins. Il déclare et garantit ainsi avoir reçu de Trois Fils toutes les informations et conseils qui lui étaient nécessaires pour souscrire aux présentes cgu et qu’en conséquence il renonce à toute contestation sur ce point.",
            Besoins2 : "L’Utilisateur déclare en outre qu’il dispose des connaissances, compétences et des ressources, notamment humaines et techniques, requises pour l’utilisation des services de ladite plateforme Trois Fils.",
            Creation : "création d’un compte utilisateur et acceptation des cgu",
            Creation1 : "Le Compte Utilisateur est un espace personnel utilisé par l’Utilisateur afin d’accéder aux Services. A l’occasion de la création de son Compte, l’Utilisateur doit renseigner les informations suivantes : Prénom (obligatoire), Nom (obligatoire), Email (obligatoire), Mot de Passe (Obligatoire)",
            Creation2 : "Dès lors que l’Utilisateur clique sur le bouton « créer mon compte », une validation des champs de formulaire est effectuée. Si un champ n’est pas correctement rempli, un message d’erreur en informe l’Utilisateur. Si tous les champs sont correctement renseignés, le visiteur est redirigé vers la page avec accès à « mon compte ».",
            Creation3 : "L’Utilisateur s'engage à ne choisir aucun identifiant portant atteinte aux droits d'un tiers et s’interdit en conséquence d’utiliser un identifiant portant atteinte à un droit de propriété intellectuelle, à une marque déposée, à une dénomination sociale ou à un nom patronymique, sans que cette liste soit exhaustive.",
            Creation4 : "Avant de valider la création de son Compte et afin de pouvoir utiliser les Services, l’Utilisateur doit préalablement prendre connaissance des présentes CGU et en informer expressément Trois Fils en cochant la case « J’ai lu, compris et j’accepte les Conditions Générales d’Utilisation». Cette étape est déterminante et l’Utilisateur ne saurait cocher cette case sans avoir préalablement pris connaissance et accepté l’ensemble des clauses des présentes CGU.",
            Creation5 : "En cas d’oubli de mot de passe, un lien de récupération est mis à disposition de l’Utilisateur par email afin de lui permettre de modifier son mot de passe. L’Utilisateur est informé que Trois Fils pourrait être amenée à tout moment à supprimer de manière discrétionnaire son Compte Utilisateur en cas de non-respect des dispositions des présentes cgv, ce que ce dernier reconnaît expressément.",
            Creation6 : "Utilisation et responsabilité relative à l’utilisation du Compte Utilisateur",
            Creation7 : "Chaque Utilisateur reconnaît son entière responsabilité dans l’usage qui sera fait de ses Codes Identifiants comme de l’Application et du Site Internet. Il s’engage à effectuer sous ses propres Codes Identifiants tous les actes au sein de son Compte Utilisateur. De même, tous les actes effectués sous ces Codes Identifiants seront considérés avoir été effectués par lui-même. ",
            Creation8 : "En cas d’oubli, d’utilisation détournée ou non autorisée de ses Codes Identifiants par un autre Utilisateur, la responsabilité de Trois Fils ne pourra en aucun cas être engagée et l’Utilisateur devra immédiatement informer le service client Trois Fils de cette situation, par : contact@troisfils.com",
            Creation9 : "A réception de cette notification écrite dûment justifiée, Trois Fils procédera à l’étude du dossier et pourra, par mesure de sécurité, suspendre tout accès au Compte Utilisateur. Trois Fils traitera la demande de l’Utilisateur dans les meilleurs délais et lui transmettra en retour par courrier électronique les nouveaux Codes Identifiants après vérification de son identité.  L’Utilisateur demeure responsable de l’utilisation de son Compte Utilisateur par des tiers jusqu’à la modification par Trois Fils des Codes Identifiants, ainsi l’Utilisateur garantit Trois Fils de toute action ou réclamation concernant la perte de données résultant de la perte ou de l’usage frauduleux de ses Codes Identifiants. L’Utilisateur accepte que les enregistrements informatiques ou électroniques effectués par Trois Fils pour la fourniture des Services, de toutes opérations accomplies notamment par l’intermédiaire de son Compte Utilisateur, puissent être opposés ou utilisés devant toute autorité administrative et/ou judiciaire compétente en tant que preuve.",
            Droits_user : "Droit des Utilisateurs quant à leurs données personnelles",
            Droits_user1 : "L’Utilisateur dispose d’un droit d’accès, de modification, de rectification et de suppression des données qui le concernent. Il dispose également du droit d’information, d’opposition à la prospection commerciale, de portabilité des données ainsi qu’à la limitation du traitement.",
            Droits_user2 : "L’Utilisateur dispose également d’un droit de rétractation de son consentement à tout moment pour un traitement de données fondé sur son consentement ainsi qu’un droit de désactivation des Cookies.",
            Droits_user3 : "Tous ces droits sont détaillés dans la Charte des données personnelles de Trois Fils, annexée aux présentes CGV (Annexe 2).",
            Modalites_use : "Parcours utilisateur",
            Modalites_use1 : "L'usager peut accéder par le site internet à tous les produits mis en vente par Trois Fils. Lors de sa navigation, il pourra sélectionner un article et voir le détail de ce produit.",
            Modalites_use2 : "Afin de commander un produit, l'utilisateur se verra dans l'obligation de se connecter ou de créer un compte. De même, il lui sera demandé de valider son adresse afin de pouvoir le cas échéant lui envoyer son produit.",
            Modalites_use3 : "Une fois connecté et son adresse enregistrée, le client peut ajouter ce produit à son panier, auquel il accèdera via son espace personnel, ou bien le commander directement. Le payement se fera via un boutton PayPal intégré au site. (Voir CGU de PayPal). Des frais de port peuvent s'appliquer en fonction du mode de livraison choisi et sont clairement affichés sur la page avant le payement. ",
            Price_Det : "Détermination du Prix",
            Price_Det1 : "Le prix est déterminé directement par Trois Fils et est calculé en fonction de la quantité de produit commandée. A ce prix peut s'ajouter des frais de port de 8euros en cas d'envoi postal ou de livraison sur Paris. Les frais de port sont offert pour un achat supérieur à 45euros.",
            Mode_Payment : "Modes de paiement du Prix",
            Mode_Payment1 : "Le paiement du Prix par le Donneur d’ordre est effectué via la plateforme PayPal.",
            Mode_Payment2 : "L’Utilisateur est informé que sont acceptées les cartes bancaires suivantes : Visa™, Eurocard ™, MasterCard™, American Express et le paiement du Prix est effectué dans la devise sélectionnée par le Donneur d’ordre parmi les devises proposées.",
            Mode_Payment3 : "La commission de PayPal sur les transactions sera imputé sur le montant du Prix encaissé par Trois Fils",
            Securisation_Payments : "Sécurisation des paiements",
            Securisation_Payments1 : "Trois Fils garantit l’Utilisateur qu'elle n'a jamais accès aux informations confidentielles relatives au moyen de paiement utilisé par ce dernier.",
            Securisation_Payments2 : "Le paiement est sécurisé selon un procédé de cryptage, permettant aux données bancaires de l’Utilisateur d’être envoyées cryptées vers la plateforme sécurisée de paiement en ligne exploitée et gérée par PayPal accessible sur le site Internet www.paypal.com",
            Securisation_Payments3 : "En utilisant le système de paiement électronique PayPal, l’Utilisateur accepte sans réserve les conditions générales de vente de PayPal, accessibles à l’adresse suivante : https://www.paypal.com/fr/webapps/mpp/ua/legalhub-full",
            Declaration_User : "Déclarations et garanties de l’Utilisateur",
            Declaration_User1 : "L’Utilisateur déclare et garantit à Trois Fils qu’il dispose des autorisations nécessaires pour utiliser le mode de paiement choisi et qu’il donne accès à des fonds suffisants pour couvrir tous les coûts résultant du paiement. En cas d’absence de pré-paiement, la Transaction sera automatiquement annulée et l’Utilisateur sera informé de cette annulation par l’envoi d’un email.",
            Declaration_User2 : "Les registres informatisés, conservés dans les systèmes informatiques de Trois Fils, dans des conditions raisonnables de sécurité, seront considérés comme des preuves de l’ensemble des transactions et des paiements intervenus entre les Parties.",
            Reclamations : "réclamations en cas de perte, vol, détérioration",
            Reclamations1 : "Toute réclamation en cas de perte, vol, détérioration etc. du ou des Produit(s) objets du Transport, devra être adressée au service client de Trois Fils par mail à contact@troisfils.com",
            Disclamer_Resp : "Absence de responsabilité de Trois Fils – disclaimer",
            Disclamer_Resp1 : "Exclusion, limite de responsabilité, indemnisation - Trois Fils décline toute attestation et garantie expresse, tacite ou prévue par la loi, non expressément énoncée aux présentes conditions, y compris les garanties tacites d’adéquation à une finalité particulière des Services. De plus, Trois Fils ne livre aucune attestation de garantie, assurance concernant la fiabilité, la ponctualité, la qualité, le caractère adéquat ou la disponibilité des Services, ou que la réalisation de la Transaction se fera sans interruptions ou erreurs.",
            Disclamer_Resp2 : "Trois Fils ne sera pas responsable des dommages indirects, accessoires, particuliers, punitifs ou consécutifs, incluant en cela la perte de profits, la perte de données, les dommages corporels ou matériels liés ou se rapportant à toute utilisation des Services et la réalisation de la Transaction, ou en découlant, même si Trois Fils a été informée de la possibilité de tels dommages.",
            Disclamer_Resp3 : "Trois Fils ne sera pas responsable des dommages, obligations ou pertes découlant de : L’utilisation des Services par l’Utilisateur, ou de l’impossibilité pour lui d’avoir accès ou d’utiliser les Services, Toute transaction ou relation entre l’Utilisateur et tout prestataire tiers, même si Trois Fils a été informée de la possibilité de tels dommages.",
            Disclamer_Resp4 : "Il est rappelé que l’Utilisateur, préalablement à son utilisation des Services, déclare avoir la pleine capacité juridique, lui permettant de s’engager au titre des présentes CGU. Trois Fils ne peut en aucun cas être tenue de vérifier la capacité juridique de ses visiteurs et Utilisateurs. En conséquence, si une personne ne disposant pas de la capacité juridique venait à utiliser les Services sur le Site, ses responsables légaux assumeraient l’entière responsabilité de cette utilisation et devraient notamment en honorer le prix. En cas de doute sur la majorité des Utilisateurs, Trois Fils se réserve le droit de refuser l’accès aux Services par les Utilisateurs.",
            Disclamer_Resp5 : "Les Utilisateurs s’interdisent, à l’occasion de leur inscription et de leur adhésion aux présentes CGU, comme par la suite de l’utilisation des Services mis à leur disposition, de : Communiquer des informations en vue de leur inscription qui soient incorrectes ou fausses ; Indiquer la moindre information sensible d’origine raciale ou ethnique ou portant sur des opinions politiques, philosophiques ou religieuses, sur une appartenance à un syndicat, sur la vie sexuelle ou la santé, contraire aux bonnes mœurs et à la loi. En cas d’infraction ou de contravention à ces règles, Trois Fils se réserve le droit de supprimer ces messages litigieux et d’empêcher l’accès de l’Utilisateur aux Services. De manière générale, l’Utilisateur s’engage à respecter les principes énumérés dans les présentes CGU et à respecter les autres Utilisateurs des Services. En cas de violation de ces dispositions, ou de comportement répété portant préjudice aux autres Utilisateurs, Trois Fils sera libre de mettre fin à tout moment à la fourniture de ses Services au profit de l’Utilisateur.",
            Disclamer_Resp6 : "Intégrité du système d’information - L’Utilisateur s’engage à utiliser les Services avec le plus grand soin, en respectant les règles d’utilisation et restrictions techniques pouvant être indiquées sur l’Application et le Site Internet. L’Utilisateur s’engage à ce que l’utilisation du Service n’affecte ni ne compromette la stabilité, la sécurité et la qualité des Services, des infrastructures de Trois Fils, des programmes ou des réseaux des autres Utilisateurs de Trois Fils ou des tiers.",
            Disclamer_Resp7 : "Dans le cas où Trois Fils constaterait que l’utilisation du Service par l’Utilisateur met en péril ou altère la stabilité, la sécurité et la qualité des Services, des infrastructures, des programmes, des réseaux, ou des infrastructures de Trois Fils, des autres Utilisateurs de Trois Fils ou des tiers, Trois Fils se réserve le droit de suspendre, voire d’interrompre la fourniture du Service, sans notification préalable.",
            Disclamer_Resp8 : "L’Utilisateur s’engage à coopérer activement avec Trois Fils pour le bon fonctionnement du Service. L’Utilisateur s’engage à informer dans les meilleurs délais Trois Fils par lettre recommandée avec demande d’accusé de réception de toute demande, plainte, action judiciaire, directement ou indirectement liée à la fourniture du Service. ",
            Technic : "disposition d’ordre technique",
            Technic1 : "Les Utilisateurs déclarent accepter les caractéristiques et les limites de l’Internet et en particulier reconnaissent : qu’ils ont connaissance de la nature de l'Internet, en particulier de ses performances techniques et des temps de réponse pour consulter, interroger ou transférer des informations ; que la communication par les Utilisateurs d’éléments personnels d'identification ou d'une manière générale de toute information jugée par les Utilisateurs comme confidentielle est faite sous leur propre responsabilité ; qu'il appartient aux Utilisateurs de prendre toutes mesures nécessaires pour s'assurer que les caractéristiques techniques de son ordinateur lui permettent la consultation des informations ; qu'il appartient aux Utilisateurs de prendre toutes les mesures appropriées de façon à protéger ses propres informations et/ou logiciel de la contamination par d'éventuels virus circulant à travers l’Application et le Site Internet.",
            Technic2 : "De ce fait, la responsabilité de Trois Fils ne pourra être engagée pour tous les inconvénients ou dommages inhérents à l'utilisation du réseau Internet, notamment une rupture de service, une intrusion extérieure ou la présence de virus informatiques. Les Services sont fournis en l’état et dans la mesure des disponibilités.",
            Technic3 : "Trois Fils ne garantit pas une fourniture sans erreur, sans interruption ponctuelle et sécurisée des Services proposés via l’Application et le Site Internet.",
            Technic4 : "Trois Fils n’est tenue par aucune obligation d’assistance personnalisée notamment technique.",
            Technic5 : "Trois Fils décline toute garantie expresse ou implicite notamment concernant la qualité et la compatibilité de l’Application et du Site Internet à l’utilisation que les Utilisateurs en feront. Trois Fils ne garantit aucun résultat ni bénéfice dans l’utilisation qui sera faite des Services proposés à travers l’Application et le Site Internet.",
            Technic6 : "Réclamations d’ordre technique - Toute réclamation de nature technique relative aux Services pourra être adressée par l’Utilisateur à Trois Fils à l’adresse suivante : contact@troisfils.com",
            Communication : "Communications entre les parties – correspondance – preuve",
            Communication1 : "Sauf disposition particulière des présentes CGU ou indications contraires de Trois Fils, les correspondances échangées entre les parties sont assurées exclusivement par voie électronique, à l’adresse email renseignée par l’Utilisateur.",
            Communication2 : "En application des articles 1316 et suivants du Code civil et, le cas échéant, de l’article L. 110-3 du Code de commerce, les parties déclarent que les informations délivrées par email et sur l’Application et le Site Internet de Trois Fils font foi entre elles.",
            Communication3 : "Les éléments tels que le moment de la réception ou de l’émission, ainsi que la qualité des données reçues feront foi par priorité telles que figurant sur les systèmes d’information de Trois Fils, ou telles qu’authentifiées par les procédures informatisées de Trois Fils, sauf à en apporter la preuve écrite et contraire par l’Utilisateur.",
            Prop_intel : "Droits de propriété intellectuelle",
            Prop_intel1 : "Trois Fils est le titulaire exclusif des droits de propriété intellectuelle sur l’Application et le Site Internet, de l’intégralité de son contenu informatique, logiciel, et notamment de l’ensemble des textes, commentaires, ouvrages, illustrations, vidéos et images, qu’ils soient visuels ou sonores, reproduits sur l’Application et le Site Internet ainsi que ses bases de données dont elle est le producteur.",
            Prop_intel2 : "Trois Fils est le titulaire ainsi que du nom de domaine Trois Fils.net",
            Prop_intel3 : "Cette licence exclut toutefois le droit des Utilisateurs de modifier, copier, traduire, diffuser, publier, transmettre, distribuer, produire, afficher ou céder les droits de tout contenu apparaissant sur l’Application et/ou le Site Internet et par l’intermédiaire de celui-ci. A ce titre et conformément aux dispositions du Code de la Propriété Intellectuelle, seule l’utilisation pour un usage privé sous réserve de dispositions différentes voire plus restrictives de ce code, est autorisée. Toute autre utilisation est constitutive de contrefaçon et sanctionnée au titre de la Propriété Intellectuelle sauf autorisation préalable de Trois Fils. Pour rappel, le fait d’apposer un lien hypertexte à destination de l’Application et/ou du Site Internet, en utilisant la technique dite du « framing » ou du « deep-linking », est strictement interdit. Toute forme de copie totale ou partielle, d’aspiration et de reproduction de la base de données produite et exploitée par Trois Fils sur l’Application et/ou le Site Internet est formellement interdite sans son accord écrit et préalable. L’Application et/ou le Site Internet peuvent contenir des liens hypertextes et/ou des hyperliens renvoyant vers des sites édités et hébergés depuis des serveurs tiers, et tout particulièrement concernant les bannières publicitaires, dont la régie n’est aucunement assurée par Trois Fils et sur lesquels aucun contrôle ne peut être exercé. A ce titre, Trois Fils décline toute responsabilité concernant les conséquences juridiques liées à l’accès à ces sites depuis l’Application et/ou le Site Internet. L’utilisation de liens hypertextes et/ou d’hyperliens pointant vers l’Application et/ou le Site Internet est autorisé par Trois Fils dans le strict cadre de la promotion de l’Application et/ou du Site Internet et des services de Trois Fils mais à la condition déterminante que l’intégrité de l’Application et/ou du Site Internet soit préservée et qu’aucun risque de confusion entre l’Application et/ou le Site Internet et les sites édités par des tiers ne soit constaté. Dans cette perspective, Trois Fils interdit formellement à tout Utilisateur d’avoir recours aux techniques dit de « framing », « d’inlinelinking » et de « deep-linking » portant sur la reproduction servile non autorisée du contenu de l’Application et/ou du Site Internet et son intégration sur des pages web éditées par des tiers. De même, Trois Fils ne saurait être techniquement en mesure d’empêcher tout site Internet de contenir des liens hypertextes et/ou des hyperliens, renvoyant vers l’Application et/ou le Site Internet qu’elle édite. Trois Fils décline toute responsabilité concernant les conséquences juridiques liées à l’accès à son Application et/ou Site Internet via d’autres sites Internet ou applications sur lesquels elle n’a aucun contrôle ni effet. Les logiciels fournis dans le cadre du Service sont mis à diposition en l’état et sans garantie d’aucune sorte de la part de Trois Fils notamment quant à l’adéquation des fonctionnalités desdits logiciels aux besoins et exigences de l’Utilisateur, la non-interruption ou l’absence d’erreur, la correction de défauts, d’anomalies, etc. L’Utilisateur demeure le propriétaire exclusif des informations personnelles et données personnelles de l’Utilisateur qu’il renseigne sur l’Application et/ou le Site Internet et Trois Fils ne saurait contester d’aucune manière ce droit de propriété.",
            Resiliation : "Suspension - résiliation - terme",
            Resiliation1 : "En cas de non-respect par l’Utilisateur d’une quelconque de ses obligations, sauf disposition contraire dans les présentes CGU, Trois Fils se réserve le droit de suspendre le Service, et ce jusqu’au parfait respect desdites obligations.",
            Resiliation2 : "Toute suspension, résiliation ou suppression du Service aux torts exclusifs de l’Utilisateur notamment dans les conditions déterminées au présent article n’entraînera aucun dédommagement au bénéfice de l’Utilisateur. En outre, dans cette hypothèse, aucun remboursement du service ne pourra lui être répercuté. ",
            Update : "Mise à jour des cgu",
            Update1 : "Les présentes CGU pourront être modifiées à tout moment sur l'initiative de Trois Fils. Toute modification des présentes CGU ainsi que des documents auxquels il y est fait référence sera communiquée à l’Utilisateur lors de sa première utilisation du Site après cette modification.",
            Force : "Force majeure",
            Force1 : "Tout événement en dehors du contrôle de l'une ou l'autre Partie et contre lequel elle n'a pu raisonnablement se prémunir constitue un cas de force majeure et suspend à ce titre les obligations des parties. Les Parties admettent, sans que cette liste ne soit limitative, conventionnellement, entre elles, que ressortent de la force majeure, les dommages trouvant leurs origines ou leurs causes dans : une grève (edf, des opérateurs de télécommunications, des registrar, nic et autorités etc.), un arrêt de fourniture d'énergie (telle que l'électricité), une défaillance du réseau de télécommunication dont dépend Trois Fils et/ou des réseaux qui viendraient s'y substituer, une guerre civile ou étrangère, des émeutes ou mouvements populaires, des attentats etc.",
            Integralite : "Intégralité",
            Integralite1 : "Les dispositions des présentes CGU expriment l'intégralité de l'accord conclu entre l’Utilisateur et Trois Fils. Elles prévalent sur toute proposition, échange de lettres antérieures et postérieures à la conclusion des présentes, ainsi que sur toute autre disposition figurant dans les documents échangés entre les parties et relatifs à l'objet des CGU, sauf avenant dûment signé par les représentants des deux parties.",
            Nullity : "Nullité",
            Nullity1 : "Si une ou plusieurs dispositions des présentes CGU sont tenues pour non valides ou déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une décision devenue définitive d'une juridiction compétente, les autres stipulations des présentes CGU garderont toute leur force et leur portée. Le cas échéant Trois Fils s’engage à supprimer et remplacer immédiatement ladite clause par une clause juridiquement valide.",
            TitleCGU : "Title",
            TitleCGU1 : "En cas de difficulté d'interprétation entre le titre et le chapitre de l’un quelconque des articles et l'une quelconque des clauses, les titres et le chapitre seront réputés non-écrits.",
            Renounciation : "Non-renonciation",
            Renounciation1 : "Le fait que l’une ou l’autre des parties n'ait pas exigé, temporairement ou définitivement, l'application d'une disposition des présentes CGU ne pourra être considéré comme une renonciation aux droits détenus par cette partie. Tout échange de correspondance, d’écrit, de courrier électronique etc. Ne sauraient remettre en cause les termes des présentes CGU, sauf avenant dûment signé par les parties ou par leurs représentants.",
            Juridiction : "Attribution de juridiction - droit applicable",
            Juridiction1 : "La langue des présentes CGU est le français et la version française prédominera sur toutes autres versions traduites dans une autre langue.",
            Juridiction2 : "En cas de difficulté pour l’interprétation et/ou l'application des présentes CGU, les Parties décident de se soumettre préalablement à une procédure amiable avant toute action judiciaire.",
            Juridiction3 : "tout litige susceptible de survenir en rapport avec les présentes CGU, leur interprétation et leurs conséquences ou avec les actes les complétant ou les modifiant, attribution expresse et exclusive de compétence est faite aux tribunaux compétents du ressort de paris, nonobstant pluralité de défendeurs, appel en garantie, référé et expertise, et seules les lois françaises sont applicables aux présentes CGU.",
            Retractation : "Droit de rétractation",
            Retractation1 : "En acceptant les présentes CGU, vous acceptez expressément que le Contrat entre vous et Trois Fils consistant en la mise en relation avec un autre Membre soit exécuté avant l’expiration du délai de rétractation dès la Confirmation de Réservation et renoncez expressément à votre droit de rétraction, conformément aux dispositions de l’article L.221-28 du Code de la consommation.",
            PoP : "CHARTE DES DONNEES PERSONNELLES Trois Fils",
            PoP1 : "la présente charte a pour objet de fournir à l’utilisateur une information complète sur l’usage qui est opéré par Trois Fils de ses données à caractère personnel.",
            PoP2 : "les définitions renseignées à l’article 2 des conditions générales d’utilisation sont applicables à la présente charte des données personnelles.",
            PoP3 : "Dans le cadre de ses activités, Trois Fils met à disposition de ses Utilisateurs des Services de mise en relation depuis la plateforme Trois Fils.",
            PoP4 : "Afin d’assurer la réalisation de ses Services, Trois Fils Trois Fils est contrainte de collecter des données à caractère personnel relatives aux Utilisateurs sur son Application et/ou Site Internet.",
            PoP5 : "Trois Fils collecte ces informations dès lors que l’Utilisateur remplit créer son Compte Utilisateur.",
            PoP6 : "Soucieuse de la protection de la vie privée de l’Utilisateur et du traitement de ses données personnelles, Trois Fils s’engage, en tant que Responsable de traitement, à respecter les dispositions du Règlement (UE) n°2016/679 du 27 avril 2016, en assurant le meilleur niveau de protection des données à caractères personnelles de ses Utilisateurs.",
            PoP7 : "La présente Charte permet ainsi à l’Utilisateur de bénéficier d’une parfaite transparence quant au traitement de ses données personnelles par Trois Fils.",
            PoP8 : "Qui collecte les données à caractère personnel de l’utilisateur ?",
            PoP9 : "Trois Fils est le Responsable de traitement qui collecte les données à caractère personnel et met en œuvre les traitements de données.",
            PP_What : "Quelles sont les données personnelles collectées par Trois Fils ?",
            PP_What1 : "L’Utilisateur renseigne les informations suivantes sur la plateforme Trois Fils : Nom, Prénom, Adresse, Email.",
            PP_What2 : "La collecte de ces données est indispensable à la fourniture des Services par Trois Fils.",
            PP_What3 : "L’Utilisateur est notamment informé du caractère obligatoire ou non de la collecte de ses données. En cas d’absence de données dont le renseignement est obligatoire, Trois Fils ne pourra pas fournir ses Services à l’Utilisateur.",
            Finalité : "Quelles sont les finalités de la collecte des données personnelles de l’utilisateur?",
            Finalité1 : "Trois Fils n'est autorisée à utiliser les données personnelles de ses Utilisateurs que si elle dispose d'une base juridique valable et doit s'assurer de disposer d'une ou de plusieurs des bases juridiques suivantes :",
            Finalité2 : "L’exécution du contrat (par exemple pour traiter la Transaction) ; L’exécution d’une obligation légale (ex : conservation de factures) ; L’intérêt légitime de Trois Fils ou lorsque l’Utilisateur a donné son consentement.",
            Finalité3 : "Trois Fils est amenée à collecter et à enregistrer des données à caractère personnel de ses Utilisateurs pour :",
            Finalité4 : "La fourniture des Services : Les données personnelles renseignées par les Utilisateurs permettent à Trois Fils d’assurer un suivi de la fourniture des Services et des éventuelles réclamations des Utilisateurs. Le renseignement des données personnelles collectées aux fins de la fourniture des Services sur le Site Internet et l’Application est obligatoire. En leur absence, les Services ne pourront correctement être fournis. Ces données peuvent être transmises auprès des prestataires techniques de Trois Fils, dans la seule finalité de la bonne exécution des Services, ou l’établissement de statistiques. ",
            Finalité5 : "La gestion des paiements : Trois Fils est dans l’obligation de collecter certaines informations bancaires de l’Utilisateur afin de pouvoir encaisser le Prix, correspondant à la contrepartie financière à la fourniture par Trois Fils des Services de mise en relation entre les Utilisateurs. Le paiement est sécurisé selon un procédé de cryptage, permettant aux données bancaires de l’Utilisateur d’être envoyées cryptées vers la plateforme sécurisée de paiement en ligne exploitée et gérée par PayPal, accessible sur le site Internet www.paypal.com ",
            Finalité6 : "La résolution et l’amélioration des Services : Trois Fils utilise les informations personnelles de l’Utilisateur pour fournir des fonctionnalités, analyser des performances, corriger les erreurs et améliorer l’accessibilité ainsi que l’efficacité des services mis à disposition.",
            Finalité7 : "Effectuer des recommandations de services et de personnalisation des options de l’Utilisateur : Trois Fils utilise les informations personnelles de l’Utilisateur afin de recommander des fonctions et des services qui seraient susceptibles d’intéresser l’Utilisateur. Ces données permettent également à Trois Fils d’identifier les préférences de l’Utilisateur et de personnaliser son expérience avec les services proposés par le Site.",
            Finalité8 : "Etre conforme à la loi : Trois Fils peut être contrainte de conserver les données personnes des Utilisateurs de son Site Internet afin de répondre à des exigences légales ou réglementaires (ex : vérifier l’identité d’un Utilisateur dans le but de détecter ou prévenir des fraudes).",
            Finalité9 : "Une finalité spécifique : Trois Fils peut être amené à requérir le consentement de l’Utilisateur pour le traitement de ses informations personnelles pour une finalité spécifique qui lui sera indiqué. Lorsque l’Utilisateur a donné son consentement pour cette finalité spécifique, il a le droit de retirer ce consentement à tout moment. Trois Fils s’engage alors à cesser tout traitement d’informations de cet Utilisateur pour cette finalité.",
            Finalité10 : "La gestion de la relation client (email) et de la satisfaction client",
            Transfert : "Les données des utilisateurs sont-elles transférées à des tiers par le responsable de traitement ?",
            Transfert1 : "Les données personnelles collectées sont uniquement traitées par Trois Fils, sauf les cas suivants :",
            Transfert2 : "Partenaires commerciaux : Communication des données personnelles à des partenaires commerciaux de Trois Fils en vue de la réalisation des Services.",
            Transfert3 : "Si les destinataires de ces données sont : Les autorités de police dans le cadre des réquisitions judiciaires concernant la lutte contre la fraude ; Les services de paiement sécurisé sur le site.",
            Transfert4 : "Ces données peuvent également être transmises à des tiers dans le cadre de : La lutte contre la fraude et le recouvrement des impayés ; La réalisation d’opérations de maintenance et de développement techniques de l’Application et/ou du Site Internet, des applications interne et du système d’information de Trois Fils ; Le recueil des avis clients ; L’expédition de la newsletter.",
            Transfert5 : "Trois Fils peut également partager les données à caractère personnel, avec l’autorisation préalable et expresse de l’Utilisateur en cas devente, transfert ou fusion de Trois Fils ou d'une partie de celle-ci, ou si Trois Fils acquiert ou fusionne avec une autre société.",
            Transfert6 : "Si une telle transaction a lieu, Trois Fils s’assurera que l’autre partie respecte la législation sur la protection des données.",
            PPRights : "Quels sont les droits des utilisateurs sur leurs données à caractère personnel?",
            PPRights1 : "En application des articles 14 à 22 du Règlement 2016/679 du 27 avril 2016, toute personne physique utilisant le service a la faculté d’exercer les droits suivants :",
            PPRights2 : "Un droit d’information (qui désigne la mise à disposition d’informations claires et aisément accessibles à l’Utilisateur) ; Un droit d’accès ; Un droit de rectification ; Un droit d’opposition et d’effacement au traitement de ses données ; Un droit d’opposition au profilage ; Un droit à la limitation du traitement (qui désigne le fait que Trois Fils ne puisse, au-delà d’un certain temps, continuer à traiter et à utiliser les données personnelles de l’Utilisateur) ; Un droit à la portabilité de ses données (qui désigne le droit de l’Utilisateur de récupérer les données qu’il a fournies et de les transférer) ; Un droit de suppression",
            PPRights3 : "Enfin, lorsque Trois Fils détecte une violation de données à caractère personnel susceptible d’engendrer un risque élevé les droits et libertés de l’Utilisateur, l’Utilisateur sera informé de cette violation dans les meilleurs délais.",
            PPRights4 : "Ces droits peuvent être exercés auprès de Trois Fils qui a collecté les données à caractère personnel par email à l’adresse suivante : contact@troisfils.com",
            PPRights5 : "Conformément à la réglementation en vigueur, toute demande doit être signée et accompagnée de la photocopie d'un titre d'identité portant la signature du requérant et préciser l'adresse à laquelle doit parvenir la réponse. Une réponse sera alors adressée à l’Utilisateur dans un délai de deux (2) mois suivant la réception de la demande.",
            PPDeces : "Que deviennent les données de l’utilisateur après son décès?",
            PPDeces1 : "L’Utilisateur peut adresser des consignes à Trois Fils relatives à la conservation, à l'effacement et à la communication de ses données à caractère personnel après son décès conformément à l’article 40-1 de la loi 78-17 du 6 janvier 1978. L’Utilisateur peut formuler ses directives anticipées à l’adresse suivante : contact@troisfils.com",
            PoPUE : "Les données des utilisateurs sont-elles envoyées hors de l’union européenne ?",
            PoPUE1 : "Les données à caractère personnel concernant l’Utilisateur ne seront pas transmises pour les besoins des finalités définies ci-dessus à des sociétés situées dans des pays hors de l’Union Européenne, à l’exception de la communication d’informations obligatoires envers tout établissement bancaire et/ou d’assurance dans le cadre de la réalisation de Transactions en dehors de l’Union européenne.",
            PoPUE2 : "En cas de transfert des données à caractère personnel concernant l’Utilisateur à des sociétés situées en dehors de l’Union européenne, les données ne sont transférées qu’à des société qui se sont engagées auprès de Trois Fils d’assurer un niveau de protection des données suffisant et appropriés [notamment par des clauses contractuelles types (CCT) ou des règles internes d’entreprises (BCR)].",
            Conservation : "combien de temps les données des utilisateurs sont-elles conservées ?",
            Conservation1 : "L’Utilisateur est informé que les données personnelles qu’il renseigne sont conservées par Trois Fils pendant toute la durée du Service.",
            Conservation2 : "Trois Fils a déterminé que la durée de conservation des données personnelles sera fixée à la demande de l’Utilisateur dans le cadre de l’exercice des droits d’interrogation, d’accès, de rectification, d’opposition.",
            Conservation3 : "Pour plus d’informations sur les durées de conservation appliquées par Trois Fils, l’Utilisateur est autorisé à contacter le service client de Trois Fils à l’adresse suivante : contact@troisfils.com",
            Securisation : "Quelles sont les mesures de sécurité prises par Trois Fils pour protéger les données des utilisateurs à caractère personnel ?",
            Securisation1 : "Mesures internes à Trois Fils",
            Securisation2 : "En tant que responsable de traitement, Trois Fils prend toutes les précautions utiles pour préserver la sécurité et la confidentialité des données et notamment, empêcher qu’elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès, grâce à la sécurité du système informatique pour empêcher l'accès externe aux données personnelles des Utilisateurs.",
            Securisation3 : "Les données sont stockées sur un serveur de Trois Fils hébergé par DigitalOcean et MongoDB Atlas. D’autre part, lorsqu’elle a recours à des sous-traitants, Trois Fils s’assure du respect par ceux-ci des règles liées à la protection des données.",
            Securisation4 : "Les prestataires de paiement",
            Securisation5 : "Afin d´assurer la sécurité des paiements, Trois Fils ne conserve pas les données bancaires des Utilisateurs dès lors que le paiement du Prix a été réalisé. Trois Fils garantit l’Utilisateur qu'elle n'a jamais accès aux informations confidentielles relatives au moyen de paiement utilisé par ce dernier.",
            Securisation6 : "Le paiement est sécurisé selon un procédé de cryptage, permettant aux données bancaires de l’Utilisateur d’être envoyées cryptées vers la plateforme sécurisée de paiement en ligne exploitée et gérée par PayPal, accessible sur le site Internet www.paypal.com",
            Securisation7 : "En utilisant le système de paiement électronique PayPaltm, l’Utilisateur accepte sans réserve les conditions générales de vente de PayPaltm, accessibles à l'adresse suivante : https://www.paypal.com/fr/webapps/mpp/ua/legalhub-full",
            Securisation8 : "La lutte contre la fraude sur Internet",
            Securisation9 : "Afin de sécuriser les paiements et d’assurer une qualité de service optimale, les données personnelles collectées sur le Site sont également traitées par Trois Fils pour déterminer le niveau de risque de fraude associé à chaque Transaction et, le cas échéant, aider à moduler les conditions d’exécution de celle-ci.",
            Mineurs : "Les données des mineurs de moins de 18 ans sont-elles collectées ?",
            Mineurs1 : "Conformément aux conditions générales d’utilisation, il est nécessaire d’avoir 18 ans pour accéder au Site Internet et utiliser les Services.",
            Cookies : "Est-ce que Trois Fils utilise des cookies, tags et traceurs ?",
            Cookies1 : "Lorsque l’Utilisateur se sert des Services de Trois Fils, celle-ci reçoit et enregistre automatiquement certains types d’informations telles que les paramètres du navigateur Internet utilisé, le contenu de du panier ou encore les identifiants pour permettre à l’utilisateur de se connecter.",
            Cookies2 : "A l’entrée de l’Utilisateur sur le Site, un message d’information s’affiche pour l’avertir de l’utilisation de cookies : « En poursuivant ma navigation sur ce site, j'accepte l’utilisation de cookies, destinés à me proposer des communications ciblées et à réaliser des statistiques de visites».",
            Cookies3 : "Ce message est accompagné d’un bouton en forme de croix permettant de masquer le message et d’un lien « « Plus d’informations » renvoyant vers une page interne du Site. Des « cookies » ainsi que d’autres identificateurs uniques sont ainsi utilisés afin d’obtenir ces informations lorsque le navigateur ou l’appareil de l’Utilisateur accède à l’Application et/ou Site Internet. ",
            Cookies4 : "Qu’est-ce qu’un Cookie ?",
            Cookies5 : "Le terme cookie englobe plusieurs technologies permettant d’opérer un suivi de la navigation et des actions de l’internaute. Ces technologies sont multiples et en constante évolution. Il existe notamment, les cookies, tag, pixel, code Javascript. Le cookie est un petit fichier texte enregistré par le navigateur de votre ordinateur, tablette ou smartphone et qui permet de conserver des données utilisateur afin de faciliter la navigation et de permettre certaines fonctionnalités.",
            Cookies6 : "Pour quelles raisons des cookies, tags et traceurs sont-ils utilisés ?",
            Cookies7 : "Les cookies sont utilisés par Trois Fils afin de mémoriser les préférences de l’Utilisateur, d’optimiser et améliorer l’utilisation de l’Application et/ou Site Internet par l’Utilisateur en fournissant un contenu qui est plus précisément adapté à ses besoins.",
            Cookies8 : "Les Cookies que Trois Fils émet sur le site permettent :",
            Cookies9 : "D’identifier l’Utilisateur lors de sa connexion sur le Site ; De déterminer les paramètres du navigateur Internet de l’Utilisateur, tels que le type de navigateur utilisé et les plug-ins qui y sont installés ; D'établir des statistiques et volumes de fréquentation et d'utilisation des divers éléments composant nos services (à l’aide de cookies de mesure d’audience) ; D'adapter la présentation de l’Application et/ou Site Internet selon le terminal utilisé ; D’adapter la présentation de l’Application et/ou Site Internet selon les affinités de chaque Utilisateur ;",
            Cookies10 : "Seul l’émetteur d'un cookie est susceptible de lire ou de modifier des informations qui y sont contenues. Certains cookies sont installés jusqu'à la fermeture du navigateur de l’Utilisateur, d'autres sont conservés pendant plus longtemps. Les cookies sont conservés pour une durée maximale de 12 (douze) mois.",
            Cookies11 : "Paramétrage du logiciel de navigation",
            Cookies12 : "L’Utilisateur peut configurer le logiciel de navigation pour que des cookies soient enregistrés dans son terminal ou, au contraire, qu'ils soient rejetés, soit systématiquement, soit selon son émetteur. L’Utilisateur peut également configurer son logiciel de navigation pour que l'acceptation ou le refus des cookies lui soient proposés ponctuellement, avant qu'un cookie soit susceptible d'être enregistré dans son terminal.",
            Cookies13 : "Comment exercer ce choix, selon le navigateur utilisé ?",
            Cookies14 : "Pour la gestion des cookies, la configuration de chaque navigateur est différente. La section « aide » de la barre d'outils de la plupart des navigateurs indique comment refuser les nouveaux « cookies » ou obtenir un message qui signale leur réception, ou encore comment désactiver tous les « cookies ».",
            Cookies15 : "Les cookies que Trois Fils émet sont utilisés aux fins décrites ci-dessus, sous réserve des choix de l’Utilisateur, qui résultent des paramètres de son logiciel de navigation utilisé lors de sa visite sur le Site et de son accord en cliquant sur le bouton « ok » de la bannière concernant les cookies.",
            Cookies16 : "Plusieurs possibilités sont offertes à l’Utilisateur pour gérer les cookies. Tout paramétrage de l’Utilisateur sur l’utilisation des cookies sera susceptible de modifier sa navigation sur Internet et ses conditions d'accès à certains services nécessitant l'utilisation de cookies. L’Utilisateur peut faire le choix à tout moment d'exprimer et de modifier ses souhaits en matière de cookies, par les moyens décrits ci-dessous.        ",
            Cookies17 : "Pour Internet Explorer™ : http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies",
            Cookies18 : "Pour Safari™ : http://docs.info.apple.com/article.html?path=Safari/3.0/fr/9277.html",
            Cookies19 : "Pour Chrome™ : http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647",
            Cookies20 : "Pour Firefox™ :  http://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookies",
            Cookies21 : "Pour Opera™ : http://help.opera.com/Windows/10.20/fr/cookies.html",
            Cookies22 : "Cookies de comportement",
            Cookies23 : "Trois Fils ne collecte ni traite à ce jour d’informations personnelles dit « de comportement » de l’Utilisateur, tel que défini par l’Ordonnance n° 2011-1012 du 24 août 2011 relative aux communications électroniques.",
            Cookies24 : "Toute mise en place de cookie de comportement sur le Site par Trois Fils fera l’objet au préalable d’une autorisation expresse et préalable de l’Utilisateur.",
            Delegue : "Le délégué à la protection des données de Trois Fils",
            Delegue1 : "Trois Fils ne rentre pas dans les critères de nomination d’un Délégué à la protection des données, prévus par le Règlement (UE) n°2016/679 du 27 avril 2016.",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }
}

function insert_the_HTML(translation){
    document.getElementById('Title_Page_Home').innerHTML = translation.Title_Page;
    document.getElementById('Slogan').innerHTML = translation.Slogan;
    document.getElementById('Disclamer').innerHTML = translation.Disclamer;
    document.getElementById('Disclamer1').innerHTML = translation.Disclamer1;
    document.getElementById('Disclamer2').innerHTML = translation.Disclamer2;
    document.getElementById('Disclamer3').innerHTML = translation.Disclamer3;
    document.getElementById('Legal_mentions').innerHTML = translation.Legal_mentions;
    document.getElementById('Legal_mentions1').innerHTML = translation.Legal_mentions1;
    document.getElementById('Legal_mentions2').innerHTML = translation.Legal_mentions2;
    document.getElementById('Legal_mentions3').innerHTML = translation.Legal_mentions3;
    document.getElementById('Legal_mentions4').innerHTML = translation.Legal_mentions4;
    document.getElementById('Legal_mentions5').innerHTML = translation.Legal_mentions5;
    document.getElementById('Object_CGU').innerHTML = translation.Object_CGU;
    document.getElementById('Object_CGU1').innerHTML = translation.Object_CGU1;
    document.getElementById('Object_CGU2').innerHTML = translation.Object_CGU2;
    document.getElementById('Object_CGU3').innerHTML = translation.Object_CGU3;
    document.getElementById('Besoins').innerHTML = translation.Besoins;
    document.getElementById('Besoins1').innerHTML = translation.Besoins1;
    document.getElementById('Besoins2').innerHTML = translation.Besoins2;
    document.getElementById('Creation').innerHTML = translation.Creation;
    document.getElementById('Creation1').innerHTML = translation.Creation1;
    document.getElementById('Creation2').innerHTML = translation.Creation2;
    document.getElementById('Creation3').innerHTML = translation.Creation3;
    document.getElementById('Creation4').innerHTML = translation.Creation4;
    document.getElementById('Creation5').innerHTML = translation.Creation5;
    document.getElementById('Creation6').innerHTML = translation.Creation6;
    document.getElementById('Creation7').innerHTML = translation.Creation7;
    document.getElementById('Creation8').innerHTML = translation.Creation8;
    document.getElementById('Creation9').innerHTML = translation.Creation9;
    document.getElementById('Droits_user').innerHTML = translation.Droits_user;
    document.getElementById('Droits_user1').innerHTML = translation.Droits_user1;
    document.getElementById('Droits_user2').innerHTML = translation.Droits_user2;
    document.getElementById('Droits_user3').innerHTML = translation.Droits_user3;
    document.getElementById('Modalites_use').innerHTML = translation.Modalites_use;
    document.getElementById('Modalites_use1').innerHTML = translation.Modalites_use1;
    document.getElementById('Modalites_use2').innerHTML = translation.Modalites_use2;
    document.getElementById('Modalites_use3').innerHTML = translation.Modalites_use3;
    document.getElementById('Price_Det').innerHTML = translation.Price_Det;
    document.getElementById('Price_Det1').innerHTML = translation.Price_Det1;
    document.getElementById('Mode_Payment').innerHTML = translation.Mode_Payment;
    document.getElementById('Mode_Payment1').innerHTML = translation.Mode_Payment1;
    document.getElementById('Mode_Payment2').innerHTML = translation.Mode_Payment2;
    document.getElementById('Mode_Payment3').innerHTML = translation.Mode_Payment3;

    document.getElementById('Securisation').innerHTML = translation.Securisation;
    document.getElementById('Securisation1').innerHTML = translation.Securisation1;
    document.getElementById('Securisation2').innerHTML = translation.Securisation2;
    document.getElementById('Securisation3').innerHTML = translation.Securisation3;
    document.getElementById('Securisation4').innerHTML = translation.Securisation4;
    document.getElementById('Securisation5').innerHTML = translation.Securisation5;
    document.getElementById('Securisation6').innerHTML = translation.Securisation6;
    document.getElementById('Securisation7').innerHTML = translation.Securisation7;
    document.getElementById('Securisation8').innerHTML = translation.Securisation8;
    document.getElementById('Securisation9').innerHTML = translation.Securisation9;

    document.getElementById('Securisation_Payments').innerHTML = translation.Securisation_Payments;
    document.getElementById('Securisation_Payments1').innerHTML = translation.Securisation_Payments1;
    document.getElementById('Securisation_Payments2').innerHTML = translation.Securisation_Payments2;
    document.getElementById('Securisation_Payments3').innerHTML = translation.Securisation_Payments3;
    document.getElementById('Declaration_User').innerHTML = translation.Declaration_User;
    document.getElementById('Declaration_User1').innerHTML = translation.Declaration_User1;
    document.getElementById('Declaration_User2').innerHTML = translation.Declaration_User2;
    document.getElementById('Reclamations').innerHTML = translation.Reclamations;
    document.getElementById('Reclamations1').innerHTML = translation.Reclamations1;
    document.getElementById('Disclamer_Resp').innerHTML = translation.Disclamer_Resp;
    document.getElementById('Disclamer_Resp1').innerHTML = translation.Disclamer_Resp1;
    document.getElementById('Disclamer_Resp2').innerHTML = translation.Disclamer_Resp2;
    document.getElementById('Disclamer_Resp3').innerHTML = translation.Disclamer_Resp3;
    document.getElementById('Disclamer_Resp4').innerHTML = translation.Disclamer_Resp4;
    document.getElementById('Disclamer_Resp5').innerHTML = translation.Disclamer_Resp5;
    document.getElementById('Disclamer_Resp6').innerHTML = translation.Disclamer_Resp6;
    document.getElementById('Disclamer_Resp7').innerHTML = translation.Disclamer_Resp7;
    document.getElementById('Disclamer_Resp8').innerHTML = translation.Disclamer_Resp8;
    document.getElementById('Technic').innerHTML = translation.Technic;
    document.getElementById('Technic1').innerHTML = translation.Technic1;
    document.getElementById('Technic2').innerHTML = translation.Technic2;
    document.getElementById('Technic3').innerHTML = translation.Technic3;
    document.getElementById('Technic4').innerHTML = translation.Technic4;
    document.getElementById('Technic5').innerHTML = translation.Technic5;
    document.getElementById('Technic6').innerHTML = translation.Technic6;
    document.getElementById('Communication').innerHTML = translation.Communication;
    document.getElementById('Communication1').innerHTML = translation.Communication1;
    document.getElementById('Communication2').innerHTML = translation.Communication2;
    document.getElementById('Communication3').innerHTML = translation.Communication3;
    document.getElementById('Prop_intel').innerHTML = translation.Prop_intel;
    document.getElementById('Prop_intel1').innerHTML = translation.Prop_intel1;
    document.getElementById('Prop_intel2').innerHTML = translation.Prop_intel2;
    document.getElementById('Prop_intel3').innerHTML = translation.Prop_intel3;
    document.getElementById('Resiliation').innerHTML = translation.Resiliation;
    document.getElementById('Resiliation1').innerHTML = translation.Resiliation1;
    document.getElementById('Resiliation2').innerHTML = translation.Resiliation2;
    document.getElementById('Update').innerHTML = translation.Update;
    document.getElementById('Update1').innerHTML = translation.Update1;
    document.getElementById('Force').innerHTML = translation.Force;
    document.getElementById('Force1').innerHTML = translation.Force1;
    document.getElementById('Integralite').innerHTML = translation.Integralite;
    document.getElementById('Integralite1').innerHTML = translation.Integralite1;
    document.getElementById('Nullity').innerHTML = translation.Nullity;
    document.getElementById('Nullity1').innerHTML = translation.Nullity1;
    document.getElementById('TitleCGU').innerHTML = translation.TitleCGU;
    document.getElementById('TitleCGU1').innerHTML = translation.TitleCGU1;
    document.getElementById('Renounciation').innerHTML = translation.Renounciation;
    document.getElementById('Renounciation1').innerHTML = translation.Renounciation1;
    document.getElementById('Juridiction').innerHTML = translation.Juridiction;
    document.getElementById('Juridiction1').innerHTML = translation.Juridiction1;
    document.getElementById('Juridiction2').innerHTML = translation.Juridiction2;
    document.getElementById('Juridiction3').innerHTML = translation.Juridiction3;
    document.getElementById('Retractation').innerHTML = translation.Retractation;
    document.getElementById('Retractation1').innerHTML = translation.Retractation1;
    document.getElementById('PoP').innerHTML = translation.PoP;
    document.getElementById('PoP1').innerHTML = translation.PoP1;
    document.getElementById('PoP2').innerHTML = translation.PoP2;
    document.getElementById('PoP3').innerHTML = translation.PoP3;
    document.getElementById('PoP4').innerHTML = translation.PoP4;
    document.getElementById('PoP5').innerHTML = translation.PoP5;
    document.getElementById('PoP6').innerHTML = translation.PoP6;
    document.getElementById('PoP7').innerHTML = translation.PoP7;
    document.getElementById('PoP8').innerHTML = translation.PoP8;
    document.getElementById('PoP9').innerHTML = translation.PoP9;
    document.getElementById('PP_What').innerHTML = translation.PP_What;
    document.getElementById('PP_What1').innerHTML = translation.PP_What1;
    document.getElementById('PP_What2').innerHTML = translation.PP_What2;
    document.getElementById('PP_What3').innerHTML = translation.PP_What3;
    document.getElementById('Finalité').innerHTML = translation.Finalité;
    document.getElementById('Finalité1').innerHTML = translation.Finalité1;
    document.getElementById('Finalité2').innerHTML = translation.Finalité2;
    document.getElementById('Finalité3').innerHTML = translation.Finalité3;
    document.getElementById('Finalité4').innerHTML = translation.Finalité4;
    document.getElementById('Finalité5').innerHTML = translation.Finalité5;
    document.getElementById('Finalité6').innerHTML = translation.Finalité6;
    document.getElementById('Finalité7').innerHTML = translation.Finalité7;
    document.getElementById('Finalité8').innerHTML = translation.Finalité8;
    document.getElementById('Finalité9').innerHTML = translation.Finalité9;
    document.getElementById('Finalité10').innerHTML = translation.Finalité10;
    document.getElementById('Transfert').innerHTML = translation.Transfert;
    document.getElementById('Transfert1').innerHTML = translation.Transfert1;
    document.getElementById('Transfert2').innerHTML = translation.Transfert2;
    document.getElementById('Transfert3').innerHTML = translation.Transfert3;
    document.getElementById('Transfert4').innerHTML = translation.Transfert4;
    document.getElementById('Transfert5').innerHTML = translation.Transfert5;
    document.getElementById('Transfert6').innerHTML = translation.Transfert6;
    document.getElementById('PPRights').innerHTML = translation.PPRights;
    document.getElementById('PPRights1').innerHTML = translation.PPRights1;
    document.getElementById('PPRights2').innerHTML = translation.PPRights2;
    document.getElementById('PPRights3').innerHTML = translation.PPRights3;
    document.getElementById('PPRights4').innerHTML = translation.PPRights4;
    document.getElementById('PPRights5').innerHTML = translation.PPRights5;
    document.getElementById('PPDeces').innerHTML = translation.PPDeces;
    document.getElementById('PPDeces1').innerHTML = translation.PPDeces1;
    document.getElementById('PoPUE').innerHTML = translation.PoPUE;
    document.getElementById('PoPUE1').innerHTML = translation.PoPUE1;
    document.getElementById('PoPUE2').innerHTML = translation.PoPUE2;
    document.getElementById('Conservation').innerHTML = translation.Conservation;
    document.getElementById('Conservation1').innerHTML = translation.Conservation1;
    document.getElementById('Conservation2').innerHTML = translation.Conservation2;
    document.getElementById('Conservation3').innerHTML = translation.Conservation3;
    document.getElementById('Mineurs').innerHTML = translation.Mineurs;
    document.getElementById('Mineurs1').innerHTML = translation.Mineurs1;
    document.getElementById('Cookies').innerHTML = translation.Cookies;
    document.getElementById('Cookies1').innerHTML = translation.Cookies1;
    document.getElementById('Cookies2').innerHTML = translation.Cookies2;
    document.getElementById('Cookies3').innerHTML = translation.Cookies3;
    document.getElementById('Cookies4').innerHTML = translation.Cookies4;
    document.getElementById('Cookies5').innerHTML = translation.Cookies5;
    document.getElementById('Cookies6').innerHTML = translation.Cookies6;
    document.getElementById('Cookies7').innerHTML = translation.Cookies7;
    document.getElementById('Cookies8').innerHTML = translation.Cookies8;
    document.getElementById('Cookies9').innerHTML = translation.Cookies9;
    document.getElementById('Cookies10').innerHTML = translation.Cookies10;
    document.getElementById('Cookies11').innerHTML = translation.Cookies11;
    document.getElementById('Cookies12').innerHTML = translation.Cookies12;
    document.getElementById('Cookies13').innerHTML = translation.Cookies13;
    document.getElementById('Cookies14').innerHTML = translation.Cookies14;
    document.getElementById('Cookies15').innerHTML = translation.Cookies15;
    document.getElementById('Cookies16').innerHTML = translation.Cookies16;
    document.getElementById('Cookies17').innerHTML = translation.Cookies17;
    document.getElementById('Cookies18').innerHTML = translation.Cookies18;
    document.getElementById('Cookies19').innerHTML = translation.Cookies19;
    document.getElementById('Cookies20').innerHTML = translation.Cookies20;
    document.getElementById('Cookies21').innerHTML = translation.Cookies21;
    document.getElementById('Cookies22').innerHTML = translation.Cookies22;
    document.getElementById('Cookies23').innerHTML = translation.Cookies23;
    document.getElementById('Cookies24').innerHTML = translation.Cookies24;
    document.getElementById('Delegue').innerHTML = translation.Delegue;
    document.getElementById('Delegue1').innerHTML = translation.Delegue1;
}

