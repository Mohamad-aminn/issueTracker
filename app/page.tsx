import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
        Goodbye World!
      </main>
    </>
  );
}
