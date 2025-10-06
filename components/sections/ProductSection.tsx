import React from "react";
import Container from "../Container";
import CardComponent from "../CardComponent";

const ProductSection = () => {
  return (
    <section className="pt-[8rem] pb-[4rem] bg-gray-100">
      <Container  className=" flex flex-col">
        <h2 className="text-[1.5rem] pb-[5.25rem]">Naše produkty</h2>

        <div className="flex flex-col md:flex-row pb-[6.813rem]">
          {/* velký titulek – bez mezer a posunutý o padding Containeru */}
          <p className="text-[4rem] leading-[1.05] md:flex-1 ">
            Prozkoumejte naši nabídku řešení pro vaši firmu
          </p>

          <p className="text-[2rem] md:ml-auto md:max-w-[36rem] md:pl-[5rem] self-end">
            Zrychlete procesy, získejte přehled a ušetřete čas i peníze
          </p>
        </div>

        {/* karty: 3 stejné, stejné výšky, mezery jako ve figmě */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
