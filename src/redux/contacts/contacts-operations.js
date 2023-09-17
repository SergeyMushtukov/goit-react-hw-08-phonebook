import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  contactsAPI.fetchContactsService
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  contactsAPI.addContactService
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  contactsAPI.deleteContactService
);
