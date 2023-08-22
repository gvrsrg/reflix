export const USERS = [
    {
        userId:0,
        userName:"Mona",
        color:"#349bdb",
        balance:10,
        rentedMovies:[
            {adult: false,
            backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
            genre_ids: [16, 35, 10751, 14, 10749],
            id: 976573,
            original_language: "en",
            original_title: "Elemental",
            overview: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
            popularity: 4863.437,
            poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
            release_date: "2023-06-14",
            title: "Elemental",
            video: false,
            vote_average: 7.8,
            vote_count: 1239}
    ]
    },
    {
        userId:1,
        userName:"Jasmyne",
        color:"#b8331f",
        balance:10,
        rentedMovies:[]
    },
    {
        userId:2,
        userName:"Aura",
        color:"#2ccb73",
        balance:10,
        rentedMovies:[]
    },
    {
        userId:3,
        userName:"Tina",
        color:"#FF9333",
        balance:10,
        rentedMovies:[]
    }

]

export const MOVIE_DB_API_KEY = "8af58580110ad14f331df990a4c42502" //GET YOUR API KEY FROM themoviedb.org
export const MOVIE_DB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie"
export const MOVIE_DB_INFO_URL = "https://api.themoviedb.org/3/movie"
export const MOVIE_DB_IMAGE_URL = "https://image.tmdb.org/t/p/w300"
export const BEARER = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWY1ODU4MDExMGFkMTRmMzMxZGY5OTBhNGM0MjUwMiIsInN1YiI6IjY0NDUxYjA4YWQ4N2Y3MDRmNjcyOTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5GAnRv9Y03jRwZWywjrWnsE_tFTjg1TyTVdHgSuEXY'
