const hd = document.querySelector('.header-div')

const navElements = `<a href="/" class="nav-option">Strona główna</a>
<a href="/src/html/dowodcy.html" class="nav-option">Dowódcy</a>
<a href="/src/html/kto-bral.html" class="nav-option">Kraje biorące udział w wojnie</a>
<a href="/src/html/przyczyny.html" class="nav-option">Przyczyny wojny</a>
<a href="/src/html/straty.html" class="nav-option">Straty w ludziach</a>`

const phoneHeader = `<header>
    <div class="name">I Wojna o Daniela</div>
    <i class="fas fa-bars hamburger" tabindex="5"></i>
    <nav class="hide">
        ${navElements}
    </nav>
</header>
<div style="height: 60px;"></div>`

const desktopHeader = `<header>
<div class="name">I Wojna o Daniela</div>
    <nav>
        ${navElements}
    </nav>
</header>
<div style="height: 60px;"></div>`

hd.innerHTML = (innerHeight>innerWidth)?
    phoneHeader : desktopHeader

addEventListener('resize', ()=>{
    hd.innerHTML = (innerHeight>innerWidth)?
    phoneHeader : desktopHeader
})