alert('Selamat Datang di Latihan Pop Up Box JS');

var again = true;

while(again===true){
    var nama = prompt('Masukkan Nama Anda :');
    alert('Halo ' + nama + "\nSelamat datang di Latihan Pop Up Box JS");

    again = confirm('Mau input nama lagi ?');
}

alert('Terima kasih, selamat datang!')