//Importações
import app from './firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)
const formLogin = document.querySelector('#loginForm')

if(formLogin){
    formLogin.addEventListener('submit', (e)=> {
        e.preventDefault()                     //evita o recarregamento da pagina
        
        //Valores dos campos
        const formEmail = document.querySelector('#floatingInputEmail')
        const formPass = document.querySelector('#floatingInputPass')

        //Autenticar no Firebase
        signInWithEmailAndPassword(auth, email, password)
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