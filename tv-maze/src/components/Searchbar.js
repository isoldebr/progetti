import { useState, useContext } from 'react';

//context
import showsContext from '../context/shows/showsContext';

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const { searchShows } = useContext(showsContext);

    const onSearchHandler = (e) => {
        e.preventDefault();

        searchShows(searchTerm);
    }

    return(
        <div className="position-relative mt-5">
        <form className="d-flex position-absolute top-0 start-50 translate-middle" role="search">
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search for TvShows!" 
                aria-label="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success" type="submit" onClick={onSearchHandler}>Search</button>
        </form> 
        </div>
    );
}

export default Searchbar;