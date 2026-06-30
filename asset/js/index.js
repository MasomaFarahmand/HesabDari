const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const isActive = faq.classList.contains("active");

    faqs.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".answer").style.maxHeight = null;
    });

    if (!isActive) {
      faq.classList.add("active");
      const answer = faq.querySelector(".answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


