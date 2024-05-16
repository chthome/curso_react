const Container = ({children}) => {
  return (
    <div>
        <h1>Impressão do componente pai:</h1>
        {children}
    </div>
  );
};

export default Container;