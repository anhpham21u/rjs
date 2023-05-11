function OtherInfo() {
  return (
    <div className="container">
      <div
        className="py-50 px-100 mb-50 flex flex-nm--justify-between flex-dnm--column flex-dnm--g30"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div>
          <h2 className="text2 text-center">FREE SHIPPING</h2>
          <p className="text1 text-center">Free shipping worlwide</p>
        </div>

        <div>
          <h2 className="text2 text-center">24 x 7 SERVICE</h2>
          <p className="text1 text-center">Free shipping worlwide</p>
        </div>

        <div>
          <h2 className="text2 text-center">FESTIVAL OFFER</h2>
          <p className="text1 text-center">Free shipping worlwide</p>
        </div>
      </div>

      <div className="mb-50 flex flex-nm--justify-between flex-dnm--column">
        <div className="mb-20">
          <h2 className="text2 text-center">LET'S BE FRIENDS!</h2>
          <p className="text1 text-center">
            Nisi nisi tempor consequat laboris
          </p>
        </div>
        <form className="flex flex--justify-center">
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input"
            />
            <input type="submit" value="Subscribe" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtherInfo;
