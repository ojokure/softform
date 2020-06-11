function formatDate(str) {
  let formatted = str.replace(/(\d{2})(\d{2})/, "$1 / $2");
  return formatted;
}

export default formatDate;
