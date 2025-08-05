import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export async function writeContacts(contacts) {
  await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
}
