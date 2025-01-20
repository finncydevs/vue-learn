<script setup>
import { useTemplateRef, ref, reactive } from "vue";

const notes = reactive([]);
const note = ref("");
const noteInput = useTemplateRef("noteInput");
const notelist = useTemplateRef("noteList");

function addNote() {
  notes.push(note.value);
  note.value = "";
  noteInput.value.focus();
  if (notelist.value) {
    notelist.value.forEach((li) => {
      console.info(li.textContent);
    });
  }
}
</script>

<template>
  <h1>Buat NOte</h1>

  <div>
    <input
      type="text"
      ref="noteInput"
      v-model="note"
      placeholder="tulis note"
    />
    <button @click="addNote">Tambah Note</button>
  </div>

  <h1>Daftar note</h1>
  <ul>
    <li v-for="note in notes" ref="noteList">{{ note }}</li>
  </ul>
</template>
