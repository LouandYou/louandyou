export function setBigFont() {
  document.documentElement.style.setProperty("--size-font-paragraph", "24px");
  document.documentElement.style.setProperty(
    "--size-font-paragraph-desktop",
    "26px"
  );

  document.documentElement.style.setProperty("--size-font-footer1", "21px");
  document.documentElement.style.setProperty("--size-font-footer2", "19px");
  document.documentElement.style.setProperty("--size-font-footer3", "17px");
  document.documentElement.style.setProperty("--size-font-footer4", "16px");
}

export function setSmallFont() {
  document.documentElement.style.setProperty("--size-font-paragraph", "18px");
  document.documentElement.style.setProperty(
    "--size-font-paragraph-desktop",
    "20px"
  );

  document.documentElement.style.setProperty("--size-font-footer1", "16px");
  document.documentElement.style.setProperty("--size-font-footer2", "14px");
  document.documentElement.style.setProperty("--size-font-footer3", "12px");
  document.documentElement.style.setProperty("--size-font-footer4", "11px");
}

export function setContrast() {
  document.documentElement.style.setProperty("--color-font", "#101223");
  document.documentElement.style.setProperty(
    "--filter",
    `brightness(0) invert(0)`
  );
}

export function removeContrast() {
  document.documentElement.style.setProperty("--color-font", "white");
  document.documentElement.style.setProperty(
    "--filter",
    `brightness(0) invert(1)`
  );
}
