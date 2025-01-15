let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner += 1;
    changeBackground();

}

// Fungsi mengganti banner/banner auto slide
function changeBackground() {
    let bannerlist = document.getElementsByClassName('banner-image');
    console.log(bannerlist);
    console.log(indexBanner);

    if (indexBanner > bannerlist.length - 1) {
        //reset index
        indexBanner = 0;
    }
    //looping ganti background
    for (let i = 0; i < bannerlist.length; i++) {
        bannerlist[i].style.display = 'none';
    }

    bannerlist[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 5000);

// Form validation
// Menambahkan event listener untuk form submit
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form standar

    // Mengambil nilai dari input form
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const phone = document.querySelector('input[placeholder="Your Phone Number"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda, gunakan format internasional tanpa tanda '+' atau spasi)
    const whatsappNumber = '6287789642527';

    // Membuat URL WhatsApp dengan parameter
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hello, my name is ${name}.\n\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    // Membuka URL WhatsApp
    window.open(whatsappURL, '_blank');
});

