if (document.readyState != 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready() {
    if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.add('dark');
        
        let elem = document.getElementById('darkmode');
        console.log(elem);
        elem.firstElementChild.classList.add("icon-sunny-outline");
        elem.firstElementChild.classList.remove("icon-moon-outline");
    } else {
        document.querySelector('html').classList.remove('dark')
    }

    let mainNavLinks = document.querySelectorAll("nav div div a");

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("bg-gray-50");
                link.classList.add("dark:bg-gray-800");
                link.classList.add("text-blue-500");
                link.classList.add("dark:text-blue-400");
            } else {
                link.classList.remove("bg-gray-50");
                link.classList.remove("dark:bg-gray-800");
                link.classList.remove("text-blue-500");
                link.classList.remove("dark:text-blue-400");
            }
        });
    });
}

function navbarToggle() {
    document.getElementById('navbar-items').classList.toggle("hidden");
}

function toggleDarkMode(elem) {
    if (document.querySelector('html').classList.toggle('dark')) {
        localStorage.theme = 'dark';
        elem.firstElementChild.classList.add("icon-sunny-outline");
        elem.firstElementChild.classList.remove("icon-moon-outline");
    } else {
        localStorage.theme = 'light';
        elem.firstElementChild.classList.add("icon-moon-outline");
        elem.firstElementChild.classList.remove("icon-sunny-outline");
    }
}