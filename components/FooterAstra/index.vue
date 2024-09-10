<template>
    <footer class="footer">
        <div class="content">
            <div
                class="footer__logo"
                @click="toMenuItemFooter('https://az-most.ru/', 'Лого в футере')"
            >
                <svg
                    height="40"
                    viewBox="0 0 140 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="56.8574" cy="6.57153" r="2" fill="#FAEBED" />
                    <circle cx="56.0003" cy="12" r="1.14286" fill="#FAEBED" />
                    <circle cx="52.5716" cy="12" r="1.14286" fill="#FAEBED" />
                    <circle cx="49.1429" cy="13.7144" r="1.14286" fill="#FAEBED" />
                    <circle cx="47.429" cy="16.5716" r="1.14286" fill="#FAEBED" />
                    <circle cx="47.429" cy="20" r="1.14286" fill="#FAEBED" />
                    <circle cx="49.1429" cy="22.8572" r="1.14286" fill="#FAEBED" />
                    <circle cx="52.0003" cy="24" r="1.14286" fill="#FAEBED" />
                    <circle cx="54.8567" cy="25.7144" r="1.14286" fill="#FAEBED" />
                    <circle cx="56.5716" cy="28.5716" r="1.14286" fill="#FAEBED" />
                    <circle cx="56.5716" cy="31.4287" r="1.14286" fill="#FAEBED" />
                    <circle cx="54.8567" cy="34.2859" r="1.14286" fill="#FAEBED" />
                    <circle cx="52.0003" cy="36" r="1.14286" fill="#FAEBED" />
                    <circle cx="48.0003" cy="36.5716" r="1.14286" fill="#FAEBED" />
                    <circle cx="50" cy="7.14307" r="2" fill="#FAEBED" />
                    <circle cx="44.8574" cy="10.5715" r="2" fill="#FAEBED" />
                    <circle cx="42.5713" cy="15.1431" r="2" fill="#FAEBED" />
                    <circle cx="42" cy="20.8572" r="2" fill="#FAEBED" />
                    <circle cx="44.8574" cy="26" r="2" fill="#FAEBED" />
                    <circle cx="49.4287" cy="29.4287" r="2" fill="#FAEBED" />
                    <circle cx="54.5713" cy="18.5715" r="2" fill="#FAEBED" />
                    <circle cx="59.1426" cy="22" r="2" fill="#FAEBED" />
                    <circle cx="62" cy="26.5715" r="2" fill="#FAEBED" />
                    <circle cx="61.4287" cy="32.8572" r="2" fill="#FAEBED" />
                    <circle cx="59.1426" cy="37.4287" r="2" fill="#FAEBED" />
                    <circle cx="54" cy="40.8572" r="2" fill="#FAEBED" />
                    <circle cx="47.1426" cy="41.4287" r="2" fill="#FAEBED" />
                    <path
                        d="M5.56934 36V34.3457L6.70801 34.1846L11.8857 20.3594H14.5176L19.6309 34.1846L20.7695 34.3457V36H15.7959V34.3457L16.9131 34.1416L16.0859 31.6816H10.2637L9.41504 34.1416L10.543 34.3457V36H5.56934ZM10.9727 29.6084H15.3877L13.3574 23.8184L13.2178 23.3994H13.1533L13.0029 23.8398L10.9727 29.6084ZM22.2197 36V34.1309L30.0615 22.4541H24.7441L24.5186 24.4629H22.4131L22.4883 20.3594H33.3164V22.1748L25.4424 33.916H31.3936L31.6191 31.8213H33.7139L33.6064 36H22.2197Z"
                        fill="#FAEBED"
                    />
                    <path
                        d="M69.7734 36V34.3457L71.4707 34.0234V22.3467L69.7734 22.0244V20.3594H71.4707H75.3486L79.9355 31.6709H80L84.4473 20.3594H90.0869V22.0244L88.3789 22.3467V34.0234L90.0869 34.3457V36H83.9746V34.3457L85.7686 34.0234V30.3818L85.79 23.5391L85.7363 23.5283L80.8916 35.6455H78.9258L73.9414 23.5928L73.8877 23.6035L74.0273 30.1992V34.0234L75.8857 34.3457V36H69.7734ZM98.3799 36.2256C97.3415 36.2256 96.4033 36.0322 95.5654 35.6455C94.7275 35.2516 94.0078 34.7002 93.4062 33.9912C92.8118 33.2822 92.3535 32.4443 92.0312 31.4775C91.709 30.5107 91.5479 29.4508 91.5479 28.2979V28.0615C91.5479 26.9157 91.709 25.8594 92.0312 24.8926C92.3535 23.9258 92.8118 23.0879 93.4062 22.3789C94.0078 21.6628 94.7275 21.1113 95.5654 20.7246C96.4033 20.3307 97.3379 20.1338 98.3691 20.1338C99.4362 20.1338 100.392 20.3307 101.237 20.7246C102.082 21.1113 102.802 21.6628 103.396 22.3789C103.991 23.0879 104.446 23.9258 104.761 24.8926C105.076 25.8594 105.233 26.9157 105.233 28.0615V28.2979C105.233 29.4508 105.076 30.5107 104.761 31.4775C104.446 32.4443 103.991 33.2822 103.396 33.9912C102.802 34.7002 102.082 35.2516 101.237 35.6455C100.392 36.0322 99.4398 36.2256 98.3799 36.2256ZM98.3799 34.0771C99.3252 34.0771 100.102 33.8372 100.711 33.3574C101.327 32.8704 101.782 32.1937 102.075 31.3271C102.376 30.4606 102.526 29.4508 102.526 28.2979V28.04C102.526 26.9014 102.376 25.9023 102.075 25.043C101.774 24.1836 101.316 23.5104 100.7 23.0234C100.091 22.5365 99.3145 22.293 98.3691 22.293C97.4668 22.293 96.7113 22.5365 96.1025 23.0234C95.4938 23.5104 95.0355 24.1836 94.7275 25.043C94.4196 25.9023 94.2656 26.9014 94.2656 28.04V28.2979C94.2656 29.4437 94.4196 30.4535 94.7275 31.3271C95.0355 32.1937 95.4938 32.8704 96.1025 33.3574C96.7184 33.8372 97.4775 34.0771 98.3799 34.0771ZM112.71 36.2256C111.643 36.2256 110.651 36.0931 109.734 35.8281C108.818 35.5632 107.926 35.1227 107.06 34.5068V30.9082H109.154L109.498 33.2393C109.878 33.5114 110.343 33.7298 110.895 33.8945C111.453 34.0592 112.058 34.1416 112.71 34.1416C113.347 34.1416 113.881 34.0521 114.311 33.873C114.747 33.6868 115.08 33.429 115.31 33.0996C115.539 32.7702 115.653 32.3799 115.653 31.9287C115.653 31.5133 115.553 31.1445 115.353 30.8223C115.152 30.5 114.819 30.2135 114.354 29.9629C113.888 29.7051 113.258 29.4688 112.463 29.2539C111.296 28.9388 110.318 28.5664 109.53 28.1367C108.75 27.707 108.159 27.1914 107.758 26.5898C107.364 25.9883 107.167 25.2793 107.167 24.4629C107.167 23.625 107.393 22.8838 107.844 22.2393C108.302 21.5947 108.936 21.0863 109.745 20.7139C110.554 20.3415 111.489 20.1517 112.549 20.1445C113.709 20.1302 114.733 20.2806 115.621 20.5957C116.516 20.9108 117.272 21.3226 117.888 21.8311V25.1934H115.836L115.449 23.002C115.156 22.7943 114.772 22.6188 114.3 22.4756C113.834 22.3252 113.283 22.25 112.646 22.25C112.101 22.25 111.621 22.3395 111.206 22.5186C110.791 22.6976 110.465 22.9518 110.229 23.2812C109.992 23.6035 109.874 23.9902 109.874 24.4414C109.874 24.8353 109.978 25.179 110.186 25.4727C110.393 25.7663 110.741 26.0348 111.228 26.2783C111.715 26.5146 112.373 26.7546 113.204 26.998C114.901 27.4492 116.187 28.0723 117.061 28.8672C117.934 29.6621 118.371 30.6755 118.371 31.9072C118.371 32.7738 118.135 33.5329 117.662 34.1846C117.197 34.8291 116.538 35.3304 115.686 35.6885C114.84 36.0465 113.849 36.2256 112.71 36.2256ZM123.57 36V34.3457L125.278 34.0234V22.4326H122.131L121.895 24.4307H119.864V20.3594H133.41V24.4307H131.369L131.133 22.4326H127.985V34.0234L129.693 34.3457V36H123.57Z"
                        fill="#FAEBED"
                    />
                </svg>
            </div>
            <div class="footer__menu-container">
                <div class="footer__search-container">
                    <div class="footer__search-title">
                        Информационный ресурс AZ MOST
                    </div>
                    <div class="footer__search-tip">
                        Сайт предназначен для специалистов здравоохранения
                    </div>
                    <div class="footer__name">
                        ООО «АстраЗенека Фармасьютикалз»
                    </div>
                    <div class="footer__contact">
                        <div class="footer__contact-icon mr-2">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8 1.5C10.6924 1.5 13 3.80761 13 6.5C13 9.19239 8 14.5 8 14.5C8 14.5 3 9.19239 3 6.5C3 3.80761 5.30761 1.5 8 1.5Z"
                                    fill="#830051"
                                />
                                <rect
                                    x="5.5"
                                    y="4"
                                    width="5"
                                    height="5"
                                    rx="2.5"
                                    fill="#1F1F1F"
                                />
                            </svg>
                        </div>
                        <div class="footer__contact-text">
                            123112, г. Москва, <br>1-й Красногвардейский проезд, д.21,
                            <br>стр.1., 30 этаж
                        </div>
                    </div>
                    <div class="footer__contact">
                        <div class="footer__contact-icon mr-2">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.6666 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.63 13.2133 14.6133C11.1619 14.3904 9.19131 13.6894 7.45998 12.5667C5.84919 11.5431 4.48353 10.1774 3.45998 8.56667C2.33329 6.82747 1.63214 4.84733 1.41331 2.78667C1.39665 2.60231 1.41856 2.41651 1.47764 2.24108C1.53673 2.06566 1.63169 1.90446 1.75649 1.76775C1.88128 1.63103 2.03318 1.5218 2.2025 1.44701C2.37183 1.37222 2.55487 1.33351 2.73998 1.33333H4.73998C5.06351 1.33015 5.37717 1.44472 5.62248 1.65569C5.8678 1.86666 6.02803 2.15963 6.07331 2.48C6.15772 3.12004 6.31428 3.74848 6.53998 4.35333C6.62967 4.59195 6.64908 4.85127 6.59591 5.10059C6.54274 5.3499 6.41922 5.57874 6.23998 5.76L5.39331 6.60667C6.34235 8.2757 7.72428 9.65763 9.39331 10.6067L10.24 9.76C10.4212 9.58076 10.6501 9.45723 10.8994 9.40406C11.1487 9.35089 11.408 9.3703 11.6466 9.46C12.2515 9.6857 12.8799 9.84225 13.52 9.92667C13.8438 9.97235 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6666 11.28Z"
                                    fill="#830051"
                                />
                            </svg>
                        </div>
                        <div class="footer__contact-text">
                            <a href="tel:84957995699" class="mb-2 d-block">
                                +7 (495) 799-56-99</a>
                            <a href="tel:84957995699" class="d-block"> +7 (495) 799-56-99</a>
                        </div>
                    </div>
                    <div
                        class="footer__link"
                        @click="
                            toMenuItemFooter('https://astrazeneca.ru/', 'www.astrazeneca.ru')
                        "
                    >
                        www.astrazeneca.ru
                    </div>
                </div>
                <div class="footer__menu-col">
                    <div class="footer__menu-title">
                        Ресурсы
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://www.astrazeneca.ru/astrazeneca_in_the_world/our_company.html',
                                'О компании «АстраЗенека»'
                            )
                        "
                    >
                        О компании «АстраЗенека»
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="toMenuItemFooter('https://az-most.ru/contacts', 'Контакты')"
                    >
                        Контакты
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://www.astrazeneca.ru/confidentiality.html',
                                'Политика конфиденциальности'
                            )
                        "
                    >
                        Политика конфиденциальности
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://az-most.ru/all-rights-reserved',
                                'Правовая информация'
                            )
                        "
                    >
                        Правовая информация
                    </div>
                    <div
                        class="footer__menu-item CookieReportsLink"
                        @click="
                            toMenuItemFooter(
                                'policy.cookiereports.com/49643d2b-ru.html',
                                'Политика использования файлов cookie'
                            )
                        "
                    >
                        Политика использования файлов cookie
                    </div>
                </div>
                <div class="footer__menu-col">
                    <div class="footer__menu-title">
                        Быстрые ссылки
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://az-most.ru/report-adverse-event',
                                'Сообщить о нежелательном явлении'
                            )
                        "
                    >
                        Сообщить о нежелательном явлении
                    </div>
                    <!-- <router-link :to="{ name: 'ComplaintDrug' }" class="footer__menu-item"
    >Сообщить о рекламации</router-link
    > -->
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://careers.astrazeneca.com/locations/russia/rus',
                                'Карьерные возможности'
                            )
                        "
                    >
                        Карьерные возможности
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://az-most.ru/report-a-drug-claim',
                                'Сообщить о претензии на лекарственный препарат'
                            )
                        "
                    >
                        Сообщить о претензии на лекарственный препарат
                    </div>
                    <div
                        class="footer__menu-item"
                        @click="
                            toMenuItemFooter(
                                'https://az-most.ru/medical-info',
                                'Служба Медицинской Информации'
                            )
                        "
                    >
                        Служба Медицинской Информации
                    </div>
                </div>
            </div>
            <div v-if="false" class="footer__text">
                Материал предназначен для широкой аудитории. Информация, представленная
                в данном разделе, не представляет собой и не заменяет консультацию
                врача. Необходимо получить консультацию врача.
                <br>
                <br>
                Изображения задействованных моделей используются исключительно с целью
                иллюстрации и не свидетельствуют об одобрении ими деятельности или
                использовании ими продукции/услуги/торговой марки.
            </div>
            <div class="footer__copyright">
                <div
                    class="footer__copyright-logo"
                    @click="
                        toMenuItemFooter('https://az-most.ru/', 'Логотип копирайт')
                    "
                >
                    <svg
                        width="145"
                        height="35"
                        viewBox="0 0 145 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <rect
                            width="145"
                            height="35"
                            transform="translate(0 0.000244141)"
                            fill="url(#pattern_footer)"
                        />
                        <defs>
                            <pattern
                                id="pattern_footer"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlink:href="#image0_1543_4853"
                                    transform="translate(0 0.00132275) scale(0.00462963 0.0191799)"
                                />
                            </pattern>
                            <image
                                id="image0_1543_4853"
                                width="216"
                                height="52"
                                xlink:href="data:image/png;base64,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"
                            />
                        </defs>
                    </svg>
                </div>
                © ООО «АстраЗенека Фармасьютикалз», {{ getYear }}.
                <span class="ml-md-0 ml-auto mt-md-4 mt-0">
                    Номер одобрения <span>RU-21455</span>
                    <br class="d-md-none">
                    Дата одобрения  <span>30.07.2024</span> <br class="d-md-none">
                    Дата истечения 29.07.2026
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBlock',
    computed: {
        getYear () {
            const date = new Date()
            return date.getFullYear()
        }
    },
    methods: {
        toMenuItemFooter (to, first, e) {
            if (typeof ym !== 'undefined') {
                // eslint-disable-next-line no-undef
                ym(91468266, 'reachGoal', 'footer menu click', {
                    'footer menu click': {
                        'menu element name': first,
                        ...this.$root.ymFields
                    }
                })
            }
            if (typeof to !== 'object') {
                if (to.includes('http')) {
                    window.open(to, '_blank')
                }
            } else {
                this.$router.push(to).catch(() => {})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-top: auto;
    padding: 32px 0;
    background-color: #1f1f1f;

    .content {
        @include wrapper;
    }

    .mr-2 {
        margin-right: rem(8);
    }

    .mb-2 {
        margin-bottom: rem(8);
    }

    .ml-auto {
        margin-left: auto;
    }

    .mt-0, .mt-n-0 {
        margin-top: 0;
    }

    .d-block {
        display: block;
    }

    @media (min-width: 1024px) {
        .d-md-none {
            display: none !important;
        }
    }

    @media screen and (max-width: 1220px) {
        .ml-md-0, .ml-md-n-0 {
            margin-left: 0 !important;
        }

        .mt-md-4 {
            margin-top: 16px !important;
        }
    }

    a {
        color: inherit;
    }

    &__logo {
        cursor: pointer;
        display: block;
        margin-bottom: 24px;
    }

    &__name {
        margin-bottom: 16px;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #b2b4b4;
    }

    &__link {
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-decoration-line: underline;
        color: #ffffff;

        &:hover {
            color: #b2b4b4;
        }
    }

    &__contact {
        margin-bottom: 16px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #b2b4b4;
    }

    &__text {
        margin-bottom: 32px;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #656969;
    }

    &__menu-container {
        margin-bottom: 51px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 1220px) {
            flex-wrap: wrap;
        }
    }

    &__search {
        &-container {
            padding: 24px 24px 24px 0;

            @media screen and (max-width: 1220px) {
                padding: 0;
                margin-bottom: 56px;
                width: 100%;
            }

            @media screen and (max-width: 767px) {
                margin-bottom: 32px;
            }
        }

        &-title {
            margin-bottom: 16px;
            font-family: "Roboto Slab", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
        }

        &-tip {
            margin-top: 16px;
            margin-bottom: 48px;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #656969;
        }
    }

    &__menu {
        &-col {
            border-left: 1px solid #404141;
            padding: 24px 47px 24px 32px;
            flex-shrink: 0;

            @media screen and (max-width: 1220px) {
                padding: 0;
                border: 0;
                margin-right: 50px;

                &:last-child {
                    margin-right: 0;
                }
            }

            @media screen and (max-width: 767px) {
                margin-right: 0;
                margin-bottom: 32px;
                width: 100%;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &-title {
            margin-bottom: 24px;
            font-family: "Roboto Slab", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #656969;
        }

        &-item {
            display: block;
            margin-bottom: 16px;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #f5f6f8;
            transition: 0.3s;
            cursor: pointer;
            &:hover {
                color: #b2b4b4;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    &__copyright {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #656969;

        @media screen and (max-width: 1220px) {
            flex-direction: column;
            align-items: flex-start;
        }

        &-logo {
            cursor: pointer;
            margin-bottom: 3px;
            margin-right: 48px;

            @media screen and (max-width: 1220px) {
                margin-bottom: 23px;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
}
</style>
