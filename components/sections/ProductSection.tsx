import React from 'react'
import Container from '../Container'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { ArrowRight, ArrowUpRight, Pointer } from 'lucide-react';

const ProductSection = () => {
  return (
    <div>
      <Container>
        <h2 className="text-[1.5rem]">Naše produkty</h2>
        <div>
          <p>Prozkoumejte naši nabídku řešení pro vaši firmu </p>
          <p>Zrychlete procesy, získejte přehled a ušetřete čas i peníze</p>
        </div>

        <Card>
            <CardHeader>

            <Avatar>
                <AvatarImage src="/crm.svg" alt="Odoo ERP" />


            </Avatar>
            <CardContent>
                <h3 className="text-[6rem]">CRM</h3>
                <p className="text-[2rem]">
                  Odoo ERP je komplexní podnikový systém, který integruje všechny
                  aspekty řízení podniku, včetně prodeje, marketingu, zákaznického
                  servisu a financí.
                </p>
            </CardContent>
            <CardFooter>
<Button className="text-[1.5rem] rounded-full"><ArrowUpRight /></Button>
            </CardFooter>
          </CardHeader>





        </Card>
      </Container>
    </div>
  );
}

export default ProductSection