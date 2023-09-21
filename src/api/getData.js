import sanityClient from "../config/client";

export const getAllposts = async () => {
  const data = await sanityClient.fetch(
    `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
        _id,
        url
      },
      author
    }
  }`
  );
  return data;
};
export const getOnePost = async ({ slug }) => {
  const data = await sanityClient.fetch(
    `*[slug.current == $slug]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
    "name": author->name,
    "authorImage": author->image,
   }`,
    { slug }
  );
  return data;
};
export const getAllNews = async () => {
  const data = await sanityClient.fetch(
    `*[_type == "news"]{
      title,
      mainImage{
        asset->{
        _id,
        url
      }
    }
  }`
  );
  return data;
};
export const getOneNews = async ({ slug }) => {
  const data = await sanityClient.fetch(
    `*[slug.current == $slug]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
   }`,
    { slug }
  );
  return data;
};
