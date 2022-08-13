function toggleText(){
    var x = document.getElementById('notes');
    if (x.style.display === 'none'){
        x.style.display = 'block'
    } else{
        x.style.display = 'none'
    };
};
document.getElementById('notes').style.display = 'none';