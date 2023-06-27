<script>
    export let title, items, order;
</script>

<section class="contact-section section-bg section-padding" id="section_{order}">
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

            <div class="items">
                {#each items as item}
                    <div class="item">
                        <h4>{item.title}</h4>
                        {#if item?.desc}
                            <p>{@html item.desc}</p>
                        {/if}
                        {#if item?.icons}
                            <ul class="social-icon">
                                {#each item.icons as icon}
                                    <li class="social-icon-item">
                                        <a href="{icon.link}" class="social-icon-link bi-{icon.name}"></a>
                                    </li>    
                                {/each}
                            </ul>
                        {/if}
                    </div>
                {/each}
            </div>

        </div>
    </div>
</section>

<style>
    .items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
    }
    .items :global(a) {
        color: var(--p-color);
        text-decoration: none;
        touch-action: manipulation;
        transition: all 0.3s;
    }
    .items :global(a:hover) {
        color: var(--secondary-color);
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
    }
    a.social-icon-link:hover {
        color: var(--white-color);
    }
    @media (max-width: 649px) {
        .items {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
</style>