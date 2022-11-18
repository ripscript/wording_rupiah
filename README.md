
# Wording_Rupiah

Library kecil yang dibuat dengan bahasa pemograman javascript, untuk mengkonversi nilai rupiah indonesia menjadi string `Terbilang` dari nilai rupiah nya



## Cara penggunaan

1.Extend javascript file pada project kamu
```html
  <script src="./path/rupiah.js"></script>
```

2.Gunakan function dibawah ini untuk menkonverisikan  nilai rupiah kamu : 
```javascript
  const terbilang = rupiah_word(25000) // dua puluh lima ribu rupiah
```

## Function tambahan
1.Force numeric pada input kamu `force_input_number()`
```html
  <input type="text" onkeypress="return force_input_number(event)" placeholder="Masukan nomor..." />
```