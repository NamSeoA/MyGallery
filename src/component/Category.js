const Category = ({list, clickHandler, cate}) => {

    return(
    <div className='main-content01-cate'>
    {
      list.map((cate, i) => {
        return (
          <div className='main-cate' key={i}>
            <p onClick={()=>{ clickHandler(cate) }}>
              {cate.toUpperCase()}
            </p>
            {/* {category == cate ? <div className='main-cate-active' /> : ''} */}
          </div>
        )
      })
    }
  </div>
  );
};

export default Category;