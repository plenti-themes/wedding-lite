<script>
    export let title, subtitle, checklist, link, image, save_the_date;
</script>

<section id="hero">
    <div class="hero-container" style="background-image: url({image});}">
        <div class="content">

            <h2>{subtitle}</h2>
            <h1>{title}</h1>

            <div class="checklist">
                {#each checklist as item}
                    <p>
                        <i class="bi-check-circle-fill" />
                        {item}
                    </p>
                {/each}
            </div>

            <a href="{link.url}" class="custom-link custom-btn btn mt-4">
                {link.text}
            </a>
        </div>

        <div class="col-lg-3 col-12 save-the-date-wrap mt-auto ms-lg-auto">
            <div class="save-the-date-thumb">
                <h4 class="save-the-date-title">Save the date</h4>

                <div class="save-the-date-body">
                    <span class="date">{save_the_date}</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
    }
    .hero-container {
        background-color: #d9d8d6;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: var(--border-radius-small);
        position: relative;
        overflow: hidden;
        padding: 50px;
        height: calc(90vh - 98px);
        justify-content: flex-end;
        flex-direction: column;
        max-width: 1320px;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
    .content {
        flex: 0 0 auto;
        width: 50%;
    }
    h1, .checklist p {
        color: white;
    }
    h2 {
        color: var(--custom-btn-bg-color);
    }
</style>
