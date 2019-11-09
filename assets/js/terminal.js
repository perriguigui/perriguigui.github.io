var message = document.getElementById("message"),
    insert = document.getElementById("code"),
    terminal = document.getElementById("terminal"),
    maxMsg = 200,
    tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&not;&nbsp;&nbsp;",
    code = new Array();

write("- <span style='color:green;'>Mastered language:</span>");
write(tab +"C++/C#");
write(tab +"Python");
write(tab +"html/css/php/js");
write("- <span style='color:green;'>Mastered FrameWork/Soft:</span>");

write(tab +"Symfony / Laravel");
write(tab +"VisualStudio");
write(tab +"TensoFlow / Keras");
write(tab +"Unity");
write(tab +"3ds max/Marmoset/substance");
write("</br>");
write("Write 'help' to show commands.");
write("</br>");

function write(msg){
    message.innerHTML = "";
    code.push(msg);
    if(code.length>maxMsg){
        code.splice(0,(code.length-maxMsg));
    }
    for(var i=0; i<code.length;i++){
        var newMsg = document.createElement("li");
        newMsg.innerHTML = code[i];
        message.appendChild(newMsg);
    }
    message.scrollTop = message.scrollHeight;
}

function capture(){
    debugger;
    cmd = insert.value;
    write("> " + cmd);
    insert.value = "";
    switch(cmd){
            //IF UNKNOW
        default :
            write("<p style='color:#e94f37;'>"+"'" + cmd + "' is not recognized as an internship or externship command, a programm or a command's file.</p>");
            break;
            //HELP
        case "help":
            write("Command exemple : download CV");
            write("<br>");
            write("- <span style='color:green;'>download</span> ");
            write(tab +"CV : My CV in pdf");
            write("- <span style='color:green;'>cd</span> : Visite website");
            write(tab +"about");
            write(tab +"history");
            write(tab +"portfolio");
            write(tab +"contact");
            write(tab +"github");
            write("- clear : Clear logs");
            break;
            
        //CLEAR
        case "clear":
            code = new Array();
            insert.value ="";
            message.innerHTML = "";
            write("- <span style='color:green;'>Mastered language:</span>");
            write(tab +"<span style='color:purple;'>C++/C#</span>");
            write(tab +"Python");
            write(tab +"html/css/php/js");
            write("- <span style='color:green;'>Mastered FrameWork/Soft:</span>");
            write(tab +"Symfony / Laravel");
            write(tab +"VisualStudio");
            write(tab +"TensoFlow / Keras");
            write(tab +"Unity");
            write(tab +"3ds max/Marmoset/Substance");
            write("</br>");
            write("Write 'help' to show commands.");
            write("</br>");
            break;
            
        //DOWNLOAD
        case "download  terminal":
            window.open("http://magnhetic.fr/download/terminal.zip", '_blank', null);
            break;
        case "download CV":
            window.open("http://magnhetic.fr/download/CV.pdf", '_blank', null);
            break;

        //CD
        case "cd about":
            window.location.replace("file:///C:/Users/anto/Documents/IUT/Portfolio/SiteWeb/Portfolio/Portfolio%20AntoninPERRIN.html#about");
            break;
        case "cd history":
            window.location.replace("file:///C:/Users/anto/Documents/IUT/Portfolio/SiteWeb/Portfolio/Portfolio%20AntoninPERRIN.html#about");
            break;
        case "cd portfolio":
            window.location.replace("file:///C:/Users/anto/Documents/IUT/Portfolio/SiteWeb/Portfolio/Portfolio%20AntoninPERRIN.html#portfolio");
            break;
        case "cd contact":
            window.location.replace("file:///C:/Users/anto/Documents/IUT/Portfolio/SiteWeb/Portfolio/Portfolio%20AntoninPERRIN.html#contact");
            break;
        case "cd github":
            window.location.replace("https://github.com/perriguigui");
            break;
        
    }
    write("<br>");
    return false;
}


//DRAGGABLE
window.onload = function(){
    draggable('bar');
};
var posx = 0;
var posy = 0;

var dragObj = null;
function draggable(id)
{
    var obj = document.getElementById(id);
    obj.style.position = "absolute";
    obj.onmousedown = function(e){
        dragObj = obj;
        posx = parseInt(obj.style.left, 10) - e.pageX ;
        posy = parseInt(obj.style.top, 10) - e.pageY;
    }
}

document.onmouseup = function(e){
    dragObj = null;
};

document.onmousemove = function(e){
    var y = e.pageY;
    var x = e.pageX;
    if(!posx){
        posx = -x/3;
        posy = -y+20;
    }

    if(dragObj == null)
        return;

    dragObj.style.left = x + posx +"px";
    dragObj.style.top= y + posy +"px";
};