const addScriptsToBody = () => {
  const script1 = document.createElement("script");
  script1.id = "reacg_thumbnails-js-extra";
  script1.innerHTML = `
        var reacg_global = {
          rest_root: "https://regallery.team/core/wp-json/reacg/v1/",
          rest_nonce: "1c55173374",
          plugin_url: "https://regallery.team/core/wp-content/plugins/regallery",
          text: { load_more: "Load more", no_data: "There is not data." }
        };
      `;

  document.body.appendChild(script1);

  const script2 = document.createElement("script");
  script2.id = "reacg_thumbnails-js";
  script2.src =
    "https://regallery.team/core/wp-content/plugins/regallery/assets/js/wp-gallery.js?ver=1.10.0";
  script2.async = true;
  document.body.appendChild(script2);

  document.body.appendChild(script2);
};
export default addScriptsToBody;
