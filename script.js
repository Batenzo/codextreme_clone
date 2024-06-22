
// See more Tracks
document.getElementById('see-btn').addEventListener('change', function() {
    document.querySelector('.extra-tracks').style.display = this.checked ? 'grid' : 'none';
});

// Schedule
function showTab(dayId, element) {
    var i, tabcontent, tabbuttons;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    
    document.getElementById(dayId).classList.add("active");
    element.classList.add("active");
}

// Automatically show the first tab on page load
document.addEventListener('DOMContentLoaded', function() {
    showTab('day1', document.querySelector('.tab-button'));
});