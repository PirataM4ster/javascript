function gerar() {
    let n = Number(document.getElementById("txtn").value)
    let tab = document.getElementById("seltab")
    if (n == 0) {
        window.alert("Por favor, digitar um número!")
    } else {
        tab.innerHTML = " "
        for(c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}