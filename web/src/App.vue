<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted, onUnmounted } from "vue";
import PostNUI from "./utils/PostNUI.js";

const visible = ref(false);

const handleEvent = (event) => {
    switch (event.data.action) {
        case "open":
            visible.value = true;
            break;
        case "close":
            visible.value = false;
            break;
    }
};

const handleKeyDown = (event) => {
    if (event.key === "Escape") {
        visible.value = false;
        PostNUI("close", {});
    }
};

onMounted(() => {
    window.addEventListener("message", handleEvent);
    document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener("message", handleEvent);
    document.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
    <HelloWorld v-if="visible" />
</template>
