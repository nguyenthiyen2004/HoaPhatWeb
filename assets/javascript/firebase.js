//! firebase
// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDYQd-a8L0JFbMWI-3zHsdiIB43ex9vsk",
  authDomain: "webhoaphat.firebaseapp.com",
  projectId: "webhoaphat",
  storageBucket: "webhoaphat.appspot.com",
  messagingSenderId: "636686236737",
  appId: "1:636686236737:web:49165efb26da1428e45ac0",
  measurementId: "G-JPCWVKNN5L"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDVEtCJRsQH3TC3Xzb6TcyRCbHhXUKNWdA",
//   authDomain: "test-7ec00.firebaseapp.com",
//   databaseURL: "https://test-7ec00-default-rtdb.firebaseio.com",
//   projectId: "test-7ec00",
//   storageBucket: "test-7ec00.appspot.com",
//   messagingSenderId: "733926799365",
//   appId: "1:733926799365:web:c56ec1ad662b65e606846c",
//   measurementId: "G-FEM2DEC4HX"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore(app);

// ! register
const formRegister = document.querySelector('.signup-form');
if (formRegister) {
  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = formRegister.querySelector('input[name="email"]').value;
    const password = formRegister.querySelector('input[name="password"]').value;
    const fullName = formRegister.querySelector('input[name="fullName"]').value;
    const phoneNumber = formRegister.querySelector('input[name="phoneNumber"]').value;
    const username = formRegister.querySelector('input[name="username"]').value;
    const confirmPassword = formRegister.querySelector('input[name="confirmPassword"]').value;
    const agree = formRegister.querySelector('input[name="agree"]').checked;

    if (!agree) {
      alert('Vui lòng đồng ý với điều khoản và điều kiện của chúng tôi!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email không đúng định dạng!');
      return;
    }

    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(password)) {
      alert('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: fullName
      });
      await setDoc(doc(db, "users", userCredential.user.uid), { // setDoc(collection(db, "users")
        email,
        fullName,
        phoneNumber,
        username
      });
      alert('Đăng ký thành công');
      window.location.href = '/signin/index.html';
    } catch (error) {
      console.log(error);
      alert('Đăng ký thất bại');
    }
  })
}

// ! login
const formLogin = document.querySelector('.login-form');
if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = formLogin.querySelector('input[name="email"]').value;
    const password = formLogin.querySelector('input[name="password"]').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email không đúng định dạng!');
      return;
    }

    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(password)) {
      alert('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Đăng nhập thành công');
      window.location.href = '/index.html';
    } catch (error) {
      console.log(error);
      alert('Đăng nhập thất bại');
    }
  })
}

// // ! logout
const logout = document.querySelector('.logoutBtn');
if (logout) {
  logout.addEventListener('click', async () => {
    try {
      await signOut(auth);
      alert('Đăng xuất thành công');
      window.location.href = '/page-no-login/index.html';
    } catch (error) {
      alert('Đăng xuất thất bại');
    }
  })
}

// ! check if user is logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const formEdit = document.querySelector('.edit-form');
    if (formEdit) {
      const userDocRef = doc(db, "users", user.uid);
      const infoUser = await getDoc(userDocRef);

      formEdit.querySelector('input[name="email"]').value = user.email;
      formEdit.querySelector('input[name="fullName"]').value = infoUser.data().fullName;
      formEdit.querySelector('input[name="username"]').value = infoUser.data().username;

      formEdit.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = formEdit.querySelector('input[name="email"]').value;
        const fullName = formEdit.querySelector('input[name="fullName"]').value;
        const username = formEdit.querySelector('input[name="username"]').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Email không đúng định dạng!');
          return;
        }

        try {
          await updateProfile(user, {
            displayName: fullName
          });
          await setDoc(userDocRef, {
            email,
            fullName,
            username
          });
          alert('Cập nhật thông tin thành công');
        } catch (error) {
          alert('Cập nhật thông tin thất bại');
        }
      })
    }

    const userFullName = document.querySelector('.userFullName');
    if (userFullName) {
      userFullName.innerText = user.displayName;
    }
  } else {
    console.log('Logged out');
  }
})

// ! get data

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[name="fullName"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const phone = contactForm.querySelector('input[name="phoneNumber"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    try {
      const docRef = doc(collection(db, "contacts"));
      await setDoc(docRef, {
        name,
        email,
        phone,
        message
      });
    
      const buttonClick = document.querySelector('.button-click');
      buttonClick.click();
    
    } catch (error) {
      console.error("Error setting document: ", error);
      alert('Gửi thông tin thất bại');
    }
  })
}

//! end firebase