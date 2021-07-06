import React from 'react'

export default function AddCourseCategory() {
  return (
    <React.Fragment>
      <div className="middle-wrap">
          <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-4 w-100 bg-primary border-0 d-flex rounded-lg">
                  <a href="#" className="d-inline-block mt-2">
                    <i className="ti-arrow-left font-sm text-white"></i>
                  </a>
                  <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">Add Course Category</h4>
              </div>
              
              <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
                  <form action="#">

                      <div className="row">
                          <div className="col-lg-12 mb-3">
                              <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss"  >Add Course Name</label>
                                  <input type="text" name="comment-name" className="form-control"/>
                              </div>        
                          </div>

                          <div class="col-lg-12 mb-3">
                              <label class="mont-font fw-600 font-xsss">Description</label>
                              <textarea class="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" 
                              placeholder="Write your message..." spellcheck="false"></textarea>
                          </div>
                      </div>

                      
                      <div className="col-lg-12 mb-0 mt-2 pl-0">
                          <a href="#" className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                      </div>
                  </form>
              </div>
          </div>

      </div>
    </React.Fragment>
  )
}
