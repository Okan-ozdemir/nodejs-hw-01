import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  const contacts = await readContacts(); // Kişileri oku
  console.log('Tüm kişiler:', contacts); // Terminale yazdır
}

getAllContacts();
