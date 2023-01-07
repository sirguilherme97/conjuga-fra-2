import Header from "./components/Header";
import Table from "./components/Table";

export default function Home() {
  return (
    <main className="flex flex-col itens-center justify-start pt-[100px] gap-10 w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url(https://i.pinimg.com/originals/b8/4f/41/b84f4195a6d33c93d01111287c0c7b7e.jpg)]">
      < Header />
      <div className="w-full  flex flex-col gap-4 items-center justify-between mt-4">
        <Table />
      </div>
    </ main>
  )
}
