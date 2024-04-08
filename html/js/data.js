function process(str) {
  const arr = str.split('→');
  const currentIndex = Math.floor(arr.length / 2);

  const result = arr.map((s, i) => {
    let icon = 'current';
    if (i === 0) {
      icon = 'start';
    } else if (i === arr.length - 1) {
      icon = 'end';
    } else if (i < currentIndex) {
      icon = 1;
    } else if (i > currentIndex) {
      icon = 2;
    }

    return {
      name: s,
      icon,
    };
  });

  console.log(result);
  return result;
}

const zhuanye = [
  {
    name: '园林规划设计基本概念',
    icon: 'start',
  },
  {
    name: '园林美学基础',
    icon: 1,
  },
  {
    name: '园林设计程序',
    icon: 1,
  },
  {
    name: '园林构成要素',
    icon: 1,
  },
  {
    name: '园林类型与功能',
    icon: 1,
  },
  {
    name: '场地勘察与分析',
    icon: 1,
  },
  {
    name: '设计原则与方法',
    icon: 1,
  },
  {
    name: '园林植物知识',
    icon: 1,
  },
  {
    name: '园林工程技术知识',
    icon: 1,
  },
  {
    name: '园林CAD及计算机辅助设计',
    icon: 1,
  },
  {
    name: '园林工程概预算',
    icon: 'current',
  },
  {
    name: '园林工程施工与管理',
    icon: 2,
  },
  {
    name: '城市道路绿地规划设计',
    icon: 2,
  },
  {
    name: '滨水绿地规划设计',
    icon: 2,
  },
  {
    name: '居住区绿地规划设计',
    icon: 2,
  },
  {
    name: '单位附属绿地规划设计',
    icon: 2,
  },
  {
    name: '公园规划设计',
    icon: 2,
  },
  {
    name: '生态设计原则',
    icon: 2,
  },
  {
    name: '儿童活动空间设计',
    icon: 2,
  },
  {
    name: '园林规划设计案例分析',
    icon: 2,
  },
  {
    name: '具备独立进行园林规划设计的能力',
    icon: 'end',
  },
];

const zhuanye2 = [
  {
    name: '植物生物学基础',
    icon: 'start',
  },
  {
    name: '植物生理学',
    icon: 1,
  },
  {
    name: '无菌技术',
    icon: 1,
  },
  {
    name: '培养基的制备',
    icon: 1,
  },
  {
    name: '植物激素与生长调节剂',
    icon: 1,
  },
  {
    name: '外植体的选择与处理',
    icon: 1,
  },
  {
    name: '组织培养的类型',
    icon: 'current',
  },
  {
    name: '愈伤组织的诱导与维持',
    icon: 2,
  },
  {
    name: '器官再生与分化',
    icon: 2,
  },
  {
    name: '脱分化与再分化',
    icon: 2,
  },
  {
    name: '转基因植物的组织培养',
    icon: 2,
  },
  {
    name: '组织培养中的分子生物学技术',
    icon: 2,
  },
  {
    name: '掌握植物组织培养的基本原理、技术和方法',
    icon: 'end',
  },
];

const zhuanye3 = [
  {
    name: '植物细胞学和组织学',
    icon: 'start',
  },
  {
    name: '植物生理学和生物化学',
    icon: 1,
  },
  {
    name: '无菌操作技术和实验室安全',
    icon: 1,
  },
  {
    name: '培养基的组成和制备',
    icon: 1,
  },
  {
    name: '植物激素和生长调节剂的作用',
    icon: 1,
  },
  {
    name: '外植体的选择、消毒和处理',
    icon: 1,
  },
  {
    name: '愈伤组织的诱导和维持',
    icon: 'current',
  },
  {
    name: '器官发生和体细胞胚胎发生',
    icon: 2,
  },
  {
    name: '植物转基因技术',
    icon: 2,
  },
  {
    name: '植物组织培养中的分子标记和遗传分析',
    icon: 2,
  },
  {
    name: '次生代谢物的生产和积累',
    icon: 2,
  },
  {
    name: '数据分析和科研论文撰写',
    icon: 2,
  },
  {
    name: '具备独立进行植物组织培养实验和科研工作的能力',
    icon: 'end',
  },
];

const gangWei = [
  {
    name: '植物学基础知识',
    icon: 'start',
  },
  {
    name: '土壤学',
    icon: 1,
  },
  {
    name: '园艺工具与设备',
    icon: 1,
  },
  {
    name: '花卉栽培',
    icon: 1,
  },
  {
    name: '果树与蔬菜栽培',
    icon: 1,
  },
  {
    name: '草坪与地被植物管理',
    icon: 1,
  },
  {
    name: '园艺设计原理',
    icon: 1,
  },
  {
    name: '景观规划',
    icon: 1,
  },
  {
    name: '植物病虫害防治',
    icon: '1',
  },
  {
    name: '节水灌溉技术',
    icon: '1',
  },
  {
    name: '有机肥料的制作与应用',
    icon: '1',
  },
  {
    name: '园艺植物的繁殖技术',
    icon: '1',
  },
  {
    name: '温室园艺',
    icon: 'current',
  },
  {
    name: '花卉市场与营销',
    icon: 2,
  },
  {
    name: '生态园艺',
    icon: 2,
  },
  {
    name: '园艺法规与政策',
    icon: 2,
  },
  {
    name: '园艺项目管理',
    icon: 2,
  },
  {
    name: '园艺文化与历史',
    icon: 2,
  },
  {
    name: '国际园艺动态与趋势',
    icon: 2,
  },
  {
    name: '园艺师',
    icon: 'end',
  },
];

const gangWei2 = [
  {
    name: '园艺植物学基础',
    icon: 'start',
  },
  {
    name: '植物生理学',
    icon: 1,
  },
  {
    name: '植物遗传学',
    icon: 1,
  },
  {
    name: '植物育种学',
    icon: 1,
  },
  {
    name: '种子生物学',
    icon: 1,
  },
  {
    name: '种子检验技术',
    icon: 1,
  },
  {
    name: '种子处理技术',
    icon: 'current',
  },
  {
    name: '种子贮藏与管理',
    icon: 2,
  },
  {
    name: '植物保护学',
    icon: 2,
  },
  {
    name: '土壤肥料学',
    icon: 2,
  },
  {
    name: '温室和设施园艺',
    icon: 2,
  },
  {
    name: '种子繁育实践操作',
    icon: 2,
  },
  {
    name: '园艺植物种子繁育技术员',
    icon: 'end',
  },
];

const gangWei3 = [
  {
    name: '园艺植物分类与生长发育',
    icon: 'start',
  },
  {
    name: '植物生物学基础',
    icon: 1,
  },
  {
    name: '土壤学与土壤管理',
    icon: 1,
  },
  {
    name: '植物营养与肥料使用',
    icon: 1,
  },
  {
    name: '植物繁殖技术',
    icon: 1,
  },
  {
    name: '苗木生理与生态管理',
    icon: 1,
  },
  {
    name: '病虫害防治',
    icon: 'current',
  },
  {
    name: '苗木培育技术',
    icon: 2,
  },
  {
    name: '设施园艺与环境控制',
    icon: 2,
  },
  {
    name: '苗木质量评估与分级',
    icon: 2,
  },
  {
    name: '苗木的贮藏与运输',
    icon: 2,
  },
  {
    name: '园艺业务与市场营销',
    icon: 2,
  },
  {
    name: '园艺植物苗木繁育技术员',
    icon: 'end',
  },
];

const jingSai = [
  {
    name: '园艺植物分类与识别',
    icon: 'start',
  },
  {
    name: '植物生理学',
    icon: 1,
  },
  {
    name: '土壤学与肥料应用',
    icon: 1,
  },
  {
    name: '园艺植物繁殖技术',
    icon: 1,
  },
  {
    name: '园艺植物病虫害防治',
    icon: 1,
  },
  {
    name: '园艺植物栽培技术',
    icon: 1,
  },
  {
    name: '园艺设施与设备',
    icon: 1,
  },
  {
    name: '园艺植物营养与施肥',
    icon: 1,
  },
  {
    name: '园艺产品采后处理',
    icon: '1',
  },
  {
    name: '园艺植物遗传育种',
    icon: 'current',
  },
  {
    name: '园林规划设计',
    icon: 2,
  },
  {
    name: '园艺植物生理生态',
    icon: 2,
  },
  {
    name: '园艺植物组织培养',
    icon: 2,
  },
  {
    name: '园艺植物逆境生理',
    icon: 2,
  },
  {
    name: '园艺植物种质资源',
    icon: 2,
  },
  {
    name: '园艺植物生物技术',
    icon: 2,
  },
  {
    name: '园艺植物产品品质与安全',
    icon: 2,
  },
  {
    name: '园艺产业与市场分析',
    icon: 2,
  },
  {
    name: '园艺植物新品种保护',
    icon: 2,
  },
  {
    name: '园艺学实践技能',
    icon: 'end',
  },
];

const jingSai2 = [
  {
    name: '园艺植物学基础',
    icon: 'start',
  },
  {
    name: '土壤学与土壤管理',
    icon: 1,
  },
  {
    name: '植物营养与肥料配方',
    icon: 1,
  },
  {
    name: '植物病虫害识别与防治',
    icon: 1,
  },
  {
    name: '园艺植物繁殖技术',
    icon: 1,
  },
  {
    name: '园艺作物栽培管理',
    icon: 1,
  },
  {
    name: '设施园艺技术',
    icon: 'current',
  },
  {
    name: '园艺工具与机械设备使用',
    icon: 2,
  },
  {
    name: '园艺项目管理',
    icon: 2,
  },
  {
    name: '园艺产品采后处理与质量控制',
    icon: 2,
  },
  {
    name: '园艺设计与景观规划',
    icon: 2,
  },
  {
    name: '竞赛规则与评分标准',
    icon: 2,
  },
  {
    name: '全国技能大赛园艺项目',
    icon: 'end',
  },
];

const jingSai3 = [
  {
    name: '景观设计基础',
    icon: 'start',
  },
  {
    name: '园艺植物知识',
    icon: 1,
  },
  {
    name: '植物配置与设计',
    icon: 1,
  },
  {
    name: '生态与可持续设计',
    icon: 1,
  },
  {
    name: '场地分析与规划',
    icon: 1,
  },
  {
    name: '景观材料与构造',
    icon: 1,
  },
  {
    name: '水景设计与营造',
    icon: 'current',
  },
  {
    name: '景观施工与管理',
    icon: 2,
  },
  {
    name: '景观维护与管理',
    icon: 2,
  },
  {
    name: '创意思维与表现技巧',
    icon: 2,
  },
  {
    name: '竞赛策略与准备',
    icon: 2,
  },
  {
    name: '“封怀园艺”大学生景观创作竞赛',
    icon: 'end',
  },
];

const zhengShu = [
  {
    name: '园林工程设计',
    icon: 'start',
  },
  {
    name: '园林工程施工',
    icon: 1,
  },
  {
    name: '植物学',
    icon: 1,
  },
  {
    name: '土壤学与肥料学',
    icon: 1,
  },
  {
    name: '园艺植物繁殖与育种',
    icon: 1,
  },
  {
    name: '园艺设施与设备',
    icon: 1,
  },
  {
    name: '园艺产品采后处理与营销',
    icon: 1,
  },
  {
    name: '园艺经济与管理',
    icon: 1,
  },
  {
    name: '园林规划设计',
    icon: 'current',
  },
  {
    name: '植物生理生态学',
    icon: 2,
  },
  {
    name: '病虫害防治',
    icon: 2,
  },
  {
    name: '园艺学证书',
    icon: 'end',
  },
];

const zhengShu2 = [
  {
    name: '景观设计基础',
    icon: 'start',
  },
  {
    name: '植物学与园艺知识',
    icon: 1,
  },
  {
    name: '土壤学与植物营养',
    icon: 1,
  },
  {
    name: '环境科学与生态学',
    icon: 1,
  },
  {
    name: '景观规划与场地分析',
    icon: 1,
  },
  {
    name: '景观设计软件应用',
    icon: 1,
  },
  {
    name: '景观工程技术',
    icon: 'current',
  },
  {
    name: '景观设计与法规',
    icon: 2,
  },
  {
    name: '景观设计项目管理',
    icon: 2,
  },
  {
    name: '景观设计案例分析',
    icon: 2,
  },
  {
    name: '专业英语与国际标准',
    icon: 2,
  },
  {
    name: '景观设计师证书',
    icon: 'end',
  },
];

const zhengShu3 = [
  {
    name: '花卉园艺基础知识',
    icon: 'start',
  },
  {
    name: '植物生物学',
    icon: 1,
  },
  {
    name: '土壤学与土壤管理',
    icon: 1,
  },
  {
    name: '植物营养与肥料使用',
    icon: 1,
  },
  {
    name: '花卉繁殖技术',
    icon: 1,
  },
  {
    name: '花卉病虫害防治',
    icon: 1,
  },
  {
    name: '花卉栽培管理',
    icon: 'current',
  },
  {
    name: '花卉市场营销',
    icon: 2,
  },
  {
    name: '花卉装饰与应用',
    icon: 2,
  },
  {
    name: '花卉产业与法规',
    icon: 2,
  },
  {
    name: '花卉园艺实践操作',
    icon: 2,
  },
  {
    name: '花卉园艺师证书',
    icon: 'end',
  },
];
