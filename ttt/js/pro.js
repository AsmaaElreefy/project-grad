



// SELSCT النطاق

document.getElementById('selectMenu').addEventListener('change', function() {
  var selectedOption = this.value;
  var uiContainer = document.getElementById('selectM');
  

  uiContainer.innerHTML = '';
  
  if (selectedOption === 'option1') {
    uiContainer.innerHTML ='<input list="اسم السورة" name="drop"  placeholder="اسم السّورة"><input  type="text" placeholder ="رَقم الآيَة"><div class="search1"><input  class="y " type="text" placeholder ="حَرف، كَلِمة، كَلِمات "> <button  class="x"> <i class="fas fa-search i1"  ></i></button></div><br>';
  } else if (selectedOption === 'option2') {
    uiContainer.innerHTML = '<input list="اسم السورة" name="drop"  placeholder="اسم السّورة">';
  } else if (selectedOption === 'option3') {
    uiContainer.innerHTML = '';
  } else if (selectedOption === 'option4') {
    uiContainer.innerHTML ='<input  type="search" placeholder ="جُملَة"><i class="fas fa-search i1"  ></i>';         
  }

});



// حساب الجملpop up
document.addEventListener('DOMContentLoaded', function() {
  var selectElement = document.getElementById('selectElement');
  var popupElement = document.getElementById('popup');
  
  selectElement.addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex].text;
    
    popupElement.innerHTML = '<p>' + selectedOption + '</p>';
    popupElement.style.display = 'block';
    
     // setTimeout(function() {
    //   popupElement.style.display = 'none';
    // }, 4000); 
  });
  
});

// pop up عد الحروف
function showPopup() {
          document.getElementById('popup').style.display = 'block';
      }
  
      function hidePopup() {
          document.getElementById('popup').style.display = 'none';
      };

// اظهار النص المطلوب

  function toggleDiv() {
                var div = document.getElementById('hiddenDiv');
                if (document.getElementById('radioButton').checked) {
                    div.style.display = 'block';
                } else {
                    div.style.display = 'none';
                }
            }


   

 
    
// select حساب الجمل
      function toggleSelect() {
        var select = document.getElementById('selectElement');
        if (document.getElementById('radioButton').checked) {
            select.style.display = 'none';
        } else {
            select.style.display = 'block';
        }
    }
    
// pop ناتج عدد مرات تكرار

document.getElementById('openPopupButton').addEventListener('click', function() {
  document.getElementById('popu').classList.remove('hidden');
});

function closePopup() {
  document.getElementById('popu').classList.add('hidden');
}

// 



