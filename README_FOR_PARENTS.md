# How to Update the Adventures Preschool Website

This guide helps parents and administrators make content updates to the Adventures Preschool website without needing technical expertise.

## What You'll Need

- A text editor (like Notepad on Windows or TextEdit on Mac)
- Access to the website files
- Basic familiarity with typing and saving files

## Common Updates

### 1. Updating Homepage Content

The main homepage sections are controlled by a single file:
**Location:** `/data/en/homepage.yml`

This file contains:
- **Hero Slider** (main images and text at top of page)
- **Feature Boxes** (the colored boxes highlighting key features)
- **About Section** (brief description of the school)
- **Call-to-Action Sections** (enrollment prompts)

#### Example: Changing Slider Text
```yaml
slider:
  enable: true
  bg_image: "images/banner/banner-1.jpg"
  slider_item:
    - title: "Welcome to Adventures Preschool"
      content: "Your new text here"
      animation_in: "left"
      animation_out: "right"
      button:
        enable: true
        label: "Learn More"
        link: "about"
```

Simply change the text between the quotes and save the file.

### 2. Updating Teacher Information

Teacher profiles are in: `/content/teachers/`

Each teacher has their own file (e.g., `jane-doe.md`). To update:

1. Open the teacher's file
2. Update the information at the top between the `---` marks:
```markdown
---
title: "Jane Doe"
draft: false
designation: "Lead Teacher"
image: "images/teachers/jane-doe.jpg"
contact:
  - name: "Email"
    icon: "ti-email"
    link: "mailto:jane@adventurespreschool.org"
---
```
3. Update the biography below the second `---`

### 3. Adding/Changing Images

1. Place new images in: `/static/images/`
2. Use descriptive names (e.g., `outdoor-classroom-2024.jpg`)
3. Reference them in content files as: `images/your-image-name.jpg`

**Image Tips:**
- Keep file sizes reasonable (under 2MB)
- Use .jpg for photos, .png for graphics with transparency
- Consider image dimensions (1920x1080 works well for hero images)

### 4. Updating Regular Pages

Pages like About, Philosophy, Contact are in: `/content/`

Each page has:
- **Front Matter** (between `---` marks): Controls title, description, header image
- **Content** (after the second `---`): The actual page text in Markdown format

#### Basic Markdown Formatting:
```markdown
# Large Heading
## Medium Heading
### Small Heading

**Bold text**
*Italic text*

- Bullet point
- Another bullet point

1. Numbered list
2. Second item

[Link text](https://example.com)
```

### 5. Updating Contact Information

Main contact details are in: `/config.toml`

Look for sections like:
```toml
# Contact info
[params.contact]
phone = "555-123-4567"
email = "info@adventurespreschool.org"
address = "123 Main Street, Your City, State 12345"
```

## Making Your Changes Live

After making changes:

1. **Test Locally** (if you have Hugo installed):
   ```bash
   hugo server
   ```
   Visit `http://localhost:1313` to preview

2. **Build the Site**:
   ```bash
   hugo --gc --minify
   ```
   This creates the website files in the `/public/` folder

3. **Upload to Web Host**:
   Upload the contents of `/public/` to your web hosting service

## Need Help?

If you get stuck:
- Check that all quotes are closed properly in YAML/TOML files
- Ensure you haven't deleted any `:` or `-` characters in YAML files
- Make sure image paths are correct (starts with `images/`)
- Keep a backup of files before making major changes

## Quick Reference

| What to Update | File Location | File Type |
|----------------|---------------|-----------|
| Homepage sections | `/data/en/homepage.yml` | YAML |
| Teacher profiles | `/content/teachers/*.md` | Markdown |
| About page | `/content/about.md` | Markdown |
| Contact info | `/config.toml` | TOML |
| Images | `/static/images/` | JPG/PNG |
| Navigation menu | `/config.toml` (menu section) | TOML |

## Important Notes

- Always make a backup before making changes
- Changes won't appear until you rebuild and upload the site
- The site is static, so there's no database to worry about
- If something breaks, you can always restore from your backup

Remember: The website is designed to be forgiving. If something doesn't look right after an update, you can always revert to your backup and try again!