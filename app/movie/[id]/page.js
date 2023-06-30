// import {
//     MovieContainer
// } from "@/containers/movie"
// import Movies from "@/mocks/movies.json"
// import {
//     notFound
// } from "next/navigation"

// // async function Delay(ms){
// //     return new Promise(resolve=>setTimeout(resolve,ms))
// // }

// async function MoviePage({
//     params,searchParams
// }) {
//     // await Delay(4000)
//     console.log(params);

//     const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id)

//     if (!movieDetail) {
//         notFound()
//     }
//     // if (searchParams.error==="true"){
//     //     throw new Error("Error happened")
//     // }

//     return ( <
//         MovieContainer movie = {
//             movieDetail
//         }
//         />
//     )
// }

// export default MoviePage


import {
    notFound
} from "next/navigation";
import React from "react";
import {
    MovieContainer
} from "@/containers/movie";

import {
    fetchSingleMovie
} from "@/services/movie";

async function MoviePage({
    params,
    searchParams
}) {
    const movieDetail = await fetchSingleMovie(params.id);

    if (movieDetail.success === false) {
        notFound();
    }

    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
    }

    return <MovieContainer movie = {
        movieDetail
    }
    />;
}

export default MoviePage;
