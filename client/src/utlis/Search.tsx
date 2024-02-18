import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import SearchState from "@/store/atoms/Search";
import SearchResultsState from "@/store/atoms/SearchResults";

interface SearchResult {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
function SearchResults() {
  const api_key = import.meta.env.VITE_TMDB_API;
  const baseUrl = "https://api.themoviedb.org/3/search/multi";
  const [searchValues] = useRecoilState(SearchState);
  const setSearchResults = useSetRecoilState(SearchResultsState);
  const searchResults = useRecoilValue(SearchResultsState);

  useEffect(() => {
    const fetchFirstPage = async () => {
      try {
        const response = await axios.get(baseUrl, {
          params: {
            query: searchValues,
            api_key: api_key,
            page: 1,
          },
        });

        processResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchFirstPage();
  }, [searchValues]);

  const processResults = (results: SearchResult[]) => {
    const newBackdropPaths: string[] = results
      .map((result) => result.backdrop_path)
      .filter((path): path is string => path !== null);

    const filteredNewPaths = newBackdropPaths.filter(
      (path) => !searchResults.includes(path)
    );

    setSearchResults(filteredNewPaths);
  };

  return <div></div>;
}

export default SearchResults;
