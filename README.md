# Projeto Implementado: 
 - Cadastro de moradores
 - Tela de Login
 - CRUD
 - Busca de moradores cadastrados
 - Uso do Firebase
 - Salvar as ATAs

✅ Objetivo: Atender necessidade de digitalizar as reuniões do prédio.

✅Melhorias: 
 - Acessar ATAs passadas com histórico
 - Criar tela de circular interna
 - Moradores alterarem senha pelo seu ID

Estrutura:

▶️ Front-End:
 - HTML / CSS / Bootstrap / JavaScript
 - Firebase Firestore - Banco de dados NoSQL para armazenamento de dados. A comunicação entre o front-end e o Firestore acontece por meio das funções addDoc, onSnapshot, updateDoc, e deleteDoc
 - Modais, Máscara de Telefone (JavaScript Puro)

▶️ Back-End:
 - Firebase SDK - para acessar funcionalidades como Firestore e manipulação de documentos.

▶️ Integração entre Front-End e Back-End - Sincronização de Dados em Tempo Real
 - Ações de CRUD:
   - Criação - função addDoc do Firebase
   - Leitura - método onSnapshot, tempo real na tela
   - Atualização - função updateDoc
   - Exclusão - função deleteDoc

Nesse projeto, o front-end se comunica com o back-end através do Firebase Firestore para realizar as operações CRUD. O front-end usa HTML, CSS, Bootstrap e JavaScript para criar a interface de usuário e interagir com o Firebase, enquanto o back-end usa o Firebase SDK para manipulação de dados no Firestore e gerenciamento de autenticação. 

A sincronização em tempo real entre o Firestore e o front-end é feita via onSnapshot, permitindo que qualquer alteração nas telas e no banco de dados seja imediatamente refletida na interface do usuário.
