# BELAJAR NODE.JS 

## Apa itu Node.js 
nodeJS adalah runtime aplikasi dimana kita bisa menjalankan kode javascript 

## karakteristik Node.js 
* asynchronous & event driven
* non-blocking 
* single threaded but highly scalable
* cross platform
* mit license 
* npm 

## utama Node.js
* akses file system 
* buffer 
* http & https
* repl 
* console 
* cripto 
* zlib


## Arsitektur Node.js
Node.js memiliki dua komponen utama, yaitu engine JavaScript V8 Google dan Libuv Library. Selain itu, platform tersebut menggunakan dua design pattern: object pool dan facade. Berikut ini adalah penjelasan singaktnya.

* Engine V8
Engine V8 milik google adalah compiler javascript yang dibuat mengunakan bahasa pemrograman c++ dengan komponen ini, input yang berupa kode javacript dapa di compile menjadi kode dalam tingkat assembly. V8 sendiri mimiliki 3 buah komponen :
+ compiler - mengubah javascript menjadi bahasa pemrograman lain
+ optimizer - menciptakan sebuah abstract syntax tree yang akan diubah menjadi static single assignment dioptimasi 
+ gerbage collector - v8 membagi penyimpanan yang ada menjadi dua, yaitu penyimpanan lama dan baru. keduanya menyimpan objek javascript, tetapi penyimpanan baru juga merupakan tempat menaruh output dari compiler. kertika penyimpinan baru sudah penuh, garbage collector meindahkan objek-objek lama ke dalam penyimpanan lama agar kinerja node.js tetap ringan

* libuv library 
Library c++ ini bertugas mengelola operasi asynchronous I/O(input/output) di node.js dan main event loop. di dalamnya juga terdapat thread pool reserve yang menangani setiap operasi I/O

* Design pattern 
Ada dua jenis design pattern yang digunakan oleh node.js, yaitu object pool dan facade. berikut penjelasannya :
+ Object pool - design pettern berisi kumpulan objek yang dapat digunakan untuk task tertentu 
+ facede - design pattern yang memberikan tampilan antaramuka untuk body kode