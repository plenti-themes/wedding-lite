<div id="sticky-wrapper" class="sticky-wrapper" style="height: 98px;">
    <nav class="navbar navbar-expand-lg" style="width: 1520px;">
        <div class="container">
            <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>

            <a href="index.html" class="navbar-brand mx-auto mx-lg-0">
                <span>Bratt</span>
                <i class="bi-heart brand-icon" />
                <span>Jolie</span>
            </a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a
                            class="nav-link click-scroll active"
                            href="#section_1"
                        >
                            Homepage
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link click-scroll inactive"
                            href="#section_2"
                        >
                            Our Story
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link click-scroll inactive"
                            href="#section_3"
                        >
                            The Wedding
                        </a>
                    </li>

                    <li class="nav-item">
                        <a 
                            class="nav-link click-scroll inactive"
                            href="#section_4"
                        >
                            People
                        </a>
                    </li>

                    <li class="nav-item">
                        <a 
                            class="nav-link click-scroll inactive"
                            href="#section_5">
                            Gallery
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link click-scroll inactive"
                            href="#section_6"
                        >
                            Rsvp
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link click-scroll inactive"
                            href="#section_7"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<style>
    .sticky-wrapper {
        min-height: 98px;
    }
    .navbar {
        position: absolute;
        z-index: 9;
        right: 0;
        left: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        flex-wrap: nowrap;
        justify-content: flex-start;
        display: flex;
        align-items: center;
    }
    .container {
        display: flex;
        flex-wrap: inherit;
        align-items: center;
        justify-content: space-between;
        max-width: 1320px;
        width: 100%;
        margin: 0 auto;
    }
    .navbar-brand, .navbar-brand:hover {
        color: var(--primary-color);
    }
    .navbar-collapse {
        display: flex;
        flex-basis: auto;
        flex-grow: 1;
        align-items: center;
    }
    ul {
        flex-direction: row;
        margin-left: auto;
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        margin-top: 0;
    }
    li {
        color: var(--p-color);
        font-size: var(--p-font-size);
        font-weight: var(--font-weight-light);
    }
    a.nav-link {
        padding-right: 0;
        padding-left: 0;
        margin-right: 20px;
        margin-left: 20p;
        display: inline-block;
        color: var(--p-color);
        font-size: var(--menu-font-size);
        font-weight: var(--font-weight-normal);
        text-transform: uppercase;
        padding-top: 15px;
        padding-bottom: 15px;
        text-decoration: none;
    }
</style>