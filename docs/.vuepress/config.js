module.exports = {
	title: '个人主页',
	description: '蛋蛋的博客',
	head: [
		['link', { rel: 'icon', href: '' }]
	],
	markdown: {
    lineNumbers: true
  },
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '博客', link: '/blog/' }
		],
		sidebar: {
			"/blog/":[
				{
					title: '测试1',
					collapsable: false,
					children: [
						"loadsh"
					]
				},
				{
					title: '测试2',
					collapsable: false,
					children: [
						"loadsh"
					]
				}
			]
		},
		lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址"
	},
}