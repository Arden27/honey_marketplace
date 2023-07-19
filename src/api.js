const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const getCsrfToken = () => document.cookie.split('csrftoken=')[1];

const handleResponse = async (response) => {
  if (response.status === 204) {
    return null;
  }

  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error('Error parsing response data');
  }

  if (!response.ok) {
    const error = new Error('An error occurred');
    error.status = response.status;
    error.detail = data;
    throw error;
  }
  
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
    .catch(err => {
      console.error(err);
      return Promise.reject(err);  // propagate the error up to the component
    });
};

// login
export const loginUser = (username, password) => {
  return fetchApi('/dj-rest-auth/login/', 'POST', { username, password })
    .catch(err => {
      console.error(err);
      return Promise.reject(err);  // propagate the error up to the component
    });
};

// logout
export const logoutUser = () => {
  return fetchApi('/dj-rest-auth/logout/', 'POST')
    .catch(err => {
      console.error(err);
      return Promise.reject(err);  // propagate the error up to the component
    });
};