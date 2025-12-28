# Personal Portfolio Website (React + Vite)

🚧 Status: Work in Progress 🚧

This repository contains my personal portfolio website — a long-term, evolving project built to help me learn React.js in depth while also serving as a professional space to advertise myself, showcase my creativity, and give insight into who I am and how I think.

This is not a template or a one-off demo. It is an intentionally iterative project where design decisions, architecture, troubleshooting, and refinement are part of the learning process.

---

## Project Purpose

The goals of this project are to:
- Learn React.js through hands-on, real-world application
- Build a professional personal site that reflects both technical skill and personality
- Explore creative UI/UX concepts beyond standard portfolio layouts
- Practice clean structure, maintainability, and thoughtful design decisions
- Document progress, lessons learned, and milestones over time

---

## Technologies Used

Core:
- React.js
- Vite
- JavaScript (ES6+)
- HTML (semantic structure)
- CSS (custom styling, layout, theming, animations)

UI / Assets:
- Lucide React (icons)
- ChatGPT (logo iteration, image generation, and design exploration)

Routing & Utilities:
- react-router-dom

If additional tools are introduced later (deployment, CI, testing, etc.), they will be documented here.

---

## Running the Project Locally

Prerequisites:
- Node.js (v18+ recommended)
- npm

Setup:
1) Clone the repository:
   - git clone https://github.com/agarrido92/Personal-Site.git
   - cd Personal-Site

2) Install dependencies:
   - npm install

Run the development server:
- npm run dev

Vite will output a local URL (typically http://localhost:5173) where the site can be viewed.

---

## Project Milestones & Progress

Intro / Boot Experience

1. Intro Design
Description:
- Brainstormed boot-style concepts
- Explored animation pacing, tone, and first-impression impact
- Considered how a non-traditional intro sets expectations for the site
- Lessons Learned:
  - There is much more to an intro design than a simple idea. I had originally thought of the idea of making my intro give the option to two versions of my site, and then came the idea of making it look like an old boot manager from my time working with tech support. It was only once I started researching for a picture of the boot manager to use as a guide that I remembered the experience was so much more than that screen. It helped me learn about how, as users, we take many things for granted, but when it is missing we notice. This helped me to adjust my thinking in my design approach and realize if I wanted to commit to my boot manager idea I needed to commit to the experience, not just the selection screen.

2. Logo Creation
Description:
- Iterated through multiple logo ideas
- Narrowed down a design aligned with both professional and creative goals
- Planned logo usage for different contexts throughout the site
- Lessons Learned:
  - I came to have a greater respect for graphic designers. I used ChatGPT to help me with designing, as I'm not a graphic designer, and it proved to be a challenge. I provided logos I have liked in the past to give it ideas, but it proved to be a challenge to me to know what context to give as I was not sure which route to go. ChatGPT proved to be a very helpful source. After having a variety of options, I had to think about the message each gave. There was one in particular I liked because it reminded me of a video game I really like, but I had to ask myself "But does it convey the message I'm trying to convey?" I, ultimately, decided against it due to that and narrowed down to my current logo. I also had to think much on how the logo would need to adjust, which was helpful to use ChatGPT to think through the obstacles I could foresee but also ones I couldn't. It was also a challenge, as I learned ChatGPT is not the best with image creation and prompts can be rather difficult to narrow down to what it will need to follow proper instructions. It definitely took time and I learned that sometimes you may need to use tools designed for the task and be content this tool worked to the extend it worked.

3. Intro Creation
Description:
- Built BootExperience.jsx as a state-driven orchestrator
- Implemented individual boot screens (Power, Splash, Boot Menu)
- Coordinated transitions, timing, and keyboard interaction
- Lessons Learned:
  - I had no idea how much went into a basic animation. I knew it could not possibly be super simple, but I greatly underestimated the challenge. I thought my animation was simple but so much had to be adjusted to make it happen. The main lesson I learned was to learn about React's render approach. I kept viewing each page like a separate page in HTML. With time and research I was able to understand how BootExperience.jsx was the controller at all times while the other screens were simply the rendering being visible at the time. This proved to be a great help in understanding how to use React the right way.

4. Intro Troubleshooting & Iteration
Description:
- Refined animation timing, spacing, and color usage
- Adjusted interaction logic as ideas evolved
- Finalized behavior for “surprise” elements
- Lessons Learned:
  - After I was able to get the functionality down, came the minor adjustments to make this section complete. My main lesson was the importance of the little things on a page. As the developer I may focus so much on functionality but it is always important to think of the visual appearance since that is what the user cares about. I went through the entire page and rearranged some parts. I was able to connect some hidden functionalities (such as prompt the animation to run again) into the screen to work with the design I had thought of. I finalized what I wanted my "Surprises" to be and I was very happy with the outcome. A major challenge I faced was the loading bar. I played around with the CSS tremendously just to give a realistic feel of the progress bar getting stuck at some steps and not being a consistent increase. The amount of CSS work needed to make this work really showed me the challenge designers face.

Professional Page

5. Professional Home Design
Description:
- Designed light and dark mode concepts
- Defined navigation structure and dropdown behavior
- Iterated extensively on wording and tone to sound authentic and natural
- Lessons Learned:
  - It was by pure accident that I came across the idea of creating a light/dark mode for the page. It was an idea I fell in love with just because it reminded me of a different project I had worked on in the past. The design of the site proved to be the most challenging. I came up with the navigation, and then proceeded to throw it out the window and start again. I finally narrowed down on a setup I was happy with that still left room to grow it more in the future. ChatGPT helped greatly here just in brainstorming through design ideas. Although the image creation aspect was a challenge to overcome, I was able to eventually get the right prompt and was able to utilize it to give me design ideas to consider. This allowed me to avoid just copying and pasting a design from someone else, and instead design something entirely on my preference in each section. This approach also gave me ideas I would not have thought of. It helped me to learn to use tools available to speed up my work.

6. Professional Home Creation
Description:
- Implemented the approved design using React and custom CSS
- Built navigation, hero section, supporting sections, and footer
- Integrated Lucide icons to maintain a consistent visual language
- Lessons Learned:
  - This milestone proved to be simpler than the design aspect. It showed me I have more of a passion for building than designing. Although I enjoy design, it is not to the extend of building. It helped me appreciate how both parts need to work together and their individual importance. This set also helped me learn of a new library to use, Lucide, for icons. This helped tremendously to make my page retain a professional look.

7. Professional Home Troubleshooting
Description:
- Refined navigation spacing and hover behavior
- Adjusted logo placement and title sizing
- Improved footer separation and background treatment
- Solved subtle UI/UX edge cases through iteration
- Lessons Learned:
  - Simnilar to the intro, this required a look over the little details before moving on. A major challenge became the navigation, as the carat applied to two of the options made Home look unevenly spaced. This took some time to sort but it helped me remember that placement matters in CSS, and I cannot just put the CSS in the file just anywhere. It was a good lesson that I had forgotten about. It took hours of troubleshooting to remember it, but now it will be harder to forget.

---

## Next Milestone

8. Dark Mode Implementation
Planned Work:
- Create a dark mode version of the Professional Home page
- Add a toggle to switch between light and dark themes
- Reuse CSS variables to keep theming clean and maintainable
- Ensure accessibility and contrast remain strong

---

## Notes

This project is actively evolving. Structure, design, and content may change as ideas improve and understanding deepens. The repository serves both as a learning tool and a living representation of my growth as a developer.
