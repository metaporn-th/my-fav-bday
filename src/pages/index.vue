<template>
    <div class="container">
        <div class="title">
            WAYFARER
        </div>
        <div class="desc">
            (เวย์-แฟเรอร์) : นักเดินทางที่ชอบสำรวจและค้นหาสิ่งใหม่ๆ อยู่เสมอ
        </div>
        <button class="start-btn">GO !</button>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background:#000000;

}
.title {
    font-size: 48px;
    color: #ffffff;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
}

.desc {
    font-size: 18px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.start-btn {
    margin-top: 40px;
    padding: 14px 36px;
    font-size: 20px;
    color: #ffffff;
    background: transparent;
    border: 2px solid #ffffff;
    border-radius: 14px;
    cursor: pointer;

    font-family: 'Prompt', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;

    /* glow เบา ๆ */
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.25);

    transition: all 0.3s ease;
}
.start-btn:hover {
    transform: translateY(-6px);
    box-shadow:
        0 10px 25px rgba(255, 255, 255, 0.3),
        0 0 25px rgba(255, 255, 255, 0.6);
    text-shadow: 0 0 14px rgba(255, 255, 255, 0.9);
}
.start-btn:active {
    transform: translateY(-2px);
}

</style>