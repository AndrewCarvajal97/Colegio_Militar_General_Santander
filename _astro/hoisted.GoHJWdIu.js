const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/emailService.client.C1Hjcvor.js","_astro/hoisted.CVjswDaB.js"])))=>i.map(i=>d[i]);
import"https://player.vimeo.com/api/player.js";import"./hoisted.CVjswDaB.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("video-container"),e=document.getElementById("video-preloader"),o=document.getElementById("hero-video"),s=document.getElementById("video-overlay"),n=document.getElementById("hero-content"),i=document.getElementById("scroll-indicator"),l=document.getElementById("fallback-gradient");let a,c=!1,r=!1,m=!1,d,p,E;function z(){try{a=new Vimeo.Player(o),a.ready().then(function(){return console.log("✅ Video Vimeo cargado correctamente"),c=!0,T(),A(),a.play()}).then(function(){console.log("▶️ Video iniciado"),m=!0}).catch(function(u){console.error("❌ Error al cargar/reproducir video Vimeo:",u),w()}),a.on("ended",function(){console.log("🎬 Video terminado - se mantiene pausado")}),a.on("error",function(u){console.error("❌ Error durante reproducción:",u),w()}),a.on("play",function(){console.log("🎥 Video reproduciendo"),m=!0})}catch(u){console.error("❌ Error al inicializar Vimeo Player:",u),w()}}function T(){e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none"},500))}function A(){if(!c)return;console.log("🎥 Iniciando secuencia del video...");const u=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),g=u?6e3:1e4;console.log(`📱 Dispositivo: ${u?"Móvil":"Desktop"} - Intro: ${g/1e3}s`),d=setTimeout(()=>{B()},g)}function B(){r||(console.log("📝 Mostrando contenido sobre video difuminado..."),r=!0,t&&(t.style.zIndex="5",t.style.transition="all 1s ease-in-out"),s&&(s.style.backgroundColor="rgba(0, 0, 0, 0.5)",s.style.backdropFilter="blur(4px)",s.style.webkitBackdropFilter="blur(4px)"),o&&(o.style.filter="blur(2px) brightness(0.7)",o.style.transform="scale(1.08)"),n&&(n.style.opacity="1",n.style.transform="translateY(0)"),i&&setTimeout(()=>{i.style.opacity="1"},800))}function w(){console.warn("⚠️ Fallback: Usando degradado en lugar del video"),t&&(t.style.display="none"),l&&(l.classList.remove("hidden"),l.style.zIndex="5"),n&&(n.style.opacity="1",n.style.zIndex="10"),i&&(i.style.opacity="1"),T()}p=setTimeout(()=>{c||(console.warn("⏰ Timeout: Video tardó demasiado en cargar"),w())},1e4);let f=!1;function $(){!f&&window.scrollY>100&&(f=!0,console.log("📜 Usuario hizo scroll, mostrando contenido..."),d&&clearTimeout(d),r||B())}window.addEventListener("scroll",$,{passive:!0}),E=setTimeout(()=>{z()},1e3),setTimeout(()=>{!m&&!r&&(console.log("⚡ Fallback rápido: Mostrando contenido sin esperar video"),B())},3e3),window.addEventListener("beforeunload",function(){if(d&&clearTimeout(d),p&&clearTimeout(p),E&&clearTimeout(E),a)try{a.pause()}catch(u){console.log("Video cleanup:",u)}}),setTimeout(()=>{console.log("🔍 Estado del video:",{videoLoaded:c,videoStarted:m,contentShown:r,hasScrolled:f})},5e3)});const de={threshold:.1,rootMargin:"0px 0px -100px 0px"},ue=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},de);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".card-hover, .border-l-4").forEach(e=>{e.classList.add("scroll-animate"),ue.observe(e)})});const me="modulepreload",pe=function(t){return"/frontend_Hackaton/"+t},G={},fe=function(e,o,s){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=l?.nonce||l?.getAttribute("nonce");n=Promise.allSettled(o.map(c=>{if(c=pe(c),c in G)return;G[c]=!0;const r=c.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":me,r||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),r)return new Promise((p,E)=>{d.addEventListener("load",p),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return n.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let O=null,D=1,H=1,L=0;function K(){"speechSynthesis"in window&&(speechSynthesis.onvoiceschanged=()=>{const t=speechSynthesis.getVoices();O=t.find(e=>(e.lang.includes("es")||e.name.toLowerCase().includes("spanish"))&&(e.name.toLowerCase().includes("female")||e.name.toLowerCase().includes("mujer")||e.name.toLowerCase().includes("carmen")||e.name.toLowerCase().includes("soledad")||e.name.toLowerCase().includes("ines")))||t.find(e=>e.lang.includes("es"))||t[0]||null})}function ee(t,e){if(!("speechSynthesis"in window)){alert("Tu navegador no soporta síntesis de voz");return}speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(t);O&&(o.voice=O),o.rate=D,o.pitch=H,o.lang="es-ES";const s=document.getElementById(`play-${e}`),n=document.getElementById(`pause-${e}`);o.onstart=()=>{s&&(s.style.display="none"),n&&(n.style.display="inline-block")},o.onend=()=>{s&&(s.style.display="inline-block"),n&&(n.style.display="none")},o.onerror=()=>{s&&(s.style.display="inline-block"),n&&(n.style.display="none")},speechSynthesis.speak(o)}function ve(t){if(speechSynthesis.speaking&&!speechSynthesis.paused){speechSynthesis.pause();const e=document.getElementById(`play-${t}`),o=document.getElementById(`pause-${t}`);e&&(e.style.display="inline-block"),o&&(o.style.display="none")}else if(speechSynthesis.paused){speechSynthesis.resume();const e=document.getElementById(`play-${t}`),o=document.getElementById(`pause-${t}`);e&&(e.style.display="none"),o&&(e.style.display="inline-block")}}function ge(t){speechSynthesis.cancel();const e=document.getElementById(`play-${t}`),o=document.getElementById(`pause-${t}`);e&&(e.style.display="inline-block"),o&&(o.style.display="none")}const X=document.getElementById("chatbot-toggle");X&&X.addEventListener("click",function(){const t=document.getElementById("chatbot-window");t&&t.classList.toggle("hidden")});const W=document.getElementById("chatbot-close");W&&W.addEventListener("click",function(){const t=document.getElementById("chatbot-window");t&&t.classList.add("hidden")});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("gender-toggle"),e=document.getElementById("gender-icon"),o=document.getElementById("chatbot-header-icon"),s=document.getElementById("chatbot-icon");let n=!0;t&&e&&o&&s&&t.addEventListener("click",()=>{n=!n,n?(e.src="/frontend_Hackatonhombre.png",e.alt="Hombre",o.src="/frontend_Hackatonicon2023.webp",s.src="/frontend_Hackatonicon2023.webp"):(e.src="/frontend_Hackatonmujer.png",e.alt="Mujer",o.src="/frontend_Hackatonicon2025.webp",s.src="/frontend_Hackatonicon2025.webp")})});function ye(){v();const t=document.getElementById("initial-view"),e=document.getElementById("chat-area");t&&t.classList.remove("hidden"),e&&e.classList.remove("scrollable");const o=document.getElementById("document-form-form"),s=document.getElementById("clave-secreta-step");o&&o.reset(),s&&s.classList.add("hidden")}window.showInitialView=ye;function he(){v();const t=document.getElementById("pqr-form"),e=document.getElementById("chat-area");t&&t.classList.remove("hidden"),e&&e.classList.remove("scrollable")}window.showPQRForm=he;function be(){v();const t=document.getElementById("info-menu"),e=document.getElementById("chat-area");t&&t.classList.remove("hidden"),e&&e.classList.remove("scrollable")}window.showInfoMenu=be;function xe(){v();const t=document.getElementById("admin-menu"),e=document.getElementById("chat-area");t&&t.classList.remove("hidden"),e&&e.classList.remove("scrollable")}window.showAdminMenu=xe;function v(){["initial-view","pqr-form","info-menu","admin-menu","result-area","mayor-virtual-chat","document-form"].forEach(e=>{const o=document.getElementById(e);o&&o.classList.add("hidden")})}async function Ee(t){t.preventDefault();const e=t.target,o=e.querySelector('input[placeholder="Nombres"]'),s=e.querySelector('input[placeholder="Apellidos"]'),n=e.querySelector('input[placeholder="Teléfono"]'),i=e.querySelector('input[placeholder="Correo electrónico"]'),l=e.querySelector("#tipoSolicitud"),a=e.querySelector("#area"),c=e.querySelector("#descripcion"),r=o.value.trim(),m=s.value.trim(),d=n.value.trim(),p=i.value.trim(),E=l?l.value:"",z=a?a.value:"",T=c?c.value:"",A=/^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,10}$/,B=/^\d{1,10}$/,w=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;let f="";if(A.test(r)?A.test(m)?B.test(d)?w.test(p)||(f="El correo debe tener un formato válido (ejemplo@dominio.com).",i.focus()):(f="El teléfono debe contener solo números (sin espacios ni letras) y máximo 10 dígitos.",n.focus()):(f="El apellido debe tener solo letras, entre 3 y 10 caracteres.",s.focus()):(f="El nombre debe tener solo letras, entre 3 y 10 caracteres.",o.focus()),f){alert(f);return}v();const $=document.getElementById("result-area"),u=document.getElementById("chat-area"),g=document.getElementById("result-title"),I=document.getElementById("result-content");$&&$.classList.remove("hidden"),u&&u.classList.add("scrollable"),g&&(g.textContent="Enviando PQR..."),I&&(I.innerHTML=`
      <div class="text-center p-4">
        <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 animate-spin">
          <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <circle class="opacity-25" cx="10" cy="10" r="8" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 10a6 6 0 0112 0H4z"></path>
          </svg>
        </div>
        <p class="font-medium text-yellow-800 mb-2">Enviando tu PQR...</p>
      </div>
    `);const Q=`PQR-${Date.now()}`;fe(async()=>{const{sendEmail:C}=await import("./emailService.client.C1Hjcvor.js");return{sendEmail:C}},__vite__mapDeps([0,1])).then(({sendEmail:C})=>C({templateId:"template_pqr",templateParams:{from_name:r,from_email:p,phone:d,request_type:E,area:z,pqr_number:Q,description:T}})).then(()=>{g&&(g.textContent="PQR Enviada"),I&&(I.innerHTML=`
        <div class="text-center p-4">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <p class="font-medium text-green-800 mb-2">¡PQR enviada exitosamente!</p>
          <p class="text-sm text-gray-600 mb-3">Número de radicado: <strong>${Q}</strong></p>
          <p class="text-xs text-gray-500">Recibirás una respuesta en un plazo máximo de 15 días hábiles al correo electrónico proporcionado.</p>
        </div>
      `),e.reset()}).catch(C=>{g&&(g.textContent="Error al enviar PQR"),I&&(I.innerHTML=`
        <div class="text-center p-4">
          <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <p class="font-medium text-red-800 mb-2">Hubo un error al enviar tu PQR.</p>
          <p class="text-xs text-gray-500">Por favor, intenta nuevamente o contacta a soporte.</p>
        </div>
      `),console.error(C)})}window.submitPQR=Ee;let y=null;function we(t){y={type:t,mode:"academic"},v();const e=document.getElementById("document-form"),o=document.getElementById("chat-area");e&&e.classList.remove("hidden"),o&&o.classList.remove("scrollable")}window.showAcademicInfo=we;function Ie(t){y={type:t,mode:"admin"},v();const e=document.getElementById("document-form"),o=document.getElementById("chat-area");e&&e.classList.remove("hidden"),o&&o.classList.remove("scrollable")}window.showAdminInfo=Ie;function Le(t){t.preventDefault();const e=document.getElementById("student-document"),o=e?e.value.trim():"",s=document.getElementById("clave-secreta-step"),n=document.getElementById("clave-secreta");if(s&&s.classList.contains("hidden")){s.classList.remove("hidden"),n&&n.focus();return}const i=n?n.value.trim():"";if(!i){n&&n.focus(),alert("Por favor ingresa la clave secreta proporcionada por el colegio.");return}if(i!=="1234"){v();const l=document.getElementById("result-area"),a=document.getElementById("chat-area"),c=document.getElementById("result-title"),r=document.getElementById("result-content");l&&l.classList.remove("hidden"),a&&a.classList.add("scrollable"),c&&(c.textContent="Clave incorrecta"),r&&(r.innerHTML="<div class='text-center text-red-600 font-medium'>La clave secreta es incorrecta. Comunícate con el colegio para obtener acceso.</div>");return}if(o==="1095834123")y&&y.mode==="academic"?te(y.type):y&&y.mode==="admin"&&oe(y.type);else{v();const l=document.getElementById("result-area"),a=document.getElementById("chat-area"),c=document.getElementById("result-title"),r=document.getElementById("result-content");l&&l.classList.remove("hidden"),a&&a.classList.add("scrollable"),c&&(c.textContent="Error"),r&&(r.innerHTML="<div class='text-center text-red-600 font-medium'>El usuario no se encuentra registrado en nuestra base de datos.</div>")}}window.submitDocument=Le;document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("document-form-form"),e=document.getElementById("clave-secreta-step");t&&e&&(e.classList.add("hidden"),t.addEventListener("reset",()=>{e.classList.add("hidden")}))});function te(t){const e=document.getElementById("result-area"),o=document.getElementById("chat-area"),s=document.getElementById("result-title"),n=document.getElementById("result-content");e&&e.classList.remove("hidden"),o&&o.classList.add("scrollable");const l={notas:{title:"Consulta de Notas",content:`
          <div class="space-y-3">
            <div class="bg-blue-50 p-3 rounded">
              <h5 class="font-medium text-blue-800">Segundo Período - 2024</h5>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between text-sm">
                  <span>Matemáticas:</span>
                  <span class="font-medium text-green-600">4.2</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Español:</span>
                  <span class="font-medium text-green-600">4.5</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Ciencias:</span>
                  <span class="font-medium text-green-600">4.0</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Educación Física:</span>
                  <span class="font-medium text-green-600">4.8</span>
                </div>
              </div>
              <div class="mt-2 pt-2 border-t border-blue-200">
                <div class="flex justify-between font-medium">
                  <span>Promedio:</span>
                  <span class="text-green-600">4.4</span>
                </div>
              </div>
            </div>
            <p class="text-xs text-gray-500">Para ver el detalle completo, ingresa al portal académico.</p>
          </div>
        `},comportamiento:{title:"Reporte de Comportamiento",content:`
          <div class="space-y-3">
            <div class="bg-green-50 p-3 rounded">
              <h5 class="font-medium text-green-800">Estado Disciplinario</h5>
              <div class="mt-2">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm">Excelente comportamiento</span>
                </div>
                <p class="text-xs text-gray-600 mt-1">Sin observaciones disciplinarias este período</p>
              </div>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h5 class="font-medium text-blue-800">Reconocimientos</h5>
              <ul class="text-xs text-gray-700 mt-1 space-y-1">
                <li>• Puntualidad destacada</li>
                <li>• Participación en actividades</li>
                <li>• Respeto por los valores institucionales</li>
              </ul>
            </div>
          </div>
        `},horarios:{title:"Horarios de Clase",content:`
          <div class="space-y-2">
            <div class="bg-gray-50 p-2 rounded text-xs">
              <div class="font-medium">Lunes</div>
              <div class="space-y-1 mt-1">
                <div>7:00 - 8:00 AM: Matemáticas</div>
                <div>8:00 - 9:00 AM: Español</div>
                <div>9:00 - 9:20 AM: Descanso</div>
                <div>9:20 - 10:20 AM: Ciencias</div>
                <div>10:20 - 11:20 AM: Educación Física</div>
              </div>
            </div>
            <p class="text-xs text-gray-500">Consulta el horario completo en el portal estudiantil.</p>
          </div>
        `},calendario:{title:"Calendario Académico",content:`
          <div class="space-y-2">
            <div class="bg-yellow-50 p-2 rounded text-xs">
              <div class="font-medium text-yellow-800">Próximos Eventos</div>
              <div class="space-y-1 mt-1">
                <div>• 15 May: Entrega de notas</div>
                <div>• 20 May: Reunión de padres</div>
                <div>• 25 May: Inicio vacaciones</div>
              </div>
            </div>
            <p class="text-xs text-gray-500">Descarga el calendario completo desde el portal.</p>
          </div>
        `}}[t];s&&(s.textContent=l.title),n&&(n.innerHTML=l.content)}window.showAcademicInfoResult=te;function oe(t){const e=document.getElementById("result-area"),o=document.getElementById("chat-area"),s=document.getElementById("result-title"),n=document.getElementById("result-content");e&&e.classList.remove("hidden"),o&&o.classList.add("scrollable");const l={pagos:{title:"Estado de Pagos",content:`
          <div class="space-y-3">
            <div class="bg-green-50 p-3 rounded">
              <h5 class="font-medium text-green-800">Estado Actual</h5>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between text-sm">
                  <span>Matrícula 2024:</span>
                  <span class="text-green-600 font-medium">✓ Pagado</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Pensión Mayo:</span>
                  <span class="text-green-600 font-medium">✓ Pagado</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Pensión Junio:</span>
                  <span class="text-red-600 font-medium">Pendiente</span>
                </div>
              </div>
            </div>
            <p class="text-xs text-gray-500">Vencimiento próximo: 5 de Junio</p>
          </div>
        `},documentos:{title:"Solicitar Documentos",content:`
          <div class="space-y-2">
            <button class="w-full p-2 bg-blue-50 hover:bg-blue-100 rounded text-left text-xs">
              📄 Certificado de Estudios
            </button>
            <button class="w-full p-2 bg-blue-50 hover:bg-blue-100 rounded text-left text-xs">
              📄 Constancia de Matrícula
            </button>
            <button class="w-full p-2 bg-blue-50 hover:bg-blue-100 rounded text-left text-xs">
              📄 Reporte de Calificaciones
            </button>
            <button class="w-full p-2 bg-blue-50 hover:bg-blue-100 rounded text-left text-xs">
              📄 Certificado de Disciplina
            </button>
            <p class="text-xs text-gray-500 mt-2">Tiempo de entrega: 3-5 días hábiles</p>
          </div>
        `},uniformes:{title:"Información de Uniformes",content:`
          <div class="space-y-2">
            <div class="bg-blue-50 p-2 rounded text-xs">
              <div class="font-medium">Uniforme de Diario</div>
              <div class="mt-1">Camisa blanca, pantalón gris, corbata institucional, zapatos negros</div>
            </div>
            <div class="bg-green-50 p-2 rounded text-xs">
              <div class="font-medium">Uniforme de Educación Física</div>
              <div class="mt-1">Camiseta blanca CMGS, pantaloneta azul, tenis blancos</div>
            </div>
            <p class="text-xs text-gray-500">Proveedor autorizado: Almacén El Cadete - Tel: 300 123 4567</p>
          </div>
        `},transporte:{title:"Servicio de Transporte",content:`
          <div class="space-y-2">
            <div class="bg-yellow-50 p-2 rounded text-xs">
              <div class="font-medium">Ruta Asignada: Norte 3</div>
              <div class="mt-1">
                <div>Recogida: 6:30 AM - Barrio La Aurora</div>
                <div>Salida Colegio: 2:30 PM</div>
                <div>Monitor: Carlos Ruiz - Tel: 301 234 5678</div>
              </div>
            </div>
            <p class="text-xs text-gray-500">Para cambios de ruta comunicarse con coordinación.</p>
          </div>
        `}}[t];s&&(s.textContent=l.title),n&&(n.innerHTML=l.content)}window.showAdminInfoResult=oe;function Be(){v();const t=document.getElementById("mayor-virtual-chat"),e=document.getElementById("chat-area");t&&t.classList.remove("hidden"),e&&e.classList.add("scrollable");const o=document.getElementById("mayor-chat-messages");if(o){L++;const s="¡Hola! Soy tu mayor virtual, ¿en qué puedo ayudarte?",n=`msg-${L}`,i=s.replace(/'/g,"\\'");o.innerHTML=`
        <div class="mb-2 text-gray-700 group" id="${n}">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <strong>Mayor Virtual:</strong> ${s}
            </div>
            <div class="audio-controls ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                id="play-${n}" 
                onclick="speakText('${i}', '${n}')" 
                class="p-1 hover:bg-gray-200 rounded text-xs" 
                title="Reproducir audio"
              >
                🔊
              </button>
              <button 
                id="pause-${n}" 
                onclick="toggleSpeech('${n}')" 
                class="p-1 hover:bg-gray-200 rounded text-xs" 
                title="Pausar/Reanudar"
                style="display: none;"
              >
                ⏸️
              </button>
              <button 
                onclick="stopSpeech('${n}')" 
                class="p-1 hover:bg-gray-200 rounded text-xs" 
                title="Detener"
              >
                ⏹️
              </button>
            </div>
          </div>
        </div>
      `}K()}window.showMayorVirtual=Be;window.speakText=ee;window.toggleSpeech=ve;window.stopSpeech=ge;async function Ce(t){t.preventDefault();const e=document.getElementById("mayor-chat-input"),o=document.getElementById("mayor-chat-messages");if(!e||!o)return;const s=e.value.trim();if(s){o.innerHTML+=`<div class='mb-2 text-blue-700 text-right'><strong>Tú:</strong> ${s}</div>`,e.value="";try{const i=await(await fetch("/mayor_virtual.json")).json(),l=r=>r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9üñ\s]/gi,"").replace(/\s+/g," ").trim(),a=l(s);let c="";for(const r of i.intenciones){for(const m of r.patrones){const d=l(m);if(a===d||a.includes(d)||d.includes(a)){const p=r.respuestas;c=p[Math.floor(Math.random()*p.length)];break}}if(c)break}c||(c="No tengo una respuesta para eso, intenta con otra pregunta."),setTimeout(()=>{L++;const r=`msg-${L}`,m=c.replace(/'/g,"\\'");o.innerHTML+=`
          <div class='mb-2 text-gray-700 group' id="${r}">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <strong>Mayor Virtual:</strong> ${c}
              </div>
              <div class="audio-controls ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  id="play-${r}" 
                  onclick="speakText('${m}', '${r}')" 
                  class="p-1 hover:bg-gray-200 rounded text-xs" 
                  title="Reproducir audio"
                >
                  🔊
                </button>
                <button 
                  id="pause-${r}" 
                  onclick="toggleSpeech('${r}')" 
                  class="p-1 hover:bg-gray-200 rounded text-xs" 
                  title="Pausar/Reanudar"
                  style="display: none;"
                >
                  ⏸️
                </button>
                <button 
                  onclick="stopSpeech('${r}')" 
                  class="p-1 hover:bg-gray-200 rounded text-xs" 
                  title="Detener"
                >
                  ⏹️
                </button>
              </div>
              
            </div>
          </div>
        `;const d=document.getElementById("auto-speech-toggle");d&&d.checked&&setTimeout(()=>ee(c,r),200),o.scrollTop=o.scrollHeight},500)}catch{L++;const n=`msg-${L}`,i="Error al consultar la base de respuestas.";o.innerHTML+=`
        <div class='mb-2 text-red-600 group' id="${n}">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <strong>Mayor Virtual:</strong> ${i}
            </div>
            <div class="audio-controls ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                id="play-${n}" 
                onclick="speakText('${i}', '${n}')" 
                class="p-1 hover:bg-gray-200 rounded text-xs" 
                title="Reproducir audio"
              >
                🔊
              </button>
              <button 
                id="pause-${n}" 
                onclick="toggleSpeech('${n}')" 
                class="p-1 hover:bg-gray-200 rounded text-xs" 
                title="Pausar/Reanudar"
                style="display: none;"
              >
                ⏸️
              </button>
              <button 
                onclick="stopSpeech('${n}')" 
                class="p-1 hover:bg-gray-200 rounded text-xs" 
                title="Detener"
              >
                ⏹️
              </button>
            </div>
          </div>
        </div>
      `}o.scrollTop=o.scrollHeight}}window.sendMayorMessage=Ce;K();document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("chatbot-bubble"),e=document.getElementById("chatbot-toggle");setTimeout(()=>{t?.remove()},6e3),e?.addEventListener("click",()=>{t?.remove()})});setTimeout(()=>{const t=document.getElementById("voice-settings-btn");t&&t.addEventListener("click",function(){const e=prompt(`Configuración de Voz:

1. Velocidad (0.5 - 2): `+D+`
2. Tono (0.5 - 2): `+H+`

Ingresa nuevos valores separados por coma (velocidad,tono)
Ejemplo: 1.2,1.1`);if(e){const[o,s]=e.split(",").map(n=>parseFloat(n.trim()));!isNaN(o)&&o>=.5&&o<=2&&(D=o),!isNaN(s)&&s>=.5&&s<=2&&(H=s),alert(`Configuración actualizada:
Velocidad: ${D}
Tono: ${H}`)}})},100);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("bubble-typing"),e="Si necesitas ayuda puedes hablar conmigo 😊😊";let o=0;function s(){t&&o<e.length&&(t.textContent+=e.charAt(o),o++,setTimeout(s,40))}t&&(t.textContent="",s())});let h=null,ne=0,x=0,M=0,S=null,P=null;async function Se(){try{h=await(await fetch("/carousel-data.json")).json(),document.getElementById("carousel-title").textContent=h.title,document.getElementById("carousel-subtitle").textContent=h.subtitle,Me(),se(0)}catch(t){console.error("Error al cargar datos del carrusel:",t),De()}}function Me(){const t=document.getElementById("group-thumbnails");!t||!h||(t.innerHTML=h.groups.map((e,o)=>`
      <button 
        class="group-thumbnail-btn group-thumb-${o} ${o===0?"active":""} aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 hover:border-military-blue hover:scale-105" 
        data-group="${o}"
        onclick="loadGroup(${o})"
      >
        <div class="w-full h-full relative">
          <img 
            src="${e.thumbnail}" 
            alt="${e.title}"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/20">
            <div class="text-center text-white p-2">
              <h4 class="font-bold text-sm md:text-base mb-1">${e.title}</h4>
              <p class="text-xs opacity-90 hidden md:block">${e.description}</p>
            </div>
          </div>
        </div>
      </button>
    `).join(""))}function se(t){if(!h||t<0||t>=h.groups.length)return;ne=t,x=0;const e=h.groups[t];M=e.images.length,ke(e.images),Te(),Ae(),q(),ae()}function ke(t){const e=document.getElementById("carousel-track");e&&(e.innerHTML=t.map(o=>`
      <div class="carousel-slide w-full flex-shrink-0 relative">
        <div class="aspect-video relative overflow-hidden">
          <img 
            src="${o.src}" 
            alt="${o.alt}"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white p-8 max-w-3xl mx-auto">
              <h3 class="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg">${o.title}</h3>
              <p class="text-lg md:text-xl text-shadow-md">${o.description}</p>
            </div>
          </div>
        </div>
      </div>
    `).join(""))}function Te(){const t=document.getElementById("carousel-indicators");t&&(t.innerHTML=Array.from({length:M},(e,o)=>`
      <button 
        class="carousel-indicator w-3 h-3 rounded-full transition-all duration-300 ${o===0?"bg-military-blue":"bg-gray-300 hover:bg-gray-400"}" 
        data-slide="${o}"
        onclick="goToSlide(${o})"
      ></button>
    `).join(""))}function Ae(){document.querySelectorAll(".group-thumbnail-btn").forEach((t,e)=>{e===ne?(t.classList.add("active","border-military-blue"),t.classList.remove("border-transparent")):(t.classList.remove("active","border-military-blue"),t.classList.add("border-transparent"))})}function q(){const t=document.getElementById("carousel-track");t&&(t.style.transform=`translateX(-${x*100}%)`,document.querySelectorAll(".carousel-indicator").forEach((e,o)=>{o===x?(e.classList.remove("bg-gray-300"),e.classList.add("bg-military-blue")):(e.classList.remove("bg-military-blue"),e.classList.add("bg-gray-300"))}))}function _(){x=(x+1)%M,q()}function J(){x=(x-1+M)%M,q()}function $e(t){x=t,q()}function ae(){S&&clearInterval(S),S=setInterval(_,5e3)}function Pe(){S&&clearInterval(S)}function De(){console.warn("Usando contenido de respaldo para el carrusel");const t=document.getElementById("carousel-track");t&&(t.innerHTML=`
        <div class="carousel-slide w-full flex-shrink-0 relative">
          <div class="aspect-video relative bg-gray-200 flex items-center justify-center">
            <p class="text-gray-500 text-xl">Error al cargar las instalaciones</p>
          </div>
        </div>
      `)}document.addEventListener("DOMContentLoaded",function(){Se();const t=document.getElementById("next-btn"),e=document.getElementById("prev-btn");t&&e&&(t.addEventListener("click",_),e.addEventListener("click",J));const o=document.querySelector(".carousel-container");o&&(o.addEventListener("mouseenter",Pe),o.addEventListener("mouseleave",ae),o.addEventListener("touchstart",s=>{s instanceof TouchEvent&&(P=s.touches[0].clientX)}),o.addEventListener("touchend",s=>{if(!P||!(s instanceof TouchEvent))return;const n=s.changedTouches[0].clientX,i=P-n;Math.abs(i)>50&&(i>0?_():J()),P=null}))});window.loadGroup=se;window.goToSlide=$e;const ie=document.querySelectorAll(".filter-btn"),N=document.querySelectorAll(".gallery-item"),F=document.getElementById("no-results"),le=document.querySelectorAll(".page-btn"),V=document.getElementById("prev-page"),j=document.getElementById("next-page");let b=1,U="all";const R=8,re={all:{bg:"rgb(52, 183, 13)",text:"white"},academicas:{bg:"#5771FE",text:"white"},deportivas:{bg:"rgb(52, 183, 13)",text:"white"},culturales:{bg:"#5771FE",text:"white"},militares:{bg:"#dc3545",text:"white"},eventos:{bg:"rgb(52, 183, 13)",text:"white"}};function ce(){return U==="all"?Array.from(N):Array.from(N).filter(t=>t.getAttribute("data-category")===U)}function k(t){const e=ce(),o=Math.ceil(e.length/R);N.forEach(a=>{a.classList.add("hidden")});const s=(t-1)*R,n=s+R,i=e.slice(s,n);i.forEach(a=>{a.classList.remove("hidden")}),V&&(V.disabled=t===1),j&&(j.disabled=t===o),le.forEach(a=>{parseInt(a.getAttribute("data-page")||"1")===t?(a.style.backgroundColor="rgb(52, 183, 13)",a.style.color="white",a.style.borderColor="rgb(52, 183, 13)"):(a.style.backgroundColor="white",a.style.color="#374151",a.style.borderColor="#e5e7eb")}),F&&(i.length===0?F.classList.remove("hidden"):F.classList.add("hidden"));const l=document.querySelector(".flex.justify-center.items-center.space-x-4.mb-8");l&&(o<=1?l.classList.add("hidden"):l.classList.remove("hidden"))}function He(t){U=t,b=1,k(1)}function Re(t){ie.forEach(e=>{const o=e.getAttribute("data-filter");if(o){const s=re[o];o===t?(e.classList.add("active"),e.style.backgroundColor=s.bg,e.style.color=s.text,e.style.borderColor=s.bg):(e.classList.remove("active"),e.style.backgroundColor="white",e.style.color="#374151",e.style.borderColor="#e5e7eb")}})}ie.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-filter");e&&(He(e),Re(e))}),t.addEventListener("mouseenter",()=>{if(!t.classList.contains("active")){const e=t.getAttribute("data-filter");if(e){const o=re[e];t.style.borderColor=o.bg}}}),t.addEventListener("mouseleave",()=>{t.classList.contains("active")||(t.style.borderColor="#e5e7eb")})});le.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-page");if(e){const o=parseInt(e);b=o,k(o)}})});V&&V.addEventListener("click",()=>{b>1&&(b--,k(b))});j&&j.addEventListener("click",()=>{const t=ce(),e=Math.ceil(t.length/R);b<e&&(b++,k(b))});document.addEventListener("DOMContentLoaded",()=>{k(1)});function Y(){const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting&&n.target.classList.add("revealed")})},t);document.querySelectorAll(".scroll-reveal").forEach(s=>e.observe(s))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();document.querySelectorAll(".directive-card").forEach(t=>{t.addEventListener("click",function(){const e=this.querySelector("h3").textContent.trim();console.log(`Usuario hizo clic en directivo: ${e}`)})});function Z(){const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("revealed")})},t);document.querySelectorAll(".scroll-reveal").forEach(n=>e.observe(n)),document.querySelector(".download-btn")?.addEventListener("click",function(){console.log("Descargando formato de admisión..."),this.innerHTML=`
        <svg class="w-5 h-5 animate-spin" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
        </svg>
        <span>Descargando...</span>
      `,setTimeout(()=>{this.innerHTML=`
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>¡Descargado!</span>
        `,setTimeout(()=>{this.innerHTML=`
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            <span>Descargar Formato</span>
          `},2e3)},2e3)}),document.querySelectorAll(".admission-card").forEach(n=>{n.addEventListener("click",function(){const i=this.querySelector("h3").textContent.trim();console.log(`Usuario interactuó con: ${i}`)})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z();export{fe as _};
