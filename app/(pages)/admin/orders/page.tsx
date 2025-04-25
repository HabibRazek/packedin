import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AdminLayout } from "../AdminLayout"
import { Search } from "lucide-react"

export default function AdminOrders() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Gestion des commandes</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                            placeholder="Rechercher des commandes..."
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline">Filtrer</Button>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>N° Commande</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <TableRow key={i}>
                                    <TableCell>CMD-{2000 + i}</TableCell>
                                    <TableCell>Client {i}</TableCell>
                                    <TableCell>2023-06-{10 + i}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs 
                                        ${i % 3 === 0 ? 'bg-green-100 text-green-800' :
                                                i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-gray-100 text-gray-800'}`}>
                                            {i % 3 === 0 ? 'Livré' : i % 3 === 1 ? 'En cours' : 'En attente'}
                                        </span>
                                    </TableCell>
                                    <TableCell>{100 + i * 25}.00 €</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">Détails</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <Button variant="outline">Précédent</Button>
                    <Button variant="outline">Suivant</Button>
                </div>
            </div>
        </AdminLayout>
    )
}