import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const Image = ({ fileName, ...props }) => {
  // const { open } = useModalContext();
  const alts = {
    "date-1": "Date with Sam 1",
    "date-2": "Date with Sam 2",
    "date-3": "Date with Sam 3",
    "friends-1": "With close friends 1",
    "friends-2": "With close friends 2",
    "the-wedding-page": "the couple's rings",
  };

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { regex: "/(jpeg|jpg|png|jpg)/i" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO]
              layout: CONSTRAINED
              width: 350
            )
          }
          name
          publicURL
        }
      }
    }
  `);

  const image = getImage(
    data.allFile.nodes.find((file) => file.name === fileName)
  );

  const alt = alts[fileName];
  // src = uncomment if needing to use the original resolution
  // const src = data.allFile.nodes.find((file) => file.name === fileName)
  //   .publicURL;

  return (
    <GatsbyImage
      image={image}
      alt={alt}
      // onClick={() =>
      //   open(
      //     <div className="w-full h-full p-4 flex justify-center items-center">
      //       <img
      //         className="h-full w-full object-contain"
      //         src={src}
      //         alt={alt}
      //       />
      //     </div>
      //   )
      // }
      {...props}
    />
  );
};

export default Image;
