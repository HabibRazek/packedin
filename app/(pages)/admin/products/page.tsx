import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AdminLayout } from "../AdminLayout"
import { Search, Plus } from "lucide-react"

export default function AdminProducts() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Gestion des produits</h1>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Ajouter un produit
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                            placeholder="Rechercher des produits..."
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline">Filtrer</Button>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead>Catégorie</TableHead>
                                <TableHead>Stock</TableHead>
                                <TableHead>Prix</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <TableRow key={i}>
                                    <TableCell>PRD-{1000 + i}</TableCell>
                                    <TableCell>Doypack personnalisé {i}</TableCell>
                                    <TableCell>Emballage</TableCell>
                                    <TableCell>{50 + i}</TableCell>
                                    <TableCell>{10 + i}.99 €</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="sm">Modifier</Button>
                                        <Button variant="destructive" size="sm">Supprimer</Button>
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