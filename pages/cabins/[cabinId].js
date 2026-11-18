import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
// import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

function Cabin({ cabin }) {
  // const router = useRouter(); // for pages router
  // const cabinId = router.query.cabinId;
  return (
    <>
      <Head>
        <title>Cabin {cabin.name} / The Wild Oasis</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
