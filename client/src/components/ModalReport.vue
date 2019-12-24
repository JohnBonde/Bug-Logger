<template>
    <div>
        <button type="button" @click.prevent="show" class="btn btn-outline-dark">Report</button>
        <modal name="modal-report" @opened="opened">
            <form @submit.prevent="createBug">
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" rows="3" id="description" v-model="newBug.description" ref="description"></textarea>
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" v-model="newBug.title">
                </div>
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" v-model="newBug.reportedBy">
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newBug: {
                description: "",
                title: "",
                reportedBy: ""
            }
        }
    },
    methods: {
        show() {
            this.$modal.show('modal-report')
        },
        opened() {
            this.$refs.description.focus()
        },
        hide() {
            this.$modal.hide('modal-report')
        },
        createBug() {
            let bug = {...this.newBug}
            this.$store.dispatch("createBug", bug)
            this.newBug = {
                description: "",
                title: "",
                reportedBy: ""
            }
            this.$modal.hide('modal-report')
        }
    }
}
</script>