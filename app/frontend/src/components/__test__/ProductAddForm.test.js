import ProductAddForm from "../ProductAddForm";
import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';


test('ProductAddForm Product Name', () => {
   render(<ProductAddForm/>);
   const element = screen.getByPlaceholderText("Product Name")
   fireEvent.change(element, {target: {value: "Test"}})
   expect(element.value).toBe("Test");
   expect(element).toBeInTheDocument();
   expect(element).toBeVisible();
   screen.debug()
})

test('ProductAddForm Description', () => {
    render(<ProductAddForm/>);
    const element = screen.getByPlaceholderText("Description")
    fireEvent.change(element, {target: {value: "Test"}})
    expect(element.value).toBe("Test");
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    screen.debug()
 })

 test('ProductAddForm Quantity Available', () => {
    render(<ProductAddForm/>);
    const element = screen.getByPlaceholderText("Quantity Available")
    fireEvent.change(element, {target: {value: 1}})
    expect(element.value).toBe("1");
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    screen.debug()
 })

 test('ProductAddForm Contact Info', () => {
    render(<ProductAddForm/>);
    const element = screen.getByPlaceholderText("Contact Info")
    fireEvent.change(element, {target: {value: "Test"}})
    expect(element.value).toBe("Test");
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    screen.debug()
 })

 test('ProductAddForm Add Product', () => {
    render(<ProductAddForm/>);
    const element = screen.getByPlaceholderText("Add Product")
    fireEvent.click(element)
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    screen.debug()
 })