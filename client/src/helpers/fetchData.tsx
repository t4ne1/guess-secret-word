const fetchData = async (method: string, url: string) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('player-name', localStorage.getItem('playerName') || 'nameless');

  const res = await fetch(url, {
    method,
    headers
  });
  return await res.json();
};

export default fetchData;