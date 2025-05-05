const ai_icon = '<svg class="ai-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<path fill="#FFC54D" d="m19.5,9c-.46,0-.874-.28-1.045-.708l-.853-1.911-1.914-.897c-.424-.179-.697-.597-.688-1.057.009-.46.297-.868.727-1.031l1.948-.738.78-1.951c.171-.427.584-.708,1.045-.708s.874.28,1.045.708l.785,1.963,1.963.785c.427.171.708.584.708,1.045s-.28.874-.708,1.045l-1.963.785-.785,1.963c-.171.427-.584.708-1.045.708Zm3.162,1.473c-1.222.505-2.618.675-4.076.388-2.72-.536-4.911-2.727-5.447-5.447-.287-1.458-.118-2.854.388-4.076.264-.639-.204-1.338-.895-1.338h-7.632C2.239,0,0,2.239,0,5v14c0,2.761,2.239,5,5,5h14c2.761,0,5-2.239,5-5v-7.632c0-.691-.699-1.159-1.338-.895Zm-8.964,8.527c-.443,0-.831-.294-.952-.72l-.643-2.28h-5.206l-.643,2.28c-.12.426-.509.72-.952.72h0c-.654,0-1.128-.624-.953-1.254l3.091-11.108c.141-.608.541-1.12,1.098-1.405.568-.292,1.22-.31,1.839-.05.587.246,1.037.817,1.204,1.535l3.071,11.029c.175.63-.298,1.254-.953,1.254Zm5.302-1c0,.552-.448,1-1,1s-1-.448-1-1v-4.912c0-.552.448-1,1-1s1,.448,1,1v4.912ZM9.39,7.165l-1.929,6.835h4.077l-1.929-6.835c-.029-.114-.191-.114-.219,0Z"/>' +
    '</svg>';

const pricingData = [
  {
    price: "Free",
    text: "Easy Start for Beginners to Explore Galleries",
    advantages: ["Unlimited Galleries", "Unlimited Users"],
    id: 1,
    title: "Starter",
    href: "https://wordpress.org/plugins/regallery/ with ",
  },
  {
    price: "$29",
    text: "For Photographers & Professionals, Needing Creative Galleries",
    advantages: [
      "Unlimited Galleries",
      "Unlimited Users",
      "Use on 1 Site",
      "Pro Templates",
      "Generated Image Description" + ai_icon,
      "Generated Image Alt Text" + ai_icon,
      "1 year Pro Support",
    ],
    id: 2,
    duration: "1 year",
    title: "Basic",
    href: "https://regallery.team/checkout/?plan=basic",
  },

  {
    price: "49$",

    text: "For Businesses & Agencies, Needing Custom Galleries",
    advantages: [
      "Unlimited Galleries",
      "Unlimited Users",
      "Use on 5 Sites",
      "Pro Templates",
      "Generated Image Description" + ai_icon,
      "Generated Image Alt Text" + ai_icon,
      "1 Year Pro Support",
      "1 Year Customizations",
    ],
    id: 3,
    duration: "1 Year",
    title: "Plus",
    href: "https://regallery.team/checkout/?plan=plus",
  },
];

export default pricingData;
