const firebaseConfig = {
  apiKey: "AIzaSyCpzhxGAr0FErpDZpv6wDi-3x0kGb8cd6M",
  authDomain: "flamesmp-2e0a9.firebaseapp.com",
  projectId: "flamesmp-2e0a9",
  storageBucket: "flamesmp-2e0a9.firebasestorage.app",
  messagingSenderId: "342260381938",
  appId: "1:342260381938:web:23f3e50f30701b4355786b",
  measurementId: "G-SP88WQ8M10"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Puan ve günlük hak için UTC tarihi (rules ile aynı hesap): 20261124 gibi bir sayı
function todayKey() {
  const d = new Date();
  return d.getUTCFullYear() * 10000 + (d.getUTCMonth() + 1) * 100 + d.getUTCDate();
}