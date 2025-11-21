import { Question } from '../types';

export const questions: Question[] = [
  // --- EXISTING QUESTIONS (1-9) ---
  {
    id: 1,
    category: 'Hardware',
    difficulty: 'Easy',
    text: "Un client à Limete signale que son ordinateur de bureau s'éteint brusquement chaque fois qu'il y a une fluctuation de tension sur le réseau SNEL, même minime. Quel équipement est indispensable pour protéger son matériel et assurer la continuité ?",
    options: [
      { id: 'a', text: 'Un parasurtenseur (Surge Protector)' },
      { id: 'b', text: 'Un onduleur (UPS)' },
      { id: 'c', text: 'Une alimentation redondante' },
      { id: 'd', text: 'Un générateur diesel' }
    ],
    correctAnswerId: 'b',
    explanation: "Bien que le parasurtenseur protège contre les surtensions, seul l'Onduleur (UPS - Uninterruptible Power Supply) fournit une batterie de secours temporaire pour permettre d'enregistrer le travail et d'éteindre proprement le PC lors des coupures fréquentes de la SNEL."
  },
  {
    id: 2,
    category: 'Network',
    difficulty: 'Medium',
    text: "Vous configurez un réseau pour une ONG basée dans une province reculée de la RDC où la fibre optique n'arrive pas encore. Ils utilisent une connexion VSAT. Les utilisateurs se plaignent d'un délai important lors des appels VoIP (WhatsApp/Zoom). Quel est le concept technique expliquant ce phénomène ?",
    options: [
      { id: 'a', text: 'Jitter (Gigue)' },
      { id: 'b', text: 'Bandwidth throttling' },
      { id: 'c', text: 'Latence (Latency)' },
      { id: 'd', text: 'Atténuation du signal' }
    ],
    correctAnswerId: 'c',
    explanation: "Les connexions par satellite (VSAT) ont une latence élevée inhérente car le signal doit voyager jusqu'au satellite en orbite géostationnaire et revenir (environ 36 000 km x 2), ce qui cause ce délai perceptible."
  },
  {
    id: 3,
    category: 'Security',
    difficulty: 'Hard',
    text: "Vous gérez un Cybercafé populaire à Matonge utilisant un routeur MikroTik. Vous remarquez que des voisins se connectent à votre Wi-Fi sans payer. Quelle configuration sur le MikroTik permettrait de restreindre l'accès uniquement aux appareils des clients payants enregistrés ?",
    options: [
      { id: 'a', text: 'Désactiver le DHCP' },
      { id: 'b', text: 'Filtrage par adresse MAC' },
      { id: 'c', text: 'Changer le canal Wi-Fi' },
      { id: 'd', text: 'Activer le WPS' }
    ],
    correctAnswerId: 'b',
    explanation: "Le filtrage par adresse MAC (MAC Filtering) permet de créer une liste blanche (whitelist) des appareils autorisés. Si l'adresse MAC d'un appareil n'est pas dans la liste du routeur MikroTik, il ne pourra pas se connecter, même s'il connaît le mot de passe."
  },
  {
    id: 4,
    category: 'Troubleshooting',
    difficulty: 'Easy',
    text: "Un ordinateur dans un bureau situé près d'une route poussiéreuse à Kinshasa surchauffe et fait un bruit fort. Après ouverture, vous voyez les ventilateurs encrassés de poussière rouge. Quelle est la première étape de maintenance recommandée ?",
    options: [
      { id: 'a', text: 'Laver la carte mère avec de l\'eau distillée' },
      { id: 'b', text: 'Utiliser une bombe à air comprimé pour chasser la poussière' },
      { id: 'c', text: 'Remplacer immédiatement le processeur' },
      { id: 'd', text: 'Augmenter la vitesse du ventilateur dans le BIOS' }
    ],
    correctAnswerId: 'b',
    explanation: "L'accumulation de poussière est fréquente à Kinshasa. L'utilisation d'air comprimé est la méthode la plus sûre pour dégager les ventilateurs et les dissipateurs thermiques sans endommager les composants électroniques par l'électricité statique ou l'humidité."
  },
  {
    id: 5,
    category: 'Network',
    difficulty: 'Hard',
    text: "Une entreprise à Gombe déploie un réseau local. Ils doivent passer des câbles réseaux dans un faux-plafond où passent également de nombreux câbles électriques de gros diamètre pour la climatisation. Quel type de câble Ethernet minimise les interférences électromagnétiques (EMI) ?",
    options: [
      { id: 'a', text: 'UTP (Unshielded Twisted Pair) Cat 6' },
      { id: 'b', text: 'STP (Shielded Twisted Pair) Cat 6' },
      { id: 'c', text: 'Câble Coaxial' },
      { id: 'd', text: 'Câble téléphonique RJ11' }
    ],
    correctAnswerId: 'b',
    explanation: "Le câble STP (Shielded Twisted Pair) possède un blindage métallique qui protège les données contre les interférences électromagnétiques (EMI) causées par les lignes électriques proches, contrairement à l'UTP qui n'est pas blindé."
  },
  {
    id: 6,
    category: 'Hardware',
    difficulty: 'Easy',
    text: "Un étudiant de l'ISIPA a besoin de stocker de grandes quantités de vidéos de cours et de machines virtuelles, mais il a un budget limité. Il n'a pas besoin d'une vitesse extrême, juste de capacité. Quel type de disque recommandez-vous ?",
    options: [
      { id: 'a', text: 'SSD NVMe M.2' },
      { id: 'b', text: 'HDD (Disque Dur Mécanique)' },
      { id: 'c', text: 'Clé USB 3.0' },
      { id: 'd', text: 'Carte SD Class 10' }
    ],
    correctAnswerId: 'b',
    explanation: "Pour le rapport coût/capacité (Go par Franc Congolais), le disque dur mécanique (HDD) reste le meilleur choix pour le stockage de masse (archivage) lorsque la vitesse n'est pas la priorité absolue, comparé aux SSD plus chers."
  },
  {
    id: 7,
    category: 'Security',
    difficulty: 'Easy',
    text: "Un employé d'une banque reçoit un email prétendant venir de la 'Direction IT' demandant de confirmer son mot de passe via un lien urgent, sous peine de blocage de compte. De quel type d'attaque s'agit-il ?",
    options: [
      { id: 'a', text: 'DDoS' },
      { id: 'b', text: 'Phishing (Hameçonnage)' },
      { id: 'c', text: 'Man-in-the-middle' },
      { id: 'd', text: 'Brute Force' }
    ],
    correctAnswerId: 'b',
    explanation: "C'est une attaque de Phishing (Hameçonnage). L'attaquant utilise l'ingénierie sociale pour tromper l'utilisateur et l'inciter à divulguer des informations confidentielles en se faisant passer pour une entité de confiance."
  },
  {
    id: 8,
    category: 'Troubleshooting',
    difficulty: 'Medium',
    text: "Vous tentez de diagnostiquer un problème de connexion vers un serveur à Lubumbashi depuis Kinshasa. Vous voulez voir chaque routeur traversé par le paquet pour identifier où la connexion échoue. Quelle commande utilisez-vous ?",
    options: [
      { id: 'a', text: 'ping' },
      { id: 'b', text: 'ipconfig' },
      { id: 'c', text: 'tracert (ou traceroute)' },
      { id: 'd', text: 'nslookup' }
    ],
    correctAnswerId: 'c',
    explanation: "La commande `tracert` (Windows) ou `traceroute` (Linux/macOS) permet de visualiser le chemin emprunté par les paquets IP et d'identifier à quel 'saut' (hop) le problème survient."
  },
  {
    id: 9,
    category: 'Network',
    difficulty: 'Hard',
    text: "Un technicien doit configurer un sous-réseau pour un petit bureau de 10 utilisateurs à Bandal. Quelle masque de sous-réseau offre suffisamment d'adresses IP tout en minimisant le gaspillage (le plus proche de 10 hôtes) ?",
    options: [
      { id: 'a', text: '255.255.255.0 (/24)' },
      { id: 'b', text: '255.255.255.240 (/28)' },
      { id: 'c', text: '255.255.255.252 (/30)' },
      { id: 'd', text: '255.255.0.0 (/16)' }
    ],
    correctAnswerId: 'b',
    explanation: "Un masque /28 (255.255.255.240) fournit 16 adresses au total, dont 14 utilisables pour les hôtes (16 - adresse réseau - adresse broadcast). C'est suffisant pour 10 utilisateurs et minimise le gaspillage comparé au /24 (254 hôtes)."
  },

  // --- NEW HARDWARE QUESTIONS (10-25) ---
  {
    id: 10,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Dans un bureau administratif à Lingwala très humide pendant la saison des pluies, un ordinateur refuse de démarrer. Vous remarquez des traces vertes sur la carte mère. Quel est le problème probable ?",
    options: [
      { id: 'a', text: 'Surchauffe du CPU' },
      { id: 'b', text: 'Corrosion due à l\'humidité' },
      { id: 'c', text: 'Disque dur fragmenté' },
      { id: 'd', text: 'Incompatibilité de la RAM' }
    ],
    correctAnswerId: 'b',
    explanation: "L'humidité élevée à Kinshasa peut causer de l'oxydation et de la corrosion sur les circuits imprimés (traces vertes/blanches), créant des courts-circuits ou des ruptures de connexion."
  },
  {
    id: 11,
    category: 'Hardware',
    difficulty: 'Easy',
    text: "Une imprimante laser dans une école à Lemba imprime des pages avec des lignes verticales noires constantes. Quel composant est probablement défectueux ?",
    options: [
      { id: 'a', text: 'Le câble USB' },
      { id: 'b', text: 'Le bac à papier' },
      { id: 'c', text: 'Le tambour (Drum)' },
      { id: 'd', text: 'La carte réseau' }
    ],
    correctAnswerId: 'c',
    explanation: "Des lignes verticales ou des taches répétitives sur une impression laser indiquent souvent que le tambour (Drum) est rayé ou endommagé, ou que le racleur (wiper blade) ne nettoie pas correctement."
  },
  {
    id: 12,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Un graphiste à la Gombe veut connecter trois moniteurs haute résolution à son PC pour le montage vidéo. Quel port vidéo offre la meilleure bande passante pour supporter la 4K à 60Hz ?",
    options: [
      { id: 'a', text: 'VGA' },
      { id: 'b', text: 'DVI-D' },
      { id: 'c', text: 'DisplayPort' },
      { id: 'd', text: 'RCA' }
    ],
    correctAnswerId: 'c',
    explanation: "DisplayPort (surtout versions 1.2 et supérieures) offre une bande passante supérieure au HDMI standard et au DVI, idéale pour le multi-écrans et les hautes résolutions (daisy-chaining possible)."
  },
  {
    id: 13,
    category: 'Hardware',
    difficulty: 'Hard',
    text: "Vous assemblez un serveur pour une PME à Kingabwa. Vous voulez configurer le stockage pour qu'il continue de fonctionner même si un disque dur tombe en panne, tout en conservant de bonnes performances de lecture. Quel RAID choisissez-vous (min 3 disques) ?",
    options: [
      { id: 'a', text: 'RAID 0' },
      { id: 'b', text: 'RAID 1' },
      { id: 'c', text: 'RAID 5' },
      { id: 'd', text: 'JBOD' }
    ],
    correctAnswerId: 'c',
    explanation: "Le RAID 5 offre la tolérance aux pannes (parité) et de bonnes performances de lecture. Si un disque échoue, les données sont reconstruites à partir de la parité. Il nécessite au moins 3 disques."
  },
  {
    id: 14,
    category: 'Hardware',
    difficulty: 'Easy',
    text: "Lors d'une formation à l'UNIKIN, le projecteur affiche les couleurs de manière incorrecte (tout est teinté en rose). Le câble vidéo a des broches pliées. De quel type de câble s'agit-il probablement ?",
    options: [
      { id: 'a', text: 'VGA (DB-15)' },
      { id: 'b', text: 'HDMI' },
      { id: 'c', text: 'USB-C' },
      { id: 'd', text: 'Ethernet' }
    ],
    correctAnswerId: 'a',
    explanation: "Le câble VGA est un signal analogique. Si une broche responsable d'une couleur (Rouge, Vert ou Bleu) est tordue ou ne fait pas contact, l'image prendra une teinte étrange (ex: manque de vert = image rose/violette)."
  },
  {
    id: 15,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Quel outil utiliseriez-vous pour tester si une prise murale à la Cité délivre bien du 220V avant de brancher un équipement sensible ?",
    options: [
      { id: 'a', text: 'Testeur de câble réseau' },
      { id: 'b', text: 'Multimètre' },
      { id: 'c', text: 'Loopback plug' },
      { id: 'd', text: 'Tonomètre' }
    ],
    correctAnswerId: 'b',
    explanation: "Un multimètre numérique réglé sur 'Volts AC' permet de mesurer la tension de la prise murale et de vérifier si elle est stable et conforme aux normes (environ 220-240V en RDC)."
  },

  // --- NEW NETWORK QUESTIONS (26-45) ---
  {
    id: 26,
    category: 'Network',
    difficulty: 'Easy',
    text: "Votre smartphone affiche 'Connecté, pas d'internet' sur le Wi-Fi d'un restaurant à Bon Marché. Vous pouvez accéder à la page de configuration du routeur, mais pas à Google. Quel service réseau est probablement en panne chez le FAI ?",
    options: [
      { id: 'a', text: 'DHCP' },
      { id: 'b', text: 'DNS' },
      { id: 'c', text: 'SSH' },
      { id: 'd', text: 'FTP' }
    ],
    correctAnswerId: 'b',
    explanation: "Si vous avez une IP (connecté) mais ne pouvez pas naviguer par nom de domaine (comme google.com), c'est souvent un problème de DNS (Domain Name System) qui ne traduit pas les noms en adresses IP."
  },
  {
    id: 27,
    category: 'Network',
    difficulty: 'Hard',
    text: "Un technicien Fibre Optique connecte deux immeubles à la Gombe distants de 300 mètres. Il utilise un câble fibre orange. Quel type de fibre est-ce et est-ce approprié ?",
    options: [
      { id: 'a', text: 'Monomode (Single-mode), approprié' },
      { id: 'b', text: 'Multimode, approprié pour cette courte distance' },
      { id: 'c', text: 'Coaxial, inapproprié' },
      { id: 'd', text: 'Monomode, inapproprié' }
    ],
    correctAnswerId: 'b',
    explanation: "La gaine orange indique généralement de la fibre Multimode (OM1/OM2). Le Multimode est moins cher et parfait pour les courtes distances (< 550m) comme entre deux bâtiments proches ou dans un campus."
  },
  {
    id: 28,
    category: 'Network',
    difficulty: 'Medium',
    text: "Vous devez sertir un câble RJ45 pour connecter un ordinateur à un switch. Quelle norme de câblage est la plus couramment utilisée en RDC et internationalement pour les câbles droits ?",
    options: [
      { id: 'a', text: 'T568A' },
      { id: 'b', text: 'T568B' },
      { id: 'c', text: 'Rollover' },
      { id: 'd', text: 'Crossover' }
    ],
    correctAnswerId: 'b',
    explanation: "Bien que T568A existe, la norme T568B (commençant par Blanc-Orange, Orange) est le standard de fait le plus répandu pour le câblage Ethernet commercial."
  },
  {
    id: 29,
    category: 'Network',
    difficulty: 'Hard',
    text: "Une société minière à Kolwezi veut interconnecter ses bureaux distants via Internet de manière sécurisée comme s'ils étaient sur le même réseau local. Quelle technologie doivent-ils utiliser ?",
    options: [
      { id: 'a', text: 'VLAN' },
      { id: 'b', text: 'VPN Site-à-Site' },
      { id: 'c', text: 'Bureau à distance (RDP)' },
      { id: 'd', text: 'WEP' }
    ],
    correctAnswerId: 'b',
    explanation: "Un VPN (Virtual Private Network) Site-à-Site connecte des réseaux entiers entre eux via Internet de manière chiffrée (tunneling), reliant le bureau de Kolwezi au siège par exemple."
  },
  {
    id: 30,
    category: 'Network',
    difficulty: 'Easy',
    text: "Quel est le numéro de port par défaut utilisé pour sécuriser les transactions bancaires en ligne (HTTPS) ?",
    options: [
      { id: 'a', text: '80' },
      { id: 'b', text: '21' },
      { id: 'c', text: '443' },
      { id: 'd', text: '25' }
    ],
    correctAnswerId: 'c',
    explanation: "Le port 443 est le standard pour HTTPS (Web sécurisé via TLS/SSL). Le port 80 est pour le HTTP non sécurisé."
  },
  {
    id: 31,
    category: 'Network',
    difficulty: 'Medium',
    text: "Vous installez des caméras IP dans un entrepôt à Kingasani. Il n'y a pas de prises électriques près des caméras. Quelle technologie de switch permet d'alimenter les caméras via le câble réseau ?",
    options: [
      { id: 'a', text: 'QoS' },
      { id: 'b', text: 'PoE (Power over Ethernet)' },
      { id: 'c', text: 'VLAN' },
      { id: 'd', text: 'STP' }
    ],
    correctAnswerId: 'b',
    explanation: "Le PoE (Power over Ethernet, normes 802.3af/at/bt) permet de faire passer le courant électrique et les données dans le même câble Ethernet, simplifiant l'installation des caméras IP et téléphones VoIP."
  },
  {
    id: 32,
    category: 'Network',
    difficulty: 'Medium',
    text: "Lequel de ces types d'adresses IP est une adresse IP Privée (non routable sur Internet), souvent utilisée dans les réseaux domestiques ?",
    options: [
      { id: 'a', text: '8.8.8.8' },
      { id: 'b', text: '192.168.1.50' },
      { id: 'c', text: '172.56.20.1' },
      { id: 'd', text: '209.85.231.104' }
    ],
    correctAnswerId: 'b',
    explanation: "Les plages d'adresses privées (RFC 1918) incluent 192.168.x.x, 10.x.x.x et 172.16.x.x à 172.31.x.x. Elles sont utilisées pour les réseaux locaux (LAN)."
  },

  // --- NEW SECURITY QUESTIONS (46-65) ---
  {
    id: 46,
    category: 'Security',
    difficulty: 'Easy',
    text: "Un employé quitte son poste à la réception pour aller déjeuner mais laisse son PC déverrouillé. Un visiteur en profite pour copier des fichiers. Quelle mesure de sécurité physique/logique aurait empêché cela ?",
    options: [
      { id: 'a', text: 'Antivirus' },
      { id: 'b', text: 'Verrouillage de session automatique (Screen lock)' },
      { id: 'c', text: 'Pare-feu' },
      { id: 'd', text: 'Chiffrement des emails' }
    ],
    correctAnswerId: 'b',
    explanation: "Configurer un verrouillage d'écran automatique après une courte période d'inactivité (ex: 5 minutes) ou utiliser le raccourci (Win+L) est une pratique de sécurité de base essentielle."
  },
  {
    id: 47,
    category: 'Security',
    difficulty: 'Medium',
    text: "Vous configurez le Wi-Fi pour un hôtel à Lubumbashi. Quel protocole de sécurité est actuellement recommandé pour remplacer le WPA2 et offrir une meilleure protection contre les attaques par dictionnaire ?",
    options: [
      { id: 'a', text: 'WEP' },
      { id: 'b', text: 'WPA' },
      { id: 'c', text: 'WPA3' },
      { id: 'd', text: 'TKIP' }
    ],
    correctAnswerId: 'c',
    explanation: "WPA3 est la dernière norme de sécurité Wi-Fi. Elle offre un chiffrement plus robuste (SAE - Simultaneous Authentication of Equals) qui protège mieux contre les tentatives de devinette de mot de passe hors ligne."
  },
  {
    id: 48,
    category: 'Security',
    difficulty: 'Hard',
    text: "Une attaque informatique a paralysé le réseau d'une banque à Kinshasa en inondant ses serveurs de millions de fausses requêtes provenant d'ordinateurs zombies à travers le monde. Comment appelle-t-on cette attaque ?",
    options: [
      { id: 'a', text: 'Ransomware' },
      { id: 'b', text: 'DDoS (Distributed Denial of Service)' },
      { id: 'c', text: 'SQL Injection' },
      { id: 'd', text: 'Zero-day' }
    ],
    correctAnswerId: 'b',
    explanation: "Une attaque DDoS (Déni de Service Distribué) vise à rendre un service indisponible en le surchargeant de trafic provenant de multiples sources (botnet)."
  },
  {
    id: 49,
    category: 'Security',
    difficulty: 'Medium',
    text: "Pour accéder aux serveurs de données sensibles, les administrateurs doivent utiliser un mot de passe ET un code reçu sur leur téléphone. Quel concept de sécurité est mis en œuvre ?",
    options: [
      { id: 'a', text: 'SSO (Single Sign-On)' },
      { id: 'b', text: 'MFA (Authentification Multi-Facteurs)' },
      { id: 'c', text: 'Biométrie' },
      { id: 'd', text: 'ACL (Access Control List)' }
    ],
    correctAnswerId: 'b',
    explanation: "Le MFA (Multi-Factor Authentication) exige au moins deux types de preuves d'identité : quelque chose que l'on sait (mot de passe) et quelque chose que l'on a (téléphone/token) ou que l'on est (biométrie)."
  },
  {
    id: 50,
    category: 'Security',
    difficulty: 'Easy',
    text: "Un utilisateur reçoit un message WhatsApp promettant 'Internet Gratuit 50GB' s'il clique sur un lien et installe une application. Après installation, son téléphone devient lent et affiche des pubs partout. Qu'a-t-il installé ?",
    options: [
      { id: 'a', text: 'Un pare-feu' },
      { id: 'b', text: 'Un Malware (Logiciel malveillant)' },
      { id: 'c', text: 'Un patch de sécurité' },
      { id: 'd', text: 'Un VPN' }
    ],
    correctAnswerId: 'b',
    explanation: "C'est un cas classique d'ingénierie sociale menant à l'installation de Malware (Adware ou Spyware). Le logiciel malveillant consomme des ressources et compromet la sécurité de l'appareil."
  },

  // --- NEW TROUBLESHOOTING QUESTIONS (66-85) ---
  {
    id: 66,
    category: 'Troubleshooting',
    difficulty: 'Easy',
    text: "Un utilisateur se plaint que son clavier écrit des chiffres au lieu de lettres sur la partie droite (ex: J=1, K=2, L=3) sur son laptop compact. Quel est le problème ?",
    options: [
      { id: 'a', text: 'Le clavier est cassé' },
      { id: 'b', text: 'La touche NumLock est activée' },
      { id: 'c', text: 'Virus informatique' },
      { id: 'd', text: 'Pilote clavier manquant' }
    ],
    correctAnswerId: 'b',
    explanation: "Sur les petits ordinateurs portables sans pavé numérique dédié, la touche 'NumLock' (Verr Num) transforme une partie des lettres en pavé numérique virtuel."
  },
  {
    id: 67,
    category: 'Troubleshooting',
    difficulty: 'Medium',
    text: "Un PC démarre mais l'écran reste noir et vous entendez une série de bips au démarrage (1 long, 2 courts). Que signifient ces bips ?",
    options: [
      { id: 'a', text: 'Le disque dur est plein' },
      { id: 'b', text: 'Codes POST indiquant une erreur matérielle (souvent vidéo)' },
      { id: 'c', text: 'Windows est en train de se mettre à jour' },
      { id: 'd', text: 'L\'imprimante est hors ligne' }
    ],
    correctAnswerId: 'b',
    explanation: "Le POST (Power-On Self-Test) vérifie le matériel au démarrage. Les séquences de bips sont des codes d'erreur diagnostiques. 1 long 2 courts signale souvent un problème de carte graphique."
  },
  {
    id: 68,
    category: 'Troubleshooting',
    difficulty: 'Medium',
    text: "Un utilisateur à Kintambo ne peut pas imprimer. Vous voyez que les documents s'accumulent dans la file d'attente sans partir. Le service 'Spouleur d'impression' (Print Spooler) semble bloqué. Que faire ?",
    options: [
      { id: 'a', text: 'Réinstaller Windows' },
      { id: 'b', text: "Redémarrer le service Spouleur d'impression" },
      { id: 'c', text: 'Acheter une nouvelle imprimante' },
      { id: 'd', text: 'Changer le papier' }
    ],
    correctAnswerId: 'b',
    explanation: "Le redémarrage du service 'Print Spooler' (Spouleur d'impression) dans la console de gestion des services (services.msc) résout souvent les problèmes de documents bloqués dans la file d'attente."
  },
  {
    id: 69,
    category: 'Troubleshooting',
    difficulty: 'Hard',
    text: "Un serveur Windows redémarre aléatoirement. Vous soupçonnez une barrette de RAM défectueuse. Quel outil natif de Windows permet de tester la mémoire au prochain redémarrage ?",
    options: [
      { id: 'a', text: 'CHKDSK' },
      { id: 'b', text: 'Windows Memory Diagnostic (mdsched.exe)' },
      { id: 'c', text: 'Defrag' },
      { id: 'd', text: 'Disk Cleanup' }
    ],
    correctAnswerId: 'b',
    explanation: "L'outil 'Diagnostic de mémoire Windows' (Windows Memory Diagnostic) redémarre le PC et effectue des tests intensifs d'écriture/lecture sur la RAM pour détecter les cellules défectueuses."
  },
  {
    id: 70,
    category: 'Troubleshooting',
    difficulty: 'Easy',
    text: "Un ordinateur portable ne tient plus la charge et s'éteint dès qu'on débranche le chargeur, bien que Windows indique 'Batterie 100%'. Quel est le problème probable ?",
    options: [
      { id: 'a', text: 'Virus de batterie' },
      { id: 'b', text: 'Batterie en fin de vie (HS)' },
      { id: 'c', text: 'Chargeur défectueux' },
      { id: 'd', text: 'Économiseur d\'écran activé' }
    ],
    correctAnswerId: 'b',
    explanation: "Les batteries Lithium-Ion perdent leur capacité avec le temps. Si elle ne tient plus la charge malgré l'indication logicielle, les cellules chimiques sont probablement mortes et la batterie doit être remplacée."
  },
  
  // --- MIXED CATEGORIES & COMPLEX SCENARIOS (86-100+) ---
  {
    id: 86,
    category: 'Network',
    difficulty: 'Medium',
    text: "Dans un immeuble à Gombe, plusieurs bureaux partagent la connexion. Vous voulez empêcher les employés du Bureau A d'accéder aux dossiers partagés du Bureau B, tout en utilisant le même switch. Quelle fonction utiliser ?",
    options: [
      { id: 'a', text: 'Port Mirroring' },
      { id: 'b', text: 'VLAN (Virtual LAN)' },
      { id: 'c', text: 'VPN' },
      { id: 'd', text: 'Hub' }
    ],
    correctAnswerId: 'b',
    explanation: "Les VLANs permettent de segmenter logiquement un réseau physique. En mettant le Bureau A dans le VLAN 10 et le Bureau B dans le VLAN 20, ils sont isolés l'un de l'autre au niveau 2, même sur le même switch."
  },
  {
    id: 87,
    category: 'Security',
    difficulty: 'Hard',
    text: "Un administrateur système veut détruire des disques durs contenant des données confidentielles de l'État avant de les jeter. Le simple formatage ne suffit pas. Quelle méthode garantit la destruction totale des données magnétiques ?",
    options: [
      { id: 'a', text: 'Formatage bas niveau' },
      { id: 'b', text: 'Degaussing (Démagnétisation)' },
      { id: 'c', text: 'Suppression de la partition' },
      { id: 'd', text: 'CHKDSK /F' }
    ],
    correctAnswerId: 'b',
    explanation: "Le Degaussing utilise un aimant très puissant pour détruire le champ magnétique des plateaux du disque dur, rendant les données irrécupérables (et le disque inutilisable)."
  },
  {
    id: 88,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Vous installez de la mémoire RAM dans un serveur. Vous voyez la mention 'ECC' sur les barrettes. Qu'est-ce que cela signifie ?",
    options: [
      { id: 'a', text: 'Extra Cool Chips (Refroidissement)' },
      { id: 'b', text: 'Error Correcting Code (Code correcteur d\'erreurs)' },
      { id: 'c', text: 'Electronic Cash Card' },
      { id: 'd', text: 'Enhanced Clock Cycle' }
    ],
    correctAnswerId: 'b',
    explanation: "La mémoire ECC peut détecter et corriger les erreurs binaires (bit flips) qui se produisent spontanément, ce qui est crucial pour la stabilité des serveurs qui fonctionnent 24/7."
  },
  {
    id: 89,
    category: 'Network',
    difficulty: 'Easy',
    text: "Quel outil utiliseriez-vous pour vérifier si un câble Ethernet que vous venez de sertir fonctionne correctement et que les 8 fils sont bien connectés ?",
    options: [
      { id: 'a', text: 'Pince à sertir' },
      { id: 'b', text: 'Testeur de câble (Cable Tester)' },
      { id: 'c', text: 'Tournevis' },
      { id: 'd', text: 'Multimètre' }
    ],
    correctAnswerId: 'b',
    explanation: "Un testeur de câble réseau vérifie la continuité de chaque fil et s'assure que l'ordre des broches (mapping) est correct aux deux extrémités."
  },
  {
    id: 90,
    category: 'Troubleshooting',
    difficulty: 'Medium',
    text: "Un utilisateur signale que son écran scintille (flickering) par intermittence, surtout quand il bouge son laptop. Quel est le composant le plus probablement en cause ?",
    options: [
      { id: 'a', text: 'Le pilote graphique' },
      { id: 'b', text: 'La nappe vidéo (Inverter/Ribbon cable)' },
      { id: 'c', text: 'Le processeur' },
      { id: 'd', text: 'Le disque dur' }
    ],
    correctAnswerId: 'b',
    explanation: "Si le problème est lié au mouvement physique de l'écran (ouverture/fermeture), c'est presque toujours un problème matériel avec la nappe (câble plat) qui relie la carte mère à l'écran à travers la charnière."
  },
  {
    id: 91,
    category: 'Security',
    difficulty: 'Easy',
    text: "Quel est le principe de sécurité qui stipule qu'un utilisateur ne doit avoir que les droits strictement nécessaires pour faire son travail, et pas plus ?",
    options: [
      { id: 'a', text: 'Sécurité par l\'obscurité' },
      { id: 'b', text: 'Principe du moindre privilège (Least Privilege)' },
      { id: 'c', text: 'Authentification unique' },
      { id: 'd', text: 'Non-répudiation' }
    ],
    correctAnswerId: 'b',
    explanation: "Le principe du moindre privilège est fondamental. Il limite les dommages potentiels si un compte est compromis, car l'attaquant n'aura pas les droits d'administrateur complets."
  },
  {
    id: 92,
    category: 'Hardware',
    difficulty: 'Hard',
    text: "Sur une carte mère moderne, quelle puce contient le firmware de bas niveau qui initialise le matériel au démarrage (remplaçant le BIOS traditionnel) et supporte le Secure Boot ?",
    options: [
      { id: 'a', text: 'CMOS' },
      { id: 'b', text: 'Northbridge' },
      { id: 'c', text: 'UEFI' },
      { id: 'd', text: 'SATA' }
    ],
    correctAnswerId: 'c',
    explanation: "L'UEFI (Unified Extensible Firmware Interface) est le successeur moderne du BIOS. Il offre une interface graphique, supporte les disques > 2To (GPT) et des fonctions de sécurité comme le Secure Boot."
  },
  {
    id: 93,
    category: 'Network',
    difficulty: 'Medium',
    text: "À Kinshasa, lors de l'installation d'une antenne Wi-Fi extérieure longue portée (Point-to-Point), quel facteur environnemental (outre la pluie) devez-vous prendre en compte pour la 'Zone de Fresnel' ?",
    options: [
      { id: 'a', text: 'La température du sol' },
      { id: 'b', text: 'Les obstacles physiques (arbres, bâtiments)' },
      { id: 'c', text: 'La couleur de l\'antenne' },
      { id: 'd', text: 'La marque du routeur' }
    ],
    correctAnswerId: 'b',
    explanation: "La Zone de Fresnel est une zone elliptique virtuelle entre les deux antennes. Elle doit être dégagée d'au moins 60% de tout obstacle (arbres, immeubles) pour garantir une bonne transmission du signal."
  },
  {
    id: 94,
    category: 'Troubleshooting',
    difficulty: 'Easy',
    text: "Un PC affiche un écran bleu (BSOD) avec l'erreur 'DATA_BUS_ERROR' peu après l'ajout d'une nouvelle barrette de RAM. Quelle est la première chose à vérifier ?",
    options: [
      { id: 'a', text: 'Si la RAM est bien insérée (Reseat)' },
      { id: 'b', text: 'Réinstaller Windows' },
      { id: 'c', text: 'Changer le processeur' },
      { id: 'd', text: 'Mettre à jour le BIOS' }
    ],
    correctAnswerId: 'a',
    explanation: "Les erreurs de mémoire après une mise à niveau sont souvent dues à une barrette mal enclenchée. La retirer et la réinsérer fermement (Reseating) est la première étape de dépannage."
  },
  {
    id: 95,
    category: 'Security',
    difficulty: 'Hard',
    text: "Un attaquant utilise un logiciel pour tester toutes les combinaisons possibles de mots de passe (aaaa, aaab, aaac...) jusqu'à trouver le bon. Comment s'appelle cette attaque ?",
    options: [
      { id: 'a', text: 'Attaque par Dictionnaire' },
      { id: 'b', text: 'Attaque Brute Force' },
      { id: 'c', text: 'Phishing' },
      { id: 'd', text: 'Spoofing' }
    ],
    correctAnswerId: 'b',
    explanation: "L'attaque par force brute (Brute Force) teste exhaustivement toutes les combinaisons possibles. Elle est lente mais théoriquement infaillible si le temps n'est pas limité, d'où l'importance du verrouillage de compte."
  },
  {
    id: 96,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Quelle est la principale différence entre un connecteur USB 2.0 et un USB 3.0 standard (Type-A) visible à l'œil nu ?",
    options: [
      { id: 'a', text: 'La forme est ronde' },
      { id: 'b', text: 'La languette en plastique est généralement bleue pour l\'USB 3.0' },
      { id: 'c', text: 'USB 3.0 est plus petit' },
      { id: 'd', text: 'USB 3.0 a moins de broches' }
    ],
    correctAnswerId: 'b',
    explanation: "Le code couleur standard pour les ports et connecteurs USB 3.0 (SuperSpeed) est le bleu, tandis que l'USB 2.0 est généralement noir ou blanc."
  },
  {
    id: 97,
    category: 'Network',
    difficulty: 'Easy',
    text: "Vous tapez 'ipconfig' dans l'invite de commande et vous voyez une adresse IP commençant par 169.254.x.x. Qu'est-ce que cela signifie ?",
    options: [
      { id: 'a', text: 'Tout fonctionne bien' },
      { id: 'b', text: 'L\'ordinateur n\'a pas pu contacter le serveur DHCP (APIPA)' },
      { id: 'c', text: 'C\'est une adresse IP publique' },
      { id: 'd', text: 'Vous êtes connecté en IPv6' }
    ],
    correctAnswerId: 'b',
    explanation: "C'est une adresse APIPA (Automatic Private IP Addressing). Windows s'attribue cette adresse quand il est configuré en DHCP mais ne reçoit pas de réponse d'un serveur DHCP (routeur)."
  },
  {
    id: 98,
    category: 'Security',
    difficulty: 'Medium',
    text: "Pour sécuriser physiquement un ordinateur portable dans un bureau ouvert, quel port de sécurité spécifique utilise-t-on avec un câble en acier ?",
    options: [
      { id: 'a', text: 'Port USB' },
      { id: 'b', text: 'Encoche Kensington (Kensington Lock)' },
      { id: 'c', text: 'Port HDMI' },
      { id: 'd', text: 'Lecteur de carte SD' }
    ],
    correctAnswerId: 'b',
    explanation: "L'encoche de sécurité Kensington (K-Slot) est standard sur la plupart des laptops et permet d'attacher physiquement l'appareil à un bureau avec un câble antivol."
  },
  {
    id: 99,
    category: 'Troubleshooting',
    difficulty: 'Hard',
    text: "Un utilisateur rapporte que son horloge Windows se dérègle chaque fois qu'il débranche l'ordinateur du courant pendant la nuit. Quel composant de la carte mère est à remplacer ?",
    options: [
      { id: 'a', text: 'Le Quartz' },
      { id: 'b', text: 'La pile CMOS (CR2032)' },
      { id: 'c', text: 'Le condensateur VRM' },
      { id: 'd', text: 'Le Chipset Sud' }
    ],
    correctAnswerId: 'b',
    explanation: "La pile CMOS (généralement une pile bouton CR2032) alimente la puce qui conserve les réglages du BIOS et l'heure système lorsque l'ordinateur n'est pas alimenté électriquement."
  },
  {
    id: 100,
    category: 'Network',
    difficulty: 'Medium',
    text: "Quel protocole réseau est utilisé par la commande 'ping' pour tester la connectivité ?",
    options: [
      { id: 'a', text: 'TCP' },
      { id: 'b', text: 'UDP' },
      { id: 'c', text: 'ICMP' },
      { id: 'd', text: 'HTTP' }
    ],
    correctAnswerId: 'c',
    explanation: "Ping utilise le protocole ICMP (Internet Control Message Protocol), spécifiquement les messages 'Echo Request' et 'Echo Reply' pour mesurer la latence et la disponibilité."
  },
  {
    id: 101,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Vous devez choisir une alimentation (PSU) pour un PC Gamer à Kinshasa. Outre la puissance en Watts, quelle certification garantit une meilleure efficacité énergétique (moins de perte en chaleur) ?",
    options: [
      { id: 'a', text: 'ISO 9001' },
      { id: 'b', text: '80 Plus (Bronze, Silver, Gold...)' },
      { id: 'c', text: 'RoHS' },
      { id: 'd', text: 'CE' }
    ],
    correctAnswerId: 'b',
    explanation: "La certification '80 Plus' garantit que l'alimentation a une efficacité d'au moins 80% à différentes charges, ce qui économise de l'électricité et réduit la chaleur générée."
  },
  {
    id: 102,
    category: 'Security',
    difficulty: 'Easy',
    text: "Quel est le moyen le plus sûr de se débarrasser de documents papier confidentiels contenant des mots de passe ou des IP d'infrastructure ?",
    options: [
      { id: 'a', text: 'Les jeter à la poubelle' },
      { id: 'b', text: 'Les déchirer en deux' },
      { id: 'c', text: 'Utiliser une déchiqueteuse (Shredder)' },
      { id: 'd', text: 'Les froisser' }
    ],
    correctAnswerId: 'c',
    explanation: "Le déchiquetage (Shredding), idéalement en coupe croisée (cross-cut), est essentiel pour empêcher la récupération d'informations sensibles par 'Fouille de poubelles' (Dumpster Diving)."
  },
  {
    id: 103,
    category: 'Network',
    difficulty: 'Hard',
    text: "Quel appareil réseau fonctionne au niveau 1 (Physique) du modèle OSI et envoie les données reçues sur un port vers TOUS les autres ports, créant beaucoup de collisions ?",
    options: [
      { id: 'a', text: 'Switch' },
      { id: 'b', text: 'Routeur' },
      { id: 'c', text: 'Hub (Concentrateur)' },
      { id: 'd', text: 'Pont' }
    ],
    correctAnswerId: 'c',
    explanation: "Le Hub est un appareil obsolète et inefficace qui ne prend aucune décision intelligente (contrairement au Switch). Il répète aveuglément le signal électrique, saturant la bande passante."
  },
  {
    id: 104,
    category: 'Troubleshooting',
    difficulty: 'Medium',
    text: "Un technicien utilise la commande 'netstat -an' sur un serveur. Que cherche-t-il principalement ?",
    options: [
      { id: 'a', text: 'La vitesse du processeur' },
      { id: 'b', text: 'Les connexions réseau actives et les ports ouverts' },
      { id: 'c', text: 'L\'espace disque libre' },
      { id: 'd', text: 'Les mises à jour Windows' }
    ],
    correctAnswerId: 'b',
    explanation: "Netstat (Network Statistics) affiche les connexions TCP/IP entrantes et sortantes, les tables de routage et les statistiques de protocole. C'est crucial pour détecter des connexions suspectes (malware)."
  },
  {
    id: 105,
    category: 'Hardware',
    difficulty: 'Easy',
    text: "Quel type de connecteur est utilisé pour brancher un câble réseau standard (Ethernet) sur un ordinateur ?",
    options: [
      { id: 'a', text: 'RJ-11' },
      { id: 'b', text: 'RJ-45' },
      { id: 'c', text: 'USB' },
      { id: 'd', text: 'HDMI' }
    ],
    correctAnswerId: 'b',
    explanation: "Le RJ-45 est le connecteur standard à 8 positions pour les réseaux Ethernet. Le RJ-11 est plus petit (4 ou 6 positions) et utilisé pour le téléphone fixe."
  },
  {
    id: 106,
    category: 'Security',
    difficulty: 'Medium',
    text: "Le pare-feu d'entreprise bloque tout le trafic par défaut. Quel port devez-vous ouvrir explicitement pour permettre aux employés d'envoyer des emails via SMTP ?",
    options: [
      { id: 'a', text: '25' },
      { id: 'b', text: '110' },
      { id: 'c', text: '143' },
      { id: 'd', text: '21' }
    ],
    correctAnswerId: 'a',
    explanation: "Le port 25 est le standard pour l'envoi d'emails (SMTP - Simple Mail Transfer Protocol). Les ports 110 (POP3) et 143 (IMAP) servent à la réception."
  },
  {
    id: 107,
    category: 'Network',
    difficulty: 'Hard',
    text: "Quelle est la longueur maximale théorique d'un segment de câble Ethernet UTP Cat6 sans répéteur/switch pour garantir le signal 1Gbps ?",
    options: [
      { id: 'a', text: '10 mètres' },
      { id: 'b', text: '100 mètres' },
      { id: 'c', text: '500 mètres' },
      { id: 'd', text: '1 kilomètre' }
    ],
    correctAnswerId: 'b',
    explanation: "La norme Ethernet sur cuivre (Twisted Pair) limite la longueur du câble à 100 mètres (328 pieds) pour des raisons d'atténuation du signal."
  },
  {
    id: 108,
    category: 'Troubleshooting',
    difficulty: 'Easy',
    text: "Vous allumez un PC et rien ne se passe : pas de lumière, pas de ventilateur. Vous avez vérifié la prise murale. Que vérifiez-vous ensuite sur l'alimentation du PC ?",
    options: [
      { id: 'a', text: 'Le switch de voltage (110V/220V) à l\'arrière' },
      { id: 'b', text: 'La couleur du boîtier' },
      { id: 'c', text: 'Le lecteur CD' },
      { id: 'd', text: 'La souris' }
    ],
    correctAnswerId: 'a',
    explanation: "Si le PC ne réagit pas du tout, vérifiez l'interrupteur I/O derrière l'alimentation et, sur les anciens modèles, le sélecteur de tension. S'il est sur 110V et branché sur du 220V (courant RDC), le fusible a probablement sauté."
  },
  {
    id: 109,
    category: 'Hardware',
    difficulty: 'Medium',
    text: "Pour améliorer les performances d'un vieux laptop utilisé pour la bureautique à Matadi, quelle mise à niveau offre le gain de vitesse le plus perceptible pour l'utilisateur ?",
    options: [
      { id: 'a', text: 'Remplacer le disque dur (HDD) par un SSD' },
      { id: 'b', text: 'Mettre une carte réseau plus rapide' },
      { id: 'c', text: 'Changer le lecteur DVD' },
      { id: 'd', text: 'Mettre à jour la carte son' }
    ],
    correctAnswerId: 'a',
    explanation: "Le passage d'un disque mécanique (HDD) à un disque SSD (Solid State Drive) est l'amélioration la plus spectaculaire pour la réactivité du système (démarrage, lancement d'applis) sur un vieux PC."
  },
  {
    id: 110,
    category: 'Security',
    difficulty: 'Easy',
    text: "Un VPN (Virtual Private Network) est principalement utilisé pour :",
    options: [
      { id: 'a', text: 'Accélérer la connexion internet' },
      { id: 'b', text: 'Créer un tunnel chiffré sécurisé sur un réseau public' },
      { id: 'c', text: 'Nettoyer les virus' },
      { id: 'd', text: 'Compresser les fichiers' }
    ],
    correctAnswerId: 'b',
    explanation: "Le but principal d'un VPN est la confidentialité et la sécurité via le chiffrement (tunneling), protégeant les données lorsqu'elles transitent sur des réseaux non sûrs comme Internet."
  },
  {
    id: 111,
    category: 'Network',
    difficulty: 'Medium',
    text: "Quel service réseau attribue automatiquement les adresses IP, les masques de sous-réseau et la passerelle par défaut aux clients qui se connectent ?",
    options: [
      { id: 'a', text: 'DNS' },
      { id: 'b', text: 'DHCP (Dynamic Host Configuration Protocol)' },
      { id: 'c', text: 'NAT' },
      { id: 'd', text: 'ARP' }
    ],
    correctAnswerId: 'b',
    explanation: "Le DHCP automatise la configuration IP. Sans lui, il faudrait configurer manuellement l'IP de chaque appareil (téléphone, laptop) qui se connecte au réseau."
  },
  {
    id: 112,
    category: 'Troubleshooting',
    difficulty: 'Hard',
    text: "Un utilisateur ne peut pas accéder à un partage réseau \\\\SERVEUR\\DOCS mais peut y accéder via l'adresse IP \\\\192.168.1.10\\DOCS. Quel est le problème ?",
    options: [
      { id: 'a', text: 'Problème de résolution de nom (DNS/NetBIOS)' },
      { id: 'b', text: 'Le serveur est éteint' },
      { id: 'c', text: 'Le câble est débranché' },
      { id: 'd', text: 'Le pare-feu bloque le port 80' }
    ],
    correctAnswerId: 'a',
    explanation: "Si la connectivité IP fonctionne (via l'adresse numérique) mais pas via le nom, c'est un problème de résolution de nom. Le DNS ou le fichier Hosts local est probablement en cause."
  },
  {
    id: 113,
    category: 'Security',
    difficulty: 'Medium',
    text: "Quelle technologie permet de prévenir la fuite de données sensibles (comme des numéros de carte bancaire ou des fichiers clients) hors de l'entreprise ?",
    options: [
      { id: 'a', text: 'DLP (Data Loss Prevention)' },
      { id: 'b', text: 'UPS' },
      { id: 'c', text: 'OCR' },
      { id: 'd', text: 'GUI' }
    ],
    correctAnswerId: 'a',
    explanation: "Les solutions DLP surveillent et bloquent le transfert de données sensibles (via email, USB, upload web) selon des règles définies par l'entreprise."
  },
  {
    id: 114,
    category: 'Hardware',
    difficulty: 'Easy',
    text: "Quel composant est le 'cerveau' de l'ordinateur, responsable de l'exécution des calculs et des instructions logicielles ?",
    options: [
      { id: 'a', text: 'RAM' },
      { id: 'b', text: 'Disque Dur' },
      { id: 'c', text: 'CPU (Processeur)' },
      { id: 'd', text: 'Carte Mère' }
    ],
    correctAnswerId: 'c',
    explanation: "Le CPU (Central Processing Unit) est l'unité centrale de traitement. C'est la puce qui effectue les calculs logiques et mathématiques nécessaires au fonctionnement des programmes."
  },
  {
    id: 115,
    category: 'Network',
    difficulty: 'Medium',
    text: "Vous configurez un routeur domestique. Quelle fréquence Wi-Fi offre la meilleure portée à travers les murs en béton épais (courants à Kinshasa), mais une vitesse moindre ?",
    options: [
      { id: 'a', text: '5 GHz' },
      { id: 'b', text: '2.4 GHz' },
      { id: 'c', text: '6 GHz' },
      { id: 'd', text: '60 GHz' }
    ],
    correctAnswerId: 'b',
    explanation: "La fréquence 2.4 GHz a une longueur d'onde plus grande, ce qui lui permet de mieux traverser les obstacles solides comme les murs en béton, bien qu'elle soit plus sujette aux interférences et moins rapide que le 5 GHz."
  }
];
