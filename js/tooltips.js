var anchors = document.querySelectorAll(".anchor-tooltip");

anchors.forEach((anchor) => {
  var title = anchor.getAttribute("title"),
    tooltip = document.createElement("span");
  tooltip.className = "title-tooltip";
  tooltip.innerHTML = title;
  anchor.appendChild(tooltip);
});
