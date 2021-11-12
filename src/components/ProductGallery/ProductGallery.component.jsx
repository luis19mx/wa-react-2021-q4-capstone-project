import PropTypes from 'prop-types';
import Slider from 'react-slick';

function ProductGallery({ gallery }) {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={gallery[i].url} alt="" />
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return gallery?.length ? (
    <>
      <Slider {...settings}>
        {gallery.map(({ url, alt }) => (
          <div key={url}>
            <img src={url} alt={alt ? alt : ''} />
          </div>
        ))}
      </Slider>
    </>
  ) : null;
}

ProductGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

export default ProductGallery;
