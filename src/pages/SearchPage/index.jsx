import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from '../../api/axios';

const SearchPage = () => {

    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = query.get('q');

    useEffect(() => {
        if (searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    }, [searchTerm])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axios.get(
                `/search/multi?include_audlt=false&query=${searchTerm}`
            )
            console.log(response)
            setSearchResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>SearchPage</div>
  )
}

export default SearchPage