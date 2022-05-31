import Product from "../Product"
import React from "react";
import { screen, render } from '@testing-library/react';


test('Product should be rendered', () => {
   render(<Product  product={{product_name: "Test"}}/>);
   const element = screen.getByText("Test");
   expect(element).toHaveTextContent("Test");
   expect(element).toBeInTheDocument();
   expect(element).toBeVisible();
   expect(element).toContainHTML("h2");
   screen.debug()
})