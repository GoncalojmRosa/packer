import { Navbar } from "./../components/Navbar";

export default function Home() {
  return (
    <main className="max-w-8xl mx-auto font-mono">
      <Navbar />
      <div className="container flex items-center justify-center h-[80vh]">
        <div className="w-full max-w-5xl flex-col flex items-center space-y-4">
          <h1 className="text-6xl font-bold">Packer</h1>
          <p className="text-2xl ">
            Find your <span>favorite</span> packages alternatives
          </p>
          <input
            placeholder="Search for packages"
            type="text"
            className="border border-black rounded-full placeholder-slate-500 px-5 py-2 w-full h-16"
          />
        </div>
      </div>
    </main>
  );
}
