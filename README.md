# Entegrasyon Testi React Modülü Projesi : İletişim Formu - Test etme

Bu modülde react-testing kütüphanesi temeli ile entegrasyon testi metodolojisinin arkasındaki düşünceyi keşfettiniz. Bu projede, arrange-act-assert modelini takip ederek testler oluşturmayı, DOM elemanlarını sorgulamanın çeşitli yollarını, farklı ihtiyaç tiplerinin kullanımlarını ve async/await ile statelerdeki değişimleri test etmeyi incelediniz.

## Web Uygulamalarını Test Etmek

## Hedefler

- otomatik testin ne olduğunu ve önemini açıklamak
- react bileşenlerini test etmek için react-testing-library sini kullanmak
- react-testing-library kullanarak userEvent ile kullanıcı etkileşimlerini test etmek
- async / await ve waitFor kullanarak bileşen statelerindeki değişimleri test etmek.

## Giriş

Bu projede React ile oluşturulmuş bir İletişim Formuna testler yazacaksınız.

Bir geliştirici olarak, her bileşen için testler yazacaksınız. Öğrendiğimiz gibi, testler yazılımların çok önemli bir parçasıdır. 
Yazacağınız testler, productiona pushladığınız koda güvenmenize yardımcı olacaktır!

***Görevlerinizi birer birer tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun.***

## Talimatlar

### Görev 1: Proje Kurulumu

- [ ] Forklayın.
- [ ] Klonlayın.
- [ ] `npm install`
- [ ] `npm start`
- [ ] Başka terminalde `npm test`
- [ ] Editörünüzde yapıp kaydettiğiniz tüm değişiklikler için, test çalıştırıcısı tarafından tüm testler yenilenir
- [ ] **ÖNEMLİ** Eğer testiniz geçemezse, test çalıştırıcısının hata mesajından neden başarasız olduğunu gözlemleyin

### Görev 2: Proje Gereksinimleri

> *Bugünkü tüm işiniz IletisimFormu.test.js dosyası içinde. IletisimFormu bileşeni üzerinde farklı parçalar üzerine 9 adet test kodu yazmayla görevlendirildiniz. Tüm testler için talimatları dikkatlice okuyunuz.*

#### Test Beyin Fırtınası

* [ ] Form arayüzünü çalıştırın ve kurcalayın.
* [ ] Test-Senaryoları.md adında bir dosyaya bu uygulama için yazılabilecek tüm test senaryolarını yazın.

#### Test Caseleri oluşturun, Eğer;

* [ ] iletişim formu hatasız yükleniyorsa.
* [ ] başlıkta h1 elemanı bulunuyorsa. 2 tane assert ekleyin, eğer header dökümanda bulunuyorsa, başlık doğru test içeriğine sahipse.
* [ ] kullanıcı Ada mesajı içeriyorsa. async/await ve state değişimini gözlemlemek için doğru girdileri k bölümüne 5 karakterden az bir şey yazarsa bileşen `1` hatullandığınıza emin olun.
* [ ] kullanıcı hiçbir inputu doldurmadıysa ÜÇ hata mesajı render edildiğinde.
* [ ] kullanıcı email bölümünü doldurmadığında bileşen BİR hata mesajı render ettiğinde.
* [ ] eğer kullanıcı geçersiz bir mail girerse *"email geçerli bir email adresi olmalıdır."* hata mesajı render edildiğinde.
* [ ] form soyad girilmeden gönderilirse *"soyad gereklidir."* hata mesajı render edildiğinde.
* [ ] mesaj inputu girilmediğinde ama ad,soyad ve email geçerli değerlerle form gönderildiğinde hata mesajı gösterilmiyorsa.
* [ ] kullanıcı tüm inputları geçerli bir şekilde doldurup gönderdiğinde tüm değerler görüntüleniyor.
