import client  from "../config/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function sanityImageUrl(source){
  return(builder.image(source))
}
export default sanityImageUrl
