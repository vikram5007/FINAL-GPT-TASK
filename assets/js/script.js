$(document).ready(function() {
  // Input field animation on focus
  $('input').focus(function() {
    $(this).prev('i').css('color', '#007bff');
    $(this).css('border-color', '#007bff');
  });

  $('input').blur(function() {
    $(this).prev('i').css('color', '#aaa');
    $(this).css('border-color', '#ccc');
  });

  // Form submission and validation
  $('#loginForm').submit(function(e) {
    e.preventDefault();
    $('.error').removeClass('show');

    var usernameOrEmail = $('#usernameOrEmail').val();
    var password = $('#password').val();
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;
    var usernameOrEmailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$|^[\w\s]+$/;

    if (password.match(passwordRegex)) {
      if (usernameOrEmail.match(usernameOrEmailRegex)) {
        // Perform login logic here using usernameOrEmail and password
        // Replace the following line with your own login implementation
        if (usernameOrEmail === 'admin' && password === 'password') {
          window.location.href = 'welcome.html?username=' + encodeURIComponent(usernameOrEmail);
        } else {
          $('#loginError').addClass('show');
          $('#password').val('');
        }
      } else {
        $('#usernameOrEmailError').addClass('show');
        $('#password').val('');
      }
    } else {
      $('#passwordError').addClass('show');
      $('#password').val('');
    }
  });
});
