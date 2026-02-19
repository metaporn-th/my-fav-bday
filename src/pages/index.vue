<template>
    <div class="container">
        <div class="title">
            WAYFARER
        </div>
        <div class="desc">
            (เวย์-แฟเรอร์) : นักเดินทางที่ชอบสำรวจและค้นหาสิ่งใหม่ๆ อยู่เสมอ
        </div>
        <button>GO !</button>
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
    background:#FFFFFF;
}
.title {
    font-size: 48px;
    color: #000000;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.desc {
    font-size: 24px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>