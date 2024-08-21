const BASE_URL = 'https://pixabay.com/api/';

export function fetchPictures(userQuery) {
  const options = new URLSearchParams({
    key: '45541049-685ffcd160f6cd622b440ebf7',
    q: userQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
