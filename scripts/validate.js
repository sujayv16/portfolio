const fs = require("fs");
const path = require("path");

function runValidation() {
  const indexHtmlPath = path.join(__dirname, "..", "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("index.html not found!");
    process.exit(1);
  }

  const html = fs.readFileSync(indexHtmlPath, "utf8");
  let failures = 0;

  function assert(condition, message) {
    if (!condition) {
      console.error(`[FAIL] ${message}`);
      failures++;
    } else {
      console.log(`[PASS] ${message}`);
    }
  }

  // 1. Check title and description
  assert(html.includes("<title>Viswanadhapalli Sujay"), "Title should contain author name");
  assert(html.includes('name="description"'), "Meta description should exist");
  assert(html.includes('name="keywords"'), "Meta keywords should exist");
  assert(html.includes('name="author" content="Viswanadhapalli Sujay"'), "Meta author should exist and be correct");
  assert(html.includes('name="robots" content="index, follow"'), "Meta robots should exist");

  // 2. Canonical and manifest
  assert(html.includes('<link rel="canonical" href="https://sujayv16.github.io/portfolio/">'), "Canonical link should point to github.io url");
  assert(html.includes('<link rel="manifest" href="manifest.json">'), "Manifest link should exist");

  // 3. Open Graph
  assert(html.includes('property="og:title"'), "og:title should exist");
  assert(html.includes('property="og:description"'), "og:description should exist");
  assert(html.includes('property="og:image" content="https://sujayv16.github.io/portfolio/Images/profile.jpg"'), "og:image should be absolute");
  assert(html.includes('property="og:url" content="https://sujayv16.github.io/portfolio/"'), "og:url should be correct");
  assert(html.includes('property="og:type" content="website"'), "og:type should be website");
  assert(html.includes('property="og:site_name" content="Viswanadhapalli Sujay Portfolio"'), "og:site_name should exist");

  // 4. Twitter Cards
  assert(html.includes('name="twitter:card" content="summary_large_image"'), "twitter:card should be summary_large_image");
  assert(html.includes('name="twitter:title"'), "twitter:title should exist");
  assert(html.includes('name="twitter:description"'), "twitter:description should exist");
  assert(html.includes('name="twitter:image" content="https://sujayv16.github.io/portfolio/Images/profile.jpg"'), "twitter:image should be absolute");

  // 5. Heading hierarchy (exactly one h1)
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  assert(h1Matches.length === 1, `Should have exactly one h1 tag. Found: ${h1Matches.length}`);

  // 6. Structured data JSON-LD validation
  const jsonLdStart = html.indexOf('<script type="application/ld+json">');
  const jsonLdEnd = html.indexOf("</script>", jsonLdStart);
  
  if (jsonLdStart !== -1 && jsonLdEnd !== -1) {
    const rawJson = html.substring(jsonLdStart + '<script type="application/ld+json">'.length, jsonLdEnd).trim();
    try {
      const data = JSON.parse(rawJson);
      assert(data["@context"] === "https://schema.org", "JSON-LD context should be schema.org");
      assert(Array.isArray(data["@graph"]), "JSON-LD graph should be an array");
      
      const person = data["@graph"].find(item => item["@type"] === "Person");
      const website = data["@graph"].find(item => item["@type"] === "WebSite");
      
      assert(person !== undefined, "JSON-LD Person type should be present");
      if (person) {
        assert(person.name === "Viswanadhapalli Sujay", "JSON-LD Person name should match");
        assert(person.alumniOf.name === "Indian Institute of Technology Jodhpur", "JSON-LD Person school should match");
        assert(person.worksFor.name === "ICICI Bank", "JSON-LD Person employer should match");
        assert(Array.isArray(person.sameAs) && person.sameAs.length >= 2, "JSON-LD Person sameAs links should exist");
      }
      
      assert(website !== undefined, "JSON-LD WebSite type should be present");
      if (website) {
        assert(website.url === "https://sujayv16.github.io/portfolio/", "JSON-LD WebSite url should match");
      }
    } catch (e) {
      assert(false, `JSON-LD structured data is not valid JSON: ${e.message}`);
    }
  } else {
    assert(false, "JSON-LD structured data script block was not found");
  }

  // 7. Verify pre-rendering succeeded and content exists in index.html
  assert(html.includes('id="home"'), "Pre-rendered Home section should exist");
  assert(html.includes('id="about"'), "Pre-rendered About section should exist");
  assert(html.includes('id="experience"'), "Pre-rendered Experience section should exist");
  assert(html.includes('id="projects"'), "Pre-rendered Projects section should exist");

  if (failures > 0) {
    console.error(`\nValidation failed with ${failures} error(s).`);
    process.exit(1);
  } else {
    console.log("\nValidation completed successfully! All checks passed.");
  }
}

runValidation();
