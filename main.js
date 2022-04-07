var mouseEvent="empty";
var last_Position_x,last_Position_y;
color="green";
var width_line=2;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_Position_x,last_Position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }
    last_Position_x=current_position_x;
    last_Position_y=current_position_y;
}



