  :root {
    --sand: #F5E6C8;
    --sand-light: #FDF6E9;
    --ocean: #1B6CA8;
    --ocean-dark: #0D4A7A;
    --ocean-deep: #082E52;
    --wave: #4AAFCF;
    --coral: #E07B54;
    --coral-light: #F4A07A;
    --leaf: #2D7A4F;
    --leaf-light: #5AAF7A;
    --text-dark: #1A2335;
    --text-mid: #3D4F6A;
    --text-muted: #7A8BA0;
    --white: #FFFFFF;
    --border-soft: rgba(27,108,168,0.12);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    background: var(--white);
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5 { font-family: 'Playfair Display', serif; }

  /* === NAVBAR === */
  .navbar-custom {
    background: rgba(8,46,82,0.97);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 1rem 0;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(74,175,207,0.15);
  }
  .navbar-custom.scrolled {
    padding: 0.6rem 0;
    box-shadow: 0 4px 30px rgba(0,0,0,0.25);
  }
  .navbar-brand-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: var(--sand) !important;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .navbar-brand-sub {
    font-size: 0.65rem;
    color: var(--wave);
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .nav-link-custom {
    color: rgba(245,230,200,0.8) !important;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    padding: 0.4rem 0.9rem !important;
    transition: color 0.2s;
    position: relative;
  }
  .nav-link-custom:hover { color: var(--wave) !important; }
  .nav-link-custom::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0.9rem; right: 0.9rem;
    height: 1px;
    background: var(--wave);
    transform: scaleX(0);
    transition: transform 0.25s;
  }
  .nav-link-custom:hover::after { transform: scaleX(1); }
  .navbar-toggler { border-color: rgba(74,175,207,0.4); }
  .navbar-toggler-icon { filter: invert(1); }

  /* === HERO VIDEO SECTION === */
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: var(--ocean-deep);
  }
  .hero-video-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  .hero-video-wrapper video,
  .hero-video-wrapper iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
  .hero-video-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #082E52 0%, #1B6CA8 50%, #0D4A7A 100%);
    color: rgba(255,255,255,0.3);
    gap: 1rem;
  }
  .hero-video-placeholder i { font-size: 4rem; }
  .video-instruction {
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-align: center;
    max-width: 300px;
    line-height: 1.8;
    color: rgba(255,255,255,0.4);
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(8,46,82,0.5) 0%,
      rgba(8,46,82,0.2) 40%,
      rgba(8,46,82,0.7) 100%
    );
    z-index: 1;
  }
  .hero-wave-bottom {
    position: absolute;
    bottom: -1px;
    left: 0; right: 0;
    z-index: 2;
    line-height: 0;
  }
  .hero-content {
    position: relative;
    z-index: 3;
    padding: 2rem 0;
  }
  .hero-badge {
    display: inline-block;
    background: rgba(74,175,207,0.2);
    border: 1px solid rgba(74,175,207,0.4);
    color: var(--wave);
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 0.35rem 1rem;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    font-family: 'DM Sans', sans-serif;
  }
  .hero-title {
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    color: var(--white);
    line-height: 1.08;
    margin-bottom: 1.2rem;
    font-weight: 700;
  }
  .hero-title span { color: var(--wave); }
  .hero-subtitle {
    font-size: 1.05rem;
    color: rgba(245,230,200,0.85);
    line-height: 1.8;
    max-width: 540px;
    font-weight: 300;
    margin-bottom: 2.5rem;
  }
  .btn-hero-primary {
    background: var(--wave);
    color: var(--ocean-deep);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  .btn-hero-primary:hover {
    background: #6EC8E0;
    color: var(--ocean-deep);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(74,175,207,0.4);
  }
  .btn-hero-secondary {
    background: transparent;
    color: var(--sand);
    border: 1px solid rgba(245,230,200,0.4);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 1rem;
  }
  .btn-hero-secondary:hover {
    background: rgba(245,230,200,0.1);
    color: var(--white);
    border-color: rgba(245,230,200,0.7);
  }
  .hero-stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .hero-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--wave);
    font-weight: 600;
    line-height: 1;
  }
  .hero-stat-label {
    font-size: 0.75rem;
    color: rgba(245,230,200,0.6);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  /* === SECTION COMMON === */
  .section-pad { padding: 5rem 0; }
  .section-pad-sm { padding: 3.5rem 0; }
  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.72rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--ocean);
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
  .section-tag::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background: var(--ocean);
  }
  .section-title {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    color: var(--text-dark);
    line-height: 1.15;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .section-title span { color: var(--ocean); }
  .section-desc {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.8;
    max-width: 560px;
    font-weight: 300;
  }

  /* === ABOUT SECTION === */
  .about-section { background: var(--sand-light); }
  .about-img-wrap {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
  }
  .about-img-placeholder {
    width: 100%;
    height: 400px;
    background: linear-gradient(135deg, #1B6CA8 0%, #4AAFCF 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgba(255,255,255,0.7);
    gap: 1rem;
    border-radius: 20px;
  }
  .about-img-placeholder i { font-size: 3rem; }
  .about-badge-float {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    background: white;
    border-radius: 14px;
    padding: 0.9rem 1.2rem;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .about-badge-icon {
    width: 42px; height: 42px;
    border-radius: 10px;
    background: var(--ocean);
    display: flex; align-items: center; justify-content: center;
    color: white;
    font-size: 1.1rem;
  }
  .about-badge-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-dark);
    line-height: 1;
  }
  .about-badge-text { font-size: 0.72rem; color: var(--text-muted); }
  .info-card {
    background: white;
    border-radius: 16px;
    padding: 1.4rem 1.6rem;
    border: 1px solid var(--border-soft);
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .info-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(27,108,168,0.1);
  }
  .info-card-icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    background: rgba(27,108,168,0.08);
    display: flex; align-items: center; justify-content: center;
    color: var(--ocean);
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .info-card-title { font-size: 0.9rem; font-weight: 500; color: var(--text-dark); }
  .info-card-sub { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem; }

  /* === BOOKS SECTION === */
  .books-section { background: white; }
  .filter-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
  .filter-tab {
    padding: 0.45rem 1.1rem;
    border-radius: 50px;
    font-size: 0.82rem;
    font-weight: 400;
    border: 1.5px solid var(--border-soft);
    background: transparent;
    color: var(--text-mid);
    cursor: pointer;
    transition: all 0.2s;
  }
  .filter-tab:hover, .filter-tab.active {
    background: var(--ocean);
    border-color: var(--ocean);
    color: white;
  }
  .book-card {
    background: var(--sand-light);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(245,230,200,0.5);
    transition: all 0.3s;
    height: 100%;
  }
  .book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(27,108,168,0.12);
  }
  .book-cover {
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    position: relative;
    overflow: hidden;
    object-fit: cover;
  }
  .book-cover::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 30px;
    background: linear-gradient(transparent, rgba(0,0,0,0.15));
  }
  .book-meta { padding: 1.2rem; }
  .book-category {
    font-size: 0.68rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--ocean);
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
  .book-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.35;
    margin-bottom: 0.3rem;
    font-family: 'Playfair Display', serif;
  }
  .book-author { font-size: 0.78rem; color: var(--text-muted); }
  .book-available {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.7rem;
    color: var(--leaf);
    margin-top: 0.7rem;
    font-weight: 500;
  }
  .book-available i { font-size: 0.6rem; }

  /* === PORTFOLIO SECTION === */
  .portfolio-section { background: var(--ocean-deep); }
  .portfolio-section .section-tag { color: var(--wave); }
  .portfolio-section .section-tag::before { background: var(--wave); }
  .portfolio-section .section-title { color: var(--white); }
  .portfolio-section .section-title span { color: var(--wave); }
  .portfolio-section .section-desc { color: rgba(245,230,200,0.6); }
  .port-card {
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    aspect-ratio: 4/3;
  }
  .port-card-bg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    transition: transform 0.4s ease;
  }
  .port-card:hover .port-card-bg { transform: scale(1.06); }
  .port-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(8,46,82,0.92) 0%, transparent 50%);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .port-card:hover .port-card-overlay { opacity: 1; }
  .port-card-label {
    font-size: 0.68rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--wave);
    margin-bottom: 0.4rem;
  }
  .port-card-title {
    font-size: 1.1rem;
    color: white;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }
  .port-card-desc { font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 0.4rem; }
  .port-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    color: rgba(245,230,200,0.7);
  }
  .port-tag i { color: var(--wave); }

  /* === EVENTS SECTION === */
  .events-section { background: var(--sand-light); }
  .event-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border-soft);
    transition: all 0.3s;
    display: flex;
    height: 100%;
  }
  .event-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(27,108,168,0.1);
  }
  .event-date-bar {
    width: 70px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    background: var(--ocean);
    color: white;
  }
  .event-date-day {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
  }
  .event-date-mon {
    font-size: 0.65rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: 0.8;
    margin-top: 0.2rem;
  }
  .event-date-yr { font-size: 0.65rem; opacity: 0.6; margin-top: 0.1rem; }
  .event-body { padding: 1.2rem 1.3rem; flex: 1; }
  .event-type {
    display: inline-block;
    font-size: 0.65rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--coral);
    font-weight: 600;
    margin-bottom: 0.4rem;
  }
  .event-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
    font-family: 'Playfair Display', serif;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
  .event-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.7; }
  .event-meta {
    display: flex;
    gap: 1rem;
    margin-top: 0.8rem;
    flex-wrap: wrap;
  }
  .event-meta-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.72rem;
    color: var(--text-muted);
  }
  .event-meta-item i { color: var(--ocean); font-size: 0.75rem; }
  .event-status {
    display: inline-block;
    font-size: 0.65rem;
    padding: 0.2rem 0.7rem;
    border-radius: 50px;
    font-weight: 500;
    margin-top: 0.7rem;
  }
  .event-status.done { background: rgba(45,122,79,0.1); color: var(--leaf); }
  .event-status.upcoming { background: rgba(27,108,168,0.1); color: var(--ocean); }

  /* === POTENSI DESA SECTION === */
  .potensi-section { background: white; }
  .potensi-card {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
  }
  .potensi-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.12); }
  .potensi-img {
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
  .potensi-body {
    padding: 1.4rem;
    background: white;
  }
  .potensi-category {
    font-size: 0.68rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .potensi-title {
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
  }
  .potensi-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.7; }
  .potensi-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: var(--ocean);
    font-weight: 500;
    margin-top: 0.8rem;
    text-decoration: none;
    transition: gap 0.2s;
  }
  .potensi-link:hover { gap: 0.6rem; color: var(--ocean); }

  /* === CONTACT / CTA SECTION === */
  .cta-section {
    background: linear-gradient(135deg, #0D4A7A 0%, #1B6CA8 60%, #4AAFCF 100%);
    position: relative;
    overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute;
    bottom: -50px; right: -50px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
  }
  .cta-section::after {
    content: '';
    position: absolute;
    top: -80px; left: -80px;
    width: 350px; height: 350px;
    border-radius: 50%;
    background: rgba(255,255,255,0.03);
  }
  .cta-content { position: relative; z-index: 1; }
  .cta-title { font-size: clamp(1.8rem, 4vw, 2.8rem); color: white; font-weight: 700; }
  .cta-desc { color: rgba(255,255,255,0.75); font-size: 1rem; font-weight: 300; }
  .cta-contact-card {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 14px;
    padding: 1rem 1.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
    transition: background 0.2s;
  }
  .cta-contact-card:hover { background: rgba(255,255,255,0.15); }
  .cta-icon { font-size: 1.3rem; color: var(--wave); }
  .cta-contact-title { font-size: 0.72rem; opacity: 0.6; }
  .cta-contact-val { font-size: 0.9rem; font-weight: 500; }

  /* === FOOTER === */
  .footer { background: var(--ocean-deep); padding: 3.5rem 0 1.5rem; }
  .footer-brand { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--sand); font-weight: 700; }
  .footer-brand-sub { font-size: 0.68rem; color: var(--wave); letter-spacing: 2px; text-transform: uppercase; }
  .footer-desc { font-size: 0.85rem; color: rgba(245,230,200,0.5); line-height: 1.9; margin-top: 1rem; max-width: 280px; }
  .footer-heading { font-size: 0.75rem; letter-spacing: 2.5px; text-transform: uppercase; color: var(--wave); font-weight: 500; margin-bottom: 1rem; font-family: 'DM Sans', sans-serif; }
  .footer-link {
    display: block;
    font-size: 0.85rem;
    color: rgba(245,230,200,0.55);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
  }
  .footer-link:hover { color: var(--wave); }
  .footer-divider { border-color: rgba(255,255,255,0.07); margin: 2rem 0 1.2rem; }
  .footer-copy { font-size: 0.78rem; color: rgba(245,230,200,0.3); }
  .social-btn {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    display: inline-flex; align-items: center; justify-content: center;
    color: rgba(245,230,200,0.6);
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s;
    margin-right: 0.4rem;
  }
  .social-btn:hover {
    background: var(--wave);
    border-color: var(--wave);
    color: var(--ocean-deep);
  }

  /* === SCROLL ANIMATIONS === */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* Scroll to top */
  .scroll-top-btn {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 44px; height: 44px;
    background: var(--ocean);
    color: white;
    border: none;
    border-radius: 12px;
    display: none;
    align-items: center; justify-content: center;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(27,108,168,0.4);
    transition: all 0.2s;
  }
  .scroll-top-btn:hover { background: var(--ocean-dark); transform: translateY(-2px); }
  .scroll-top-btn.show { display: flex; }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-stats { gap: 1.5rem; flex-wrap: wrap; }
    .btn-hero-secondary { margin-left: 0; margin-top: 0.8rem; }
    .hero-buttons { display: flex; flex-direction: column; align-items: flex-start; gap: 0.8rem; }
    .event-card { flex-direction: column; }
    .event-date-bar { width: 100%; flex-direction: row; padding: 0.7rem 1.2rem; gap: 0.5rem; }
    .event-date-day { font-size: 1.4rem; }
  }
