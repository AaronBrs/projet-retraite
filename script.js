// init tableau de revalorisation
var tabRevalo = new Map();
tabRevalo.set(2022,1.04);
tabRevalo.set(2021,1.051);
tabRevalo.set(2020,1.055);
tabRevalo.set(2019,1.066);
tabRevalo.set(2018,1.081);
tabRevalo.set(2017,1.089);
tabRevalo.set(2016,1.089);
tabRevalo.set(2015,1.09);
tabRevalo.set(2014,1.09);
tabRevalo.set(2013,1.104);
tabRevalo.set(2012,1.126);
tabRevalo.set(2011,1.149);
tabRevalo.set(2010,1.159);
tabRevalo.set(2009,1.17);
tabRevalo.set(2008,1.18);
tabRevalo.set(2007,1.192);
tabRevalo.set(2006,1.212);
tabRevalo.set(2005,1.234);
tabRevalo.set(2004,1.256);
tabRevalo.set(2003,1.276);
tabRevalo.set(2002,1.297);
tabRevalo.set(2001,1.327);
tabRevalo.set(2000,1.354);
tabRevalo.set(1999,1.361);
tabRevalo.set(1998,1.376);
tabRevalo.set(1997,1.392);
tabRevalo.set(1996,1.407);
tabRevalo.set(1995,1.442);
tabRevalo.set(1994,1.459);
tabRevalo.set(1993,1.485);
tabRevalo.set(1992,1.485);
tabRevalo.set(1991,1.535);
tabRevalo.set(1990,1.558);
tabRevalo.set(1989,1.602);
tabRevalo.set(1988,1.661);
tabRevalo.set(1987,1.7);
tabRevalo.set(1986,1.764);
tabRevalo.set(1985,1.805);
tabRevalo.set(1984,1.884);
tabRevalo.set(1983,1.987);
tabRevalo.set(1982,2.107);
tabRevalo.set(1981,2.359);
tabRevalo.set(1980,2.673);
tabRevalo.set(1979,3.04);
tabRevalo.set(1978,3.334);
tabRevalo.set(1977,3.707);
tabRevalo.set(1976,4.298);
tabRevalo.set(1975,5.058);
tabRevalo.set(1974,6.009);
tabRevalo.set(1973,6.816);
tabRevalo.set(1972,7.376);
tabRevalo.set(1971,8.186);
tabRevalo.set(1970,9.126);
tabRevalo.set(1969,10.047);
tabRevalo.set(1968,11.589);
tabRevalo.set(1967,12.573);
tabRevalo.set(1966,13.28);
tabRevalo.set(1965,14.054);
tabRevalo.set(1964,15.024);
tabRevalo.set(1963,16.68);
tabRevalo.set(1962,18.688);
tabRevalo.set(1961,21.678);
tabRevalo.set(1960,24.932);
tabRevalo.set(1959,26.851);
tabRevalo.set(1958,29.672);
tabRevalo.set(1957,33.683);
tabRevalo.set(1956,36.212);
tabRevalo.set(1955,40.563);
tabRevalo.set(1954,44.01);
tabRevalo.set(1953,47.096);
tabRevalo.set(1952,47.751);
tabRevalo.set(1951,57.306);
tabRevalo.set(1950,80.756);
tabRevalo.set(1949,92.055);
tabRevalo.set(1948,108.91);
tabRevalo.set(1947,155.992);
tabRevalo.set(1936,30406.871);
tabRevalo.set(1937,21295.862);
tabRevalo.set(1938,19313.500);
tabRevalo.set(1939,17732.662);
tabRevalo.set(1940,17732.662);
tabRevalo.set(1941,11826.912);
tabRevalo.set(1942,7600);
tabRevalo.set(1943,7600);
tabRevalo.set(1944,6138.862);
tabRevalo.set(1945,2027.358);
tabRevalo.set(1946,1668.841);

var agePlusTot;
var trimestresRequis;
var ageAutoTauxPlein;

function convertirFrancEuro(salaire){
    return salaire*0.152449;
}

function revaloriser(annee, salaire){
    return tabRevalo.get(annee)*salaire;
}



// fonction calcul SAM : parcours de la liste -> si FRF -> conversion euro puis revalo sinon revalo directement, faire la somme
// de tous les résultats


function calculTauxPlein(dateNaissance, trimestres){
    if (dateNaissance.year >= 1973){
        agePlusTot = 62;
        trimestresRequis = 172;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year >= 1970){
        agePlusTot = 62;
        trimestresRequis = 171;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year >= 1967){
        agePlusTot = 62;
        trimestresRequis = 170;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year >= 1964){
        agePlusTot = 62;
        trimestresRequis = 169;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year >= 1961){
        agePlusTot = 62;
        trimestresRequis = 168;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year >= 1958){
        agePlusTot = 62;
        trimestresRequis = 167;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year >= 1955){
        agePlusTot = 62;
        trimestresRequis = 166;
        ageAutoTauxPlein = 67;
    }
    else if (dateNaissance.year == 1954){
        agePlusTot = 61.583;
        trimestresRequis = 165;
        ageAutoTauxPlein = 66.583;
    }
    else if (dateNaissance.year == 1953){
        agePlusTot = 61.167;
        trimestresRequis = 165;
        ageAutoTauxPlein = 66.167;
    }
    else if (dateNaissance.year == 1952){
        agePlusTot = 60.75;
        trimestresRequis = 164;
        ageAutoTauxPlein = 65.75;
    }
    else if (dateNaissance.year == 1951){
        if(dateNaissance.month >= 7){
            agePlusTot = 60.33;
            trimestresRequis = 163;
            ageAutoTauxPlein = 65.33;
        }
        else {
            agePlusTot = 60;
            trimestresRequis = 163;
            ageAutoTauxPlein = 65;
        }

    }


}

console.log(convertirFrancEuro(4000));
console.log(revaloriser(2014,1789));