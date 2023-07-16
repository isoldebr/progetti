import { useContext } from "react";

//Context 
import showsContext from "../context/shows/showsContext";

//Components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

function HomePage() {
    const ShowsContext = useContext(showsContext);
    const { loading, shows } = ShowsContext
    return(
        <div className="homepage">
        <Searchbar />
        {loading ? (
            <Loader />
        ) : ( 
            <div>
                {shows.map((item) => (
                    <ListItem 
                        key={item.show.id}
                        id={item.show.id}
                        image={item.show.image ? item.show.image.medium : "https://www.bing.com/images/search?view=detailV2&ccid=CJXBqQxJ&id=25E55AB4E27FBEDEB98654CB743E64B5DF918CE5&thid=OIP.CJXBqQxJOdlA3mH7_AqjQwHaHa&mediaurl=https%3a%2f%2fyt3.ggpht.com%2fa%2fAATXAJwFln4B0-n0S_L3wjx5XN42-Imtloh01ypHUw%3ds900-c-k-c0xffffffff-no-rj-mo&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0895c1a90c4939d940de61fbfc0aa343%3frik%3d5YyR37VkPnTLVA%26pid%3dImgRaw%26r%3d0&exph=900&expw=900&q=default+image+for+tvshow&simid=608030171220238717&FORM=IRPRST&ck=8083A289A6AD8CD6F9C29B6022B8B45B&selectedIndex=5&ajaxhist=0&ajaxserp=0" }
                        name={item.show.name}
                        rating= {item.show.rating.average ? item.show.rating.average : "No rating"}
                    />
                ))}
            </div>
    )}
    </div>
    );
}

export default HomePage;