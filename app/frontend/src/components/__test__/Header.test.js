import React from "react";
import { screen, render } from '@testing-library/react';
import Header from "../Header";


test('Header should be rendered', () => {
   render(<Header title={"Header"}/>);
   const element = screen.getByRole("heading");
   expect(element).toBeInTheDocument();
   expect(element).toBeVisible();
   expect(element).toContainHTML("h1");
   expect(element).toHaveTextContent("Header");
   screen.debug()
})