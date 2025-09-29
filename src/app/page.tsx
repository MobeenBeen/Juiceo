import Navbar from "@/components/hero/Navbar";
import HeroImage from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import SearchBar from "@/components/searchBar/SearchBar";
import Products from "@/components/products/Products";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Categories />
      <SearchBar />
      <Products />
      <Footer />
    </div>
  );
}
