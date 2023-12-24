export const dateSortComparator = (prev: IMetaData, next: IMetaData) => {
  return new Date(next.date).getTime() - new Date(prev.date).getTime();
};
