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

## Installasi node.js dan npm 
untuk melalukan installasi node.js bisa langgsung saja mengunjungin halaman situs resminya di https://nodejs.org/en/ 

## REPL (Read Eval Print Loop)
Repl itu sendiri adalah menjalankan script node.js pada commant line / bash 

### Menjalankannya 
langsung saja ketik pada terminal 
```
$ node 
```
```
> 
```
setelah masuk kedalam repl node.js nya kita bisa mengetikkan sintak javascript contohnya dengan mengitikkan sintak-sintak sederhana seperti ini
``` 
const nama = "reza" 
```
setelah itu bisa langsung tekan enter maka akan tampil seperti ini 
```> ``` itu adalah yang dinamakan loop atau bisa di artikan mengulang kembali perintahnya. jika kita ingin melihat nilai dari sintak yang kita buat tadi maka langsung saja seperti ini 
``` 
> nama 
```
``` 
reza 
```
maka akan tampil seperti di atas
terus bagaimana jika kita memiliki data dari luar dan ingin menjalankannya di dalam repl ? 
caranya adalah dengan mengunakan .load 
```
> .load namafile.js
> .load belajarnode.js

```

### .save 
berfungsi jika kita ingin menyimpan sintak yang telah kita buat di repl dengan cara 
``` 
> .save namafile.js 
> .save belajarnode.js 

```

### .exit
berfungsi untuk keluar dari repl 
### .break 
untuk mengakhirin sebuah aktivias yang sedang dilakukan 
### .clear 
untuk membersihkan sebuah aktivitas yang sedang dilakukan 

