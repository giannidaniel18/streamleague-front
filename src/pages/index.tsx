import Table from "@/components/comon/UI/Table";

export default function Home() {
  return (
    <div className=" w-full h-[3000px] flex flex-col items-center gap-3.5">
      <h1 className="text-4xl font-bold">Tabla de posiciones</h1>
      <Table />
    </div>
  );
}
