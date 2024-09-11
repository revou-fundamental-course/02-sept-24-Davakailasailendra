function hitungLuasSegitiga() {
    const alas = document.getElementById('alas-segitiga').value;
    const tinggi = document.getElementById('tinggi-segitiga').value;

    if (!alas || !tinggi) {
        alert("Tolong masukkan nomor untuk Alas dan Tinggi.");
        return;
    }

    const luas = 0.5 * alas * tinggi;
    const langkah = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
    document.getElementById('result-luas-segitiga').innerText = `Hasil: ${luas} \nCara: ${langkah}`;
}

function hitungKelilingSegitiga() {
    const s1 = document.getElementById('sisi1').value;
    const s2 = document.getElementById('sisi2').value;
    const s3 = document.getElementById('sisi3').value;

    if (!sisi1 || !sisi2 || !sisi3) {
        alert("Tolong masukkan nomor untuk Sisi");
        return;
    }

    const keliling = parseFloat(s1) + parseFloat(s2) + parseFloat(s3);
    const langkah = `K = ${s1} + ${s2} + ${s3} = ${keliling}`;
    document.getElementById('result-keliling-segitiga').innerText = `Hasil: ${keliling} \nCara: ${langkah}`;
}

function hitungLuasJajargenjang() {
    const alas = document.getElementById('alas-jajargenjang').value;
    const tinggi = document.getElementById('tinggi-jajargenjang').value;

    if (!alas || !tinggi) {
        alert("Tolong masukkan nomor untuk Alas dan Tinggi.");
        return;
    }

    const luas = alas * tinggi;
    const langkah = `L = ${alas} x ${tinggi} = ${luas}`;
    document.getElementById('result-luas-jajargenjang').innerText = `Hasil: ${luas} \nCara: ${langkah}`;
}

function hitungKelilingJajargenjang() {
    const alas = document.getElementById('alas-jajargenjang-keliling').value;
    const sisiMiring = document.getElementById('sisi-miring').value;

    if (!sisi1 || !sisi2 || !sisi3) {
        alert("Tolong masukkan nomor untuk Alas dan Sisi miring");
        return;
    }

    const keliling = 2 * (parseFloat(alas) + parseFloat(sisiMiring));
    const langkah = `K = 2 x (${alas} + ${sisiMiring}) = ${keliling}`;
    document.getElementById('result-keliling-jajargenjang').innerText = `Hasil: ${keliling} \nCara: ${langkah}`;
}

function resetLuasSegitiga() {
    document.getElementById('alas-segitiga').value = '';
    document.getElementById('tinggi-segitiga').value = '';
    document.getElementById('result-luas-segitiga').innerText = 'Hasil Penghitungan :';
}

function resetKelilingSegitiga() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('result-keliling-segitiga').innerText = 'Hasil Penghitungan :';
}

function resetLuasJajargenjang() {
    document.getElementById('alas-jajargenjang').value = '';
    document.getElementById('tinggi-jajargenjang').value = '';
    document.getElementById('result-luas-jajargenjang').innerText = 'Hasil Penghitungan :';
}

function resetKelilingJajargenjang() {
    document.getElementById('alas-jajargenjang-keliling').value = '';
    document.getElementById('sisi-miring').value = '';
    document.getElementById('result-keliling-jajargenjang').innerText = 'Hasil Penghitungan :';
}