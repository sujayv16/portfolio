jQuery(document).ready(function ($) {
  /** Animation Configurations */
  const animationConfig = {
    animationDelay: 2500,
    barAnimationDelay: 3800,
    barWaiting: 800, // Adjusted timing for better transitions
    lettersDelay: 50,
    typeLettersDelay: 150,
    selectionDuration: 500,
    typeAnimationDelay: 1300, // Adjusted for smoother effect
    revealDuration: 600,
    revealAnimationDelay: 1500,
  };

  initHeadline();

  /** Initialize Headline Animation */
  function initHeadline() {
    singleLetters($(".cd-headline.letters").find("b"));
    animateHeadline($(".cd-headline"));
  }

  /** Convert text into animated letters */
  function singleLetters($words) {
    $words.each(function () {
      let word = $(this);
      let letters = word.text().split("");
      let selected = word.hasClass("is-visible");

      word.html(
        letters
          .map((letter) =>
            selected ? `<i class="in">${letter}</i>` : `<i>${letter}</i>`
          )
          .join("")
      ).css("opacity", 1);
    });
  }

  /** Manage Headline Animations */
  function animateHeadline($headlines) {
    $headlines.each(function () {
      let headline = $(this);
      setTimeout(() => hideWord(headline.find(".is-visible").eq(0)), animationConfig.animationDelay);
    });
  }

  /** Hide current word & show next */
  function hideWord($word) {
    let nextWord = takeNext($word);
    let parent = $word.parents(".cd-headline");

    if (parent.hasClass("type")) {
      let wrapper = $word.parent(".cd-words-wrapper");
      wrapper.addClass("selected").removeClass("waiting");

      setTimeout(() => {
        wrapper.removeClass("selected");
        $word.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out");
      }, animationConfig.selectionDuration);

      setTimeout(() => showWord(nextWord, animationConfig.typeLettersDelay), animationConfig.typeAnimationDelay);
    } else if (parent.hasClass("letters")) {
      let moreLetters = $word.children("i").length >= nextWord.children("i").length;
      hideLetter($word.find("i").eq(0), $word, moreLetters, animationConfig.lettersDelay);
      showLetter(nextWord.find("i").eq(0), nextWord, moreLetters, animationConfig.lettersDelay);
    } else if (parent.hasClass("clip")) {
      $word.parents(".cd-words-wrapper").animate({ width: "2px" }, animationConfig.revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
    } else if (parent.hasClass("loading-bar")) {
      $word.parents(".cd-words-wrapper").removeClass("is-loading");
      switchWord($word, nextWord);
      setTimeout(() => hideWord(nextWord), animationConfig.barAnimationDelay);
      setTimeout(() => $word.parents(".cd-words-wrapper").addClass("is-loading"), animationConfig.barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(() => hideWord(nextWord), animationConfig.animationDelay);
    }
  }

  function showWord($word, duration) {
    if ($word.parents(".cd-headline").hasClass("type")) {
      showLetter($word.find("i").eq(0), $word, false, duration);
      $word.addClass("is-visible").removeClass("is-hidden");
    } else if ($word.parents(".cd-headline").hasClass("clip")) {
      $word.parents(".cd-words-wrapper").animate({ width: $word.width() + 10 }, animationConfig.revealDuration, function () {
        setTimeout(() => hideWord($word), animationConfig.revealAnimationDelay);
      });
    }
  }

  function hideLetter($letter, $word, bool, duration) {
    $letter.removeClass("in").addClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(() => hideLetter($letter.next(), $word, bool, duration), duration);
    } else if (bool) {
      setTimeout(() => hideWord(takeNext($word)), animationConfig.animationDelay);
    }
  }

  function showLetter($letter, $word, bool, duration) {
    $letter.addClass("in").removeClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(() => showLetter($letter.next(), $word, bool, duration), duration);
    } else {
      if ($word.parents(".cd-headline").hasClass("type")) {
        setTimeout(() => $word.parents(".cd-words-wrapper").addClass("waiting"), 200);
      }
      if (!bool) {
        setTimeout(() => hideWord($word), animationConfig.animationDelay);
      }
    }
  }

  function takeNext($word) {
    return !$word.is(":last-child") ? $word.next() : $word.parent().children().eq(0);
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }
});

/** Tilt Effect */
const tiltElement = document.getElementById("tilt");

if (tiltElement) {
  const height = tiltElement.clientHeight;
  const width = tiltElement.clientWidth;

  tiltElement.addEventListener("mousemove", (e) => {
    const xRotation = -20 * ((e.layerY - height / 2) / height);
    const yRotation = 20 * ((e.layerX - width / 2) / width);
    requestAnimationFrame(() => {
      tiltElement.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
  });

  tiltElement.addEventListener("mouseout", () => {
    requestAnimationFrame(() => {
      tiltElement.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
  });

  tiltElement.addEventListener("mousedown", () => {
    requestAnimationFrame(() => {
      tiltElement.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    });
  });

  tiltElement.addEventListener("mouseup", () => {
    requestAnimationFrame(() => {
      tiltElement.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
  });
}
