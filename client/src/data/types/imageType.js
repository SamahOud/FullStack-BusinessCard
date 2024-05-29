import { shape, string } from "prop-types";

const imageType = shape({
  url: string.isRequired,
  alt: string.isRequired,
});

export default imageType;
