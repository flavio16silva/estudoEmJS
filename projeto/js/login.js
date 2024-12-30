//Importações
import app from './firebase-config.js'
//import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

//Inicializando o Firebase
// const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const formLogin = document.querySelector('#loginForm')
const checkbox = document.querySelector('#flexCheckDefault')

if(checkbox){
    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            window.location.href = 'cadastro.html'
        }
    })
}

if(formLogin){
    formLogin.addEventListener('submit', (e)=> {
        e.preventDefault()                     //evita o recarregamento da pagina
        
        //Valores dos campos
        const formEmail = document.querySelector('#floatingInputEmail')
        const formPass = document.querySelector('#floatingInputPass')

        //Autenticar no Firebase
        signInWithEmailAndPassword(auth, formEmail.value, formPass.value)
            .then((userCredential) => {
                //Login correto
                const user = userCredential.user
                console.log('Usuario logado: ', user)

                //Direcionando pagina da ATA
                window.location.href = 'projeto.html'
            })
            .catch((error) => {
                console.error('Erro ao fazer login: ', error)
            })       
    })
} 

