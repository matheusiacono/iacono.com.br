export default {
  dark: alpha => (alpha ? `rgba(35, 57, 91, ${alpha})` : '#23395B'),
  light: () => '#CBF7ED',
  primary: () => '#83C9F4',
  secondary: alpha => (alpha ? `rgba(64,110,142, ${alpha})` : '#406E8E'),
  text: () => '#333',
};
