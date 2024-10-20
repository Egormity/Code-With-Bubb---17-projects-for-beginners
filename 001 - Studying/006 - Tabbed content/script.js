const navElement = document.querySelector('nav');
const navbarLinks = document.querySelectorAll('a');
const sectionElements = document.querySelectorAll('section');

const removeActivelinks = () => {
    navbarLinks.forEach(link => link.parentElement.classList.remove('active'))
};

const hideSection = () => {
    sectionElements.forEach(section => section.classList.add('hidden'))
}

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActivelinks();
        hideSection();
        link.parentElement.classList.add('active');
        const sectionElement = document.querySelector(link.hash);
        sectionElement.classList.remove('hidden');
    });
});