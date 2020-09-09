function sinhVien(ma,ten,email){
        this.maSV=ma;
        this.tenSV=ten;
        this.email=email;
};
var danhSachSV= [];
window.onload=function(){
    var thongbao=document.getElementById('thongbao');
    var them=document.getElementById('them');
    var hienthi=document.getElementById('xem');
    var sua=document.getElementById('sua');
    var xoa=document.getElementById('xoa');
    them.onclick=function(){
        thongbao.innerText="";
        document.getElementById('themsv').style.display = "block";
        document.getElementById('hienthi').style.display = "none";
        document.getElementById('timsinhvien').style.display = "none";
        var ma=document.getElementById('nhapma');
        var ten=document.getElementById('nhapten');
        var email=document.getElementById('nhapemail');
        var add=document.getElementById('add');
        add.onclick=function(){
            document.getElementById('thongbao').style.display="block";
            var check=true;
            for(var i=0;i<danhSachSV.length;i++){
                if(ma.value==danhSachSV[i].maSV){
                    check=false;
                    break;
                }
            }
            if(check==false)
            {
                thongbao.innerText="Nhập mã sinh viên bị trùng!!!"
            }
            else{
                if(ma.value!="" && ten.value!="" && email.value!=""){
                    danhSachSV.push(new sinhVien(ma.value,ten.value,email.value));
                    document.getElementById('themsv').style.display = "none";
                    thongbao.innerText="Thêm sinh viên thành công!"
                }
                else{
                    thongbao.innerText="Bạn nhập sai định dạng!!";
                }
            }
        }
    }
    hienthi.onclick=function(){
        document.getElementById('timsinhvien').style.display="none";
        document.getElementById('themsv').style.display = "none";
        if(danhSachSV.length==0){
            document.getElementById('thongbao').style.display="block";
            thongbao.innerText="Danh sách sinh viên rỗng";
        }
        else{
            var y="<table border='1px'> <tr><th style='width:100px;'>Mã sinh viên</th><th>Họ tên</th><th>Email</th></tr>";
            document.getElementById('thongbao').style.display="none";
            for (var i = 0; i < danhSachSV.length; i++) {
                var x="<tr><td>"+danhSachSV[i].maSV+"</td><td>"+danhSachSV[i].tenSV+"</td><td>"+danhSachSV[i].email+"</td></tr>"
                y+=x;
            }
        y+="</table>";
        document.getElementById('hienthi').innerHTML=y;
        document.getElementById('hienthi').style.display = "block";
        }
    }
    sua.onclick=function(){
        document.getElementById('themsv').style.display = "none";
        document.getElementById('hienthi').style.display = "none";
        document.getElementById('thongbao').style.display="none";
        document.getElementById('timsinhvien').style.display="block";
        var timkiem=document.getElementById('timkiem');
        timkiem.onclick=function(){
            var ma=document.getElementById('nhapmasua').value;
            var i=0;
            for (; i < danhSachSV.length; i++) {
                if(ma==danhSachSV[i].maSV){
                    document.getElementById('timsinhvien').style.display="none";
                    document.getElementById('themsv').style.display = "block";
                    var ma=document.getElementById('nhapma');
                    var ten=document.getElementById('nhapten');
                    var email=document.getElementById('nhapemail');
                    var add=document.getElementById('add');
                    add.onclick=function(){
                        document.getElementById('thongbao').style.display="block";
                        if(ma.value!="" && ten.value!="" && email.value!=""){
                            danhSachSV[i].maSV=ma.value;
                            danhSachSV[i].tenSV=ten.value;
                            danhSachSV[i].email=email.value;
                            document.getElementById('themsv').style.display = "none";
                            thongbao.innerText="Sửa sinh viên thành công";
                        }
                        else{
                            thongbao.innerText="Bạn nhập sai định dạng!!";
                        }
                }
                    break;
                }
            }
            if(i==danhSachSV.length){
                document.getElementById('thongbao').style.display="block";
                thongbao.innerText="Không tìm thấy sinh viên trong danh sách!"
            }
    }
    }
    xoa.onclick=function(){
        document.getElementById('themsv').style.display = "none";
        document.getElementById('hienthi').style.display = "none";
        document.getElementById('thongbao').style.display="none";
        document.getElementById('timsinhvien').style.display="block";
        var timkiem=document.getElementById('timkiem');
        timkiem.onclick=function(){
            var ma=document.getElementById('nhapmasua').value;
            var i=0;
            for (; i < danhSachSV.length; i++) {
                if(ma==danhSachSV[i].maSV){
                    danhSachSV.splice(i,1);
                    document.getElementById('timsinhvien').style.display="none";
                    document.getElementById('thongbao').style.display="block";
                    thongbao.innerText="Xóa sinh viên thành công";
                    break;
                }
            }
            if(i==danhSachSV.length &&(i!=0 && danhSachSV.length!=0)){
                document.getElementById('thongbao').style.display="block";
                thongbao.innerText="Không tìm thấy sinh viên trong danh sách!"
                console.log(i,danhSachSV.length)
            }
    }
}
}