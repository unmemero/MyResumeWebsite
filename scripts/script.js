// Menu Toggler
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav');
menuToggle.onclick = () =>{
    navbar.classList.toggle('active-menu');
}
// Page loader
let pagesData;
fetch('../json/pages.json')
.then(response => response.json())
.then(data =>{
    pagesData  = data
    console.log(pagesData);
    const homeButton = document.getElementById('home');
    const experienceButton = document.getElementById('experience');
    const educationButton = document.getElementById('education');
    const skillsButton = document.getElementById('skills');
    const projectsButton = document.getElementById('projects');
    const contactButton = document.getElementById('contact');
    const downloadButton = document.getElementById('download');

    const mainSection = document.getElementById('page-content');

    const buttons = [homeButton, experienceButton, educationButton, skillsButton, projectsButton, contactButton, downloadButton];

    buttons.forEach(button =>{
        button.onclick = () =>{
            navbar.classList.toggle('active-menu');
            if (button === homeButton) {
                mainSection.innerHTML = pagesData.home;
                mainSection.className = 'home';
            } else if (button === experienceButton) {
                mainSection.innerHTML = pagesData.experience;
                mainSection.className = 'experience';
            } else if (button === educationButton) {
                mainSection.innerHTML = pagesData.education;
                mainSection.className = 'education';
            } else if (button === skillsButton) {
                mainSection.innerHTML = pagesData.skills;
                mainSection.className = 'skills';
            } else if (button === projectsButton) {
                mainSection.innerHTML = pagesData.projects;
                mainSection.className = 'projects';
            } else if (button === contactButton) {
                mainSection.innerHTML = pagesData.contact;
                mainSection.className = 'contact';
            } else if (button === downloadButton) {
                mainSection.innerHTML = pagesData.download;
                mainSection.className = 'download';
            }
        }
    })
});

const submitButton = document.getElementById('contact-button');
submitButton.addEventListener('click', (e)=>{
        e.preventDefault();
        let name = document.getElementById('contact-name').value;
        let email = document.getElementById('contact-email').value;
        let userMessage = document.getElementById('contact-message').value;
        let finalMessage = '<h2>You have a message from: '+name+' sent from: '+email+'</h2><br><hr style="width: 200px;">'+'<p style="font-size:1.3em;text-align:center;">'+userMessage+'</p>';
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rgarcia.cs.business@gmail.com",
            Password : "A4376331F81BE5ED02F5DCB469BBDCDB8246",
            To : 'rgarcia.cs.business@gmail.com',
            From : 'rgarcia.cs.business@gmail.com',
            Subject : "Resume Page contact",
            Body : finalMessage
        }).then(
          message => window.alert('Thanks for your message! You will receive a reply within 3-5 business days. Please check your email for confirmation, including spam folder.')
        );
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rgarcia.cs.business@gmail.com",
            Password : "A4376331F81BE5ED02F5DCB469BBDCDB8246",
            To : email,
            From : 'rgarcia.cs.business@gmail.com',
            Subject : "Confirmation of contact request",
            Body : '<h2>Thanks for your message!</h2> <br> <p>It has been logged into my email account. I will reach out as soon as possible. Please expect the response in no more than 5 business days. If I do not respond within the timeframe, please resend your email and verify all information is correct.</p> <p>Thank you.</p><p>-Rafael</p>'
        }).then(
          message=>console.log('done')
        );
});