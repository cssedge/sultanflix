# SultanFlix 📖



SultanFlix is a Neflix-clone home page, applying some features of React-js.

## Live preview
* Built version can be found at:  [**SultanFlix**](https://sultanflix.pages.dev)

## Installation
* install all project dependencies with `npm install`
* start the development server with `npm run dev`


```bash
npm install
```
```bash
npm run dev
```
## Features

- Create react app with vite: yarn create vite ✨
- Getting all movies from TMDB api using axios.
- Reusing "ROW" compnent for all listings with some changes to fit layout.
- Diving into 2 important react hooks: useState and useEffect ✨
- for movie trailer and youtube player: used movie-trailer, react-youtube packages.

## Snippits

```bash
const [movies, setmovies] = useState([]);
```

```bash
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setmovies(request.data.results);
            return request;
       }
       fetchData();

    }, [fetchUrl])
```

```bash
//getting randoom Item:
    useEffect(() => {
      async function fetchData () {
        const request = await axios.get(requests.fetchNetflixOriginals);
        
        const bannerMovie = request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]

        setMovie(bannerMovie);
      
      }
      fetchData();
    }, [])
```
```bash
//Turncate description text:
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    ....
        <div className="banner__description">
            {truncate(movie?.overview, 150)}
        </div>
```



## Author

- **Abbas Sultan** - [**Github**](https://github.com/cssedge)

