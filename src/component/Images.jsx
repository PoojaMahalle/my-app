import React from 'react';

const Images = () => {
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Images</h1>
                        <hr />

                        <div class="card-group">
                            <div class="card">
                                <img src="/assets/2.jpg" class="card-img-top" alt="img1" />
                                <div class="card-body">
                                    <h5 class="card-title">Image title</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/assets/3.jpg" class="card-img-top" alt="img2" />
                                <div class="card-body">
                                    <h5 class="card-title">Image title</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/assets/4.png" class="card-img-top" height="287px" alt="img3" />
                                <div class="card-body">
                                    <h5 class="card-title">Image title</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Images;
