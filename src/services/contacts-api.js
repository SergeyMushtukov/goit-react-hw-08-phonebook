import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

async function fetchContactsService(_, thunkAPI) {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}

//----------------------

async function addContactService(data, thunkAPI) {
  try {
    const response = await axios.post('/contacts', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
//----------------------

async function deleteContactService(contactId, thunkAPI) {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}


//----------------------

const contactsApi = {
  fetchContactsService,
  addContactService,
  deleteContactService,
};

export default contactsApi;
