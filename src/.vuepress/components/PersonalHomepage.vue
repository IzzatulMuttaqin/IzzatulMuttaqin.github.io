<template>
    <div class="title__container">
        <h1 class="title">Hallo, I'm
            <span class="title__header__name">
                Izzatul Muttaqin
            </span>
        </h1>
        <p class="title__description">
            I'm a front-end software engineer
        </p>
        <p class="title__description">
            Currently working at 
            <a class="title__link" href="https://www.pinhome.id/pages/tentang-kami/">
                Pinhome
            </a>
        </p>
    </div>
</template>

<style>
@keyframes title__animation {
    0% {
        opacity: 0;
        transform: translateY(-100vh);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes description__animation {
    0% {
        opacity: 0;
        transform: translateY(200vh);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.title__container {
    padding: 0 16px;
}

.title {
    animation-name: title__animation;
    animation-duration: 0.5s;
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 300;
    opacity: 0;
    animation-fill-mode: forwards;
}

.title__header__name {
    font-weight: bold;
}

.title__description {
    animation-name: description__animation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    color: var(--grey-subtle);
    font-size: 1rem;
    font-weight: 300;
    opacity: 0;
    margin: 0;
}

.title__link {
    font-weight: inherit;
    font-size: inherit;
    color: var(--white-color);
}

@media screen and (min-width: 768px){
    .title {
        font-size: 6rem;
    }

    .title__description {
        font-size: 2rem;
    }

    .title__container {
        max-width: 50%;
        margin: 25vh auto;
    }
}
</style>