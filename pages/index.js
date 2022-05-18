import Head from 'next/head'
import Navbar from "../components/navbar";
import Featured from "../components/featured";
import List from "../components/list";
import ListItemModal from "../components/list_item_modal";
import { experiences } from "../components/constants/slider_data";

export default function Home() {
  const modal = experiences[0]

  return (
    <div className="home">
      <Head>
        <title>Henflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className="overflow-hidden bg-bgBlack flex flex-col justify-between">
              <Navbar />
              <Featured />
            {/* <div className="flex justify-center"> */}
            {/*   <ListItemModal */}
            {/*     image={modal.image} */}
            {/*     title={modal.title} */}
            {/*     blurb={modal.blurb} */}
            {/*     dateRange={modal.dateRange} */}
            {/*     type={modal.type} */}
            {/*     techStack={modal.techStack} */}
            {/*     blurbBullets={modal.blurbBullets} */}
            {/*   /> */}
            {/* </div> */}

              <List title="Experiences"/>
              <List title="Projects"/>
              <List title="Skills"/>
              <List title="Awards/Certifications"/>
              <br /> <br /> <br />
          </div>
      </main>
    </div>
  )
}
