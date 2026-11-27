const Flash = {
    mounted() {
        this.scheduleClear()
    },
    updated() {
        this.scheduleClear()
    },
    destroyed() {
        clearTimeout(this.timer)
    },
    scheduleClear() {
        clearTimeout(this.timer)

        // Skip connection status flashes (client-error / server-error)
        if (this.el.id === "client-error" || this.el.id === "server-error") return

        const delay = parseInt(this.el.dataset.autoDismiss || "5000", 10)
        const kind = this.el.dataset.kind

        this.timer = setTimeout(() => {
        // Optional: trigger smooth Tailwind fade-out before removing
        this.el.style.transition = "opacity 300ms ease-out"
        this.el.style.opacity = "0"

        setTimeout(() => {
            this.pushEvent("close-flash", { id: this.el.id })
        }, 300)
        }, delay)
    }
}