var player = "Meninas Super Poderosas";
var numJog = 0;
var pc = document.getElementById('cpu').checked;

function checkjogo(id){
    
    var opt = verificaSrc(id);
    
    if(opt == "transp.png"){
        document.getElementById(id).src = "img/" + player + ".png";

        if(wincheck()){
            alert("Fim de jogo, " + player + " amassaram!");
            return false;
        }
        
        if(player == "Meninas Super Poderosas"){
           player= "Macaco Louco";

        }else{
            player = "Meninas Super Poderosas";
        }
        
        numJog++;
        
        if(numJog >= 9){
            alert("Fim de jogo! Deu velha!!!");
            return false;
        }
    }

}

function verificaSrc(id){

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function wincheck(){

    if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png"){
        return true;
    }

    if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png"){
        return true;
    }

    if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png"){
        return true;
    }

    if((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png"){
        return true;
    }

    if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png"){
        return true;
    }

    if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png"){
        return true;
    }

    if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png"){
        return true;
    }

    if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png"){
        return true;
    }
    return false;

}