export default function cn(...classValue: (string | false)[]) {
  return classValue.reduce((result: string, item) => {
    if (!item) return result;
    return result + ' ' + item
  }, '')
}