<template>
    <div class="header">
        <div class="content_wrapper">
            <div class="avatar">
                <img width="64" height="64" alt="" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{ seller.name }}</span>
                </div>
                <div class="description">{{ seller.description }}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="supports" v-if="seller.supports">
                    <icon :class="classMap[seller.supports[0].type]"></icon>
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports" @click="showDetail">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin_wrapper" @click="showDetail">
            <span class="bulletin_title"></span><span class="bulletin_text">{{ seller.bulletin }}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" alt="" width="100%" height="100%">
        </div>
        <transition name="fade">
            <div class="detail" v-show="detailShow">
                <div class="detail_wrapper clearfix">
                    <div class="detail_main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="star_wrapper">
                            <star :size="48" :score="seller.score"></star>
                        </div>
                        <v-title></v-title>
                        <ul v-if="seller.supports" class="supports">
                            <li v-for="(item, index) in seller.supports" class="supports_item" :key="index">
                                <icon :class="classMap[item.type]"></icon>
                                <!-- <span class="icon" :class="classMap[item.type]"></span> -->
                                <span class="text">{{item.description}}</span>
                            </li>
                        </ul>
                        <v-title :text="title_bottom"></v-title>
                        <div class="bulletin">
                            <p class="content">{{seller.bulletin}}</p>
                        </div>
                    </div>

                </div>
                <div class="detail_close" @click="hideDetail">
                    <i class="icon-close"></i>
                </div>
            </div>
        </transition>

    </div>
</template>

<script type="text/ecmascript-6">
import star from 'components/star/star';
import title from 'components/title/title';
import icon from 'components/icon/icon';
export default {
    props: {
        seller: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            detailShow: false,
            title_bottom: '商家公告'
        };
    },
    methods: {
        showDetail() {
            this.detailShow = true;
        },
        hideDetail() {
            this.detailShow = false;
        }
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
        star,
        'v-title': title,
        icon
    }
};
</script>

<style lang="scss">@import "../../common/sass/mixin.scss";
.header {
    position: relative;
    color: #fff;
    overflow: hidden;
    background-color: rgba(7,17,27,0.5);
    .content_wrapper {
        position: relative;
        padding: 24px 12px 18px 24px;

        font-size: 0;
        .avatar {
            display: inline-block;
            vertical-align: top;
            img {
                border-radius: 2px;
            }
        };
        .content {
            display: inline-block;
            margin-left: 16px;

            .title {
                margin: 2px 0 8px;
                .brand {
                    display: inline-block;
                    vertical-align: top;
                    width: 30px;
                    height: 18px;
                    @include bg-image( 'brand');
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                }
                .name {
                    margin-left: 6px;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                }
            }
            .description {
                margin-bottom: 10px;
                line-height: 12px;
                font-size: 12px;
            }
            .supports {
                .icon {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background-size: 12px;
                    background-repeat: no-repeat;
                    &.decrease {
                        @include bg-image( 'decrease_1');
                    }
                    &.discount {
                        @include bg-image( 'discount_1');
                    }
                    &.guarantee {
                        @include bg-image( 'guarantee_1');
                    }
                    &.invoice {
                        @include bg-image( 'invoice_1');
                    }
                    &.special {
                        @include bg-image( 'special_1');
                    }
                }
                .text {
                    line-height: 12px;
                    vertical-align: top;
                    font-size: 10px;
                }
            }
        }
        .support-count {
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            border-radius: 14px;
            background-color: rgba(0,0,0,.2);
            text-align: center;
            .count {
                vertical-align: top;
                font-size: 10px;
            };
            .icon-keyboard_arrow_right {
                margin-left: 2px;
                line-height: 24px;
                font-size: 10px;
            }
        }
    }
    .bulletin_wrapper {
        position: relative;
        height: 28px;
        line-height: 28px;
        padding-left: 12px;
        padding-right: 22px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: rgba(7,17,27,0.2);
        .bulletin_title {
            display: inline-block;
            vertical-align: top;
            margin-top: 8px;
            width: 22px;
            height: 12px;
            @include bg-image( 'bulletin');
            background-size: 22px 12px;
            background-repeat: no-repeat;
        };
        .bulletin_text {
            vertical-align: top;
            margin: 0 4px;
            font-size: 10px;
        };
        .icon-keyboard_arrow_right {
            position: absolute;
            font-size: 10px;
            right: 12px;
            top: 8px;
        }
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
    }
    .detail {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
        // opacity: 1;
        background-color: rgba(7,17,27,0.8);
        backdrop-filter:blur(10px);
        &.fade-enter-active,
        &.fade-leave-active {
            transition: all 0.3s;
        };
        &.fade-enter,
        &.fade-leave-active {
            opacity: 0;
            background-color: rgba(7,17,27,0);

        }
        .detail_wrapper {
            min-height: 100%;
            width: 100%;
        }
        .detail_main {
            margin-top: 64px;
            padding-bottom: 64px;
            .name {
                line-height: 16px;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
            };
            .star_wrapper {
                margin-top: 18px;
                padding: 2px 0;
                text-align: center;
            };

            .supports {
                width: 80%;
                margin: 0 auto;
                .supports_item {
                    padding: 0 12px;
                    margin-bottom: 12px;
                    font-size: 0;
                    &:last-child {
                        margin-bottom: 0;
                    };
                    .icon {
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        vertical-align: top;
                        margin-right: 6px;
                        font-size: 16px;
                        background-size: 16px 16px;

                        background-repeat: no-repeat;
                        &.decrease {
                            @include bg-image( 'decrease_2');
                        }
                        &.discount {
                            @include bg-image( 'discount_2');
                        }
                        &.guarantee {
                            @include bg-image( 'guarantee_2');
                        }
                        &.invoice {
                            @include bg-image( 'invoice_2');
                        }
                        &.special {
                            @include bg-image( 'special_2');
                        }
                    };
                    .text {
                        line-height: 16px;
                        font-size: 12px;
                    }
                }

            }
            .bulletin {
                width: 80%;
                margin: 0 auto;
                .content {
                    padding: 0 12px;
                    line-height: 24px;
                    text-align: justify;
                    font-size: 12px;
                }

            }
        };
        .detail_close {
            position: relative;
            width: 32px;
            height: 32px;
            margin: -64px auto 0;
            clear: both;
            font-size: 32px;
        }
    }
}
</style>
