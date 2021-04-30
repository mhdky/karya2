/*
  nama : candra dwi cahyo
  umur : 16 tahun | 20 mei 2004
  email : candradwicahyo18@gmail.com
*/

// library aos (animate on scroll)
AOS.init({
  once: true
});

// navbar event
const navBox1 = document.querySelector('.nav-box1');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', function(event) {
  this.classList.toggle('active')
  navBox1.classList.toggle('active')
})

// menentukan tanggal, bulan dan tahun saat ini
const date = new Date().getDate();
let month = new Date().getUTCMonth();
const year = new Date().getFullYear();

// mengatur bulan berdasarkan angka
switch (month) {
  case 0 :
    month = 'januari';
  break;
  case 1 :
    month = 'Februari';
  break;
  case 2 :
    month = 'Maret';
  break;
  case 3 :
    month = 'April';
  break;
  case 4 :
    month = 'Mei';
  break;
  case 5 :
    month = 'Juni';
  break;
  case 6 :
    month = 'Juli';
  break;
  case 7 :
    month = 'Agustus';
  break;
  case 8 :
    month = 'September';
  break;
  case 9 :
    month = 'Oktober';
  break;
  case 10 :
    month = 'November';
  break;
  case 11 :
    month = 'Desember';
  break;
  default :
    month = 'Kiamat';
}

// mengatur dan memasukkan tanggal, bulan dan tahun saat ini
const cardDate = document.querySelectorAll('.card-date');
cardDate.forEach(text => {
  text.textContent = `${month} ${date}, ${year}`
});

// untuk menentukan, berapa banyak komentar tiap postingan
const cardComment = document.querySelectorAll('.card-comment');
cardComment.forEach(comment => {
  let randomNumber = Math.round(Math.random() * 100);
  comment.innerHTML = `${randomNumber} Komentar`;
});
