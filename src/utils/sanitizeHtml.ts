export const sanitizeHtml = (html: string) => {
  return {
    __html: html
  };
}; 