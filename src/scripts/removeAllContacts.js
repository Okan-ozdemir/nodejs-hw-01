import { writeContacts } from '../utils/writeContacts.js';

export async function removeAllContacts() {
  await writeContacts([]); // Boş dizi yaz
  console.log('Tüm kişiler silindi.');
}

removeAllContacts();
