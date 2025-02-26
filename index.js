//Tableau de verbes irréguliers
var verbs = [
  ["Base form", "Past tense", "Past participle", "Translation"],
  ["abide", "abode", "abode", "demeurer"],
  ["awake", "awoke", "awoken", "(se) réveiller, aussi awake/awoke/awoke"],
  ["be", "was/were", "been", "être"],
  ["bear", "bore", "borne", "porter/supporter/soutenir"],
  ["beat", "beat", "beaten", "battre"],
  ["become", "became", "become", "devenir"],
  ["beget", "begat", "begotten", "engendrer, aussi beget/begot/begotten"],
  ["begin", "began", "begun", "commencer"],
  ["bend", "bent", "bent", "se courber, etc."],
  ["bereave", "bereft", "bereft", "déposséder/priver"],
  ["bring", "brought", "brought", "apporter"],
  ["build", "built", "built", "construire"],
  ["burn", "burnt", "burnt", "brûler"],
  ["burst", "burst", "burst", "éclater"],
  ["buy", "bought", "bought", "acheter"],
  ["cast", "cast", "cast", "jeter, etc."],
  ["catch", "caught", "caught", "attraper"],
  ["chide", "chid", "chidden", "gronder/réprimander, aussi chide/chid/chid"],
  ["choose", "chose", "chosen", "choisir"],
  ["cleave", "cleft", "cleft", "fendre/coller, aussi cleave/clove/clove"],
  ["cling", "clung", "clung", "se cramponner"],
  ["come", "came", "come", "venir"],
  ["cost", "cost", "cost", "coûter"],
  ["creep", "crept", "crept", "ramper/se glisser/se hérisser"],
  ["crow", "crew", "crowed", "chanter (un coq)/jubiler"],
  ["cut", "cut", "cut", "couper"],
  ["deal", "dealt", "dealt", "distribuer/traiter"],
  ["dig", "dug", "dug", "bêcher"],
  ["do", "did", "done", "faire"],
  ["draw", "drew", "drawn", "tirer/dessiner"],
  ["dream", "dreamt", "dreamt", "rêver"],
  ["drink", "drank", "drunk", "boire"],
  ["drive", "drove", "driven", "conduire"],
  ["dwell", "dwelt", "dwelt", "habiter/rester"],
  ["eat", "ate", "eaten", "manger"],
  ["fall", "fell", "fallen", "tomber"],
  ["feed", "fed", "fed", "nourrir"],
  ["feel", "felt", "felt", "(se) sentir"],
  ["fight", "fought", "fought", "combattre"],
  ["find", "found", "found", "trouver"],
  ["flee", "fled", "fled", "s'enfuir"],
  ["fling", "flung", "flung", "lancer/jeter"],
  ["fly", "flew", "flown", "voler"],
  ["forbid", "forbade", "forbidden", "interdire"],
  ["forget", "forgot", "forgotten", "oublier"],
  ["forgive", "forgave", "forgiven", "pardonner"],
  ["freeze", "froze", "frozen", "geler"],
  ["get", "got", "got/gotten", "obtenir/devenir"],
  ["give", "gave", "given", "donner"],
  ["go", "went", "gone", "aller"],
  ["grow", "grew", "grown", "grandir/pousser"],
  ["hang", "hung", "hung", "suspendre"],
  ["have", "had", "had", "avoir"],
  ["hear", "heard", "heard", "entendre"],
  ["hide", "hid", "hidden", "cacher"],
  ["hit", "hit", "hit", "frapper"],
  ["hold", "held", "held", "tenir"],
  ["hurt", "hurt", "hurt", "blesser"],
  ["keep", "kept", "kept", "garder"],
  ["kneel", "knelt", "knelt", "s'agenouiller"],
  ["know", "knew", "known", "savoir/connaître"],
  ["lay", "laid", "laid", "poser/placer"],
  ["lead", "led", "led", "mener/conduire"],
  ["lean", "leant", "leant", "s'incliner/s'appuyer"],
  ["leap", "leapt", "leapt", "sauter/bondir"],
  ["learn", "learnt", "learnt", "apprendre"],
  ["leave", "left", "left", "quitter/partir"],
  ["lend", "lent", "lent", "prêter"],
  ["let", "let", "let", "laisser/permettre"],
  ["lie", "lay", "lain", "être allongé/mentir"],
  ["light", "lit", "lit", "allumer/éclairer"],
  ["lose", "lost", "lost", "perdre"],
  ["make", "made", "made", "faire/fabriquer"],
  ["mean", "meant", "meant", "signifier/vouloir dire"],
  ["meet", "met", "met", "rencontrer"],
  ["outbid", "outbid", "outbid", "surenchérir"],
  ["outdo", "outdid", "outdone", "surpasser"],
  ["overcome", "overcame", "overcome", "surmonter"],
  ["overhear", "overheard", "overheard", "surprendre une conversation"],
  ["overtake", "overtook", "overtaken", "dépasser/rattraper"],
  ["pay", "paid", "paid", "payer"],
  ["put", "put", "put", "mettre"],
  ["quit", "quit", "quit", "quitter/abandonner"],
  ["read", "read", "read", "lire"],
  ["ride", "rode", "ridden", "monter/aller à"],
  ["ring", "rang", "rung", "sonner/téléphoner"],
  ["rise", "rose", "risen", "s'élever/se lever"],
  ["run", "ran", "run", "courir"],
  ["saw", "sawed", "sawn", "scier"],
  ["say", "said", "said", "dire"],
  ["see", "saw", "seen", "voir"],
  ["seek", "sought", "sought", "chercher"],
  ["sell", "sold", "sold", "vendre"],
  ["send", "sent", "sent", "envoyer"],
  ["set", "set", "set", "fixer/régler"],
  ["sew", "sewed", "sewn", "coudre"],
  ["shake", "shook", "shaken", "secouer"],
  ["shine", "shone", "shone", "briller"],
  ["shoot", "shot", "shot", "tirer"],
  ["show", "showed", "shown", "montrer"],
  ["shrink", "shrank", "shrunk", "rétrécir"],
  ["shut", "shut", "shut", "fermer"],
  ["sing", "sang", "sung", "chanter"],
  ["sink", "sank", "sunk", "couler"],
  ["sit", "sat", "sat", "s'asseoir"],
  ["sleep", "slept", "slept", "dormir"],
  ["slide", "slid", "slid", "glisser"],
  ["smell", "smelt", "smelt", "sentir (odeur)"],
  ["speak", "spoke", "spoken", "parler"],
  ["speed", "sped", "sped", "aller vite"],
  ["spell", "spelt", "spelt", "épeler"],
  ["spend", "spent", "spent", "dépenser/passer du temps"],
  ["spill", "spilt", "spilt", "renverser/répandre"],
  ["spin", "spun", "spun", "tourner/filer"],
  ["split", "split", "split", "fendre/diviser"],
  ["spread", "spread", "spread", "répandre/étaler"],
  ["spring", "sprang", "sprung", "jaillir/bondir"],
  ["stand", "stood", "stood", "être debout"],
  ["steal", "stole", "stolen", "voler/dérober"],
  ["stick", "stuck", "stuck", "coller"],
  ["sting", "stung", "stung", "piquer"],
  ["stink", "stank", "stunk", "puer"],
  ["stride", "strode", "stridden", "marcher à grands pas"],
  ["strike", "struck", "struck", "frapper"],
  ["strive", "strove", "striven", "s'efforcer"],
  ["swear", "swore", "sworn", "jurer"],
  ["sweep", "swept", "swept", "balayer"],
  ["swim", "swam", "swum", "nager"],
  ["swing", "swung", "swung", "se balancer"],
  ["take", "took", "taken", "prendre"],
  ["teach", "taught", "taught", "enseigner"],
  ["tear", "tore", "torn", "déchirer"],
  ["tell", "told", "told", "dire/raconter"],
  ["think", "thought", "thought", "penser"],
  ["throw", "threw", "thrown", "jeter/lancer"],
  ["tread", "trod", "trodden", "marcher sur"],
  ["understand", "understood", "understood", "comprendre"],
  ["undertake", "undertook", "undertaken", "entreprendre"],
  ["wake", "woke", "woken", "réveiller"],
  ["wear", "wore", "worn", "porter (vêtements)"],
  ["weave", "wove", "woven", "tisser"],
  ["weep", "wept", "wept", "pleurer"],
  ["win", "won", "won", "gagner"],
  ["wind", "wound", "wound", "enrouler"],
  ["withdraw", "withdrew", "withdrawn", "retirer/se retirer"],
  ["write", "wrote", "written", "écrire"],
  ["yield", "yielded", "yielded", "céder/produire"],
];
// Dictionnaire de synonymes pour le boutton Edit
const synonyms = {
  abide: "remain, stay, continue",
  awake: "wake up, arise, rouse",
  be: "exist, live, occur",
  bear: "carry, endure, support",
  beat: "strike, hit, defeat",
  become: "turn into, grow, develop",
  beget: "produce, generate, create",
  begin: "start, commence, initiate",
  bend: "curve, flex, bow",
  bereave: "deprive, dispossess, rob",
  bring: "carry, fetch, deliver",
  build: "construct, erect, assemble",
  burn: "ignite, scorch, incinerate",
  burst: "explode, rupture, break",
  buy: "purchase, acquire, obtain",
  cast: "throw, fling, hurl",
  catch: "capture, seize, grab",
  chide: "scold, reprimand, rebuke",
  choose: "select, pick, opt",
  cleave: "split, divide, adhere",
  cling: "stick, adhere, hold",
  come: "arrive, approach, reach",
  cost: "price, value, expense",
  creep: "crawl, sneak, slink",
  crow: "boast, brag, exult",
  cut: "slice, chop, sever",
  deal: "distribute, handle, manage",
  dig: "excavate, shovel, burrow",
  do: "perform, execute, accomplish",
  draw: "sketch, pull, attract",
  dream: "imagine, envision, fantasize",
  drink: "sip, gulp, consume",
  drive: "steer, operate, propel",
  dwell: "reside, inhabit, live",
  eat: "consume, devour, ingest",
  fall: "drop, tumble, descend",
  feed: "nourish, sustain, provide",
  feel: "sense, perceive, experience",
  fight: "battle, combat, struggle",
  find: "discover, locate, detect",
  flee: "escape, run away, bolt",
  fling: "throw, toss, pitch",
  fly: "soar, glide, travel by air",
  forbid: "prohibit, ban, disallow",
  forget: "overlook, neglect, fail to remember",
  forgive: "pardon, excuse, absolve",
  freeze: "chill, solidify, become ice",
  get: "acquire, obtain, receive",
  give: "provide, offer, donate",
  go: "move, travel, proceed",
  grow: "develop, increase, expand",
  hang: "suspend, dangle, attach",
  have: "possess, own, hold",
  hear: "listen, perceive sound, be told",
  hide: "conceal, cover, mask",
  hit: "strike, impact, collide",
  hold: "grasp, grip, maintain",
  hurt: "injure, harm, damage",
  keep: "retain, maintain, preserve",
  kneel: "genuflect, bow, crouch",
  know: "understand, recognize, comprehend",
  lay: "place, put, position",
  lead: "guide, direct, conduct",
  lean: "incline, tilt, rest against",
  leap: "jump, bound, spring",
  learn: "study, acquire knowledge, memorize",
  leave: "depart, exit, abandon",
  lend: "loan, provide temporarily, advance",
  let: "allow, permit, enable",
  lie: "recline, rest, be situated",
  light: "illuminate, ignite, kindle",
  lose: "misplace, be deprived of, fail to keep",
  make: "create, produce, construct",
  mean: "signify, denote, indicate",
  meet: "encounter, come across, assemble",
  outbid: "offer more, exceed, surpass in bidding",
  outdo: "surpass, exceed, outshine",
  overcome: "conquer, defeat, surmount",
  overhear: "eavesdrop, catch, listen in on",
  overtake: "pass, catch up with, surpass",
  pay: "compensate, remunerate, settle",
  put: "place, position, set",
  quit: "stop, cease, resign",
  read: "peruse, study, scan",
  ride: "travel, journey, sit on and control",
  ring: "call, sound, encircle",
  rise: "ascend, get up, increase",
  run: "sprint, race, jog",
  saw: "cut, slice, divide with a saw",
  say: "state, utter, pronounce",
  see: "perceive, observe, witness",
  seek: "search for, look for, pursue",
  sell: "trade, vend, market",
  send: "dispatch, transmit, convey",
  set: "put, place, arrange",
  sew: "stitch, suture, darn",
  shake: "tremble, quiver, vibrate",
  shine: "glow, gleam, radiate",
  shoot: "fire, discharge, launch",
  show: "display, exhibit, present",
  shrink: "contract, reduce, diminish",
  shut: "close, seal, secure",
  sing: "vocalize, chant, perform music",
  sink: "submerge, descend, go down",
  sit: "be seated, perch, rest",
  sleep: "slumber, doze, rest",
  slide: "glide, slip, skid",
  smell: "sniff, scent, detect odor",
  speak: "talk, converse, articulate",
  speed: "accelerate, rush, hurry",
  spell: "write or name the letters, cast a spell",
  spend: "expend, pay out, use up",
  spill: "pour out, overflow, drop",
  spin: "rotate, twirl, revolve",
  split: "divide, separate, break",
  spread: "distribute, scatter, extend",
  spring: "leap, jump, arise suddenly",
  stand: "be upright, endure, tolerate",
  steal: "rob, pilfer, take illegally",
  stick: "adhere, attach, fasten",
  sting: "prick, bite, irritate",
  stink: "smell bad, reek, be offensive",
  stride: "walk with long steps, stroll confidently",
  strike: "hit, smack, collide with",
  strive: "endeavor, try, attempt",
  swear: "vow, pledge, curse",
  sweep: "clean, brush, clear away",
  swim: "move through water, float",
  swing: "oscillate, sway, wave",
  take: "grab, seize, capture",
  teach: "educate, instruct, train",
  tear: "rip, shred, split",
  tell: "inform, relate, narrate",
  think: "consider, contemplate, reflect",
  throw: "toss, hurl, fling",
  tread: "step on, walk on, trample",
  understand: "comprehend, grasp, apprehend",
  undertake: "attempt, embark on, commence",
  wake: "awaken, rouse, arise",
  wear: "don, sport, be dressed in",
  weave: "intertwine, interlace, braid",
  weep: "cry, sob, lament",
  win: "triumph, succeed, prevail",
  wind: "twist, coil, wrap",
  withdraw: "remove, retreat, pull back",
  write: "compose, record, author",
  yield: "surrender, produce, give way",
};

function Right() {
  const leftBox = document.getElementById("LeftBox");
  const rightBox = document.getElementById("RightBox");

  // Changer le contenu HTML entre les deux divs
  const tempContent = leftBox.innerHTML;
  leftBox.innerHTML = rightBox.innerHTML;
  rightBox.innerHTML = tempContent;
}

function Left() {
  const leftBox = document.getElementById("LeftBox");
  const rightBox = document.getElementById("RightBox");

  // Changer le contenu HTML entre les deux divs
  const tempContent = rightBox.innerHTML;
  rightBox.innerHTML = leftBox.innerHTML;
  leftBox.innerHTML = tempContent;
}

// Variable pour suivre l'état de rotation
let enrotation = false;

// Fonction pour agrandir/réduire le tableau
function Fulltablebutton() {
  const leftBox = document.getElementById("LeftBox");
  const rightBox = document.getElementById("RightBox");

  if (!enrotation) {
    // Agrandir le tableau
    leftBox.style.flex = "9"; // Valeur plus grande pour maximiser l'espace
    rightBox.style.flex = "0.2";
    rightBox.style.padding = "0";

    // Faire pivoter la flèche
    const arrow = document.querySelector(".arrow2");
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "transform 0.5s ease";

    // Masquer les éléments de rightbox
    const carrePointee = document.getElementById("CarrePointee");
    if (carrePointee) carrePointee.style.display = "none";

    const statsElement = document.getElementById("Stats");
    if (statsElement) statsElement.style.display = "none";

    const form = rightBox.querySelector("form");
    if (form) form.style.display = "none";

    const h5 = rightBox.querySelector("h5");
    if (h5) h5.style.display = "none";

    enrotation = true;
  } else {
    // Réduire le tableau à la taille par défaut
    leftBox.style.flex = "4"; // Valeur standard pour le LeftBox
    rightBox.style.flex = "2"; // Valeur standard pour le RightBox
    rightBox.style.padding = "15px";

    // Réinitialiser la rotation de la flèche
    const arrow = document.querySelector(".arrow2");
    arrow.style.transform = "rotate(0deg)";
    arrow.style.transition = "transform 0.5s ease";

    // Afficher les éléments
    const carrePointee = document.getElementById("CarrePointee");
    if (carrePointee) carrePointee.style.display = "block";

    const statsElement = document.getElementById("Stats");
    if (statsElement) statsElement.style.display = "block";

    const form = rightBox.querySelector("form");
    if (form) form.style.display = "flex";

    const h5 = rightBox.querySelector("h5");
    if (h5) h5.style.display = "block";

    enrotation = false;

    // Force la mise à jour du tableau pour s'assurer que tous les boutons sont visibles
    setTimeout(() => {
      fillTable();
    }, 100);
  }
}

// Améliorons la fonction fillTable pour assurer que les boutons sont correctement espacés
function fillTable() {
  const tableau = document.getElementById("LeftTable");
  // Supprimer le contenu existant du tbody pour éviter les tableaux doublons
  let ancientableau = tableau.querySelector("tbody");
  if (ancientableau) {
    tableau.removeChild(ancientableau);
  }

  // Créer le corps
  let tbody = tableau.createTBody();
  for (let i = 1; i < verbs.length; i++) {
    let row = tbody.insertRow();
    verbs[i].forEach((cell, index) => {
      if (index < 4) {
        let td = row.insertCell();
        td.textContent = cell;
        // Ajouter un attribut titre pour voir le texte complet au survol
        td.setAttribute("title", cell);
      }
    });

    // Ajouter la cellule avec les boutons
    let actionsCell = row.insertCell();

    // Adapter le style selon la taille de l'écran
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      actionsCell.style.minWidth = "150px";
    } else {
      actionsCell.style.minWidth = "170px";
    }

    actionsCell.style.whiteSpace = "nowrap";

    // Créer un conteneur pour les boutons pour un meilleur espacement
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = isMobile ? "2px" : "3px";
    buttonContainer.style.justifyContent = "flex-start";

    // Créer les boutons
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Show";
    editBtn.onclick = function () {
      Edit(i);
    };

    const updateBtn = document.createElement("button");
    updateBtn.className = "update-btn";
    updateBtn.textContent = "Update";
    updateBtn.onclick = function () {
      Update(i);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      deleteVerbe(i);
    };

    // Ajouter les boutons au conteneur
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(updateBtn);
    buttonContainer.appendChild(deleteBtn);

    // Ajouter le conteneur à la cellule
    actionsCell.appendChild(buttonContainer);
  }

  // Optimiser l'affichage pour mobile
  optimizeTableForMobile();
}

fillTable();

// Fonctions pour gérer les modales
function showModal(title, message, okCallback = null, showCancel = false) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalMessage").textContent = message;

  const modalOverlay = document.getElementById("modalOverlay");
  const cancelBtn = document.getElementById("modalCancelBtn");

  // Afficher ou masquer le bouton Cancel selon le besoin
  cancelBtn.style.display = showCancel ? "block" : "none";

  // Configurer le bouton OK
  const okBtn = document.getElementById("modalOkBtn");
  okBtn.onclick = function () {
    modalOverlay.style.display = "none";
    if (okCallback) okCallback();
  };

  // Configurer le bouton Cancel et le bouton de fermeture
  cancelBtn.onclick = function () {
    modalOverlay.style.display = "none";
  };

  document.getElementById("closeModal").onclick = function () {
    modalOverlay.style.display = "none";
  };

  // Afficher la modale
  modalOverlay.style.display = "flex";
}

function showConfirmModal(title, message, yesCallback, noCallback = null) {
  document.getElementById("confirmModalTitle").textContent = title;
  document.getElementById("confirmModalMessage").textContent = message;

  const confirmModalOverlay = document.getElementById("confirmModalOverlay");

  // Configurer le bouton Yes
  document.getElementById("confirmModalYesBtn").onclick = function () {
    confirmModalOverlay.style.display = "none";
    if (yesCallback) yesCallback();
  };

  // Configurer le bouton No et le bouton de fermeture
  document.getElementById("confirmModalNoBtn").onclick = function () {
    confirmModalOverlay.style.display = "none";
    if (noCallback) noCallback();
  };

  document.getElementById("closeConfirmModal").onclick = function () {
    confirmModalOverlay.style.display = "none";
    if (noCallback) noCallback();
  };

  // Afficher la modale de confirmation
  confirmModalOverlay.style.display = "flex";
}

// Fonction affichage des alertes pour les synonymes en cliquant sur le bouton Edit (modifiée)
function Edit(rowIndex) {
  const verb = verbs[rowIndex][0];
  const synonymMessage = `Les synonymes de "${verb}" sont : ${synonyms[verb]}`;
  showModal("Synonymes", synonymMessage);
}

// Fonction modifier pour bouton Update
function Update(rowIndex) {
  const Verbeselect = verbs[rowIndex];

  // Créer et afficher la modale de formulaire
  showFormModal(
    "Modifier le verbe",
    {
      baseForm: Verbeselect[0],
      pastTense: Verbeselect[1],
      pastParticiple: Verbeselect[2],
      translation: Verbeselect[3],
      synonyms: synonyms[Verbeselect[0]] || "",
    },
    function (formData) {
      // Traitement après la soumission du formulaire
      const nouvaleur = [
        formData.baseForm,
        formData.pastTense,
        formData.pastParticiple,
        formData.translation,
      ];

      // Gérer les synonymes
      if (formData.synonyms) {
        // Si le base form a changé, gérer les synonymes
        if (nouvaleur[0] !== Verbeselect[0]) {
          if (synonyms[Verbeselect[0]]) {
            delete synonyms[Verbeselect[0]];
          }
        }
        synonyms[nouvaleur[0]] = formData.synonyms;
      }

      // Mettre à jour le verbe
      verbs[rowIndex] = nouvaleur;
      fillTable();

      // Vérifier si la ligne était colorée en rouge (ajout incomplet)
      const tableau = document.getElementById("LeftTable");
      const row = tableau.rows[rowIndex];
      if (row && row.style.backgroundColor === "rgb(254, 155, 155)") {
        if (rowIndex % 2 === 0) {
          row.style.backgroundColor = "rgba(67, 97, 238, 0.05)";
        } else {
          row.style.backgroundColor = "white";
        }
      }

      showModal("Succès", "Verbe mis à jour avec succès!");
    }
  );
}

// Fonction ajouter pour bouton Addverbe
function AddVerb() {
  // Créer et afficher la modale de formulaire
  showFormModal(
    "Ajouter un nouveau verbe",
    {
      baseForm: "",
      pastTense: "",
      pastParticiple: "",
      translation: "",
      synonyms: "",
    },
    function (formData) {
      // Vérifier que le baseForm n'est pas vide
      if (!formData.baseForm) {
        showModal("Erreur", "Le champ 'Base form' ne peut pas être vide.");
        return;
      }

      const nouveau = [
        formData.baseForm,
        formData.pastTense,
        formData.pastParticiple,
        formData.translation,
      ];

      // Gérer les synonymes
      if (formData.synonyms) {
        synonyms[nouveau[0]] = formData.synonyms;
      }

      // Trouver la position correcte pour l'insertion (tri alphabétique)
      let insertIndex = 1; // Commence à 1 pour sauter l'en-tête
      while (
        insertIndex < verbs.length &&
        verbs[insertIndex][0].toLowerCase() < nouveau[0].toLowerCase()
      ) {
        insertIndex++;
      }

      // Insérer le nouveau verbe à la position correcte
      verbs.splice(insertIndex, 0, nouveau);

      // Mettre à jour l'affichage
      fillTable();
      Statistics();
      creeliste();

      // Vérifier si toutes les valeurs sont remplies
      if (nouveau.includes("")) {
        // Colorer la ligne en rouge
        const table = document.getElementById("LeftTable");
        const row = table.rows[insertIndex];
        if (row) {
          row.style.backgroundColor = "rgba(247, 37, 133, 0.2)";
          showModal(
            "Information",
            "Certains champs sont vides. Vous pourrez les compléter plus tard avec la méthode UPDATE."
          );
        }
        return;
      }

      showModal("Succès", "Nouveau verbe ajouté avec succès!");
    }
  );
}

// Fonction pour afficher une modale avec formulaire
function showFormModal(title, initialData, submitCallback) {
  // Créer le contenu du formulaire
  const formContent = `
    <form id="verbForm" class="verb-form">
      <div class="form-group">
        <label for="baseForm">Base form:</label>
        <input type="text" id="baseForm" value="${
          initialData.baseForm || ""
        }" ${
    initialData.baseForm === "" ? "required" : ""
  } placeholder="Enter base form...">
      </div>
      
      <div class="form-group">
        <label for="pastTense">Past tense:</label>
        <input type="text" id="pastTense" value="${
          initialData.pastTense || ""
        }" placeholder="Enter past tense...">
      </div>
      
      <div class="form-group">
        <label for="pastParticiple">Past participle:</label>
        <input type="text" id="pastParticiple" value="${
          initialData.pastParticiple || ""
        }" placeholder="Enter past participle...">
      </div>
      
      <div class="form-group">
        <label for="translation">Translation:</label>
        <input type="text" id="translation" value="${
          initialData.translation || ""
        }" placeholder="Enter translation...">
      </div>
      
      <div class="form-group">
        <label for="synonyms">Synonyms:</label>
        <textarea id="synonyms" rows="3" placeholder="Enter synonyms separated by commas...">${
          initialData.synonyms || ""
        }</textarea>
      </div>
    </form>
  `;

  // Préparer la modale
  document.getElementById("formModalTitle").textContent = title;
  document.getElementById("formModalContent").innerHTML = formContent;

  const formModalOverlay = document.getElementById("formModalOverlay");

  // Configurer le gestionnaire de soumission
  document.getElementById("formModalSubmitBtn").onclick = function () {
    // Recueillir les données du formulaire
    const formData = {
      baseForm: document.getElementById("baseForm").value.trim(),
      pastTense: document.getElementById("pastTense").value.trim(),
      pastParticiple: document.getElementById("pastParticiple").value.trim(),
      translation: document.getElementById("translation").value.trim(),
      synonyms: document.getElementById("synonyms").value.trim(),
    };

    // Valider que baseForm n'est pas vide pour les nouveaux verbes
    if (initialData.baseForm === "" && !formData.baseForm) {
      const baseFormInput = document.getElementById("baseForm");
      baseFormInput.classList.add("error");
      baseFormInput.focus();

      // Animation d'erreur
      baseFormInput.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 300,
        }
      );
      return;
    }

    // Fermer la modale et exécuter le callback
    formModalOverlay.style.display = "none";
    submitCallback(formData);
  };

  // Configurer le bouton d'annulation et la touche Escape
  document.getElementById("formModalCancelBtn").onclick = function () {
    formModalOverlay.style.display = "none";
  };

  document.getElementById("closeFormModal").onclick = function () {
    formModalOverlay.style.display = "none";
  };

  // Permettre de soumettre le formulaire en appuyant sur Enter
  document
    .getElementById("verbForm")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("formModalSubmitBtn").click();
      }
    });

  // Permettre de fermer la modale en appuyant sur Escape
  const handleEscapeKey = function (event) {
    if (event.key === "Escape") {
      formModalOverlay.style.display = "none";
      document.removeEventListener("keydown", handleEscapeKey);
    }
  };
  document.addEventListener("keydown", handleEscapeKey);

  // Afficher la modale
  formModalOverlay.style.display = "flex";

  // Donner le focus au premier champ
  setTimeout(() => {
    document.getElementById("baseForm").focus();
  }, 100);

  // Retirer la classe d'erreur quand l'utilisateur commence à taper
  document.getElementById("baseForm").addEventListener("input", function () {
    this.classList.remove("error");
  });
}

// Fonction supprimer pour bouton Delete (modifiée)
function deleteVerbe(rowIndex) {
  // Demander confirmation avant la suppression
  const verb = verbs[rowIndex][0];

  showConfirmModal(
    "Confirmation de suppression",
    `Voulez-vous supprimer le verbe "${verb}" ?`,
    function () {
      // Action si Yes
      const supprimerverbe = verbs.splice(rowIndex, 1); // Retire l'élément à l'index donné
      if (supprimerverbe.length && synonyms[supprimerverbe[0][0]]) {
        delete synonyms[supprimerverbe[0][0]]; // Supprime les synonymes si existants
      }

      fillTable(); // Mettre à jour l'affichage
      Statistics(); // Mettre à jour la barre des statistiques
      creeliste(); // Mettre à jour les liens
    }
  );
}

// Fonction de recherche (modifiée)
function findAndMoveVerb() {
  const Verberecherche = document
    .getElementById("VerbtoFind")
    .value.toLowerCase()
    .trim();
  if (!Verberecherche) {
    showModal("Erreur", "Veuillez entrer un verbe à rechercher");
    return;
  }

  // Chercher le verbe dans le tableau
  let chercherIndex = 0;
  for (let i = 1; i < verbs.length; i++) {
    if (verbs[i][0].toLowerCase().includes(Verberecherche)) {
      chercherIndex = i;
      break;
    }
  }

  if (chercherIndex !== 0) {
    const foundVerb = verbs[chercherIndex]; // Sauvegarder le verbe trouvé
    verbs.splice(chercherIndex, 1); // Supprimer le verbe de sa position actuelle
    verbs.splice(1, 0, foundVerb); // L'insérer en première position après l'en-tête

    // Mettre à jour l'affichage
    fillTable();

    // Changer la couleur de la ligne trouvée
    setTimeout(() => {
      const PremierRow = document.querySelector("tbody tr");
      if (PremierRow) {
        PremierRow.classList.add("found-row");
        // Retirer la classe après 2 secondes
        setTimeout(() => {
          PremierRow.style.backgroundColor = "";
          PremierRow.style.transition = "background-color 0.5s";
          PremierRow.classList.remove("found-row");
        }, 2000);
      }
    }, 0);
  } else {
    showModal("Recherche", "Verbe non trouvé");
  }

  // Vider le champ de recherche
  document.getElementById("VerbtoFind").value = "";
}

// Fonction pour calculer les statistiques (utilisé en Delete et Add Verbe)

function Statistics() {
  const Counteurlettres = {};
  let totalVerbs = 0;

  // Compter les verbes pour chaque lettre
  verbs.forEach((verb, index) => {
    if (index > 0) {
      // Ignorer l'en-tête
      const premierelettre = verb[0][0];
      if (!Counteurlettres[premierelettre]) {
        // Initialiser le compteur à 0
        Counteurlettres[premierelettre] = 0;
      }
      Counteurlettres[premierelettre]++;
      totalVerbs++;
    }
  });

  // Calculer la moyenne
  const average = totalVerbs / Object.keys(Counteurlettres).length; // Nombre total de verbes divisé par le nombre de lettres
  // Afficher les résultats
  let result = `${Math.round(average)} verbs on average per letter : |`;
  for (const letter in Counteurlettres) {
    result += ` ${letter} → ${Counteurlettres[letter]} | `;
  }

  const resultContainer = document.getElementById("Stats");
  const resultParagraph = document.getElementById("result");
  resultParagraph.textContent = result;
}
Statistics();

// Fonction pour créer une liste de liens - version améliorée
function creeliste() {
  const ul = document.getElementById("Listes");
  ul.innerHTML = "";

  // Tableau de lettres pour créer des liens
  const lettres = ["a", "b", "c", "d", "e", "f"];

  // Ajouter une lettre si l'utilisateur a ajouté un nouveau verbe commençant par une lettre qui n'existe pas dans les liens
  verbs.forEach((verb, index) => {
    if (index > 0) {
      // Ignorer l'en-tête
      const Premierlettre = verb[0][0].toLowerCase();
      if (!lettres.includes(Premierlettre)) {
        lettres.push(Premierlettre);
      }
    }
  });

  // Trier les lettres par ordre alphabétique
  lettres.sort();

  lettres.forEach((lettre) => {
    // Créer l'élément li qui contiendra tout
    const li = document.createElement("li");

    // Créer un wrapper span pour maintenir tout sur la même ligne
    const linkWrapper = document.createElement("span");
    linkWrapper.style.display = "flex";
    linkWrapper.style.alignItems = "center";
    linkWrapper.style.gap = "5px";

    // Créer le texte du lien
    const linkText = document.createElement("span");
    linkText.textContent = "Verbs that start with the letter ";

    // Créer le lien contenant la lettre
    const letterLink = document.createElement("a");
    letterLink.href = `#${lettre}`;
    letterLink.classList.add("lettres");
    letterLink.textContent = lettre.toUpperCase();

    // Assembler les éléments
    linkWrapper.appendChild(linkText);
    linkWrapper.appendChild(letterLink);
    li.appendChild(linkWrapper);
    ul.appendChild(li);

    // Définir le gestionnaire de clics pour le lien
    letterLink.onclick = function (event) {
      event.preventDefault(); // Empêcher le comportement par défaut

      const lettre = this.href.split("#")[1]; // Obtenir la lettre à partir de l'attribut href
      const table = document.getElementById("LeftTable");
      const rows = table.querySelectorAll("tbody tr");
      let firstMatch = null;

      // Réinitialiser toutes les couleurs de texte
      rows.forEach((row) => {
        row.style.color = "";
      });

      // Première boucle pour trouver le premier match
      for (let i = 0; i < rows.length; i++) {
        const verb = rows[i].cells[0].textContent.toLowerCase();
        if (verb.startsWith(lettre)) {
          firstMatch = rows[i];
          break; // Sortir de la boucle dès qu'on trouve le premier match
        }
      }

      // Seconde boucle pour colorier tous les verbes qui commencent par la lettre
      if (firstMatch) {
        rows.forEach((row) => {
          const verb = row.cells[0].textContent.toLowerCase();
          if (verb.startsWith(lettre)) {
            row.style.color = "red";
          }
        });

        setTimeout(() => {
          firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    };

    // Vérifier si des verbes commencent par cette lettre
    let lettrexiste = false;
    verbs.forEach((verb, index) => {
      if (index > 0 && verb[0][0].toLowerCase() === lettre) {
        lettrexiste = true;
      }
    });

    // Supprimer le lien si aucun verbe ne commence par cette lettre
    if (!lettrexiste) {
      ul.removeChild(li);
    }
  });
}
creeliste();

// Fonction pour gérer l'affichage responsif du tableau
function optimizeTableForMobile() {
  // Vérifier si nous sommes sur un petit écran
  const isMobile = window.innerWidth <= 1024;

  // Optimiser le tableau pour les petits écrans
  if (isMobile) {
    const table = document.getElementById("LeftTable");
    const rows = table.querySelectorAll("tbody tr");

    // Ajouter des attributs title pour montrer le texte complet au survol
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      cells.forEach((cell) => {
        // Ne pas écraser le contenu des cellules d'action (dernière colonne)
        if (!cell.querySelector("button")) {
          cell.setAttribute("title", cell.textContent); // Ajouter un title pour voir le texte complet au survol
        }
      });
    });
  }
}

// Exécuter au chargement et au redimensionnement
window.addEventListener("load", optimizeTableForMobile);
window.addEventListener("resize", optimizeTableForMobile);
