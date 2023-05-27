const modal = document.querySelector(".modal-holder");


const modals = [
   {
      modalName: "Marvel",
      modalId: "exampleModal1",
      modalDownloadLink:"",
      modalDownloadLink2:"",
      modalTitleId: "exampleModalLabel1",
      modalContent: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      modalBudget: `<p><b>Box office & Budget:</b>...</p>`,
      modalRelease:"<p><b>Release Date:</b>...</p>",
      modalCast: `<ul>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <a href="#" target="_blank">
                <li class="text-center other-cast-log">Other cast members</li>
              </a>
              <hr>
            </ul>`,
   },
   {
      modalName: "name",
      modalId: "exampleModal2",
      modalDownloadLink:"",
      modalDownloadLink2:"",
      modalTitleId: "exampleModalLabel2",
      modalContent: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      modalBudget: `<p><b>Box office & Budget:</b>...</p>`,
      modalRelease:"<p><b>Release Date:</b>...</p>",
      modalCast: `<ul>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <a href="#" target="_blank">
                <li class="text-center other-cast-log">Other cast members</li>
              </a>
              <hr>
            </ul>`,
   },
   {
      modalName: "name of movie",
      modalId: "exampleModal3", 
      modalDownloadLink:"",
      modalDownloadLink2:"",
      modalTitleId: "exampleModalLabel3",
      modalContent: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      modalBudget: `<p><b>Box office & Budget:</b>...</p>`,
      modalRelease:"<p><b>Release Date:</b>...</p>",
      modalCast: `<ul>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <a href="#" target="_blank">
                <li class="text-center other-cast-log">Other cast members</li>
              </a>
              <hr>
            </ul>`,
   },
   {
      modalName: "name of movie",
      modalId: "exampleModal4",
      modalDownloadLink:"",
      modalDownloadLink2:"",
      modalTitleId: "exampleModalLabel4",
      modalContent: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      modalBudget: `<p><b>Box office & Budget:</b>...</p>`,
      modalRelease:"<p><b>Release Date:</b>...</p>",
      modalCast: `<ul>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <a href="#" target="_blank">
                <li class="text-center other-cast-log">Other cast members</li>
              </a>
              <hr>
            </ul>`,
   },
   {
      modalName: "name of movie",
      modalId: "exampleModal5",
      modalDownloadLink:"",
      modalDownloadLink2:"",
      modalTitleId: "exampleModalLabel5",
      modalContent: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      modalBudget: `<p><b>Box office & Budget:</b>...</p>`,
      modalRelease:"<p><b>Release Date:</b>...</p>",
      modalCast: `<ul>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <a href="#" target="_blank">
                <li class="text-center other-cast-log">Other cast members</li>
              </a>
              <hr>
            </ul>`,
   },
   {
      modalName: "name of movie",
      modalId: "exampleModal6",
      modalDownloadLink:"",
      modalDownloadLink2:"",
      modalTitleId: "exampleModalLabel6",
      modalContent: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      modalBudget: `<p><b>Box office & Budget:</b>...</p>`,
      modalRelease:"<p><b>Release Date:</b>...</p>",
      modalCast: `<ul>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <hr>
              <li><img src="img/img1.jpg" alt=""> Real Name <i>as</i> <span>Flim name</span></li>
              <a href="#" target="_blank">
                <li class="text-center other-cast-log">Other cast members</li>
              </a>
              <hr>
            </ul>`,
   }
   
]



function addModalChildren(root, children){
   let modalBody = "";
   
   children.map(child=>{
      const templatesModal = `<div class="modal fade" id="${child.modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="${child.modalTitleId}">${child.modalName}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body cast-members-log">
            <h5 class="text-center">About</h5>
            <hr>
            ${child.modalContent}
            <br>
            ${child.modalRelease}
            <h5 class="text-center">Cast </h5>
            ${child.modalCast}
            <hr>
            <br>
            ${child.modalBudget}
            <hr>
            <p>...</p>
            <br>
            <h5 class="text-center">Download </h5>
            <hr>
            <p>Link: ${child.modalName} <a class="download-movie-link" href="${child.modalDownloadLink}"><i class="fas fa-download"></i></a></p>              
            <p>Link: ${child.modalName} <a class="download-movie-link" href="${child.modalDownloadLink2}"><i class="fas fa-download"></i></a></p>              
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary col-12" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      modalBody += templatesModal;
                        
                        
   })
   root.innerHTML = modalBody;
}
addModalChildren(modal, modals);
