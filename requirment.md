# Image Requirements for Pattachitra Portfolio Website

This document outlines all the images needed for your enhanced portfolio website with animations.

## 🏠 Background Animation Images

### Houses (Pattachitra Style)
- **house1.png** (150x100px) - Traditional Odisha house with Pattachitra colors
- **house2.png** (150x100px) - Another house design with golden/ochre tones
- **house3.png** (150x100px) - Third house variation
- **Requirements:**
  - PNG format with transparent background
  - Use golden, ochre, and brown color palette
  - Traditional Indian/Odisha architectural style
  - Decorative Pattachitra patterns on walls

### Trees (Wind Animation)
- **tree-left.png** (200x300px) - Tree trunk and main structure
- **tree-right.png** (200x300px) - Mirror design or different tree
- **tree-leaves-left.png** (240x240px) - Leaf canopy that will move with wind
- **tree-leaves-right.png** (240x240px) - Leaf canopy for right tree
- **Requirements:**
  - PNG format with transparent background
  - Traditional Pattachitra art style
  - Rich browns for trunks, golden-green for leaves
  - Leaves should be detailed enough to show wind movement

## 👤 Profile Image
- **profile-image.jpg** (400x400px) - Your profile photo
- **Alternative:** Use the provided Pattachitra-style portrait
- **Requirements:**
  - High quality, well-lit photo
  - Square aspect ratio
  - Professional appearance

## 🚀 Project Images

### Main Project Images
- **project1.jpg** (400x300px) - Main image for E-Commerce Platform
- **project2.jpg** (400x300px) - Main image for Art Gallery Website  
- **project3.jpg** (400x300px) - Main image for Cultural Blog

### Project Gallery Images (for expanded view)
- **project1-gallery1.jpg** (600x400px) - Additional view of project 1
- **project1-gallery2.jpg** (600x400px) - Another angle/feature
- **project1-gallery3.jpg** (600x400px) - Final gallery image
- **project2-gallery1.jpg** (600x400px) - Gallery images for project 2
- **project2-gallery2.jpg** (600x400px)
- **project2-gallery3.jpg** (600x400px)
- **project3-gallery1.jpg** (600x400px) - Gallery images for project 3
- **project3-gallery2.jpg** (600x400px)
- **project3-gallery3.jpg** (600x400px)

## 🎨 Creating Pattachitra-Style Images

### Color Palette to Use:
- **Primary Gold:** #D4AF37
- **Primary Ochre:** #CC7722
- **Deep Orange:** #BF6B04
- **Warm Yellow:** #F4C842
- **Rich Brown:** #8B4513
- **Dark Brown:** #654321
- **Burnt Sienna:** #E97451

### Design Elements:
- Intricate border patterns
- Geometric designs
- Traditional motifs (flowers, vines, spirals)
- Bold outlines in dark brown/black
- Flat color application (minimal shading)

## 📁 File Organization

Create the following folder structure:
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── background/
│   │   ├── house1.png
│   │   ├── house2.png
│   │   ├── house3.png
│   │   ├── tree-left.png
│   │   ├── tree-right.png
│   │   ├── tree-leaves-left.png
│   │   └── tree-leaves-right.png
│   ├── profile/
│   │   └── profile-image.jpg
│   └── projects/
│       ├── project1.jpg
│       ├── project1-gallery1.jpg
│       ├── project1-gallery2.jpg
│       ├── project1-gallery3.jpg
│       ├── project2.jpg
│       ├── project2-gallery1.jpg
│       ├── project2-gallery2.jpg
│       ├── project2-gallery3.jpg
│       ├── project3.jpg
│       ├── project3-gallery1.jpg
│       ├── project3-gallery2.jpg
│       └── project3-gallery3.jpg
```

## 🛠️ Tools for Creating Images

### Free Tools:
- **GIMP** - For creating and editing Pattachitra-style graphics
- **Canva** - Templates for quick designs
- **Figma** - Vector-based designs
- **Paint.NET** - Simple editing

### AI Tools:
- **Midjourney** - Prompt: "Traditional Pattachitra art style house/tree, golden ochre colors, intricate borders, Indian folk art"
- **DALL-E** - Similar prompts for generating base images
- **Stable Diffusion** - Local generation with Pattachitra prompts

## 📝 Fallback Options

If you cannot create custom images immediately:
- The website will work without the background images (they'll simply not display)
- Use placeholder images with similar dimensions
- Start with just the profile image and one project image
- Add more images gradually

## 🎯 Priority Order

1. **profile-image.jpg** - Essential for hero section
2. **project1.jpg, project2.jpg, project3.jpg** - Main project images
3. **tree-left.png, tree-right.png** - For tree animations
4. **house1.png, house2.png, house3.png** - Background houses
5. **Gallery images** - For enhanced project views
6. **Tree leaves** - For advanced wind effects

Remember: The website is fully functional without images - they enhance the visual experience but don't break functionality if missing!



# Pattachitra Portfolio Website 🎨

A stunning portfolio website inspired by traditional Pattachitra art from Odisha, India, featuring animated backgrounds and interactive project showcases.

## ✨ Features

### 🎪 Enhanced Animations
1. **Animated Background Scene**
   - Traditional Pattachitra-style houses floating gently
   - Trees swaying with realistic wind physics
   - Moving wind particles across the screen
   - Color-coordinated field background with subtle patterns

2. **Interactive Project Cards**
   - Click any project card to expand it full-screen
   - Image gallery with thumbnail navigation
   - Detailed project descriptions and technical information
   - Smooth open/close animations
   - Close with 'X' button, overlay click, or Escape key

### 🎨 Design Elements
- Traditional Pattachitra color palette (gold, ochre, brown)
- Authentic Indian art-inspired patterns and borders
- Elegant typography with serif fonts
- Responsive design for all devices
- Smooth animations and transitions

### 🛠️ Technical Features
- Pure HTML, CSS, and JavaScript (no frameworks required)
- Mobile-first responsive design
- Intersection Observer API for scroll animations
- CSS Grid and Flexbox layouts
- Modern ES6+ JavaScript features

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # Pattachitra-inspired CSS styles
├── script.js               # Interactive functionality
├── README.md               # This file
├── image-requirements.md   # Guide for required images
└── images/                 # Image assets folder
    ├── background/         # Background animation images
    │   ├── house1.png      # Traditional houses (150x100px)
    │   ├── house2.png
    │   ├── house3.png
    │   ├── tree-left.png   # Tree trunks (200x300px)
    │   ├── tree-right.png
    │   ├── tree-leaves-left.png   # Tree leaves (240x240px)
    │   └── tree-leaves-right.png
    ├── profile/            # Profile images
    │   └── profile-image.jpg       # Your photo (400x400px)
    └── projects/           # Project images
        ├── project1.jpg    # Main project images (400x300px)
        ├── project2.jpg
        ├── project3.jpg
        └── project*-gallery*.jpg  # Gallery images (600x400px)
```

## 🚀 Quick Setup

1. **Download/Clone the files:**
   ```bash
   # Place all files in a folder called 'portfolio'
   portfolio/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

2. **Create the images folder structure:**
   ```bash
   mkdir images
   mkdir images/background
   mkdir images/profile
   mkdir images/projects
   ```

3. **Add your images:**
   - See `image-requirements.md` for detailed specifications
   - The website works without images but looks better with them
   - Start with profile and project images, add background images later

4. **Open in browser:**
   - Simply double-click `index.html` to open in your default browser
   - Or use a local server for better performance

## 🖼️ Image Requirements

### Priority 1 (Essential):
- `images/profile/profile-image.jpg` - Your profile photo
- `images/projects/project1.jpg` - Main project screenshots
- `images/projects/project2.jpg`
- `images/projects/project3.jpg`

### Priority 2 (Enhanced Features):
- Background houses and trees for animations
- Project gallery images for expanded views
- See `image-requirements.md` for complete details

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-gold: #D4AF37;
    --primary-ochre: #CC7722;
    --deep-orange: #BF6B04;
    --warm-yellow: #F4C842;
    /* ... more colors */
}
```

### Content
Update the HTML in `index.html`:
- Personal information in the hero section
- Project details in the projects section
- Contact information
- Skills and experience

### Animation Settings
Modify animation speeds in `styles.css`:
```css
/* Wind animation speed */
@keyframes fieldSway {
    /* Change 15s to adjust field movement speed */
    animation: fieldSway 15s ease-in-out infinite;
}
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support, no animations)

## 🎯 Performance Tips

1. **Optimize Images:**
   - Use WebP format for better compression
   - Keep background images under 100KB each
   - Compress project images to balance quality and loading speed

2. **Hosting:**
   - Works great on GitHub Pages, Netlify, or Vercel
   - Can be hosted on any static hosting service
   - No server-side requirements

## 🔧 Troubleshooting

**Images not showing?**
- Check file paths match the folder structure
- Ensure image files exist in the correct locations
- Check browser console for 404 errors

**Animations not working?**
- Ensure JavaScript is enabled in your browser
- Check browser console for JavaScript errors
- Some animations require modern browser features

**Mobile display issues?**
- The site is mobile-responsive by default
- Test on actual devices for best results
- Adjust CSS media queries if needed

## 🎨 About Pattachitra Art

Pattachitra is a traditional Indian art form from Odisha, characterized by:
- Vibrant colors and intricate patterns
- Religious and cultural themes
- Bold outlines and flat color application
- Rich heritage dating back centuries

This portfolio pays homage to this beautiful art form while showcasing modern web development skills.

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

## 🤝 Contributing

Feel free to suggest improvements or report issues! This template can be enhanced with:
- Additional animation effects
- More interactive elements
- Enhanced accessibility features
- Performance optimizations

---

**Happy coding! 🎨✨*