'use strict';

// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//   MILESTONE 1
//   Stampare all'interno di una lista HTML un item per ogni todo.
//   Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
//  Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//  Bonus:
//   1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

const { createApp } = Vue;

createApp({
  data() {
    return {
      toDos: [
        {
          text: 'Giocare a carte',
          done: false,
        },
        {
          text: 'Guardare il calcio',
          done: false,
        },
      ],
      nuovoToDo: '',
    };
  },
  methods: {
    sbarraToDo(index) {
      this.toDos[index].done = true;
    },
    aggiungiToDo() {
      if (this.nuovoToDo.trim() !== '') {
        this.toDos.push({
          text: this.nuovoToDo,
          done: false,
        });
        this.nuovoToDo = '';
      }
    },
  },
}).mount('#app');
