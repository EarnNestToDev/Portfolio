import { showToast } from "nextjs-toast-notify";

function Toast(message: string) {
    showToast.info(message, {
        duration: 4000,
        progress: false,
        position: "bottom-center",
        transition: "slideInUp",
        icon: '',
        sound: false,
    });
}

export default Toast