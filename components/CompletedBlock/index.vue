<template>
    <section :class="$style.section">
        <div :class="$style.bg">
            <div :class="$style.bgInner">
                <img class="onlyDesktop" src="~/assets/img/bg-completed.jpg">
                <img class="onlyMobile" src="~/assets/img/bg-completed-mobile.jpg">
            </div>
        </div>
        <div :class="$style.man">
            <img class="onlyDesktop" src="~/assets/img/completed-doc.png">
            <img class="onlyMobile" src="~/assets/img/completed-doc-mobile.png">
        </div>
        <div :class="$style.content">
            <div :class="$style.contentInner">
                <div :class="$style.header">
                    <div :class="[$style.headerCaption, 'onlyDesktop']">
                        Путешествие окончено
                    </div>
                    <div :class="$style.headerTitle">
                        Коллега, вы верно ответили на все вопросы.
                    </div>
                    <div :class="$style.headerDescription">
                        Нас ждут новые приключения!<br>
                        Прямо сейчас мы можем отправиться по другому не менее увлекательному маршруту!
                    </div>
                </div>
                <div :class="$style.footer">
                    <div :class="[$style.footerProgress, 'onlyDesktop']">
                        <div :class="$style.footerProgressTitle">
                            Вы посетили:
                        </div>
                        <ProgressBar :way="currentTypeWay" :progress="6" />
                    </div>
                    <ButtonAction :class="$style.footerButton" title="Пройти следующий квест" @handleClick="nextWay" />
                </div>
            </div>
        </div>
        <CompletedPopup :is-show="isShow" @handleClosed="closePopup" />
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ProgressBar from '~/components/common/ProgressBar/index.vue'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import CompletedPopup from '~/components/CompletedBlock/components/CompletedPopup/index.vue'

export default {
    name: 'CompletedBlock',
    components: {
        CompletedPopup,
        ButtonAction,
        ProgressBar
    },
    data: function () {
        return {
            isShow: false
        }
    },
    computed: {
        ...mapGetters({
            currentTypeWay: 'currentTypeWay'
        })
    },
    mounted () {
        this.isShow = true
        this.end()
    },
    methods: {
        closePopup () {
            this.isShow = false
        },
        ...mapMutations({
            nextWay: 'nextWay',
            end: 'end'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .bg {
        @include absoluteBlock;

        z-index: $zi-bg;

        &Inner {
            position: relative;
            width: 100%;
            height: 100%;

            img {
                @include absoluteCoverImg();

                @include mobile {
                    object-position: bottom;
                }
            }
        }
    }

    .man {
        position: absolute;
        bottom: 0;
        right: 0;
        pointer-events: none;
        z-index: $zi-content;
        width: rem(809);

        @include mobile {
            width: 100%;
        }
    }

    .content {
        position: relative;
        z-index: $zi-content;
        color: $c-white;
        height: 100%;

        @include wrapper;

        &Inner {
            padding: rem(130) rem(0) rem(86);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: rem(418);
            height: 100%;

            @include mobile {
                padding: rem(70) rem(0) rem(30);
                width: 100%;
            }
        }
    }

    .header {
        &Caption {
            background: rgba($c-white, 0.2);
            padding: rem(10);
            width: fit-content;

            @include text;
        }

        &Title {
            margin-top: rem(10);

            @include header-small;

            @include mobile {
                font-size: rem(30);
                margin-top: 0;
            }
        }

        &Description {
            margin-top: rem(12);

            @include text;

            @include mobile {
                font-size: rem(16);
                margin-top: rem(5);
            }
        }
    }

    .footer {
        &Progress {
            opacity: 0.7;

            &Title {
                margin-bottom: rem(12);

                @include text;
            }
        }

        &Button {
            margin-top: rem(28 + 28);
            margin-left: 0;

            @include mobile {
                margin-top: 0;
                width: 100%;
                margin-right: 0;
            }
        }
    }
</style>
