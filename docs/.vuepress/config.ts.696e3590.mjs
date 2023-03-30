// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { getChildren } from "vuepress-sidebar-atuo";
var logoUrl = "images/logo.png";
var authorAvatar = "images/head.jpg";
var config_default = defineUserConfig({
  title: "\u5C0F\u535A\u5BA2",
  description: "\u505A\u597D\u6BCF\u4E00\u4EF6\u7B80\u5355\u7684\u4E8B",
  locales: {
    // 语言配置
    "/": { lang: "zh-CN" }
  },
  head: [
    // 头部
    ["link", { rel: "icon", href: logoUrl }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
  ],
  theme: recoTheme({
    primaryColor: "#17adcb",
    logo: logoUrl,
    author: "li",
    authorAvatar,
    lastUpdatedText: "Last Updated",
    // colorMode: 'dark', // 样式颜色 dark, light
    componentsDir: "./docs/.vuepress/components",
    // 组件根目录
    // series 为原 sidebar
    series: {
      // 前端工程师
      "/docs/HTML": [
        {
          text: "HTML",
          children: getChildren("docs/docs/HTML/")
        }
      ],
      "/docs/CSS": [
        {
          text: "CSS",
          children: getChildren("docs/docs/CSS/")
        }
      ],
      "/docs/JavaScript": [
        {
          text: "JavaScript",
          children: getChildren("docs/docs/JavaScript/")
        }
      ],
      "/docs/ECMASript": [
        {
          text: "ECMASript",
          children: getChildren("docs/docs/ECMASript/")
        }
      ],
      "/docs/Vue": [
        {
          text: "Vue",
          children: getChildren("docs/docs/Vue/")
        }
      ],
      "/docs/Git": [
        {
          text: "Git",
          children: getChildren("docs/docs/Git/")
        }
      ],
      // PHP工程师
      "/docs/PHP": [
        {
          text: "PHP",
          children: getChildren("docs/docs/PHP/")
        }
      ],
      "/docs/MySQL": [
        {
          text: "MySQL",
          children: getChildren("docs/docs/MySQL/")
        }
      ],
      "/docs/Linux": [
        {
          text: "Linux",
          children: getChildren("docs/docs/Linux/")
        }
      ],
      "/docs/Shell": [
        {
          text: "Shell",
          children: getChildren("docs/docs/Shell/")
        }
      ],
      "/docs/interview": [
        {
          // text: "面试题",
          children: getChildren("docs/docs/interview/")
        }
      ]
    },
    // https://www.xicons.org/#/zh-CN 中的carbon
    navbar: [
      {
        text: "\u9996\u9875",
        link: "/"
        // icon: 'Home'
      },
      {
        text: "web\u524D\u7AEF",
        // icon: 'List',
        children: [
          { text: "HTML", link: "/docs/HTML/01.HTMLjibenjiegou" },
          { text: "CSS", link: "/docs/CSS/03.CSSjibenyangshihexuanzeqi" },
          { text: "JavaScript", link: "/docs/JavaScript/01.shuzuduixiang" },
          { text: "ECMASript", link: "/docs/ECMASript/01.let\u3001constguanjianzi" },
          { text: "Vue", link: "/docs/Vue/01.vueshili" },
          { text: "Git", link: "/docs/Git/01.gitjibenmingling" }
        ]
      },
      {
        text: "PHP\u540E\u7AEF",
        // icon: 'List',
        children: [
          { text: "PHP", link: "/docs/PHP/01.bianliangshujuleixing" },
          { text: "MySQL", link: "/docs/MySQL/01.SQLyuju" },
          { text: "Linux", link: "/docs/Linux/01.Linuxjieshao" },
          { text: "Shell", link: "/docs/Shell/01.Shelljieshao" }
        ]
      },
      {
        text: "\u6280\u672F\u788E\u7247",
        link: "/categories/interview/1/"
        // icon: 'Categories'
      },
      {
        text: "\u6807\u7B7E",
        link: "/tags/interview/1/"
        // icon: 'Tag'
      },
      {
        text: "\u9762\u8BD5\u9898",
        link: "/docs/interview/"
        // icon: 'Money'
      }
      // { text: "时间轴", link: "/timeline/" },
    ]
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
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lpZGFvMS9EZXNrdG9wL3dlYi9ibG9nLXYyL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWlkYW8xL0Rlc2t0b3Avd2ViL2Jsb2ctdjIvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aWRhbzEvRGVza3RvcC93ZWIvYmxvZy12Mi9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgeyByZWNvVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1yZWNvJztcbmltcG9ydCB7IGdldENoaWxkcmVuIH0gZnJvbSAndnVlcHJlc3Mtc2lkZWJhci1hdHVvJztcblxuY29uc3QgbG9nb1VybCA9ICdpbWFnZXMvbG9nby5wbmcnIC8vIGxvZ29cbmNvbnN0IGF1dGhvckF2YXRhciA9ICdpbWFnZXMvaGVhZC5qcGcnIC8vIFx1NTkzNFx1NTBDRlxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIHRpdGxlOiBcIlx1NUMwRlx1NTM1QVx1NUJBMlwiLFxuICBkZXNjcmlwdGlvbjogXCJcdTUwNUFcdTU5N0RcdTZCQ0ZcdTRFMDBcdTRFRjZcdTdCODBcdTUzNTVcdTc2ODRcdTRFOEJcIixcbiAgbG9jYWxlczogeyAvLyBcdThCRURcdThBMDBcdTkxNERcdTdGNkVcbiAgICAnLyc6IHsgbGFuZzogJ3poLUNOJyB9XG4gIH0sXG4gIGhlYWQ6IFsgLy8gXHU1OTM0XHU5MEU4XG4gICAgWydsaW5rJywgeyByZWw6IFwiaWNvblwiLCBocmVmOiBsb2dvVXJsIH1dLFxuICAgIFsnbWV0YScsIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiIH1dXG4gIF0sXG4gIHRoZW1lOiByZWNvVGhlbWUoe1xuICAgIHByaW1hcnlDb2xvcjogJyMxN2FkY2InLFxuICAgIGxvZ286IGxvZ29VcmwsXG4gICAgYXV0aG9yOiBcImxpXCIsXG4gICAgYXV0aG9yQXZhdGFyLFxuICAgIGxhc3RVcGRhdGVkVGV4dDogXCJMYXN0IFVwZGF0ZWRcIixcbiAgICAvLyBjb2xvck1vZGU6ICdkYXJrJywgLy8gXHU2ODM3XHU1RjBGXHU5ODlDXHU4MjcyIGRhcmssIGxpZ2h0XG4gICAgY29tcG9uZW50c0RpcjogJy4vZG9jcy8udnVlcHJlc3MvY29tcG9uZW50cycsIC8vIFx1N0VDNFx1NEVGNlx1NjgzOVx1NzZFRVx1NUY1NVxuICAgIC8vIHNlcmllcyBcdTRFM0FcdTUzOUYgc2lkZWJhclxuICAgIHNlcmllczoge1xuICAgICAgLy8gXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1RTA4XG4gICAgICBcIi9kb2NzL0hUTUxcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJIVE1MXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkcmVuKCdkb2NzL2RvY3MvSFRNTC8nKVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2RvY3MvQ1NTXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQ1NTXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkcmVuKCdkb2NzL2RvY3MvQ1NTLycpXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgXCIvZG9jcy9KYXZhU2NyaXB0XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignZG9jcy9kb2NzL0phdmFTY3JpcHQvJylcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBcIi9kb2NzL0VDTUFTcmlwdFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkVDTUFTcmlwdFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignZG9jcy9kb2NzL0VDTUFTcmlwdC8nKVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2RvY3MvVnVlXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVnVlXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkcmVuKCdkb2NzL2RvY3MvVnVlLycpXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgXCIvZG9jcy9HaXRcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJHaXRcIixcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJ2RvY3MvZG9jcy9HaXQvJylcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBQSFBcdTVERTVcdTdBMEJcdTVFMDhcbiAgICAgIFwiL2RvY3MvUEhQXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUEhQXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkcmVuKCdkb2NzL2RvY3MvUEhQLycpXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgXCIvZG9jcy9NeVNRTFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk15U1FMXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkcmVuKCdkb2NzL2RvY3MvTXlTUUwvJylcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBcIi9kb2NzL0xpbnV4XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTGludXhcIixcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJ2RvY3MvZG9jcy9MaW51eC8nKVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2RvY3MvU2hlbGxcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTaGVsbFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignZG9jcy9kb2NzL1NoZWxsLycpXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgXCIvZG9jcy9pbnRlcnZpZXdcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgLy8gdGV4dDogXCJcdTk3NjJcdThCRDVcdTk4OThcIixcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJ2RvY3MvZG9jcy9pbnRlcnZpZXcvJylcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIC8vIGh0dHBzOi8vd3d3LnhpY29ucy5vcmcvIy96aC1DTiBcdTRFMkRcdTc2ODRjYXJib25cbiAgICBuYXZiYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgICAgbGluazogXCIvXCIsXG4gICAgICAgIC8vIGljb246ICdIb21lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJ3ZWJcdTUyNERcdTdBRUZcIixcbiAgICAgICAgLy8gaWNvbjogJ0xpc3QnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJIVE1MXCIsIGxpbms6IFwiL2RvY3MvSFRNTC8wMS5IVE1MamliZW5qaWVnb3VcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJDU1NcIiwgbGluazogXCIvZG9jcy9DU1MvMDMuQ1NTamliZW55YW5nc2hpaGV4dWFuemVxaVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkphdmFTY3JpcHRcIiwgbGluazogXCIvZG9jcy9KYXZhU2NyaXB0LzAxLnNodXp1ZHVpeGlhbmdcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJFQ01BU3JpcHRcIiwgbGluazogXCIvZG9jcy9FQ01BU3JpcHQvMDEubGV0XHUzMDAxY29uc3RndWFuamlhbnppXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiVnVlXCIsIGxpbms6IFwiL2RvY3MvVnVlLzAxLnZ1ZXNoaWxpXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiR2l0XCIsIGxpbms6IFwiL2RvY3MvR2l0LzAxLmdpdGppYmVubWluZ2xpbmdcIiB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlBIUFx1NTQwRVx1N0FFRlwiLFxuICAgICAgICAvLyBpY29uOiAnTGlzdCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlBIUFwiLCBsaW5rOiBcIi9kb2NzL1BIUC8wMS5iaWFubGlhbmdzaHVqdWxlaXhpbmdcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJNeVNRTFwiLCBsaW5rOiBcIi9kb2NzL015U1FMLzAxLlNRTHl1anVcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJMaW51eFwiLCBsaW5rOiBcIi9kb2NzL0xpbnV4LzAxLkxpbnV4amllc2hhb1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlNoZWxsXCIsIGxpbms6IFwiL2RvY3MvU2hlbGwvMDEuU2hlbGxqaWVzaGFvXCIgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTYyODBcdTY3MkZcdTc4OEVcdTcyNDdcIixcbiAgICAgICAgbGluazogXCIvY2F0ZWdvcmllcy9pbnRlcnZpZXcvMS9cIixcbiAgICAgICAgLy8gaWNvbjogJ0NhdGVnb3JpZXMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NjgwN1x1N0I3RVwiLFxuICAgICAgICBsaW5rOiBcIi90YWdzL2ludGVydmlldy8xL1wiLFxuICAgICAgICAvLyBpY29uOiAnVGFnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTk3NjJcdThCRDVcdTk4OThcIixcbiAgICAgICAgbGluazogXCIvZG9jcy9pbnRlcnZpZXcvXCIsXG4gICAgICAgIC8vIGljb246ICdNb25leSdcbiAgICAgIH0sXG4gICAgICAvLyB7IHRleHQ6IFwiXHU2NUY2XHU5NUY0XHU4Rjc0XCIsIGxpbms6IFwiL3RpbWVsaW5lL1wiIH0sXG4gICAgXSxcbiAgICAvLyB2YWxpbmVDb25maWcgXHU5MTREXHU3RjZFXHU0RTBFIDEueCBcdTRFMDBcdTgxRjRcbiAgICAvLyB2YWxpbmVDb25maWc6IHtcbiAgICAvLyAgIGFwcElkOiAneHh4JyxcbiAgICAvLyAgIGFwcEtleTogJ3h4eCcsXG4gICAgLy8gICBwbGFjZWhvbGRlcjogJ1x1NTg2Qlx1NTE5OVx1OTBBRVx1N0JCMVx1NTNFRlx1NEVFNVx1NjUzNlx1NTIzMFx1NTZERVx1NTkwRFx1NjNEMFx1OTE5Mlx1NTRFNlx1RkYwMScsXG4gICAgLy8gICB2ZXJpZnk6IHRydWUsIC8vIFx1OUE4Q1x1OEJDMVx1NzgwMVx1NjcwRFx1NTJBMVxuICAgIC8vICAgLy8gbm90aWZ5OiB0cnVlLFxuICAgIC8vICAgcmVjb3JkSVA6IHRydWUsXG4gICAgLy8gICAvLyBoaWRlQ29tbWVudHM6IHRydWUgLy8gXHU5NjkwXHU4NUNGXHU4QkM0XHU4QkJBXG4gICAgLy8gfSxcbiAgfSksXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1QsU0FBUyx3QkFBd0I7QUFDelYsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxtQkFBbUI7QUFFNUIsSUFBTSxVQUFVO0FBQ2hCLElBQU0sZUFBZTtBQUNyQixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQTtBQUFBLElBQ1AsS0FBSyxFQUFFLE1BQU0sUUFBUTtBQUFBLEVBQ3ZCO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQ3ZDLENBQUMsUUFBUSxFQUFFLE1BQU0sWUFBWSxTQUFTLHNEQUFzRCxDQUFDO0FBQUEsRUFDL0Y7QUFBQSxFQUNBLE9BQU8sVUFBVTtBQUFBLElBQ2YsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1I7QUFBQSxJQUNBLGlCQUFpQjtBQUFBO0FBQUEsSUFFakIsZUFBZTtBQUFBO0FBQUE7QUFBQSxJQUVmLFFBQVE7QUFBQTtBQUFBLE1BRU4sY0FBYztBQUFBLFFBQ1o7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVUsWUFBWSxpQkFBaUI7QUFBQSxRQUN6QztBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxRQUNYO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVLFlBQVksZ0JBQWdCO0FBQUEsUUFDeEM7QUFBQSxNQUNGO0FBQUEsTUFDQSxvQkFBb0I7QUFBQSxRQUNsQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxZQUFZLHVCQUF1QjtBQUFBLFFBQy9DO0FBQUEsTUFDRjtBQUFBLE1BQ0EsbUJBQW1CO0FBQUEsUUFDakI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVUsWUFBWSxzQkFBc0I7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxRQUNYO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVLFlBQVksZ0JBQWdCO0FBQUEsUUFDeEM7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxZQUFZLGdCQUFnQjtBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxZQUFZLGdCQUFnQjtBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVUsWUFBWSxrQkFBa0I7QUFBQSxRQUMxQztBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVLFlBQVksa0JBQWtCO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxZQUFZLGtCQUFrQjtBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUFBLE1BQ0EsbUJBQW1CO0FBQUEsUUFDakI7QUFBQTtBQUFBLFVBRUUsVUFBVSxZQUFZLHNCQUFzQjtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQTtBQUFBLE1BRVI7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUE7QUFBQSxRQUVOLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxRQUFRLE1BQU0sZ0NBQWdDO0FBQUEsVUFDdEQsRUFBRSxNQUFNLE9BQU8sTUFBTSx5Q0FBeUM7QUFBQSxVQUM5RCxFQUFFLE1BQU0sY0FBYyxNQUFNLG9DQUFvQztBQUFBLFVBQ2hFLEVBQUUsTUFBTSxhQUFhLE1BQU0sOENBQXlDO0FBQUEsVUFDcEUsRUFBRSxNQUFNLE9BQU8sTUFBTSx3QkFBd0I7QUFBQSxVQUM3QyxFQUFFLE1BQU0sT0FBTyxNQUFNLGdDQUFnQztBQUFBLFFBQ3ZEO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQTtBQUFBLFFBRU4sVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLE9BQU8sTUFBTSxxQ0FBcUM7QUFBQSxVQUMxRCxFQUFFLE1BQU0sU0FBUyxNQUFNLHlCQUF5QjtBQUFBLFVBQ2hELEVBQUUsTUFBTSxTQUFTLE1BQU0sOEJBQThCO0FBQUEsVUFDckQsRUFBRSxNQUFNLFNBQVMsTUFBTSw4QkFBOEI7QUFBQSxRQUN2RDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUE7QUFBQSxNQUVSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUEsTUFFUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQTtBQUFBLE1BRVI7QUFBQTtBQUFBLElBRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0YsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
