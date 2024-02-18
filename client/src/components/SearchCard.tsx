import SearchResultsState from "@/store/atoms/SearchResults";
import { useRecoilValue } from "recoil";

function SearchCard() {
  const searchResults = useRecoilValue(SearchResultsState);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <Image movieData={searchResults} />
    </div>
  );
}

function Image({ movieData }: { movieData: string[] }) {
  if (!movieData || movieData.length === 0) {
    return null;
  }

  return (
    <>
      {movieData.map((link: string, index: number) => (
        <img
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
