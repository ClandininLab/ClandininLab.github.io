/* ============================================================
   CLANDININ LAB SITE — behavior
   You rarely need to edit this file. See README.md for where things live:
     • people ........... data/people.js
     • publications ..... data/publications.js
     • page text ........ index.html
     • images / videos .. images/ and videos/
   ============================================================ */
/* ---------------- NAVIGATION: separate pages ---------------- */
const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('nav.links button');
function go(id){
  if(!document.getElementById(id)) return;
  pages.forEach(p=>p.classList.toggle('active', p.id===id));
  const parent={'energy':'research','behavior':'research','visual-computation':'research','neurodegeneration':'research'}[id]||id;
  navBtns.forEach(b=>b.classList.toggle('active', b.dataset.go===id || b.dataset.go===parent));
  document.querySelector('nav.links').classList.remove('show');
  window.scrollTo(0,0);
  history.replaceState(null,'','#'+id);
}
document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.go)));
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('nav.links').classList.toggle('show'));
window.addEventListener('load',()=>{const h=location.hash.replace('#','');if(h&&document.getElementById(h))go(h);});
document.getElementById('yr').textContent=new Date().getFullYear();

/* ---------------- COMPOUND-EYE FALLBACK (drawn until you add fly-eye.jpg) ---------------- */
(function(){
  const wrap=document.getElementById('ommatidia');
  const S=400, cx=S/2, cy=S/2, r=14, gap=1.6;
  const dx=r*1.732+gap, dy=r*1.5+gap;
  let cells='';
  for(let row=-9;row<=9;row++){
    for(let col=-9;col<=9;col++){
      const x=cx+col*dx+(row%2?dx/2:0);
      const y=cy+row*dy;
      const d=Math.hypot(x-cx,y-cy);
      if(d>S/2-16) continue;
      const t=d/(S/2);
      // gold center -> green edge, a few red ommatidia
      const isRed=Math.random()<0.05;
      const col1=isRed?'#b23a2e':`hsl(${70-t*18}, ${55-t*12}%, ${62-t*22}%)`;
      let pts='';
      for(let i=0;i<6;i++){const a=Math.PI/180*(60*i-30);pts+=`${(x+r*Math.cos(a)).toFixed(1)},${(y+r*Math.sin(a)).toFixed(1)} `;}
      cells+=`<polygon points="${pts}" fill="${col1}" stroke="#21211d" stroke-width="1.4"/>`;
    }
  }
  wrap.innerHTML=`<svg viewBox="0 0 ${S} ${S}" width="100%" height="100%">
    <defs><radialGradient id="glow" cx="50%" cy="42%" r="60%">
      <stop offset="0%" stop-color="#e8d8a0"/><stop offset="100%" stop-color="#cdbf8e"/>
    </radialGradient></defs>
    <circle cx="${cx}" cy="${cy}" r="${S/2-6}" fill="url(#glow)"/>
    ${cells}
  </svg>`;
})();

/* ---------------- PEOPLE (data lives in data/people.js) ---------------- */
const people=(window.LAB_PEOPLE||[]).map(p=>({g:p.group,name:p.name,role:p.role,img:p.photo,backup:p.photoBackup||"",bio:p.bio}));

function initials(n){return n.split(' ').slice(0,2).map(w=>w[0]).join('');}
function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
people.forEach((p,i)=>{
  const grid=document.querySelector(`.people-grid[data-group="${p.g}"]`);
  const card=document.createElement('div');
  card.className='person';
  // Photo loading: 1) p.img (images/people/...)  2) photoBackup  3) initials
  card.innerHTML=`
    <div class="photo">
      <img src="${p.img}" data-fallback="${p.backup}" alt="${p.name}" loading="lazy"
           onerror="if(this.dataset.fallback&&!this.dataset.tried){this.dataset.tried=1;this.src=this.dataset.fallback;}else{this.style.display='none';this.nextElementSibling.style.display='flex';}">
      <div class="ph-fallback" style="display:none">${initials(p.name)}</div>
    </div>
    <div class="body">
      <h4>${p.name}</h4>
      <div class="role">${p.role}</div>
      <div class="bio">${p.bio}</div>
      <button class="more">Read bio</button>
    </div>`;
  card.querySelector('.more').addEventListener('click',()=>card.classList.toggle('open'));
  grid.appendChild(card);
});

/* ---------------- TOOLS DATA + SKETCHES ---------------- */
/* Tools page media — replace the files in images/tools/ and videos/ to change them. */
const BIFROST_IMG="images/tools/bifrost-schematic.png";
const WBCI_VID="videos/whole-brain-loom-response.mp4";
const WBCI_POSTER="images/tools/whole-brain-loom-poster.jpg";
const tools=[
 {icon:ic(`<line x1="2" y1="16" x2="22" y2="16"/><line x1="6.5" y1="16" x2="6.5" y2="5.5"/><line x1="17.5" y1="16" x2="17.5" y2="5.5"/><path d="M6.5 6 Q12 12.5 17.5 6"/><path d="M2 10.5 Q4.2 7 6.5 6"/><path d="M17.5 6 Q19.8 7 22 10.5"/><line x1="9.5" y1="16" x2="9.5" y2="10.4"/><line x1="12" y1="16" x2="12" y2="11.3"/><line x1="14.5" y1="16" x2="14.5" y2="10.4"/><line x1="4" y1="19.5" x2="7" y2="19.5"/><line x1="10.5" y1="19.5" x2="13.5" y2="19.5"/><line x1="17" y1="19.5" x2="20" y2="19.5"/>`),name:'BIFROST',tagline:'BrIdge For Registering Over Statistical Templates',
  body:"BIFROST is a robust, generalizable image-registration pipeline that brings diverse imaging datasets of the Drosophila brain into a common coordinate space. It builds a statistically representative \"mean image\" template (the Functional Drosophila Atlas), then uses learned, deformable registration (SynthMorph / VoxelMorph) to align live two-photon functional volumes to fixed ex vivo atlases and connectomes — with ~5&nbsp;µm, cell-type-level precision, even across different microscopes and labs. The command line offers three steps: <b>build_template</b>, <b>register</b>, and <b>transform</b>.",
  enables:['Average activity maps across animals','Comparison in the same coordinate space','Register connectome data (EM) to functional imaging (2P)','Handles diverse imaging modalities: calcium, voltage, and anatomy'],
  link:'https://github.com/ClandininLab/bifrost',
  sketch:`<img src="${BIFROST_IMG}" alt="BIFROST alignment: three individual fly brains registered into a single mean brain" style="width:100%;display:block;border-radius:8px;"/>
    <div class="sketch-labels"><span>Individual fly brains</span><span>Registered mean brain</span></div>
    <div class="sketch-attr">Diagram: <a href="https://github.com/ClandininLab/bifrost" target="_blank" rel="noopener">ClandininLab/bifrost</a> on GitHub</div>`},
 {icon:ic(`<circle cx="12" cy="12" r="9"/><path d="M5 12 h3 l2-4 3 8 2-4 h4"/>`),name:'Whole-Brain Calcium Imaging',tagline:'Two-photon imaging of pan-neuronal activity across the entire brain',
  body:"Using genetically encoded calcium indicators (such as GCaMP) together with two-photon microscopy, we record neural activity across the whole Drosophila brain at once while the fly views controlled visual stimuli. This lets us watch circuits light up in real time and ask how activity is distributed and coordinated brain-wide. The movie below shows the brain's response to a looming stimulus \u2014 an expanding black dot that mimics an approaching threat \u2014 with brighter red marking higher activity.",
  sketch:`<video src="${WBCI_VID}" autoplay muted loop playsinline poster="${WBCI_POSTER}" style="width:100%;display:block;border-radius:8px;background:#000;"></video>
    <div class="sketch-labels"><span>Red = high activity</span><span>Black dot = looming stimulus</span></div>
    <div class="sketch-attr">Data generated by Ilana Zucker-Scharff</div>`},
 {icon:ic(`<path d="M13 2 L5 13 h6 l-1 9 9-12 h-6 z"/>`),name:'ASAP7',tagline:'Genetically encoded voltage imaging',
  body:"Calcium imaging is powerful, but calcium is a slow proxy for neural activity: a neuron can fire five action potentials in 10 milliseconds, and calcium imaging blurs them into a single slow hump — it can't tell you how many spikes fired, or exactly when. ASAP7 is a genetically encoded voltage indicator (GEVI), developed in close collaboration with the <a href='https://web.stanford.edu/group/lin_lab/' target='_blank' rel='noopener' style='color:#4d5727;text-decoration:underline;text-decoration-color:#bd8d2c;text-underline-offset:2px;'>Lin Lab at Stanford</a>. It sits in the neuronal membrane and senses voltage directly, flashing brighter or dimmer in sync with each individual action potential at millisecond precision. That lets us ask questions that were previously impossible: does a neuron fire a burst or a single spike? How precisely are spikes timed across a circuit? What is the exact latency between a visual stimulus and a neural response? ASAP7 is a major leap over earlier voltage indicators — it is positively tuned (brighter when neurons fire, so signals are easier to detect over background), fast enough for subcellular imaging, and bright enough for extended recordings without photobleaching.",
  sketch:`<img src="images/tools/hao-2026-asap7y-fig3.webp" alt="ASAP7y voltage imaging in a fly LPLC2 neuron: optic lobe anatomy, receptive-field mapping, the imaged neuron with six colored regions, and voltage traces from each region" loading="lazy" style="width:100%;display:block;border-radius:8px;background:#fff;"/>
    <div class="sketch-labels"><span>Map the neuron’s receptive field</span><span>Single-trial voltage from 6 spots on one neuron</span></div>
    <div class="sketch-attr">From <a href="https://doi.org/10.64898/2026.05.27.728040" target="_blank" rel="noopener">Hao et al., bioRxiv 2026</a>, Fig. 3</div>`},
 {icon:ic(`<circle cx="5" cy="5" r="1.8" fill="currentColor" stroke="none"/><circle cx="12" cy="5" r="1.8"/><circle cx="19" cy="5" r="1.8"/><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.8"/><circle cx="5" cy="19" r="1.8"/><circle cx="12" cy="19" r="1.8"/><circle cx="19" cy="19" r="1.8" fill="currentColor" stroke="none"/>`),name:'SPARC',tagline:'Sparse Predictive Activity through Recombinase Competition',
  body:"SPARC is an all-genetic toolkit, developed in the lab, that expresses any effector in a precise, predictable fraction of a genetically defined, post-mitotic cell population in Drosophila. It works by pitting two competing PhiC31 recombination sites against each other to remove (or retain) a stop cassette, and comes in Dense, Intermediate, and Sparse variants that set how many cells switch on. This makes it possible to image individual neurons in isolation or to drive optogenetics in just a handful of cells in vivo.",
  link:'https://www.nature.com/articles/s41593-020-0668-9',
  linkLabel:'Read the paper \u2197',
  sketch:`<img src="images/tools/isaacman-beck-2020-sparc-fig1.webp" alt="SPARC design schematic and fly optic lobes with T4/T5 neurons labeled densely, at intermediate density, and sparsely, with a plot of the percentage of labeled cells" loading="lazy" style="width:100%;display:block;border-radius:8px;background:#fff;"/>
    <div class="sketch-labels"><span>One genetic switch, three settings</span><span>Dense → intermediate → sparse labeling</span></div>
    <div class="sketch-attr">From <a href="https://doi.org/10.1101/788679" target="_blank" rel="noopener">Isaacman-Beck et al., bioRxiv 2019</a>, Fig. 1 (<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a>); published in <a href="https://www.nature.com/articles/s41593-020-0668-9" target="_blank" rel="noopener"><em>Nature Neuroscience</em> 2020</a></div>`},
 {icon:ic(`<circle cx="5" cy="19" r="1.6" fill="currentColor" stroke="none"/><path d="M5 13.5 a5.5 5.5 0 0 1 5.5 5.5"/><path d="M5 8.5 a10.5 10.5 0 0 1 10.5 10.5"/><path d="M5 3.5 a15.5 15.5 0 0 1 15.5 15.5"/>`),name:'stimpack',tagline:'Precise, flexible stimulus delivery for neuroscience experiments',
  body:"stimpack is the lab's modern framework for generating and delivering precisely-timed sensory stimuli during experiments. It coordinates visual displays and other devices from a single experiment description, so the same protocol can run reproducibly across rigs. It's the successor to <b>flystim</b> and underpins much of the lab's behavioral and imaging work.",
  link:'https://github.com/ClandininLab/stimpack',
  sketch:`<svg viewBox="0 0 360 220" width="100%">${grad()}
    <rect x="18" y="80" width="92" height="56" rx="8" fill="#4d5727"/>
    <text x="64" y="104" text-anchor="middle" font-size="11" fill="#f6f2e8" font-family="Source Serif 4">protocol</text>
    <text x="64" y="120" text-anchor="middle" font-size="9" fill="#dcd2b6" font-family="Spline Sans">timing · params</text>
    <path d="M112 108 H156" stroke="#bd8d2c" stroke-width="2.5" marker-end="url(#ar)"/>
    <circle cx="200" cy="108" r="34" fill="none" stroke="#21211d" stroke-width="2"/>
    <circle cx="200" cy="108" r="34" fill="#e7ddc6" opacity=".5"/>
    <path d="M170 108 a30 30 0 0 1 60 0" stroke="#6f7d3a" stroke-width="6" fill="none"/>
    <text x="200" y="160" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">wrap-around display</text>
    <path d="M236 108 H276" stroke="#bd8d2c" stroke-width="2.5" marker-end="url(#ar)"/>
    ${fly(312,108)}
    <text x="312" y="160" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">tethered fly</text>
  </svg>`},
 {icon:ic(`<rect x="3" y="5" width="18" height="14" rx="2"/><line x1="8" y1="6.5" x2="8" y2="17.5"/><line x1="12" y1="6.5" x2="12" y2="17.5"/><line x1="16" y1="6.5" x2="16" y2="17.5"/>`),name:'flystim',tagline:'Visual stimulus generator for neuroscience experiments',
  body:"flystim is the lab's original visual-stimulus engine: it renders controlled visual worlds — moving edges, gratings, polarized-light patterns, and richer scenes — onto screens surrounding a fly so that responses can be measured behaviorally or with imaging. Much of its functionality now lives within stimpack.",
  link:'https://github.com/ClandininLab/flystim',
  sketch:`<svg viewBox="0 0 360 220" width="100%">${grad()}
    <text x="180" y="22" text-anchor="middle" font-size="11" fill="#4d5727" font-family="Spline Sans">rendered visual world</text>
    <rect x="40" y="40" width="280" height="92" rx="10" fill="#e7ddc6" stroke="#21211d"/>
    ${[0,1,2,3,4,5].map(i=>`<rect x="${52+i*44}" y="48" width="22" height="76" fill="${i%2?'#6f7d3a':'#dcd2b6'}"/>`).join('')}
    <path d="M180 140 V164" stroke="#bd8d2c" stroke-width="2.5" marker-end="url(#ar)"/>
    ${fly(180,188)}
    <path d="M150 188 q-12 -10 0 -20" stroke="#b23a2e" stroke-width="2" fill="none"/>
    <path d="M210 188 q12 -10 0 -20" stroke="#b23a2e" stroke-width="2" fill="none"/>
  </svg>`},
 {icon:ic(`<path d="M12 3 L4 8 L12 13 L20 8 Z"/><path d="M4 12 L12 17 L20 12"/><path d="M4 16 L12 21 L20 16"/>`),name:'brainsss',tagline:'Preprocessing of volumetric neural data',
  body:"brainsss is a pipeline for preprocessing large volumetric imaging datasets on Stanford's Sherlock cluster — handling motion correction, z-scoring, and other clean-up steps that turn raw microscope volumes into analysis-ready data, with distributed execution for big datasets.",
  link:'https://github.com/ClandininLab/brainsss',
  sketch:`<img src="images/tools/brezovec-2024-fig1a-pipeline.webp" alt="Pipeline: a walking fly is imaged under a two-photon microscope, its brain scans are aligned to the Functional Drosophila Atlas, producing topographic maps, temporal trajectories and connectomic models" loading="lazy" style="width:100%;display:block;border-radius:8px;background:#fff;"/>
    <img src="images/tools/brezovec-2024-fig1e-brain-map.webp" alt="Whole fly brain viewed in three planes, colored by how each region's activity tracks forward and turning velocity" loading="lazy" style="width:100%;display:block;border-radius:8px;margin-top:.6rem;"/>
    <div class="sketch-labels"><span>Raw scans → common brain atlas</span><span>Brain-wide map of walking signals</span></div>
    <div class="sketch-attr">From <a href="https://doi.org/10.1016/j.cub.2023.12.063" target="_blank" rel="noopener">Brezovec et al., <em>Current Biology</em> 2024</a>, Fig. 1A, E</div>`},
 {icon:ic(`<path d="M3 16.5 V15 a9 9 0 0 1 18 0 v1.5"/><line x1="2.5" y1="16.5" x2="21.5" y2="16.5"/><line x1="8" y1="16.5" x2="8" y2="11"/><line x1="12" y1="16.5" x2="12" y2="9"/><line x1="16" y1="16.5" x2="16" y2="11"/><line x1="3.5" y1="20.5" x2="20.5" y2="20.5"/>`),name:'brukerbridge',tagline:'Automated handoff from the two-photon microscope',
  body:"brukerbridge automates moving and converting data off Bruker two-photon microscopes — transferring raw acquisitions into the lab's storage and converting them into standard formats so downstream pipelines like brainsss and BIFROST can pick them up without manual shuffling.",
  link:'https://github.com/ClandininLab/brukerbridge',
  sketch:`<svg viewBox="0 0 360 220" width="100%">${grad()}
    <rect x="20" y="84" width="80" height="62" rx="8" fill="#e7ddc6" stroke="#21211d"/>
    <circle cx="60" cy="108" r="14" fill="none" stroke="#2f5d59" stroke-width="3"/>
    <rect x="54" y="120" width="12" height="20" fill="#6f7d3a"/>
    <text x="60" y="170" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">2-photon scope</text>
    <path d="M104 115 H150" stroke="#bd8d2c" stroke-width="2.5" marker-end="url(#ar)"/>
    <rect x="150" y="90" width="76" height="50" rx="8" fill="#4d5727"/>
    <text x="188" y="112" text-anchor="middle" font-size="10" fill="#f6f2e8" font-family="Spline Sans">transfer</text>
    <text x="188" y="126" text-anchor="middle" font-size="10" fill="#f6f2e8" font-family="Spline Sans">+ convert</text>
    <path d="M228 115 H274" stroke="#bd8d2c" stroke-width="2.5" marker-end="url(#ar)"/>
    <path d="M300 90 h34 v50 h-34 z M300 90 a17 8 0 0 0 34 0" fill="#e7ddc6" stroke="#21211d"/>
    <text x="317" y="170" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">storage + pipeline</text>
  </svg>`},
 {icon:ic(`<path d="M4 4 V20 H20"/><polyline points="7 15 11 10 14 13 19 6"/>`),name:'visanalysis',tagline:'Analysis of imaging experiments',
  body:"visanalysis provides a common framework for analyzing imaging experiments — organizing acquisitions, extracting regions of interest, and relating neural responses to the delivered stimuli, so results stay consistent across people and projects.",
  link:'https://github.com/ClandininLab/visanalysis',
  sketch:`<svg viewBox="0 0 360 220" width="100%">${grad()}
    <rect x="24" y="74" width="96" height="84" rx="8" fill="#e7ddc6" stroke="#21211d"/>
    ${[0,1,2].map(r=>[0,1,2].map(c=>`<circle cx="${44+c*24}" cy="${94+r*24}" r="7" fill="${(r+c)%2?'#6f7d3a':'#dcd2b6'}" stroke="#21211d"/>`).join('')).join('')}
    <text x="72" y="176" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">ROIs</text>
    <path d="M124 116 H162" stroke="#bd8d2c" stroke-width="2.5" marker-end="url(#ar)"/>
    <rect x="164" y="78" width="174" height="76" rx="8" fill="#e7ddc6" stroke="#21211d"/>
    <line x1="176" y1="142" x2="328" y2="142" stroke="#21211d"/>
    <path d="M176 138 q18 -44 40 -8 q14 22 34 -20 q16 30 40 4 q14 -12 38 -16" stroke="#b23a2e" stroke-width="2.4" fill="none"/>
    <text x="251" y="172" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">response vs. stimulus</text>
  </svg>`}
];

function grad(){return `<defs>
  <marker id="ar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
    <path d="M0 0 L6 3 L0 6 z" fill="#bd8d2c"/></marker></defs>`;}
function ic(inner){return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;}
function sparcPanel(x,label,lit){let c='';for(let i=0;i<16;i++){const r=Math.floor(i/4),col=i%4,on=lit.includes(i);c+=`<circle cx="${x+18+col*18}" cy="${64+r*18}" r="6" fill="${on?'#d9ad4c':'#f6f2e8'}" stroke="#21211d" stroke-width="1.2"/>`;}return `<rect x="${x}" y="46" width="86" height="92" rx="8" fill="#efe8d7" stroke="#21211d"/>${c}<text x="${x+43}" y="156" text-anchor="middle" font-size="10" fill="#21211d" font-family="Spline Sans">${label}</text>`;}
function brain(cx,cy,c){return `<path d="M${cx-22} ${cy} q-4 -16 12 -16 q4 -10 16 -4 q12 -6 14 6 q12 2 6 14 q4 12 -10 12 q-6 10 -18 2 q-14 6 -16 -8 q-12 -4 -4 -18z" fill="${c}" opacity=".85" stroke="#21211d"/>`;}
function fly(cx,cy){return `<g>
  <ellipse cx="${cx}" cy="${cy+10}" rx="9" ry="16" fill="#21211d"/>
  <ellipse cx="${cx-14}" cy="${cy-2}" rx="16" ry="7" fill="#efe8d7" stroke="#21211d" transform="rotate(-24 ${cx-14} ${cy-2})"/>
  <ellipse cx="${cx+14}" cy="${cy-2}" rx="16" ry="7" fill="#efe8d7" stroke="#21211d" transform="rotate(24 ${cx+14} ${cy-2})"/>
  <circle cx="${cx}" cy="${cy-12}" r="8" fill="#bd8d2c"/>
  <circle cx="${cx-4}" cy="${cy-14}" r="2.4" fill="#b23a2e"/><circle cx="${cx+4}" cy="${cy-14}" r="2.4" fill="#b23a2e"/>
</g>`;}

const navEl=document.getElementById('toolNav');
const detEl=document.getElementById('toolDetail');
const toolCats=[
  {label:'Calcium Imaging', note:'whole brain & single neurons', color:'#6f7d3a', names:['Whole-Brain Calcium Imaging']},
  {label:'Voltage Imaging', note:'ASAP7', color:'#bd8d2c', names:['ASAP7']},
  {label:'Genetic Tools', note:'SPARC', color:'#7a4a6b', names:['SPARC']},
  {label:'Computational & Software', note:'registration, preprocessing & analysis', color:'#3b6ea5', names:['BIFROST','brainsss','brukerbridge','visanalysis']},
  {label:'Stimulus Delivery', note:'visual stimulation', color:'#b23a2e', names:['stimpack','flystim']},
];
function toolPanel(t){
  const enables=t.enables?`<p class="enables-head">What this enables</p><ul class="enables">${t.enables.map(e=>`<li>${e}</li>`).join('')}</ul>`:'';
  const link=t.link?`<a class="tool-link" href="${t.link}" target="_blank" rel="noopener">${t.linkLabel||'View on GitHub \u2197'}</a>`:'';
  const el=document.createElement('div');
  el.className='tpanel'; el.dataset.name=t.name;
  el.innerHTML=`
    <div class="tpanel-head"><span class="tpanel-ic">${t.icon}</span><div><h3>${t.name}</h3><span class="tpanel-tag">${t.tagline}</span></div></div>
    <div class="sketch">${t.sketch}</div>
    <div class="sketch-cap">What ${t.name} does</div>
    <p>${t.body}</p>
    ${enables}${link}`;
  return el;
}
const tnavItems=[];
toolCats.forEach(cat=>{
  const head=document.createElement('div');
  head.className='tnav-cat'; head.style.setProperty('--cat',cat.color);
  head.innerHTML=`<span>${cat.label}</span>${cat.note?`<span class="tnav-note">${cat.note}</span>`:''}`;
  navEl.appendChild(head);
  cat.names.forEach(nm=>{
    const t=tools.find(x=>x.name===nm); if(!t) return;
    const btn=document.createElement('button');
    btn.className='tnav-item'; btn.type='button'; btn.dataset.name=t.name; btn.style.setProperty('--cat',cat.color);
    btn.innerHTML=`<span class="tnav-name">${t.name}</span><span class="tnav-tag">${t.tagline}</span>`;
    navEl.appendChild(btn); tnavItems.push(btn);
    const pan=toolPanel(t); pan.style.setProperty('--cat',cat.color); detEl.appendChild(pan);
  });
});
const tpanels=[...detEl.querySelectorAll('.tpanel')];
/* On phones/narrow screens the list becomes an accordion: the open tool's
   panel sits directly under its button. On wide screens panels live in the
   detail column beside the list. */
const narrowTools=window.matchMedia('(max-width: 880px)');
let activeToolName=null;
function placeToolPanels(){
  tpanels.forEach(pn=>{
    const btn=tnavItems.find(b=>b.dataset.name===pn.dataset.name);
    if(narrowTools.matches){ if(btn && btn.nextSibling!==pn) btn.after(pn); }
    else if(pn.parentElement!==detEl){ detEl.appendChild(pn); }
  });
  if(!narrowTools.matches) tpanels.forEach(pn=>detEl.appendChild(pn)); // keep original order
}
function activateTool(name){
  activeToolName=name;
  tnavItems.forEach(b=>{const on=b.dataset.name===name; b.classList.toggle('active',on); b.setAttribute('aria-expanded',on);});
  tpanels.forEach(pn=>pn.classList.toggle('active', pn.dataset.name===name));
}
tnavItems.forEach(b=>{
  b.addEventListener('mouseenter',()=>{ if(!narrowTools.matches) activateTool(b.dataset.name); });
  b.addEventListener('focus',()=>{ if(!narrowTools.matches) activateTool(b.dataset.name); });
  b.addEventListener('click',()=>{
    if(narrowTools.matches && activeToolName===b.dataset.name){ // tap again to close
      activeToolName=null; b.classList.remove('active'); b.setAttribute('aria-expanded',false);
      tpanels.forEach(pn=>pn.classList.remove('active')); return;
    }
    activateTool(b.dataset.name);
    if(narrowTools.matches) b.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
placeToolPanels();
(narrowTools.addEventListener?narrowTools.addEventListener('change',placeToolPanels):narrowTools.addListener(placeToolPanels));
if(tnavItems[0]) activateTool(tnavItems[0].dataset.name);

/* ---------------- PUBLICATIONS ---------------- */
const pubCatColors=window.LAB_PUB_CATEGORIES||{};
const pubCatOrder=Object.keys(pubCatColors);
const pubs=(window.LAB_PUBLICATIONS||[]).map(p=>({c:p.citation,u:p.link,cat:p.categories}));
(function(){
  const fbar=document.getElementById('pubFilters');
  const list=document.getElementById('pubList');
  if(!fbar||!list) return;
  let active='All';
  function pill(label,color){
    const b=document.createElement('button');
    b.className='pub-filter'; b.dataset.cat=label;
    b.innerHTML=(color?`<span class="dot" style="background:${color}"></span>`:'')+label;
    b.addEventListener('click',()=>{active=label;paint();render();});
    return b;
  }
  fbar.appendChild(pill('All',''));
  pubCatOrder.forEach(c=>fbar.appendChild(pill(c,pubCatColors[c])));
  function paint(){
    fbar.querySelectorAll('.pub-filter').forEach(b=>{
      const on=b.dataset.cat===active;
      b.classList.toggle('active',on);
      b.style.background= on ? (b.dataset.cat==='All'?'#4d5727':pubCatColors[b.dataset.cat]) : '';
      b.style.color= on ? '#f6f2e8' : '';
      b.style.borderColor= on ? 'transparent' : '';
    });
  }
  // Search box: matches any words in the citation (authors, title, journal, year)
  const search=document.getElementById('pubSearch');
  const countEl=document.getElementById('pubCount');
  let query='';
  if(search) search.addEventListener('input',()=>{query=search.value.trim().toLowerCase();render();});
  const yearOf=p=>{const m=p.c.match(/\((\d{4})\)/);return m?m[1]:'Other';};
  const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  function highlight(text){
    if(!query) return text;
    let out=text;
    query.split(/\s+/).filter(Boolean).forEach(w=>{out=out.replace(new RegExp('('+esc(w)+')','ig'),'<mark>$1</mark>');});
    return out;
  }
  function render(){
    list.innerHTML='';
    const words=query.split(/\s+/).filter(Boolean);
    const shown=pubs.filter(p=>(active==='All'||p.cat.includes(active)) && words.every(w=>p.c.toLowerCase().includes(w)));
    // newest year first; keep the data file's order within a year
    const years=[...new Set(shown.map(yearOf))].sort((a,b)=>b.localeCompare(a));
    years.forEach(y=>{
      const group=shown.filter(p=>yearOf(p)===y);
      const h=document.createElement('li'); h.className='pub-year';
      h.innerHTML=`<span>${y}</span><span class="pub-year-n">${group.length} ${group.length===1?'paper':'papers'}</span>`;
      list.appendChild(h);
      group.forEach(p=>{
        const li=document.createElement('li');
        li.style.borderLeftColor=pubCatColors[p.cat[0]]||'';
        const c=highlight(p.c);
        const cite = p.u ? `<a href="${p.u}" target="_blank" rel="noopener">${c}</a>` : c;
        const tags=p.cat.map(c=>`<span class="pub-tag" style="background:${pubCatColors[c]}">${c}</span>`).join('');
        li.innerHTML=cite+`<div class="pub-tags">${tags}</div>`;
        list.appendChild(li);
      });
    });
    if(countEl){
      const filtered = active!=='All' || words.length;
      countEl.textContent = shown.length
        ? (filtered ? `Showing ${shown.length} of ${pubs.length} papers` : `${pubs.length} papers`)
        : 'No papers match — try a different word or category.';
    }
  }
  paint(); render();
})();

/* ---------------- OUTREACH ---------------- */
const outreach=[
 {cat:'Ongoing Programs', icon:ic(`<path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19l1-4.2A7.5 7.5 0 1 1 20 11.5z"/><line x1="8.5" y1="10.5" x2="15.5" y2="10.5"/><line x1="8.5" y1="13.5" x2="13" y2="13.5"/>`),
  title:'Research In Progress (RIPS)', meta:'Run by Chung-Ha Davis',
  body:`<p>RIPS are low-pressure, casual talks where members of the Neurobiology department can learn more about other neuroscience trainees and their current research, research struggles, and research plans. It's a great opportunity to practice talking about your research and to network with and get feedback from a supportive group of scientists.</p><p>It's also a great way for new folks in the department to meet more people \u2014 for example, we'd love to hear about a new postdoc's graduate work.</p><p class="oc-note">Please share this with other lab members and encourage them to sign up.</p>`,
  action:{label:'Email to sign up', href:'mailto:chungha@stanford.edu?subject=RIPS%20sign-up'}},
 {cat:'Ongoing Programs', icon:ic(`<rect x="9.4" y="2.5" width="5.2" height="10" rx="2.6"/><path d="M6 11.5 a6 6 0 0 0 12 0"/><line x1="12" y1="17.5" x2="12" y2="21"/><line x1="8.8" y1="21" x2="15.2" y2="21"/>`),
  title:'Growing Up In Science (GUIS)', meta:'Hosted by Tom Clandinin \u00b7 run by Tim Currier, Mikaela Wilson, David Tadres &amp; Janina Troper',
  body:`<p>In most sessions, one faculty member shares the personal side of their individual journey through academia; occasionally, PhD-holding speakers from outside the academic research environment also speak. The stories focus on the struggles, doubts, weaknesses, and failures we all face as young scientists.</p><p>GUIS aims to normalize discussing these personal and interpersonal challenges, and supporting one another through them. There is little to no discussion of the speaker's research.</p><p>Sessions are intended for current academic trainees \u2014 undergraduates, post-bac technicians, graduate students, postdocs, lab managers, and other in-training research support staff.</p>`,
  action:{label:'View the event series \u2197', href:'https://events.stanford.edu/event/growing_up_in_science'}},
 {cat:'Ongoing Programs', icon:ic(`<path d="M12 21V10"/><path d="M12 12C9 12 6.5 9.5 6.5 6C10 6 12 8.5 12 12z"/><path d="M12 13.5C15 13.5 17.5 11 17.5 7.5C14 7.5 12 10 12 13.5z"/>`),
  title:'BioBUDs', meta:'Run in part by Mikaela Wilson',
  body:`<p>BioBUDs is a student-centered, community-focused program that connects undergraduates \u2014 especially those from first-generation, low-income (FLI) and historically excluded backgrounds \u2014 to the resources, skills, and mentors of the biosciences.</p><p>Meaningful teaching and pedagogy training are flagship experiences for academic trainees, yet many institutions, Stanford included, give graduate students few chances to build that toolkit. BioBUDs creates a professional, collegial community across disciplines where trainees grow as educators through research mentorship and classroom teaching.</p><p>In Spring, the program pairs graduate and postdoc mentors with undergraduate mentees for an internship focused on mentorship and an introduction to research; mentors and mentees are trained together to evaluate progress, support learning, and encourage scientific growth. In Fall and Winter, BioBUDs runs interactive pedagogy workshops where graduate students develop their teaching approaches and put them into practice, designing and delivering lesson plans with provided classroom materials to encourage creative, interactive teaching.</p>`,
  action:{label:'Visit BioBUDs \u2197', href:'https://biobuds.stanford.edu/'}},
 {cat:'Past Events', icon:ic(`<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><circle cx="8" cy="8" r=".7" fill="currentColor"/><circle cx="15.6" cy="8.8" r=".7" fill="currentColor"/><circle cx="9" cy="16" r=".7" fill="currentColor"/>`),
  title:"Ben's Bagels", meta:'In memory of Ben Barres',
  body:`<p>Ben's Bagels is a Neurobiology department gathering that brings people together over bagels, held in memory of Ben Barres \u2014 a beloved Stanford neurobiologist and a tireless advocate for trainees and for equity in science. It is a standing invitation to step away from the bench, share a bagel, and connect as a community.</p>`,
  action:{label:'Read about Ben Barres \u2197', href:'https://www.cell.com/neuron/fulltext/S0896-6273(18)30182-X'}},
];
(function(){
  const ol=document.getElementById('outreachList');
  if(!ol) return;
  let firstO=null;
  ['Ongoing Programs','Past Events'].forEach(cat=>{
    const items=outreach.filter(o=>o.cat===cat);
    if(!items.length) return;
    const h=document.createElement('div'); h.className='tool-cat';
    h.innerHTML=`<h3>${cat}</h3><span class="line"></span>`;
    ol.appendChild(h);
    items.forEach(o=>{
      const el=document.createElement('div'); el.className='tool';
      const ext=o.action && o.action.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      el.innerHTML=`
        <div class="tool-head">
          <div class="tg">${o.icon}</div>
          <div class="ti"><b>${o.title}</b><span>${o.meta}</span></div>
          <div class="chev">\u2304</div>
        </div>
        <div class="tool-body"><div class="outreach-inner">
          ${o.body}
          ${o.action?`<a class="btn" href="${o.action.href}"${ext}>${o.action.label}</a>`:''}
        </div></div>`;
      el.querySelector('.tool-head').addEventListener('click',()=>el.classList.toggle('open'));
      if(!firstO) firstO=el;
      ol.appendChild(el);
    });
  });
  if(firstO) firstO.classList.add('open');
})();

/* ---------------- ECLOSION: click the big fly on the Home page to play ----------------
   ✏️ To point at a different copy of the game, change ECLOSION_URL. */
const ECLOSION_URL='https://elegant-cucurucho-1290c9.netlify.app/';
(function(){
  const door=document.getElementById('labLogo'), hint=document.getElementById('gameHint'),
        ov=document.getElementById('gameOverlay'), frame=document.getElementById('gameFrame'),
        close=document.getElementById('gameClose'), newtab=document.getElementById('gameNewTab');
  if(!door||!ov) return;
  newtab.href=ECLOSION_URL;
  let lastFocus=null;
  function open(){
    lastFocus=document.activeElement;
    if(frame.getAttribute('src')!==ECLOSION_URL) frame.setAttribute('src',ECLOSION_URL);
    ov.hidden=false; document.body.style.overflow='hidden';
    setTimeout(()=>{ try{frame.focus(); frame.contentWindow.focus();}catch(e){} },150);
  }
  function shut(){
    ov.hidden=true; document.body.style.overflow='';
    frame.removeAttribute('src');              // stop the game (and its sound) when closed
    if(lastFocus) try{lastFocus.focus();}catch(e){}
  }
  door.addEventListener('click',open);
  door.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();open();} });
  if(hint) hint.addEventListener('click',open);
  close.addEventListener('click',shut);
  ov.addEventListener('click',e=>{ if(e.target===ov) shut(); });
  addEventListener('keydown',e=>{ if(e.key==='Escape' && !ov.hidden) shut(); });
})();

/* ---------------- HIGHLIGHTS: hover to reveal detail ---------------- */
(function(){
  const items=[...document.querySelectorAll('.hl-item')];
  const panels=[...document.querySelectorAll('.hl-panel')];
  if(!items.length) return;
  function activate(i){
    items.forEach(el=>{const on=+el.dataset.i===i; el.classList.toggle('active',on); el.setAttribute('aria-selected',on?'true':'false');});
    panels.forEach(el=>el.classList.toggle('active',+el.dataset.i===i));
  }
  items.forEach(el=>{
    const i=+el.dataset.i;
    el.addEventListener('mouseenter',()=>activate(i));
    el.addEventListener('focus',()=>activate(i));
    el.addEventListener('click',()=>activate(i));
    el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(i);} });
  });
})();

/* ---------------- RESEARCH-PAGE VIDEO: play only while visible ---------------- */
(function(){
  const v=document.querySelector('.rfig .rvid');
  if(!v) return;
  const play=()=>{const p=v.play(); if(p&&p.catch) p.catch(()=>{});};
  if('IntersectionObserver' in window){
    new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) play(); else v.pause(); }),{threshold:.25}).observe(v);
  } else play();
})();

/* ---------------- ROLLING BALL: drag the sphere of characters ---------------- */
(function(){
  const orb=document.getElementById('fbOrb'), cv=document.getElementById('fbCanvas');
  if(!orb||!cv) return;
  const ctx=cv.getContext('2d');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* single characters for things you meet while travelling:
     mountain, tree, water, river, cloud, rain, stone, flower, grass, wood,
     sun, moon, star, wind, sea, lake, bridge, road, gate, field, bird, fish,
     insect, city, temple, boat, snow, sand, valley, spring, island, bamboo,
     pine, fire, earth, sky, forest, road/way, rock, dew */
  const GLYPHS='山树水河云雨石花草木日月星风海湖桥路门田鸟鱼虫城寺舟雪沙谷泉岛竹松火土天林道岩露'.split('');

  // points spread evenly over a unit sphere (Fibonacci lattice)
  const N=96, pts=[], gi=[];
  for(let i=0;i<N;i++){
    const y=1-(i/(N-1))*2, r=Math.sqrt(Math.max(0,1-y*y)), th=i*2.399963229728653;
    pts.push([Math.cos(th)*r, y, Math.sin(th)*r]);
    gi.push(i%GLYPHS.length);
  }

  /* ---- pre-render each character once, with a porous, hand-inked texture ---- */
  const SP=76, sprites=[];
  function noiseAt(g,gs,x,y){                    // smooth low-res value noise
    const fx=x*(gs-1), fy=y*(gs-1);
    const x0=Math.floor(fx), y0=Math.floor(fy), tx=fx-x0, ty=fy-y0;
    const x1=Math.min(x0+1,gs-1), y1=Math.min(y0+1,gs-1);
    const a=g[y0*gs+x0], b=g[y0*gs+x1], c=g[y1*gs+x0], d=g[y1*gs+x1];
    return (a*(1-tx)+b*tx)*(1-ty)+(c*(1-tx)+d*tx)*ty;
  }
  function buildSprites(){
    sprites.length=0;
    for(let k=0;k<GLYPHS.length;k++){
      const c=document.createElement('canvas'); c.width=c.height=SP;
      const x=c.getContext('2d');
      x.font='600 '+Math.round(SP*0.82)+'px "Ma Shan Zheng", "Songti SC", "SimSun", serif';
      x.textAlign='center'; x.textBaseline='middle';
      x.fillStyle='#3a3320';
      x.fillText(GLYPHS[k], SP/2, SP/2+SP*0.03);
      // porous erosion: clustered noise + scattered pinholes
      const im=x.getImageData(0,0,SP,SP), d=im.data;
      const gs=14, g=new Float32Array(gs*gs);
      for(let i=0;i<g.length;i++) g[i]=Math.random();
      for(let py=0;py<SP;py++) for(let px=0;px<SP;px++){
        const o=(py*SP+px)*4;
        if(d[o+3]===0) continue;
        const n=noiseAt(g,gs,px/SP,py/SP);
        let a=d[o+3]*(0.45+0.75*n);               // uneven ink density
        if(Math.random()<0.20) a*=Math.random()*0.5;   // pinholes / styrofoam pores
        d[o+3]=Math.max(0,Math.min(255,a));
      }
      x.putImageData(im,0,0);
      sprites.push(c);
    }
  }
  if(document.fonts && document.fonts.load){
    document.fonts.load('600 40px "Ma Shan Zheng"','山树水').then(buildSprites).catch(buildSprites);
  } else buildSprites();

  // rotation matrix (row-major), starts as identity
  let M=[1,0,0, 0,1,0, 0,0,1];
  function mul(A,B){
    const C=new Array(9);
    for(let r=0;r<3;r++) for(let c=0;c<3;c++)
      C[r*3+c]=A[r*3]*B[c]+A[r*3+1]*B[3+c]+A[r*3+2]*B[6+c];
    return C;
  }
  function rotate(ax,ay){
    const ca=Math.cos(ay), sa=Math.sin(ay), cb=Math.cos(ax), sb=Math.sin(ax);
    const Ry=[ca,0,sa, 0,1,0, -sa,0,ca], Rx=[1,0,0, 0,cb,-sb, 0,sb,cb];
    M=mul(mul(Rx,Ry),M);
  }

  let vx=0, vy=0, dragging=false, lastX=0, lastY=0, idle=true, W=0,H=0,R=0,dpr=1;
  function size(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    W=orb.clientWidth; H=orb.clientHeight; R=W/2;
    cv.width=W*dpr; cv.height=H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  size(); window.addEventListener('resize',size);
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>{es.forEach(e=>{ if(e.isIntersecting){ orb.classList.add('icons-in'); io.disconnect(); }});},{threshold:.35});
    io.observe(orb);
  } else orb.classList.add('icons-in');

  function pos(e){ const t=e.touches?e.touches[0]:e; return {x:t.clientX,y:t.clientY}; }
  function down(e){ dragging=true; idle=false; orb.classList.add('dragging'); const p=pos(e); lastX=p.x; lastY=p.y; vx=vy=0; }
  function move(e){
    if(!dragging) return;
    const p=pos(e), dx=p.x-lastX, dy=p.y-lastY;
    lastX=p.x; lastY=p.y;
    vy=dx/R; vx=dy/R;
    rotate(vx,vy);
    if(e.cancelable && Math.abs(dx)>Math.abs(dy)) e.preventDefault();
  }
  function up(){ dragging=false; orb.classList.remove('dragging'); }
  cv.addEventListener('mousedown',down);
  window.addEventListener('mousemove',move);
  window.addEventListener('mouseup',up);
  cv.addEventListener('touchstart',down,{passive:true});
  cv.addEventListener('touchmove',move,{passive:false});
  window.addEventListener('touchend',up);

  function frame(){
    if(orb.offsetParent!==null && sprites.length){
      if(!dragging){
        vx*=0.955; vy*=0.955;
        if(Math.abs(vx)<0.0004 && Math.abs(vy)<0.0004){ vx=0; vy=0; idle=true; }
        if(idle && !reduce) rotate(0, 0.0016);
        else if(vx||vy) rotate(vx,vy);
      }
      ctx.clearRect(0,0,W,H);
      const cx=W/2, cy=H;
      ctx.save();
      ctx.beginPath();                              // clip to the dome outline
      ctx.arc(cx,cy,R,Math.PI,Math.PI*2);
      ctx.closePath();
      ctx.clip();
      const base=R*0.30;
      const order=[];
      for(let i=0;i<N;i++){
        const p=pts[i];
        const z=M[6]*p[0]+M[7]*p[1]+M[8]*p[2];
        if(z<=0.02) continue;
        order.push([z,i]);
      }
      order.sort((a,b)=>a[0]-b[0]);                 // far ones first
      for(let k=0;k<order.length;k++){
        const z=order[k][0], i=order[k][1], p=pts[i];
        const x=M[0]*p[0]+M[1]*p[1]+M[2]*p[2];
        const y=M[3]*p[0]+M[4]*p[1]+M[5]*p[2];
        const sx=cx+x*R, sy=cy-y*R;
        const d=base*(0.42+0.62*z);
        ctx.globalAlpha=Math.min(1,0.10+0.95*z);
        const sp=sprites[gi[i]];
        ctx.drawImage(sp, sx-d/2, sy-d/2, d, d);
      }
      ctx.globalAlpha=1;
      ctx.restore();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ---------------- INTERACTIVE EYE-TREE (p5.js) ---------------- */
(function(){
  const host=document.getElementById('eyeTreeCanvas');
  if(!host || typeof p5==='undefined') return;
  const fill=document.getElementById('eyeTrackFill');
  const states=document.querySelectorAll('#eyeInfo .eye-state');
  let curState='';
  function setState(s){
    if(s===curState) return; curState=s;
    states.forEach(el=>el.classList.toggle('active', el.dataset.state===s));
  }
  function branch(p,h,level,angle,ne){
    const hue=p.constrain(p.map(level,0,8,212,2),0,360); // lobula blue (base) -> eye red (tips)
    const sat=82*(1-0.5*ne);                             // desaturate as it becomes a neuron
    const bright=Math.min(100,62+level*5);
    p.stroke(hue,sat,bright);
    p.strokeWeight(Math.max(0.6,2.4-level*0.22));
    h*=0.66;
    if(h>2){
      p.push(); p.rotate(angle);  p.line(0,0,0,-h); p.translate(0,-h); branch(p,h,level+1,angle,ne); p.pop();
      p.push(); p.rotate(-angle); p.line(0,0,0,-h); p.translate(0,-h); branch(p,h,level+1,angle,ne); p.pop();
    }
  }
  // one half of the tree: the first big branch + its sub-arbor (becomes a neuron's dendrites)
  function halfArbor(p,bx,by,sign,angle,ne){
    p.push();
    p.translate(bx,by);
    p.rotate(sign*angle);
    p.stroke(212,82*(1-0.5*ne),62); p.strokeWeight(2.4);
    p.line(0,0,0,-79.2); p.translate(0,-79.2);
    branch(p,79.2,1,angle,ne);
    p.pop();
  }
  function drawSoma(p,x,y,a){
    p.noStroke();
    p.fill(40,28,86,a); p.ellipse(x,y,40,33);   // soma / cell body
    p.fill(250,42,72,a); p.ellipse(x,y,20,18);  // nucleus
    p.fill(250,55,52,a); p.ellipse(x,y,7,7);    // nucleolus
  }
  function axonEnergy(p,x0,y0,x1,y1,a,phase){
    const ang=p.atan2(y1-y0,x1-x0);
    for(let m=0;m<2;m++){
      const mt=0.42+0.32*m, mx=p.lerp(x0,x1,mt), my=p.lerp(y0,y1,mt);
      const pulse=0.5+0.5*p.sin(p.frameCount*5+phase+m*120);
      p.push(); p.translate(mx,my); p.rotate(ang);
      p.noStroke(); p.fill(34,78,55+35*pulse,a); p.ellipse(0,0,17,9);
      p.stroke(28,80,38,0.5*a); p.strokeWeight(1); p.line(-5,0,5,0);
      p.pop();
    }
    p.drawingContext.save();
    for(let i=0;i<3;i++){
      const t=((p.frameCount*0.01)+(i/3)+phase*0.003)%1, px=p.lerp(x0,x1,t), py=p.lerp(y0,y1,t);
      p.drawingContext.shadowBlur=10; p.drawingContext.shadowColor='rgba(245,205,95,'+(0.9*a)+')';
      p.noStroke(); p.fill(48,80,100,a); p.circle(px,py,5);
    }
    p.drawingContext.restore();
  }
  const sketch=(p)=>{
    let angle=30;
    p.setup=()=>{
      const loading=host.querySelector('.eye-loading'); if(loading) loading.remove();
      p.createCanvas(710,400);
      p.colorMode(p.HSB,360,100,100);
      p.angleMode(p.DEGREES);
    };
    p.draw=()=>{
      if(host.offsetParent===null) return;       // pause work when the home page is hidden
      p.background(0,0,4);
      const over = p.mouseX>=0 && p.mouseX<=p.width && p.mouseY>=0 && p.mouseY<=p.height;
      if(over){ angle=Math.min((p.mouseX/p.width)*90,90); }
      else { angle=32 + 9*p.sin(p.frameCount*0.6); } // gentle idle sway so it reads as interactive
      const la=p.constrain(p.map(angle,36,44,1,0),0,1);  // whole-visual-system view
      const ne=p.constrain(p.map(angle,46,62,0,1),0,1);  // two-neuron view
      const cx=p.width/2, baseY=p.height-120, off=ne*175; // how far the two halves pull apart

      // the trunk that joins the two halves — fades away as they separate into two neurons
      if(ne<0.99){ p.stroke(214,70,72,1-ne); p.strokeWeight(3); p.line(cx,p.height,cx,baseY); }

      // the two halves of the tree: together they are the visual system; apart they are two neurons
      halfArbor(p, cx-off, baseY, -1, angle, ne);  // left
      halfArbor(p, cx+off, baseY,  1, angle, ne);  // right

      // neuron anatomy + energy dynamics (as the halves pull apart)
      if(ne>0){
        const lx=cx-off, rx=cx+off, sy=baseY, syn=baseY+78;
        // axons descending from each soma, converging on a shared synapse
        p.stroke(205,18,86,ne); p.strokeWeight(2.4);
        p.line(lx,sy,cx,syn); p.line(rx,sy,cx,syn);
        // energy travelling down each axon toward the synapse
        axonEnergy(p,lx,sy,cx,syn,ne,0);
        axonEnergy(p,rx,sy,cx,syn,ne,60);
        // synapse glow + vesicles
        p.noStroke(); p.fill(48,80,100,0.14*ne); p.ellipse(cx,syn,34,26);
        for(let i=0;i<3;i++){ const t=((p.frameCount*0.03)+(i/3))%1; p.fill(150,55,95,ne); p.circle(cx,p.lerp(sy+10,syn,t),4); }
        // cell bodies on top
        drawSoma(p,lx,sy,ne); drawSoma(p,rx,sy,ne);
        // labels
        p.textSize(11); p.fill(40,12,96,ne);
        p.textAlign(p.CENTER,p.TOP);   p.text('Neuron 1',lx,sy+26); p.text('Neuron 2',rx,sy+26);
        p.textAlign(p.RIGHT,p.CENTER); p.text('Soma + nucleus',lx-26,sy);
        p.textAlign(p.LEFT,p.CENTER);  p.text('Dendrites',rx+96,sy-86); p.text('Axon',cx+10,(sy+syn)/2);
        p.textAlign(p.CENTER,p.TOP);   p.text('Synapse',cx,syn+10);
        p.fill(48,70,96,ne); p.text('Mitochondria \u00b7 ATP (oxidative phosphorylation)',cx,378);
      }

      if(fill) fill.style.width=(8+(angle/90)*92).toFixed(1)+'%';
      setState(angle>=45 ? 'neuron' : 'system');
    };
  };
  new p5(sketch, host);
})();
