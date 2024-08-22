<script setup>

</script>

<template>
    <div class="spinner" />
</template>

<style>
.spinner {
    transform: translate(-50%, -50%);
    height: 36px;
    width: 36px;
    box-sizing: border-box;
    background: conic-gradient(
        from 90deg at 50% 50%,
        rgba(255, 255, 255, 0),
        rgba(126, 130, 190, 0.5),
        #2970FF
    );
    border-radius: 56px;
    /* previous code */
    animation: 1s rotate infinite linear;
}
.spinner::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 28px;
    width: 28px;
    background: #fff;
    border-radius: 36px;
}
.spinner::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 4px;
    width: 4px;
    background: #2970FF;
    border-radius: 4px;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>i
