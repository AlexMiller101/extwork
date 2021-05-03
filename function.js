

// let saveBut = document.getElementById('saveBut');
// let openBut = document.getElementById('openBut');
// console.log("Hello, World");
// saveBut.addEventListener('click', saveStore);

// function saveStore(){
//     let content = content_area.innerHTML;
//     console.log('content is adding');
// }

window.onload = function() {
    document.getElementById('saveBut').onclick = function() {
        let value = document.getElementById('content-area').value;
        
        // storage code
        chrome.storage.sync.set({"myData":value}, function(){
            console.log('Success');
        });

    }
    document.getElementById('openBut').onclick = function(){
        // Storage retrieval Code
        chrome.storage.sync.get('myData', function(data){
            document.getElementById('content-area').value = data.myData;
        });
        
    }
     
}

