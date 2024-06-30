
// intersection observer
function fadeInProject(entries) {
    var delay = 0
    const diff = 150
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.transitionDelay = delay + "ms"
            entry.target.classList.toggle("faded", entry.isIntersecting)
            delay += diff
            observer.unobserve(entry.target)
        }
    })
}


const observer = new IntersectionObserver(fadeInProject, {})
document.querySelectorAll('.project').forEach((project) => {
    observer.observe(project)
})
