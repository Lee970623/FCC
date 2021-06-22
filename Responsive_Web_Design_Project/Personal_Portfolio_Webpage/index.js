window.onload = function() {
    const image_links = document.querySelectorAll('.project')

    image_links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.querySelector('.project-image').style.transform = 'scale(1.2)'
            link.querySelectorAll('code')[0].style.opacity = '1'
            link.querySelectorAll('code')[1].style.opacity = '1'
        })

        link.addEventListener('mouseleave', () => {
            link.querySelector('.project-image').style.transform = ''
            link.querySelectorAll('code')[0].style.opacity = '0'
            link.querySelectorAll('code')[1].style.opacity = '0'
        })
    })
}