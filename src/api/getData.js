import client from "../config/client";

const responseCache = {};

export const getAllposts = async () => {
  const type = "allposts"
  if (responseCache[type]) {
    console.log("Returning cached response");
    return responseCache[type];
  }
  try {
    const data = await client.fetch(
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
  responseCache[type] = data;
  console.log(data);
  return data;
  } catch (error) {
    console.log(error);
  }
  
};
export const getOnePost = async (slug) => {
  const type =`${slug}`
  if (responseCache[type]) {
    console.log("Returning cached response");
    return responseCache[type];
  }
  try {
    
    const data = await client.fetch(
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
      createdAt,
     }`,
    {slug }
    );
    responseCache[type] = data
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllNews = async () => {
  const type = "allnews"
  if (responseCache[type]) {
    console.log("Returning cached response");
    return responseCache[type];
  }
  try {
    const data = await client.fetch(
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
  responseCache[type] = data;
  return data;
  } catch (error) {
    console.log(error);
  }
  
};
export const getOneNews = async ( slug ) => {
  const data = await client.fetch(
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
