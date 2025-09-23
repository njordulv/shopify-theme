# Njordr Theme

NT Shop is a custom Shopify theme built from scratch (based on a minimal skeleton), focused on flexibility, clean design, and developer-friendly customization.
This repository contains the theme source code, schema configuration, and development workflow.

## Features

### Customizable Header

Add or change store logo directly from the theme editor.
Navigation menu powered by Shopify’s link_list.
Dynamic cart icon with item count.

### Theme Settings

Upload and manage a favicon.
Typography controls with font_picker.
Layout options: max page width, page margin, border radius.
Full color system (background, foreground, primary, secondary, accent, destructive, border, input, chart colors, sidebar).

### Lightweight & Clean

Minimal default styling, easy to extend.
Organized schema for intuitive customization.

## Tech Stack

Shopify Liquid – template engine.
Theme Schema JSON – for settings and customization.
SCSS / CSS – theme styling (extendable).

## Project Structure

/sections
header.liquid
footer.liquid
...
/assets
styles.css
icon-cart.svg
/config
settings_schema.json
settings_data.json
/layout
theme.liquid

## Getting Started

1. Clone the repository
   git clone https://github.com/njordulv/njordr-theme.git
   cd njordr-theme

2. Install Shopify CLI

Follow Shopify CLI installation guide:
https://shopify.dev/docs/themes/tools/cli

3. Login & Serve
   shopify login --store your-store.myshopify.com
   shopify theme dev

This will run the theme locally with hot reload.

4. Deploy to Production
   shopify theme push

This uploads your theme to Shopify and makes it available in the admin panel.

## Customization

Logo → Upload via Theme Editor > Header > Logo.

Favicon → Upload via Theme Settings > Favicon.

Typography → Choose a font in Theme Settings > Typography.

Colors & Layout → Fully adjustable in Theme Settings.

## Screenshot

![Njordr Shopify Theme Screenshot](./assets/screenshot.jpg)

## License

This project is licensed under the [MIT License](LICENSE).
