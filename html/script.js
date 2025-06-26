import { createApp, watch, ref, computed } from "vue";

const $post = async (url, data) => {
    try {
        let result = await fetch(
            `https://skys_forms${url.startsWith("/") ? url : `/${url}`}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        return await result.json();
    } catch (error) {
        console.error("Error in POST request:", error);
        return { success: false, message: "Error en la solicitud" };
    }
};

createApp({
    setup() {
        // This is where you define your variables and functions used in the HTML
        // https://vuejs.org/api/reactivity-core.html#ref

        const inputValue = ref(""); // this will be bound to the input
        const showApp = ref(false); // this will toggle visibility

        const closeApplication = () => {
            $post(`https://${GetParentResourceName()}/closeApp`, {
                inputValue: inputValue.value,
            });
            showApp.value = false;
            inputValue.value = "";
        };

        const handleKeydown = (event) => {
            if (event.key === "Escape") {
                closeApplication();
            }
        };

        // This function is used to watch for state changes and act on them
        // Think like AddEventHandler in lua except we're listening using v-model
        // https://vuejs.org/guide/essentials/watchers.html#deep-watchers
        watch(inputValue, (newValue, oldValue) => {
            console.log(`Input Value Changed: ${oldValue} -> ${newValue}`);
        });

        // This function is used to define computed properties
        // https://vuejs.org/api/reactivity-core.html#computed
        const computedValue = computed(() => {
            // Compute and return a value based on the input value
            return inputValue.value.toUpperCase();
        });

        return {
            inputValue,
            showApp,
            handleKeydown,
            closeApplication,
            computedValue,
        };
    },
    mounted() {
        // This is where you will add your event listeners
        // https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
        document.addEventListener("keydown", this.handleKeydown);

        window.addEventListener("message", (event) => {
            if (event.data.action === "openApp") {
                this.showApp = true;
            }
        });

        this.showApp = true;
    },
    beforeUnmount() {
        // This is where you will remove your event listeners
        // https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
        document.removeEventListener("keydown", this.handleKeydown);
    },
}).mount("#app");
