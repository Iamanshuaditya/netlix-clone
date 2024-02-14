// import { useEffect } from "react";

// function Movies() {
//   const getVidioes = async () => {
//     try {
//       await fetch(
//         "https://api.themoviedb.org/3/movie/872585/videos?api_key=b5567485072637e740f970c66c1c9c8c&language=en-US"
//       )
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getVidioes();
//   }, []);
//   const getMovies = () => {
//     fetch(
//       "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c"
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data.results));
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <div></div>;
// }

// export default Movies;

import Card from "./Card";
function Movies() {
  return (
    <div className="">
      <div className=" text-white grid  gap-48 absolute top-[32em]  xl:gap-[48em] xl:top-[150em] ">
        <Card title="Trending Now" top={30} />
        <Card title="Top Rated" top={44} />
        <Card title="Action Thrillers" top={58} />
        <Card title="Comedies" top={70} />
        <Card title="Scary Movies" top={83} />
        <Card title="Romance Movies" top={92} />
        <Card title="Documentaries" top={112} />
      </div>
    </div>
  );
}

export default Movies;
