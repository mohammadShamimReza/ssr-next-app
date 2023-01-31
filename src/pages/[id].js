import { useRouter } from "next/router";
import React from "react";

// try { } catch (err) { console.log(err)}
// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://www.initmigrate-spz457y-uinpbvoggscfo.us-4.platformsh.site/api/basic-pages?populate=*&pagination[limit]=50`
//   );
//   const data = await res.json();
//   const paths = data.data.map((enity) => {
//     return {
//       params: { id: enity.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false, // will be passed to the page component as props
//   };
// }
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://www.initmigrate-spz457y-uinpbvoggscfo.us-4.platformsh.site/api/basic-pages/${context.params.id}/?populate=*`
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

function id({ data }) {
  console.log(data);
  const entity = data.data.attributes;
  return (
    <div
      style={{
        display: "flex",
        alighItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          alighItems: "center",
          justifyContent: "center",
          flexDirection: "coloum",
        }}
        className=""
      >
        <h1>{entity.title} </h1>
        <br />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
          className=""
        >
          <h4 className="">Body:</h4> <span>{entity.body}</span>{" "}
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
          className=""
        >
          <h4 className="">alias:</h4> <span>{entity.alias}</span>{" "}
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
          className=""
        >
          <h4 className="">display_breadcrumb:</h4>{" "}
          <span>{entity.display_breadcrumb}</span>{" "}
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
          className=""
        >
          <h4 className="">image:</h4> <span>{entity.image?.data}</span>{" "}
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
          className=""
        >
          <h4 className="">paragraphs: </h4>
          <span>
            {entity.paragraphs?.length
              ? entity.paragraphs.map((paragraph) =>
                  Object.entries(paragraph).map(([key, value]) => (
                    // console.log(typeof value);
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                      className=""
                    >
                      <h4 className="">{key} :</h4>{" "}
                      <span>
                        {typeof value === "string"
                          ? value
                          : typeof value === "number"
                          ? value
                          : typeof value}
                      </span>{" "}
                    </div>
                  ))
                )
              : 0}{" "}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default id;
