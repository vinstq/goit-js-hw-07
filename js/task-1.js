let items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

for(let i = 0; i < items.length; i++) {
    let heading = items[i].querySelector('h2').textContent;
    let elements = items[i].querySelectorAll('li'); 
    console.log(`Category: ${heading}`);
    console.log(`Elements: ${elements.length}`);
}