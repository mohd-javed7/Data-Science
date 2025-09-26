{movies.length > 0 &&
        (<>
        <img src={`https://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}`} alt={movies[0].title} className='aboslute w-screen h-120 blur-xs' />
        <img src={`https://image.tmdb.org/t/p/w780${movies[0].poster_path}`} alt={movies[0].title} className='absolute top-1/3 w-55 shadow-sm' />

        </>
        )}