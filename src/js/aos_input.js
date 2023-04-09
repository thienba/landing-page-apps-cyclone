import AOS from 'aos';
import 'aos/dist/aos.css';

const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
// `navigator.userAgent` là đối tượng chứa thông tin về trình duyệt đang được sử dụng, bao gồm cả hệ điều hành và thiết bị

// Biểu thức `/iPhone|iPod|Android/i` là một biểu thức chính quy (regular expression) để so khớp (match) chuỗi văn bản `navigator.userAgent` với các từ khóa "iPhone", "iPod" hoặc "Android".

// Nếu chuỗi văn bản `navigator.userAgent` của trình duyệt hiện tại chứa ít nhất một trong các từ khóa trên, biến `isMobile` sẽ được gán với giá trị `true`, ngược lại sẽ được gán với giá trị `false`.

if (isMobile) {
    AOS.init({
        disable: 'mobile'
    });
} else {
    AOS.init({
        duration: 1500,
        once: true
    });
}