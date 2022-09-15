import "./directory-item.style.scss";
import { useNavigate } from "react-router-dom"

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate()

  const navigationHandler = () => navigate(route)
  return (
    <div className="directory-item-container" onClick={navigationHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
