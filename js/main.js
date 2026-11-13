/* ===== Edita aquí tus datos de contacto ===== */
const CONTACTO = {
  whatsapp: "526624017009",           // lada 52 + 10 dígitos, sin espacios
  correo:   "navmirdiego@gmail.com",
  linkedin: "https://www.linkedin.com/in/diego-navarro-miranda-819724389/",
  github:   "https://github.com/dinami04"
};
/* ============================================ */

const $ = s => document.querySelector(s);
const wa = n => "https://wa.me/" + n;
$("#lnkWa").href = wa(CONTACTO.whatsapp);
$("#txtWa").textContent = "+" + CONTACTO.whatsapp.replace(/^52(\d{3})(\d{3})(\d{4})$/, "52 $1 $2 $3");
$("#lnkMail").href = "mailto:" + CONTACTO.correo;
$("#txtMail").textContent = CONTACTO.correo;
$("#lnkIn").href = CONTACTO.linkedin;
$("#lnkGh").href = CONTACTO.github;
$("#yr").textContent = new Date().getFullYear();

$("#quote").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const txt = `Hola Diego, soy ${f.get("nombre")}. Me interesa: ${f.get("tipo")}.\n\n${f.get("mensaje")}`;
  window.open(wa(CONTACTO.whatsapp) + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
});

const nav = $("#nav"), mb = $("#menuBtn");
mb.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  mb.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); mb.setAttribute("aria-expanded", "false");
}));

const links = [...nav.querySelectorAll("a")];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));
