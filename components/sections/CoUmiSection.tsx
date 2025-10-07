import React from 'react'
import CoUmiCard from '../CoUmiCard'
import Container from '../Container';

const CoUmiSection = () => {
  return (
    <section className="pt-[8rem] pb-[8rem] bg-gray-100">
      <Container>
        <h2 className="text-[6rem] font-bold ">Co vše<br /> Odoo umí ?</h2>
        <div
          className="
        grid grid-cols-1 md:grid-cols-2
        gap-x-2 gap-y-2
        md:[&>*:nth-child(2n)]:mt-[-5rem]
      "
        >
          <CoUmiCard />
          <CoUmiCard />
          <CoUmiCard />
          <CoUmiCard />
          <CoUmiCard />
          <CoUmiCard />
        </div>
      </Container>
    </section>
  );
        }

export default CoUmiSection