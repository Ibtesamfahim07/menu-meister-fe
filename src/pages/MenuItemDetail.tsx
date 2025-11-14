import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
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

const menuItems = [
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

export default function MenuItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const item = menuItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Item not found</h2>
          <Button onClick={() => navigate('/menu')}>Back to Menu</Button>
        </Card>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item, quantity);
    toast({
      title: 'Added to cart',
      description: `${quantity} × ${item.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate('/menu')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Menu
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
            <p className="text-2xl font-bold text-primary mb-6">
              ₹{item.price.toFixed(2)}
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              {item.description}
            </p>

            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ₹{(item.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
