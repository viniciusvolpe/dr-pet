<style>
    .paddin-panel {
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Cadastro de animais
                    </h1>
                </div>
            </div>
        </section>
        <div class="paddin-panel">
            <label class="label">Name</label>
            <p class="control">
                <input class="input" type="text" placeholder="Text input">
            </p>
            <label class="label">Username</label>
            <p class="control has-icon has-icon-right">
                <input class="input is-success" type="text" placeholder="Text input" value="bulma">
                <i class="fa fa-check"></i>
                <span class="help is-success">This username is available</span>
            </p>
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
                <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
                <i class="fa fa-warning"></i>
                <span class="help is-danger">This email is invalid</span>
            </p>
            <label class="label">Subject</label>
            <p class="control">
            <span class="select">
                <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
            </span>
            </p>
            <label class="label">Message</label>
            <p class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
            </p>
            <p class="control">
            <label class="checkbox">
                <input type="checkbox">
                Remember me
            </label>
            </p>
            <p class="control">
            <label class="radio">
                <input type="radio" name="question">
                Yes
            </label>
            <label class="radio">
                <input type="radio" name="question">
                No
            </label>
            </p>
            <p class="control">
                <button class="button is-primary">Submit</button>
                <button class="button is-link">Cancel</button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return  {};
    }
}
</script>