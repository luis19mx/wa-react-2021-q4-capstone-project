// export default function SliderItem({ cta_link, cta_target, description, main_image, title }) {
export default function SliderItem({ banner }) {
  const { cta_link, cta_target, description, main_image: img, title } = banner;
  return (
    <div>
      <img src={img.url} alt={img.alt} />
      <h2>{banner.title}</h2>
      {description.map((p) => (
        <p>p.text</p>
      ))}
    </div>
  );
}
