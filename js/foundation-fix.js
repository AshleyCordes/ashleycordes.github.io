window.addEventListener('load', setup);

function setup() {
    // Fix aria-expanded being set to false when the accordion items
    // are by default expanded (2023-08-08)
    let accordion_titles = document.querySelectorAll('#publications-presentations .accordion-title');

    for (title of accordion_titles) {
        title.setAttribute('aria-expanded', "true");
    }
}
