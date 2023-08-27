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