export interface CardConfig {
  value: number;
  displayValue: string;
  color: string;
}
export const fibonacciCards: CardConfig[] = [
  { value: 0, displayValue: '0', color: 'var(--color-background-secondary)' },
  { value: 1, displayValue: '1', color: '#9EC8FE' },
  { value: 2, displayValue: '2', color: '#9EC8FE' },
  { value: 3, displayValue: '3', color: '#A3DFF2' },
  { value: 5, displayValue: '5', color: '#A3DFF2' },
  { value: 8, displayValue: '8', color: '#9DD49A' },
  { value: 13, displayValue: '13', color: '#9DD49A' },
  { value: 21, displayValue: '21', color: '#F4DD94' },
  { value: 34, displayValue: '34', color: '#F4DD94' },
  { value: 55, displayValue: '55', color: '#F39893' },
  { value: 89, displayValue: '89', color: '#F39893' },
  { value: -2, displayValue: '❓', color: 'var(--color-background-secondary)' },
  { value: -1, displayValue: '-1', color: 'var(--color-background-secondary)' },
];

export const getRandomEmoji = () => {
  const emojis = ['☕', '🥤', '🍹', '🍸', '🍧', '🍨', '🍩', '🍎', '🧁', '🍪', '🍿', '🌮', '🍦', '🍉', '🍐', '🍰', '🍫'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};
