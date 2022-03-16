export function setBigFont() {
  document.documentElement.style.setProperty("--size-font-paragraph", "25px");
  document.documentElement.style.setProperty(
    "--size-font-checkbox-title",
    "23px"
  );
  document.documentElement.style.setProperty("--size-font-checkbox", "22px");
  document.documentElement.style.setProperty("--size-font-footer1", "21px");
  document.documentElement.style.setProperty("--size-font-footer2", "19px");
  document.documentElement.style.setProperty("--size-font-footer3", "17px");
  document.documentElement.style.setProperty("--size-font-footer4", "16px");
}

export function setSmallFont() {
  document.documentElement.style.setProperty("--size-font-paragraph", "20px");
  document.documentElement.style.setProperty(
    "--size-font-checkbox-title",
    "18px"
  );
  document.documentElement.style.setProperty("--size-font-checkbox", "17px");
  document.documentElement.style.setProperty("--size-font-footer1", "16px");
  document.documentElement.style.setProperty("--size-font-footer2", "14px");
  document.documentElement.style.setProperty("--size-font-footer3", "12px");
  document.documentElement.style.setProperty("--size-font-footer4", "11px");
}
