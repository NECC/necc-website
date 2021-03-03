if (document.readyState != 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready() {
    if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.add('dark');
        
        let elem = document.getElementById('darkmode');
        elem.setAttribute("aria-checked", "true");
        elem.firstElementChild.classList.add("icon-sunny-outline");
        elem.firstElementChild.classList.remove("icon-moon-outline");
    } else {
        document.querySelector('html').classList.remove('dark')
    }
}

function navbarToggle() {
    document.getElementById('navbar-items').classList.toggle("hidden");
}

function toggleDarkMode(elem) {
    if (document.querySelector('html').classList.toggle('dark')) {
        localStorage.theme = 'dark';
        elem.setAttribute("aria-checked", "true");
        elem.firstElementChild.classList.add("icon-sunny-outline");
        elem.firstElementChild.classList.remove("icon-moon-outline");
    } else {
        localStorage.theme = 'light';
        elem.setAttribute("aria-checked", "false");
        elem.firstElementChild.classList.add("icon-moon-outline");
        elem.firstElementChild.classList.remove("icon-sunny-outline");
    }
}