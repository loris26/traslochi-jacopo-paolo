# Jacopo & Paolo Trasporti - Sito Web Statico

Questo è il codice sorgente per il sito web di **Jacopo & Paolo Trasporti**, un'attività specializzata in sgomberi (cantine, case, garage), ritiro metalli e trasporti veloci. Il sito è ottimizzato per la conversione locale (con focus su Cossato, Biella e Piemonte) ed è interamente statico (HTML5, CSS3, JavaScript puro).

---

## 📂 Struttura del Progetto

Il progetto ha una struttura pulita e pronta per essere caricata online:

```
traslochiJacopo/
├── assets/
│   └── chi-siamo.jpg    # Foto dei soci Jacopo e Paolo (sostituibile)
├── favicon.svg          # Icona del sito visualizzata nella scheda del browser
├── index.html           # Struttura del sito e testi ottimizzati per la SEO locale
├── script.js            # Gestione modale CTA, modulo contatti e fallback mailto
├── style.css            # Stili grafici, design responsivo e colori premium
└── wrangler.json        # Configurazione per il deploy di Cloudflare Pages
```

---

## 🛠️ Configurazione del Modulo Contatti

Il form contatti è predisposto per funzionare in due modalità:

### 1. Metodo Consigliato: Formspree (Gratuito)
[Formspree](https://formspree.io/) è un servizio che ti permette di ricevere le email inviate dal modulo direttamente sulla tua casella Gmail (`sgomberibiella@gmail.com`) senza bisogno di un server.
1. Vai su [Formspree.io](https://formspree.io/) e registrati gratuitamente.
2. Crea un nuovo "Form" e inserisci come email di destinazione `sgomberibiella@gmail.com`.
3. Copia l'**Endpoint URL** fornito da Formspree (sarà simile a: `https://formspree.io/f/xy12ab34`).
4. Apri il file `index.html` alla riga ~398 e sostituisci `https://formspree.io/f/YOUR_FORMSPREE_ID_HERE` con il tuo URL.
5. Salva e pubblica. Il gioco è fatto!

### 2. Fallback Automatico (Mailto)
Se non configuri Formspree (ovvero lasci `YOUR_FORMSPREE_ID_HERE` intatto nel codice), il file `script.js` rileverà automaticamente la situazione. All'invio del form, si aprirà il programma di posta dell'utente (come Outlook, Mail di Apple o Gmail) con un messaggio precompilato contenente tutti i dettagli inseriti (Nome, Telefono, Comune, Servizio, Messaggio) pronto da inviare a `sgomberibiella@gmail.com`.

---

## 🚀 Guida Passo Passo per la Pubblicazione

Segui questi passaggi per pubblicare il sito gratis e con un indirizzo personalizzato.

### 1. Caricare il Sito su GitHub

1. **Crea un Account GitHub**: Se non lo hai già, registrati su [GitHub](https://github.com/).
2. **Crea un Nuovo Repository**:
   - Clicca sul pulsante **New** (Nuovo) in alto a sinistra.
   - Dai un nome alla repository, ad esempio: `traslochi-jacopo-paolo`.
   - Seleziona **Public** (Pubblico).
   - Non selezionare "Add a README file" (lo hai già).
   - Clicca su **Create repository**.
3. **Carica i File**:
   - Nella pagina del repository vuoto appena creato, vedrai un link che dice *"uploading an existing file"* (carica un file esistente). Cliccaci sopra.
   - Trascina tutti i file presenti nella cartella `traslochiJacopo` (`index.html`, `style.css`, `script.js`, `favicon.svg` e la cartella `assets`) all'interno della finestra del browser.
   - Attendi che il caricamento sia completato.
   - In fondo alla pagina, clicca sul pulsante verde **Commit changes** (Conferma modifiche).

### 2. Collegare a Cloudflare Pages (Deploy Gratuito H24)

Cloudflare Pages caricherà il tuo sito online rendendolo velocissimo ed estremamente sicuro.
1. Registrati o accedi su [Cloudflare](https://dash.cloudflare.com/).
2. Nel menu a sinistra, clicca su **Workers & Pages** (Workers e Pagine).
3. Clicca su **Create application** (Crea applicazione), poi seleziona la scheda **Pages** (Pagine) e infine clicca su **Connect to Git** (Connetti a Git).
4. Collega il tuo account GitHub a Cloudflare seguendo le istruzioni a schermo.
5. Seleziona la repository `traslochi-jacopo-paolo` che hai creato prima e clicca su **Begin setup** (Inizia configurazione).
6. Nelle impostazioni di build:
   - **Framework preset**: Lascia su `None` (Nessuno).
   - **Build command**: Lascia vuoto.
   - **Build output directory**: Lascia vuoto (oppure scrivi `/` o `./` se richiesto).
7. Clicca su **Save and Deploy** (Salva e Distribuisci).
8. In meno di un minuto il tuo sito sarà online con un link provvisorio tipo `traslochi-jacopo-paolo.pages.dev`.

### 3. Collegare un Dominio Personalizzato

Per dare un aspetto professionale, puoi associare un dominio come `www.jacopopaolotrasporti.it`.
1. Nella dashboard del tuo progetto su Cloudflare Pages, clicca sulla scheda **Custom domains** (Domini personalizzati).
2. Clicca su **Set up a custom domain** (Configura un dominio personalizzato).
3. Inserisci il dominio che hai acquistato (es. `jacopopaolotrasporti.it`) e clicca su **Continue**.
4. **Configurazione DNS**:
   - Se il tuo dominio è già registrato su Cloudflare, la configurazione dei record DNS avverrà automaticamente in un clic.
   - Se hai acquistato il dominio su un altro provider (Aruba, Register.it, GoDaddy):
     - Accedi al pannello di gestione del tuo dominio sul sito del provider.
     - Trova la sezione **Gestione DNS**.
     - Crea un record di tipo **CNAME** che punta il tuo dominio (o sottodominio `www`) verso l'indirizzo Pages (es. `traslochi-jacopo-paolo.pages.dev`).
     - Oppure cambia i Name Server del tuo provider inserendo quelli di Cloudflare per gestire tutto da Cloudflare (consigliato per la massima velocità).

---

## ✏️ Come Aggiornare il Sito in Futuro

Non è necessario essere programmatori esperti per fare modifiche quotidiane al testo:

1. **Modifiche al Testo**: Apri il file `index.html` con un editor di testo semplice (come Blocco Note, VS Code o Notepad++). Cerca la frase che vuoi modificare e sostituiscila con il nuovo testo. Fai attenzione a non toccare i tag racchiusi tra `<` e `>`.
2. **Sostituire la Foto di "Chi Siamo"**: Rinomina la tua foto reale come `chi-siamo.jpg` e incollala nella cartella `assets/`, sostituendo il file esistente. Assicurati che l'estensione sia esattamente `.jpg` e non `.png` o `.jpeg`.
3. **Aggiornare online**: Torna su GitHub, entra nella cartella in cui si trova il file modificato, clicca su **Add file** -> **Upload files**, trascina il file aggiornato e fai click su **Commit changes**. Cloudflare Pages rileverà la modifica e aggiornerà il sito online in 20 secondi!

---

## 🧪 Come Testare le Funzionalità

Prima di promuovere il sito, verifica questi tre elementi fondamentali:
- **WhatsApp**: Clicca sul pulsante WhatsApp in basso a destra. Dovrebbe aprirsi la chat sul telefono o sul computer con il messaggio preimpostato *"Ciao, vorrei avere maggiori informazioni"*.
- **Pulsante Telefonico**: Se clicchi sui numeri di telefono di Jacopo o Paolo da uno smartphone, dovrebbe avviarsi direttamente la chiamata telefonica.
- **Form Contatti**: Compila il form con dati di prova e premi invia per assicurarti che i dati vengano recapitati sulla tua email (tramite Formspree o tramite il client mail di fallback).
