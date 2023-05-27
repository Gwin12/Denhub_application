const musicList = document.querySelector(".music-list-holder");
const afrobeatListLog = document.getElementById("afrobeat-log");
const popListLog = document.getElementById("pop-log");
const rbListLog = document.getElementById("r&b-log");
const rapListLog = document.getElementById("rap-log");




const musicLists = [
   {
      listName: "Work It --- Rihanna ",
      listLink: "#collapseExample1",
      listGenre: "pop",
      listDownloadLink:"",
      listId: "collapseExample1",
      listArtists: "Rihanna",
      listCategory:'"R"',
      listYear: ""
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample2",
      listGenre: "pop",
      listDownloadLink:"",
      listId: "collapseExample2",
      listArtists: "",
      listCategory:'"B"',
      listYear: ""
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample3",
      listGenre: "r&b",
      listDownloadLink:"",
      listId: "collapseExample3",
      listArtists: "",
      listCategory:'"C"',
      listYear: ""
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample4",
      listGenre: "rap",
      listDownloadLink:"",
      listId: "collapseExample4",
      listArtists: "",
      listCategory:'"Z"',
      listYear: ""
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample5",
      listGenre: "pop",
      listDownloadLink:"",
      listId: "collapseExample5",
      listArtists: "",
      listCategory:'"E"',
      listYear: ""
   },
   {
      listName: "name of movie",
      listLink: "#collapseExample6",
      listGenre: "afrobeat",
      listDownloadLink:"",
      listId: "collapseExample6",
      listArtists: "",
      listCategory:'"F"',
      listYear: ""
   }
   
]



function addMusicListChildren(root, children){
   let musicListBody = "";
   
   children.map(child=>{
      const templates = `<div class="col-sm-6 col-md-4 col-lg-3 ">
      <ul>
         <li>${child.listName}
            <span>
               
               <a data-toggle="collapse" listLink="info" href="${child.listLink}" role="button" data aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-ellipsis-h download-moreinfo "></i></a>
               <div class="collapse" id="${child.listId}">
                  <div class="card card-body moreinfo-body">
                    <div>
                     <div class="container-fluid jlov">
                        <div class="row">
                           <div class="col-6"><p>Artists: </p></div>
                           <div class="col-6">${child.listArtists}</div>
                           <div class="col-6"><p>Genre: </p></div>
                           <div class="col-6">${child.listGenre}</div>
                           <div class="col-6"><p>Category: </p></div>
                           <div class="col-6">${child.listCategory}</div>
                           <div class="col-6"><p>Year: </p></div>
                           <div class="col-6">${child.listYear}</div>
                           <div class="col-6"><p>Download: </p></div>
                           <div class="col-6"><a href="${child.listDownloadLink}" listLink="download"><i class="fas fa-download download-moreinfo "></i></a></div>
                        </div>
                     </div>
                    </div>
                  </div>
               </div>
            </span>
         </li>
         <hr>
      </ul>
    </div>`;
      musicListBody += templates;
                        
                        
   })
   root.innerHTML = musicListBody;
}
addMusicListChildren(musicList, musicLists);

afrobeatListLog.addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listGenre.toLowerCase() === "afrobeat"));
})

popListLog.addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listGenre.toLowerCase() === "pop"));
   
})

rbListLog.addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listGenre.toLowerCase() === "rb"));

})

rapListLog.addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listGenre.toLowerCase() === "rap"));

})


//A--Z
document.querySelector(".musicA").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"a"'));
})
document.querySelector(".musicB").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"b"'));
})
document.querySelector(".musicC").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"c"'));
})
document.querySelector(".musicD").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"d"'));
})
document.querySelector(".musicE").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"e"'));
})
document.querySelector(".musicF").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"f"'));
})
document.querySelector(".musicG").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"g"'));
})
document.querySelector(".musicH").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"h"'));
})
document.querySelector(".musicI").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"i"'));
})
document.querySelector(".musicJ").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"j"'));
})
document.querySelector(".musicK").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"k"'));
})
document.querySelector(".musicL").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"l"'));
})
document.querySelector(".musicM").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"m"'));
})
document.querySelector(".musicN").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"n"'));
})
document.querySelector(".musicO").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"o"'));
})
document.querySelector(".musicP").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"p"'));
})
document.querySelector(".musicQ").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"q"'));
})
document.querySelector(".musicR").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"r"'));
})
document.querySelector(".musicS").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"s"'));
})
document.querySelector(".musicT").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"t"'));
})
document.querySelector(".musicU").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"u"'));
})
document.querySelector(".musicV").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"v"'));
})
document.querySelector(".musicW").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"w"'));
})
document.querySelector(".musicX").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"x"'));
})
document.querySelector(".musicY").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"y"'));
})
document.querySelector(".musicZ").addEventListener('click', ()=>{
   addMusicListChildren(musicList, [...musicLists].filter(g=>g.listCategory.toLowerCase() === '"z"'));
})