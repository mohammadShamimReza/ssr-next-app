import styles from "@/styles/Home.module.css";
import Head from "next/head";
export async function getServerSideProps(context) {
  const res = await fetch(
    "https://www.initmigrate-spz457y-uinpbvoggscfo.us-4.platformsh.site/api/basic-pages?populate=*&pagination[limit]=50"
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  console.log(data.data);

  return (
    <>
      <main>
        <Head className={styles.center}>
          <h1>All Basic Page entitys</h1>
        </Head>
        {data?.data?.length === 0 ? (
          <div className="">LOading</div>
        ) : (
          data?.data?.map((entity) => (
            <div key={entity.id} className={styles.description}>
              <p>{entity?.attributes.title}</p>
            </div>
          ))
        )}
        {}
      </main>
    </>
  );
}
