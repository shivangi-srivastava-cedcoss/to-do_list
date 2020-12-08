$('#btnAdd').click(function()
{
    var newTask=$('#txtInput').val();
    $("#pendingList").append("<li class='mb-li'><input type='checkbox' class='checkbox'><label>"+newTask+"</label><input type='text'><input type='button' value='Edit' class='btnEdit'><input type='button' class='btnDel' value='Delete'></li>");
    $('#txtInput').val('');
});
$(document).on("click", ".btnDel", function() {
    $(this).parent().remove(); 
});
$(document).on("click", ".btnEdit", function() {
    let editli=$(this).parent();
    var lbl1=editli.children("label").text();
    if(editli.children(".btnEdit").val()=="Edit")
    {
        editli.children(".btnEdit").val('Update');
        editli.children("input[type=text]").val(lbl1);
    }
    else
    {
        editli.children(".btnEdit").val('Edit');
        editli.children("label").text(editli.children("input[type=text]").val());
        editli.children("input[type=text]").val('');
    }
});
$(document).on("click", ".checkbox", function() {
    var editli;
    if($(this).parent().parent().attr('id')=="pendingList") {
        editli=$(this).parent();
        $("#CompletedList").append(editli);
    }
    else
    {
        editli=$(this).parent();
        $("#pendingList").append(editli);
    }
});