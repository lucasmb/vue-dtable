<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, idx) in headers"
            :key="idx"
            :class="[
              {
                sortable: header.sortable,
                none: header.sortable && header.sortType === 'none',
                desc: header.sortable && header.sortType === 'desc',
                asc: header.sortable && header.sortType === 'asc'
              }
            ]"
            @click="headerClicked"
          ></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

/**
 * Header was clicked
 */
const headerClicked = () => {
  return
}
</script>

<style lang="scss" scoped></style>
