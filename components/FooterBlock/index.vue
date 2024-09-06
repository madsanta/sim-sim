<template>
    <footer :class="$style.section">
        <div :class="$style.wrapper">
            <div :class="$style.block">
                <div :class="$style.blockTitle">
                    Проект подготовлен при поддержке:
                </div>
                <div :class="$style.blockLogoAstra">
                    <img src="~/assets/img/logo-astra.png">
                </div>
                <div :class="$style.blockDescription">
                    Информация, размещенная на сайте, предназначена только для специалистов с медицинским или фармацевтическим образованием и может быть использована только в профессиональной деятельности.
                </div>
                <div :class="$style.blockCaption">
                    Номер одобрения: RU-21008, Дата одобрения: 03.05.2024 Дата истечения: 03.05.2026
                </div>
            </div>
            <div :class="$style.block">
                <nav :class="$style.blockMenu">
                    <a href="https://astrazeneca.ru/confidentiality.html" target="_blank">
                        Политика конфиденциальности
                    </a>
                    <a href="https://az-most.ru/medication/Symbicortturbuhaler" target="_blank">
                        О препарате
                    </a>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBlock'
}
</script>

<style module lang="scss">
    .section {
        background-color: $c-black;
        height: rem(116);

        @include mobile {
            height: rem(176);
        }
    }

    .wrapper {
        padding-top: rem(30);
        padding-bottom: rem(28);
        display: flex;
        justify-content: space-between;

        @include wrapper;

        @include mobile {
            padding-top: rem(10);
            padding-bottom: rem(10);
            flex-wrap: wrap;
        }
    }

    .block {
        display: flex;
        flex: 0 0 auto;
        justify-content: space-between;
        flex-wrap: wrap;
        color: $c-white;
        width: rem(732);

        @include mobile {
            width: 100%;
        }

        &:last-child {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;

            @include mobile {
                flex-direction: row;
                align-items: flex-start;
            }
        }

        &Title {
            font-size: rem(15);
            line-height: 1.3;
            font-weight: $fw-bold;
            width: rem(155);

            @include mobile {
                margin-top: rem(13);
                font-size: rem(12);
                line-height: 1.2;
                width: auto;
            }
        }

        &LogoAstra {
            margin-top: rem(4);
            margin-left: rem(41);
            width: rem(122);

            @include mobile {
                margin-top: 0;
                margin-left: 0;
                width: rem(92);
            }
        }

        &Description {
            font-size: rem(9);
            line-height: 1.3;
            font-weight: $fw-medium;
            margin-top: rem(4);
            margin-left: rem(48);
            width: rem(366);

            @include mobile {
                margin-top: rem(4);
                margin-left: 0;
                font-size: rem(10);
                width: 100%;
                opacity: 0.7;
            }
        }

        &Caption {
            font-size: rem(9);
            line-height: 1.3;
            font-weight: $fw-medium;
            margin-top: rem(6);
            opacity: 0.5;

            @include mobile {
                margin-top: rem(5);
                white-space: nowrap;
            }
        }

        &Menu {
            @include mobile {
                margin-top: rem(7);
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
            }

            a {
                text-decoration: underline;
                color: $c-white;
                font-size: rem(9);
                line-height: 1.3;
                font-weight: $fw-semiBold;
                margin-left: rem(40);
                transition: opacity 0.2s;

                @include mobile {
                    margin-top: rem(5);
                    font-size: rem(12);
                    font-weight: $fw-bold;
                    margin-left: 0;
                    opacity: 0.7;

                    &:nth-child(1) {
                        width: rem(52);
                    }

                    &:nth-child(2) {
                        width: rem(130);
                    }

                    &:nth-child(3) {
                        width: rem(76);
                    }
                }

                &:first-child {
                    margin-left: 0;
                }

                &:hover {
                    opacity: 0.7;
                }
            }
        }

        &LogoDesign {
            margin-top: rem(9);
            width: rem(169);

            @include mobile {
                margin-top: rem(6);
            }
        }
    }
</style>
