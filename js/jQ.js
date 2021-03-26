$(function(){

//animation

$('header').slideDown(1000,function(){
    $('section:eq(0)').fadeIn(2000,function(){
        $('section:eq(1)').show(1000,function(){
            $('section:eq(2)').slideDown(1000,function(){$('footer').fadeIn(2000)})})
        })
    })


//building the Form

//Grid Height input
$("form").append("<p>Grid Height:<input type='number' id='inputHeight'></p>")
$("#inputHeight").attr({
    "name":"height",
    "min":"1",
    "value":"1"
})

//Grid Width input
$('p').append("Grid Width:<input type='number' id='inputWidth'>")
$("#inputWidth").attr({
    "name":"width",
    "min":"1",
    "value":"1"
})
//button submit
$("<input type='submit' id='submit'>").insertAfter('p')


//Table and coloring

    $(':submit').click(function(e){
        e.preventDefault();
        var W= $('#inputWidth').val()
        var H=$('#inputHeight').val()
     console.log("w=",W,"H=",H)
     $('table').empty();// for reseting tables
     for(let i=1;i<=H;i++)
     {
         $('table').append(`<tr id="t" ${i}></tr>`) //building <tr> "ROWS" 
     }
     for(let j=1;j<=W;j++)
     {
         $('tr').append(`<td ${j}></td>`)//building <td> "COLOMNS" 
     }
     //Add colors  
     $('td').click(function(){
       var COLOR=$('#colorPicker').val();
      $(this). css('backgroundColor',COLOR) 
    })
    //Remove Color
    $('td').dblclick(function(){
       $(this).removeAttr("style")
     })
})  
  
})

