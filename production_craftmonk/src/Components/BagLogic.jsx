function BagLogic() {
   
   return (
  
  
    {bagItems.length === 0 ? (
        <Emptycart />
      ) : (
        <div className="bag-page">
          <div className="bag-item-container">
            {finalItems.map((item) => (
              <BagItems key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      );
}
   );
};

export default BagLogic;