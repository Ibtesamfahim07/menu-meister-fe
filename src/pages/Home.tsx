import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed, Clock, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to Delicious Bites
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience culinary excellence with our carefully crafted menu of delicious dishes
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="gap-2">
                <UtensilsCrossed className="h-5 w-5" />
                View Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
                <p className="text-muted-foreground">
                  We use only the freshest, locally-sourced ingredients in all our dishes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                <p className="text-muted-foreground">
                  Quick preparation without compromising on quality and taste
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in culinary arts and customer satisfaction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our menu and discover your new favorite dish
          </p>
          <Link to="/menu">
            <Button size="lg">Explore Menu</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
