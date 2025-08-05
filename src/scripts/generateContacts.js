import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const COUNT = 5;

export async function generateContacts() {
  const contacts = await readContacts();
  for (let i = 0; i < COUNT; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
  console.log(`${COUNT} yeni iletişim eklendi.`);
}

generateContacts();
