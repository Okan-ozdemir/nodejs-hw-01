import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('Silinecek kişi yok.');
    return;
  }
  const removed = contacts.pop(); // Son kişiyi çıkar
  await writeContacts(contacts); // Güncellenmiş listeyi yaz
  console.log('Son kişi silindi:', removed);
}

removeLastContact();
