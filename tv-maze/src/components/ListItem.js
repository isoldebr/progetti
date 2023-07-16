import { Link } from "react-router-dom";

function ListItem ({image, name, rating, id}) {
    return(
        <Link to={`/detail/${id}`} className="listitem">
            <img src={image} alt={name}/>
            <div className="listitem_info">
                <h4 className="info_name">{name}</h4>
                <h4 className="info_rating">{rating}</h4>
            </div>
        </Link >
      );
}

export default ListItem;