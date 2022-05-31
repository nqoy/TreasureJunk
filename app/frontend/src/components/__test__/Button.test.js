import Button from "../Button";
import React from "react";
import { screen, render } from '@testing-library/react';


test('Header should be rendered', () => {
   render(<Button/>);
   const element = screen.getByRole("button");
   expect(element).toBeInTheDocument();
   screen.debug()
})