document.addEventListener("DOMContentLoaded", function () {

    const socialLinks = {
        github:    "https://github.com/shashwatbhatt812",
        linkedin:  "https://www.linkedin.com/in/shashwat-bhatt-08-",
        instagram: "https://www.instagram.com/_shashwat_bhatt",
        twitter:   "#" 
    };

    
    const allSocialAnchors = document.querySelectorAll('.social-icons a');

    allSocialAnchors.forEach(function (anchor) {
        const icon = anchor.querySelector('i');
        if (!icon) return; 

        
        if (icon.classList.contains('bxl-github')) {
            anchor.href   = socialLinks.github;
            anchor.target = "_blank";
            anchor.rel    = "noopener noreferrer";
        }
        else if (icon.classList.contains('bxl-linkedin-square')) {
            anchor.href   = socialLinks.linkedin;
            anchor.target = "_blank";
            anchor.rel    = "noopener noreferrer";
        }
        else if (icon.classList.contains('bxl-instagram-alt')) {
            anchor.href   = socialLinks.instagram;
            anchor.target = "_blank";
            anchor.rel    = "noopener noreferrer";
        }
        else if (icon.classList.contains('bxl-twitter')) {
            anchor.href   = socialLinks.twitter;
            anchor.target = "_blank";
            anchor.rel    = "noopener noreferrer";
        }
    });

});