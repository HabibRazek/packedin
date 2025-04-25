import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AdminLayout } from "../AdminLayout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminProfile() {
    return (
        <AdminLayout>
            <div className="space-y-6 max-w-2xl">
                <h1 className="text-2xl font-bold">Profil Administrateur</h1>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="/avatar.png" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <Button variant="outline">Changer la photo</Button>
                            <p className="text-sm text-gray-500">JPG, GIF ou PNG. Taille max. 2MB</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">Prénom</Label>
                            <Input id="first-name" defaultValue="Admin" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Nom</Label>
                            <Input id="last-name" defaultValue="User" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="admin@emballages-eco.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                        <p className="text-sm text-gray-500">Laissez vide pour ne pas changer</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                        <Input id="confirm-password" type="password" placeholder="••••••••" />
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <Button variant="outline">Annuler</Button>
                        <Button>Enregistrer les modifications</Button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}