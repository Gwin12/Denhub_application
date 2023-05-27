const list = document.querySelector(".list-holder");
const actionListLog = document.querySelector(".action-list-log");
const comedyListLog = document.querySelector(".comedy-list-log");
const horrorListLog = document.querySelector(".horror-list-log");

const lists = [
   {
      listName: "Marvel",
      listLink: "#collapseExample1",
      listType:"-- action",
      listDownloadLink:"",
      listId: "collapseExample1",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "comedy",
      listLink: "#collapseExample2",
      listType:"-- comedy",
      listDownloadLink:"",
      listId: "collapseExample2",
      listContent: `<p><b>About:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem incidunt. Soluta odit 
                           corrupti, possimus a quam nam deserunt modi, maiores fugit nostrum, molestias unde sequi laborum assumenda
                           quod asperiores!
                        </p>`,
      listBudget: `<p><b>Box office & Budget:</b>...</p>`,
      listRelease:"<p><b>Release Date:</b>...</p>"
   },
   {
      listName: "name of movie horror",
      listLink: "#collapseExample3", 
      listType:"-- horror",
      listDownloadLink:"",
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
      listType:"-- action",
      listDownloadLink:"",
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
      listType:"-- comedy",
      listDownloadLink:"",
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
      listType:"-- horror",
      listDownloadLink:"",
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
                  <div class="card card-body moreinfo-body jlov">
                  <div>
                        ${child.listContent}
                        ${child.listBudget}
                        ${child.listRelease}
                        <p>Download: <a href="${child.listDownloadLink}" listLink="download"><i class="fas fa-download download-moreinfo"></i></a></p>
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

actionListLog.addEventListener('click', ()=>{
   addListChildren(list, [...lists].filter(g=>g.listType.toLowerCase() === "-- action"));
})

comedyListLog.addEventListener('click', ()=>{
   addListChildren(list, [...lists].filter(g=>g.listType.toLowerCase() === "-- comedy"));
   
})

horrorListLog.addEventListener('click', ()=>{
   addListChildren(list, [...lists].filter(g=>g.listType.toLowerCase() === "-- horror"));

})

