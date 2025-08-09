import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl lg:text-4xl">Welcome to E-commerce</h1>
        <p className="text-muted-foreground max-w-md">
          Your one-stop destination for all your shopping needs. Discover amazing products at great prices.
        </p>
      </div>
      <div className="flex gap-4">
        <Button>Shop Now</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};

export default Homepage;