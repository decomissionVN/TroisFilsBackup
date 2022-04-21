//TO PUT IN ANOTHER FILE - MORE CLEAN WITH EXPORT**************************************************FILE OPTIONS.JS
class Model {
    constructor(imageUrl, label) {
        this._imageUrl = imageUrl;
        this._label = label;
    }
    get imageUrl() {
        return this._imageUrl
    }
    set imageUrl(_imageUrl) {
        this._imageUrl = this.imageUrl
    }
    get label() {
        return this._label
    }
    set label(_label) {
        this._label = this.label
    }
}

let Models = [];
Models.push(new Model('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/ModelS.png', 'Small'));
Models.push(new Model('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/ModelM.png', 'Medium'));
Models.push(new Model('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/ModelL.png', 'Large'));
Models.push(new Model('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/ModelXL.png', 'XLarge'));


class Shoulder {
    constructor(imageUrl, label) {
        this._imageUrl = imageUrl;
        this._label = label;
    }
    get imageUrl() {
        return this._imageUrl
    }
    set imageUrl(_imageUrl) {
        this._imageUrl = this.imageUrl
    }
    get label() {
        return this._label
    }
    set label(_label) {
        this._label = this.label
    }
}

let Shoulders = [];
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VShape_preview.png', 'VShape'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_XShape_preview.png', 'XShape'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_OneShoulder_preview.png', 'OneShoulder'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_Crossed_preview.png', 'Crossed'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_CrossedC_preview.png', 'CrossedC'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VShapeLarge_preview.png', 'VShapeLarge'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_NakedRound_preview.png', 'NakedRound'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_Naked_preview.png', 'Naked'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VHalf_preview.png', 'VHalf'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_LargeC_preview.png', 'LargeC'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_LargeRight_preview.png', 'LargeRight'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_LargeNaked_preview.png', 'LargeNaked'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VUnique_preview.png', 'VUnique'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_StripesCurves_preview.png', 'StripesCurves'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_StraightNeck_preview.png', 'StraightNeck'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VLargeSleeves_preview.png', 'VLargeSleeves'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_StraightLarge_preview.png', 'StraightLarge'));
Shoulders.push(new Shoulder('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/TOP/SHOULDERS/Options/Model_Medium_Shoulder_BandeNaked_preview.png', 'BandeNaked'));


class Style {
    constructor(imageUrl, label) {
        this._imageUrl = imageUrl;
        this._label = label;
    }
    get imageUrl() {
        return this._imageUrl
    }
    set imageUrl(_imageUrl) {
        this._imageUrl = this.imageUrl
    }
    get label() {
        return this._label
    }
    set label(_label) {
        this._label = this.label
    }
}

let Styles = [];
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_Large_preview.png', 'Large'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_Large2Cut_preview.png', 'Large2Cut'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_Large2CutFront_preview.png', 'Large2CutFront'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_LargeCutFront_preview.png', 'LargeCutFront'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_LargeP_preview.png', 'LargeP'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_LargeSide_preview.png', 'LargeSide'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_LargeSide1_preview.png', 'LargeSide1'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_LargeSide2_preview.png', 'LargeSide2'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_LargeWrist_preview.png', 'LargeWrist'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_Princess_preview.png', 'Princess'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_Straight_preview.png', 'Straight'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_VLarge_preview.png', 'VLarge'));
Styles.push(new Style('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/FRONT/BOTTOM/STYLE/Options/Model_Medium_Style_VLargeDiff_preview.png', 'VLargeDiff'));

class Back {
    constructor(imageUrl, label) {
        this._imageUrl = imageUrl;
        this._label = label;
    }
    get imageUrl() {
        return this._imageUrl
    }
    set imageUrl(_imageUrl) {
        this._imageUrl = this.imageUrl
    }
    get label() {
        return this._label
    }
    set label(_label) {
        this._label = this.label
    }
}

let Backs = [];
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VShape_preview.png', 'VShape'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_XShape_preview.png', 'XShape'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_OneShoulder_preview.png', 'OneShoulder'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_Crossed_preview.png', 'Crossed'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_CrossedC_preview.png', 'CrossedC'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VShapeLarge_preview.png', 'VShapeLarge'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_NakedRound_preview.png', 'NakedRound'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_Naked_preview.png', 'Naked'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VHalf_preview.png', 'VHalf'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_LargeC_preview.png', 'LargeC'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_LargeRight_preview.png', 'LargeRight'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_LargeNaked_preview.png', 'LargeNaked'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VUnique_preview.png', 'VUnique'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_StripesCurves_preview.png', 'StripesCurves'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_StraightNeck_preview.png', 'StraightNeck'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_VLargeSleeves_preview.png', 'VLargeSleeves'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_StraightLarge_preview.png', 'StraightLarge'));
Backs.push(new Back('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/BACK/TOP/SHOULDERS/Options/Model_Medium_Shoulder_BandeNaked_preview.png', 'BandeNaked'));




class Fabric {
    constructor(imageUrl, label) {
        this._imageUrl = imageUrl;
        this._label = label;
    }
    get imageUrl() {
        return this._imageUrl
    }
    set imageUrl(_imageUrl) {
        this._imageUrl = this.imageUrl
    }
    get label() {
        return this._label
    }
    set label(_label) {
        this._label = this.label
    }
}

let Fabrics = [];
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/VeryThinSilk.jpg', 'VeryThinSilk'));
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/ThinSilk.jpg', 'ThinSilk'));
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/ThickSilk.jpg', 'ThickSilk'));
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/SoftSilk.jpg', 'SoftSilk'));
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/Silk.jpg', 'Silk'));
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/HeavyTexture.jpg', 'HeavyTexture'));
Fabrics.push(new Fabric('https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/COLOR/Cotton.jpg', 'Cotton'));


class Color {
    constructor(imageUrl, label) {
        this._imageUrl = imageUrl;
        this._label = label;
    }
    get imageUrl() {
        return this._imageUrl
    }
    set imageUrl(_imageUrl) {
        this._imageUrl = this.imageUrl
    }
    get label() {
        return this._label
    }
    set label(_label) {
        this._label = this.label
    }
}

let Colors = [];
Colors.push(new Color('#ffffff', 'White'));
Colors.push(new Color('#dedede', 'Grey1'));
Colors.push(new Color('#fffff0', 'Beige'));
Colors.push(new Color('#f2f2f2', 'Whitecream'));
Colors.push(new Color('#e8e8e8', 'Grey2'));
Colors.push(new Color('#fffef9', 'Beigecream'));





let QueryParams_categories = ['Model', 'Shoulder', 'Style', 'Back', 'Fabric', 'Color', 'Measures'];

















//FILE LADIES.JS CONTAINING THE MAIN FONCTIONS *********************************************************************FILE LADIES.JS

//FIRST, CHECK IF THE QUERYPARAMETERS ARE EMPTY FOR: model, corte, shoulders, back, sleeves, color, fabric.

simulator_display_missing_event();

simulator__navigator_enable_step();

function simulator_display_missing_event() {
    let queryParams = new URLSearchParams(window.location.search);
    let _model = queryParams.get('model');
    let _shoulder = queryParams.get('shoulder');
    let _style = queryParams.get('style');
    let _back = queryParams.get('back');
    let _view = queryParams.get('view');
    let _step = queryParams.get('step');
    let _fabric = queryParams.get('fabric');
    let _color = queryParams.get('color');
    let _measures = queryParams.get('measures');

    if (_view === null) {
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set('view', 'front');
        history.pushState(null, null, "?" + queryParams.toString());
    }

    if (_step === null) {
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set('step', 'Model');
        history.pushState(null, null, "?" + queryParams.toString());
    }

    if (_model === null) {
        simulator__display_step1();
        simulator__navigator_enable_step();

    } else if (_shoulder === null) {
        simulator__display_step2();
        simulator__navigator_enable_step();

    } else if (_style === null) {
        simulator__display_step3();
        simulator__navigator_enable_step();

    } else if (_back === null) {
        simulator__display_step4();
        simulator__navigator_enable_step();

    } else if (_fabric === null) {
            simulator__display_step5();
            simulator__navigator_enable_step();

    } else if (_color === null) {
        simulator__display_step6();
        simulator__navigator_enable_step();

    } else {
        simulator__navigator_enable_step();
        simulator__redirect_navigation('Color');
    }
}

//FUNCTIONS TO CHOOSE THE OPTIONS AND PRESENT A TRANSLATED TEXT

function simulator__choose(category, choice) {
    event.preventDefault();
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            selection : "Confirmer la sélection",
        }
        simulator__choose_translated(category, choice, translation);
    } else if (language === 'en'){
        let translation = {
            selection : "Confirm the selection",
        }
        simulator__choose_translated(category, choice, translation);
    }
}

function simulator__choose_translated(category, choice, translation) {
    let queryParams = new URLSearchParams(window.location.search);
    console.log(choice);
    queryParams.set(category, choice);
    history.pushState(null, null, "?" + queryParams.toString());

    simulator__display_draws_specific();

    document.getElementById('selector__options-validation').innerHTML = `<a href="#personalisation__popup-top" onclick="simulator_display_missing_event()" class="button" id="button__select_option">${translation.selection}</a>`;
}


function simulator__choose_relocate(category, choice) {
    event.preventDefault();
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = {
            selection : "Confirmer la sélection",
        }
        simulator__choose_relocate_translated (category, choice, translation);
    } else if (language === 'en'){
        let translation = {
            selection : "Confirm the selection",
        }
        simulator__choose_relocate_translated (category, choice, translation)
    }
}

function simulator__choose_relocate_translated (category, choice, translation) {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set(category, choice);
    history.pushState(null, null, "?" + queryParams.toString());

    simulator__display_draws_specific();
    simulator__save_step('Measures');
        
    document.getElementById('selector__options-validation').innerHTML = `<a href="../../ladies/Measures.html" onclick="simulator__relocate_measures()" class="button" id="button__select_option">${translation.selection}</a>`;

}

//FUNCTION TO RELOCATE 

function simulator__save_step(_step) {
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set('step', _step);
        history.pushState(null, null, "?" + queryParams.toString());
}

function simulator__relocate_measures() {
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
    let _model = queryParams.get('model');
    let _shoulder = queryParams.get('shoulder');
    let _style = queryParams.get('style');
    let _back = queryParams.get('back');
    let _fabric = queryParams.get('fabric');
    let _color = queryParams.get('color');
    let datenow = Date.now();

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token === null) {
        let language = localStorage.getItem("language");
        if (language === 'fr') {
            let translation = {
                save : "Enregistrez votre creation!", login_simul : "Connectez ou inscrivez-vous en quelques secondes pour accéder à votre compte", without_session : "Continuer sans compte"
            }
            display_simulator1(translation);
        } else if (language === 'en') {
            let translation = {
                save : "Save your creation!", login_simul : "Login our signup in few seconds to enter your account.", without_session : "Continue without session"
            }
            display_simulator1(translation);
        }

        function display_simulator1(translation) {
            document.getElementById('Popup__background').style.display = 'block';
            document.getElementById('Explications_general').innerHTML = `<h2>${translation.save}</h2><p>${translation.login_simul}</p>`;
            document.getElementById('submitorder_div').innerHTML = `<a href="#" class="button" id="submitorder" onclick="Close_Popup_Redirect_Measures()">${translation.without_session}</a>`;

        }
        
    } else {
        const dress = {
            userId: userId.userId,
            datenow: datenow,
            shoulder: _shoulder,
            style: _style,
            back: _back,
            color: _color,
            fabric: _fabric
        };

        console.log(dress);

        fetch('https://api.troisfils.com/api/simulator/dresses', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(dress) }).then(response => response.json()).then(response => dress_saved(response))
            .catch(function (error) {
                alert('TOKEN ERROR ' + error.message)
            })
    }
    
}

function dress_saved(response) {
    let queryParams = new URLSearchParams(window.location.search);
    window.setTimeout(window.location.replace("../../ladies/Measures.html" + "?" + queryParams.toString()), 5000);
}

function Close_Popup_Redirect_Measures() {
    let queryParams = new URLSearchParams(window.location.search);
    window.setTimeout(window.location.replace("../../ladies/Measures.html" + "?" + queryParams.toString()), 5000);
}




function simulator__display_step1() {
    simulator__save_step('Model');
    let language = localStorage.getItem("language");
        if (language === 'fr') {
            let translation = {
                welcome: "Bienvenue!", subtitle_step1 : "Afin de pouvoir vous proposer un service de tailleur adapté, nous vous proposons d'affiner vos envies et vos preferences en utilisant notre simulateur. Il vous faudra ensuite discuter avec votre tailleur en rendez-vous digitale pour finaliser et parfaire votre création<br>Commencez dès maintenant votre exploration!", select_model : "Veuillez selectionner un modèle pour la simulation"
                }
            display_simulator_step1_translated(translation);
        } else if (language === 'en') {
            let translation = {
                    welcome: "Welcome!", subtitle_step1 : "In order to propose you the best tailoring, we propose you to affinate your selection and preferences via our simulator. You will then be able to book a private appointment with our tailors or to take your measures online assisted by videos.<br>Start now your customization!", select_model : "Please choose your model for the simulation"
                }
            display_simulator_step1_translated(translation);
        }

        function display_simulator_step1_translated(translation) {
            document.getElementById('simulator__initial-message2').innerHTML = translation.welcome;
            document.getElementById('simulator__initial-message3').innerHTML = translation.subtitle_step1;
        
            let optionList = "";
            Models.forEach(Model => {
                optionList += `<div class="Option_Background_Models"><a href="#" class="Model_options" id="${Model.label}" onclick="simulator__choose('model', '${Model.label}')"><img src=${Model.imageUrl} alt=${Model.label}/></a></div>`
            })
        
            document.getElementById('selector__options').innerHTML = optionList;
            document.getElementById('selector__options-validation').innerHTML = `<a class="button_please_select">${translation.select_model}</a>`;
        }   
}





function simulator__display_step2() {
    simulator__save_step('Shoulder');
    let language = localStorage.getItem("language");
        if (language === 'fr') {
            let translation = {
                shoulder_options : "Style des épaules :", shoulder_choose : "Veuillez choisir le style de coupe aux épaules",
                }
            display_simulator_step2_translated(translation);
        } else if (language === 'en') {
            let translation = {
                shoulder_options : "Shoulder's style :", shoulder_choose : "Please choose your dress' shoulder design",
                }
            display_simulator_step2_translated(translation);
        }
        
        function display_simulator_step2_translated(translation) {
            document.getElementById('options_title').innerHTML = translation.shoulder_options;
            document.getElementById('simulator__initial-message').style.display = 'none';
            document.getElementById('simulator__explain-preview').style.display = 'none';
            
            let optionList = "";
            Shoulders.forEach(Shoulder => {
                optionList += `<div class="Option_Background"><a href="#" id="${Shoulder.label}" onclick="simulator__choose('shoulder', '${Shoulder.label}')"><img class="OptionIcons" src=${Shoulder.imageUrl} alt=${Shoulder.label}/></a></div>`;
            })

            document.getElementById('selector__options').innerHTML = optionList;
            document.getElementById('selector__options-validation').innerHTML = `<a class="button_please_select">${translation.shoulder_choose}</a>`;
        }
}


function simulator__display_step3() {
    simulator__save_step('Style');
    let language = localStorage.getItem("language");
        if (language === 'fr') {
            let translation = {
                style_options : "Style de coupe :", style_choose : "Veuillez choisir le style de coupe",
                }
            display_simulator_step3_translated(translation);
        } else if (language === 'en') {
            let translation = {
                style_options : "Dress' style :", style_choose : "Please choose your dress' style",
                }
            display_simulator_step3_translated(translation);
        }
    
    function display_simulator_step3_translated(translation) {
        //Add which step is the user;
        document.getElementById('options_title').innerHTML = translation.style_options;
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

        //Add the options available to user at this step;
        let optionList = "";
        Styles.forEach(Style => {
            optionList += `<div class="Option_Background"><a href="#" id="${Style.label}" onclick="simulator__choose('style', '${Style.label}')"><img class="OptionIcons" src=${Style.imageUrl} alt=${Style.label}/></a></div>`;
        })

        document.getElementById('selector__options').innerHTML = optionList;
        document.getElementById('selector__options-validation').innerHTML = `<a class="button_please_select">${translation.style_choose}</a>`;
    }
}


function simulator__display_step4() {
    simulator__save_step('Back');
    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation = {
            back_options : "Design pour le dos :", back_choose : "Veuillez choisir le style de coupe pour le dos",
            }
        display_simulator_step4_translated(translation);
    } else if (language === 'en') {
        let translation = {
            back_options : "Back design :", back_choose : "Please choose your dress' back design",
            }
        display_simulator_step4_translated(translation);
    }

    function display_simulator_step4_translated(translation) {
        //Add which step is the user;
        document.getElementById('options_title').innerHTML = translation.back_options;
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

        //Display the back view

        simulator__modify_view('back');
        
        //Add the options available to user at this step;

        let optionList = "";
        Backs.forEach(Back => {
            optionList += `<div class="Option_Background"><a href="#" id="${Back.label}" onclick=" simulator__choose('back', '${Back.label}')"><img class="OptionIcons" src=${Back.imageUrl} alt=${Back.label}/></a></div>`;
        })

        document.getElementById('selector__options').innerHTML = optionList;
        document.getElementById('selector__options-validation').innerHTML = `<a class="button_please_select">${translation.back_choose}</a>`;
    }
}



function simulator__display_step5() {
    simulator__save_step('Fabric');
    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation = {
            fabric_options : "Quel type de tissu aimez-vous?", fabric_choose : "Veuillez choisir un tissu pour votre robe",
            }
        display_simulator_step5_translated(translation);
    } else if (language === 'en') {
        let translation = {
            fabric_options : "Which fabric do you prefer?", fabric_choose : "Please choose a fabric you like for your dress",
            }
        display_simulator_step5_translated(translation);
    }

    function display_simulator_step5_translated(translation) {
        //Add which step is the user;
        document.getElementById('options_title').innerHTML = translation.fabric_options;
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

        //Display the Front view

        simulator__modify_view('front');

        //Add the options available to user at this step;
        let optionList = "";
        Fabrics.forEach(Fabric => {
            optionList += `<div class="Option_Background"><a href="#" id="${Fabric.label}" onclick=" simulator__choose('fabric', '${Fabric.label}')"><div class="OptionIcons" style="background-image: url('${Fabric.imageUrl}')" alt=${Fabric.label}></div></a></div>`;
        })

        document.getElementById('selector__options').innerHTML = optionList;
        document.getElementById('selector__options-validation').innerHTML = `<a class="button_please_select">${translation.fabric_choose}</a>`;
    }
}



function simulator__display_step6() {
    simulator__save_step('Color');
    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation = {
            color_options : "Les couleurs disponibles", color_choose : "Veuillez choisir une couleur pour votre robe",
            }
        display_simulator_step6_translated(translation);
    } else if (language === 'en') {
        let translation = {
            color_options : "The available colors", color_choose : "Please choose a color you like for your dress",
            }
        display_simulator_step6_translated(translation);
    }

    function display_simulator_step6_translated(translation) {
        //Add which step is the user;
        document.getElementById('options_title').innerHTML = translation.color_options;
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

        //Add the options available to user at this step;
        let optionList = "";
        Colors.forEach(Color => {
            optionList += `<div class="Option_Background_color"><a href="../../ladies/Measures.html" id="${Color.label}" onclick="simulator__choose_relocate('color', '${Color.imageUrl}')"><div class="OptionIcons" style="background:${Color.imageUrl}" alt=${Color.label}></div></a></div>`;
            simulator__display_draws(Color.label);
        })

        document.getElementById('selector__options').innerHTML = optionList;
        document.getElementById('selector__options-validation').innerHTML = `<a class="button_please_select">${translation.color_choose}</a>`;
    }
}










//MODIFY THE VIEW ACCORDING TO THE SELECTION OF PEOPLE *******************************************************FILE SIMULATOR_MODEL_DRAWS.JS
//Each time the page is reloaded by the function simulator_display_missing_event(), the pictures of interest will be precharged by the page.

function simulator__display_draws(id) {
    if (document.getElementById(id) != null) {
        document.getElementById(id).addEventListener("click", simulator__display_draws_specific());
    } else { 
        let language = localStorage.getItem("language");
        if (language === 'fr') {
            let translation = {
                refresh : "Vous avez rechargé la page. Reprenez au point où vous vous êtes arrêtés!",
                }
                refresh_simul_translated(translation);
        } else if (language === 'en') {
            let translation = {
                refresh : "You refreshed the page. Pick up where you stopped!",
                }
            refresh_simul_translated(translation);
        }
        
        function refresh_simul_translated(translation) {
            document.getElementById('selector__options').innerHTML = translation.refresh; 
        }
    };
}


function simulator__display_draws_specific() {
    let queryParams = new URLSearchParams(window.location.search);
    let _view = queryParams.get('view');
  
    if (_view === 'front') {
        simulator__save_previous_draws('FRONT');
    } else if (_view === 'back') {
        simulator__save_previous_draws('BACK');
    }
}


function simulator__save_previous_draws(view) {
        let language = localStorage.getItem("language");
        if (language === 'fr') {
            let translation = {
                real_choosed : "Vous pouvez commencer votre simulation. Vous avez selectionné le modèle ",
                }
            simulator__save_previous_draws_translation(view, translation);
        } else if (language === 'en') {
            let translation = {
                real_choosed : "You can now start your simulation. You choosed the model ",
                }
            simulator__save_previous_draws_translation(view, translation);
        }

        function simulator__save_previous_draws_translation(view, translation) {
            let queryParams = new URLSearchParams(window.location.search);
            let _model = queryParams.get('model');
            let _shoulder = queryParams.get('shoulder');
            let _style = queryParams.get('style');
            let _neckline = queryParams.get('neckline');
            let _sleeves = queryParams.get('sleeves');
            let _back = queryParams.get('back');
            let _fabric = queryParams.get('fabric');
            let _color = queryParams.get('color');

            if (_shoulder === null) {
                document.getElementById('simulator__window_top').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${view}/TOP/MODEL/Model_${_model}_preview.png" alt="${view} model image"/>`;
                document.getElementById('simulator__window_bottom').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${view}/BOTTOM/MODEL/Model_${_model}_preview.png" alt="${view} model image"/>`;
                document.getElementById('preview_real').innerHTML = `<p class="text-center">${translation.real_choosed} ${_model}<p/>
                                                                    <img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/WEDDING/PREVIEWS/REAL/Model_${_model}_preview.jpg" alt="Tailoring model real picture"/>`;

            } else if (_style === null) {
                document.getElementById('simulator__window_top').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${view}/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_shoulder}_preview.png" alt="${view} shoulder image"/>`;
                document.getElementById('simulator__window_bottom').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${view}/BOTTOM/MODEL/Model_${_model}_preview.png" alt="${view} shoulder image"/>`;
                document.getElementById('preview_real').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/WEDDING/PREVIEWS/REAL/Shoulder_${_shoulder}_preview.jpg" alt="Tailoring shoulder real picture"/>`;

            } else if (_back === null) {
                document.getElementById('simulator__window_top').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${view}/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_shoulder}_preview.png" alt="${view} back image"/>`;
                document.getElementById('simulator__window_bottom').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${view}/BOTTOM/STYLE/${_model}/Model_${_model}_Style_${_style}_preview.png" alt="${view} back image"/>`;
                document.getElementById('preview_real').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/WEDDING/PREVIEWS/REAL/Style_${_style}_preview.jpg" alt="Tailoring style real picture"/>`;
            }


            else if (_fabric === null) {
                let backview = view;
                simulator__save_previous_draws_Back(backview, _model, _shoulder, _style, _back);

            } else if (_color === null) {
                let backview = view;
                simulator__save_previous_draws_Back(backview, _model, _shoulder, _style, _back);
                document.getElementById('simulator__window_fabric').innerHTML = `<img class="full" src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/TEXTURE/${_fabric}.png" alt="${view} back image"/>`;


                
            } else {
                let backview = view;
                simulator__save_previous_draws_Back(backview, _model, _shoulder, _style, _back);
                document.getElementById('simulator__window_fabric').innerHTML = `<img class="full" src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/TEXTURE/${_fabric}.png" alt="${view} back image"/>`;
                document.getElementById('simulator__window_color').style.background = _color;

            }
        }
    
}

function simulator__save_previous_draws_Back(backview, _model, _shoulder, _style, _back) {
    console.log('FUNCTION IF');
    
    if (backview === 'FRONT') {
        console.log('FUNCTION IF FRONT');
        document.getElementById('simulator__window_top').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${backview}/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_shoulder}_preview.png" alt="${backview} back image"/>`;
        document.getElementById('simulator__window_bottom').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${backview}/BOTTOM/STYLE/${_model}/Model_${_model}_Style_${_style}_preview.png" alt="${backview} back image"/>`;
        document.getElementById('preview_real').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/WEDDING/PREVIEWS/REAL/Back_${_back}_preview.jpg" alt="Tailoring back real picture"/>`;
    } else if (backview === 'BACK') {
        console.log('FUNCTION IF BACK');
        document.getElementById('simulator__window_top').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${backview}/TOP/SHOULDERS/${_model}/Model_${_model}_Shoulder_${_back}_preview.png" alt="${backview} back image"/>`;
        document.getElementById('simulator__window_bottom').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/DRESSES/PREVIEWS/${backview}/BOTTOM/STYLE/${_model}/Model_${_model}_Style_${_style}_preview.png" alt="${backview} back image"/>`;
        document.getElementById('preview_real').innerHTML = `<img src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/LADIES/WEDDING/PREVIEWS/REAL/Back_${_back}_preview.jpg" alt="Tailoring back real picture"/>`;
    }
 }


function simulator__modify_view(choosen_view) {
    
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set('view', choosen_view);
    history.pushState(null, null, "?" + queryParams.toString());

    simulator__display_draws_specific()
}


















//MODIFY THE NAVIGATOR DEPENDING ON THE PEOPLE *******************************************************FILE SIMULATOR_MODEL_DRAWS.JS





function simulator__redirect_navigation(destination) {

    simulator__navigator_erase_styles();

    document.getElementById(destination + '_navigation').style.width = '100%';

    if (destination === 'Model') {
        simulator__display_step1();
        document.getElementById('simulator__initial-message').style.display = 'block';
       
    } else if (destination === 'Shoulder') {
        simulator__display_step2();
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

    } else if (destination === 'Style') {
        simulator__display_step3();
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

    } else if (destination === 'Back') {
        simulator__display_step4();
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';


    } else if (destination === 'Fabric') {
        simulator__display_step5();
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

    } else if (destination === 'Color') {
        simulator__display_step6();
        document.getElementById('simulator__initial-message').style.display = 'none';
        document.getElementById('simulator__explain-preview').style.display = 'none';

    } else if (destination === 'Measures') {
        let queryParams = new URLSearchParams(window.location.search);
        window.location.replace("../../ladies/Measures.html" + "?" + queryParams.toString());
    }
}


function simulator__navigator_erase_styles() {
    document.getElementById('Model_navigation').style.width = '60%';
    document.getElementById('Shoulder_navigation').style.width = '60%';
    document.getElementById('Style_navigation').style.width = '60%';
    document.getElementById('Back_navigation').style.width = '60%';
    document.getElementById('Fabric_navigation').style.width = '60%';
    document.getElementById('Color_navigation').style.width = '60%';
    document.getElementById('Measures_navigation').style.width = '60%';
}





function simulator__navigator_enable_step() {

    let queryParams = new URLSearchParams(window.location.search);
    let _model = queryParams.get('model');
    let _shoulder = queryParams.get('shoulder');
    let _style = queryParams.get('style');
    let _neckline = queryParams.get('neckline');
    let _sleeves = queryParams.get('sleeves');
    let _back = queryParams.get('back');
    let _measures = queryParams.get('measures');
    let _fabric = queryParams.get('fabric');
    let _color = queryParams.get('color');

    if (_model === null) {

    } else if (_shoulder === null) {
        simulator__navigator_enable(2);
        simulator__navigator_big_current_step();

    } else if (_style === null) {
        simulator__navigator_enable(3);
        simulator__navigator_big_current_step();

    }  else if (_back === null) {
        simulator__navigator_enable(4);
        simulator__navigator_big_current_step();

    } else if (_fabric === null) {
        simulator__navigator_enable(5);
        simulator__navigator_big_current_step();

    } else if (_color === null) {
        simulator__navigator_enable(6);
        simulator__navigator_big_current_step();
    }

    else if (_measures === null) {
        for (let i = 0; i < 7; i++) {

            let navIcon_current = `<a href="#personalisation__popup-top" alt="Step 1" onclick="simulator__redirect_navigation('${QueryParams_categories[i]}')">
                                    <img class="m-auto navigation__number" id="${QueryParams_categories[i]}_navigation" src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/SIMULATOR/NAVIGATOR/Nav_${i + 1}_missing.png" alt="${QueryParams_categories[i]}" />
                                </a>`;

            document.getElementById(QueryParams_categories[i] + '_navigation_id').innerHTML = navIcon_current;

        }

        let navIcon_current_7 = `<a href="../../ladies/Measures.html" alt="Step 7" onclick="simulator__relocate_measures()">
                                    <img class="m-auto navigation__number" id="Measures_navigation" src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/SIMULATOR/NAVIGATOR/Nav_7_missing.png" alt="Measures" />
                                </a>`;

        document.getElementById('Measures_navigation_id').innerHTML = navIcon_current_7;

        simulator__navigator_big_current_step();
    }
    
}


function simulator__navigator_enable(number) {

    let queryParams_step = number - 1;

    //CURRENT NUMBER STEP & PREVIOUS STEPS

    for (let i = 0; i < number; i++) {

        let navIcon_current = `<a href="#personalisation__popup-top" alt="Step 1" onclick="simulator__redirect_navigation('${QueryParams_categories[i]}')">
                                    <img class="m-auto navigation__number" id="${QueryParams_categories[i]}_navigation" src="https://decommissionVN.github.io/TroisFilsBackup/assets/IMAGES/SIMULATOR/NAVIGATOR/Nav_${i + 1}_missing.png" alt="${QueryParams_categories[i]}" />
                                </a>`;

    document.getElementById(QueryParams_categories[i] + '_navigation_id').innerHTML = navIcon_current;

    } 
}


function simulator__navigator_big_current_step(){
    
    simulator__navigator_erase_styles();

    let queryParams = new URLSearchParams(window.location.search);
    let _step = queryParams.get('step');
    document.getElementById(_step + '_navigation').style.width = '100%';
    console.log(_step + '_navigation');

}




