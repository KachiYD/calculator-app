function greet(name){
    console.log('My dog is named ', name)

    var btn = document.getElementById('myButton');
    btn.innerHTML = "Hello " + name + "!!!!";
}

console.log('js loaded');