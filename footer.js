// Uses SITE and ASSETS from header.js.
document.getElementById("footer").innerHTML = `
<footer class="site-footer">

    <div class="footer-container">

        <div class="footer-brand">
            <img src="${ASSETS}sitepics/scprlogo.png" alt="SCPR Logo">
            <p class="tagline">
                A second chance for birds left behind.
            </p>
            <p>
                Based in Franklin, Ohio.
            </p>
        </div>

        <div class="footer-column">
            <h4>Quick Links</h4>
            <a href="${SITE}about.html">About</a>
            <a href="${SITE}adopt.html">Adopt</a>
            <a href="${SITE}foster.html">Foster</a>
            <a href="${SITE}birds.html">Available Birds</a>
            <a href="${SITE}apply.html">Apply</a>
        </div>

        <div class="footer-column">
            <h4>Contact Us</h4>
            <a href="${SITE}contact.html">Contact</a>
            <a href="https://www.facebook.com/profile.php?id=61586187903594" target="_blank">Facebook</a>
            <a href="mailto:secondchancepigeonrescue@gmail.com">secondchancepigeonrescue@gmail.com</a>
            <a href="tel:+15134005420">(513) 400-5420</a>
            <p class="footer-note">*We only respond to voicemails and messages through our phone number.</p>
        </div>

    </div>

    <div class="footer-bottom">
        © 2026 Second Chance Pigeon Rescue. All rights reserved.
    </div>

</footer>
`;