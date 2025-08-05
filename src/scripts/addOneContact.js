import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function addOneContact() {
  const contacts = await readContacts(); // Mevcut kişileri oku
  const newContact = createFakeContact(); // Yeni kişi oluştur
  contacts.push(newContact); // Listeye ekle
  await writeContacts(contacts); // Dosyaya yaz
  console.log('Yeni kişi eklendi:', newContact);
}

addOneContact();
