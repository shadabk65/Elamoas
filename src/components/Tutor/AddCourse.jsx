import React from 'react'

function AddCourse(props) {
  return (
    <React.Fragment>
      <div className="middle-wrap">
          <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-4 w-100 bg-primary border-0 d-flex rounded-lg">
                  <a href="#" className="d-inline-block mt-2">
                    {/* <i className="ti-arrow-left font-sm text-white"></i> */}
                  </a>
                  <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">Add New Course </h4>
              </div>
              
              <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
                  <form action="#">

                      <div className="row">
                          <div className="col-lg-12 mb-3">
                              <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss"  >Title</label>
                                  <input type="text" name="comment-name" className="form-control"/>
                              </div>        
                          </div>

                          <div className="col-lg-12 mb-3">
                              <label className="mont-font fw-600 font-xsss">Description</label>
                              <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" 
                              placeholder="Write your message..." spellcheck="false"></textarea>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6 mb-3">
                              <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">Instructor Name</label>
                                  <input type="text" className="form-control"/>
                              </div>        
                          </div>

                          <div className="col-lg-6 mb-3">
                              <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">Price</label>
                                  <input type="number" className="form-control"/>
                              </div>        
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6 mb-3">
                              <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">Validity Period</label>
                                  <input type="text" className="form-control"/>
                              </div>        
                          </div>

                          <div className="col-lg-6 mb-3">
                              <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">Category</label>
                                  <input type="text" className="form-control"/>
                              </div>        
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 mb-3">
                            <label className="mont-font fw-600 font-xsss">How to use</label>
                            <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" 
                            placeholder="Write your message..." spellcheck="false"></textarea>
                        </div>

                        <div className="col-lg-12 mb-3">
                          <label className="mont-font fw-600 font-xsss">Course Content</label>
                          <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" 
                          placeholder="Write your message..." spellcheck="false"></textarea>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 mb-3">
                              <div className="card mt-3 border-0">
                                  <div className="card-body d-flex justify-content-between align-items-end p-0">
                                      <div className="form-group mb-0 w-100">
                                        <label className="mont-font fw-600 font-xsss">Upload Course Video</label>
                                          <input type="file" name="file" id="file" className="input-file"/>
                                          <label for="file" className="rounded-lg text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                          <i className="ti-cloud-down large-icon mr-3 d-block"></i>
                                          <span className="js-fileName">Drag and drop or click to replace</span>
                                          </label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12 mb-0 mt-2 pl-0">
                          <a href="#" className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">ADD</a>
                      </div>
                  </form>
              </div>
          </div>

      </div>
    </React.Fragment>
  )
}

export default AddCourse
