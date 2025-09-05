# Website Admin Setup Guide

Welcome! This guide will help you get set up to edit the Adventures Preschool website. Don't worry if you're not technical - we'll walk through everything step by step.

## What You'll Be Doing

As a parent administrator, you'll be able to:
- Edit website content (text, images, teacher profiles)
- Update enrollment information and announcements
- Add new events or program information
- Make changes that automatically publish to the live website

## Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **"Sign up"** in the top right corner
3. Choose a username (can be your name or anything you prefer)
4. Use your personal email address
5. Create a secure password
6. Complete the verification process

**Important:** Remember your username - you'll need to share it with Eric for access.

## Step 2: Request Access to Adventures Preschool Organization

1. Send Eric ([@ericlarssen](https://github.com/ericlarssen)) your GitHub username
2. Ask him to add you to the [Adventures Preschool organization](https://github.com/adventurespreschool)
3. You'll receive an email invitation to join the organization
4. Click **"Join @adventurespreschool"** in the email

## Step 3: Understanding the Website Structure

The website content is organized in folders:

```
content/
├── _index.md          (Homepage content)
├── about.md           (About page)
├── contact.md         (Contact page)
├── enroll.md          (Enrollment page)
├── nature-explore.md  (Nature Explore program)
├── philosophy.md      (Our Philosophy page)
├── summer-camp.md     (Summer camp info)
├── parent-resources.md (Parent resources)
└── teachers/          (Teacher profile pages)
    ├── teacher-1.md
    └── teacher-2.md

data/en/homepage.yml   (Homepage sections like slider, features)
```

## Step 4: Making Your First Edit

### Using GitHub.dev (Recommended for Beginners)

1. Go to the repository: [https://github.com/adventurespreschool/preschool-website](https://github.com/adventurespreschool/preschool-website)
2. Press the **period (.)** key on your keyboard, OR change ".com" to ".dev" in the URL
3. This opens GitHub.dev - a web-based editor that looks like a code editor
4. Navigate to the file you want to edit using the file explorer on the left
5. Click on the file to open it for editing

### Making Changes

**For Text Content:**
- Most content is written in Markdown format
- Regular text is just typed normally
- Headers use # symbols: `# Big Header`, `## Smaller Header`
- Bold text: `**bold text**`
- Links: `[Link Text](https://example.com)`

**For Images:**
- Images use this format: `{{< image src="images/folder/filename.jpg" alt="Description" >}}`
- To add new images, upload them to the `static/images/` folder first

## Step 5: Understanding Commits and Changes

Think of "commits" like saving different versions of a document:

### What is a Commit?
- A commit is like taking a snapshot of your changes
- Each commit has a message describing what you changed
- You can always go back to previous versions if needed

### Making a Commit:
1. After making changes in GitHub.dev, look for the **Source Control** panel (usually on the left)
2. You'll see your changed files listed
3. Write a **commit message** describing what you changed (e.g., "Updated enrollment dates for 2025-2026")
4. Click **"Commit & Push"**

### Good Commit Message Examples:
- ✅ "Updated teacher bio for Sarah Johnson"
- ✅ "Added new summer camp dates"
- ✅ "Fixed typo on enrollment page"
- ❌ "changes" (too vague)
- ❌ "stuff" (not descriptive)

## Step 6: How Changes Go Live

**Automatic Publishing:**
- When you commit changes to the "main" branch, the website automatically rebuilds
- Changes typically appear on the live site within 2-3 minutes
- You'll see a green checkmark next to your commit when it's successfully published

**If Something Goes Wrong:**
- Don't panic! Every change is saved and can be undone
- Contact Eric immediately if the website looks broken
- He can quickly revert to the previous version

## Step 7: Common Editing Tasks

### Updating Homepage Content
- Edit `data/en/homepage.yml` for slider images and feature boxes
- Edit `content/_index.md` for the main homepage text

### Adding a New Teacher
1. Go to `content/teachers/` folder
2. Copy an existing teacher file
3. Rename it (e.g., `new-teacher-name.md`)
4. Edit the content with new teacher's information
5. Add their photo to `static/images/teachers/`

### Updating Enrollment Information
- Edit `content/enroll.md`
- Update dates, fees, or requirements as needed

### Changing Contact Information
- Edit `content/contact.md` for page content
- Edit `config.toml` for site-wide contact info (header/footer)

## Step 8: Best Practices

### Before Making Changes:
- Read through the current content to understand the tone and style
- Make sure you have the correct, up-to-date information
- If unsure about something, ask other parents or Eric first

### When Editing:
- Make small, focused changes rather than many changes at once
- Preview your changes before committing (GitHub.dev has a preview feature)
- Write clear commit messages
- Double-check spelling and grammar

### After Publishing:
- Visit the live website to make sure your changes look correct
- Check that all links still work
- Test the site on both desktop and mobile if you made significant changes

## Getting Help

### If You Need Help:
1. **First:** Check this guide and the README_FOR_PARENTS.md file
2. **Second:** Ask other parent administrators
3. **Third:** Contact Eric (@ericlarssen) on GitHub or via email

### Common Issues:
- **"I can't see my changes"** - Wait 3-5 minutes for the site to rebuild
- **"The formatting looks wrong"** - Check your Markdown syntax
- **"I broke something"** - Don't worry! Contact Eric and he can fix it quickly

### Learning Resources:
- [Basic Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [GitHub.dev Documentation](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)

## Emergency Contacts

- **Eric Larssen** (Technical Admin): [@ericlarssen](https://github.com/ericlarssen)
- **Repository**: https://github.com/adventurespreschool/preschool-website
- **Live Website**: https://ericlarssen.github.io/adventures-preschool.github.io/

---

**Remember:** You're doing great by volunteering to help maintain our school's website! Don't be afraid to make changes - everything can be undone if needed. The most important thing is keeping our families informed with accurate, up-to-date information.