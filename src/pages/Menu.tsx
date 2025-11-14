import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

const mockMenuItems: MenuItem[] = [
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

export default function Menu() {
  const [menuItems] = useState<MenuItem[]>(mockMenuItems);
  const loading = false;


  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our delicious selection of carefully crafted dishes
          </p>
        </div>

        {menuItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No menu items available at the moment</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-30 group-hover:opacity-10"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="relative z-10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-2xl font-bold text-primary">
                        ₹{item.price.toFixed(2)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
