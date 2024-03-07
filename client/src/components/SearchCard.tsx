import SearchResultsState from "@/store/atoms/SearchResults";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Movie } from "./Card";
import { CardValues } from "@/store/atoms/CardValues";
import { DrawerState } from "@/store/atoms/Drawer";
import MovieId from "@/store/atoms/movies/MovieId";
import Data from "@/utlis/Movies_Data";

function SearchCard() {
  const searchResults = useRecoilValue(SearchResultsState);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 xl:grid-cols-1 ">
      <Image movieData={searchResults} />
    </div>
  );
}

function Image({ movieData }: { movieData: Movie[] }) {
  const setCardValue = useSetRecoilState(CardValues);
  const setDrawerValue = useSetRecoilState(DrawerState);
  const setVideoId = useSetRecoilState(MovieId);
  if (!movieData || movieData.length === 0) {
    return null;
  }

  const backdropImages: string[] = [];
  movieData.forEach((item) => {
    if (item.backdrop_path) {
      backdropImages.push(item.backdrop_path);
    }
  });

  function handleClick(index: number) {
    const value = movieData[index];
    setCardValue([value]);
    console.log(value);
    console.log(value.id);
    setVideoId(value.id);
    setDrawerValue(true);
  }
  return (
    <>
      <Data />
      {backdropImages.map((link: string, index: number) => (
        <img
          onClick={() => handleClick(index)}
          key={index}
          src={"https://image.tmdb.org/t/p/w500" + link}
          alt="image"
          className="m-1 hover:scale-110 transition duration-150 ease-out w-full h-full object-cover"
        />
      ))}
    </>
  );
}

export default SearchCard;
