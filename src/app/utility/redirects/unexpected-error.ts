export const getUnexpectedErrorRedirect = () => {
  return {
    redirect: {
      destination: '/_error',
      permanent: false,
    },
  };
};
