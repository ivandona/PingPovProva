# PingPov

Cambiare riga 23 e 24 dentro google_login.js con i miei client
# Run
node index.js
Aprire localhost:4000/auth
=======
Web App per giocare a ping pong a Povo

**startare con 'node index.js' e provare api su localhost/4000**


PingPov,
PingPov
├── api
│   ├── api_index.js
│   ├── autenticazione.js
│   ├── google_login.js
│   ├── modalita_di_gioco.js
│   ├── modalita_di_gioco.test.js
│   ├── models
│   │   ├── modalita_di_gioco.js
│   │   ├── tornei.js
│   │   └── user.js
│   ├── prenotazioni.js
│   ├── ranking.js
│   ├── ranking.test.js
│   ├── tokenChecker.js
│   ├── tornei.js
│   ├── tornei.test.js
│   ├── users.js
│   └── users.test.js
├── apiary.apib
├── index.js
├── jest
│   └── jest.config.js
├── listener.js
├── package.json
├── package-lock.json
├── pingpov.json
├── Procfile
├── public
│   ├── images
│   │   ├── Logo_Ping_Pov.png
│   │   └── rank_imgs
│   │       ├── bronze.png
│   │       ├── diamond.png
│   │       ├── gold.png
│   │       ├── platinum.png
│   │       ├── rank.png
│   │       └── silver.png
│   └── style
│       ├── brackets.css
│       └── searchbar.css
├── README.md
├── scripts
│   └── insertMongo.py
└── views
    └── pages
        ├── auth.ejs
        ├── home.ejs
        ├── leaderboard.ejs
        ├── match
        │   ├── crea_match.ejs
        │   ├── cronologia_match.ejs
        │   ├── lista_match.ejs
        │   └── miei_match.ejs
        ├── navbar.ejs
        ├── prenotazioni
        │   └── ricerca_prenotazioni.ejs
        ├── profilo.ejs
        ├── profilo_ricercato.ejs
        ├── registrazione.ejs
        ├── ricerca_prenotazioni.ejs
        └── tornei
            ├── crea_torneo.ejs
            ├── lista_tornei.ejs
            ├── ricerca_tornei.ejs
            ├── torneo_admin.ejs
            └── torneo_user.ejs
