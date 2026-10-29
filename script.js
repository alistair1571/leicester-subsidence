/* Leicester Subsidence Services - shared script */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Prefill the contact form from the homepage enquiry card (?where=&stage=&postcode=)
  var form = document.getElementById("contact-form");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    ["where", "stage", "postcode"].forEach(function (key) {
      var value = params.get(key);
      var field = form.elements[key];
      if (value && field) {
        if (field.tagName === "SELECT") {
          for (var i = 0; i < field.options.length; i++) {
            if (field.options[i].value === value || field.options[i].text === value) { field.selectedIndex = i; break; }
          }
        } else {
          field.value = value;
        }
      }
    });
  }
})();
