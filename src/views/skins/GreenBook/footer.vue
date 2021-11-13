<template>
    <div>
        <footer id="footer" class="footer">
            <div class="footer-social">
                <div class="footer-container clearfix">
                    <div class="social-list">
                        <a v-for="item of socialContact" target="_blank" :href="item.route">{{ item.title }}</a>
                    </div>
                </div>
            </div>
            <div class="footer-meta">
                <div class="footer-container">
                    <div class="meta-item meta-copyright">
                        <div class="meta-copyright-info">
                            <a :href="footerIntro.route" class="info-logo">
                                <img :src="footerIntro.imgUrl" alt=""/>
                            </a>
                            <div class="info-text">
                                <p>
                                    {{ footerIntro.motto }}
                                    {{ interest[0].name }}
                                    <span
                                            v-for="(item,index) of interest[0].replace"
                                            :style="{
                    color: settings.textColors[index % settings.textColors.length],
                    visibility:index<maxLength ? 'visible':'hidden'
                  }">
                  {{item}}
                </span>
                                </p>
                                <p>{{ footerIntro.copyRight }}</p>
                                <p>
                                    <a class="link-border" :href="footerIntro.recordNo.link" target="_blank">{{
                                        footerIntro.recordNo.name
                                        }}</a>
                                </p>
                                <p>
                                    <a class="link-border" :href="footerIntro.public.link" target="_blank">{{
                                        footerIntro.public.name
                                        }}</a>
                                </p>
                                <p>
                                    {{ $t('running-time') }}
                                    <span class="data-time">{{ runningTime }}</span>
                                </p>
                                <p style="padding-top: 5px;">
                                    <a v-for="item of footerSocial"
                                       :href="item.link"
                                       :title="item.title" target="blank">
                                        <i :class="item.icon" class="fa footer-icon" style="padding-right: 5px;"
                                           aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="meta-item meta-posts">
                        <h3 class="meta-title">{{ $t('new-articles') }}</h3>
                        <ul style="padding: 0;margin: 0">
                            <li v-for="item of newArticles">
                                <router-link :to="item.route">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="meta-item meta-comments">
                        <h3 class="meta-title">{{ $t('new-comments') }}</h3>
                        <ul style="padding: 0;margin: 0">
                            <li v-for="item of newComments">
                                <router-link :to="item.route">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <a @click="backPageTop" href="javascript:" class="cd-top cd-is-visible cd-fade-out"></a>
    </div>
</template>

<script>
    import settings from "../../../settings";

    export default {
        name: "vue-footer",
        data() {
            return {
                timer: null,
                runningTime: "",
                settings,
                socialContact: [
                    {title: "WEIBO", route: "https://weibo.com/u/5996293209"},
                    {title: "ZHIHU", route: "https://www.zhihu.com/people/ziping-38"},
                    {title: "RSS", route: "/"},
                    {title: "GITHUB", route: "https://github.com/Arrowfield"},
                    {title: "TWITTER", route: "https://twitter.com/zipfang"}
                ],
                footerIntro: {
                    route: "/",
                    imgUrl: require("./images/logo1.png"),
                    imgAlt: "",
                    motto: "大道至简 大简至极",
                    copyRight: "© 2018-2021 ZipFang ` Blog",
                    recordNo: {
                        name: "鄂ICP备2021016558号",
                        link: "https://beian.miit.gov.cn/"
                    },
                    public: {
                        name: "粤公网安备44030902003044号",
                        link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030902003044"
                    }
                },
                newArticles: [
                    {title: "记录下之前始终困扰的限速问题", route: "/"},
                    {title: "MySQL查询前七天每天的日志数", route: "/"},
                    {title: "双枢轴快速排序与 Arrays.sort()", route: "/"},
                    {title: "SpringSecurity 实现 OAuth 2.0", route: "/"},
                    {title: "最近小项目", route: "/"},
                    {title: "一些代码笔试题和易错题", route: "/"},
                    {title: "38元锐捷校园网路由器配置教程", route: "/"},
                    {title: "Nginx禁止GoogleBot抓取", route: "/"},
                ],
                newComments: [
                    {title: "素以风尘叹 : 网站很好看", route: "/"},
                    {title: "laojian : 大佬，我们是锐捷网页认证，现在还是挺", route: "/"},
                    {title: "猫姐 : 互换友链，谢谢- site: 喵星趣学堂 ...", route: "/"},
                    {title: "aka : 漪悼遛 这个验证码打不开", route: "/"},
                    {title: "laojian : 谢谢老哥，成功了，我原来没开dhcp，现在能用上了", route: "/"},
                    {title: "laojian : 我是小米路由mini刷的老毛子，我试成功了，", route: "/"},
                    {title: "laojian : 谢谢老哥，成功了，我原来没开dhcp，现在能用上了", route: "/"},
                    {title: "laojian : 我是小米路由mini刷的老毛子，我试成功了，", route: "/"},
                ],
                interest: [
                    {name: "写博客", replace: "!!ﾟДﾟノ)ノ"},
                    {name: "去看海", replace: "ｏ^-^)尸~''☆ミ☆ミ"},
                    {name: "极简化", replace: "o((⊙﹏⊙))o"}
                ],
                maxLength: 7,
                //https://www.feiniaomy.com/post/166.html
                footerSocial: [
                    {icon: "fa-github-alt", link: "https://github.com/Arrowfield", title: "GitHub"},
                    //{icon: "fa-comments", link: "tencent://message/?uin=768449566", title: "QQ"},
                    {
                        icon: "fa-comments",
                        link: "http://wpa.qq.com/msgrd?v=3&uin=768449566&site=qq&menu=yes",
                        title: "QQ"
                    },
                    {icon: "fa-telegram", link: "https://twitter.com/zipfang", title: "Twitter"},
                    {icon: "fa-feed", link: "https://github.com/Arrowfield", title: "Feed"},
                    {
                        icon: "fa-envelope",
                        link: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=nP3u7vPr_vX58Pj65uzc7e2y--Px",
                        title: "Email"
                    },
                ]
            }
        },
        mounted() {
            let flag = -1
            // this.timer = setInterval(() => {
            //   if(this.maxLength === 0 || this.maxLength === 8) flag = -flag
            //   this.maxLength += flag
            // }, 50)
            this.getCountImage()
        }
        ,
        beforeDestroy() {
            this.timer = null
        },
        methods: {
            backPageTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            },
            getCountImage() {
                //let dom = document.getElementById("cnzz_stat_icon_1278967959")
                //this.countInnerHtml = `站长统计${dom.innerHTML}`
                //获取网页开始的时间
                let el = document.getElementsByClassName('data-time')[0]
                let start = new Date(settings.siteStartTime).getTime()
                this.timer = setInterval(() => {
                    let now, timestamp, day, hours, m, s
                    now = new Date().getTime()
                    timestamp = now - start
                    day = Math.floor(timestamp / (3600 * 24 * 1000))
                    hours = Math.floor(timestamp % (3600 * 24 * 1000) / (1000 * 3600))
                    m = Math.floor(timestamp % (3600 * 24 * 1000) % (1000 * 3600) / (1000 * 60))
                    s = Math.round(timestamp % (3600 * 24 * 1000) % (1000 * 3600) % (1000 * 60) / 1000)
                    //this.time = `${day}天${hours}小时${m}分钟${s}秒`
                    el.innerHTML = `${day}天${hours < 10 ? '0' + hours : hours}小时${m < 10 ? '0' + m : m}分钟${s < 10 ? '0' + s : s}秒`
                }, 1000)
            },
        }
    }
</script>

<style lang="scss">
    @media (min-width: 650px) {
        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #bbb;
        }
        ::-webkit-scrollbar-track {
            /* background-color: #eee; */
        }
    }

    .footer {
        font-family: 'Arizonia', cursive;
    }

    .footer-social .social-list a {
        &:hover {
            color: #eb5050;
        }
    }

    .footer-meta .meta-posts li a, .footer-meta .meta-comments li a {
        &:hover {
            border-bottom: 3px solid #cdcdcd;
            color: black;
        }
    }

    .footer-icon {
        font-size: 29px;
        padding-left: 5px;
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }

    .footer-icon:hover {
        color: #fd6464;
        transform: rotate(-15deg);
        -webkit-transform: rotate(-15deg);
        -moz-transform: rotate(-15deg);
        -o-transform: rotate(-15deg);
        -ms-transform: rotate(-15deg);
    }

    i.fa.fa-telegram.footer-icon {
        font-size: 24px;
    }

    .link-border {
        background-image: linear-gradient(transparent 85%, #ff9898 5px);
        background-size: 0;
        background-repeat: no-repeat;
        display: inline;
        transition: 0.2s ease;
        color: #5f5f5f;
        /*padding-left: 5px;*/
        /*padding-right: 5px;*/

        &:hover {
            color: #000;
            background-size: 100%;
        }
    }

</style>
