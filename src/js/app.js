document.addEventListener('DOMContentLoaded', function(){

    fixedNavigation()
    createGallery()
    linkColor()
    scrollNav()
})

function fixedNavigation() {

    const header = document.querySelector('.header')
    const abouFestival = document.querySelector('.about-festival')

    document.addEventListener('scroll', function() {

        if (abouFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }

    })
    
}

function createGallery() {

    const number_images = 16
    const gallery = document.querySelector('.gallery-images')

    for (let i = 1; i <= number_images; i++) {
        const image = document.createElement('IMG')

        image.src = `src/img/gallery/full/${i}.jpg`

        image.alt = 'Gallery Image'

        image.onclick = function () {
            showImage(i)
        }


        gallery.appendChild(image)

    }
}

function showImage(i) {

    const image = document.createElement('IMG')
    image.src = `src/img/gallery/full/${i}.jpg`
    image.alt = 'Gallery Image'

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    // modal.onclick = closeModal

    // Close button
    const closeModalBtn = document.createElement('BUTTON')
    closeModalBtn.textContent = 'X'
    closeModalBtn.classList.add('close-btn')
    closeModalBtn.onclick = closeModal

    modal.appendChild(image)
    modal.appendChild(closeModalBtn)

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function closeModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')

    }, 500)

    modal?.remove()
}

function linkColor() {

    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.main-Navigation a')

        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                current = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + current) {
                link.classList.add('active')
            }
        })
    })

}

function scrollNav() {
    const navLinks = document.querySelectorAll('.main-Navigation a')
    const title = document.querySelector('.header-content h1')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            if (section) {
                section.scrollIntoView({behavior: 'smooth'})
            }
        })
    })

    title.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

}
