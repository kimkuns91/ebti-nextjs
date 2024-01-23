interface NavItem {
  title: string;
  path: string;
}
const navConfig: NavItem[] = [
  {
    title: 'EBTI 검사',
    path: '/ebti',
  },
  {
    title: '멘토링',
    path: '/mentoring',
  },
  {
    title: '네트워킹',
    path: '/networking',
  },
  {
    title: '컨설팅',
    path: '/consulting',
  },
];

export default navConfig;
