---
draft: true
date: 2020-03-13T04:43:34Z
publishdate: 2020-03-13
lastmod: 2020-03-13
title: "Sekilas tentang brace expansion"
subtitle: "Sebuah mekanisme untuk menghasilkan urutan string"
description : "Brace Expansion adalah sebuah mekanisme untuk menghasilkan urutan string pada Bash scripting."
slug: "sekilas-tentang-brace-expansion"
categories:
- terminal
resources:
- src: "cover.jpeg"
  name: "cover"
- src: "*.jpeg"
---

Di dalam bash scripting atau terminal GNU/Linux (khususnya shell bash), brace expansion biasanya digunakan untuk menghasilkan urutan string dalam satu kali jalan. Misalnya ketika ingin membuat banyak direktori daripada menjalankan perintah `mkdir` berkali-kali untuk setiap direktori yang akan dibuat, dengan brace expansion kita hanya perlu menjalankan perintah tersebut sekali saja.

Contoh :
```
# perintah
$ mkdir {data,static,layout}

# output
data static layout
```
Untuk mendefinisikan brace expansion kita hanya perlu membuat beberapa string yang dipisahkan dengan tanda koma (,) di dalam kurung kurawal '{ }'. Tidak hanya string, tapi kita juga dapat mendefinisikan brace expansion dengan **range**.

Dalam brace expansion juga terdapat dua bagian lain yang bisa digunakan, yaitu **preamble** dan **postscript**.

- **Preamble** digunakan untuk menambahkan teks atau karakter di depan setiap string yang dihasilkan.
- Dan **Postscript** digunakan untuk menambahkan teks atau karakter di akhir setiap string yang dihasilkan.

Contoh syntax:

1. String list
```
{str1,str2...strtN}
```
2. Range list
```
{<awal>..<akhir>}
```
3. Preamble
```
char{str1,str2...strtN}
```
4. Postscript
```
{str1,str2...strtN}char
```
5. Kombinasi preamble dan postscript
```
char{str1,str2...strtN}char1
```
Nah itulah penjelasan sederhana mengenai brace expansion. Selanjutnya saya akan memberikan beberapa contoh penggunaan (use case) brace expansion tersebut dari pengalaman saya sendiri selama menggunakan GNU/Linux.

***

## Contoh Penggunaan
Dalam pengalaman saya, penggunaan brace expansion ini sangat berguna dan meningkatkan efisiensi saat beraktivitas dengan terminal. Yah, setidaknya membuat hal-hal rumit menjadi lebih mudah.

Berikut ini beberapa contoh penggunaan dari brace expansion yang biasa saya gunakan sehari-hari.

### 1. Membuat Alias
Alias biasanya digunakan untuk menyingkat perintah yang cukup panjang menjadi beberapa karakter saja. Dalam pembuatan alias ini saya juga biasanya menggunakan brace expansion untuk menyingkat alias tersebut.
> Disini saya menggunakan perpaduan preamble, seperti yang sudah dijelaskan di atas.

Daripada membuat alias seperti ini,
```
alias vi='nvim'
alias vim='nvim'
```
Dengan brace expansion hasilnya bisa lebih sederhana,
```
alias v{i,im}='nvim'
```
Lebih sederhana dan less error.

### 2. Membuat Banyak Direktori


***

Referensi:
- Brace Expansion - [Bash Refence Manual](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html)
