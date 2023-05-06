import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upcomingEvents from "../upcoming-events.json";

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};

///////////////// 1st LECTION!!! //////////////////

// import PaintingList from "./PaintingList";
// import Section from "./Section";
// import paintings from "../paintings.json";

//// tree of components 1 lection!!!!!!!////////////////////
// export default function App() {
//   return (
//     <div>
//       <Section title="Top of the week">
//         <PaintingList items={paintings} />
//       </Section>
//       <Section title="The best">
//         <PaintingList items={paintings} />
//       </Section>
//     </div>
//   );
// }

// //////////// render of gallery 1 component /////////////
{
  /* {paintings.map(painting => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          authorName={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */
}

// ///////////////// Wrong rendering of collection////////////////

{
  /* <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />

      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      /> */
}
