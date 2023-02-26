// FEATURES GSAP SCROLL ANIMATION
let trigger = ".content_trigger";
let visual = ".visual_item";
let section = ".section_sticky";

// On page load
$(section).each(function (index) {
  $(this).find(trigger).first().addClass("is-active");
  $(this).find(visual).first().addClass("is-active");
});

// On scroll into view
$(trigger).each(function (index) {
  let myIndex = $(this).index();
  let mySection = $(this).closest(section);
  let targetElement = mySection.find(visual).eq(myIndex);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      // trigger element - viewport
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        mySection.find(".is-active").removeClass("is-active");
        $(this).addClass("is-active");
        targetElement.addClass("is-active");
      },
      onEnterBack: () => {
        mySection.find(".is-active").removeClass("is-active");
        $(this).addClass("is-active");
        targetElement.addClass("is-active");
      }
    }
  });
});
