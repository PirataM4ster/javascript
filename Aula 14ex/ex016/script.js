
function Contar() {
    var i = Number(document.getElementById("txtini").value)
    var f = Number(document.getElementById("txtfim").value)
    var p = Number(document.getElementById("txtpas").value)
    var res = document.getElementById("res")
    res.innerHTML = `Contando: `
  if (i == 0 || f == 0 || p == 0) {
    window.alert("[ERRO] Valores faltando")
  } else for(var c = i; c <= f;c += p) {
   res.innerHTML += `Passo ${c} `
    }
}
