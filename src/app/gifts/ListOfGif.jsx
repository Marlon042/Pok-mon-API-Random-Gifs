

const fetchGIFs = () => {
    const apiKey = 'th9I74FCtGK5SMArTOwgNdS7by4JJTRS';
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5`;
  
    return fetch(url)
      .then(res => res.json())
      .then(data => data.data);
  };
  
  export async function ListOfGif() {
    const gifs = await fetchGIFs();
  
    return gifs.map(gif => (
      <article key={gif.id}>
        <br></br>
        {/* <h2 style={{ color: 'red' }}>{gif.id}</h2> */}
        <img src={gif.images.original.url} alt={gif.title} />
        
      </article>
    ));
  }