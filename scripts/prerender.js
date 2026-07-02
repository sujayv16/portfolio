const fs = require("fs");
const path = require("path");
const vm = require("vm");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function run() {
  const rootDir = path.join(__dirname, "..");
  
  // 1. Read and execute js/components.js in a mocked context to load PORTFOLIO_DATA and PORTFOLIO_COMPONENTS
  let jsCode = fs.readFileSync(path.join(rootDir, "js", "components.js"), "utf8");
  jsCode += "\n\nglobalThis.PORTFOLIO_DATA = PORTFOLIO_DATA;\nglobalThis.PORTFOLIO_COMPONENTS = PORTFOLIO_COMPONENTS;\n";
  
  const sandbox = {
    document: {
      addEventListener: () => {},
      querySelector: () => null,
      dispatchEvent: () => {},
    },
    window: {},
    Map: Map,
    CustomEvent: class {},
    console: console,
  };
  
  vm.createContext(sandbox);
  vm.runInContext(jsCode, sandbox);
  
  const PORTFOLIO_DATA = sandbox.PORTFOLIO_DATA;
  const PORTFOLIO_COMPONENTS = sandbox.PORTFOLIO_COMPONENTS;
  
  if (!PORTFOLIO_DATA || !PORTFOLIO_COMPONENTS) {
    throw new Error("Could not extract PORTFOLIO_DATA or PORTFOLIO_COMPONENTS from js/components.js");
  }
  
  console.log("Extracted portfolio components:", PORTFOLIO_COMPONENTS);
  
  // 2. Load templates and render content
  const renderedParts = [];
  
  for (const component of PORTFOLIO_COMPONENTS) {
    const templatePath = path.join(rootDir, "components", `${component}.html`);
    let template = fs.readFileSync(templatePath, "utf8").trim();
    
    if (component === "navbar") {
      renderedParts.push(template);
    } else if (component === "hero") {
      const renderedSocials = PORTFOLIO_DATA.hero.socials
        .map((item) => `
            <a class="icon-btn" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.label)}">
              <i class="${item.icon}" aria-hidden="true"></i>
              <span class="sr-only">${escapeHtml(item.label)}</span>
            </a>
          `)
        .join("");
        
      const renderedStats = PORTFOLIO_DATA.hero.stats
        .map((item) => `
            <div class="hero-stat stagger-item">
              <div class="hero-stat__value">${escapeHtml(item.value)}</div>
              <div class="hero-stat__label">${escapeHtml(item.label)}</div>
            </div>
          `)
        .join("");
        
      template = template
        .replace(`<p class="hero__lead" data-hero-lead></p>`, `<p class="hero__lead" data-hero-lead>${escapeHtml(PORTFOLIO_DATA.hero.lead)}</p>`)
        .replace(`<div class="hero__socials" data-hero-socials></div>`, `<div class="hero__socials" data-hero-socials>${renderedSocials}</div>`)
        .replace(`<div class="hero__stats" data-hero-stats></div>`, `<div class="hero__stats" data-hero-stats>${renderedStats}</div>`);
        
      renderedParts.push(template);
    } else if (component === "about") {
      template = template.replace(
        `<article class="about-card section-pad-md reveal" data-about-story></article>`,
        `<article class="about-card section-pad-md reveal" data-about-story>${PORTFOLIO_DATA.about.story.trim()}</article>`
      );
      renderedParts.push(template);
    } else if (component === "experience") {
      const renderedExperience = PORTFOLIO_DATA.experience
        .map((item, index) => `
          <article class="experience-card reveal"
                   data-aos="fade-up"
                   data-aos-delay="${index * 70}">
    
            <div class="meta-line meta-line--spaced">
              <span class="pill pill--accent">${escapeHtml(item.duration)}</span>
              <span class="pill">${escapeHtml(item.location)}</span>
            </div>
    
            <div class="flex-row">
              <div class="project-card__image logo-frame">
                <img src="${item.logo}" alt="${escapeHtml(item.company)} logo" loading="lazy">
              </div>
    
              <div>
                <h3 class="experience-card__title">${escapeHtml(item.role)}</h3>
                <div class="meta-line meta-line--top">
                  <span>${escapeHtml(item.company)}</span>
                </div>
              </div>
            </div>
    
            <p class="text-block--top">${escapeHtml(item.description)}</p>
    
            <ul class="experience-points">
              ${item.bullets
                .map(bullet => `<li class="pill list-pill">${escapeHtml(bullet)}</li>`)
                .join("")}
            </ul>
    
            ${
              item.links
                ? `
                <div class="card-actions" style="margin-top:1rem;">
                  ${item.links
                    .map(link => `
                      <a class="btn btn--secondary"
                         href="${link.url}"
                         target="_blank"
                         rel="noreferrer">
                        <i class="fas fa-external-link-alt"></i>
                        ${escapeHtml(link.label)}
                      </a>
                    `)
                    .join("")}
                </div>
                `
                : ""
            }
    
          </article>
        `)
        .join("\n");
        
      template = template.replace(
        `<div class="experience__grid" data-experience-grid></div>`,
        `<div class="experience__grid" data-experience-grid>${renderedExperience}</div>`
      );
      renderedParts.push(template);
    } else if (component === "education") {
      const renderedEducation = PORTFOLIO_DATA.education
        .map((item, index) => `
            <article class="education-card timeline__item reveal" data-aos="fade-up" data-aos-delay="${index * 70}">
              <div class="meta-line">
                <span class="pill pill--accent">${escapeHtml(item.duration)}</span>
                <span class="pill">${escapeHtml(item.location)}</span>
              </div>
              <h3 class="education-card__title stack-gap-md">${escapeHtml(item.title)}</h3>
              <p class="stack-gap-sm">${escapeHtml(item.text)}</p>
            </article>
          `)
        .join("\n");
        
      template = template.replace(
        `<div class="education__grid timeline" data-education-grid></div>`,
        `<div class="education__grid timeline" data-education-grid>${renderedEducation}</div>`
      );
      renderedParts.push(template);
    } else if (component === "skills") {
      const renderedSkills = PORTFOLIO_DATA.skills
        .map((group, index) => `
            <section class="skill-group reveal" data-aos="fade-up" data-aos-delay="${index * 60}">
              <h3 class="project-card__title">${escapeHtml(group.title)}</h3>
              <div class="skill-badges stack-gap-lg">
                ${group.items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
              </div>
            </section>
          `)
        .join("\n");
        
      template = template.replace(
        `<div class="skills__grid" data-skill-grid></div>`,
        `<div class="skills__grid" data-skill-grid>${renderedSkills}</div>`
      );
      renderedParts.push(template);
    } else if (component === "projects") {
      const renderedProjects = PORTFOLIO_DATA.projects
        .map((item, index) => `
          <article class="project-card reveal" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="project-card__image">
              <img src="${item.image}" alt="${escapeHtml(item.title)} screenshot" loading="lazy">
            </div>
            <h3 class="project-card__title">${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="project-tags">
              ${item.technologies.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="card-actions stack-gap-lg">
              <a class="btn btn--secondary" href="${item.githubUrl}" target="_blank" rel="noreferrer"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
              ${item.demoUrl ? `<a class="btn btn--primary" href="${item.demoUrl}" target="_blank" rel="noreferrer">Demo</a>` : ""}
            </div>
          </article>
        `)
        .join("\n");
        
      template = template.replace(
        `<div class="projects__grid" data-project-grid></div>`,
        `<div class="projects__grid" data-project-grid>${renderedProjects}</div>`
      );
      renderedParts.push(template);
    } else if (component === "courses") {
      const renderedCourses = PORTFOLIO_DATA.courses
        .map((course, index) => `
            <article class="course-card reveal" data-aos="fade-up" data-aos-delay="${index * 35}">
              <div class="meta-line">
                <span class="pill pill--accent">${escapeHtml(course.term)}</span>
                <span class="pill">${escapeHtml(course.source)}</span>
              </div>
              <h3 class="course-card__title stack-gap-md">${escapeHtml(course.title)}</h3>
            </article>
          `)
        .join("\n");
        
      template = template.replace(
        `<div class="courses__grid" data-course-grid></div>`,
        `<div class="courses__grid" data-course-grid>${renderedCourses}</div>`
      );
      renderedParts.push(template);
    } else if (component === "achievements") {
      const renderedAchievements = PORTFOLIO_DATA.achievements
        .map((item, index) => `
            <article class="achievement-card reveal" data-aos="fade-up" data-aos-delay="${index * 45}">
              <div class="meta-line" style="margin-bottom: 0.9rem;">
                <span class="pill pill--accent"><i class="${item.icon}" aria-hidden="true"></i></span>
              </div>
              <h3 class="achievement-card__title">${escapeHtml(item.title)}</h3>
              <p class="stack-gap-md">${escapeHtml(item.text)}</p>
            </article>
          `)
        .join("\n");
        
      template = template.replace(
        `<div class="achievements__grid" data-achievement-grid></div>`,
        `<div class="achievements__grid" data-achievement-grid>${renderedAchievements}</div>`
      );
      renderedParts.push(template);
    } else {
      renderedParts.push(template);
    }
  }
  
  const compiledContent = renderedParts.join("\n\n");
  
  // 3. Inject compiled content into index.html
  const indexHtmlPath = path.join(rootDir, "index.html");
  let indexHtml = fs.readFileSync(indexHtmlPath, "utf8");
  
  const rootRegex = /<div data-portfolio-root>([\s\S]*?)<\/div>/;
  const targetReplacement = `<div data-portfolio-root>\n${compiledContent}\n    </div>`;
  
  indexHtml = indexHtml.replace(rootRegex, targetReplacement);
  
  fs.writeFileSync(indexHtmlPath, indexHtml, "utf8");
  console.log("Successfully pre-rendered components into index.html!");
}

run().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
