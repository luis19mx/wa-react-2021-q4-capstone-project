export default function GridItem({ category }) {
  const { main_image: img, name } = category;
  return (
    <div>
      <img src={img.url} alt={img.alt} />
      <h2>{name}</h2>
    </div>
  );
}
