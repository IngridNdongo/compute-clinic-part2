import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "2023-01-01",
      name: "john doe",
    },
    {
        id: "728ed52f",
        date: "2023-01-01",
        name: "Bernabe",
      },{
        id: "728ed52f",
        date: "2023-01-01",
        name: "Marc",
      },{
        id: "728ed52f",
        date: "2023-01-01",
        name: "Salomon",
      },
  ]
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
