import { useRouter } from "next/router";
import React from "react";

// try { } catch (err) { console.log(err)}
export async function getStaticPaths() {
  console.log(id);
  const res = await fetch(
    `https://www.initmigrate-spz457y-uinpbvoggscfo.us-4.platformsh.site/api/basic-pages?populate=*&pagination[limit]=50`
  );
  const data = await res.json();
  const paths = data.data.map((enity) => {
    return {
      params: { id: enity.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, // will be passed to the page component as props
  };
}
export async function getStaticProps(context) {
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
    <div>
      <h1>{entity.title} </h1>
    </div>
  );
}

export default id;
