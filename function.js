let content_area = document.getElementById('content-area');

let saveBut = document.getElementById('saveBut');
let openBut = document.getElementById('openBut');
console.log("Hello, World");
saveBut.addEventListener('click', saveStore);

function saveStore(){
    let content = content_area.innerHTML;
    console.log('content is adding');
}