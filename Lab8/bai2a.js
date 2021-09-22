function search__lesson(){
    var selectSubject = Number(document.getElementById('select').value)
    var num =selectSubject
     switch (num){
         case 0:{ alert('Vui Lòng Chọn Một Môn Học') ;break};
         case 1: window.location.replace('https://longnv.name.vn/lap-trinh-javascript');break;
         case 2: window.location.replace('https://longnv.name.vn/lap-trinh-javascript');break;
         case 3:  window.location.replace('https://longnv.name.vn/lap-trinh-javascript');break;
         case 4: window.location.replace('https://longnv.name.vn/lap-trinh-javascript');break;
         case 5: window.location.replace('https://longnv.name.vn/lap-trinh-javascript/mo-hinh-dom-trong-javascript');break;
         case 6: window.location.replace('https://longnv.name.vn/lap-trinh-javascript/kiem-tra-du-lieu-trong-form-voi-javascript');break;
         case 7: window.location.replace('https://longnv.name.vn/lap-trinh-javascript/gioi-thieu-ve-javascript-framework');break;
         case 8: window.location.replace('https://longnv.name.vn/lap-trinh-javascript/su-dung-angularjs');break;           
     }
     
}