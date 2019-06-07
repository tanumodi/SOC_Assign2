function filtered(){
	var td;
	var table= document.getElementById('t1');
	var input= document.getElementById('name').value.toUpperCase();
	var tr= table.getElementsByTagName('tr');
	for (var i = 0; i<tr.length; i++) {
	   td = tr[i].getElementsByTagName('td')[1];
	   if(td){
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
  }
}
}