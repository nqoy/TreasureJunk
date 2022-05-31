import Products from "../Products";
import React from "react";
import { screen, render } from '@testing-library/react';


test('Header should be rendered', () => {
   render(<Products/>);
   screen.debug()
})