import { RESTAURANT_IMAGE } from "../utils/constant";

const ResturantCart = (props) => {

    const {resData} = props;
    
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData?.info;

    return(
        <div className="gokul-veg">
            <div className="res-img">
                <img className="res-biryani-img" alt="Biryani Image" src={RESTAURANT_IMAGE + cloudinaryImageId } />
            </div>
            <div className="res-name">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
            </div>
            <div className="res-details">
                <h4>{avgRating} Stars</h4>
                <h4>{sla.deliveryTime} mins</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

export default ResturantCart;