<template>
    <Teleport v-if="isShow" to="#modals">
        <div :class="$style.modal">
            <div :class="$style.modalOverload" />
            <div :class="$style.modalContent">
                <div :class="$style.modalContentInner">
                    <div :class="$style.modalContentTitle">
                        Ваше имя в игре:
                    </div>
                    <div :class="$style.modalContentInput">
                        <input ref="input" :class="{[$style.error]: isError}" type="text" placeholder="введите никнейм" @keydown="handleKeydown">
                        <div v-if="error" :class="$style.modalContentInputError">
                            {{ error }}
                        </div>
                    </div>
                    <ButtonAction :class="$style.modalContentButton" title="Начать" @handleClick="handleSave" />
                    <div :class="$style.modalContentDoor">
                        <img class="onlyDesktop" src="~/assets/img/intro/door.png">
                        <img class="onlyMobile" src="~/assets/img/intro/door-mobile.jpg">
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport'
import { mapGetters, mapMutations } from 'vuex'
import modal from '~/mixins/modal'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import words from '~/static/banwords.json'

export default {
    name: 'NamePopup',
    components: {
        Teleport,
        ButtonAction
    },
    mixins: [modal],
    data: function () {
        return {
            error: '',
            isError: false,
            incorrectData: words.banwords,
            value: ''
        }
    },
    computed: {
        ...mapGetters({
            bearer: 'bearer'
        })
    },
    methods: {
        isValidation () {
            const value = this.$refs.input.value?.trim()
            let isValid = true

            if (!value.length || value.length < 2 || value.length > 15) {
                this.error = 'Имя должно быть от 2 до 15 символов!'
                isValid = false
            }

            const invalidName = this.incorrectData.some((text) => {
                return value.includes(text)
            })

            if (invalidName) {
                this.error = 'Недопустимое имя для игры!'
                isValid = false
            }

            this.isError = !!this.error.length

            return { isValid, name: value }
        },
        handleKeydown (key) {
            this.error = ''
            this.isError = false

            if (key.keyCode === 13) {
                this.handleSave()
            }
        },
        async handleSave () {
            const { isValid, name } = this.isValidation()

            if (isValid) {
                await this.postUsername(name)

                if (!this.error.length) {
                    this.closeModal()
                }
            }

            setTimeout(() => {
                this.isError = false
            }, 300)
        },

        async postUsername (name) {
            try {
                const res = await this.$axios.post(`${this.$config.baseApiUrl}/api/sim/username/`, {
                    name
                }, {
                    headers: {
                        Authorization: `Bearer ${this.bearer}`
                    }
                })

                if (res.status === 200 || res.status === 201) {
                    this.setName(name)
                }
            } catch (e) {
                if (e.response.status === 400 && Array.isArray(e.response?.data?.name) && e.response.data.name.includes('Name for this user already exists.')) {
                    try {
                        const resName = await this.$axios.get(`${this.$config.baseApiUrl}/api/sim/username/`, {
                            headers: {
                                Authorization: `Bearer ${this.bearer}`
                            }
                        })

                        if (resName.status === 200) {
                            this.setName(resName.data.name)
                        }
                    } catch (e) {
                        this.error = 'Что-то пошло не так, поробуйте еще раз!'
                        this.isError = true
                    }
                } else {
                    this.error = 'Что-то пошло не так, поробуйте еще раз!'
                    this.isError = true
                }
            }
        },
        ...mapMutations({
            setName: 'setUserName'
        })
    }
}
</script>

<style module lang="scss">
    .modal {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100svh;

        &Overload {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(#000, 0.8);
        }

        &Content {
            position: relative;
            width: rem(729);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @include mobile {
                width: calc(100% - rem(24));
            }

            &Inner {
                padding: rem(36) rem(27) rem(27);
                color: $c-black;
                background: $c-white;

                @include mobile {
                    padding: rem(30) rem(20) rem(308);
                }
            }

            &Title {
                font-size: rem(35);
                line-height: 1.2;
                font-weight: $fw-bold;
            }

            &Input {
                margin-top: rem(20);
                position: relative;
                width: rem(407);

                @include mobile {
                    margin-top: rem(10);
                    width: 100%;
                }

                input {
                    border-radius: rem(40);
                    border: 1px solid $c-red;
                    padding: rem(15) rem(30);
                    font-size: rem(20);
                    line-height: 1.2;
                    font-weight: $fw-medium;
                    width: 100%;

                    @include mobile {
                        margin-top: rem(10);
                    }

                    &::placeholder {
                        color: rgba($c-black, 0.4);
                    }

                    &.error {
                        animation: shake 0.3s;

                        @keyframes shake {
                            0% { transform: translateX(0) }
                            25% { transform: translateX(5px) }
                            50% { transform: translateX(-5px) }
                            75% { transform: translateX(5px) }
                            100% { transform: translateX(0) }
                        }
                    }
                }

                &Error {
                    position: absolute;
                    bottom: rem(-10);
                    left: 0;
                    transform: translate(0, 100%);
                    color: $c-red;
                    font-size: rem(12);
                    line-height: 1.2;
                    font-weight: $fw-medium;
                }
            }

            &Button {
                margin-left: 0;
                margin-top: rem(91);

                @include mobile {
                    position: absolute;
                    bottom: rem(-46);
                    left: 0;
                    transform: translate(0, 100%);
                    width: 100%;
                }
            }

            &Door {
                position: absolute;
                right: 0;
                bottom: 0;
                width: rem(339);

                @include mobile {
                    margin-top: rem(10);
                    width: 100%;
                    max-width: rem(366)
                }
            }
        }
    }
</style>
