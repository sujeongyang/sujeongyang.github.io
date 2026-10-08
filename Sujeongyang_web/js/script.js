document.querySelectorAll(".project-card__media img").forEach((image) => {
  const showImage = () => image.classList.add("is-loaded");
  const hideImage = () => image.remove();

  if (image.complete) {
    image.naturalWidth > 0 ? showImage() : hideImage();
    return;
  }

  image.addEventListener("load", showImage, { once: true });
  image.addEventListener("error", hideImage, { once: true });
});
