export const lineClamp = (limit: number) => `
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  word-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: ${limit};
`;
