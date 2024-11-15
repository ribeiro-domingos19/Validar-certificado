// Configuração do Firebase
const firebaseConfig = {
    apiKey:"AIzaSyCsCAClrLidZAdr92EwJObzahw2GSmanSU",
    authDomain: "registro-de-cadastro.firebaseapp.com",
    projectId: "registro-de-cadastro",
    storageBucket: "registro-de-cadastro.firebasestorage.app",
    messagingSenderId: "886484752241",
    appId: "1:886484752241:web:4e637fecf66b045bb9c8d0"
};

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
