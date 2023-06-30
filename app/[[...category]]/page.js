// import HomeContainer from '@/containers/home'
// import React from 'react'
// import Movies from "@/mocks/movies.json"

// // async function Delay(ms){
// //     return new Promise(resolve=>setTimeout(resolve,ms))
// // }


// const HomePage = async({params}) => {
//     // await Delay(20000)
//     let selectedCategory;
//     if(params.category?.length>0){
//         selectedCategory=true
//     }

//     return  <HomeContainer 
//         popularMovies = {
//             popularMovies
//         }
//         selectedCategory={{
//         id:params.category?.[0]??"",
//         movies:selectedCategory?Movies.results.slice(0,7):[],
//     }}/>
    
// }

// export default HomePage

import React from "react";
import { HomeContainer } from "@/containers/home";

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchGenres,
  fetchMoviesByGenre,
} from "@/services/movie";

async function HomePage({ params }) {
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];

  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]));
  }

  const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
    await Promise.all(pagePromises);

  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategoryMovies ?? [],
      }}
    />
  );
}

export default HomePage;
