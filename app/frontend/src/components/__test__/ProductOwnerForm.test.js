import ProductOwnerForm from "../ProductOwnerForm";
import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';


test('ProductOwnerForm Product ID', () => {
   render(<ProductOwnerForm/>);
   const element = screen.getByPlaceholderText("Product ID")
   fireEvent.change(element, {target: {value: "Test"}})
   expect(element.value).toBe("Test");
   expect(element).toBeInTheDocument();
   expect(element).toBeVisible();
   screen.debug()
})

test('ProductOwnerForm Contact Text', () => {
    render(<ProductOwnerForm/>);
    const element = screen.getByRole("heading")
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    screen.debug()
 })

test('ProductOwnerForm Get Contact Info', () => {
    render(<ProductOwnerForm/>);
    const element = screen.getByRole("button")
    expect(element).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    screen.debug()
 })