export default function SliderItem({ banner }) {
  const { description, main_image: img, title } = banner;
  return (
    <div>
      <img src={img.url} alt={img.alt} />
      <h2>{title}</h2>
      {description.map((p, index) => (
        <p key={index}>p.text</p>
      ))}
    </div>
  );
}
