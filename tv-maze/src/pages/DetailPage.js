import { useEffect, useContext } from "react";

//Context 
import ShowsContext from "../context/shows/showsContext";

//Components
import Loader from "../components/Loader";

const DetailPage = ({match}) => {
    const {getDetail, showDetail, loading} = useContext(ShowsContext);
    
    useEffect(() => {
        getDetail(match.params.id);

        //eslint-disable-next-line
    }, []);

    const removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };

    return(
        <>
            {loading ? (
                <Loader /> 
            ) : (
                <div className="showDetail">
                    <img 
                        src={
                            showDetail && showDetail.image  
                            ? (showDetail.image.medium) : 
                            ("no image")}
                        alt={showDetail && showDetail.name} 
                    />
                    <div className="showDetail_info">
                        <h1>{showDetail.name}</h1>
                        {showDetail.genres && showDetail.genres.map(genre => (
                            <span key={genre} className="showDetail_genre">{genre}</span>
                        ))}
                        <p>
                            <strong>Status: </strong>{showDetail.status && showDetail.status}
                        </p>
                        <p>
                            <strong>Rating: </strong>{" "}{showDetail.rating ? (showDetail.rating.average) : ("No rating") }
                        </p>
                        <p>
                            <strong>Official Site: </strong>{" "}{showDetail.officialSite ? (<a href={showDetail.officialSite} target="_blank" rel="noreferrer">{showDetail.officialSite}</a>) : ("No official site") }
                        </p>
                        <p>{showDetail.summary && removeTags(showDetail.summary)}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default DetailPage;