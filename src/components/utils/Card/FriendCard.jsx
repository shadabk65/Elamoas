import React from 'react'

function FriendCard() {
  return (
    <React.Fragment>
      <div className="col-lg-3">
        <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-4">
            <div className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center" style={{ backgroundImage : 'url(https://via.placeholder.com/300x200.png);'}}></div>
            <div className="card-body d-block w-100 pl-4 pr-4 text-center">
                <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                  <img src="/images/group/avatar.png" alt="image" className="float-right p-1 bg-white rounded-circle w-100"/>
                </figure>
                <div className="clearfix"></div>
                <h4 className="fw-700 font-xsss mt-3 mb-1">Aliqa Macale </h4>
                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">support@gmail.com</p>
                <div className="clearfix"></div>
                <ul className="d-flex align-items-center justify-content-between mt-3 mb-3">
                    <li><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                    <li><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                    <li><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                    <li><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                </ul>
            </div>
        </div>                                            
      </div>
    </React.Fragment>
  )
}

export default FriendCard
