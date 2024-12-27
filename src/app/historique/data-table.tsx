'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Download } from 'lucide-react'

type Item = {
  id: string
  name: string
  date: string
}

const initialItems: Item[] = [
  { id: "1", name: "cas A", date: "2023-06-15" },
  { id: "2", name: "cas B", date: "2023-06-16" },
  { id: "3", name: "cas C", date: "2023-06-17" },
  { id: "4", name: "cas D", date: "2023-06-18" },
  { id: "5", name: "cas E", date: "2023-06-19" },
  { id: "6", name: "cas F", date: "2023-06-20" },
  { id: "7", name: "Analyse G", date: "2023-06-21" },
  { id: "8", name: "Formation H", date: "2023-06-22" },
  { id: "9", name: "Évaluation I", date: "2023-06-23" },
  { id: "10", name: "Planification J", date: "2023-06-24" },
]

export function DataTable() {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ID,Nom,Date\n"
      + items.map(item => `${item.id},${item.name},${item.date}`).join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "export.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" /> Exporter
        </Button>
        <Select
          value={itemsPerPage.toString()}
          onValueChange={(value) => {
            setItemsPerPage(Number(value))
            setCurrentPage(1)
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Éléments par page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 par page</SelectItem>
            <SelectItem value="10">10 par page</SelectItem>
            <SelectItem value="15">15 par page</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableCaption>Liste des cas cliniques</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(item.id)}
                  aria-label={`Supprimer ${item.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <Button
            key={number}
            variant={currentPage === number ? "default" : "outline"}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Button>
        ))}
      </div>
    </div>
  )
}

