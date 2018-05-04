<template>
 <form @submit.prevent="saveProduct">
  <div class="lg-5 sm-12">
    <h1>whooptity scooptity poop</h1>
    <div class="form-group">
      <label>Name</label>
      <input type="text"
        placeholder="Name"
        v-model="model.name"
        v-validate="'required'"
        name="name" :class="{ 'form-control': true, 'error': errors.has('name') }"
      />
      <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
    </div>
  </div>
  <div class="lg-5 sm-12">
    <div class="form-group">
      <label>Price</label>
      <input type="number"
        placeholder="Price"
        v-model="model.price"
        v-validate="'required'"
        name="price" :class="{ 'form-control': true, 'error': errors.has('price') }"
      />
      <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
    </div>
  </div>
  <div class="lg-5 sm-12">
    <div class="form-group">
      <label>Manufacturer</label>
      <select type="text"
        v-model="model.manufacturer"
        v-validate="'required'"
        name="manufacturer" :class="{ 'form-control': true, 'error': errors.has('manufacturer') }">
        <template v-for="manufacturer in manufacturers">
          <option
            :key="manufacturer._id"
            :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">
            {{ manufacturer.name }}
          </option>
        </template>
      </select>
    </div>
  </div>
 </form>
</template>

<style lang="scss" scoped>
  .form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
