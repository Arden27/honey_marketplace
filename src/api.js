const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const getCsrfToken = () => document.cookie.split('csrftoken=')[1];

const handleResponse = async (response) => {
  if (response.status === 204) {
    console.log('No content');
    return null; // return null or an empty object depending on your use case
  }

  if (!response.ok) {
    const error = new Error('An error occurred');
    error.status = response.status;
    try {
      const errorDetail = await response.json();
      error.message = errorDetail.message;
    } catch (e) {
      error.message = 'Something went wrong, please try again.';
    }
    throw error;
  }

  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error('Error parsing response data');
  }
  
  console.log("console log from handleResponse");
  console.log(data);
  return data;
}

const fetchApi = async (endpoint, method, body = null) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-CSRFTOKEN': getCsrfToken(),
  };
  const options = {
    method,
    headers,
    credentials: 'include',
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  return handleResponse(response);
}

// register
export const registerUser = (username, password1, password2) => {
  return fetchApi('/dj-rest-auth/registration/', 'POST', { username, password1, password2 })
    .catch(err => console.error(err));
};

// login
export const loginUser = (username, password) => {
  return fetchApi('/dj-rest-auth/login/', 'POST', { username, password })
    .catch(err => console.error(err));
};

// logout
export const logoutUser = () => {
  return fetchApi('/dj-rest-auth/logout/', 'POST')
    .catch(err => console.error(err));
};
