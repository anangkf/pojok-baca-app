const trimFileName = (fileName: string): string => {
  if (fileName.length <= 20) return fileName;
  return `${fileName.slice(0, 20)}...`;
};

export default trimFileName;