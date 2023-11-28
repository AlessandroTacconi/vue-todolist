'use strict';

// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//   MILESTONE 1
//   Stampare all'interno di una lista HTML un item per ogni todo.
//   Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const { createApp } = Vue;

createApp({
  data() {
    return {
      toDos: [
        {
          text: 'Giocare a carte',
          done: true,
        },
        {
          text: 'Guardare il calcio',
          done: false,
        },
      ],
    };
  },
}).mount('#app');
