***
# Webshop Dokumentáció

**Beosztottuk Danival a munkákat, én a fő oldalért, a navbar-ért, a footerért, a kosár tartalmáért, és a rendelés lebonyolításáért felelek, ő pedig a regisztráció, bejelentkezés, kapcsolatok, rólunk fülért + ezek adatbázisra kötéséért felel.**

***
**2023.04.04**
### Oláh Zsolt Martin bejegyzés 
A kezdőlap lassan kész, már csak több árut kell bevinni (jelenleg 9db van) és a jobb lent található kosár funkcióit beállítani, esetleg a keresés inputnak a funkcióit beállítani ha egyáltalán kell.

Jelenleg csak a fülhallgató áru "kosárba rakom" gombja működik amely "belerakja" az árut a kosárba, de dolgozok rajta, hogy a többin is működjön.

Továbbá ha a kosárra kattintunk (még nincs kész) megjeleníti a kosár tartalmát vagy egy külön lapon, vagy egy felugró ablakban.
***

***
**2023.04.05**
### Oláh Zsolt Martin bejegyzés 
Működnek az áruk kosárba rakásai, elkezdtem a kosár kinézetét is megtervezni amint rákattintunk jobb lent a kosárra
***

***
**2023.04.12**
### Viczián Dániel bejegyzés
Elkészült a "regisztráció" és a "bejelentkezés" fül, a hozzátartozó stílus  formázással együtt.

Továbbá folyamatban van a "rólunk" és a "kapcsolatok" fül elkészítése.
***

***
**2023.04.12**
### Oláh Zsolt Martin bejegyzés 
Előszöris a fő oldalon mostmár lehet az árukat hibátlanul hozzáadni a kosárhoz, amely minden áru kártyáján megjelenik az "x" után, hogy mennyi van a kosárban, jobb lent a kosár melletti szám pedig az összes kosárba rakott tárgyat jelenti. Mostmár ki is tudjuk szedni a kosárból a tárgyakat, vagyis visszavonni de még csak a fő oldalon.

A kosár tartalma lapon is fejlesztettem, mostmár kiadja az összes tárgyat, nagyjából a grafikai része kész, már csak be kell programozni js-ben hogy lehesen a darab számot változtatni, és csak azok az áruk jelenjenek meg, amelyeket beleraktunk a kosárba, remélhetőleg a héten már készen lesz.

\+ pár kisebb hibát javítottam
***

***
**2023.04.13**
### Oláh Zsolt Martin bejegyzés 
Megcsináltam, hogy sikeresen megjegyezze, hogy ha az razer viper egeret hozzáadjuk a kosárhoz, akkor ugyanazt a szám mennyiséget mutatja a fő oldalon is mint a kosárnál, a kosárnál lehet a "+" és "-" jellel növelni és csökkenteni a mennyiséget. Ez mind változik a fő oldalon is egyszerre, amint eléri a számláló a nullát akkor eltűnik a kosárból.

Még a kosár ikon buggosan adja ki, hogy mennyi tárgy van a kosárban, de azt csak pár helyen át kell írni, úgy hiszem ,hogy a neheze már megvan, már csak másolgatni és átírogatni kell.

Hozzáadtam a teljes összeget, ahol majd kiírja az összes vásárolandó termékek összegét, és jelenleg az egérnél működik, de a többinél is fog hiszen már csak másolgatni kell és a változó neveket átírni.
***
***
**2023.04.14**
### Viczián Dániel bejegyzés
Elkészült a "kapcsolatok" és a "rólunk" fül, kisebb javítások még lehetnek rajta.

Elkezdem az adatbázisra kötést a regisztáció és a bejelentkezéshez, amit php-val terzezünk megvalósítani.
***

***
**2023.04.14**
### Oláh Zsolt Martin bejegyzés 
Újabb 2 árut csináltam meg, hogy működjön a kosárba rakása, a negyediket is elkezdtem.
***

***
**2023.04.17**
### Oláh Zsolt Martin bejegyzés 
Mostmár minden áruval működik a kosárba rakás, és ha a kosár oldalon kitöröljük vagy hozzáadunk, akkor ott is ugyanazt követi, szóval nagyjából össze lett hangolva a két oldal.
***

***
**2023.04.18**
### Oláh Zsolt Martin bejegyzés 
Elkezdtem a véglegesítést, már csak ezt kell megcinálni, és az adatbázisra kötést, és a két oldal összekötését + a navbar.
***

***
**2023.04.19**
### Oláh Zsolt Martin bejegyzés 
Befejeztem a rendelést, fizetési módok és szállítási módok közül lehet választani. Végig megy hiba nélkül az egész rendelési ág a megrendelés teljesítéséig + csináltam egy footert minden oldalra. Már csak Dani-nak kell befejezni az adatbázisra kötést, és szerintem teljesen készen is vagyunk!
***

***
**2023.04.22**
### Viczián Dániel bejegyzés
A regisztrációs oldalon lehet tárolni adatbázisban a felhasználók adatait, egyelőre hiányosan, a szállítási adatok még hiányoznak.

Az regisztráció tábla teljessé tétele után következik a bejelentkezés adatbázis kötése.
***
***
**2023.05.03**
### Viczián Dániel bejegyzés
Elkészült a regisztráció, illetve a bejelenkezés oldal illetve az adatbázis. Ha egy az már adatbázisban szereplő név, vagy email kerül beírásra, akkor kiírja az oldal a "sikeres bejelentkezés" feliratot.
***