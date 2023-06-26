<script>
    export let title, desc, image, button;
</script>

<section 
    class="form-section section-padding"
    id="section_6"
    style="background-image: url({image});"
>
    <div class="container">
        <div class="row">

            <div class="rsvp-form-wrap">
                <div class="section-title-wrap">
                    <h2 class="section-title">{title}</h2>

                    <div class="section-title-bottom">
                        <span class="section-title-line"></span>
                        <i class="section-title-icon bi-heart-fill"></i>
                        <span class="section-title-line"></span>
                    </div>
                </div>

                <h5>{desc.intro} <span class="text-muted">{desc.main}</span></h5>

                <form class="custom-form rsvp-form" role="form">
                    <div class="row">
                        <div class="top">
                            <input type="text" name="name" id="name" class="form-control" placeholder="Full Name*" required="">
                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email Address*" required="">
                            <select name="guests" class="form-select" id="guests" aria-label="Guests">
                                <option selected="">Number of Guests</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>

                        <div class="bottom">
                            <textarea class="form-control" id="message" name="message" placeholder="Message (Optional)" rows="5"></textarea>
                        </div>

                        <div class="col-lg-3 col-5 mx-auto">
                            <button type="submit" class="form-control">{button}</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    </div>
</section>

<style>
    .form-section {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .rsvp-form-wrap {
        background: var(--white-color);
        border-radius: var(--border-radius-medium);
        padding: 50px;
    }
    h5 {
        margin-bottom: 20px;
    }
    .text-muted {
        --bs-text-opacity: 1;
        color: #6c757d;
    }
    .top {
        display: flex;
        gap: 40px;
    }
    input, select, textarea {
        width: 100%;
    }
    button {
        cursor: pointer;
        background: var(--primary-color);
        border: none;
        color: var(--white-color);
        font-size: var(--p-font-size);
        font-family: var(--title-font-family);
        font-weight: var(--font-weight-bold);
        transition: all 0.3s;
        margin-bottom: 0;
        position: relative;
        overflow: hidden;
    }
    button:hover {
        background: var(--secondary-color);
        border-color: transparent;
    }
</style>