<script>
    export let title, items;
</script>

<section class="profiles-section section-padding" id="section_2">
    <div class="container">
        <div class="row">

            <div class="section-title-wrap">
                <h2 class="section-title">{title}</h2>

                <div class="section-title-bottom">
                    <span class="section-title-line"></span>
                    <i class="section-title-icon bi-heart-fill"></i>
                    <span class="section-title-line"></span>
                </div>
            </div>

            {#each items as item}
                <div class="image-wrapper">
                    <div class="image-hover-thumb">
                        <img 
                            src="{item.picture.src}"
                            class="about-image img-fluid"
                            alt="{item.picture.alt}"
                        />
                    </div>
                </div>

                <div class="info-wrapper">
                    <div class="about-info-wrap">
                        <div class="about-info-title">
                            <h4>{item.name}</h4>

                            <span class="about-tag ms-2">{item.title}</span>
                        </div>

                        <p>{item.desc}</p>

                        <div class="social-icon-wrap mt-auto">
                            <ul class="social-icon ms-auto">
                                {#each item.social as social}
                                    <li class="social-icon-item">
                                        <a href="{social.link}" class="social-icon-link bi-{social.name}"></a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            {/each}

        </div>
    </div>
</section>

<style>
    .image-wrapper, .info-wrapper {
        flex: 0 0 auto;
        width: 25%;
    }
    .image-hover-thumb {
        border-radius: var(--border-radius-medium);
        position: relative;
        overflow: hidden;
    }
    img {
        border-radius: var(--border-radius-small);
        display: block;
        transition: all 0.5s;
        max-width: 100%;
        height: auto;
    }
    .about-info-title {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .about-tag {
        font-weight: var(--font-weight-light);
        text-transform: uppercase;
    }
    .social-icon-item {
        list-style: none;
        display: inline-block;
        vertical-align: top;
    }
    a.social-icon-link {
        background: var(--secondary-color);
        border-radius: var(--border-radius-large);
        font-size: var(--menu-font-size);
        color: var(--dark-color);
        display: inline-block;
        vertical-align: top;
        margin: 4px;
        width: 30px;
        line-height: 30px;
        line-height: 30px;
        text-align: center;
        transition: all .3s;
    }
    a.social-icon-link:hover {
        color: var(--white-color);
    }
</style>