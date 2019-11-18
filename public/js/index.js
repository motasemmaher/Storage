
$('document').ready(()=>{
    $('.delete').click(()=>{
        event.preventDefault();
        const id = $(this).attr('data-id');
        var type=$(this).attr('data-info');
        alert(type + " " +id);
        $.ajax({
            url: `/delete/${type}/${id}`,
            method: 'DELETE',
            data: { id: id }
            })
            window.location.reload()
    })
    $('.edit').click(()=>{
        event.preventDefault();
        const id = $('.edit').attr('data-id');
        var type=$('.edit').attr('data-info');
        $.ajax({
            url: `/update/${type}/${id}`,
            method: 'put',
            data: { id: id }
            })
            window.location.reload()
    })
   

})  

