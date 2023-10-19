//index.js
const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('spring');
seasons.addToHead('summer');
seasons.printList();

seasons.addToTail('winter');
seasons.addToTail('fall');
seasons.printList();

seasons.removeHead();
seasons.printList();