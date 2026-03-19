KUON Studio Website — GitHub Pages Upload Guide

This folder already contains the full website.

Files you need to keep together:
- index.html
- studio.html
- work.html
- research.html
- contact.html
- guitar.html
- pedal.html
- maso.html
- sleep-speaker.html
- neostein.html
- styles.css
- script.js

IDIOT-PROOF GITHUB PAGES STEPS

1. Create a new repository on GitHub.
   Suggested name: kuon-studio-site

2. On your computer, open the new empty repository in Finder.

3. Drag EVERY file from this folder into the repository folder.
   Important: do not put them inside another subfolder.
   index.html must sit at the top level.

4. Upload the files to GitHub.
   Easiest way:
   - open the repository page on GitHub in your browser
   - click “Add file”
   - click “Upload files”
   - drag in all files
   - click “Commit changes”

5. Turn on GitHub Pages.
   - go to the repository on GitHub
   - click “Settings”
   - click “Pages” in the left menu
   - under “Build and deployment” choose:
     Source = Deploy from a branch
   - Branch = main
   - Folder = /root
   - click Save

6. Wait a minute or two.
   GitHub will show your live site URL near the top of the Pages section.

7. Test the site.
   Visit the URL and click through every page.

8. Connect your custom domain later.
   In GitHub Pages settings:
   - add your custom domain
   - save
   - then update DNS at your domain provider

WHEN YOU WANT TO EDIT TEXT

The easiest method:
- open one of the .html files in any text editor
- change the words between the tags
- save the file
- upload the updated file to GitHub again

THE MAIN FILES TO EDIT MOST OFTEN
- index.html = homepage
- studio.html = studio page
- work.html = work overview
- maso.html = Maso page
- contact.html = email/contact details

PLACEHOLDER BOXES

All grey boxes are already built in.
Leave them as they are for now, or later replace them with images.

To replace a placeholder with an image:
- add your image file to the same folder
- then replace a block like this:
  <div class="placeholder-wide"></div>
- with this:
  <img src="your-image-name.jpg" alt="Description">

VERY IMPORTANT

If a page looks broken, the most common reason is that one file is missing.
Make sure all HTML, CSS, and JS files are uploaded together.
