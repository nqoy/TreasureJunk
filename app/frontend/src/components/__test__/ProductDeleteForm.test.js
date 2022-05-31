import React from "react";
import { createRoot } from 'react-dom/client';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProductDeleteForm from "../ProductDeleteForm";


test('ProductDeleteForm should be rendered', () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    act(() => {
    root.render(<ProductDeleteForm />);
    })
})