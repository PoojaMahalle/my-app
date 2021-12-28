import React from 'react'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="background" height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW IMAGES</h5>
                    <p class="card-text lead fs-2">CHECKOUT ALL THE IMAGES</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
