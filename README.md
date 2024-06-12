# React Interview Project

## Overview

This project is a React application built during a coding interview. It allows users to increment points and spend these points on various purchases. Each purchase type generates additional points per second. Users can also define custom purchase types through a form.

## Features

- **Increment Points**: A button to increment the point counter.
- **Predefined Purchases**: Buttons to buy predefined purchases such as factories, enterprises, small businesses, big businesses, and corporations. Each type of purchase has a different cost and generates points at a different rate.
- **Custom Purchases**: A form to define and add custom purchase types with user-defined cost, rate, and color.
- **Points Generation**: Automatically generate points per second based on the purchased items' rates.

## Detailed Description

1. **State Management**:

   - `count`: A state variable to track the current number of points.
   - `purchases`: An array state variable to store all purchases made.
   - `customPurchase`: A state variable to hold the current values for a custom purchase being defined.
   - `customPurchaseTypes`: An array state variable to store all custom purchase types defined by the user.

2. **Event Handlers**:

   - `handleInputChange`: A function to update the custom purchase state based on user input from the form.
   - `handleFormSubmit`: A function to add a new custom purchase type to the list when the form is submitted.
   - `buyPurchase`: A function to deduct the cost of the purchase from the points and add the purchase to the list of purchases if there are enough points.

3. **Points Generation**:

   - Utilizes a `useEffect` hook to set up an interval that increments the points every second based on the rate of each purchase in the list.

4. **Rendering**:
   - Renders a button for incrementing points.
   - Renders buttons for predefined purchases (Factory, Enterprise, Small Business, Big Business, Corporation) with specific costs and rates.
   - Renders dynamically created buttons for custom purchases defined by the user.
   - Renders the list of purchases as colored boxes on the screen, with colors specified by the user for custom purchases.

## Purpose

This project was built during a React coding interview on 12 June 2024.
