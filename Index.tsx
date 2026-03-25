import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Gift, Truck, Shield } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import OrderForm from "@/components/OrderForm";
import Reviews from "@/components/Reviews";

const products = [
  {
    name: "🎁 ঈদ স্পেশাল কম্বো প্যাকেজ",
    description: "পুতির টিস্যু বক্স, ফুলদানি, আল্লাহু ওয়ালমেট, কাবা ঘর, ব্যাগ, চাবির রিং",
    image: "https://i.supaimg.com/60f8aed1-93fd-4ae6-8416-d2bbffaee94c/eb091717-f0de-4737-9fa6-ab6694989c02.jpg",
    originalPrice: 4500,
    discountedPrice: 4200,
    discountLabel: "৳৩০০ ছাড়!",
  },
  {
    name: "পুতির কাবা ঘর",
    image: "https://i.supaimg.com/60f8aed1-93fd-4ae6-8416-d2bbffaee94c/cf038019-dc30-41ca-91ba-f76a568ab266.jpg",
    originalPrice: 950,
    discountedPrice: 850,
    discountLabel: "১০% ছাড়",
  },
  {
    name: "পুতির ফুলদানি",
    image: "https://i.supaimg.com/60f8aed1-93fd-4ae6-8416-d2bbffaee94c/10361ffe-9662-4129-8ffb-a61b46cdfbb2.jpg",
    originalPrice: 900,
    discountedPrice: 800,
    discountLabel: "১১% ছাড়",
  },
  {
    name: "পুতির ব্যাগ",
    image: "https://i.supaimg.com/60f8aed1-93fd-4ae6-8416-d2bbffaee94c/6cfb1a63-0286-452c-8fa8-c838d87187d0.jpg",
    originalPrice: 800,
    discountedPrice: 700,
    discountLabel: "১২% ছাড়",
  },
  {
    name: "পুতির চাবির রিং",
    image: "https://i.supaimg.com/60f8aed1-93fd-4ae6-8416-d2bbffaee94c/5c55c8d2-5348-40c8-b3d9-bcaf67093d54.jpg",
    originalPrice: 120,
    discountedPrice: 100,
    discountLabel: "১৭% ছাড়",
  },
  {
    name: "পুতির টিস্যু বক্স",
    image: "https://i.supaimg.com/60f8aed1-93fd-4ae6-8416-d2bbffaee94c/65ffd584-c8b8-426f-b043-08fa875ae8e1.jpg",
    originalPrice: 1400,
    discountedPrice: 1260,
    discountLabel: "১০% ছাড়",
  },
];

const Index = () => {
  const [orderProduct, setOrderProduct] = useState("");
  const [orderQty, setOrderQty] = useState(1);
  const [orderPrice, setOrderPrice] = useState(0);

  const handleOrder = (name: string, qty: number, price: number) => {
    setOrderProduct(name);
    setOrderQty(qty);
    setOrderPrice(price);
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground py-4 px-4 text-center sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">HANDMADE CREATION</h1>
        <p className="text-sm opacity-90 mt-1">হাতে তৈরি সৌন্দর্য ✨</p>
      </header>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Eid Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-gold text-foreground text-center py-5 px-4"
      >
        <h2 className="text-xl md:text-2xl font-extrabold">🌙 ঈদ স্পেশাল কম্বো প্যাকেজ 🌙</h2>
        <p className="text-sm mt-1 font-medium">
          পুতির টিস্যু বক্স • ফুলদানি • আল্লাহু ওয়ালমেট • কাবা ঘর • ব্যাগ • চাবির রিং
        </p>
        <p className="mt-2">
          <span className="line-through opacity-70">৳৪৫০০</span>{" "}
          <span className="text-2xl font-extrabold ml-2">মাত্র ৳৪২০০</span>
        </p>
      </motion.div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto py-6 px-4">
        {[
          { icon: Truck, text: "ক্যাশ অন ডেলিভারি" },
          { icon: Shield, text: "১০০% হ্যান্ডমেইড" },
          { icon: Gift, text: "ঈদ স্পেশাল ছাড়" },
        ].map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon size={20} className="text-primary" />
            </div>
            <span className="text-xs font-semibold">{text}</span>
          </div>
        ))}
      </div>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-8">
          আমাদের পণ্যসমূহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} onOrder={handleOrder} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <Reviews />
      </section>

      {/* Order Form */}
      <section className="px-4 pb-16">
        <OrderForm selectedProduct={orderProduct} selectedQty={orderQty} selectedPrice={orderPrice} />
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/8801319719264"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-hero text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <Phone size={24} />
      </a>

      {/* Footer */}
      <footer className="bg-gradient-hero text-primary-foreground text-center py-6 px-4 space-y-2">
        <p className="font-bold text-lg">HANDMADE CREATION</p>
        <p className="text-sm opacity-80">
          যোগাযোগ: <a href="tel:01319719264" className="underline">০১৩১৯৭১৯২৬৪</a>
        </p>
        <p className="text-xs opacity-60">© ২০২৬ সর্বস্বত্ব সংরক্ষিত</p>
      </footer>
    </div>
  );
};

export default Index;
