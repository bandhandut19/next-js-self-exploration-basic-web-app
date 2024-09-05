import Footer from "@/components/Footer/Footer";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
