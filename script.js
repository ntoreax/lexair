	$.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
		type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
		success: function(response){
		buildTable(response)
			function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].id}</td>
							<td>${data[i].name}</td>
							<td>${data[i].username}</td>
							<td>${data[i].email}</td>
							<td>${data[i].address.street}</td>
							<td>${data[i].address.suite}</td>
							<td>${data[i].address.city}</td>
							<td>${data[i].address.zipcode}</td>
							<td>${data[i].address.geo.lat}</td>
							<td>${data[i].address.geo.lng}</td>
					  </tr>`
			table.innerHTML += row


		}
	}
		}
    });