const root = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const themeToggle = document.querySelector("[data-theme-toggle]");

// Performance: Debounce helper for scroll and resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function setTheme(theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {}
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

var currentLang = "en";
function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  var langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) langToggle.setAttribute("aria-pressed", lang === "fr" ? "true" : "false");
  document.querySelectorAll("[data-fr]").forEach(function(el) {
    if (lang === "fr") {
      if (!el.hasAttribute("data-en")) el.setAttribute("data-en", el.textContent);
      el.textContent = el.getAttribute("data-fr");
    } else {
      el.textContent = el.getAttribute("data-en") || el.textContent;
    }
  });
}
var savedLang = "en";
try { savedLang = localStorage.getItem("lang") || "en"; } catch (e) {}
setLang(savedLang);
var langToggle = document.querySelector("[data-lang-toggle]");
if (langToggle) {
  langToggle.addEventListener("click", function() {
    setLang(currentLang === "en" ? "fr" : "en");
  });
}

var lastScrollY = 0;
function updateHeaderState() {
  if (!header) return;
  var scrollY = window.scrollY;
  header.classList.toggle("is-scrolled", scrollY > 16);
  if (scrollY < 80) {
    header.classList.remove("is-hidden");
  } else if (scrollY > lastScrollY) {
    header.classList.add("is-hidden");
  } else if (scrollY < lastScrollY) {
    header.classList.remove("is-hidden");
  }
  lastScrollY = scrollY;
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      el.classList.add("is-visible");
    });
  }, 4000);
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const filterSelects = Array.from(document.querySelectorAll(".filter-select"));
const experienceCards = Array.from(document.querySelectorAll(".experience-card"));
const experienceSearch = document.querySelector("[data-experience-search]");
const resultCount = document.querySelector("[data-result-count]");
const emptyState = document.querySelector("[data-empty-state]");
const experienceGrid = document.querySelector("[data-experience-grid]");
const loadingState = document.querySelector("[data-loading-state]");
const clearFiltersButton = document.querySelector("[data-clear-filters]");
const wishlistCount = document.querySelector("[data-wishlist-count]");
const wishlistButtons = Array.from(document.querySelectorAll("[data-wishlist-toggle]"));
let filterTimer;

function readWishlist() {
  try {
    return new Set(JSON.parse(localStorage.getItem("wishlist") || "[]"));
  } catch (error) {
    return new Set();
  }
}

function writeWishlist(wishlist) {
  try {
    localStorage.setItem("wishlist", JSON.stringify(Array.from(wishlist)));
  } catch (error) {}
}

const wishlist = readWishlist();

function matchesPrice(price, range) {
  if (range === "under-500") return price < 500;
  if (range === "500-1000") return price >= 500 && price <= 1000;
  if (range === "1000-plus") return price > 1000;
  return true;
}

function syncWishlistButtons() {
  wishlistButtons.forEach((button) => {
    const card = button.closest(".experience-card");
    const id = card?.dataset.experienceId;
    const isSaved = id ? wishlist.has(id) : false;

    button.setAttribute("aria-pressed", String(isSaved));
    button.textContent = isSaved ? "Saved" : "Save";
  });

  if (wishlistCount) {
    const count = wishlist.size;
    wishlistCount.textContent = `${count} saved`;
  }
}

function filterExperiences() {
  const filters = filterSelects.reduce((values, select) => {
    values[select.dataset.filter] = select.value;
    return values;
  }, {});
  const query = (experienceSearch?.value || "").trim().toLowerCase();

  let visibleCount = 0;

  experienceCards.forEach((card) => {
    const searchableText = `${card.textContent} ${card.dataset.city} ${card.dataset.category} ${card.dataset.duration}`.toLowerCase();
    const searchMatch = !query || searchableText.includes(query);
    const cityMatch = filters.city === "any" || card.dataset.city === filters.city;
    const durationMatch = filters.duration === "any" || card.dataset.duration === filters.duration;
    const categoryMatch = filters.category === "any" || card.dataset.category === filters.category;
    const priceMatch = matchesPrice(Number(card.dataset.price), filters.price);
    const isVisible = searchMatch && cityMatch && durationMatch && categoryMatch && priceMatch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (resultCount) resultCount.textContent = String(visibleCount);
  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

function scheduleExperienceFilter() {
  if (!experienceCards.length) return;

  window.clearTimeout(filterTimer);
  if (experienceGrid) experienceGrid.setAttribute("aria-busy", "true");
  if (loadingState) loadingState.hidden = false;

  filterTimer = window.setTimeout(() => {
    filterExperiences();
    if (experienceGrid) experienceGrid.setAttribute("aria-busy", "false");
    if (loadingState) loadingState.hidden = true;
  }, 180);
}

filterSelects.forEach((select) => select.addEventListener("change", scheduleExperienceFilter));
experienceSearch?.addEventListener("input", scheduleExperienceFilter);
clearFiltersButton?.addEventListener("click", () => {
  filterSelects.forEach((select) => {
    select.value = "any";
  });
  if (experienceSearch) experienceSearch.value = "";
  scheduleExperienceFilter();
});

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".experience-card");
    const id = card?.dataset.experienceId;
    if (!id) return;

    if (wishlist.has(id)) wishlist.delete(id);
    else wishlist.add(id);

    writeWishlist(wishlist);
    syncWishlistButtons();
  });
});

if (experienceCards.length) {
  filterExperiences();
  syncWishlistButtons();
}

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const previous = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");
  const status = slider.querySelector("[data-slider-status]");
  let index = 0;

  function updateSlider() {
    if (!track || !slides.length) return;

    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== index));
    });
    if (status) status.textContent = `Slide ${index + 1} of ${slides.length}`;
    if (previous) previous.toggleAttribute("disabled", index === 0);
    if (next) next.toggleAttribute("disabled", index === slides.length - 1);
  }

  previous?.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    updateSlider();
  });

  next?.addEventListener("click", () => {
    index = Math.min(slides.length - 1, index + 1);
    updateSlider();
  });

  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") previous?.click();
    if (event.key === "ArrowRight") next?.click();
  });

  updateSlider();
});

const bookingForm = document.querySelector("[data-booking-form]");

function formatCurrency(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

if (bookingForm) {
  const bookingSteps = Array.from(bookingForm.querySelectorAll("[data-booking-step]"));
  const stepIndicators = Array.from(document.querySelectorAll("[data-step-indicator]"));
  const nextStepButtons = Array.from(bookingForm.querySelectorAll("[data-next-step]"));
  const previousStepButtons = Array.from(bookingForm.querySelectorAll("[data-prev-step]"));
  const submitButton = bookingForm.querySelector("[data-submit-booking]");
  const packageSelect = bookingForm.querySelector("[data-package-select]");
  const guestInput = bookingForm.querySelector("[data-guest-count]");
  const adultInput = bookingForm.querySelector("[data-adult-count]");
  const childInput = bookingForm.querySelector("[data-child-count]");
  const infantInput = bookingForm.querySelector("[data-infant-count]");
  const dateInput = bookingForm.querySelector("[data-booking-date]");
  const addonInputs = Array.from(bookingForm.querySelectorAll("[data-addon]"));
  const availabilityNote = bookingForm.querySelector("[data-availability-note]");
  const quoteBase = bookingForm.querySelector("[data-quote-base]");
  const quoteAddons = bookingForm.querySelector("[data-quote-addons]");
  const quoteTotal = bookingForm.querySelector("[data-quote-total]");
  const quoteDeposit = bookingForm.querySelector("[data-quote-deposit]");
  const confirmation = document.querySelector("[data-booking-confirmation]");
  const referenceCode = document.querySelector("[data-reference-code]");
  const confirmationSummary = document.querySelector("[data-confirmation-summary]");
  const status = bookingForm.querySelector(".form-status");
  const currency = bookingForm.dataset.currency || "USD";
  let currentStep = 1;

  function showBookingStep(step) {
    currentStep = Math.min(Math.max(step, 1), bookingSteps.length || 1);

    bookingSteps.forEach((panel) => {
      panel.hidden = Number(panel.dataset.bookingStep) !== currentStep;
    });

    stepIndicators.forEach((indicator) => {
      const indicatorStep = Number(indicator.dataset.stepIndicator);
      indicator.classList.toggle("active", indicatorStep === currentStep);
      if (indicatorStep === currentStep) indicator.setAttribute("aria-current", "step");
      else indicator.removeAttribute("aria-current");
    });
  }

  function validateCurrentStep() {
    const currentPanel = bookingForm.querySelector(`[data-booking-step="${currentStep}"]`);
    const fields = Array.from(currentPanel?.querySelectorAll("input, select, textarea") || []);

    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }

    return true;
  }

  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split("T")[0];
  }

  function getSelectedPackage() {
    const option = packageSelect?.selectedOptions[0];
    return {
      base: Number(option?.dataset.base || 0),
      included: Number(option?.dataset.included || 0),
      label: option?.textContent.split(" - ")[0] || "Selected package",
    };
  }

  function getQuote() {
    if (adultInput) {
      const adults = Math.max(0, Number(adultInput.value || 0));
      const children = Math.max(0, Number(childInput?.value || 0));
      const infants = Math.max(0, Number(infantInput?.value || 0));
      const adultRate = Number(bookingForm.dataset.adultRate || 0);
      const childRate = Number(bookingForm.dataset.childRate || 0);
      const infantRate = Number(bookingForm.dataset.infantRate || 0);
      const base = adults * adultRate;
      const additions = children * childRate + infants * infantRate;
      const addonTotal = addonInputs.reduce((total, input) => total + (input.checked ? Number(input.value) : 0), 0);
      const total = base + additions + addonTotal;
      const guests = adults + children + infants;

      return {
        additions: additions + addonTotal,
        deposit: Math.ceil(total * 0.25),
        guests,
        package: { base, label: "Hassan II Mosque Skip-the-Line Guided Tour" },
        total,
      };
    }

    const selectedPackage = getSelectedPackage();
    const guests = Math.max(1, Number(guestInput?.value || 1));
    const extraGuestFee = Math.max(0, guests - selectedPackage.included) * 180;
    const addonTotal = addonInputs.reduce((total, input) => total + (input.checked ? Number(input.value) : 0), 0);
    const additions = extraGuestFee + addonTotal;
    const total = selectedPackage.base + additions;

    return {
      additions,
      deposit: Math.ceil(total * 0.25),
      guests,
      package: selectedPackage,
      total,
    };
  }

  function updateAvailabilityNote() {
    if (!availabilityNote || !dateInput) return;

    if (!dateInput.value) {
      availabilityNote.textContent = "Choose a date to check the preferred tour time.";
      return;
    }

    const selectedDate = new Date(`${dateInput.value}T12:00:00`);
    const day = selectedDate.getDay();
    const isWeekend = day === 5 || day === 6 || day === 0;

    availabilityNote.textContent = isWeekend
      ? "High-demand date. Morocco Coco Travel will confirm the best available tour time."
      : "Good availability expected. Meeting point or pickup details will be confirmed before the tour.";
  }

  function updateBookingQuote() {
    const quote = getQuote();

    if (adultInput) {
      const adults = Math.max(0, Number(adultInput.value || 0));
      const children = Math.max(0, Number(childInput?.value || 0));
      const infants = Math.max(0, Number(infantInput?.value || 0));
      const totalTravelers = adults + children + infants;
      adultInput.setCustomValidity(totalTravelers > 10 ? "Maximum travelers for this private tour is 10." : "");
    }

    if (quoteBase) quoteBase.textContent = formatCurrency(quote.package.base, currency);
    if (quoteAddons) quoteAddons.textContent = formatCurrency(quote.additions, currency);
    if (quoteTotal) quoteTotal.textContent = formatCurrency(quote.total, currency);
    if (quoteDeposit) quoteDeposit.textContent = formatCurrency(quote.deposit, currency);

    updateAvailabilityNote();
    return quote;
  }

  [packageSelect, guestInput, adultInput, childInput, infantInput, dateInput, ...addonInputs].forEach((input) => {
    input?.addEventListener("input", updateBookingQuote);
    input?.addEventListener("change", updateBookingQuote);
  });

  nextStepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!validateCurrentStep()) return;
      updateBookingQuote();
      showBookingStep(currentStep + 1);
    });
  });

  previousStepButtons.forEach((button) => {
    button.addEventListener("click", () => showBookingStep(currentStep - 1));
  });

  stepIndicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const requestedStep = Number(indicator.dataset.stepIndicator);
      if (requestedStep <= currentStep) showBookingStep(requestedStep);
      else if (requestedStep === currentStep + 1 && validateCurrentStep()) showBookingStep(requestedStep);
    });
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    const quote = updateBookingQuote();
    const reference = `MC-${Math.floor(1000 + Math.random() * 9000)}`;
    const originalText = submitButton?.textContent || "Request Availability";

    bookingForm.setAttribute("aria-busy", "true");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Checking availability...";
    }
    if (status) status.textContent = "Checking preferred date, traveler details, and guide availability.";

    window.setTimeout(() => {
      bookingForm.closest(".booking-card")?.classList.add("is-confirmed");

      if (referenceCode) referenceCode.textContent = reference;
      if (confirmationSummary) {
        confirmationSummary.textContent = `${quote.package.label} for ${quote.guests} traveler${quote.guests === 1 ? "" : "s"}, estimated at ${formatCurrency(quote.total, currency)}. Morocco Coco Travel will verify the tour time, meeting point, and pickup details.`;
      }
      if (confirmation) confirmation.hidden = false;
      if (status) status.textContent = `Availability request ${reference} prepared. No payment has been taken.`;
      bookingForm.setAttribute("aria-busy", "false");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }, 850);
  });

  updateBookingQuote();
  showBookingStep(1);
}

document.querySelectorAll("[data-faq-list]").forEach((faqList) => {
  faqList.addEventListener("toggle", (event) => {
    const activeDetail = event.target;
    if (!(activeDetail instanceof HTMLDetailsElement) || !activeDetail.open) return;

    faqList.querySelectorAll("details").forEach((detail) => {
      if (detail !== activeDetail) detail.open = false;
    });
  }, true);
});

document.querySelectorAll("form[data-form-message]").forEach((form) => {
  if (form.matches("[data-booking-form]")) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status") || form.nextElementSibling;

    if (status) {
      status.textContent = form.dataset.formMessage || "Thank you. We received your request.";
    }

    form.reset();
  });
});

const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pointerFine = window.matchMedia("(pointer: fine)").matches;

if (motionOk && pointerFine) {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.setProperty("--mx", `${50 + x * 0.06}%`);
      btn.style.setProperty("--my", `${50 + y * 0.06}%`);
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

if (motionOk && pointerFine) {
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    const slideBgs = heroSlider.querySelectorAll(".hero-slide-bg");
    heroSlider.addEventListener("mousemove", (e) => {
      const rect = heroSlider.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      slideBgs.forEach((bg) => {
        bg.style.transform = `translate(${x * -8}px, ${y * -8}px) scale(1.07)`;
      });
    });
    heroSlider.addEventListener("mouseleave", () => {
      slideBgs.forEach((bg) => { bg.style.transform = ""; });
    });
  }
}

const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  const onScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.opacity = scrollPercent > 95 ? "0" : "1";
  };
  window.addEventListener("scroll", debounce(onScroll, 100), { passive: true });
}

if (motionOk) {
  document.querySelectorAll(".stats-grid strong").forEach((counter) => {
    const raw = counter.textContent.trim();
    const hasPlus = raw.endsWith("+");
    const target = parseInt(raw) || 0;
    if (!target) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        const duration = 1400;
        const start = performance.now();
        function frame(now) {
          const t = Math.min((now - start) / duration, 1);
          const current = Math.floor(t * target);
          counter.textContent = current + (hasPlus ? "+" : "");
          if (t < 1) requestAnimationFrame(frame);
          else counter.textContent = target + (hasPlus ? "+" : "");
        }
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.5 });
    obs.observe(counter);
  });
}

(function() {
  var heroSlider = document.querySelector("[data-hero-slider]");
  if (!heroSlider) return;
  var slides = Array.from(heroSlider.querySelectorAll("[data-hero-slide]"));
  if (!slides.length) return;
  var prevBtn = heroSlider.querySelector("[data-hero-prev]");
  var nextBtn = heroSlider.querySelector("[data-hero-next]");
  var dotsContainer = heroSlider.querySelector("[data-hero-dots]");
  var currentIndex = 0;
  var autoplayId = null;
  var AUTOPLAY_MS = 5000;

  slides.forEach(function(_, i) {
    var dot = document.createElement("button");
    dot.className = i === 0 ? "active" : "";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Slide " + (i + 1));
    dot.addEventListener("click", function() { showSlide(i); });
    dotsContainer.appendChild(dot);
  });
  var dots = Array.from(dotsContainer.children);

  function showSlide(index) {
    if (index === currentIndex) { resetAutoplay(); return; }
    slides.forEach(function(s, i) {
      s.classList.remove("active");
    });
    slides[index].classList.add("active");
    dots.forEach(function(d, i) {
      d.classList.toggle("active", i === index);
    });
    currentIndex = index;
    resetAutoplay();
  }

  function nextSlide() { showSlide((currentIndex + 1) % slides.length); }
  function prevSlide() { showSlide((currentIndex - 1 + slides.length) % slides.length); }

  function startAutoplay() { stopAutoplay(); if (motionOk) autoplayId = setInterval(nextSlide, AUTOPLAY_MS); }
  function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }
  function resetAutoplay() { stopAutoplay(); if (motionOk) autoplayId = setInterval(nextSlide, AUTOPLAY_MS); }

  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  heroSlider.addEventListener("mouseenter", stopAutoplay);
  heroSlider.addEventListener("mouseleave", startAutoplay);
  heroSlider.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  startAutoplay();
})();

if (motionOk) {
  document.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    if (img.clientWidth < 100 && img.clientHeight < 100) return;
    img.classList.add("blur-up");
    img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
    img.addEventListener("error", () => img.classList.remove("blur-up"), { once: true });
  });
}
