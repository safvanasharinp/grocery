function ajax(){
    const div=document.querySelector('#inner');
    div.classList.remove('hidden');
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var res=JSON.parse(this.responseText);
            console.log(res);
            var res1=res.grocery;
            console.log(res1);
            var output="";
            for(var i=0;i<res1.length;i++)
            {
                output+=`<tr>
                <td>${res1[i].slno}</td>
                <td>${res1[i].name}</td>
                <td>${res1[i].quantity}</td>
                <td>${res1[i].unit}</td>
                <td>${res1[i].category}</td>
                <td>${res1[i].remarks}</td>
                </tr>`;
                console.log(output);
                document.getElementById("tabody").innerHTML=output;
                document.getElementById("tabody").style.textAlign="center";
            }
        }
    };
    xhttp.open("GET","ajax.json",true);
    xhttp.send();
}