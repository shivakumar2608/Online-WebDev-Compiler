function run() {
    
    let htmlCode = document.getElementById('htmlCode').value;
    let cssCode = "<style>"+document.getElementById('cssCode').value+"</style>";
    let jsCode = document.getElementById('jsCode').value;
    let output = document.getElementById('output');
    
    output.contentDocument.body.innerHTML = htmlCode +cssCode;
    output.contentWindow.eval(jsCode);

    
}
let htmlCode = document.getElementById('htmlCode').addEventListener('keyup', run);
let cssCode = document.getElementById('cssCode').addEventListener('keyup', run);
let jsCode = document.getElementById('jsCode').addEventListener('keyup', run);
