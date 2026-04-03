// Navigation
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = ['home', 'features', 'about', 'admissions', 'contact'];
            const navLinks = document.querySelectorAll('.nav-link');

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        document.querySelector(`[href="#${section}"]`).classList.add('active');
                    }
                }
            });
        });

        // Modal functions
        function openModal() {
            document.getElementById('applyModal').classList.add('open');
            document.getElementById('applyForm').style.display = 'block';
            document.getElementById('successMsg').style.display = 'none';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('applyModal').classList.remove('open');
            document.body.style.overflow = '';
        }

        function closeModalOutside(e) {
            if (e.target === document.getElementById('applyModal')) closeModal();
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeModal();
        });

        // Form submission
        function submitForm() {
            const name = document.getElementById('f_name').value.trim();
            const dob = document.getElementById('f_dob').value;
            const cls = document.getElementById('f_class').value;
            const gen = document.getElementById('f_gender').value;
            const father = document.getElementById('f_father').value.trim();
            const phone = document.getElementById('f_phone').value.trim();
            const addr = document.getElementById('f_address').value.trim();
            const err = document.getElementById('form-err');

            if (!name || !dob || !cls || !gen || !father || !phone || !addr) {
                err.style.display = 'block';
                return;
            }

            err.style.display = 'none';
            document.getElementById('s_name').textContent = name + ' (for ' + cls + ')';
            document.getElementById('s_phone').textContent = phone;
            document.getElementById('applyForm').style.display = 'none';
            document.getElementById('successMsg').style.display = 'block';
        }

        // Login/Register functions
        function showLogin() {
            alert('Admin login functionality will be available soon. For now, please contact the school directly.');
        }

        function showRegister() {
            alert('Registration feature coming soon! For now, please contact the school directly:\n\n📞 Rahim: +91 70903 96127\n📞 Shakeel: +91 89049 15905\n📧 ups.school2026@gmail.com');
        }

        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe feature cards and other elements
        document.querySelectorAll('.feature-card, .process-step, .contact-card, .gallery-item').forEach(card => {
            observer.observe(card);
        });

        // Gallery functions
        const galleryItems = [
            {
                src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                title: 'School Campus',
                description: 'Our modern campus facilities designed for optimal learning'
            },
            {
                src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                title: 'Smart Classrooms',
                description: 'Interactive learning spaces equipped with modern technology'
            },
            {
                src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
                title: 'School Library',
                description: 'A vast collection of books and digital resources for research'
            },
            {
                src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
                title: 'Sports & Activities',
                description: 'Physical education and extracurricular activities for holistic development'
            },
            {
                src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                title: 'Science Laboratory',
                description: 'Hands-on experiments and practical learning experiences'
            },
            {
                src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop',
                title: 'Morning Assembly',
                description: 'Daily assembly fostering discipline and school spirit'
            },
            {
                src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
                title: 'Art & Craft Classes',
                description: 'Creative expression and artistic development programs'
            },
            {
                src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
                title: 'Computer Laboratory',
                description: 'Digital literacy and computer skills training'
            }
        ];

        function openGalleryModal(index) {
            const item = galleryItems[index];
            document.getElementById('galleryModalImg').src = item.src;
            document.getElementById('galleryModalTitle').textContent = item.title;
            document.getElementById('galleryModalDescription').textContent = item.description;
            document.getElementById('galleryModal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeGalleryModal() {
            document.getElementById('galleryModal').classList.remove('open');
            document.body.style.overflow = '';
        }

        // Update login/register functions to redirect to pages
        function showLogin() {
            window.location.href = 'login.html';
        }

        function showRegister() {
            window.location.href = 'register.html';
        }
