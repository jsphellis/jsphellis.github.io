# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. This website is designed to showcase your skills, projects, and professional information in a clean and visually appealing way.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Sections for showcasing your skills, projects, and contact information
- Smooth scrolling navigation
- Interactive elements with JavaScript
- Easy to customize and extend

## File Structure

- `index.html` - The main HTML file containing the structure of the website
- `styles.css` - CSS file with all the styling for the website
- `script.js` - JavaScript file with interactive functionality
- `README.md` - This documentation file

## Customization Guide

### Personalizing Your Portfolio

1. **Update Personal Information**
   - Edit the name, tagline, and about section in `index.html`
   - Update the footer copyright information

2. **Add Your Projects**
   - Duplicate the project card template in the projects section
   - Add your project title, description, and links
   - For each project, update the GitHub and live demo links

3. **Customize Your Skills**
   - Edit the skills lists to reflect your actual skills
   - Add or remove skill categories as needed

4. **Update Contact Information**
   - Replace the placeholder social media links with your actual profiles
   - Update the email address

### Styling Customization

1. **Change Color Scheme**
   - Edit the CSS variables at the top of `styles.css`:
     ```css
     :root {
         --primary-color: #4a6cf7;
         --secondary-color: #2a3855;
         --accent-color: #6c63ff;
         /* other variables */
     }
     ```

2. **Typography**
   - Change the font family in the `body` selector in `styles.css`

3. **Layout Adjustments**
   - Modify padding, margins, and grid layouts as needed

## Adding More Sections

To add a new section to your portfolio:

1. Create a new section in `index.html` following the existing pattern:
   ```html
   <section id="new-section" class="new-section">
       <h2>Section Title</h2>
       <div class="section-content">
           <!-- Your content here -->
       </div>
   </section>
   ```

2. Add corresponding styles in `styles.css`:
   ```css
   .new-section {
       background-color: var(--background-color);
       /* other styles */
   }
   
   .section-content {
       /* content styles */
   }
   ```

3. Add a navigation link in the navbar:
   ```html
   <li><a href="#new-section">New Section</a></li>
   ```

## Deployment

This website is designed to be deployed on GitHub Pages:

1. Push your code to a GitHub repository
2. Go to repository settings
3. Navigate to "Pages" section
4. Select the branch you want to deploy (usually `main`)
5. Your site will be published at `https://yourusername.github.io/repository-name/`

## Future Enhancements

Consider adding these features to enhance your portfolio:

- Dark/Light mode toggle
- Project filtering by category
- Blog section
- Testimonials section
- Contact form with form submission functionality

## Credits

- Font Awesome for icons
- Google Fonts for typography (if you decide to add custom fonts)

## License

This project is open source and available under the [MIT License](LICENSE). 