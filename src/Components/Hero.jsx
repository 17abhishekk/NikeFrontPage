const HeroSection = () =>{
    return(
        <main className="hero container">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserve the best and we are here 
                    to help you find the best shoes for your 
                    perfect budget and design.
                </p>
                <div className="hero-btn">
                <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
                    <button>Shop Now</button>
                </a>
                    <button className="change">Category</button>
                </div>
                <div className="Shopping">
                    <p>Also Availabe On</p>
                    <div className="brandIcons">
                        <img src="./images/Flipkart.png" alt="amazon-logo" id="bi"/>
                        <img src="./images/amazon.png" alt="flipkart-logo" id="bi"/>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="./images/Shoes.png" alt="shoes-image" id="joota"/>
            </div>
        </main>
    );
}
export default HeroSection;