const headerTitle = document.querySelector('.header h1');
const text = "Moisson 2025 | EEBB"; // Texte à écrire
headerTitle.textContent = ''; // On vide le contenu initial

let index = 0;
let isDeleting = false;

function typeWriter() {
    // Si on est en train d'écrire
    if (!isDeleting && index < text.length) {
        headerTitle.textContent += text.charAt(index); // Ajoute une lettre
        index++;
        setTimeout(typeWriter, 100); // Vitesse d'écriture (100 ms par lettre)
    }
    // Si on est en train d'effacer
    else if (isDeleting && index > 0) {
        headerTitle.textContent = text.substring(0, index - 1); // Efface une lettre
        index--;
        setTimeout(typeWriter, 50); // Vitesse d'effacement (50 ms par lettre)
    }
    // Si on a fini d'écrire ou d'effacer, on inverse l'état
    else {
        isDeleting = !isDeleting; // On passe en mode "effacement" ou "écriture"
        setTimeout(typeWriter, isDeleting ? 1000 : 200); // Temps d'attente avant de recommencer
    }
}

// Démarrer l'effet
typeWriter();

function typeWriter() {
    if (!isDeleting && index < text.length) {
        headerTitle.textContent = text.substring(0, index + 1) + '|'; // Ajoute le curseur
        index++;
        setTimeout(typeWriter, 100);
    } else if (isDeleting && index > 0) {
        headerTitle.textContent = text.substring(0, index - 1) + '|'; // Ajoute le curseur
        index--;
        setTimeout(typeWriter, 50);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeWriter, isDeleting ? 1000 : 200);
    }
}