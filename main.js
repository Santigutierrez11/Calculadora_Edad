const calculateAge = () => {
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;
    let p = document.getElementById('displayAge');

    if (d1 == "" || m1 == "" || y1 == "") {
        p.innerText = "Ingrese una fecha";
    } else if (d1 > 31) {
        p.innerText = "Día no valido";
    } else if (m1 > 12) {
        p.innerHTML = "Mes no valido";
    } else {
        let date = new Date();
        let d2 = date.getDate();
        let m2 = 1 + date.getMonth();
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 -2;
        }

        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 -1;
        }

        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;

        p.innerText = `Su edad es ${y} Años, ${m} Meses y ${d} Dias`;
    }

    
}