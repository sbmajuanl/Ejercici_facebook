var arreglo=[{usuario:"sbmajuanl@gmail.com", password:"sbmajuanl"},
            [{usuario:"briggtty@hotmail.com", password:"briggtty"},
            [{usuario:"katthy@gmail.com", password:"katthy"},
            [{usuario:"lucia.com", password:"lucia"},

var resultado="<ul>";
arreglo.forEach(function(e){
resultado+="<ol>"+"<li>"+"Usuario:"+e.usuario+"</li>"+
                  "<li>"+"password:" + e.password+"</li>"+"</ol>"
});
resultado+="</ul>"
document.write(resultado);
