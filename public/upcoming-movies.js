const list = document.querySelector(".upcoming-movies");


const lists = [
   {
      listName: "Marvel",
      listLink: "#collapseExample1",
      listId: "collapseExample1",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample2",
      listId: "collapseExample2",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample3", 
      listId: "collapseExample3",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample4",
      listId: "collapseExample4",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample5",
      listId: "collapseExample5",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample6",
      listId: "collapseExample6",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   }
   
]



function addListChildren(root, children){
   let listBody = "";
   
   children.map(child=>{
      const templates = `<div class="col-sm-6 col-md-4 col-lg-3 ">
      <ul>
         <li>${child.listName}
            <span>
               <a data-toggle="collapse" listLink="info" href="${child.listLink}" role="button" data aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-ellipsis-h download-moreinfo"></i></a>
               <div class="collapse" id="${child.listId}">
                  <div class="card card-body moreinfo-body">
                  <div >
                        ${child.listContent}
                        ${child.listBudget}
                        ${child.listRelease}
                     </div>
                  </div>
               </div>
            </span>
         </li>
         <hr>
      </ul>
   </div>`;
      listBody += templates;
                        
                        
   })
   root.innerHTML = listBody;
}
addListChildren(list, lists);
