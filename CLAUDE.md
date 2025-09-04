# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Hugo-based static website for Adventures Preschool, using the Educenter theme with significant customizations for a preschool environment.

## Key Commands

### Development
```bash
# Start development server
hugo server

# Start with draft content visible
hugo server -D

# Build for production
hugo --gc --minify
```

### Theme Development (if modifying theme assets)
```bash
cd themes/educenter
npm install
npm run dev    # Development server
npm run build  # Production build
```

## Architecture

### Content Structure
- **`/content/`**: Markdown files for all pages. Each .md file represents a page on the site.
- **`/data/en/homepage.yml`**: Controls all homepage sections (slider, features, about, CTAs)
- **`/content/teachers/`**: Individual teacher profile pages
- **`/static/images/`**: All site images including backgrounds, teacher photos, and program images

### Theme Customization
- **`/layouts/`**: Overrides theme templates
- **`/assets/scss/templates/_preschool.scss`**: Custom SCSS for preschool-specific styling
- **`/static/css/custom-preschool.css`**: Additional custom CSS
- **`config.toml`**: Main configuration including navigation, contact info, and plugin settings

### Key Customizations from Base Theme
- Disabled modules: courses, events, blog, notices, scholarship
- Custom homepage layout with preschool-specific sections
- Teacher profiles instead of generic "teacher" content type
- Nature Explore outdoor classroom emphasis throughout

## Important Configuration

### Contact Forms
- Forms use Formspree (configured in config.toml)
- Contact form endpoint: `contact_form_action`

### Google Maps
- API key required in `config.toml` under `[params.map]`
- Coordinates set for preschool location

### Image Processing
- Hugo's image processing is used for responsive images
- Original images stored in `/static/images/`
- Processed versions generated in `/resources/_gen/images/`

## Content Editing Guidelines

### Homepage Sections
Edit `/data/en/homepage.yml` for:
- Hero slider content and images
- Feature boxes
- About section text
- Call-to-action sections

### Page Content
Standard pages in `/content/` use frontmatter for:
- `title`: Page title
- `description`: Meta description
- `bg_image`: Background header image
- `draft`: true/false for visibility

### Teacher Profiles
Located in `/content/teachers/` with fields:
- Basic info (name, title, image)
- `contact`: Email and other contact methods
- `interest`: Areas of expertise
- `bio`: Full biography in markdown

## Deployment Notes
- Static site output generates to `/public/`
- Can be deployed to any static hosting (Netlify, Vercel, GitHub Pages)
- No server-side dependencies required

## Development Tips
- Use `hugo server --navigateToChanged` to auto-navigate to edited pages
- Check browser console for JavaScript errors from theme plugins
- Theme uses Bootstrap 4.x - use appropriate classes
- Custom styles should go in `/static/css/custom-preschool.css` to avoid theme conflicts