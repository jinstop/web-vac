// 站点公开常量（名称/域名/slogan/联系方式）
// 注意：站点名称严格取自 brand-ci.md 填写值；nameEn 为英文语境呈现名（设计决策，记入 records.md）

export const site = {
  /** brand-ci.md 填写值（站点名称） */
  name: '中国真空热处理炉制造商',
  /** 英文呈现名，用于 OG / title / 页脚副标 */
  nameEn: 'China Vacuum Furnace Manufacturer',
  domain: 'https://vac.mokc.top',
  slogan: 'Precision Vacuum Thermal Processing Solutions',
  /** 占位邮箱（域名派生），待用户确认后替换 */
  email: 'sales@vac.mokc.top',
  description:
    'Manufacturer of industrial vacuum heat treatment furnaces: vacuum quenching (gas & oil), annealing, tempering, sintering, brazing, and carburizing/nitriding furnaces, engineered to order and delivered worldwide.'
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
