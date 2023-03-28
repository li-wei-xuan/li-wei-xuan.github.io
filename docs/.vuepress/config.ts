import { defineUserConfig } from "vuepress";
import { recoTheme } from 'vuepress-theme-reco';
import { getChildren } from 'vuepress-sidebar-atuo';

const logoUrl = 'images/logo.png' // logo
const authorAvatar = 'images/head.jpg' // 头像
export default defineUserConfig({
  title: "小博客",
  description: "做好每一件简单的事",
  locales: { // 语言配置
    '/': { lang: 'zh-CN' }
  },
  head: [ // 头部
    ['link', { rel: "icon", href: logoUrl }],
    ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
  ],
  theme: recoTheme({
    primaryColor: '#17adcb',
    logo: logoUrl,
    author: "li",
    authorAvatar,
    lastUpdatedText: "Last Updated",
    // colorMode: 'dark', // 样式颜色 dark, light
    componentsDir: './docs/.vuepress/components', // 组件根目录
    // series 为原 sidebar
    series: {
      // 前端工程师
      "/docs/HTML": [
        {
          text: "HTML",
          children: getChildren('docs/docs/HTML/')
        },
      ],
      "/docs/CSS": [
        {
          text: "CSS",
          children: getChildren('docs/docs/CSS/')
        },
      ],
      "/docs/JavaScript": [
        {
          text: "JavaScript",
          children: getChildren('docs/docs/JavaScript/')
        },
      ],
      "/docs/ECMASript": [
        {
          text: "ECMASript",
          children: getChildren('docs/docs/ECMASript/')
        },
      ],
      "/docs/Vue": [
        {
          text: "Vue",
          children: getChildren('docs/docs/Vue/')
        },
      ],
      "/docs/Git": [
        {
          text: "Git",
          children: getChildren('docs/docs/Git/')
        },
      ],
      // PHP工程师
      "/docs/PHP": [
        {
          text: "PHP",
          children: getChildren('docs/docs/PHP/')
        },
      ],
      "/docs/MySQL": [
        {
          text: "MySQL",
          children: getChildren('docs/docs/MySQL/')
        },
      ],
      "/docs/Linux": [
        {
          text: "Linux",
          children: getChildren('docs/docs/Linux/')
        },
      ],
      "/docs/Shell": [
        {
          text: "Shell",
          children: getChildren('docs/docs/Shell/')
        },
      ],
      "/docs/interview": [
        {
          // text: "面试题",
          children: getChildren('docs/docs/interview/')
        },
      ]
    },
    // https://www.xicons.org/#/zh-CN 中的carbon
    navbar: [
      {
        text: "首页",
        link: "/",
        // icon: 'Home'
      },
      {
        text: "web前端",
        // icon: 'List',
        children: [
          { text: "HTML", link: "/docs/HTML/01.HTMLjibenjiegou" },
          { text: "CSS", link: "/docs/CSS/03.CSSjibenyangshihexuanzeqi" },
          { text: "JavaScript", link: "/docs/JavaScript/01.shuzuduixiang" },
          { text: "ECMASript", link: "/docs/ECMASript/01.let、constguanjianzi" },
          { text: "Vue", link: "/docs/Vue/01.vueshili" },
          { text: "Git", link: "/docs/Git/01.gitjibenmingling" }
        ],
      },
      {
        text: "PHP后端",
        // icon: 'List',
        children: [
          { text: "PHP", link: "/docs/PHP/01.bianliangshujuleixing" },
          { text: "MySQL", link: "/docs/MySQL/01.SQLyuju" },
          { text: "Linux", link: "/docs/Linux/01.Linuxjieshao" },
          { text: "Shell", link: "/docs/Shell/01.Shelljieshao" }
        ],
      },
      {
        text: "技术碎片",
        link: "/categories/interview/1/",
        // icon: 'Categories'
      },
      {
        text: "标签",
        link: "/tags/interview/1/",
        // icon: 'Tag'
      },
      {
        text: "面试题",
        link: "/docs/interview/",
        // icon: 'Money'
      },
      // { text: "时间轴", link: "/timeline/" },
    ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
});
