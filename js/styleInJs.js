const sections = document.querySelectorAll('section');
for (const section of sections){
    section.style.border = '3px solid gray';
    section.style.marginBottom = '15px';
    section.style.backgroundColor = 'lightgray';
    section.style.borderRadius = '20px';
    section.style.paddingLeft = '5px';
}
const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';