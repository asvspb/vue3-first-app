app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
        <div class="review-container">
            <h2>Reviews:</h2>
            <ul>
                <li v-for="(_review, _index) in reviews" :key="_index">
                    '{{ _review.name  }}' gave this '{{ _review.rating }}' stars:
                    <br/>
                    "{{ _review.review }}"
                </li>
            </ul>
        </div>
        `,
})