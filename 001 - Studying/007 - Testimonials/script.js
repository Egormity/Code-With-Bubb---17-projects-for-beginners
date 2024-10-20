const testimonials = [
    {
        author: {
            name: 'Gabriel Moore',
            image: 'author-01.jpg',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, dolorem. Provident deleniti commodi officia architecto praesentium id, sit repellendus iste at corrupti, eos consectetur, cum quod molestiae itaque necessitatibus earum?',
        date: '23rd May',
    },
    {
        author: {
            name: 'Billy Bailey',
            image: 'author-02.jpg',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, dolorem. Provident deleniti commodi officia architecto praesentium id, sit repellendus iste at corrupti, eos consectetur, cum quod molestiae itaque necessitatibus earum?',
        date: '25rd May',
    },
    {
        author: {
            name: 'Jackie Oliver',
            image: 'author-03.jpg',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, dolorem. Provident deleniti commodi officia architecto praesentium id, sit repellendus iste at corrupti, eos consectetur, cum quod molestiae itaque necessitatibus earum?',
        date: '2nd June',
    },
    {
        author: {
            name: 'Pauline Carter',
            image: 'author-04.jpg',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, dolorem. Provident deleniti commodi officia architecto praesentium id, sit repellendus iste at corrupti, eos consectetur, cum quod molestiae itaque necessitatibus earum?',
        date: '9th June',
    },
];

const containerElement = document.getElementById('testimonialsContainer');

const makeTestimonialCard = testimonial => {
    return `<div class="testimonialCard>
        <img src="">
        <img id="photo" src="${testimonial.author.image}">
        <h2>${testimonial.author.name}</h2>
        <p>${testimonial.text}</p>
        <h5>Written on ${testimonial.date}</h5>
    </div>`
};

let currentTestimonial = 0;

const nextTestimonial = () => {
    if(currentTestimonial < testimonials.length - 1){
        currentTestimonial++;
        updatePage();
    }
};

const previousTestimonial = () => {
    if(currentTestimonial > 0){
        currentTestimonial--;
        updatePage();
    }
};

const updatePage = () => {
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);
    if (testimonials.length > 1){
        markup += `<nav>
            <button onclick="previousTestimonial()">Previous</button>
            <button onclick="nextTestimonial()">Next</button>
        </nav>`
    }
    containerElement.innerHTML = markup;
};

updatePage();