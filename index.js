const submitBtn = document.getElementById("submit-btn")
const colors = [
    "#e6b0aa",
    "#f5b7b1",
    "#d7bde2",
    "#d2b4de",
    "#a9cce3",
    "#aed6f1",
    "#a3e4d7",
    "#a2d9ce",
    "#a9dfbf",
    "#abebc6",
    "#f9e79f",
    "#fad7a0",
    "#f5cba7",
    "#edbb99",
    "#f7f9f9",
    "#e5e7e9",
    "#d5dbdb",
    "#ccd1d1",
    "#aeb6bf",
    "#abb2b9"
]
  
submitBtn.addEventListener("mouseover", function () {
    submitBtn.style.background = colors[Math.floor(Math.random() * colors.length)]
})
        
submitBtn.addEventListener("mouseout", function() {
    submitBtn.style.background = "#f1c40f"
})