import Header from "./components/Header";
import Table from "./components/Table";
import Head from 'next/head'
import { TfiGithub } from "react-icons/tfi";
import { AiOutlineBuild } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex flex-col itens-center justify-start pt-[100px] gap-10 w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url(https://i.pinimg.com/originals/b8/4f/41/b84f4195a6d33c93d01111287c0c7b7e.jpg)]">
      <Head>
        <title>Conjuguer Fra</title>
        <link href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAABRX3ANZxBAD6+fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAwMDAwEBAQEAAAAAAgICAgMDAwMBAQEBAAAAAAICAgIDAwMDAQEBAQAAAAACAgICAwMDAwEBAQEAAAAAAgICAgMDAwMBAQEBAAAAAAICAgIDAwMDAQEBAQAAAAACAgICAwMDAwEBAQEAAAAAAgICAgMDAwMBAQEBAAAAAAICAgIDAwMDAQEBAQAAAAACAgICAwMDAwEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAAD//wAA//8AAP//AAA=" rel="icon" type="image/x-icon" />
      </Head>
      < Header />
      <div className="w-full  flex flex-col gap-4 items-center justify-between mt-4">
        <Table />
      </div>

      <div className="flex  items-end p-10 justify-center w-scren h-full  relative gap-8">
        <a className=" peer" href="https://github.com/sirguilherme97">
          <TfiGithub className=" absloute bottom-0 left-0 text-[#31313147] hover:text-[#009CCCFF] active:text-[#f1f1f1] cursor-pointer transition-all   duration-200 shadow-sm " size={50} />
        </a>
        <div className=" invisible  peer-hover:visible items-center justify-center flex-row transition-all duration-500 ease-in">
          <div className="flex flex-row justify-center items-center gap-10">
            <a href="https://impulse-rs.vercel.app/">
              <AiOutlineBuild size={50} className="text-[#009CCCFF] shadow-sm" />
            </a>
            <p className="text-[#dbd7d2b5]">En construction</p>
          </div>
        </div>
      </div>

    </ main>
  )
}
