
// $(function(){
//     function getData(url, fn)
//     {
//         $.ajax({
//             url: url,
//             method:'post',
//             success: function(data)
//             {
//                 fn(data);
//             },
//             error: function(error){
//                 console.log("worong");
//             }
//         })
//     }
    
//     $('.line').delay(2000).fadeIn("slow"); 
//     $('.text').delay(3000).fadeIn("slow");
//     $('.arrow').delay(3000).fadeIn("slow");


//     function setpath(att, show, fn)
//     {
//         $(att).on('mouseover',function(){
//             $(show).css('display', 'block');
//         });
//         $(att).on('mouseout',function(){
//             $(show).css('display', 'none');
//         });
//         $(att).on('click', fn);
//     }
//     function showDetail(){
//         const id = $(this).attr('data-id');
//         getData('getDetail.php?id='+id, function(data){
//             console.log(data.image);
//             if(data.image === null)
//             {
//                 $('.detail').html("<img id='close' src='imgs/close-03.png' alt='typo' /><h2 class='detailtit'>"+data.name+"</h2><p class='able'>"+data.detail+"</p>");
//                 $('.detail').css('display', 'flex');
//                 $('p').css('width','500px');
//             }else{
//                 $('.detail').html("<img class='able' src='imgs/"+data.image+"' alt='"+data.name+"'><img id='close' src='imgs/close-03.png' alt='typo' /><h2 class='detailtit'>"+data.name+"</h2><p class='able'>"+data.detail+"</p>");
//                 $('.detail').css('display', 'flex');
//             }
//             $('#close').on('click', function(){
//                 $('.detail').css('display','none');
//             })
//         })
//     }

//     setpath(".a",".x-height",showDetail);
//     setpath(".n",".serif",showDetail);
//     setpath(".a1",".bowl",showDetail);
//     setpath(".t",".term",showDetail);
//     setpath(".o,.o1,.a3",".counter",showDetail);
//     setpath(".m",".letter",showDetail);
//     setpath(".y,.p",".descender",showDetail);
//     setpath(".f,.f1",".ascender",showDetail);
//     setpath(".a2",".crossbar",showDetail);
//     setpath(".t1",".stem",showDetail);
//     setpath(".y1",".storke",showDetail);
//     setpath(".e",".baseline",showDetail);
//     setpath(".c",".aperture",showDetail);
//     setpath(".e1",".leading",showDetail);
// });
