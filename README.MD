Dokumentasi Portofolio Website Profesional, Estetik, & Responsif
Selamat datang di dokumentasi kode untuk website portofolio pribadi yang responsif, profesional, dan estetik. Dokumentasi ini dirancang untuk memberikan pemahaman mendalam tentang struktur, gaya, dan fungsionalitas kode yang membangun website ini. Tujuannya adalah untuk memungkinkan Anda memahami, menyesuaikan, dan mengembangkan website portofolio ini lebih lanjut sesuai kebutuhan dan preferensi Anda.

Pendahuluan
Website portofolio ini dibangun dengan fokus pada tiga pilar utama: profesionalisme, estetika, dan responsivitas. Setiap elemen desain dan kode dioptimalkan untuk menciptakan pengalaman pengguna yang menyenangkan dan berkesan di berbagai perangkat, mulai dari desktop hingga mobile. Kode ini terstruktur dengan baik, mudah dibaca, dan didokumentasikan untuk mempermudah pemeliharaan dan pengembangan di masa depan.

Website ini terbagi menjadi tiga file utama yang bekerja secara sinergis:

index.html: Struktur dasar website dan konten. Menggunakan HTML5 semantik untuk tata letak dan aksesibilitas yang baik.

style.css: Penataan gaya visual website. Menggunakan CSS3 untuk desain yang estetik, responsif, dan animasi yang halus. Pendekatan modular dan terorganisir dengan media queries untuk responsivitas.

script.js: Logika interaktif website. Menggunakan JavaScript murni (vanilla JavaScript) untuk fungsionalitas seperti sticky header, menu hamburger, filter portofolio, modal proyek, dan validasi form kontak sederhana.

Struktur File
Project website portofolio ini memiliki struktur file yang sederhana dan terorganisir, terdiri dari tiga file utama dalam direktori root:

index.html: Berisi seluruh markup HTML yang membentuk struktur dan konten website.

style.css: File stylesheet yang berisi semua aturan CSS untuk styling dan layout website.

script.js: Berisi semua kode JavaScript yang mengontrol interaksi dan fungsionalitas dynamic website.

gambar/ (Folder): Folder ini diharapkan berisi semua aset gambar yang digunakan dalam website, seperti foto profil, thumbnail proyek, foto testimoni, dan gambar detail proyek. (Folder ini perlu Anda buat dan isi dengan gambar yang sesuai).

1. Dokumentasi index.html (Struktur HTML)
File index.html adalah fondasi website ini. Berikut adalah rincian elemen-elemen penting di dalamnya:

Struktur Dasar Dokumen:

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Saya - Nama Anda</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- ... Isi Website ... -->
    <script src="script.js"></script>
</body>
</html>
Use code with caution.
Html
<!DOCTYPE html>: Mendeklarasikan dokumen sebagai HTML5.

<html lang="id">: Elemen root dengan bahasa set ke Bahasa Indonesia (id).

<head>: Berisi meta informasi, judul halaman (<title>), link ke stylesheet (style.css dan Font Awesome CSS CDN), dan konfigurasi viewport untuk responsivitas.

<body>: Berisi konten utama website yang terlihat oleh pengguna, termasuk:

Bagian Header & Navigasi (<header id="header">)

<header id="header">
    <nav class="navbar">
        <div class="logo">
            <a href="#">[Logo Anda]</a>  <!-- Ganti dengan Logo Anda -->
        </div>
        <ul class="nav-menu">
            <li class="nav-item"><a href="#tentang-saya" class="nav-link">Tentang Saya</a></li>
            <li class="nav-item"><a href="#keahlian" class="nav-link">Keahlian</a></li>
            <li class="nav-item"><a href="#portfolio" class="nav-link">Portofolio</a></li>
            <li class="nav-item"><a href="#testimoni" class="nav-link">Testimoni</a></li>
            <li class="nav-item"><a href="#kontak" class="nav-link">Kontak</a></li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>
Use code with caution.
Html
<header id="header">: Container untuk header website. id="header" digunakan untuk styling CSS dan interaksi JavaScript (sticky header).

<nav class="navbar">: Elemen navigasi utama, menggunakan kelas navbar untuk styling.

<div class="logo">: Container untuk logo website. Saat ini menggunakan teks placeholder [Logo Anda], yang dapat diganti dengan teks logo, gambar logo (tag <img>), atau SVG logo.

<ul class="nav-menu">: Daftar item menu navigasi utama. Kelas nav-menu digunakan untuk styling menu di desktop dan mobile (menu hamburger).

<div class="hamburger">: Icon hamburger untuk menu mobile, terdiri dari tiga elemen <span> dengan kelas bar untuk garis-garis hamburger.

Bagian Hero Section (<section id="hero">)

<section id="hero" class="hero">
    <div class="hero-content">
        <h1>Halo, Saya [Nama Anda]</h1>
        <p>Seorang [Profesi Anda] yang bersemangat menciptakan solusi kreatif dan inovatif.</p>
        <a href="#portfolio" class="btn btn-primary">Lihat Portofolio Saya</a>
    </div>
</section>
Use code with caution.
Html
<section id="hero" class="hero">: Container untuk hero section, bagian pembuka website. id="hero" untuk styling CSS dan internal link dari button. Kelas hero untuk styling umum hero section.

<div class="hero-content">: Container untuk konten hero section. Berisi judul (<h1>), deskripsi singkat (<p>), dan tombol ajakan bertindak (<a> dengan kelas btn btn-primary).

Bagian Tentang Saya (<section id="tentang-saya">)

<section id="tentang-saya" class="section">
    <div class="container">
        <h2 class="section-title">Tentang Saya</h2>
        <div class="about-content">
            <div class="profile-img">
                <img src="gambar/profil.jpg" alt="Foto Profil Anda">
            </div>
            <div class="about-description">
                <h3>Siapa Saya?</h3>
                <p>Saya adalah seorang [Profesi Anda] dengan pengalaman dalam [Sebutkan pengalaman]. ...</p>
                <div class="social-links">
                    <!-- Tautan media sosial -->
                </div>
            </div>
        </div>
    </div>
</section>
Use code with caution.
Html
<section id="tentang-saya" class="section">: Section "Tentang Saya". id="tentang-saya" untuk internal link navigasi dan styling section khusus. Kelas section untuk styling section secara umum (padding, dll.).

<div class="container">: Container pembatas lebar konten section (untuk desain responsif).

<h2 class="section-title">Tentang Saya</h2>: Judul section. Kelas section-title untuk styling judul section yang konsisten.

<div class="about-content">: Container utama konten "Tentang Saya", diatur dalam grid layout CSS untuk responsivitas.

<div class="profile-img">: Container untuk foto profil. Berisi tag <img> dengan atribut src dan alt.

<div class="about-description">: Container untuk deskripsi tentang diri Anda, visi, misi, dan cerita pribadi.

<div class="social-links">: Container untuk tautan media sosial menggunakan ikon Font Awesome (tag <i> di dalam tag <a>).

Bagian Keahlian (<section id="keahlian">)

<section id="keahlian" class="section bg-light">
    <div class="container">
        <h2 class="section-title">Keahlian Saya</h2>
        <div class="skills-grid">
            <!-- Kartu keahlian -->
        </div>
        <div class="skills-visualization">
            <!-- Visualisasi keahlian (progress bar contoh) -->
        </div>
    </div>
</section>
Use code with caution.
Html
<section id="keahlian" class="section bg-light">: Section "Keahlian". Kelas bg-light untuk latar belakang section berwarna terang (opsional, bisa dihapus jika tidak diinginkan).

<div class="skills-grid">: Container untuk daftar keahlian yang ditampilkan dalam format grid kartu-kartu. Setiap kartu keahlian diwakili oleh <div class="skill-card"> yang berisi ikon, judul, dan deskripsi.

<div class="skills-visualization">: Container untuk visualisasi keahlian. Contoh yang diberikan adalah progress bar sederhana (<div class="skill-progress"> dengan <div class="progress-bar"> dan <div class="progress">). Visualisasi ini dapat diganti atau dikembangkan lebih lanjut dengan grafik atau diagram yang lebih kompleks.

Bagian Portofolio (<section id="portfolio">)

<section id="portfolio" class="section">
    <div class="container">
        <h2 class="section-title">Portofolio Saya</h2>
        <div class="portfolio-filter">
            <!-- Tombol filter kategori -->
        </div>
        <div class="portfolio-grid">
            <!-- Item portofolio -->
        </div>
    </div>

    <!-- Modal Detail Proyek -->
    <div id="project-modal" class="modal">
        <!-- ... Isi modal ... -->
    </div>
</section>
Use code with caution.
Html
<section id="portfolio" class="section">: Section "Portofolio".

<div class="portfolio-filter">: Container untuk tombol filter kategori proyek. Setiap tombol adalah <button class="filter-btn" dengan atribut data-filter yang menentukan kategori filter.

<div class="portfolio-grid">: Container untuk galeri proyek dalam format grid. Setiap item proyek diwakili oleh <div class="portfolio-item"> dengan atribut data-category untuk filtering, dan berisi <img> thumbnail proyek serta <div class="portfolio-overlay"> untuk overlay deskripsi saat hover.

<div id="project-modal" class="modal">: Container untuk modal (lightbox) detail proyek. Awalnya disembunyikan (display: none di CSS) dan ditampilkan dengan JavaScript saat tombol "Lihat Detail" proyek diklik. Berisi struktur modal dasar dengan <div class="modal-content">, <span class="close-button">, <h3 id="modal-title">, dan <div id="modal-details"> (tempat konten detail proyek akan diisi oleh JavaScript).

Bagian Testimoni (<section id="testimoni">)

<section id="testimoni" class="section bg-light">
    <div class="container">
        <h2 class="section-title">Testimoni Klien</h2>
        <div class="testimonials-carousel">
            <!-- Testimoni -->
        </div>
    </div>
</section>
Use code with caution.
Html
<section id="testimoni" class="section bg-light">: Section "Testimoni".

<div class="testimonials-carousel">: Container untuk testimoni yang disusun sebagai carousel horizontal sederhana menggunakan CSS Flexbox untuk saat ini. Setiap testimoni diwakili oleh <div class="testimonial"> yang berisi <img> foto pemberi testimoni, <p class="quote"> untuk kutipan, dan <p class="author"> untuk nama pemberi testimoni. Untuk carousel yang lebih interaktif, bisa diintegrasikan dengan library JavaScript carousel.

Bagian Kontak (<section id="kontak">)

<section id="kontak" class="section">
    <div class="container">
        <h2 class="section-title">Kontak Saya</h2>
        <div class="contact-content">
            <div class="contact-form">
                <form id="contactForm">
                    <!-- Field form kontak -->
                </form>
                <div id="form-message" class="form-message"></div>
            </div>
            <div class="contact-info">
                <!-- Informasi kontak -->
            </div>
        </div>
    </div>
</section>
Use code with caution.
Html
<section id="kontak" class="section">: Section "Kontak".

<div class="contact-content">: Container utama konten kontak, diatur dalam grid layout CSS untuk responsivitas, membagi menjadi form kontak dan informasi kontak.

<div class="contact-form">: Container untuk formulir kontak.

<form id="contactForm">: Elemen formulir utama. id="contactForm" digunakan untuk selektor JavaScript untuk interaksi form (validasi, submit, dll.). Berisi <div class="form-group"> untuk setiap field form (label dan input/textarea).

<div id="form-message" class="form-message">: Area pesan untuk menampilkan pesan sukses atau error setelah submit form. Awalnya disembunyikan dan ditampilkan dengan JavaScript.

<div class="contact-info">: Container untuk informasi kontak (email, telepon, tautan media sosial). Menggunakan ikon Font Awesome dan tautan mailto: untuk email.

Bagian Footer (<footer id="footer">)

<footer id="footer" class="footer">
    <div class="container">
        <p>© 2023 Portofolio Saya. Hak Cipta Dilindungi.</p>
        <nav class="footer-nav">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat Penggunaan</a>
        </nav>
    </div>
</footer>
Use code with caution.
Html
<footer id="footer" class="footer">: Elemen footer website. id="footer" untuk styling dan potensial JavaScript jika dibutuhkan. Kelas footer untuk styling umum footer.

<div class="container">: Container pembatas lebar footer. Berisi informasi hak cipta (<p>) dan menu navigasi footer (<nav class="footer-nav">) yang biasanya berisi tautan kebijakan privasi dan syarat penggunaan.

2. Dokumentasi style.css (Style CSS)
File style.css bertanggung jawab untuk tampilan visual keseluruhan website. Pendekatan yang digunakan adalah modular dan mobile-first, dengan media queries untuk menyesuaikan desain di berbagai ukuran layar.

Struktur Umum CSS:

File CSS diorganisir dalam bagian-bagian yang sesuai dengan bagian-bagian HTML untuk kemudahan navigasi dan pemeliharaan:

Reset CSS (opsional): Bagian awal berisi reset CSS dasar untuk konsistensi antar browser.

Bagian Header & Navigasi Styles: Style untuk header, navbar, logo, menu navigasi (desktop & mobile), sticky header, dan hamburger menu.

Bagian Hero Section Styles: Style untuk hero section (latar belakang, konten, judul, paragraf, tombol).

Bagian Section Umum Styles: Style umum yang diterapkan pada semua section (padding, container, judul section umum).

Bagian Tentang Saya Styles: Style khusus untuk section "Tentang Saya" (layout grid, gambar profil, deskripsi, tautan sosial).

Bagian Keahlian (Skills) Styles: Style untuk section "Keahlian" (grid kartu keahlian, visualisasi progress bar, efek hover).

Bagian Portofolio Styles: Style untuk section "Portofolio" (filter kategori, grid portofolio, overlay item proyek, modal detail proyek).

Bagian Testimoni Styles: Style untuk section "Testimoni" (carousel sederhana, kartu testimoni).

Bagian Kontak Styles: Style untuk section "Kontak" (layout grid, form kontak, info kontak, pesan form).

Bagian Footer Styles: Style untuk footer (latar belakang, teks, navigasi footer).

Media Queries: Bagian akhir berisi media queries untuk mendefinisikan style khusus untuk ukuran layar berbeda (mobile, tablet, desktop), memastikan website responsif.

Teknik dan Fitur CSS Utama yang Digunakan:

Flexbox dan Grid Layout: Digunakan secara ekstensif untuk tata letak yang fleksibel dan responsif (navbar, about-content, skills-grid, portfolio-grid, contact-content, footer container).

CSS Transitions dan Animations: Digunakan untuk efek halus seperti transisi sticky header, efek hover pada menu, kartu keahlian, thumbnail portofolio, dan animasi progress bar.

Responsifitas dengan Media Queries: Media queries diimplementasikan untuk menyesuaikan layout, ukuran font, dan elemen-elemen lain agar website tampil optimal di berbagai perangkat. Mobile-first approach diutamakan.

Palet Warna Harmonis: Kode ini menggunakan palet warna netral sebagai dasar (putih, abu-abu, hitam) dengan warna aksen (contoh: biru #007bff) untuk elemen interaktif dan penekanan visual. Palet warna ini dapat disesuaikan dengan brand personal Anda.

Tipografi Modern: Kode menggunakan font-family: sans-serif; secara default. Direkomendasikan untuk menggantinya dengan font web-safe atau web font modern dan mudah dibaca yang sesuai dengan preferensi Anda (misalnya, menggunakan Google Fonts dan mengganti font-family di CSS).

Box Shadow & Border Radius: Digunakan untuk memberikan kedalaman dan kelembutan visual pada elemen-elemen seperti header, kartu keahlian, dan item portofolio.

Custom Properties (CSS Variables - Opsional): Untuk proyek yang lebih besar dan kompleks, penggunaan custom properties (CSS variables) dapat dipertimbangkan untuk mempermudah pengelolaan palet warna dan nilai-nilai yang berulang. (Tidak digunakan dalam kode sederhana ini untuk menjaga kesederhanaan).

3. Dokumentasi script.js (JavaScript)
File script.js menangani interaksi dan fungsionalitas dinamis pada website, menggunakan vanilla JavaScript (tanpa library eksternal untuk kode dasar ini).

Bagian-Bagian Kode JavaScript:

Event Listener DOMContentLoaded: Memastikan semua kode JavaScript berjalan setelah seluruh dokumen HTML selesai di-parse dan dimuat.

Sticky Header Implementation:

Menggunakan window.addEventListener('scroll', ...) untuk memantau peristiwa scroll pada jendela browser.

Memeriksa posisi scroll vertical (window.scrollY) relatif terhadap posisi top header (header.offsetTop).

Menambahkan kelas sticky ke elemen <header> (#header) saat scroll melewati batas header (membuat header menjadi sticky), dan menghapus kelas sticky saat scroll kembali ke atas. Kelas sticky ini mendefinisikan gaya sticky header di CSS.

Hamburger Menu Functionality:

Memilih elemen hamburger menu (.hamburger) dan menu navigasi (.nav-menu).

Menambahkan event listener click pada hamburger menu.

Saat hamburger diklik, menggunakan classList.toggle('active') untuk:

Mengubah tampilan icon hamburger (misalnya, animasi garis menjadi icon silang).

Menampilkan/menyembunyikan navigasi menu mobile (kelas .nav-menu.active di CSS mengatur tampilan menu mobile).

(Opsional) Event listener untuk menutup menu setelah link navigasi di-klik (kode ini dinonaktifkan default untuk kesederhanaan awal, bisa diaktifkan jika diinginkan perilaku tersebut).

Portfolio Filter Logic:

Memilih semua tombol filter kategori (.filter-btn) dan item portofolio (.portfolio-item).

Iterasi melalui setiap tombol filter, menambahkan event listener click.

Saat tombol filter diklik:

Menghapus kelas active dari semua tombol filter lainnya (menghilangkan indikator aktif).

Menambahkan kelas active ke tombol yang diklik (menandakan filter yang aktif).

Mendapatkan nilai atribut data-filter dari tombol yang diklik (kategori filter).

Iterasi melalui semua item portofolio.

Memeriksa apakah filterValue adalah 'all' (tampilkan semua item) atau apakah item.dataset.category sesuai dengan filterValue (tampilkan item yang sesuai kategori filter).

Mengatur item.style.display = 'block' untuk menampilkan item yang cocok dan item.style.display = 'none' untuk menyembunyikan yang tidak cocok.

Modal Detail Proyek Implementation:

Memilih semua tombol "Lihat Detail" proyek (.btn-view-project), elemen modal (#project-modal), tombol tutup modal (.close-button), judul modal (#modal-title), dan container detail modal (#modal-details).

Mendefinisikan object projectDetails yang berisi data detail setiap proyek (judul, deskripsi, gambar detail, dll.) menggunakan project ID sebagai key. (Data proyek ini bersifat statis dalam kode contoh. Dalam website portofolio nyata, data ini idealnya berasal dari database atau file eksternal dan di-load secara dinamis melalui AJAX/API).

Iterasi melalui setiap tombol "Lihat Detail" proyek, menambahkan event listener click.

Saat tombol diklik:

Mendapatkan projectId dari atribut data-project-id tombol.

Mengambil data proyek yang sesuai dari projectDetails berdasarkan projectId.

Mengatur textContent dari #modal-title dengan judul proyek.

Mengatur innerHTML dari #modal-details dengan deskripsi proyek (termasuk markup HTML, perhatikan keamanan dan validasi jika data berasal dari sumber eksternal untuk menghindari XSS).

Mengatur projectModal.style.display = 'block' untuk menampilkan modal.

Menambahkan event listener click pada tombol tutup modal (.close-button) untuk menyembunyikan modal (projectModal.style.display = 'none').

Menambahkan event listener click pada window untuk menyembunyikan modal saat pengguna mengklik di luar area modal (untuk perilaku lightbox).

Contact Form Client-Side Validation & Success/Error Message:

Memilih elemen form kontak (#contactForm) dan area pesan form (#form-message).

Menambahkan event listener submit pada form.

Di dalam event handler submit:

Mencegah default form submission menggunakan e.preventDefault() (agar halaman tidak reload saat form disubmit).

Melakukan validasi sisi client sederhana: memeriksa apakah field nama, email, dan pesan kosong.

Menggunakan fungsi isValidEmail() dengan regular expression sederhana untuk validasi format email.

Jika validasi gagal (field kosong atau format email tidak valid), menampilkan pesan error di #form-message, menambahkan kelas error untuk styling pesan error, dan menggunakan return; untuk menghentikan proses submit.

Jika validasi berhasil (dalam contoh sederhana ini), menampilkan pesan sukses di #form-message, menambahkan kelas success untuk styling pesan sukses, mereset form (contactForm.reset()), dan ( penting dicatat ) di bagian ini, seharusnya ada logika AJAX untuk mengirim data form ke server backend untuk diproses dan dikirim email. (Kode contoh ini tidak termasuk implementasi AJAX backend untuk kesederhanaan, tapi dalam website production backend script dan validasi server-side sangat penting).

Fungsi isValidEmail(email): Menerima email sebagai argumen dan mengembalikan true jika format email valid (sesuai regex sederhana), dan false jika tidak valid.

Skill Progress Bar Animation:

Memilih semua elemen progress bar (.progress-bar .progress).

Fungsi animateProgressBars(): Iterasi melalui semua progress bars. Untuk setiap progress bar:

Mendapatkan nilai lebar target dari progressBar.style.width.

Mengatur progressBar.style.width = '0%' untuk reset lebar ke 0% sebelum animasi.

Menggunakan setTimeout(...) untuk memberikan delay kecil sebelum mengatur lebar target (progressBar.style.width = targetWidth;). Delay ini membantu animasi terlihat lebih baik dengan memastikan reset lebar terjadi sebelum animasi start. Animasi aktual dilakukan oleh properti CSS transition: width 0.5s ease; yang didefinisikan di CSS.

Memanggil animateProgressBars() saat DOMContentLoaded (saat halaman awal dimuat) untuk memicu animasi progress bar. (Untuk animasi yang lebih performant dan tepat waktu, penggunaan Intersection Observer API bisa dipertimbangkan untuk memicu animasi hanya saat section "Keahlian" terlihat di viewport pengguna, namun tidak diterapkan di kode dasar ini untuk kesederhanaan).

Peningkatan Lebih Lanjut & Pengembangan
Kode dasar ini menyediakan fondasi yang solid untuk website portofolio profesional, estetik, dan responsif. Berikut beberapa ide untuk peningkatan dan pengembangan lebih lanjut:

Implementasi Backend untuk Form Kontak: Wajib untuk website production. Tambahkan server-side script (misalnya, menggunakan PHP, Node.js, Python, dsb.) untuk menangani pengiriman email dari form kontak dengan aman dan handal. Integrasikan validasi server-side yang lebih komprehensif.
