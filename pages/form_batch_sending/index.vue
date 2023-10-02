<template>
  <div>
    <section>
      <h1>Contact
      </h1>
      <form>
        <div v-if="error" class="error">
          <p v-for="(err, idx) in error" :key="idx">
            {{ err }}
          </p>
        </div>

        <div v-if="submitted">Inquiry submitted.</div>

        <div>
          <dl>
            <dt>Name</dt>
            <dd><input v-model="name" :name=name type="text"></dd>
          </dl>
          <dl>
            <dt>Email</dt>
            <dd><input v-model="from_mail" :name=from_mail type="text"></dd>
          </dl>
          <dl>
            <dt>Messege</dt>
            <dd><textarea v-model="body" :name=body></textarea></dd>
          </dl>
          <dl>
            <dt>Category</dt>
            <dd>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" id="10" value="10" v-model="category" />
                    About Kuroco
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" id="11" value="11" v-model="category" />
                    About KurocoEdge
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" id="12" value="12" v-model="category" />
                    About RCMS
                  </label>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <button @click.prevent="handleOnSubmit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      category: [],
      error: null,
    }
  },
  methods: {
    async handleOnSubmit() {
      // Create payload
      const payload = {
        list: this.category.map(categoryId => ({
          name: this.name,
          email: this.from_mail,
          body: this.body,
          inquiry_category_id: parseInt(categoryId), // Convert category ID to integer
        })),
      };
      // Adjustment of payload when category is not selected
      if (payload.list.length === 0) {
        payload.list.push({
          name: this.name,
          email: this.from_mail,
          body: this.body,
        });
      }
      //Post processing to Kuroco endpoints
      try {
        await this.$axios.$post('/rcms-api/1/message/bulk_upsert', payload);
        this.submitted = true;
        this.error = null;
      } catch (e) {
        this.error = e.response.data.errors;
      }
    }
  }
};
</script>