const promptText = `Create a modern personal portfolio website using React + Vite + JavaScript + CSS.

IMPORTANT:
This is a reusable public prompt. Replace every placeholder with the user's own information. Do not invent personal data.

PERSONAL INFORMATION
- Name: [Your Name]
- Field / Major: [Your Field / Major]
- University / Company: [Your University / Company]
- GitHub: [yourusername]
- Instagram: [yourusername]
- LinkedIn: [yourusername]
- Email: [your@email.com]
- CV file: [your-cv-file.pdf]

OVERALL VISUAL DIRECTION
Create a dark, feminine, elegant and modern portfolio with a slightly futuristic/editorial feel.

Visual characteristics:
- Deep burgundy / plum / dark purple background
- Dusty pink and blush pink accents
- Very subtle pink ambient glow / aurora effects
- Minimal sparkles or grain texture
- Glassmorphism elements used sparingly
- Elegant editorial typography
- Large confident headings
- Rounded corners
- Generous whitespace
- Clean, premium and professional appearance
- Avoid an overly colorful, childish or generic developer-portfolio look

NAVBAR
Create a floating pill-shaped navbar with:
- Logo / name on the left
- Navigation links such as Home, About, Skills, Work, Experience and Contact
- A subtle glassmorphism background
- Rounded pill shape
- Smooth hover states
- Responsive mobile navigation

HERO SECTION
Desktop layout:
- Keep the main text clearly positioned on the left
- Reserve intentional empty space on the right
- Do NOT squeeze or excessively wrap the hero text just to fit other elements
- Add a visual identity card on the right side

Hero content:
- Small eyebrow text: "WELCOME TO MY PORTFOLIO"
- Main heading: "Hi, I'm [Your Name]"
- Secondary line can contain the user's surname or professional title
- Role: "[Your Field / Major]"
- Short professional introduction
- CTA button: "Download CV"
- CTA button: "View My Work"
- Social icons for GitHub, Instagram, LinkedIn and Email

IDENTITY CARD
Use:
- identitycard-front.webp
- identitycard-back.png

Requirements:
- Card is positioned to the right of the hero content on desktop
- Card should not squeeze the hero text
- Clicking the card flips it horizontally using a smooth 3D rotateY animation
- Front image is visible initially
- Back image appears after clicking
- Add a small hint such as "Click the card to flip"
- On mobile, stack the card below the hero content
- Maintain the card's original aspect ratio
- Add a subtle shadow and premium hover effect

ABOUT SECTION
Create an About section containing:
- Short introduction
- Education
- Interests / areas of focus
- A clean visual layout that is easy to scan

SKILLS SECTION
Create a modern skills section with categories such as:
- Frontend Development
- Mobile Development
- UI/UX Design
- Programming
- Tools / Technologies

Use clean cards, pills or minimal visual indicators.
Do not use fake percentage skill bars unless real skill levels are provided.

WORK / PROJECTS SECTION
Create a project showcase with reusable project cards.

Example placeholders:
- Project One
- Project Two
- Project Three

Each card should support:
- Project image
- Project title
- Short description
- Technology tags
- GitHub / Demo link

Use a modern grid or horizontal carousel depending on screen size.

EXPERIENCE SECTION
Create a timeline or clean experience layout.

Use placeholders:
- [Company Name]
- [Job Title]
- [Month Year – Month Year]
- Short description of responsibilities and achievements

CONTACT SECTION
Create a simple contact section with:
- Email
- Social links
- A clear CTA inviting visitors to get in touch

Do not expose unnecessary private information.

FOOTER
Include:
- [Your Name]
- Social links
- Copyright text
- Simple navigation

ANIMATION
Use subtle animations only:
- Fade-in on scroll
- Soft hover movement
- Button hover states
- Identity-card 3D flip
- Smooth section transitions

Avoid excessive animations, bouncing elements or distracting effects.

RESPONSIVE REQUIREMENTS
The website must work properly on:
- Desktop
- Laptop
- Tablet
- Mobile

Important:
- No horizontal scrolling
- Do not squeeze desktop layouts into mobile
- Stack sections naturally on smaller screens
- Keep typography readable
- Keep buttons accessible
- Keep the identity card visually balanced

CODE REQUIREMENTS
Use:
- React
- Vite
- JavaScript
- CSS
- React Icons where appropriate

Organize the project into reusable components:
- Navbar
- Home
- About
- Skills
- Work
- Experience
- Contact
- Footer

Keep CSS organized and readable.
Use semantic HTML and accessible buttons/links.
Add alt text to images.
Do not use unnecessary dependencies.

FINAL RESULT
The final website should feel like a premium personal portfolio:
dark + feminine + elegant + editorial + modern + slightly futuristic,
while remaining professional enough for internship and career applications.

Before writing the final code, think through the responsive layout carefully so the hero section remains spacious and the right-side identity card does not make the main heading look cramped.`;


// ================= DISPLAY PROMPT =================

document.getElementById("promptText").textContent = promptText;


// ================= COPY FUNCTION =================

async function copyPrompt(button) {

  try {

    await navigator.clipboard.writeText(promptText);

    const originalText = button.textContent;

    button.textContent = "Copied ✓";

    setTimeout(() => {

      button.textContent = originalText;

    }, 1400);

  } catch (error) {

    alert(
      "Copy failed. Please select and copy the prompt manually."
    );

  }

}


// ================= COPY BUTTON =================

document
  .getElementById("copyBtn")
  .addEventListener("click", function () {

    copyPrompt(this);

  });


document
  .getElementById("copyHeroBtn")
  .addEventListener("click", function () {

    copyPrompt(this);

  });


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("main section");

const navLinks = document.querySelectorAll(
  ".nav-links a"
);


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 160;

    if (
      window.scrollY >= sectionTop
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

});