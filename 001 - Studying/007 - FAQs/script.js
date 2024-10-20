const dataArray = [
    {
        title: `Why is JavaScript cool?`,
        detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, harum ipsum? Nisi nobis quo rerum rem. Magnam ipsam distinctio placeat. Ex facere alias perferendis non doloremque aliquam magnam quisquam blanditiis!`,
    },
    {
        title: `What is JavaScript?`,
        detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, harum ipsum? Nisi nobis quo rerum rem. Magnam ipsam distinctio placeat. Ex facere alias perferendis non doloremque aliquam magnam quisquam blanditiis!`,
    },
    {
        title: `How can I learn JavaScript?`,
        detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, harum ipsum? Nisi nobis quo rerum rem. Magnam ipsam distinctio placeat. Ex facere alias perferendis non doloremque aliquam magnam quisquam blanditiis!`,
    },
    {
        title: `Where can I learn JavaScript?`,
        detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, harum ipsum? Nisi nobis quo rerum rem. Magnam ipsam distinctio placeat. Ex facere alias perferendis non doloremque aliquam magnam quisquam blanditiis!`,
    },
];

const makeHTML = data => {
    return `<details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>`
};

const containerElement = document.getElementById(`faqContainer`)

containerElement.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join(``);