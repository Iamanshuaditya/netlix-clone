import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";
import SearchState from "@/store/atoms/Search";
import SearchResultsState from "@/store/atoms/SearchResults";

function SearchResults() {
  const api_key = import.meta.env.VITE_TMDB_API;
  const baseUrl = "https://api.themoviedb.org/3/search/multi";
  const [searchValues] = useRecoilState(SearchState);
  const setSearchResults = useSetRecoilState(SearchResultsState);

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

        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchFirstPage();
  }, [searchValues, api_key, setSearchResults]);

  return <div></div>;
}

export default SearchResults;
