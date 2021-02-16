import Box from "@material-ui/core/Box";

const Wrapper = ({ children }) => {
  return (
    <Box maxWidth={400} width="100%" mt={5} mx="auto">
      {children}
    </Box>
  );
};

export default Wrapper;
