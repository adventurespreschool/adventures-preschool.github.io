# Technical Administrator Guide - Adventures Preschool Website

This guide is for technical administrators who need to understand the Hugo site architecture, make structural changes, or troubleshoot deployment issues.

## Table of Contents
1. [Hugo Site Architecture](#hugo-site-architecture)
2. [Theme and Customization](#theme-and-customization)
3. [CSS and Styling](#css-and-styling)
4. [JavaScript and Plugins](#javascript-and-plugins)
5. [Image Handling](#image-handling)
6. [Deployment Pipeline](#deployment-pipeline)
7. [Development Workflow](#development-workflow)
8. [Troubleshooting](#troubleshooting)
9. [Performance Optimization](#performance-optimization)

## Hugo Site Architecture

### Directory Structure
```
preschool-website/
├── config.toml              # Main site configuration
├── content/                 # Markdown content files
│   ├── _index.md           # Homepage content
│   ├── teachers/           # Teacher profiles (custom content type)
│   └── *.md                # Individual pages
├── data/                   # Data files (YAML/JSON/TOML)
│   └── en/
│       └── homepage.yml    # Homepage sections configuration
├── layouts/                # Custom templates (overrides theme)
│   ├── index.html          # Homepage layout
│   ├── partials/           # Reusable template parts
│   │   └── image.html      # Custom image partial with baseURL handling
│   └── shortcodes/         # Custom shortcodes
│       └── image.html      # Image shortcode for content
├── static/                 # Static assets (images, downloads)
│   ├── images/            # All site images
│   └── css/               # Custom CSS files
├── themes/                # Theme files
│   └── educenter/         # Educenter theme (modified)
└── public/                # Generated site (git-ignored)
```

### Content Types
- **Pages**: Standard content using `type: "pages"`
- **Teachers**: Custom content type for teacher profiles
- **Homepage**: Special layout pulling from both `content/_index.md` and `data/en/homepage.yml`

### Key Configuration Files

**config.toml**
```toml
baseURL = "/"                    # Set to "/" for portability, overridden in deployment
theme = "educenter"              # Base theme
[params]
  logo = "images/logos/adventures-logo-full.png"
  contact_form_action = "#"      # Formspree endpoint needed
[markup.goldmark.renderer]
  unsafe = true                  # Allows raw HTML in markdown
```

## Theme and Customization

### Educenter Theme Structure
The site uses the Educenter theme as a base with significant customizations:

```
themes/educenter/
├── layouts/                # Theme templates
├── assets/                 # SCSS files (not currently used)
├── static/                 # Theme static files
│   ├── plugins/           # Bootstrap, jQuery, etc.
│   └── css/               # Compiled theme CSS
└── exampleSite/           # Reference implementation
```

### Theme Overrides
Custom layouts override theme defaults:
- `/layouts/index.html` - Custom homepage with content section added
- `/layouts/partials/image.html` - Custom image handling for GitHub Pages
- `/layouts/shortcodes/image.html` - Image shortcode using custom partial

### Disabled Theme Features
- Courses (`course.enable: false`)
- Events (`event.enable: false`)
- Blog (`blog.enable: false`)
- Notices
- Scholarship

## CSS and Styling

### CSS Loading Order
1. **Bootstrap 4.x** - Base framework (via theme)
2. **Theme CSS** - Educenter base styles
3. **Custom CSS** - `/static/css/custom-preschool.css`

### Custom Styles Location
**`/static/css/custom-preschool.css`**
```css
/* Preschool-specific customizations */
.enrollment-highlight { /* Custom homepage styles */ }
.content-block { /* Content formatting */ }
.adventure-decoration { /* Decorative elements */ }
```

### SCSS (Not Currently Compiled)
- Theme includes SCSS files in `/themes/educenter/assets/scss/`
- `/assets/scss/templates/_preschool.scss` exists but isn't compiled
- To enable SCSS: Set up Hugo Extended and build pipeline

### Responsive Design
- Bootstrap 4 grid system
- Breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px)
- Mobile-first approach

## JavaScript and Plugins

### Plugin Loading (via `config.toml`)
```toml
# CSS Plugins
[[params.plugins.css]]
link = "plugins/bootstrap/bootstrap.min.css"
[[params.plugins.css]]
link = "plugins/animate/animate.css"
[[params.plugins.css]]
link = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"

# JS Plugins
[[params.plugins.js]]
link = "plugins/jQuery/jquery.min.js"
[[params.plugins.js]]
link = "plugins/bootstrap/bootstrap.min.js"
[[params.plugins.js]]
link = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
[[params.plugins.js]]
link = "js/swiper-init.js"
```

### Custom JavaScript
**`/static/js/swiper-init.js`**
- Initializes Swiper slider for homepage
- Replaces deprecated Slick slider from original theme

### Key Plugin Dependencies
- **jQuery 3.x** - Required by Bootstrap and other plugins
- **Bootstrap 4.x** - UI framework
- **Swiper 11.x** - Modern slider replacement for Slick
- **Venobox** - Lightbox functionality (if needed)
- **Filterizr** - Portfolio filtering (currently unused)

## Image Handling

### Custom Image Partial
The site uses a custom image partial to handle GitHub Pages baseURL issues:

**`/layouts/partials/image.html`**
```hugo
{{- if eq site.BaseURL "/" -}}
  <img src="/{{ strings.TrimPrefix "/" $src }}" ...>
{{- else -}}
  {{- $url := printf "%s%s" site.BaseURL (strings.TrimPrefix "/" $src) -}}
  <img src="{{ $url }}" ...>
{{- end -}}
```

### Image Shortcode Usage
Content files use the custom shortcode:
```markdown
{{< image src="images/about/photo.jpg" alt="Description" class="img-fluid" >}}
```

### Image Organization
```
static/images/
├── about/          # About page images
├── backgrounds/    # Page header backgrounds
├── banner/         # Homepage banner
├── logos/          # Logo variations
├── nature-explore/ # Nature program images
└── teachers/       # Teacher profile photos
```

### Image Optimization Tips
- Use appropriate formats: JPEG for photos, PNG for logos
- Resize images before uploading (max 1920px wide for backgrounds)
- Compress images using tools like TinyPNG
- Consider lazy loading for below-fold images

## Deployment Pipeline

### GitHub Actions Workflow
**`.github/workflows/hugo.yml`**
```yaml
# Key steps:
1. Install Hugo Extended (for SCSS support)
2. Install Dart Sass
3. Checkout with submodules
4. Configure GitHub Pages
5. Build with production baseURL
6. Upload artifact
7. Deploy to GitHub Pages
```

### Build Process
```bash
hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"
```
- `--minify`: Reduces file sizes
- `--baseURL`: Overrides config for production URL

### Deployment URL Structure
- Repository: `adventures-preschool.github.io`
- Live URL: `https://ericlarssen.github.io/adventures-preschool.github.io/`
- Custom domain possible via CNAME file

## Development Workflow

### Local Development
```bash
# Start development server
hugo server -D  # -D shows draft content

# Build for production testing
hugo --baseURL "https://adventurespreschool.github.io/adventures-preschool.github.io/"

# Test production build locally
cd public && python3 -m http.server 8000
```

### Making Structural Changes

**Adding a New Page Type:**
1. Create layout in `/layouts/[type]/single.html`
2. Add content files with `type: "[type]"` in frontmatter
3. Update navigation in `config.toml`

**Adding a New Shortcode:**
1. Create `/layouts/shortcodes/[name].html`
2. Use in content: `{{< [name] param="value" >}}`

**Modifying Homepage Sections:**
1. Edit `/data/en/homepage.yml` for section data
2. Modify `/layouts/index.html` for section display

### Version Control Best Practices
- Never commit `/public/` directory
- Test builds locally before pushing
- Use descriptive commit messages
- Create feature branches for major changes

## Troubleshooting

### Common Issues and Solutions

**Images not showing in production:**
- Check image paths use the custom shortcode
- Verify baseURL is correctly set during build
- Ensure images exist in `/static/images/`

**CSS changes not appearing:**
- Clear browser cache
- Check CSS file is loaded in `config.toml`
- Verify no conflicting theme styles

**Build failures:**
- Check for syntax errors in markdown files
- Verify all referenced images exist
- Ensure no broken internal links
- Check YAML syntax in data files

**Deployment issues:**
- Verify GitHub Actions workflow completed
- Check GitHub Pages settings are correct
- Ensure repository permissions allow deployment

### Debug Commands
```bash
# Check Hugo version
hugo version

# List all pages
hugo list all

# Check for broken links
hugo --buildDrafts --verbose

# See detailed build output
hugo --debug
```

## Performance Optimization

### Current Optimizations
- Minified output via `hugo --minify`
- CDN usage for major libraries (Swiper, etc.)
- Static site benefits (no server processing)

### Potential Improvements
1. **Image Optimization:**
   - Implement responsive images with srcset
   - Add lazy loading for below-fold images
   - Convert to WebP format with fallbacks

2. **Asset Optimization:**
   - Bundle and minify custom CSS/JS
   - Remove unused Bootstrap components
   - Implement critical CSS

3. **Caching Strategy:**
   - Add cache headers in deployment
   - Version static assets
   - Use service worker for offline support

### Performance Testing
- Use Lighthouse in Chrome DevTools
- Test on various devices and connections
- Monitor GitHub Pages bandwidth usage

## Maintenance Tasks

### Regular Updates
- **Hugo Version**: Check for updates quarterly
- **Theme Updates**: Review but test thoroughly
- **Plugin Updates**: Update CDN links as needed
- **Security**: Monitor for vulnerabilities

### Backup Strategy
- GitHub provides version control
- Consider periodic full-site exports
- Document any external dependencies

### Monitoring
- Set up GitHub Actions notifications
- Monitor deployment success/failure
- Track site availability

---

## Quick Reference

### Key Files to Know
- `/config.toml` - Main configuration
- `/data/en/homepage.yml` - Homepage content
- `/layouts/index.html` - Homepage template
- `/static/css/custom-preschool.css` - Custom styles
- `/.github/workflows/hugo.yml` - Deployment pipeline

### Essential Commands
```bash
hugo server              # Local development
hugo --minify           # Production build
hugo new teachers/name.md # New teacher profile
```

### Support Resources
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Educenter Theme Docs](https://docs.gethugothemes.com/educenter/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Bootstrap 4 Docs](https://getbootstrap.com/docs/4.6/)

---

**Note**: This guide assumes familiarity with Git, HTML/CSS, and basic command line usage. For content-only changes, refer to the PARENT_SETUP_GUIDE.md.
