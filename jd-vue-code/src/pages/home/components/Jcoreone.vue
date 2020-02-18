<template>
    <div class="width">
        <div class="left">
            <div class="offer_tit">
                <div class="title_text">今日特价</div>
                <div class="title_items">
                    <ul>
                        <li>精选</li>
                        <li>美食</li>
                        <li>数码</li>
                        <li>百货</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    name: 'HomeJcoreone'
}
</script>

<style lang="stylus" scoped>
.width{
    width: 19.8rem;
    height: 6.1rem;
    margin: auto;
    background-color lightblue
    margin-top .5rem

    .left{
        width 9.8rem
        height 6.1rem
        background #465
        float left 
        .offer_tit{
            width 100%
            padding 0 .2rem
            display flex
            justify-content center;

            align-items center
            .title_text{
                
            }
            .title_items{
                li{
                    display inline-block
                }
            }
            
        }   
    }

    .right{
        width 9.8rem
        height 6.1rem
        background pink
        float right 

    }
}
</style>