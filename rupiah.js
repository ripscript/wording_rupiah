function force_input_number(s) { var u = s.which ? s.which : s.keyCode; return !(u > 31) || !(u < 48) && !(u > 57) } function satuan(s) { let u = s.replace(/,/g, ""), t; return 1 == (u.toString(), u.toString().length) && (1 == u ? t = "satu" : 2 == u ? t = "dua" : 3 == u ? t = "tiga" : 4 == u ? t = "empat" : 5 == u ? t = "lima" : 6 == u ? t = "enam" : 7 == u ? t = "tujuh" : 8 == u ? t = "delapan" : 9 == u ? t = "sembilan" : 0 == u && (t = "")), void 0 != t && t } function puluhan(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, 0 == t.substring(0, 1) ? n = satuan(t.substring(1, 2)) : 1 == t.substring(0, 1) ? 0 == t.substring(1, 2) ? 1 == t.substring(0, 1) ? n = "sepuluh" : 2 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 3 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 4 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 5 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 6 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 7 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 8 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh" : 9 == t.substring(0, 1) && (n = satuan(t.substring(0, 1)) + " puluh") : 1 == t.substring(1, 2) ? n = "sebelas" : 2 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 3 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 4 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 5 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 6 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 7 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 8 == t.substring(1, 2) ? n = satuan(t.substring(1, 2)) + " belas" : 9 == t.substring(1, 2) && (n = satuan(t.substring(1, 2)) + " belas") : 2 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 3 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 4 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 5 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 6 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 7 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 8 == t.substring(0, 1) ? n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2)) : 9 == t.substring(0, 1) && (n = satuan(t.substring(0, 1)) + " puluh " + satuan(t.substring(1, 2))), void 0 != n && n } function ratusan(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; if (u.toString().length, 0 == t.substring(0, 1)) n = puluhan(t.substring(1, 3)); else if (1 == t.substring(0, 1)) { let r, a; 0 == t.substring(1, 2) ? (r = "seratus", a = satuan(t.substring(2, 3))) : (r = 1 == t.substring(0, 1) ? "seratus" : satuan(t.substring(0, 1)) + " ratus", a = puluhan(t.substring(1, 3))), n = r + " " + a } else { let i, g; 0 == t.substring(1, 2) ? (i = satuan(t.substring(0, 1)) + " ratus", g = satuan(t.substring(2, 3))) : (i = 1 == t.substring(0, 1) ? "seratus" : satuan(t.substring(0, 1)) + " ratus", g = puluhan(t.substring(1, 3))), n = i + " " + g } return void 0 != n && n } function ribuan(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, void 0 != (n = 0 == t.substring(0, 1) ? ratusan(t.substring(1, 4)) : 1 == t.substring(0, 1) ? "000" == t.substring(1, 4) ? "seribu" : "seribu " + ratusan(t.substring(1, 4)) : "000" == t.substring(1, 4) ? satuan(t.substring(0, 1)) + " ribu" : satuan(t.substring(0, 1)) + " ribu " + ratusan(t.substring(1, 4))) && n } function ribuan_puluhan(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, 0 == t.substring(0, 1) ? n = ribuan(t.substring(1, 5)) : (t.substring(0, 1), n = "0000" == t.substring(1, 5) ? puluhan(t.substring(0, 2)) + " ribu" : puluhan(t.substring(0, 2)) + " ribu " + ratusan(t.substring(2, 5))), void 0 != n && n } function ratusan_ribu(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, 0 == t.substring(0, 1) ? n = ribuan_puluhan(t.substring(1, 6)) : (t.substring(0, 1), n = "00000" == t.substring(1, 6) ? ratusan(t.substring(0, 3)) + " ribu" : ratusan(t.substring(0, 3)) + " ribu " + ratusan(t.substring(3, 6))), void 0 != n && n } function jutaan(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, void 0 != (n = 0 == t.substring(0, 1) ? ratusan_ribu(t.substring(1, 7)) : "000000" == t.substring(1, 7) ? satuan(t.substring(0, 1)) + " juta" : satuan(t.substring(0, 1)) + " juta " + ratusan_ribu(t.substring(1, 7))) && n } function puluhan_juta(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, void 0 != (n = 0 == t.substring(0, 1) ? jutaan(t.substring(1, 8)) : "0000000" == t.substring(1, 8) ? puluhan(t.substring(0, 2)) + " juta" : puluhan(t.substring(0, 2)) + " juta " + ratusan_ribu(t.substring(2, 8))) && n } function ratusan_juta(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, 0 == t.substring(0, 1) ? n = puluhan_juta(t.substring(1, 9)) : "00000000" == t.substring(1, 9) ? n = ratusan(t.substring(0, 3)) + " juta" : (console.log(t.substring(3, 9)), n = ratusan(t.substring(0, 3)) + " juta " + ratusan_ribu(t.substring(3, 9))), void 0 != n && n } function milyar(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, 0 == t.substring(0, 1) ? n(ratusan_juta(t.substring(1, 10))) : n = "000000000" == t.substring(1, 10) ? satuan(t.substring(0, 1)) + " milyar" : satuan(t.substring(0, 1)) + " milyar " + ratusan_juta(t.substring(1, 10)), void 0 != n && n } function puluhan_milyar(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, void 0 != (n = 0 == t.substring(0, 1) ? milyar(t.substring(1, 11)) : "000000000" == t.substring(1, 11) ? puluhan(t.substring(0, 2)) + " milyar" : puluhan(t.substring(0, 2)) + " milyar " + ratusan_juta(t.substring(2, 11))) && n } function ratusan_milyar(s) { let u = s.replace(/,/g, ""), t = u.toString(), n; return u.toString().length, void 0 != (n = 0 == t.substring(0, 1) ? ratusan_milyar(t.substring(1, 12)) : "0000000000" == t.substring(1, 12) ? ratusan(t.substring(0, 3)) + " milyar" : ratusan(t.substring(0, 3)) + " milyar " + ratusan_juta(t.substring(3, 12))) && n } function rupiah_word(s) { let u = s.replace(/,/g, ""), t = (u.toString(), u.toString().length), n; return !0 != isNaN(parseInt(s)) && ("" == s ? n = "Nol" : 1 == t ? n = satuan(s) : 2 == t ? n = puluhan(s) : 3 == t ? n = ratusan(s) : 4 == t ? n = ribuan(s) : 5 == t ? n = ribuan_puluhan(s) : 6 == t ? n = ratusan_ribu(s) : 7 == t ? n = jutaan(s) : 8 == t ? n = puluhan_juta(s) : 9 == t ? n = ratusan_juta(s) : 10 == t ? n = milyar(s) : 11 == t ? n = puluhan_milyar(s) : 12 == t && (n = ratusan_milyar(s)), void 0 !== n && n + " rupiah") }