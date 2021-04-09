import axios from 'axios';

/// UNSPLASH KEY
///
/// Access key: EhFw7wx6zPoonEljLxTcA_O5Sqgkrjd29EBYsUWIF5o
/// Secret key: aiQi2GY7qlRpHKToYQSojDNg1hFnhfR12UQFTDKgQA4

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID EhFw7wx6zPoonEljLxTcA_O5Sqgkrjd29EBYsUWIF5o'
  }
})