// array for position of origin of each image
const position = [
    {top: 50, left:10},
    {top: 0, left: 220},
    {top: 300, left: 0},
    {top: 350, left: 220}
]

// logic to change origin
document.querySelectorAll('.floatingImg').forEach((img,index)=>{
    const {top, left} = position[index];
    img.style.top=`${top}px`;
    img.style.left=`${left}px`;
})