<script>
    export let title, tabs;

    let activeTab = tabs[0].title;
</script>

<section class="people-section section-padding" id="section_4">
    <div class="container">
        <div class="row">

            <div class="section-header">
                <div class="section-title-wrap mb-5">
                    <h2 class="section-title">{title}</h2>

                    <div class="section-title-bottom">
                        <span class="section-title-line"></span>
                        <i class="section-title-icon bi-heart-fill"></i>
                        <span class="section-title-line"></span>
                    </div>
                </div>
            </div>

            <div class="tabs-container">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        {#each tabs as tab}
                            <button class="nav-link{activeTab === tab.title ? ' active' : ''}" on:click={() => activeTab = tab.title}>
                                <h3>{tab.title}</h3>
                            </button>
                        {/each}
                    </div>
                </nav>
            </div>

            <div class="tab-content-container">
                <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade active show" id="nav-groomsmen" role="tabpanel" aria-labelledby="nav-groomsmen-tab">
                        <div class="row">
                            {#each tabs as tab}
                                {#if tab.title === activeTab}
                                    {#each tab.items as item}
                                        <div class="image-container">
                                            <div class="people-thumb image-hover-thumb">
                                                <img src="{item.image.src}" class="people-image img-fluid" alt="{item.image.alt}">
                                            </div>
                                        </div> 

                                        <div class="content-container">
                                            <div class="section-block">
                                                <div class="name-title">
                                                    <h4 class="name">{item.name}</h4>
                                                    <span class="title">{item.title}</span>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div> 
                                    {/each}
                                {/if}
                            {/each}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>

<style>
    .section-header {
        margin-bottom: 40px;
    }
    .tabs-container {
        flex: 0 0 auto;
        width: 25%;
        margin-right: auto;
    }
    .nav-tabs {
        border-bottom: 0;
        margin-top: 20px;
    }
    .nav-tabs .nav-link {
        border-radius: 0;
        border: 0;
        border-right: 2px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        width: 100%;
        margin-bottom: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        transition: all 0.3s ease-in-out;
        position: relative;
        display: block;
        text-align: left;
        background-color: transparent;
        cursor: pointer;
    }
    .nav-link.active h3,
    .nav-link:hover h3 {
        color: var(--primary-color);
    }
    .nav-tabs .nav-link.active {
        border-color: var(--border-color);
        border-right-color: var(--secondary-color);
    }
    .nav-tabs .nav-link::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 19px;
        height: 19px;
        text-indent: -9999px;
        /*
        background: transparent;
        border-top-color: var(--secondary-color);
        border-left-color: var(--secondary-color);
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        */
        transition: all 250ms ease-in-out;
        text-decoration: none;
        color: transparent;
        top: 50%;
        right: -11px;
        transform: translate(0, -50%) rotate(135deg);
    }
    .nav-tabs .nav-link.active::after {
        background: var(--white-color);
        border-left: 2px solid var(--secondary-color);
        border-top: 2px solid var(--secondary-color);
    }
    .tab-content-container {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    .image-container {
        flex: 0 0 auto;
        width: 50%;
    }
    .image-hover-thumb {
        border-radius: var(--border-radius-medium);
        position: relative;
        overflow: hidden;
        margin-bottom: 24px;
    }
    img {
        border-radius: var(--border-radius-small);
        display: block;
        transition: all 0.5s;
        max-width: 100%;
        height: auto;
    }
    .content-container {
        flex: 0 0 auto;
        width: 50%;
    }
    .name-title {
        display: flex;
        gap: 5px;
        align-items: center;
    }
    .title {
        font-weight: var(--font-weight-light);
        text-transform: uppercase;
    }
</style>