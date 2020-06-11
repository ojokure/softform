function maskCardPan(str) {
  return str.replace(/(\d{4})/, "XXXX ");
}

export default maskCardPan;
