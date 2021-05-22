console.log('We are at js clsss30');

showNotes();

// if user add a notes,add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let addTitle=document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);//parse is used to store notes as array
    }
    let myObj={                       //object literal
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);//if any person add notes then update notes from push()
    localStorage.setItem('notes', JSON.stringify(notesObj));//same as update the localStorage
    addTxt.value = "";
    addTitle.value="";
    // console.log(notesObj);
    showNotes();
})

// function to show element/text from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index+1}  ${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Notes</button>
            </div>
        </div>`;
    });//append card in html and(html+= means html=html+)
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
     notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show! Use 'Add a Notes' section above to add notes.`;
    }
}
// function to delete a note
  function deleteNote(index){
    //   console.log(' i am deleting',index);

      let notes=localStorage.getItem('notes');
      if(notes==null){
          notesObj=[];
      }
      else{
          notesObj=JSON.parse(notes);
      }
      notesObj.splice(index,1);//splice() delete 1 index
      localStorage.setItem('notes',JSON.stringify(notesObj));
      showNotes();
  }
   //for search the text   
  let search=document.getElementById('searchTxt');
  search.addEventListener('input',function(){

    let inputval=search.value.toLowerCase();
    // console.log('input event fired',inputval);

    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display='block';//yha notes show hoga
        }
        else{
            element.style.display='none';//yha notes show ni hoga
        }
        // console.log(cardTxt);
    });

  });

  
