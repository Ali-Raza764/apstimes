import sanityClient from "../config/client";

const getData = async ({ type, slug }) => {
  if (type === "Allposts") {
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
  }

  if (type === "OnePost") {
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
  }

  if (type === "Allnews") {
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
  }

  if (type === "OneNews") {
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
  } else {
    console.log("Nothing here for you");
  }
};

export default getData;
