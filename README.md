# dixonsad_assignment2_layouts
Assignment 2 Layouts 
# Assignment 2: Layouts - Campus Event Guide

## Project Description
This project is a small responsive website created for the University of North Carolina At Greensboro Office of Student Engagement. Its purpose is to help students discover and register for campus activities, ranging from tech hackathons to community service events. The intended audience is current and prospective university students looking to get involved on campus.

Layout Decisions
Flexbox: I used Flexbox for components that require 1 dimensional alignment and spacing. It was applied to the main site navigation to evenly space the links and allow them to wrap on mobile. It was also used for the related-events container on the details page to create a fluid, wrapping row of event cards, and in the .footer-content to center align copyright info and links.
CSS Grid: I used Grid for 2 dimensional, structured layouts. On the home page, .events-grid organizes the event cards into columns, scaling from 1 column (mobile) to 2 (tablet) to 3 (desktop). To satisfy requirement for different card widths, .featured-card spans two grid columns on desktop screens. On the event.html page, I used Grid .layout-grid to create the twocolumn desktop layout, which naturally collapses to a single column on narrow screens.

Responsive Design
Mobile First: The base CSS is written for narrow screens (single column layouts). 
Breakpoint 1 (768px):** At tablet widths, the header switches from a stacked layout to a horizontal row. The upcoming events switch to a 2-column grid, and the `event.html` layout shifts to the desktop standard main/sidebar split (2fr / 1fr).
* **Breakpoint 2 (1024px):** At desktop widths, the upcoming events expand to a 3-column grid, with the featured event card spanning 2 columns to highlight it.
* **Testing:** The pages were tested using Google Chrome's Developer Tools by resizing the viewport, verifying that Flexbox elements wrapped properly and Grid layouts collapsed cleanly without horizontal scrolling.


Sources
* Images: Placeholder images intended to be sourced in the /images directory.
* Fonts: System default fonts Segoe UI, Tahoma, sans-serif utilized.
* Content: All event names and descriptions are fictional
