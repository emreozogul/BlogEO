import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";

export default function PostsLayout({ children }) {
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col items-center min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}