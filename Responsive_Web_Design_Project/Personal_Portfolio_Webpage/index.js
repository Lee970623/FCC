window.onload = function() {
    const image_links = document.querySelectorAll('.project')

    image_links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.querySelector('.project-image').style.transform = 'scale(1.2)'
        })

        link.addEventListener('mouseleave', () => {
            link.querySelector('.project-image').style.transform = ''
        })
    })
}