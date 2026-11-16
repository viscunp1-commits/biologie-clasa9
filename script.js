const quizData = [
    // --- 20 ÎNTREBĂRI CU VARIANTE DE RĂSPUNS ---
    {
        type: "Variante de răspuns",
        question: "1. Prin ce modalitate se realizează amitoza la drojdia de bere?",
        options: [
            "Prin sciziune (fragmentare)",
            "Prin strangulare",
            "Prin formarea fusului de diviziune",
            "Prin diviziune meiotică"
        ],
        correct: 1,
        explanation: "La drojdia de bere, amitoza are loc prin strangulare: celula și nucleul se alungesc, membrana se strangulează la mijloc și apar două celule noi."
    },
    {
        type: "Variante de răspuns",
        question: "2. Care este succesiunea corectă a celor patru faze ale mitozei?",
        options: [
            "Metafaza → Profaza → Telofaza → Anafaza",
            "Profaza → Anafaza → Metafaza → Telofaza",
            "Profaza → Metafaza → Anafaza → Telofaza",
            "Interfaza → Metafaza → Profaza → Anafaza"
        ],
        correct: 2,
        explanation: "Mitoza include patru faze succesive: profaza, metafaza, anafaza și telofaza (interfaza fiind etapa premergătoare diviziunii)."
    },
    {
        type: "Variante de răspuns",
        question: "3. Câte celule se obțin în urma a 4 diviziuni mitotice succesive pornind de la o singură celulă-mamă?",
        options: [
            "8 celule",
            "16 celule",
            "32 celule",
            "4 celule"
        ],
        correct: 1,
        explanation: "Formula este 2ⁿ, unde n este numărul de mitoze. Pentru n = 4, obținem 2⁴ = 16 celule diploide."
    },
    {
        type: "Variante de răspuns",
        question: "4. O celulă diploidă (2n = 24 de cromozomi) se divide meiotic. Câți cromozomi vor avea celulele rezultate după prima diviziune meiotică (reducțională)?",
        options: [
            "24 de cromozomi",
            "48 de cromozomi",
            "12 cromozomi",
            "6 cromozomi"
        ],
        correct: 2,
        explanation: "Prima diviziune meiotică este reducțională: dintr-o celulă diploidă (2n = 24) se formează două celule haploide (n = 12)."
    },
    {
        type: "Variante de răspuns",
        question: "5. Ce rezultă la finalul celei de-a doua diviziuni meiotice în cadrul procesului de ovogeneză?",
        options: [
            "Patru ovule funcționale",
            "Două ovotide și doi globi polari",
            "O ovotidă (care devine ovul) și trei globi polari",
            "Un ovocit primar și trei ovotide"
        ],
        correct: 2,
        explanation: "În urma celei de-a doua diviziuni meiotice la ovogeneză se formează o ovotidă (care se transformă în ovul) și trei globi polari haploizi, care degenerează."
    },
    {
        type: "Variante de răspuns",
        question: "6. Cum se numește procesul prin care zigotul se dezvoltă într-un organism integral (incluzând perioada embrionară și postembrionară)?",
        options: [
            "Gametogeneză",
            "Ontogeneză",
            "Spermatogeneză",
            "Poliploidie"
        ],
        correct: 1,
        explanation: "Zigotul se dezvoltă într-un organism integral în cadrul procesului numit ontogeneză, ce cuprinde perioada embrionară și cea postembrionară."
    },
    {
        type: "Variante de răspuns",
        question: "7. Cine a formulat legile de bază ale transmiterii caracterelor ereditare în anul 1865?",
        options: [
            "Ernst Haeckel",
            "Gregor Johann Mendel",
            "Antonie van Leeuwenhoek",
            "D.I. Ivanovski"
        ],
        correct: 1,
        explanation: "Naturalistul ceh Gregor Johann Mendel a stabilit legile eredității în anul 1865, punând bazele geneticii."
    },
    {
        type: "Variante de răspuns",
        question: "8. Ce reprezintă totalitatea caracterelor morfologice, fiziologice, biochimice și comportamentale observabile la un organism?",
        options: [
            "Genotipul",
            "Cariotipul",
            "Fenotipul",
            "Genomul"
        ],
        correct: 2,
        explanation: "Fenotipul reprezintă totalitatea caracterelor observabile ale unui organism, rezultate din interacțiunea genotipului cu factorii de mediu."
    },
    {
        type: "Variante de răspuns",
        question: "9. La încrucișarea a doi hibrizi din prima generație (Aa × Aa), care este raportul de segregare după fenotip în generația a doua (F₂)?",
        options: [
            "1 : 1",
            "3 : 1",
            "1 : 2 : 1",
            "100% uniform"
        ],
        correct: 1,
        explanation: "Conform Legii segregării, la încrucișarea hibrizilor din F₁, în F₂ se obține o segregare după fenotip în raport de 3:1 (75% caracter dominant, 25% caracter recesiv)."
    },
    {
        type: "Variante de răspuns",
        question: "10. Cum se numește mutația cromozomială caracterizată prin multiplicarea numărului de cromozomi, întâlnită frecvent la plante (ex. căpșun, vița-de-vie)?",
        options: [
            "Monosomie",
            "Poliploidie",
            "Amitoză",
            "Segregare"
        ],
        correct: 1,
        explanation: "Poliploidia reprezintă multiplicarea numărului de cromozomi, determinând la plante creșterea dimensiunii fructelor și a rezistenței la boli."
    },
    {
        type: "Variante de răspuns",
        question: "11. Care dintre următoarele exemple ilustrează variabilitatea neereditară (negenetică)?",
        options: [
            "Apariția unei veverițe albinos",
            "Mărirea fructelor la căpșunii poliploizi",
            "Schimbarea culorii blănii la iepure în funcție de anotimp",
            "Transmiterea hemofiliei de la mamă la fiu"
        ],
        correct: 2,
        explanation: "Schimbarea culorii blănii la iepure în funcție de anotimp este determinată de climă (factor de mediu) și nu modifică materialul ereditar."
    },
    {
        type: "Variante de răspuns",
        question: "12. Cum este alcătuit genomul uman normal?",
        options: [
            "46 de perechi de cromozomi (44 autozomi și 2 heterozomi)",
            "23 de cromozomi în total (22 autozomi și 1 heterozom)",
            "46 de cromozomi repartizați în 23 de perechi (22 perechi autozomi și 1 pereche heterozomi)",
            "47 de cromozomi (22 perechi autozomi și 3 heterozomi)"
        ],
        correct: 2,
        explanation: "Genomul uman conține 46 de cromozomi (23 de perechi): perechile 1–22 sunt autozomi, iar perechea a 23-a sunt heterozomii (XX sau XY)."
    },
    {
        type: "Variante de răspuns",
        question: "13. Care dintre următoarele maladii umane este o maladie ereditară genică autozomală recesivă?",
        options: [
            "Polidactilia",
            "Albinismul",
            "Sindromul Down",
            "Hemofilia"
        ],
        correct: 1,
        explanation: "Albinismul (alături de fenilcetonurie) este o maladie genică autozomală recesivă. Polidactilia este autozomal dominantă, iar hemofilia este X-linkată."
    },
    {
        type: "Variante de răspuns",
        question: "14. Dacă ambii părinți sunt sănătoși, dar purtători heterozigoți ai unei gene autozomale recesive afectate, care este probabilitatea de a avea un copil bolnav?",
        options: [
            "50%",
            "75%",
            "25%",
            "100%"
        ],
        correct: 2,
        explanation: "Din încrucișarea a doi părinți purtători (Aa × Aa), rezultă 25% copii bolnavi (aa), 50% copii purtători sănătoși (Aa) și 25% copii complet sănătoși (AA)."
    },
    {
        type: "Variante de răspuns",
        question: "15. Care dintre următoarele boli este determinată de o genă recesivă localizată pe cromozomul X (X-linkată)?",
        options: [
            "Fenilcetonuria",
            "Brahidactilia",
            "Daltonismul",
            "Sindromul Patau"
        ],
        correct: 2,
        explanation: "Hemofilia și daltonismul sunt maladii ereditare genice heterozomale produse de gene recesive situate pe cromozomul X."
    },
    {
        type: "Variante de răspuns",
        question: "16. Ce anomalie cromozomială stă la baza sindromului Down?",
        options: [
            "Trisomia 13",
            "Trisomia 18",
            "Trisomia 21",
            "Monosomia X"
        ],
        correct: 2,
        explanation: "Sindromul Down este cauzat de prezența unui cromozom suplimentar în perechea a 21-a (trisomia 21), rezultând 47 de cromozomi."
    },
    {
        type: "Variante de răspuns",
        question: "17. Care este formula cromozomială caracteristică sindromului Klinefelter?",
        options: [
            "45, OX",
            "47, XXY",
            "47, XXX",
            "46, XY"
        ],
        correct: 1,
        explanation: "Sindromul Klinefelter afectează sexul masculin și este determinat de prezența suplimentară a unuia sau mai multor cromozomi X (de obicei 47, XXY)."
    },
    {
        type: "Variante de răspuns",
        question: "18. Ce maladie cromozomială afectează exclusiv sexul feminin și este cauzată de lipsa unui cromozom X (45, OX)?",
        options: [
            "Sindromul Turner (Monosomia X)",
            "Trisomia X",
            "Sindromul Edwards",
            "Sindromul Cri-du-chat"
        ],
        correct: 0,
        explanation: "Sindromul Turner (Monosomia X) afectează exclusiv femeile și apare atunci când lipsește unul dintre cromozomii X (cariotip 45, OX)."
    },
    {
        type: "Variante de răspuns",
        question: "19. Care este cauza apariției sindromului Cri-du-chat (plâns de pisică)?",
        options: [
            "Un cromozom suplimentar în perechea a 5-a",
            "Dispariția unei porțiuni dintr-un cromozom din perechea a 5-a",
            "Nondisjuncția cromozomilor sexuali în meioza I",
            "O mutație genică recesivă pe cromozomul Y"
        ],
        correct: 1,
        explanation: "Sindromul Cri-du-chat este o maladie cromozomială structurală cauzată de pierderea (deleția) unei porțiuni dintr-un cromozom al perechii a 5-a."
    },
    {
        type: "Variante de răspuns",
        question: "20. Cum se numește fenomenul prin care cromozomii omologi sau cromatidele nu se separă corect în timpul diviziunii celulare, generând aneuploidii?",
        options: [
            "Segmentare",
            "Nondisjuncție",
            "Autopolenizare",
            "Sciziune"
        ],
        correct: 1,
        explanation: "Nondisjuncția reprezintă nesepararea cromozomilor în timpul meiozei, fiind principala cauză a trisomiilor și monosomiilor."
    },

    // --- 10 ÎNTREBĂRI ADEVĂRAT SAU FALS ---
    {
        type: "Adevărat sau Fals",
        question: "21. În procesul de amitoză, membrana nucleară dispare complet și se formează fusul de diviziune.",
        options: ["Adevărat", "Fals"],
        correct: 1,
        explanation: "Fals. Amitoza are loc FĂRĂ dispariția completă a membranei nucleare, fără formarea fusului de diviziune și fără condensarea cromozomilor."
    },
    {
        type: "Adevărat sau Fals",
        question: "22. Celulele somatice ale unui organism pluricelular se divid prin mitoză, păstrând numărul diploid (2n) de cromozomi.",
        options: ["Adevărat", "Fals"],
        correct: 0,
        explanation: "Adevărat. Mitoza asigură formarea a două celule-fiice diploide (2n), identice cu celula-mamă."
    },
    {
        type: "Adevărat sau Fals",
        question: "23. În urma spermatogenezei, dintr-un spermatocit primar (diploid) se formează la final patru spermatozoizi funcționali (haploizi).",
        options: ["Adevărat", "Fals"],
        correct: 0,
        explanation: "Adevărat. Spermatocitul primar trece prin două diviziuni meiotice și generează patru spermatide haploide, care se transformă în patru spermatozoizi."
    },
    {
        type: "Adevărat sau Fals",
        question: "24. O genă recesivă se poate manifesta în fenotip chiar dacă este prezentă într-o singură copie în genotip (stare heterozigotă Aa).",
        options: ["Adevărat", "Fals"],
        correct: 1,
        explanation: "Fals. Gena recesivă trebuie să fie prezentă în două copii (stare homozigotă recesivă – aa) pentru a se manifesta în fenotip."
    },
    {
        type: "Adevărat sau Fals",
        question: "25. Genele care ocupă aceeași poziție (locus) în cromozomii omologi și determină același caracter se numesc gene alele.",
        options: ["Adevărat", "Fals"],
        correct: 0,
        explanation: "Adevărat. Fiecare individ are două gene alele pentru un caracter (una moștenită de la mamă, alta de la tată), situate pe același locus al cromozomilor omologi."
    },
    {
        type: "Adevărat sau Fals",
        question: "26. Variabilitatea ereditară apare sub influența factorilor de mediu, fără a modifica materialul genetic, și nu se transmite urmașilor.",
        options: ["Adevărat", "Fals"],
        correct: 1,
        explanation: "Fals. Aceasta este definiția variabilității NEEREDITARE. Variabilitatea ereditară presupune modificarea materialului genetic (recombinări sau mutații) și se transmite urmașilor."
    },
    {
        type: "Adevărat sau Fals",
        question: "27. Genele localizate pe cromozomul Y se transmit exclusiv de la tată la fiu.",
        options: ["Adevărat", "Fals"],
        correct: 0,
        explanation: "Adevărat. Deoarece doar persoanele de sex masculin (XY) posedă cromozomul Y, genele situate pe acesta se transmit doar pe linie paternă, de la tată la fiu."
    },
    {
        type: "Adevărat sau Fals",
        question: "28. Polidactilia (prezența a șase degete la mână sau picior) este o maladie genică autozomală dominantă.",
        options: ["Adevărat", "Fals"],
        correct: 0,
        explanation: "Adevărat. Arahnodactilia, brahidactilia și polidactilia sunt exemple de maladii genice autozomal dominante."
    },
    {
        type: "Adevărat sau Fals",
        question: "29. Riscul de a naște un copil cu sindromul Down scade odată cu înaintarea în vârstă a mamei (după 35 de ani).",
        options: ["Adevărat", "Fals"],
        correct: 1,
        explanation: "Fals. După vârsta de 35 de ani, riscul de a avea un copil cu sindromul Down CREȘTE (1 din 365 la 35 de ani, ajungând la 1 din 100 la 40 de ani)."
    },
    {
        type: "Adevărat sau Fals",
        question: "30. Sindromul Edwards este determinat de prezența unui cromozom suplimentar în perechea a 18-a (trisomia 18).",
        options: ["Adevărat", "Fals"],
        correct: 0,
        explanation: "Adevărat. Sindromul Edwards este cauzat de trisomia 18 (47 de cromozomi în cariotip)."
    }
];

let currentQuestionIndex = 0;
let score = 0;
const letters = ["A", "B", "C", "D"];

const questionCounterEl = document.getElementById("question-counter");
const questionTypeEl = document.getElementById("question-type");
const scoreTrackerEl = document.getElementById("score-tracker");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const explanationBoxEl = document.getElementById("explanation-box");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

const quizBody = document.getElementById("quiz-body");
const quizFooter = document.getElementById("quiz-footer");
const resultScreen = document.getElementById("result-screen");

function switchTab(tabName) {
    const tabTeorie = document.getElementById("tab-teorie");
    const tabQuiz = document.getElementById("tab-quiz");
    const sectionTeorie = document.getElementById("section-teorie");
    const sectionQuiz = document.getElementById("section-quiz");

    if (tabName === "teorie") {
        tabTeorie.classList.add("active");
        tabQuiz.classList.remove("active");
        sectionTeorie.classList.add("active");
        sectionQuiz.classList.remove("active");
    } else {
        tabQuiz.classList.add("active");
        tabTeorie.classList.remove("active");
        sectionQuiz.classList.add("active");
        sectionTeorie.classList.remove("active");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    
    explanationBoxEl.style.display = "none";
    nextBtn.style.display = "none";
    optionsListEl.innerHTML = "";

    questionCounterEl.textContent = `Întrebarea ${currentQuestionIndex + 1} din ${quizData.length}`;
    questionTypeEl.textContent = currentQuiz.type;
    scoreTrackerEl.textContent = `Scor: ${score}`;
    questionTextEl.textContent = currentQuiz.question;

    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentQuiz.options.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");

        const letterSpan = document.createElement("span");
        letterSpan.classList.add("option-letter");
        letterSpan.textContent = currentQuiz.type === "Adevărat sau Fals" ? (index === 0 ? "A" : "F") : letters[index];

        const textSpan = document.createElement("span");
        textSpan.textContent = optionText;

        button.appendChild(letterSpan);
        button.appendChild(textSpan);

        button.addEventListener("click", () => selectOption(index, button));
        optionsListEl.appendChild(button);
    });
}

function selectOption(selectedIndex, selectedButton) {
    const currentQuiz = quizData[currentQuestionIndex];
    const allButtons = optionsListEl.querySelectorAll(".option-btn");

    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuiz.correct) {
        selectedButton.classList.add("correct");
        score++;
        scoreTrackerEl.textContent = `Scor: ${score}`;
    } else {
        selectedButton.classList.add("wrong");
        allButtons[currentQuiz.correct].classList.add("correct");
    }

    explanationBoxEl.innerHTML = `<strong>Explicație:</strong> ${currentQuiz.explanation}`;
    explanationBoxEl.style.display = "block";

    nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? "Vezi Rezultatul 🏆" : "Următoarea întrebare ➔";
    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    progressBar.style.width = "100%";
    quizBody.style.display = "none";
    quizFooter.style.display = "none";
    resultScreen.style.display = "block";

    document.getElementById("final-score").textContent = score;
    const resultMsg = document.getElementById("result-message");
    const resultSub = document.getElementById("result-subtext");

    const percentage = (score / quizData.length) * 100;

    if (percentage >= 90) {
        resultMsg.textContent = "Excelent! Ești un adevărat expert în biologie! 🌟";
        resultSub.textContent = "Stăpânești perfect noțiunile despre diviziunea celulară, genetică și maladiile ereditare.";
    } else if (percentage >= 70) {
        resultMsg.textContent = "Foarte bine! Ai obținut un rezultat solid! 👏";
        resultSub.textContent = "Ai înțeles majoritatea conceptelor din capitol. Mai recapitulează puțin detaliile greșite.";
    } else if (percentage >= 50) {
        resultMsg.textContent = "Rezultat satisfăcător! 👍";
        resultSub.textContent = "Ai o bază bună, dar îți recomandăm să recitești secțiunea de Noțiuni Teoretice.";
    } else {
        resultMsg.textContent = "Mai ai nevoie de puțină pregătire! 📚";
        resultSub.textContent = "Recitește Noțiunile Teoretice și încearcă din nou quiz-ul pentru a-ți fixa cunoștințele.";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizBody.style.display = "block";
    quizFooter.style.display = "flex";
    resultScreen.style.display = "none";
    loadQuestion();
}

// Inițializare la încărcarea paginii
loadQuestion();