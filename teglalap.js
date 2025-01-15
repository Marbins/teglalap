
function szamol() {

    var a=parseInt(document.getElementById('a').value);
    var b=parseInt(document.getElementById('b').value);
    var K=2*(a+b);
    var T=a*b;
    document.getElementById('k').innerHTML='K='+K+'cm';
    document.getElementById('t').innerHTML='T='+T+'cm<sup>2</sup>';
}

function torol(){
    location.reload();
}