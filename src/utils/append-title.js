const appendTitle = (...titleList) => {
  const titleParts = titleList.filter(part => part !== '');
  if (titleParts.lenght === 0) {
    return '';
  } else if (titleParts.lenght === 1) {
    return titleParts.pop();
  }

  const lastPart = titleParts.pop();
  return titleParts.reduceRight((title, part) => `${part} | ${title}`, lastPart);
};

export default appendTitle;
