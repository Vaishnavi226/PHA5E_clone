
  const position = [ // position array 
    { top: 50, left: 300 },  // each element is responsible for position
    { top: 20, left: 900 },
    { top: 300, left: 320 },
    { top: 350, left: 940 },
  ];

  document.querySelectorAll(".floatingImg").forEach((img, index) => {
    const { top, left } = position[index];
    img.style.top = `${top}px`;
    img.style.left = `${left}px`;
  });


 