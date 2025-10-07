# Monfil.ca Next.js Project Blueprint

## Overview

This document outlines the development plan for migrating Monfil.ca from a WordPress/WooCommerce platform to a modern, performant e-commerce website built with Next.js and backed by Firebase.

## Implemented Features

### Phase 1: Project Initialization
- Initialized a new Next.js project using `create-next-app`.
- Set up a Git repository and pushed the initial commit to the `main` branch on GitHub.
- Created a `develop` branch for ongoing development.

### Phase 2: Basic Structure
- Created `Header` and `Footer` components.
- Integrated the `Header` and `Footer` into the root `layout.tsx`.

### Phase 3: Styling with Tailwind CSS
- Installed and configured Tailwind CSS, PostCSS, and Autoprefixer.
- Updated `globals.css` to include Tailwind directives.
- Applied basic styling to the `Header` and `Footer` components.
- Corrected the PostCSS configuration to use `@tailwindcss/postcss`.

## Development Plan: E-commerce Migration

### Phase 4: Backend Setup & Data Modeling
- Set up a new Firebase project.
- Enable and configure Firebase Authentication, Firestore, and Cloud Storage.
- Design the Firestore database schema for `products`, `customers`, and `orders` based on the WooCommerce data structure.

### Phase 5: Data Migration
- Export customer, product, and order data from WordPress/WooCommerce (likely to CSV or XML).
- Write and execute migration scripts to import the exported data into Firebase Authentication and Firestore.
- Write and execute a script to migrate product images to Firebase Cloud Storage.

### Phase 6: Storefront UI - Product & Category Pages
- Create dynamic routes for product category pages (`/collections/[categoryHandle]`)
- Create dynamic routes for product detail pages (`/products/[productHandle]`).
- Build the UI components to display product grids and individual product information.

### Phase 7: Cart & Checkout Flow
- Implement a client-side shopping cart to manage items and quantities.
- Build the multi-step checkout UI (shipping address, billing, etc.).
- Integrate a payment provider (e.g., Stripe) to handle transactions.

### Phase 8: Customer Accounts & Authentication
- Create pages for user sign-up, login, and password reset.
- Build a protected customer dashboard where users can view their order history and manage their account details.

### Phase 9: Deployment & Go-Live
- Set up production hosting with Firebase Hosting.
- Implement 301 redirects to map old WordPress URLs to new Next.js URLs to preserve SEO.
- Configure DNS to point the domain to the new site.
