import DirectoryItem from "../directory-item/directory-item.component";
import "./categories.style.scss";


const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};
export default Categories;
