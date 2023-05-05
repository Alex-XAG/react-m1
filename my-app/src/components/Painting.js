// import defaultImage from "./defaul.jpg";

export default function Painting({
  imageUrl, //= defaultImage,
  title,
  profileUrl,
  authorName = "unkhnow",
  price,
}) {
  // console.log(props);
  // const { url, title, profileUrl, authorName, price } = props; // Destructuring
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Availability: finished or are available</p>
      <button type="button">Add to Basket</button>
    </div>
  );
}

// const PaintingArrow = ({
//     url,
//     title,
//     profileUrl,
//     authorName,
//     price,
//   }) => {
//     // console.log(props);
//     // const { url, title, profileUrl, authorName, price } = props; // Destructuring
//     return (
//       <div>
//         <img src={url} alt={title} width="480" />
//         <h2>{title}</h2>
//         <p>
//           Author: <a href={profileUrl}>{authorName}</a>
//         </p>
//         <p>Price: {price} credits</p>
//         <p>Availability: finished or are available</p>
//         <button type="button">Add to Basket</button>
//       </div>
//     );
//   }
//   export default PaintingArrow;
