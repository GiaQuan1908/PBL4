function signin() {
	var username = $("#username").val().trim();
	var password = $("#password").val().trim();
	if (username && password) {
		alert(username+'   '+password)
	} else {
		alert('Vui Lòng Nhập Đầy Đủ Thông Tin');
	}
}