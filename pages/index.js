import Head from 'next/head'
import Navbar from "../components/navbar";
import Featured from "../components/featured";
import List from "../components/list";
import ListItemModal from "../components/list_item_modal";
import { experiences } from "../components/constants/slider_data";
import { useState } from "react";
import disableScroll from 'disable-scroll';

export default function Home() {
  const [modal, setModal] = useState(experiences[0])
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0);

  const openModal = () => {
    disableScroll.on();
    setHeight(window.scrollY)
    setOpen(true)
  }

  const closeModal = () => {
    disableScroll.off();
    setOpen(false);
  }

  const openFeaturedModal = () => {
    setModal(experiences[0]);
    openModal();
  }

  return (
    <div className="home">
      <Head>
        <title>Henflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className="base overflow-hidden bg-bgBlack flex flex-col">
              <Navbar />
              <Featured  openModal={openFeaturedModal}/>
              {!open ? null :
                <ListItemModal
                  image={modal.image}
                  title={modal.title}
                  role={modal.role}
                  blurb={modal.blurb}
                  dateRange={modal.dateRange}
                  type={modal.type}
                  techStack={modal.techStack}
                  blurbBullets={modal.blurbBullets}
                  open={open}
                  setClosed={closeModal}
                  height={height}
              />
              }

              <List title="Experiences" setOpen={openModal} modalOpen={open} setModal={setModal}/>
              <List title="Projects"  setOpen={openModal} modalOpen={open} setModal={setModal}/>
              <List title="Skills"  setOpen={openModal} modalOpen={open} setModal={setModal}/>
              <List title="Awards/Certifications"  setOpen={openModal} modalOpen={open} setModal={setModal}/>

            <br /> <br /> <br />
          </div>
      </main>
    </div>
  )
}
