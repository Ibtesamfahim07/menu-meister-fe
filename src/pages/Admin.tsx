import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Users, ShoppingBag } from 'lucide-react';
import biryaniImg from '@/assets/biryani.jpg';
import pulaoImg from '@/assets/pulao.jpg';
import chickenKarahiImg from '@/assets/chicken-karahi.jpg';
import muttonKormaImg from '@/assets/mutton-korma.jpg';
import butterChickenImg from '@/assets/butter-chicken.jpg';
import dalMakhaniImg from '@/assets/dal-makhani.jpg';
import palakPaneerImg from '@/assets/palak-paneer.jpg';
import naanImg from '@/assets/naan.jpg';
import tandooriChickenImg from '@/assets/tandoori-chicken.jpg';
import seekhKababImg from '@/assets/seekh-kabab.jpg';
import nihariImg from '@/assets/nihari.jpg';
import haleemImg from '@/assets/haleem.jpg';
import fishTikkaImg from '@/assets/fish-tikka.jpg';
import chanaMasalaImg from '@/assets/chana-masala.jpg';
import raitaImg from '@/assets/raita.jpg';
import gulabJamunImg from '@/assets/gulab-jamun.jpg';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  role: string;
}

// Mock user data (frontend only)
const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', joinedDate: '2024-01-15', role: 'Customer' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', joinedDate: '2024-02-20', role: 'Customer' },
  { id: '3', name: 'Admin User', email: 'admin@example.com', joinedDate: '2024-01-01', role: 'Admin' },
  { id: '4', name: 'Bob Johnson', email: 'bob@example.com', joinedDate: '2024-03-10', role: 'Customer' },
  { id: '5', name: 'Alice Williams', email: 'alice@example.com', joinedDate: '2024-03-25', role: 'Customer' },
];

// Mock menu items (frontend only)
const initialMenuItems: MenuItem[] = [
  { id: '1', name: 'Biryani', price: 350, description: 'Aromatic basmati rice cooked with tender meat and traditional spices', image: biryaniImg },
  { id: '2', name: 'Pulao', price: 450, description: 'Fragrant rice dish with vegetables and aromatic herbs', image: pulaoImg },
  { id: '3', name: 'Chicken Karahi', price: 550, description: 'Spicy chicken curry cooked in a traditional wok with tomatoes and green chilies', image: chickenKarahiImg },
  { id: '4', name: 'Mutton Korma', price: 650, description: 'Tender mutton in rich, creamy gravy with cashews and aromatic spices', image: muttonKormaImg },
  { id: '5', name: 'Butter Chicken', price: 500, description: 'Creamy tomato-based curry with tender chicken pieces', image: butterChickenImg },
  { id: '6', name: 'Dal Makhani', price: 250, description: 'Slow-cooked black lentils in butter and cream', image: dalMakhaniImg },
  { id: '7', name: 'Palak Paneer', price: 300, description: 'Fresh cottage cheese cubes in creamy spinach gravy', image: palakPaneerImg },
  { id: '8', name: 'Naan', price: 50, description: 'Soft, fluffy traditional bread baked in tandoor', image: naanImg },
  { id: '9', name: 'Tandoori Chicken', price: 600, description: 'Marinated chicken grilled to perfection in clay oven', image: tandooriChickenImg },
  { id: '10', name: 'Seekh Kabab', price: 400, description: 'Minced meat skewers with spices, grilled over charcoal', image: seekhKababImg },
  { id: '11', name: 'Nihari', price: 700, description: 'Slow-cooked beef stew with aromatic spices and bone marrow', image: nihariImg },
  { id: '12', name: 'Haleem', price: 350, description: 'Thick stew of wheat, barley, meat and lentils', image: haleemImg },
  { id: '13', name: 'Fish Tikka', price: 450, description: 'Marinated fish fillets grilled with herbs and spices', image: fishTikkaImg },
  { id: '14', name: 'Chana Masala', price: 200, description: 'Chickpeas in tangy tomato and onion gravy', image: chanaMasalaImg },
  { id: '15', name: 'Raita', price: 100, description: 'Cool yogurt with cucumber, mint and spices', image: raitaImg },
  { id: '16', name: 'Gulab Jamun', price: 150, description: 'Sweet milk dumplings soaked in rose-flavored syrup', image: gulabJamunImg },
];

export default function Admin() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [users] = useState<User[]>(mockUsers);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.description) {
      toast({
        title: 'Error',
        description: 'All fields are required',
        variant: 'destructive',
      });
      return;
    }

    if (editingItem) {
      // Update existing item
      setMenuItems(prev => prev.map(item => 
        item.id === editingItem.id 
          ? { ...item, name: formData.name, price: parseFloat(formData.price), description: formData.description }
          : item
      ));
      toast({ title: 'Success', description: 'Item updated successfully' });
    } else {
      // Add new item
      const newItem: MenuItem = {
        id: Date.now().toString(),
        name: formData.name,
        price: parseFloat(formData.price),
        description: formData.description,
        image: biryaniImg, // Default image for new items
      };
      setMenuItems(prev => [...prev, newItem]);
      toast({ title: 'Success', description: 'Item added successfully' });
    }
    
    setDialogOpen(false);
    setFormData({ name: '', price: '', description: '' });
    setEditingItem(null);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: item.price.toString(),
      description: item.description,
    });
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    setMenuItems(prev => prev.filter(item => item.id !== id));
    toast({ title: 'Success', description: 'Item deleted successfully' });
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEditingItem(null);
    setFormData({ name: '', price: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users" className="gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="menu" className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              Menu Items
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{users.length}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">
                    {users.filter(u => u.role === 'Customer').length}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">
                    {users.filter(u => u.role === 'Admin').length}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-1">
                          {user.role}
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Joined {new Date(user.joinedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Items Tab */}
          <TabsContent value="menu" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Menu Management</h2>
              
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingItem(null)} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingItem ? 'Edit Item' : 'Add New Item'}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1">
                        {editingItem ? 'Update' : 'Add'}
                      </Button>
                      <Button type="button" variant="outline" onClick={handleDialogClose}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {menuItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No menu items yet. Add your first item!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-2xl font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(item)}
                          className="flex-1 gap-2"
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="flex-1 gap-2"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
