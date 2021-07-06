import React from 'react'

function LiveCard() {
  return (
    <React.Fragment>
      <div class="col-lg-3">
        <div class="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-4">
            <div class="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center" style={{backgroundImage: 'url(https://via.placeholder.com/300x200.png);'}}></div>
            <div class="card-body d-block w-100 pl-4 pr-4 text-center">
                <figure class="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1"><img src="/images/group/avatar.png" alt="image" class="float-right p-1 bg-white rounded-circle w-100"/></figure>
                <div class="clearfix"></div>
                <h4 class="fw-700 font-xsss mt-3 mb-1">Aliqa Macale </h4>
                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-2">support@gmail.com</p>
                <span class="live-tag mt-2 bg-dark p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">OFFLINE</span>
                <div class="clearfix"></div>
                <a href="#" class="mt-4 mb-4 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-primary font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
            </div>
        </div>                                            
    </div>
    </React.Fragment>
  )
}

export default LiveCard
