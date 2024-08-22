// import { useDark, useToggle } from '@vueuse/core'
import { reactive } from 'vue'

// export const isDark = useDark()
// export const toggleDarkMode = useToggle(isDark)

export const sidebarState = reactive({
    isOpen: window.innerWidth > 768,
    isHovered: false,
    handleHover(value) {
        if (window.innerWidth < 768) {
            return
        }
        sidebarState.isHovered = value
    },
    handleWindowResize() {
        sidebarState.isOpen = window.innerWidth > 768;
    },
})

export const scrolling = reactive({
    down: false,
    up: false,
})

let lastScrollTop = 0

export const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
        // downscroll
        scrolling.down = true
        scrolling.up = false
    } else {
        // upscroll
        scrolling.down = false
        scrolling.up = true
        if (st == 0) {
            //  reset
            scrolling.down = false
            scrolling.up = false
        }
    }
    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
}

export function transactionFormat() {
    function formatDateTime(date, includeTime = true) {
        // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const formattedDate = new Date(date);

        const day = formattedDate.getDate().toString().padStart(2, '0');
        // const month = months[formattedDate.getMonth()];
        const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
        const year = formattedDate.getFullYear();
        const hours = formattedDate.getHours().toString().padStart(2, '0');
        const minutes = formattedDate.getMinutes().toString().padStart(2, '0');
        const seconds = formattedDate.getSeconds().toString().padStart(2, '0');

        if (includeTime) {
            return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        } else {
            return `${day} ${month} ${year}`;
        }
    }

    function formatDate(date) {
        const formattedDate = new Date(date).toLocaleDateString('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'Asia/Kuala_Lumpur'
        });
        const [year, month, day] = formattedDate.split('-');
        return `${year}/${month}/${day}`;
    }

    function formatTime(date) {
        const options = {
            hour12: false, // Disable AM/PM indicator
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Kuala_Lumpur'
        };

        return new Date(date).toLocaleTimeString('en-CA', options);
    }

    function formatAmount(amount, decimalPlaces = 2) {
        const formattedAmount = parseFloat(amount).toFixed(decimalPlaces);
        const integerPart = formattedAmount.split('.')[0];
        const decimalPart = formattedAmount.split('.')[1];
        const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return decimalPlaces > 0 ? `${integerWithCommas}.${decimalPart}` : integerWithCommas;
    }

    const formatType = (type) => {
        const formattedType = type.replace(/([a-z])([A-Z])/g, '$1 $2');
        return formattedType.charAt(0).toUpperCase() + formattedType.slice(1);
    };

    return {
        formatDateTime,
        formatDate,
        formatAmount,
        formatType,
        formatTime
    };
}

export function generalFormat() {
    const formatRgbaColor = (hex, opacity) => {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return {
        formatRgbaColor
    };
}
