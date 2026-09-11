/* Hydro Pressure Washing — shared nav + footer builder.
   Each page calls HydroSite.render({base:'../', active:'services'}).
   base = path prefix to site root ('' at root, '../' one folder deep). */
(function(){
  const PHONE_DISPLAY='(609) 545-1018';
  const PHONE_TEL='+16095451018';
  const EMAIL='jamesfreeman8000@gmail.com';

  function nav(base, active){
    const L=[
      ['home','Home', base+'index.html'],
      ['services','Services', base+'services/'],
      ['about','About', base+'about/'],
      ['work','Our Work', base+'work/'],
      ['contact','Contact', base+'contact/']
    ];
    return `<nav class="nav"><div class="nav-inner">
      <a href="${base}index.html"><img src="${base}assets/logo.png" alt="Hydro Pressure Washing" class="nav-logo"></a>
      <button class="nav-toggle" onclick="document.getElementById('navlinks').classList.toggle('open')">☰</button>
      <div class="nav-links" id="navlinks">
        ${L.map(([id,label,href])=>`<a href="${href}" class="${active===id?'active':''}">${label}</a>`).join('')}
        <a href="${base}contact/#quote" class="cta">Free Quote</a>
      </div>
    </div></nav>`;
  }

  function footer(base){
    return `<footer class="footer"><div class="wrap">
      <div class="footer-grid">
        <div>
          <img src="${base}assets/logo.png" alt="Hydro Pressure Washing">
          <p class="fdesc">Professional pressure washing and soft washing for homes and businesses across South Jersey.</p>
        </div>
        <div>
          <h5>Services</h5>
          <a href="${base}services/">House Washing</a>
          <a href="${base}services/">Roof Cleaning</a>
          <a href="${base}services/">Driveways &amp; Concrete</a>
          <a href="${base}services/">Gutter Cleaning</a>
          <a href="${base}services/">Commercial</a>
        </div>
        <div>
          <h5>Get In Touch</h5>
          <div class="fitem"><b>📞 ${PHONE_DISPLAY}</b></div>
          <div class="fitem">✉️ ${EMAIL}</div>
          <div class="fitem">📍 All of South Jersey</div>
          <div class="fitem">🕐 Every day, 8am–10pm</div>
          <a href="${base}contact/#quote" class="btn btn-primary" style="margin-top:14px">Free Quote →</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© <span class="yr"></span> Hydro Pressure Washing. All rights reserved.</div>
        <div>South Jersey • Residential &amp; Commercial</div>
      </div>
    </div></footer>
    <a href="tel:${PHONE_TEL}" class="float-call">📞 Call Now</a>`;
  }

  function render(opts){
    const base=opts.base||'';
    const navEl=document.getElementById('site-nav');
    const footEl=document.getElementById('site-footer');
    if(navEl) navEl.outerHTML=nav(base, opts.active);
    if(footEl) footEl.outerHTML=footer(base);
    document.querySelectorAll('.yr').forEach(e=>e.textContent=new Date().getFullYear());
    // scroll reveal
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  }
  window.HydroSite={render, PHONE_DISPLAY, PHONE_TEL, EMAIL};
})();
