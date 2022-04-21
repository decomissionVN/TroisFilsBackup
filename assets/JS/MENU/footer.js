function display_footer(translation) {
    document.getElementById('footer').innerHTML = `
    <div class="row">
            <div class="col-10 offset-1 text-center">
                <div class="row text-center">
                    <div class="col-md-5 mb-5">
                        <h2>Trois fils</h2>
                        <p class="text-justify pt-4">${translation.About_footer}</p>
                        <a class="link__grey" href="About.html" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1500">${translation.More}</a>
                        <h2 class="pt-5">${translation.Social_media}</h2>
                        <div class="row pt-3">
                            <div class="d-none d-lg-block col-lg-2"></div>
                            <div class="col-3 col-lg-2 Icons__social-media" aria-label="Facebook">
                                <a href="https://www.facebook.com/tailor.troisfils" target="_blank" alt="Facebook"><img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/HOME/Facebook.png" alt="Facebook"></a>
                            </div>
                            <div class="col-3 col-lg-2 Icons__social-media" aria-label="Twitter">
                                <a href="https://twitter.com/FilsTrois" target="_blank" alt="Twitter"><img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/HOME/Twitter.png" alt="Twitter"></a>
                            </div>
                            <div class="col-3 col-lg-2 Icons__social-media" aria-label="Instagram">
                                <a href="https://www.instagram.com/tailor_troisfils/" target="_blank" alt="Instagram"><img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/HOME/Instagram.png" alt="Instagram"></a>
                            </div>
                            <div class="col-3 col-lg-2 Icons__social-media" aria-label="Linkedln">
                                <a href="https://www.tiktok.com/@troisfils" target="_blank" alt="TikTok"><img src="https://decomissionvn.github.io/TroisFilsBackup/assets/IMAGES/HOME/TikTok.png" alt="TikTok"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                        <h2 class="mb-4">${translation.Quick_links}</h2>
                        <div class="row">
                            <div class="col-sm-6 mb-5 text-justify">
                                <h3 class="pl-4 pb-3 quicklinks">${translation.Navigate_easily}</h3>
                                <ul class="quicklinks">
                                    <li><a href="https://troisfils.com" class="quicklinks_footer" alt="Homepage | Trois Fils">${translation.Homepage}</a></li>
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/HOME/About.html" class="quicklinks_footer" alt="About">${translation.About}</a></li>
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/ladies/Ladies.html" class="quicklinks_footer" alt="Ladies">${translation.Ladies}</a></li>
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/gentlemen/Gentlemens.html" class="quicklinks_footer" alt="Gentlemens">${translation.Gentlemen}</a></li>
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html" class="quicklinks_footer" alt="Wedding">${translation.Wedding}</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-6 mb-5 text-justify">
                                <h3 class="pl-4 pb-3 quicklinks">${translation.About_tailoring}</h3>
                                <ul class="quicklinks">
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/ladies/Appointment.html" class="quicklinks_footer" alt="Appointments">${translation.Appointments}</a></li>
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html" class="quicklinks_footer" alt="Why Custom?">${translation.Excellence}</a></li>
                                    <li><a href="https://decomissionvn.github.io/TroisFilsBackup/home/About.html" alt="Locations">${translation.Around_globe}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div><a class="quicklinks_footer" href="../CGU/CGU.html" alt="General Condition of Use">${translation.CGU}</a> | ${translation.Copyright}</div>
            </div>
        </div>
    `
    ;
}