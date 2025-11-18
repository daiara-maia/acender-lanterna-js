const lanterna = document.getElementById("lanterna");

// A lógica de ligar/desligar com mouseover/mouseout foi removida
// pois o prompt original usava botões, que é uma funcionalidade mais clara.

function acender() {
    lanterna.src = "on_lanterna.png";
    // Mudar o fundo para simular a luz acesa (amarelo claro)
    document.body.style.backgroundColor = "#ffeb3b22"; 
}

function apagar() {
    lanterna.src = "off_lanterna.png";
    // Mudar o fundo para simular a luz apagada (escuro)
    document.body.style.backgroundColor = "#222"; 
}