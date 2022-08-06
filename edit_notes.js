function colorbg(event){
    var color = event.value;
    document.getElementsByTagName('textarea')[0].style.backgroundColor=color;
    document.getElementsByClassName('change')[0].style.backgroundColor=color;
}