import {
  categories,
  featuredBanners,
  featuredProducts,
  products,
  searchArmchair,
  searchNotFound,
  YWJI7hIAACkAy8Cv,
  YWL6YBIAAC0AztrR,
} from 'utils/fixtures/json';

export default function getMockedResponse(query) {
  const decodeQuery = decodeURIComponent(query);
  switch (decodeQuery) {
    case '[[at(document.type, "category")]]':
      return categories;
    case '[[at(document.type, "product")]]':
      return products;
    case '[[at(document.type, "banner")]]':
      return featuredBanners;
    case '[[at(document.tags, ["Featured"])]]':
      return featuredProducts;
    case '[[fulltext(document, "armchair")]]':
      return searchArmchair;
    case '[[fulltext(document, "empty")]]':
      return searchNotFound;
    case `[[at(document.id, "YWJI7hIAACkAy8Cv")]]`:
      return YWJI7hIAACkAy8Cv;
    case `[[at(document.id, "YWL6YBIAAC0AztrR")]]`:
      return YWL6YBIAAC0AztrR;
    default:
      return { error: 'no_data' };
  }
}
