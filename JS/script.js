// Untuk menghitung luas Segitiga
function hitungLuasSegitiga() {
    const alas = document.getElementById('alas-segitiga').value;
    const tinggi = document.getElementById('tinggi-segitiga').value;

// Memberikan tanda jika salah satu input kosong
    if (!alas || !tinggi) {
        alert("Tolong masukkan nomor untuk Alas dan Tinggi.");
        return;
    }

// Memberitahu rumus penghitungan
    const luas = 0.5 * alas * tinggi;
    const langkah = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;

// Memberikan hasil dari perhitungan berserta caranya
    document.getElementById('result-luas-segitiga').innerText = `Hasil: ${luas} \nCara: ${langkah}`;
}

// Untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
    const s1 = document.getElementById('sisi1').value;
    const s2 = document.getElementById('sisi2').value;
    const s3 = document.getElementById('sisi3').value;

// Memberikan tanda jika salah satu input kosong
    if (!s1 || !s2 || !s3) {
        alert("Tolong masukkan nomor untuk Sisi");
        return;
    }

// Memberitahu rumus penghitungan
    const keliling = parseFloat(s1) + parseFloat(s2) + parseFloat(s3);
    const langkah = `K = ${s1} + ${s2} + ${s3} = ${keliling}`;

// Memberikan hasil dari perhitungan berserta caranya
    document.getElementById('result-keliling-segitiga').innerText = `Hasil: ${keliling} \nCara: ${langkah}`;
}

// Untuk menghitung luas Jajargenjang
function hitungLuasJajargenjang() {
    const alas = document.getElementById('alas-jajargenjang').value;
    const tinggi = document.getElementById('tinggi-jajargenjang').value;

// Memberikan tanda jika salah satu input kosong
    if (!alas || !tinggi) {
        alert("Tolong masukkan nomor untuk Alas dan Tinggi.");
        return;
    }

// Memberitahu rumus penghitungan
    const luas = alas * tinggi;
    const langkah = `L = ${alas} x ${tinggi} = ${luas}`;

// Memberikan hasil dari perhitungan berserta caranya
    document.getElementById('result-luas-jajargenjang').innerText = `Hasil: ${luas} \nCara: ${langkah}`;
}

// Untuk menghitung keliling Jajargenjang
function hitungKelilingJajargenjang() {
    const alas = document.getElementById('alas-jajargenjang-keliling').value;
    const sisiMiring = document.getElementById('sisi-miring').value;

// Memberikan tanda jika salah satu input kosong
    if (!alas || !sisiMiring ) {
        alert("Tolong masukkan nomor untuk Alas dan Sisi miring");
        return;
    }

// Memberitahu rumus penghitungan
    const keliling = 2 * (parseFloat(alas) + parseFloat(sisiMiring));
    const langkah = `K = 2 x (${alas} + ${sisiMiring}) = ${keliling}`;

// Memberikan hasil dari perhitungan berserta caranya
    document.getElementById('result-keliling-jajargenjang').innerText = `Hasil: ${keliling} \nCara: ${langkah}`;
}

// Melakukan reset di luas Segitiga
function resetLuasSegitiga() {
    document.getElementById('alas-segitiga').value = '';
    document.getElementById('tinggi-segitiga').value = '';
    document.getElementById('result-luas-segitiga').innerText = 'Hasil Penghitungan :';
}

// Melakukan reset di keliling Segitiga
function resetKelilingSegitiga() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('result-keliling-segitiga').innerText = 'Hasil Penghitungan :';
}

// Melakukan reset di luas Jajargenjang
function resetLuasJajargenjang() {
    document.getElementById('alas-jajargenjang').value = '';
    document.getElementById('tinggi-jajargenjang').value = '';
    document.getElementById('result-luas-jajargenjang').innerText = 'Hasil Penghitungan :';
}

// Melakukan reset di Keliling Jajargenjang
function resetKelilingJajargenjang() {
    document.getElementById('alas-jajargenjang-keliling').value = '';
    document.getElementById('sisi-miring').value = '';
    document.getElementById('result-keliling-jajargenjang').innerText = 'Hasil Penghitungan :';
}