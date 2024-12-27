import { DataTable } from "./data-table";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Tableau des cas clinique</h1>
      
        <DataTable />
     
    </main>
  );
}
