/**********************************************************
| # CONSEGNA
**********************************************************/

/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
*/




/**********************************************************
| # SVOLGIMENTO
**********************************************************/

// Dichiarazione Array con membri iniziali del team

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },

];


// Dchiaro la sezione "members" come elemento HTML 
const memberSection = document.getElementById('members-section');


// Dichiaro la funzione che al caricamrnto della pagina stampa le Cards di tutti i membri

let printMembers = () => {

  // Dichiaro la variabile HTML su cui stampare tutto e la singola Card HTML per ciascun membro
  let outputHTML = '';
  let cardHTML;

  // Per ciascun membro nell'Array
  teamMembers.forEach(member => {
 
    cardHTML = 
    `<!-- COLUMN -->
    <div class="col-12 col-md-6 col-lg-4">
        <!-- MEMBER CARD -->
        <div class="d-flex bg-dark text-white">
            <!-- MEMBER PIC -->
            <img class="object-fit-cover" src="./${member.img}" alt="">
            <!--  MEMBER INFO -->
            <div class="p-3">
                <h3 class="h4">${member.name}</h5>
                <p>${member.role}</p>
                <a class="text-decoration-none" href="mailto:${member.email}">${member.email}</a>
            </div>
        </div>
    </div>`

    outputHTML += cardHTML;
  });

  return memberSection.innerHTML = outputHTML;
}

// Richiamo la funzione per riempire subito la pagina con le stampe dei membri attuali
printMembers();




// Dichiaro gli elementi HTMl utili all'aggiunta di un nuovo membro
const addMember_name = document.getElementById('addMember_name');
const addMember_role = document.getElementById('addMember_role');
const addMember_email = document.getElementById('addMember_email');

const addMember_button = document.getElementById('addMember_button');


// Attribuisco un EventListener al bottone
addMember_button.addEventListener('click', () => {
  let newMember;

  let name = addMember_name.value;
  let role = addMember_role.value;
  let email = addMember_role.value;
  let img = '';

  // Al click del bottone svuoto l'inner HTML della sezione membri
  memberSection.innerHTML = '';

  // Dichiaro il mio nuovo object (membro)
  newMember = {name, role, email, img,};

  // Aggiungo il nuovo membro all'Array originale
  teamMembers.push(newMember);

  printMembers();
  console.log(teamMembers);
})



console.log(teamMembers);