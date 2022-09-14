import "./category.styles.scss"
import ProductCard from "../../component/product-card/product-card.component"
import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from '../../contexts/categories.context'

const Category = () => {
  const { category } = useParams();
  console.log("hello world")
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])

  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className="category-container">
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </Fragment>)

}

export default Category;
