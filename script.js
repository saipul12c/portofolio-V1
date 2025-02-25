document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > header.offsetTop) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Hamburger Menu (Mobile Navigation)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Tutup Nav Menu setelah klik link (Opsional - bisa ditambahkan)
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));


    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class dari tombol filter yang lain
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan active class ke tombol yang diklik
            this.classList.add('active');

            const filterValue = this.dataset.filter;

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.style.display = 'block'; // Tampilkan item
                } else {
                    item.style.display = 'none'; // Sembunyikan item
                }
            });
        });
    });

    // Modal Detail Proyek
    const viewProjectButtons = document.querySelectorAll('.btn-view-project');
    const projectModal = document.getElementById('project-modal');
    const closeModalButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');

    const projectDetails = { // Data detail proyek (sementara, bisa dari API/data external)
        '1': {
            title: 'Website E-commerce - Detail Proyek',
            description: '<p>Deskripsi lengkap website e-commerce...</p><p>Teknologi: HTML, CSS, JavaScript, PHP</p><p>Tahun: 2023</p><img src="gambar/project-1-detail.jpg" alt="Detail Gambar Project 1">',
        },
        '2': {
            title: 'Desain Logo Perusahaan - Detail Proyek',
            description: '<p>Proses desain logo perusahaan...</p><p>Software: Adobe Illustrator</p><p>Tahun: 2022</p><img src="gambar/project-2-detail.jpg" alt="Detail Gambar Project 2">',
        },
        '3': {
            title: 'Redesain Aplikasi Mobile - Detail Proyek',
            description: '<p>Proses redesain aplikasi mobile...</p><p>Tools: Figma, Adobe XD</p><p>Tahun: 2023</p><img src="gambar/project-3-detail.jpg" alt="Detail Gambar Project 3">',
        },
        // Tambahkan data detail proyek lainnya
    };

    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            const project = projectDetails[projectId];

            modalTitle.textContent = project.title;
            modalDetails.innerHTML = project.description; // Menggunakan innerHTML untuk HTML di deskripsi (hati-hati dengan XSS jika data dari user input!)
            projectModal.style.display = 'block'; // Tampilkan modal
        });
    });

    closeModalButton.addEventListener('click', function() {
        projectModal.style.display = 'none'; // Sembunyikan modal saat tombol close diklik
    });

    window.addEventListener('click', function(event) {
        if (event.target == projectModal) {
            projectModal.style.display = 'none'; // Sembunyikan modal saat klik di luar modal
        }
    });


    // Form Kontak - Contoh validasi sederhana & pesan sukses/error (tidak termasuk server-side)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah submit form default (agar tidak reload halaman)

        // Validasi sederhana (client-side, tidak cukup untuk keamanan produksi)
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            formMessage.textContent = 'Mohon lengkapi semua field.';
            formMessage.className = 'form-message error'; // Tambahkan class error
            formMessage.style.display = 'block';
            return; // Hentikan submit
        }

        if (!isValidEmail(emailInput.value)) {
            formMessage.textContent = 'Format email tidak valid.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            return; // Hentikan submit
        }

        // Jika validasi lolos (contoh sederhana berhasil) - tampilkan pesan sukses
        formMessage.textContent = 'Pesan Anda berhasil dikirim!';
        formMessage.className = 'form-message success'; // Tambahkan class success
        formMessage.style.display = 'block';

        contactForm.reset(); // Reset form setelah sukses (opsional)

        // Di sini seharusnya ada logika AJAX untuk mengirim data form ke server (backend)
        // ... (contoh AJAX tidak dimasukkan di kode ini untuk kesederhanaan)
    });

    function isValidEmail(email) {
        // Fungsi validasi email sederhana menggunakan regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    // Visualisasi Skill Progress Bars (Animasi - contoh sederhana, bisa diperbaiki)
    const skillProgressBars = document.querySelectorAll('.progress-bar .progress');

    function animateProgressBars() {
        skillProgressBars.forEach(progressBar => {
            const targetWidth = progressBar.style.width;
            progressBar.style.width = '0%'; // Reset ke 0% sebelum animasi
            setTimeout(() => { // Delay kecil agar reset dulu sebelum animasi mulai terlihat
                progressBar.style.width = targetWidth; // Set width target, animasi otomatis oleh CSS
            }, 100);
        });
    }

    // Panggil animateProgressBars saat halaman pertama kali diload atau saat section skills terlihat di viewport (opsional: gunakan Intersection Observer API untuk lebih baik)
    animateProgressBars(); // Animasi saat DOMContentLoaded (saat awal halaman load)

});
