export default function FeaturedProductsItem({ product }) {
  const {
    mainimage: img,
    name,
    category: { slug: category },
    price,
  } = product;
  return (
    <div>
      <img src={img.url} alt={img.alt} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{category}</p>
    </div>
  );
}
